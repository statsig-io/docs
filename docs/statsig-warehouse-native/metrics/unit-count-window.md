---
title: Unit Count (Window) Metrics
slug: /statsig-warehouse-native/metrics/unit-count-window
sidebar_label: Unit Count (Window)
keywords:
  - owner:vm
last_update: 2024-06-12 16:50:04 -0700
---

## Summary

Unit count metrics with the windowed event rollup type measure if a unit performed an action in a specific period of time after being exposed to the experiment.

### Use Cases

This is an extremely common metric type, used to measure participation rates early in experiments, or to measure retention later into an experiment (e.g. did a user come back in their second week).

## Calculation

At the unit level, unit count metrics create a 1/0 flag for if they participated during the time window.

At the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT distinct
  unit_id,
  group_id,
  MAX(if(in_time_window, 1, 0)) as value
FROM source_data;

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

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Rollup Mode
  - Rollup Mode controls the specific way that Unit Count metrics are aggregated
