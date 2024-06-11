---
title: Forwarded Data
slug: /statsig-warehouse-native/guides/forwarded-data
sidebar_label: Forwarded Data
---

If you log events or exposures to Statsig's SDK, Statsig will put that data back in your warehouse in near-realtime, on-demand.

## Exposures

Logging exposures with Statsig means you'll get real-time diagnostics on the Statsig console, as well as real-time aggregations like exposures by hour.

You can also specify a table for these to be exported to inside of Statsig's staging environment in your warehouse.

When you run Pulse analysis, raw exposures for the experiment you're loading will be fast-forwarded to catch up with the real-time stream. This means you'll get all of the users in your experiment and see Pulse results as fresh as ~15m (assuming events and metrics come in at the same speed).

Under the covers, we perform a just-in-time update of exposures in your warehouse when Pulse is loaded, for the first 1 million exposures. After that, the exposures are batched, deduplicated and written to your warehouse once a day.

Each day, a deduplicated digest will be exported to your warehouse to ensure consistency. This will be deduplicated with the above as part of the standard Pulse Pipeline.

## Events

If you're using our SDKs to capture custom events, we'll export these events to your warehouse hourly. You can see Pulse results on metrics derived from those events as fresh as ~1hour.
