---
title: Dimension Analysis
slug: /statsig-warehouse-native/configuration/cohort-metrics
sidebar_label: Dimension Analysis
description: Break down Metrics by Dimensions
---

# Dimension Analysis

You can break down an experiment metric result by unit or action dimensions in pulse and explore queries. This is a powerful way to understand who, or what, is causing the metric movement - or lack of movement - that you're seeing in Pulse results.

![dimension example](https://github.com/user-attachments/assets/550ac5d6-5e83-42aa-9db7-8618c200beef)

You can also configure [Differential Impact Detection](/experiments-plus/differential-impact-detection) to help Statsig automatically flag when different classes of users are responding differently to your experiments.

To see the Pulse result breakdowns for all categories within a metric, click on the (+) sign next to the metric.

# Unit Dimensions

Unit dimensions refer to unit-level attributes that are either part of the user object you log to Statsig, provide as part of your [assignment data](./assignment-sources.md), or provide via an [Entity Property](./entity-properties.md). Examples of these attributes are operating system, country, region, or user segments.

Using [explore queries](/pulse/custom-queries), you can filter to specific unit dimensions or group results by a dimension. For example, you could "See results for users in the US", or "See results for users using iOS, grouped by their country".

The dimension will be chosen based on the last available record at or before exposure. In other words, information from AFTER the unit is exposed to a given experiment will _not_ be used in the experiment analysis, since that could potentially lead to data leakage and imbalanced comparisons.

# Metric Dimensions

Metric Dimensions break down a metric's results based on the values in columns from your [metric source](./metric-sources.md) for a given metric. You configure these breakdowns per-metric, after which they'll be calculated for that metric across all pulse results.

Note that, unlike Unit Dimensions, these dimensions are not mutually exclusive. For example, a with a user dimension a user can only be from one country for the purpose of pulse analysis, but a user on an e-commerce website could buy all of "clothes", "books", and "snacks" within a "total purchases" metric and contribute to each of those dimensions as well as the overall value.

# Details

By default, dimensional analysis:

- only considers dimensions with at least 100 units in the experiment that participated (had a non-zero value)
- chooses the top 10 dimensions by total value, and puts all others into an "OTHER" bucket.

This is to avoid extreme results and cases where assumptions of centrality do not hold due to low sample on a specific dimension, and to avoid excessive multiple-comparisons on the tail-end of dimensional breakdown. This is configurable, but controlled due to the potential for error - reach out to Statsig support to see if your use case makes sense.
