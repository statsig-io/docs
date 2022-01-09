---
title: Census
---

## Overview

Enabling the [Census](https://getcensus.com/) integration for Statsig will allow Statsig to receive events sent through Census, thereby any connectors available through Census to send data to Statsig.

Events received from Census will be visible and aggregated within the [Metrics](/metrics) tab in the Statsig Console. Events will also be included in any [Pulse](/pulse) and [Experiment](/experiments-plus/monitor) results you have.

## Configuration

1. Follow the steps in the [Census Webhook Guide](https://docs.getcensus.com/destinations/webhook)) to create a new Webhook Destination.
2. Go to the [Statsig dashboard](https://console.statsig.com/api_keys), find and copy the Statsig "Server Secret Key”.
3. In the Census Webhook configuration, provide `https://api.statsig.com/v1/webhooks/census_webhook?statsig_api_key={your server secret}` as the Webhook URL.
4. Provide a mapping for the fields being sent through Census. [See below](#mapping-configuration) for configuration options.
5. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the Census integration.

### Mapping Configuration
When mapping fields to the Statsig destination in Census, mapping fields to the following names will be used as top-level fields:
- event
- userID
- value

All others will be included in the `metadata` column of the ingested Statsig event.
![](https://user-images.githubusercontent.com/75151332/148701784-11dbe055-c8aa-42bc-b13f-f3e477217272.png)