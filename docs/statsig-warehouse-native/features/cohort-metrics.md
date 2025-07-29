---
title: Cohort Metrics
slug: /statsig-warehouse-native/features/cohort-metrics
sidebar_label: Cohort Metrics
description: Analyzing Cohorts with Statsig
keywords:
  - owner:craig
last_update:
  date: 2025-07-23
---

# Cohort Metrics

Cohort metrics are a way to analyze the impact of an experiment in a certain time frame per experimental unit.

This is useful for many reasons. Common use cases are:

- By ensuring all users have equal periods for data collection, there is an "apples to apples" comparison across user enrolled early/late in the experiment (which often corresponds to power/occasional users), and across different "time periods" that may have extrinsic factors like holidays
- If analyzing an unbounded period, experimental units' variance in the population can increase over time - leading to scenario where error bars don't actually converge towards 0 as the experiment is run for longer!
- This allows one to skip noisy early metrics, or focus on outcomes after users might churn - e.g. capturing "week-2 engagement" if a product has a 1-week trial period
- This can also be used to capture "one-shot retention". [Retention metrics](../metrics/retention.md) are used to capture rolling, ongoing retention. A user metric with a window from day X to day Y is a good way to check if an experiment is causing more users to retain at least X days

The downsides of cohort metrics are that:

- They do not capture any sort of long-term impact, or how that evolves over time. This is purely a point in time analysis and may not be appropriate for measuring complex, evolving behaviors
- They make topline impact estimates lossier and harder to trust

Some practitioners have made compelling arguments that cohort metrics are a better "standard" metric for organizations to use in analysis. Statsig tends to believe that the use of cohorts is dependent on business context, but it's worth considering if they should be at least a part of an experiment's measurement (e.g. measuring topline revenue as an overall evaluation criteria, but also measuring 7d revenue alongside it for additional context).

Cohort metrics on Statsig are feature-rich. This page explains the different settings available, what they do, and how they interact so that you can be confident that you know what's being measured.

## Basic Cohort Windows

Basic cohort windows are fairly simple. They are a filter on metric data with a time range relative to the unit's time of exposure. 
For example, this cohort metric from 1 to 6 days would filter to events from 24 hours until 144 hours from when they were exposed to the experiment.

:::note
This is calculated as a timestamp comparison; a unit enrolled at 12pm will have exactly 24 hours until they hit the end of a 0-1 day cohort.
:::

For metrics from data sources that are marked as daily data, the cohort comparison is truncated to a date so that day-0 data behaves as expected (e.g. a user exposed on `2025-01-05T09:00` will include the date-based data from `2025-01-05` instead of truncating to times "after 9:00am").

## Waiting for Maturation

By default, cohort metrics can have a mix of maturation in the experimental population. For a 1-week cohort, users enrolled in the last week of the cohort will have a mix of maturities during analysis. This does yield maximal sample, but can "dilute" the analysis with partial cohort windows. To prevent this, mark the metric as needing to "Wait for cohort window to complete". This will drop units' metric data from analysis, and removes them from the experiment analysis population.

In the examples below, one metric forces cohorts to complete. It has **less units** in the analysis, since many units do not have a complete window, a **lower total** because of the small unit count, but a **higher mean** since the units it does have have completed their window and have a longer data collection period on average.

![Metric that did not wait to mature](/img/whn/basic_cohort_metric.png)
![Metric that waited to Mature](/img/whn/wait_to_mature_metric.png)

This can cause confusion since it leads to different populations between metrics, and also filters out the last few days of an experiment's data in the daily timeseries since new cohorts' data is not including. A metric's cohort settings can be seen quickly by hovering over the name of the metric in the experiment scorecard.

## Visual Examples

This is what the data collection looks like for a standard cohort metric with a 0-6 day window. Note that this collects data for **7 days** - it's 0-indexed.

![Basic cohort example](/img/whn/basic_cohort_example.png)

