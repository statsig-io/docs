---
title: Cloudflare KV
keywords:
  - owner:brock
last_update:
  date: 2025-07-23
---

## Overview
Statsig’s Cloudflare integration pushes Statsig Configs to Cloudflare KV, providing low latency for gate and experiment evaluations in Cloudflare Workers.

## Configure Integration
First, enable the Cloudflare integration in the Statsig Console.

Navigate to [Project Settings -> Integrations](https://console.statsig.com/integrations), and then select Cloudflare

You will need to input the following:
- **Cloudflare Account ID**: Can be found in Cloudflare portal under **Account Home** -> **Workers**, on the right hand side
- **KV Namespace ID**: We recommend creating a new KV namespace for your Statsig integration. You can create a new namespace, and get the ID from **Account Home** -> **Storage and Databases** -> **KV**, and copy it from the table view.
- **Cloudflare API Key**: Can be found in Cloudflare portal under **Account Home** -> **Profile** -> **API Tokens**. We need a token with Account.Workers KV Storage Edit Permissions.

There is also an option to filter the configs that are synced into your KV namespace by a [/sdk-keys/target-apps](Target App).  You may wish to enable this in the future as the size of your config payload grows.  For now, you can leave this unchecked.

After filling this out, click **Enable**.

Within a minute, the Statsig backend should generate a config payload from your statsig project and push it into your KV namespace.  Under your KV namespace, navigate to **KV Pairs** - you should see an entry starting with the prefix `statsig-`.  The next part of that is your project ID.  Copy that to the clipboard - you'll need it later.

## Add the Statsig SDK to your Worker
Now lets hook up the SDK to read that config payload and use it for gate and experiment checks in your worker.  If you've never created a worker before, you can follow the instructions [here](https://developers.cloudflare.com/workers/).

The remainder of this document assumes you are using nodejs.  If you are using another language, see the sdk language specific documentation for how to apply the implementation to that language.  You may need to implement a custom data adapter for your language -  we currently only offer the `statsig-node-cloudflare-kv` package in node.

First up, you'll need to install the statsig sdk and the cloudflare kv data adapter.

```bash
npm install statsig-node statsig-node-cloudflare-kv
```

Then, you need to hook it all up.  This involves:
1. Creating a new `CloudflareKVDataAdapter` with the namespace you set up previously and your statsig project id
2. Initializing the statsig sdk with the DataAdapter
3. Checking a Gate
4. Flushing events to statsig

If you've used a statsig sdk in the past, step 2 should be familiar, though you'll be telling the sdk to initialize from the KV store instead of from the statsig backend.

In our example, we are checking a gate called "test_cloudflare_sync" that is set to pass for 50% of everyone.  We create a random userID on every request, and we should see it evaluate to true 50% of the time.

### 1. The `CloudflareKVDataAdapter`
```
const dataAdapter = new CloudflareKVDataAdapter(env.STATSIG_KV, 'statsig-YOUR_COMPANY_ID');
```

The adapter takes two arguments:
- The KV namespace you set up previously.  This must be accessible and [configured as a binding for the worker](https://developers.cloudflare.com/kv/concepts/kv-bindings/)
- Your statsig project id.  This is the string that comes after `statsig-` in the KV namespace prefix.  You can also find it in any url when you are on the Statsig Console.  For example, `https://console.statsig.com/7LhuarZImmfNdtl9IsDJeX/gates/test_cloudflare_sync/diagnostics` has a project ID of `7LhuarZImmfNdtl9IsDJeX`


### 2. SDK Initialization
```
const res = await statsig.initialize(
    env.STATSIG_SECRET_KEY,
    { 
      dataAdapter: dataAdapter,
      postLogsRetryLimit: 0,
      initStrategyForIDLists: 'none',
      initStrategyForIP3Country: 'none',
      disableIdListsSync: true,
      disableRulesetsSync: true,
    },
);
```
SDK initialization takes two arguments:
- Your statsig secret key.  This is available from the [Project Settings](https://console.statsig.com/api_keys) page in the Statsig Console.  This is used to authenticate your requests to the statsig backend.  In this example, we've configured it as an environment variable (set this in the cloudflare dashboard under Worker > Settings > Variables and Secrets)
- An options object.  We are using the `dataAdapter` property to hook up the Cloudflare KV store to the SDK. We're also disabling the ID list sync to speed up initialization


### 3. Checking a Gate
```
const result = statsig.checkGateSync(
  {
    userID: String(randomIntFromInterval(1, 10000000)),
  },
  "test_cloudflare_sync",
);
```

This is a gate check in code.  The first parameter is the `StatsigUser` object you are checking, and the second is the gate name.  Refer to the [node sdk documentation](/server/nodejsServerSDK) for how to check other entities like experiments and dynamic configs.  Here, we have created a user with a random userID for every evaluation to illustrate a gate with a partial rollout working.

### 4. Flushing Events

```
ctx.waitUntil(statsig.flush(1000));
```

This flushes all events from the sdk to statsig.  Without this, you wont be able to get diagnostic information in the Statsig Console, nor any event data you logged. We also set a 1s timeout to ensure the flush wont block the response.

### Putting it all together

```
import { CloudflareKVDataAdapter } from 'statsig-node-cloudflare-kv';
import statsig from 'statsig-node';

export default {
  async fetch(request, env, ctx) {
    const dataAdapter = new CloudflareKVDataAdapter(env.STATSIG_KV, 'statsig-YOUR_COMPANY_ID');
    const res = await statsig.initialize(
      env.STATSIG_SECRET_KEY,
      { 
        dataAdapter: dataAdapter,
        postLogsRetryLimit: 0,
        initStrategyForIDLists: 'none',
        initStrategyForIP3Country: 'none',
        disableIdListsSync: true,
        disableRulesetsSync: true,
    },
    );

    const result = statsig.checkGateSync(
      {
        userID: String(randomIntFromInterval(1, 10000000)),
      },
      "test_cloudflare_sync",
    );
    ctx.waitUntil(statsig.flush(1000));
    return new Response('Hello World! + ' + JSON.stringify(result));
  },
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

If you want to check on the evaluations you are getting, you can go to the gate you created for this example and look at the evaluations in the Diagnostics tab.

![Diagnostics Stream](https://github.com/user-attachments/assets/1cc865ed-e15c-41a4-8979-24e1d457a7b1)

And there you have it - a working Cloudflare KV integration for Statsig. 

## Other Considerations

### Polling for updates
The SDK cannot poll for updates across requests since [Cloudflare does not allow for timers**](https://developers.cloudflare.com/workers/reference/security-model/#step-1-disallow-timers-and-multi-threading).
To solve for this, a manual sync API is available for independently updating the SDK internal store.

For example, you could persist the last time you synced, and define an interval with which you are okay using a potentially stale config.  There is a tradeoff here between the frequency with which your integration will make an external request to update the config, and the likelihood that your evaluation results are up to date.
```
if (env.lastSyncTime < Date.now() - env.syncInterval) {
  env.lastSyncTime = Date.now();
  context.waitUntil(statsig.syncConfigSpecs());
}
```

### Flushing events
The SDK enqueues logged events and flushes them in batches. In order to ensure events are properly flushed, we recommend calling flush using context.waitUntil. This will keep the request handler alive until events are flushed without blocking the response.

```
context.waitUntil(statsig.flush());
```

### Size Limits
Cloudflare KV has maximum size limits that may prevent Statsig from pushing configs into your KV. See [here](https://developers.cloudflare.com/workers/platform/limits/#kv-limits) for the latest Cloudflare KV limits.  If your payload continues to grow, you will need to set the option to filter the payload by a [/sdk-keys/target-apps](Target App) in the integration settings.

### Unsupported Features
Statsig ID Lists are not currently synced into Cloudflare KVs.  If you rely on large (>1000) ID lists, you will not be able to check them in your Cloudflare Worker.
