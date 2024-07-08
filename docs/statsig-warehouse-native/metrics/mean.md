---
title: Mean Metrics
sidebar_label: Mean
---

## Summary

Mean metrics calculate the mean value of a numeric column in a metric source.

### Use Cases

This is most often used on event-level data, e.g. measure the "Average Time to Load", or "Average Purchase Value".

## Calculation

At the unit level, mean metrics SUM their value column, and COUNT records where the value column is non-null.

At the group level, the mean is calculated as the SUM of the unit-level sums, and the SUM of the unit-level counts.

This would look like the SQL below:

```
-- Unit Level
SELECT
  unit_id,
  SUM(value_column) as value,
  COUNT(value_column) as records
FROM source_data
WHERE value_column IS NOT NULL
GROUP BY unit_id;

-- Group Level
SELECT
  group_id,
  SUM(value)/SUM(records) as mean
FROM unit_data
GROUP BY group_id;
```

### Methodology Notes

Under the hood, mean metrics function like a SUM/COUNT [Ratio](./ratio) metric.
Mean metrics have the delta method applied to account for covariance between unit-level numerators and denominators.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Cohort Windows
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
- Baked Metrics
  - Baked metrics allow you to specify how long a metric needs to mature. This is common in situations like chargebacks or cancellations. Statsig will delay loading the data until the window has elapsed, and only calculate pulse results for that metric of a unit's metric has matured.
