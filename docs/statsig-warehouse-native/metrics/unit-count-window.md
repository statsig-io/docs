---
title: Unit Count (Window) Metrics
slug: /statsig-warehouse-native/metrics/unit-count-window
sidebar_label: Unit Count (Window)
keywords:
  - owner:vm
last_update:
  date: 2025-07-28
---

## Summary

Unit count metrics with the windowed event rollup type measure if a unit performed an action in a specific period of time after first being exposed to the experiment.

### Use Cases

This is an extremely common metric type, used to measure participation rates early in experiments, or to measure retention later into an experiment (e.g. did a user come back in their second week).

## Calculation

At the unit level, unit count metrics create a 1/0 flag for if they participated during the time window. The time window is defined relative to the unit's first exposure. Subsequent exposures are not considered.

At the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT distinct
  source_data.unit_id,
  exposure_data.group_id,
  MAX(if(source_data.in_time_window, 1, 0)) as value
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

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Rollup Mode
  - Rollup Mode controls the specific way that Unit Count metrics are aggregated
