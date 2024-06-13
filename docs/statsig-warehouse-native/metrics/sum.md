---
title: Sum Metrics
sidebar_label: Sum
---

## Summary

Sum metrics calculate the sum of a numeric column in a metric source.

### Use Cases

Sums are an extremely common metric type, being the most fitting way to compare behavior across groups in many cases. Common examples are:

- Totalling revenue by summing a `revenue` column from purchase logs
- Totalling time spent by summing an aggregated `time_spent` metric on a user-day fact table

## Calculation

At the unit level, sum metrics take the SUM of their input column.

At the group level, the mean is calculated as the SUM of the unit-level sums, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT
  unit_id,
  group_id,
  SUM(value_column) as value
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

Sum metrics are simple, and will use the sql SUM aggregation. However, there are many advanced options you can apply.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Winsorization
  - Specify a lower and/or upper percentile bound to winsorize at. All values below the lower threshold, or above the upper threshold, will be clamped to that threshold to reduce the outsized impact of outliers on your analysis
- Capping
  - Specify an exact cap value (per unit type) to limit a unit's daily value for the sum. For example, you might want daily purchases to be capped at a high value like 100 on an e-commerce site to ignore reseller behavior
- CUPED
  - Specify if you want to calculate CUPED, and the lookback window for CUPED's pre-experiment data inputs
- Thresholding
  - Turn this metric into a 1/0 unit count metric counting if the unit's total sum surpassed a given threshold
- Cohort Windows
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
- Baked Metrics
  - Baked metrics allow you to specify how long a metric needs to mature. This is common in situations like chargebacks or cancellations. Statsig will delay loading the data until the window has elapsed, and only calculate pulse results for that metric of a unit's metric has matured.
