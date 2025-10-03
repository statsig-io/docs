---
title: Unit Count (One-Time Event) Metrics
sidebar_label: Unit Count (One-Time Event)
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Summary

Unit count metrics with the one-time event rollup type measure if a unit performed an action any time after being exposed to the experiment.

### Use Cases

This is an extremely common metric type, used to measure participation rates among users in the experiment.

## Calculation

At the unit level, unit count metrics create a 1/0 flag for if they participated.

At the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT distinct
  source_data.unit_id,
  exposure_data.group_id,
  1 as value
FROM source_data
JOIN exposure_data
ON
  -- Only include users who saw the experiment
  source_data.unit_id = exposure_data.unit_id
  -- Only include data from after the user saw the experiment
  -- In this case exposure_data is already deduped to the "first exposure"
  AND source_data.timestamp >= exposure_data.timestamp
;

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

Note that daily/days-since-exposure views for user-day metrics are calculated per-day. That is, if a user is active on all 14 days of an experiment, they would contribute 1 to the overall cumulative numerator, but 1 to each day of the daily view; that is, they are not deduped in that view. This generally yields a more intuitive interpretation, and leads to less sparse timeseries data on long experiments. However, this can lead to mix-shift effects where the daily trend goes in the opposite direction of the cumulative timeseries since the daily returning users have already been seen and do not contribute additional metric value to the cumulative view.

Unit count metrics are simple, and will use the sql SUM aggregation. However, there are many advanced options you can apply.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Rollup Mode
  - Rollup Mode controls the specific way that Unit Count metrics are aggregated
