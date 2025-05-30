---
title: Statsig Domains
keywords:
  - owner:eric
last_update:
  date: 2025-03-12
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

And these as well:
- `beyondwickedmapping.org`

Note that Statsig's SDKs may switch between these domains on-the-fly as part of our DNS resolution logic.

:::info Why such odd names?
We constantly and dynamically update these domains to prevent overzealous blocking from browser ad blockers. These are updated whenever they pick up the existing ones.
:::

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
