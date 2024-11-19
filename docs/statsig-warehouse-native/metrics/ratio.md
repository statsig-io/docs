---
title: Ratio Metrics
sidebar_label: Ratio
---

## Summary

Ratio metrics measure the ratio of two metrics (Count, Sum, Count Distinct, or Unit Count).

### Use Cases

Ratio metrics are used to add a more nuanced understanding - revenue went up, as did purchase volume, but did revenue/purchase go up in a way that was meaningful?

Ratio metrics are also used to normalize metrics. For example, if you're a company that rents out devices like scooters, you might run a scooter-level experiment but want to measure average revenue per distinct rider. You could make a metric of SUM(revenue)/COUNT_DISTINCT(rider_id) to calculate this normalized metric and have the metric be less influenced by scooters in popular areas which get lots of riders.

## Calculation

At the unit level, ratio metrics will calculate both component metric's unit level aggregation.

At the group level, the mean is calculated as the total group calculation of the first metric, divided by the total group value of the second metric.

Note that the denominator is **not** the number of units in the experiment; the normalization is by the denominator metric.

This would look like the SQL below:

```
-- Denominator (Checkouts)
SELECT
  unit_id,
  group_id,
  COUNT(1) as denominator
FROM source_data
GROUP BY unit_id, group_id;

-- Numerator (Revenue)
SELECT
  unit_id,
  group_id,
  SUM(revenue) as numerator
FROM source_data
GROUP BY unit_id, group_id;

-- Group Level
SELECT
  group_id,
  SUM(numerator)/SUM(denominator) as mean
FROM denominator
-- full outer join depending on settings
LEFT JOIN numerator
USING (group_id)
GROUP BY group_id;
```

### Methodology Notes

Ratio metrics require adjustment due to potential unit-level covariance between the numerator and the denominator. Statsig uses the delta method to estimate this adjustment.

By default, Statsig only includes numerators from metrics with non-null, non-zero denominators. This is configurable in the advanced settings.

## Options

- Cohort Windows (Numerator and Denominator)
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
- Winsorization
  - Specify a lower and/or upper percentile bound to winsorize at. Winsorization and its thresholds can be specified for both the numerator and denominator of the ratio metric independently. All values below the lower threshold, or above the upper threshold, will be clamped to that threshold to reduce the outsized impact of outliers on your analysis
- Include units which do not have a denominator
  - Control whether you want to include numerators from units which don't have a denominator value
- Baked Metrics
  - Baked metrics allow you to specify how long a metric needs to mature. This is common in situations like chargebacks or cancellations. Statsig will delay loading the data until the window has elapsed, and only calculate pulse results for that metric of a unit's metric has matured.
