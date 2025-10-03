---
title: Unit Count (Daily Participation) Metrics
sidebar_label: Unit Count (Daily Participation)
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Summary

Unit count metrics with the daily participation rate rollup type measure the fraction of days that the user participated in an action during the experiment.

### Use Cases

This metric type is an analogue for DAU, and is useful for growth accounting and for measuring upkeep of usage and retention.

## Calculation

At the unit level, unit count metrics create a 1/0 flag for if they participated on a given day.

At the group level, the mean is calculated as the SUM of the unit-level flags divided by each unit's days in th experiment, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT distinct
  source_data.unit_id,
  exposure_data.group_id
  COUNT(distinct source_data.date) as value
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
  unit_id,
  date_diff(first_exposure_ds, today()) + 1 AS days_exposed
FROM exposure_data
GROUP BY group_id;

-- Group Level
SELECT
  group_id,
  SUM(value/days_exposed)/COUNT(distinct unit_id) as mean
FROM unit_data
JOIN group_data
USING (group_id, unit_id)
GROUP BY group_id;
```

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Rollup Mode
  - Rollup Mode controls the specific way that Unit Count metrics are aggregated
