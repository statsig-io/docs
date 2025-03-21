---
title: Vercel
keywords:
  - owner:brock
last_update:
  date: 2025-02-26
---

## Overview

Statsig integrations with Vercel on Vercel's Marketplace, allowing you to provision Statsig projects from within Vercel. With the app, you can view flags and experiments from directly within Vercel, quickly rolling out and rolling back features.
The integration also directly hooks into Vercel's Edge Config, providing low latency for gate and experiment evaluations in [Vercel Edge Functions](https://vercel.com/features/edge-functions).

## Install Integration

Head over to the [Vercel Marketplace](https://vercel.com/integrations/statsig) to install the Statsig app for Vercel. You'll be prompted to create a new Statsig project.

![image](/img/vercel_marketplace_install.png)

Enable Edge Config Syncing to have Statsig automatically push configs into Vercel's Edge Config for fast SDK Initialization. After installing the application, you can connect the application to a Vercel project to automatically pull in env vars to use in your project automatically.

In the application page, you'll be able to go to your newly created Statsig project and configure gates and experiments. All gates and experiments will automatically be synced into Vercel for quick status checks and access.

![image](/img/vercel_marketplace_view.png)

## Using Flags SDK in NextJS

If you're using NextJS in your Vercel project, you can use Statsig through Flags SDK and take advantage of built in precompute patterns for improved performance. See the [Statsig Adapter for Flags SDK docs](https://flags-sdk.dev/docs/api-reference/adapters/statsig) for steps on how to get started.
Note that the marketplace app sets all required environment variables for the Flags SDK by default for a quick setup process.

## Using the Statsig SDK

If you aren't using NextJS, or prefer to use Statsig SDK's directly, you can follow the following steps to use Statsig SDK in your Vercel project.

First up, you'll need to install the statsig sdk and the vercel edge config data adapter.

```bash
npm install --save statsig-node-lite statsig-node-vercel @vercel/edge-config @vercel/functions
```

Then, you need to hook it all up. This involves:

1. Creating a new `edgeConfigClient` with the Edge Config Connection String you were given previously
2. Creating an `EdgeConfigDataAdapter` that uses the `edgeConfigClient` and the Edge Config Item Key you were given previously
3. Initializing the statsig sdk with the DataAdapter
4. Checking a Gate
5. Flushing events to statsig

If you've used a statsig sdk in the past, step 3 should be familiar, though you'll be telling the sdk to initialize from the Edge Config instead of from the statsig backend.

In our example, we are checking a gate called "test_vercel_edgeconfig" that is set to pass for 50% of everyone. We create a random userID on every request, and we should see it evaluate to true 50% of the time.

### 1. The `edgeConfigClient`

```
const edgeConfigClient = createClient(env.EXPERIMENTATION_CONFIG);
```

### 2. The `EdgeConfigDataAdapter`

```
const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: env.EXPERIMENTATION_CONFIG_ITEM_KEY,
});
```

The adapter takes two arguments:

- The `edgeConfigClient` you just created
- The `edgeConfigItemKey` you were given when you created the integration (you can find it again in [Project Settings -> Integrations](https://console.statsig.com/integrations) - "vercel edge config")

### 2. SDK Initialization

```
await statsig.initialize(
    env.STATSIG_SERVER_API_KEY,
    {
      dataAdapter: dataAdapter,
      initStrategyForIDLists: 'none',
      disableIdListsSync: true
    },
);
```

SDK initialization takes two arguments:

- Your statsig secret key. This is available from the [Project Settings](https://console.statsig.com/api_keys) page in the Statsig Console. This is used to authenticate your requests to the statsig backend. In this example, we've configured it as an environment variable
- An options object. We are using the `dataAdapter` property to hook up the Edge Config to the SDK. We're also disabling the ID list sync to speed up initialization

### 3. Checking a Gate

```
const result = statsig.checkGateSync(
  {
    userID: String(randomIntFromInterval(1, 10000000)),
  },
  "test_vercel_edgeconfig",
);
```

This is a gate check in code. The first parameter is the `StatsigUser` object you are checking, and the second is the gate name. Refer to the [node sdk documentation](/server/nodejsServerSDK) for how to check other entities like experiments and dynamic configs. Here, we have created a user with a random userID for every evaluation to illustrate a gate with a partial rollout working.

### 4. Flushing Events

```
waitUntil(statsig.flush(1000));
```

This flushes all events from the sdk to statsig. Without this, you wont be able to get diagnostic information in the Statsig Console, nor any event data you logged. We also set a 1s timeout to ensure the flush wont block the response.

### Putting it all together

```
import { createClient } from "@vercel/edge-config";
import { waitUntil } from '@vercel/functions';
import statsig from 'statsig-node';
import { EdgeConfigDataAdapter } from "statsig-node-vercel";

export const config = {
  'runtime': 'edge'
};

export default async function handler(req, res, ctx) {
    const edgeConfigClient = createClient(env.EXPERIMENTATION_CONFIG);
    const dataAdapter = new EdgeConfigDataAdapter({
        edgeConfigClient: edgeConfigClient,
        edgeConfigItemKey: env.EXPERIMENTATION_CONFIG_ITEM_KEY,
    });

    await statsig.initialize(
        env.STATSIG_SERVER_API_KEY,
        {
            dataAdapter: dataAdapter,
            initStrategyForIDLists: 'none',
            disableIdListsSync: true
        },
    );
    const result = statsig.checkGateSync(
        {
          userID: String(randomIntFromInterval(1, 10000000)),
        },
        "test_vercel_edgeconfig",
      );

    waitUntil(statsig.flush(1000));
    return new Response(JSON.stringify({ result }));
};

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

If you want to check on the evaluations you are getting, you can go to the gate you created for this example and look at the evaluations in the Diagnostics tab.

![Diagnostics Stream](https://github.com/user-attachments/assets/2b690181-0103-43be-b791-7cf0a7db66eb)

And there you have it - a working Vercel Edge Config integration for Statsig.

## Other Considerations

### Polling for updates v5.13.0+

The SDK cannot poll for updates across requests since Vercel Edge Functions do not allow for timers outside of the request handler.
To solve for this, a manual sync API is available for independently updating the SDK internal store.

For example, you could persist the last time you synced, and define an interval with which you are okay using a potentially stale config. There is a tradeoff here between the frequency with which your integration will make an external request to update the config, and the likelihood that your evaluation results are up to date.

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

Vercel Edge Config has maximum size limits that may prevent Statsig from pushing configs into your Edge Config. See [here](https://vercel.com/docs/concepts/edge-network/edge-config/edge-config-limits) for the latest Vercel Edge Config limits.

### Unsupported Features

Statsig ID Lists are not currently synced into Vercel Edge Config. If you rely on large (>1000) ID lists, you will not be able to check them in your Vercel edge functions. This is why we set `initStrategyForIDLists: 'none'` in the SDK initialization.

## Connect an Existing Account

Use the 'Connect Account' flow in the [Vercel Marketplace](https://vercel.com/integrations/statsig) app. In the setup, you'll be able to map Statsig projects to Edge Configs, and Statsig will keep project configs synced with the specified Edge Config.

<img src="https://user-images.githubusercontent.com/87334575/205374493-08dfc561-2095-45f2-be10-bba1a1958bf9.png" width="474" height="400" />

After setting up the mapping, you'll be given an Edge Config Connection String, and Edge Config Item Key. Copy these values for use in env vars in the code snippets above - but if you need them again, you can always get back to it in the Statsig console by navigating to [Project Settings -> Integrations](https://console.statsig.com/integrations), and then select **Vercel Edge Config**
