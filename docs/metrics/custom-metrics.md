---
title: Custom Metrics
sidebar_label: Custom Metrics
slug: /metrics/custom-metrics
---

# Custom Metrics
You can create **Custom Metrics** using the custom events you ingest by filtering or aggregating events based on event metadata. You must include metadata along with the custom events when you log these events with Statsig.
For example, in addition to tracking overall **event_count** and **event_dau** for all events of type *purchase_event*, you may want to filter these metrics only for events where your users purchase a specific product category. 

Statsig supports four types of custom metrics:

| Metric Type | Description | Examples |
|-------------|-----------------------|---------|
| Event Count | **Total count of events** filtered by the _value_ and _metadata_ properties of an event type | **Add to Cart** event filtered by category type |
| User Count |  **Number of unique users** that trigger events filtered by the _value_ and _metadata_ of an event type| **Active Users** based on their views of a product category |
| Aggregation       | **Sum or Average** of the _value_ or _metadata_ property of an event type  | **Total Revenue**, **Average Revenue per Purchase** |
| Ratio  | **Rates** (e.g. cart conversion rate, purchase rate),  **Normalized Values** (e.g. sessions per user, items per cart) | **Cart Conversion Rate**, **Sessions per User** |

It's worth noting that the "average" in aggregation is the average of event value (average revenue per purchase per user), instead of the average of exposed units (average revenue per user). The latter is defined by sum.

See **Metrics 201** topic, [Creating Custom Metrics](/metrics/create), to learn how to create custom metrics for your product.
