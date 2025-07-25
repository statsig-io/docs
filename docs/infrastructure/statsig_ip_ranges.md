---
title: Statsig IP Ranges
keywords:
  - owner:eric
last_update:
  date: 2025-03-21
---

Statsig reserves the following IP addresses and ranges for use by its services. If you have a network policy set up inside your systems, you should allowlist
all of the IPs below or select IPs based on the direction of network requests.

## Outbound (Statsig -> Your Servers)

These IPs are used when Statsig sends requests to your servers/systems. For example, Statsig imports data from your data warehouse that has a network policy
allowing only certain IPs.

- 20.29.232.235

- 20.190.14.199

- 34.138.242.148/30 (4 addresses)

- 34.126.186.120/30 (4 addresses)

- 34.168.242.172/30 (4 addresses)

- 34.38.207.120/30 (4 addresses)

:::info
Webhook requests can be very high volume and may not be initiated from these IP Ranges. Consider using [Webhook Signatures](/integrations/event_webhook#webhook-signature) to validate webhook requests.
:::

## Inbound (Your Clients/Servers -> Statsig)

These IPs back the domains (e.g. `api.statsig.com`, `featuregates.org`, `statsigapi.net`) of Statsig APIs.

- 34.120.214.181

- 34.128.128.0/29 (8 addresses)
