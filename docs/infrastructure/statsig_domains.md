---
title: Statsig Domains
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

## Statsig User Segment Storage API

The domain is used by our server SDKs to download the segment list for your project.

- `idliststorage.blob.core.windows.net`
