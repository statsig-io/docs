---
title: Census
---

## Overview

Enabling the [Census](https://getcensus.com/) integration for Statsig allows Statsig to receive events from Census. This enables you to ingest data into Statsig from any sources that Census supports. 

You can find all events that Statsig receives from Census in the [Metrics](/metrics) tab in the Statsig console. Statsig will automatically include these events in  [Pulse](/pulse) and [Experiment](/experiments-plus/monitor) results for your feature gates and experiments respectively.

## Configuring Incoming Events

1. From the [API Keys](https://console.statsig.com/api_keys) tab in the Statsig console, copy the Statsig "Server Secret Key”.
2. Follow the steps in the [Census Webhook Guide](https://docs.getcensus.com/destinations/webhook) to create a new Webhook Destination. Enter `https://api.statsig.com/v1/webhooks/census_webhook?statsig_api_key={<SERVER_SECRET_KEY>}` as the Webhook URL.
3. Map the fields that Statsig will receive from Census. [See below](#mapping-configuration) for configuration options.
6. On the Statsig [Integrations](https://console.statsig.com/integrations) page, enable the Census integration.

### Mapping Configuration
Set up mappings for top-level fields that Statsig requires using the following keys:
- `event`
- `userID`
- `value`
- `timestamp`

![](https://user-images.githubusercontent.com/111380336/191574001-4f0bb28e-1436-4e3e-b255-ed28e2c5f837.png)

All other fields will be included in the `metadata` section of the mapped Statsig event.
