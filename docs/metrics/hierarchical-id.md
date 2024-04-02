---
title: Analysis with hierarchical ID
sidebar_label: Hierarchical ID
slug: /metrics/hierarchical-id
---

# Analysis with hierarchical ID

If your ID has a "one-to-many" or "root-to-leaf" relationship, and your experiment assignment is at the root level, you can analyze outcomes measured at the leaf level as ratio metrics.

For instance, consider Uber, where the unit of randomization is "drivers." Each driver may complete multiple "rides." To measure the impact of an experiment of “sending different notifications to different drivers” on "revenue per ride," here's how our Stats Engine manages the calculation:

When you set up the metrics at the leaf level (”revenue per ride”) and run the experiment at the root level (”notifications for drivers”), we treat the leaf-level metric as a ratio metric (notably, our "mean" metric type is implicitly a ratio). We then apply the delta method to calculate variance and confidence intervals.

- For mean metrics, we store a value indicating the number of observations per **exposed** unit in the **records** column of the staging data. This serves as the denominator or cluster-size value for delta calculations.
- For general ratio metrics, we track the two component metrics (the ratio and the denominator) as independent metrics and combine them during the pulse analysis to derive a single metric from them.

For details on how we apply the delta method, visit: [Statsig - Delta Method Methodology](https://docs.statsig.com/stats-engine/methodologies/delta-method).

This logic also applies to analyzing event-level outcomes, such as average purchase value, where each session represents a leaf, but randomization occurs at the user level.
