---
title: Statsig Domains
keywords:
  - owner:eric
last_update:
  date: 2025-07-23
---

Statsig uses the following domain names for its services. If you have a network policy set up inside your systems, you should allowlist
all of the domains below or select domains based on the features you use.

## Statsig Console

- `console.statsig.com`
- `cdn.console.statsig.com`
- `console.statsigcdn.com`

## Statsig API Services

These domains are used by our SDKs to communicate with our backend for feature gates, dynamic configs and event logging. They are also used for other Statsig APIs, e.g. console APIs, integrations.

- `api.statsig.com`
- `featuregates.org`
- `statsigapi.net`
- `events.statsigapi.net`
- `api.statsigcdn.com`
- `featureassets.org`
- `assetsconfigcdn.org`
- `prodregistryv2.org`
- `cloudflare-dns.com`
- `beyondwickedmapping.org`

Note that Statsig's SDKs may switch between these domains on-the-fly as part of our DNS resolution logic.

:::info Why such odd names?
We constantly and dynamically update these domains to prevent overzealous blocking from browser ad blockers. These are updated whenever they pick up the existing ones.
:::

### Don't care about ad-blockers?
Use the following approach to minimize the number of Statsig domains you need to whitelist. The [networkConfig](https://docs.statsig.com/client/javascript-sdk/#networkconfig-object) initialization option allows you to specify a single domain for both the initialization server and the log event server.

```js
new Statsig.StatsigClient('client-YOUR_KEY', {/* CONTEXT */}, {
  networkConfig: {
    initializeUrl: 'https://featureassets.org/v1/initialize',
    logEventUrl: 'https://prodregistryv2.org/v1/rgstr'
  }
});
```

### Server-side APIs
If you're just looking for a list of apis used by our backend/server sdks, you need to allow:

- `api.statsig.com`
- `statsigapi.net`
- `api.statsigcdn.com`
- `prodregistryv2.org`
- `idliststorage.blob.core.windows.net` (see below)

### Statsig User Segment Storage API

The domain is used by our server SDKs to download the segment list for your project.  If you do not use big id lists, you wont need this one.

- `idliststorage.blob.core.windows.net`
