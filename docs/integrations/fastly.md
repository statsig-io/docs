---
title: Fastly
keywords:
  - owner:brock
last_update:
  date: 2025-09-25
---

## Overview
Statsig’s Fastly integration pushes Statsig Configs to Fastly KV, providing low latency for gate and experiment evaluations in your Fastly project.

## Configure Integration
First, enable the Fastly integration in the Statsig Console.

Navigate to [Project Settings -> Integrations](https://console.statsig.com/integrations), and then select Fastly

You will need to input the following:
- **Fastly API Key** - Can be found in Fastly portal under **Account** -> **API Tokens**. We need an "Automation token" with "Engineer Roles" and the following scopes: "global" and "global:read"
- **Store Type** - Select "KV Store"
- **KV Store ID**- You can create a new KV Store for this integration, or reuse an existing one

There is also an option to filter the configs that are synced into your KV namespace by a [/sdk-keys/target-apps](Target App).  You may wish to enable this in the future as the size of your config payload grows.  For now, you can leave this unchecked.

After filling this out, click **Enable**.

Within a minute, the Statsig backend should generate a config payload from your statsig project and push it into your store.  Under your KV Store, look for a key starting with the prefix `statsig-`.  This is the key to your statsig config specs in the Fastly KV store.

## Add the Statsig SDK to your Worker
Now lets hook up the SDK to read that config payload and use it for gate and experiment checks in your fastly compute.

The remainder of this document assumes you are using Node.js.  If you are using another language, see the sdk language specific documentation for how to apply the implementation to that language.  You may need to implement a custom data adapter for your language -  we currently only offer the `statsig-node-fastly-kv` package in node. This data adapter will work out of the box for statsig usage in the fastly/js-compute runtime. Note this data adapter currently only supports Fastly KV store.

First up, you'll need to install the statsig **node-lite** sdk and the fastly kv data adapter.

```bash
npm install statsig-node-lite statsig-node-fastly-kv
```

Then, you need to hook it all up.  This involves:
1. Creating a new `FastlyDataAdapter` with the namespace you set up previously and your statsig project id
2. Initializing the statsig sdk with the DataAdapter
3. Checking a Gate
4. Flushing events to statsig

If you've used a statsig sdk in the past, step 2 should be familiar, though you'll be telling the sdk to initialize from the KV store instead of from the statsig backend.

In our example, we are checking a gate called "test_fastly" that is set to pass for 50% of everyone.  We create a random userID on every request, and we should see it evaluate to true 50% of the time.

### Imports
Import the statsig **node-lite** sdk and the statsig fastly kv adapter.
```
import Statsig from 'statsig-node-lite';
import { FastlyDataAdapter } from 'statsig-node-fastly-kv';
```

### 1. The `FastlyDataAdapter`
```
const dataAdapter = new FastlyDataAdapter(<YOUR_KV_STORE_NAME>, '<CONFIG_SPEC_KEY>');
```

The adapter takes two arguments:
- Your KV store name.
  - Your KV store must be linked to your compute service. To do so, go to **KV STORES** -> **Your KV Store** -> **Linked Services** -> **Link Service**
- Your KV store item key. (Will begin with "statsig-************...")


### 2. SDK Initialization
```
await Statsig.initialize("secret-******************", {
      dataAdapter,
      disableIdListsSync: true,
      initStrategyForIDLists: 'none',
    });
```

SDK initialization takes two arguments:
- Your statsig secret key.  This is available from the [Project Settings](https://console.statsig.com/api_keys) page in the Statsig Console.  This is used to authenticate your requests to the statsig backend.  In this example, we have hardcoded it for simplicity. In production environments, please protect your Statsig server key. Refer to this [Fastly documentation](https://www.fastly.com/documentation/reference/compute/ecp-env/) for using environemnt variables in the Compute Platform.
- An options object.  We are using the `dataAdapter` property to hook up the Fastly KV store to the SDK.  We're also disabling the ID list sync to speed up initialization



### 3. Checking a Gate
```
const result = Statsig.checkGateSync(
  {
    userID: String(randomIntFromInterval(1, 10000000)),
  },
  "test_fastly",
);
```

This is a gate check in code.  The first parameter is the `StatsigUser` object you are checking, and the second is the gate name.  Refer to the [node sdk documentation](/server/nodejsServerSDK) for how to check other entities like experiments and dynamic configs.  Here, we have created a user with a random userID for every evaluation to illustrate a gate with a partial rollout working.

### 4. Flushing Events

```
await Statsig.flush();
```

This flushes all events from the sdk to statsig.  Without this, you wont be able to get diagnostic information in the Statsig Console, nor any event data you logged.

### Putting it all together

```
/// <reference types="@fastly/js-compute" />
import { FastlyDataAdapter } from 'statsig-node-fastly-kv';
import Statsig from 'statsig-node-lite';

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  try {
    const dataAdapter = new FastlyDataAdapter(<YOUR_KV_NAME>, <CONFIG_SPEC_KEY>);

    await Statsig.initialize("secret-**********************", {
      dataAdapter,
      disableIdListsSync: true,
      initStrategyForIDLists: 'none',
    });

    const userID = String(randomIntFromInterval(1, 10000000));

    const result = Statsig.checkGateSync({
      userID: String(randomIntFromInterval(1, 10000000)),
    }, "test_fastly");

    await Statsig.flush();

    return new Response(JSON.stringify({
      userID: userID,
      gateResult: result
    }), {
      status: 200,
      headers: new Headers({ "Content-Type": "application/json" }),
    });

  } catch (error) {
    console.error('Error in handleRequest:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

If you want to check on the evaluations you are getting, you can go to the gate you created for this example and look at the evaluations in the Diagnostics tab.

![Diagnostics Stream](https://github.com/user-attachments/assets/1cc865ed-e15c-41a4-8979-24e1d457a7b1)

And there you have it - a working Fastly KV integration for Statsig. 

## Other Considerations

### Polling for updates v5.13.0+
The SDK cannot poll for updates across requests since Fastly does not allow for timers.
To solve for this, a manual sync API is available for independently updating the SDK internal store.

For example, you could persist the last time you synced, and define an interval with which you are okay using a potentially stale config.  There is a tradeoff here between the frequency with which your integration will make an external request to update the config, and the likelihood that your evaluation results are up to date.
```
if (env.lastSyncTime < Date.now() - env.syncInterval) {
  env.lastSyncTime = Date.now();
  event.waitUntil(statsig.syncConfigSpecs());
}
```

### Flushing events v4.16.0+
The SDK enqueues logged events and flushes them in batches. In order to ensure events are properly flushed, we recommend calling flush using event.waitUntil. This will keep the request handler alive until events are flushed without blocking the response.

```
event.waitUntil(statsig.flush());
```

### Size Limits
Fastly Config Store has maximum size limits that may prevent Statsig from pushing configs into Fastly. See [here](https://docs.fastly.com/products/edge-data-storage) for the latest Config Store limits. If your payload continues to grow, you will need to set the option to filter the payload by a [/sdk-keys/target-apps](Target App) in the integration settings.

### Unsupported Features
Statsig ID Lists are not currently synced into Fastly KVs or Config Stores.  If you rely on large (>1000) ID lists, you will not be able to check them in your Fastly compute services.  This is why we set `initStrategyForIDLists: 'none'` in the SDK initialization.
