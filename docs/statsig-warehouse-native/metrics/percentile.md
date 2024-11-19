---
title: Percentile Metrics
sidebar_label: Percentile
---

## Summary

Percentile metrics calculate a customizable Nth percentile of a column from a metric source across experiment groups.

### Use Cases

In many cases, the mean of a metric can be acceptable, but the tail end (e.g. 99th percentile or more) can be unacceptable; imagine a website with an average TTL of 300ms, but a p99 TTL of 1 minute. A small portion of the population is getting an unusable experience that does not show up in the mean, so it's hard to measure if this p99 value moved with traditional A/B/n metrics.

Percentiles are popular for guardrail metrics around performance regression, as well as measuring improvements gained from investments in performance and infrastructure.

## Calculation

For percentile metrics, there is no unit-level calculation; the analysis is run at the group level.

This would look like the SQL below:

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

Note that some metrics are not well formed for this approach; there's an assumption that the underlying distribution is continuous. For example, if your data has 1/3 of its rows with a value of 0, 1/3 with a value of 5, and 1/3 with a value of 10, we will not calculate results for significance for a median or p99 metric since there's no local variability.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
