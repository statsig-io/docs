---
title: Max/Min Metrics
sidebar_label: Max/Min
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Summary

Max metrics calculate the maximum of a column from the metric source at the unit level.
Min Metrics calculate the minimum of a column from the metric source at the unit level.

### Use Cases

Max/min metrics allow you to easily track users' extremes during an experiment.

Common examples are:

- Measuring the impact of performance changes on users' worst experiences by analyzing the maximum latency per user.

- Measuring the effect of game changes on user performance by calculating the peak high score per user.

- Counting the number of users who ever left a 2-star review or lower by applying MIN(review_score) with a threshold condition.

## Calculation for MAX/MIN

At the unit level, max/min metrics take the max/min of their input column.

At the group level, the max/min is calculated as the MEAN of the unit-level sums, divided by the count of UNIQUE UNITS exposed to the experiment.

The MAX would look like the SQL below:

```
-- Unit Level
SELECT
  source_data.unit_id,
  exposure_data.group_id,
  MAX(source_data.value_column) as value
FROM source_data
JOIN exposure_data
ON
  -- Only include users who saw the experiment
  source_data.unit_id = exposure_data.unit_id
  -- Only include data from after the user saw the experiment
  -- In this case exposure_data is already deduped to the "first exposure"
  AND source_data.timestamp >= exposure_data.timestamp
GROUP BY
  source_data.unit_id,
  exposure_data.group_id;

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

The MIN would look like the SQL below:

```
-- Unit Level
SELECT
  source_data.unit_id,
  exposure_data.group_id,
  MIN(source_data.value_column) as value
FROM source_data
JOIN exposure_data
ON
  -- Only include users who saw the experiment
  source_data.unit_id = exposure_data.unit_id
  -- Only include data from after the user saw the experiment
  -- In this case exposure_data is already deduped to the "first exposure"
  AND source_data.timestamp >= exposure_data.timestamp
GROUP BY
  source_data.unit_id,
  exposure_data.group_id;

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

Max/min metrics are simple and there are many advanced options you can apply.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Winsorization
  - Specify a lower and/or upper percentile bound to winsorize at. All values below the lower threshold, or above the upper threshold, will be clamped to that threshold to reduce the outsized impact of outliers on your analysis
- CUPED
  - Specify if you want to calculate CUPED, and the lookback window for CUPED's pre-experiment data inputs
- Thresholding
  - Turn this metric into a 1/0 unit count metric counting if the unit's max/min equals to or surpasses (>=) a given threshold
- [Cohort Windows](../features/cohort-metrics.md)
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
- [Baked Metrics](../features/cohort-metrics.md)
  - [Baked Metrics](../features/cohort-metrics.md) allow you to specify how long a metric needs to mature. This is common in situations like chargebacks or cancellations. Statsig will delay loading the data until the window has elapsed, and only calculate pulse results for that metric if a unit's metric has matured.