If the cohort period goes over the end of the experiment, the default behavior is that the data collection is truncated to the end of the experiment

![Basic cohort over end example](/img/whn/basic_cohort_over_end_example.png)

If the metric is configured to only allow completed cohort windows, the unit is completely excluded from the analysis. They are not part of the denominator for the average value of a sum or count metric, and their metric data is filtered from the analysis.

![Basic cohort example](/img/whn/completed_window_example.png)

If mature after end is configured in the experiment, it will continue to collect data after the end of the experiment (whether wait for mature is enabled or not).

![Basic cohort example](/img/whn/mature_after_end_example.png)

## Experiment-based Cohort Settings

Cohort controls are also available on experiments. This is because the relevance of these features depends on the kind of experiment being run, as discussed below.

### Allow post-experiment cohort data

Checking **Allow Cohort Metrics to Mature After Experiment End** allows metrics to be collected after the end of the experiment. This is recommended for one-time interventions, e.g. a new signup page; getting post-experiment signal from units who did get the intervention means additional statistical power.

![Allow Cohorts to Mature](/img/whn/allow_cohorts_to_mature.png)

This is **not** recommended in cases where the intervention is continuous, e.g. a ranking change; post-experiment data will be diluted (e.g. test users might get the control experience in their post-experiment period), diluting results.

On the data side, the analysis will be extended past the end of the experiment by the length of the longest cohort window on any metric in the analysis. Non-cohorted metrics will have their date constrained to the analysis period, and cohort metrics will be filtered to the end of the experiment + their cohort window.

### Fixed Duration

On the **Experiment Population** section of the experiment setup page, there is an option for fixed-window cohorting under **Configure Analysis Period** with Analysis Type **Fixed Duration**. This only counts metrics for a certain period after **experiment start**. This is useful when there's an experiment with a specific point in time, like email campaigns or other cases of fixed enrollment events.

![Analysis Period Settings](/img/whn/configure_analysis_period.png)

This setting is only available for assign and analyze experiments.

### Cohorted Duration

On the **Experiment Population** section of the experiment setup page, there is an option for allocation-based cohorting under **Configure Analysis Period** with Analysis Type **Cohorted Duration**. This is identical to the metric-based cohort, but applies globally to all possible metrics in the experiment analysis. This is a great way to globally add a cohort when appropriate, e.g. new user experiments.

:::note
When this is used in conjunction with metric cohorts, the minimal end of the cohort window will be used. 
For example, if a metric cohort is set to end at 7 days and the experiment at 10 days, 7 will be used. If the metric cohort is set to end at 7 days and the experiment at 5 days, 5 will be used.
:::

The **only include units with a completed cohort window** setting can also be specified at the experiment level and will apply to all metrics in the experiment if so. If not checked, this will be applied on a metric-by-metric basis.

## Metric Bake Windows

In some cases, a metric in your warehouse may not be matured until a certain time period, after which you care about the daily value. Statsig provides the option to specify a bake window for your metrics. Similarly to the option above, metrics who have not reached the bake window's end will be excluded from the numerator and denominator of the metric in the analysis.

One example of a metric that may not be immediately mature is daily revenue. If a user makes a purchase but refunds it a few days later, their daily revenue may retroactively change to reflect the refund on a later date. A 28 day long refund period for users might align naturally a 28 day long bake window for revenue metrics.

![Metric Bake Example](https://github.com/statsig-io/docs/assets/102695539/7c0ca9e7-ae49-4213-96aa-e0815a46940e)

In the example above, the user has a revenue metric that considers the last 28 days. Instead of calculating a partial result, they will exclude users from the analysis until they've had 28 days for their data to mature.

Partial results can happen because if a metric bakes over a long period, part of the metric values are from before the experimental intervention and will dilute the results. If a user had been exposed 1 day ago, 27/28 days of their revenue metric would be from the pre-intervention period and would dilute the experiment results.
