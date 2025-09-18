---
title: Unit Count (Latest Value) Metrics
sidebar_label: Unit Count (Latest Value)
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Summary

Unit count metrics with the latest rollup type measure if a unit participated on the last observed day.

### Use Cases

This is a powerful metric type for measuring state. For example, you might want to understand if your test variant made it so that you currently have more active subscribers in test than in control, or if more users are currently active.

## Calculation

At the unit level, unit count metrics create a 1/0 flag for if they participated on a given day. This is carried forward to the current date if data is behind.

At the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT
  unit_id,
  group_id,
  if(passes_filter, 1, 0) as value
FROM (
    SELECT
        source_data.*,
        exposures_data.group_id,
        source_data.date = MAX(source_data.date) over (partition by source_data.unit_id) as is_latest_date
    FROM source_data
    JOIN exposure_data
    ON
      -- Only include users who saw the experiment
      source_data.unit_id = exposure_data.unit_id
      -- Only include data from after the user saw the experiment
      -- In this case exposure_data is already deduped to the "first exposure"
      AND source_data.timestamp >= exposure_data.timestamp
)
WHERE is_latest_date = 1
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

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Multi Source
  - Sums can be built with inputs from multiple metric sources; think of this as a UNION in SQL. This can be useful if you have the same measure in sharded or disparate tables
- Rollup Mode
  - Rollup Mode controls the specific way that Unit Count metrics are aggregated
