---
title: Understanding Experiments
slug: /statsig-warehouse-native/features/understanding-experiments
sidebar_label: Understanding Experiments
keywords:
  - owner:craig
last_update:
  date: 2025-04-22
---

Running statistical analysis for an experiment can be complex. Much of this complexity is abstracted away from the end user, but this commonly leads to questions - things like:

- What do different date ranges mean?
- What metric data is included in the calculation?

This page aims to give an overview of the basic settings in Statsig, and what they mean for the analysis that will be run.

For more advanced settings, refer to [./configure-an-experiment]

## Date Ranges

The date range of an experiment controls the filters used when querying both exposure and metric data. For example, an experiment with a start date of `2025-02-01` and an end date of `2025-02-14` will query assignment data between those two dates, and also query metric data between those two dates.

There's a few exceptions:

- Metric Bake Windows or Cohort Windows with `wait for...` enabled; in this case, cohorts which have not been in the experiment for the duration of their cohort/bake window will be ignored and not included in either the exposure count or metric data for the metric in question
- If `allow cohort metrics to bake after experiment end` is enabled. This will push out the end date of analysis artificially - only for cohort metrics - to maximize data collection for experiments with a one-time intervention where it's expected that the experiment effect persists even once the treatment is turned off.

### Exposure Timing

A given experimental unit (e.g. user)'s data is only included _after_ they trigger the experiment. For example, if you're testing a new notification, metric data from before a given user ever sees the notification should NOT be included in the experimental analysis.

The only exception is if a metric is configured to be measured with the timestamp as a day. In this case, there is a setting on the metric's metric source to either:

- include day-0 data
- exclude day-0 data

depending on the desired analysis. Generally Statsig recommends including day-0 data (checking `measure timestamp as day`) if data has been preprocessed at a daily grain.

### Explore Query Dates

Explore queries can filter metric data or assignment data independently. The default filtering option is metric data; this allows you to exclude certain dates with buggy or non-representative data, or to scope an analysis to recent periods - e.g. if your hypothesis is that the treatment effect will take a long time to develop.

It is also possible, under the advanced tab, to:

- filter to exposures in a date range (or outside of)
- filter to exposures within a certain cohort (e.g. X-Y days since exposure)

### Selecting Dates

When not using [turbo mode](./turbo.md), or when using [turbo mode](./turbo.md) with incremental reloads, the date picker next to pulse can be used to view pulse "as of" a certain date. This is useful for understanding historical discussion of an experiment, or for understanding how results have evolved over time. This data can also be viewed through the lens of the time series views in Statsig.

As a reminder, this ability should not be used as a way to cherry-pick dates with desirable results!

## What is being calculated?

For every experiment analysis, the basic flow is:

- Identifying when units first saw or were "enrolled" into the experiment
- Identifying what those units did (metric data - events, or other rollups) after seeing the experimental variant they were assigned to, up until the end of the experiment. This results in a tagged dataset, where metric data is associated with a group
- Aggregating that metric data over the experiment duration. The [metrics documentation](../configuration/metrics.md) has descriptions and SQL snippets describing this step
- Calculating group-level statistics to be used in the final scorecard analysis - at a high level, the analysis requires the observed totals/means per-group, and the variance which is used to understand how meaningful (usually statistical significance in frequentist analysis, or probability of best in bayesian analysis) that difference is
  - Means are normalized per-unit. For basic aggregations this will impute 0s - that is, the calculation is the total value over the count of units exposed. For ratios and means, the means will be computed as the sum of the numerator over the sum of the denominator.
