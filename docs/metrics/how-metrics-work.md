---
title: How Metrics Work on Statsig
sidebar_label: How Metrics Work
slug: /metrics/how-metrics-work
keywords:
  - owner:shubham
last_update:
  date: 2025-07-23
---

# How Metrics Work on Statsig

:::tip[Warehouse Native users]
You're viewing the Cloud docs for this page. Metrics and experiments behave differently in Warehouse Native. Read more in [About Warehouse Native](/statsig-warehouse-native/introduction#how-warehouse-native-works).
:::

A metric in Statsig is a numeric value for each user on a given day. This value can be aggregated across the entire user base or a subset, such as the test or control group of an experiment.

For example, say one user made two purchases on September 1st, and another made only one. These values can be aggregated across multiple users to calculate the total number of purchases across all users on September 1st.

Statsig only computes metrics from logged raw events when they're logged in a production environment. Logs from other environments are not used in metric computations, and they won't auto-generate new metrics.

## Two Sources of Statsig Metrics

There are two fundamental sources of metrics in Statsig:

1. **Raw Events**
   - Statsig [auto-generates certain metrics](/metrics/metrics-from-events) such as **event_count** and user accounting metrics from these events
   - You can also define [custom metrics](/metrics/custom-dau) using your logged raw events
2. **Precomputed Metrics** - You can provide these pre-computed values to Statsig

Statsig's Stats Engine joins these metrics with your exposure events from feature gates and experiments to compute experiment results and analytics.

![Image](/img/data_flow_cloud.png)

:::info How are events and metrics billed?
Each event (or a row when importing from your data warehouse) is billed once, regardless of how many experiments the event is used in.
:::
