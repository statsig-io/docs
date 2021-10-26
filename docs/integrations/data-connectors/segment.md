---
title: Segment
---

## Overview

Enabling the Segment integration for Statsig will allow Statsig to pull in your Segment events. This allows you to run experimentation using Statsig with all of your pre-existing events without requiring any additional logging.

Events received from Segment will be visible and aggregated within the [Metrics](/metrics) tab in the Statsig Console. Events will also be included in any [Pulse](/pulse) and [Experiment](/experiments-plus/monitor) results you have.

## Configuration

1. From the Destinations catalog page in the Segment App, click **Add Destination**.
2. Search for “Statsig” in the Destinations Catalog, and select the “Statsig” destination.
3. Choose which Source should send data to the “Statsig” destination.
4. Go to the [Statsig dashboard](https://console.statsig.com/api_keys), find and copy the Statsig "Server Secret Key”.
5. Enter the Statsig “Server Secret Key” in the “Statsig” destination settings in Segment.
6. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the Segment integration.
