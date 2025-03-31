---
title: Census
keywords:
  - owner:brock
last_update:
  date: 2023-09-22
---

## Overview

Enabling the [Census](https://getcensus.com/) integration for Statsig allows Statsig to receive events from Census. This enables you to ingest data into Statsig from any sources that Census supports.

You can find all events that Statsig receives from Census in the [Metrics](/metrics) tab in the Statsig console. Statsig will automatically include these events in [Pulse](/pulse/read-pulse) and [Experiment](/experiments-plus/monitor) results for your feature gates and experiments respectively.

## Configuring Incoming Events

1. From the [API Keys](https://console.statsig.com/api_keys) tab in the Statsig console, copy the Statsig "Server Secret Key”.
2. From census, create a new [destination](https://docs.getcensus.com/destinations/overview) and select Statsig from the list of options.
3. Paste the Statsig secret into the field and click save.
![](https://github.com/statsig-io/docs/assets/111380336/b3134399-288d-4a0f-b4d2-4b88980f0718)
4. Create a Sync to the new Statsig destination (see [Sync Configuration](#sync-configuration) section below)
5. On the Statsig [Integrations](https://console.statsig.com/integrations) page, enable the Census integration.

### Sync Configuration

A sync key is required to uniquely identify each event.

![](https://github.com/statsig-io/docs/assets/111380336/e5d1154d-bd55-48d8-a300-13d96a89a0c8)

The following fields are required when mapping to Statsig events.

- `User ID` -> `userID`
- `Event Name` -> `eventName`
- `Timestamp` -> `timestamp`
- `Value` -> `value`

![](https://github.com/statsig-io/docs/assets/111380336/7fce9183-312c-4b47-90c4-b48b0479ecca))

All other fields will be included in the `metadata` section of the mapped Statsig event.

### Custom ID Mapping

The Census integration allows the mapping of arbitrary fields to Statsig Custom IDs. To do this, visit the Census panel on the Statsig [Integrations](https://console.statsig.com/integrations) page and look for the "Map Identifier" section. Here you can choose fields you would like mapped to a Custom ID.

Note: The input Event Field must match the exact spelling as in the original Census event.

![](https://user-images.githubusercontent.com/95646168/213269548-e6457527-c938-44fd-9360-1f3fd7af2fac.png)
