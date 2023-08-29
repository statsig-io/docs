---
title: Statsig IP Ranges
---

Statsig reserves the following IP addresses and ranges for use by its services. If you have a network policy set up inside your systems, you should allowlist
all of the IPs below or select IPs based on the direction of network requests.

## Outbound (Statsig -> Your Servers)

These IPs are used when Statsig send requests to your servers/systems. For example, Statsig imports data from your data warehouse that has a network policy
allowing only certain IPs.

- 20.29.232.235
- 172.177.167.120
- 20.252.36.2
- 20.190.14.199

- 34.128.128.0/29 (8 addresses)
- 34.128.128.12/30 (4 addresses)

## Inbound (Your Clients/Servers -> Statsig)

These IPs back the domains (e.g. `api.statsig.com`, `featuregates.org`, `statsigapi.net`) of Statsig APIs.

- 40.125.127.28
- 20.94.21.149
- 52.139.250.209

- 34.120.214.181
- 34.128.128.8/30 (4 addresses)
