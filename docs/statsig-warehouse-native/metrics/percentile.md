---
title: Percentile Metrics Metrics
sidebar_label: Percentile
---

## Summary

Percentile metrics calculate a customizable Nth percentile of a column from a metric source.

### Use Cases

In many cases, the mean of a metric can be acceptable, but the tail end (e.g. 99th percentile or more) can be unacceptable; imagine a website with an average TTL of 300ms, but a p99 TTL of 1 minute. A small portion of the population is getting an unusable experience that does not show up in the mean, so it's hard to measure if this p99 value moved with traditional A/B/n metrics.

Percentiles are popular for guardrail metrics around performance regression, as well as measuring improvements gained from investments in performance and infrastructure.

## Calculation

For percentile metrics, there is no unit-level calculation; the analysis is just dont at the group level.

This would like like the SQL below:

```
-- Group Level
SELECT
  group_id,
  PERCENTILE(value, percentile_level) as value,
  COUNT(distinct user_id) as population
FROM user_data
WHERE value IS NOT NULL
GROUP BY group_id;
```

### Methodology Notes

Percentile metrics use the outer CI method to estimate a confidence interval and significance. Deng Et. Al. have a good description of the methodology in section 4 of [this paper](https://arxiv.org/pdf/1803.06336).

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
