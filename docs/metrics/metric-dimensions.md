---
title: Metric Dimensions
sidebar_label: Metric Dimensions
slug: /metrics/101/metric-dimensions
---

# Metric Dimensions

Statsig enables you to breakdown metrics into a single set of non-overlapping dimensions for deep dive analyses. For example, you can breakdown an event such as **add-to-cart** into product categories such as _sports_, _toys_, _appliances_, _electronics_. To do this, you would simply log **add-to-cart** events and provide the product category in the event's **value** field. See the [Statsig SDK reference guide](client/jsClientSDK#step5) to learn more.  

Providing the **value** field with logged events allows you to break down the impact on the total **add-to-cart** events by category in Pulse as shown below. This enables you to zero in on the category that's most impacted by your experiment. 

![image](https://user-images.githubusercontent.com/1315028/162332284-259ea614-8cb6-4c9d-aebd-3e41f9092a64.png)

Statsig recommends keeping the options used for the **value** parameter to fewer than 20. While Statsig can handle more, the console will prioritize tracking the most common dimensions and consolidate less frequent values into the "other" bucket.

Statsig also supports metric dimensions for custom metrics that are **Aggregations**. To set this up, log your dimension as a **value** and the number to be tallied as a metadata field. 