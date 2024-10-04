---
title: How Metrics Work on Statsig
sidebar_label: How Metrics Work
slug: /metrics/how-metrics-work
---

# How Metrics Work on Statsig

A metric in Statsig is a numeric value for each user on a given day. This value can be aggregated across the entire user base or a subset, such as the test group of an experiment. 

For example, say a user made two purchases on September 1st. This value can be aggregated across multiple users to calculate the total number of purchases across all users on September 1st.


## Two Sources of Statsig Metrics 

There are two sources of metrics in Statsig:
1. **Raw Events** - Statsig [auto-generates certain metrics](/metrics/metrics-from-events) such as **event_count** and **event_dau** from these events. Statsig stopped auto computing **event_dau** metric after October 16, 2024. However, you can create your own metric that function like event_dau via [Custom Metrics](/metrics/custom-dau)
2. **Precomputed Metrics** - you can provide these pre-computed values to Statsig 

Statsig's Stats Engine joins these metrics with your exposure events from feature gates and experiments to compute experiment results and analytics.

![image](https://user-images.githubusercontent.com/1315028/196443554-591d7547-d4c3-4cd3-8725-ea8730278a55.png)

:::info How are events and metrics billed?
Each event (or a row when importing from your data warehouse) is billed once, regardless of how many experiments the event is used in.
:::
