---
title: Analysis with hierarchical ID
sidebar_label: Hierarchical ID
slug: /metrics/hierarchical-id
---

# Analysis with hierarchical ID

If your IDs have a "one-to-many" or "root-to-leaf" relationship, you can do two kinds of analysis

1. You can choose your randomization unit to be either root or leaf, with our support of multiple IDs -- You can specify the different IDs in assignment, or provide an ID mapping table when you set up the experiment.

2. You can choose your randomization unit to be root and do analysis on both roof and leaf. This doc covers how.

For instance, consider Uber, where the unit of randomization is "drivers." Each driver may complete multiple "rides." To measure the impact of an experiment of “sending different notifications to different drivers” on "revenue per ride," you should set up the "revenue per ride" metric in the Metrics Catalog as a ratio metric. The numerator is the sum of revenue and the denominator is the count of rides (or count distinct of ride_id, depending on your data model)

In the Stats Engine, we apply the delta method to calculate variance and confidence intervals.

- For mean metrics, we store a value indicating the number of observations per **exposed** unit in the **records** column of the staging data. This serves as the denominator or cluster-size value for delta calculations.
- For general ratio metrics, we track the two component metrics (the ratio and the denominator) as independent metrics and combine them during the pulse analysis to derive a single metric from them.

For details on how we apply the delta method, visit: [Statsig - Delta Method Methodology](/stats-engine/methodologies/delta-method).

This logic also applies to analyzing event-level outcomes, such as average purchase value, where each session represents a leaf, but randomization occurs at the user level.
