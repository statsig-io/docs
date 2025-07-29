---
title: Log Metrics
sidebar_label: Log
keywords:
  - owner:vm
last_update:
  date: 2025-03-21
---

## Summary

Log metrics are a special case of [Sum](./sum) and [Count](./count) metrics, where the unit-level metric value is logged before calculating pulse results. This can be configured in the advanced settings of Sum or Count metrics.

This defaults to taking the natural log, but a custom base can be specified.

### Use Cases

This can be useful for understanding if the distribution of a log-normal or tail-driven metric has shifted. This is calculated as a conditional mean - implicitly, it is a ratio metric where the numerator is the sum of unit-level log values, and the denominator is a 1 for units with a valid log. Records with a 0 denominator are accordingly filtered out.

This is done because imputing 0s for logs does not work without a treatment such as an inverse hyperbolic sine function.

This might be revenue, time spent, or some other metric where a small portion of users drives most of the metric value, but it's important to drive "bulk" improvements. Log metrics can be thought of as measuring relative change per unit, since an increase of 1 corresponds to a multiplication by the log's base.

## Calculation

At the unit level, count metrics run a COUNT(1) or SUM(`value`) across their metric source.

At the group level, the mean is calculated as the SUM of the log of the unit-level value, divided by the count of units with a unit-level value that log is valid for (exists, and is greater than 0).

This would look like the SQL below, for a count metric:

```
-- Unit Level
SELECT
  source_data.unit_id,
  exposure_data.group_id,
  COUNT(1) as value
FROM source_data
JOIN exposure_data
ON
  -- Only include users who saw the experiment
  source_data.unit_id = exposure_data.unit_id
  -- Only include data from after the user saw the experiment
  -- In this case exposure_data is already deduped to the "first exposure"
  AND source_data.timestamp >= exposure_data.timestamp
GROUP BY unit_id, group_id;

-- Group Level
SELECT
  group_id,
  -- divide the sum of the logged values by the count of participating units
  SUM(LOG(value, <base>))/COUNT(1) as mean
FROM unit_data
WHERE value > 0
-- the filter is implicit from the CTE, but let's make it explicit
-- a sum metric might have negative values
GROUP BY group_id;
```

### Methodology Notes

Log metrics can be tricky to interpret and to extrapolate out to topline values. We highly encourage you to use this in conjunction with the raw or winsorized SUM and COUNT metric.

There's a few ways to handle 0s in a log metric; a transformation like [IHS](https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions) can approximate the behavior of log for large values while accepting 0s as inputs, or you can scope the analysis to non-zero units. We've chosen the second for ease of interpretation (log properties are broadly understood).

This does mean there's potentially a confounding factor of participation rate; to mitigate this, results are presented the same as for [ratio](./ratio.md) metrics and present statistics for the overall result as well as the implicit numerators and denominators.

## Options

Non-log options will be based on whether or not the metric is a Sum or Count.

- Custom log Base
  - You can configure a custom base for the log operation. Defaults to LN
