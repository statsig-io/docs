---
title: Count Distinct Metrics
sidebar_label: Count Distinct
---

## Summary

Count distinct metrics calculate the unique values observed in a column of a metric source. This is calculated per-unit, so the total is the number of unique unit-value pairs.

:::warning
Count-distinct metrics are more expensive to compute than [count](./count) or [unique unit count](./unit-count-once) metrics, especially for very long experiments.

If you want to count distinct occurrences of the experiment's unit of assignment (e.g. the user_id in a user_id experiment), you should use a unit_count metrics instead. This achieves the same result, but more efficiently calculates and stores the metric data.

In many cases a count metric serves as a close proxy to count-distinct; you can also set up a data source to track unique instances of a key to avoid re-running the distinct operation across experiment analyses.
:::

### Use Cases

Count distinct metrics have two primary use cases:

- Measuring interactions and surface area. For example, you might to count the number of entities a user has engaged with on a video streaming platform, or measure if your new recommendation engine increases the diversity of products clicked
- As a denominator in ratio metrics, especially common when you want to normalize by a unit other than your experiment's unit of analysis. For example, a B2B experiment might run an experiment at the company level, but measure "Clicks per USER" by making a ratio metric of COUNT(clicks)/COUNT_DISTINCT(user_id).

## Calculation

At the unit level, count distinct metrics use COUNT_DISTINCT on their input column.

At the group level, the mean is calculated as the SUM of the unit-level COUNT_DISTINCTs, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT
  unit_id,
  group_id,
  COUNT(distinct value_column) as value
FROM source_data
GROUP BY unit_id, group_id;

-- Experiment
SELECT
  group_id,
  COUNT(distinct unit_id) total_units
FROM exposure_data
GROUP BY group_id;

-- Group Level
SELECT
  group_id,
  SUM(value)/SUM(total_units) as mean
FROM unit_data
JOIN group_data
USING (group_id)
GROUP BY group_id;
```

### Methodology Notes

In the metrics page view, we use APPROX_COUNT_DISTINCT (or equivalent) to avoid massive compute jobs on analytical count distinct, and because the approximate error becomes acceptably small for the topline estimate. For experiment result loads, the calculation is analytical and exact to avoid jitter or bias from approximation error.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Winsorization
  - Specify a lower and/or upper percentile bound to winsorize at. All values below the lower threshold, or above the upper threshold, will be clamped to that threshold to reduce the outsized impact of outliers on your analysis
- CUPED
  - Specify if you want to calculate CUPED, and the lookback window for CUPED's pre-experiment data inputs
- Cohort Windows
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
