---
title: Metrics
slug: /statsig-warehouse-native/guides/metrics
sidebar_label: Metrics
---

Metrics are measures of user or system behavior that you'll use as evaluation criteria for
experiments. In Statsig warehouse native, Metrics are configurations on top of a Metric Source. This includes:

- The type of aggregation you want to perform (E.g. Sum, Mean, Count, Unique Users)
- For means, sums, etc., the field to use for the numerical calculation
- Optional filters on fields from your Metric Source query
- Optional metadata fields to act as drill-down dimensions in experiment results
- Optional lower/upper winsorization bounds for outlier control
- Optional time windows to take input data from
- Optional toggle for if the metric should wait for a user's data to bake before including a user in results
- For Ratios and Funnels, multiple metric sources that contribute the components of the metric

<!-- <TODO Picture of Metric Tab> -->

## Supported Metric Types

Metrics define different aggregations for user-level aggregations, as well as group-level aggregations
and Statistical calculations.

We're actively working on adding more metric types - refer to the crosstab below for the metric types available today, and how these are calculated on the backend.

| Metric Type           | Examples                                            | Metrics Tab Calculation                                | User Level Calculation                                  | Group Calculation Type            | Stats Notes          |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | --------------------------------- | -------------------- |
| Count                 | clicks, purchases, API requests                     | Count of Metric Source rows                            | "                                                       | Sum of user values                |                      |
| Sum                   | revenue, time spent, bandwidth                      | Sum of Metric Source values                            | "                                                       | Sum of user values                |                      |
| Mean                  | average latency, average purchase price             | Average of non-null Metric Source values               | Sum of values, Count of values                          | Sum(values)/Sum(counts)           | Delta Method applied |
| User Count            | Metrics based on users with various configurations  |                                                        |                                                         |                                   |                      |
| - Daily Participation | Average DAU of exposed users                        | Daily Active Users                                     | 1/0 flag for participation on each day                  | Sum of values / Total Days        |                      |
| - One Time Event      | Did a user complete an event during the experiment  | Daily Active Users                                     | 1/0 flag for participation across experiment lifespan   | Count of users                    |                      |
| - Custom Window       | Did a user subscribe between 3-7 days from exposure | Daily Active Users                                     | 1/0 flag for participation within window                | Count of users                    |                      |
| Ratio                 | revenue per page hit, revenue per new user          | Value of Numerator/Value of Denominator based on types | Value of numerator, denominator based on types          | Sum(numerators)/Sum(denominators) | Delta Method applied |
| Funnel                | conversion through a 5-step buy flow                | Value of Numerator/Value of Denominator based on types | For each step, did the user complete all previous steps | Sum(completions)/Sum(step starts) | Delta Method applied |

## Configuring Your Metric

When creating a metric, pick your metric source, and determine if you want to filter your metric source data. You can press the reload button to validate that any filters are working as expected. Then, depending on your metric source, you will configure input fields.

Some common configurations to consider are below:

### Filters

Filters are a powerful way to break down data from a data source. This allows experimenters to create metrics to answer targeted questions as needed, without having to write SQL or modify the underlying SQL and change existing metrics.

These filters are pushed down as far as possible into the metric source query to minimize reads.

### Winsorization

Winsorization sets a percentile-based ceiling and/or floor for user-level metrics at the time of analysis. For example, in a 30 day experiment looking at revenue, this would consider the total 30-day revenue across each user in the experiment. If the winsorization threshold was 99.9%, the analysis would identify the 99.9th % of user-level revenue and set any user's revenue to that value if theirs was higher. This is useful in controlling for extreme outliers from bugs or power users, which might unduly impact the average result in a group.

### Time windows

Some metrics (particularly user metrics and funnels) have time windows built into the metric definition. For example, this would set the analysis to only consider an event or metric in the first week since exposure, or since the first funnel event.

A secondary toggle for matured data sets the analysis to exclude users from the result set unless that window has elapsed for them to avoid shifting denominators as the experiment matures. For example, if your funnel is set to include the first week since exposure,
if this toggle is set any user only 5 days from their first exposure would be excluded from the analysis until they hit their 7th day.

### Breakdowns

Some metric types can include a dimension-based breakdown. This is very useful if you frequently want to see how the metric was influenced across high-level cuts like country or product category. This does increase the cost of calculation, as each dimension is functionally another metric for the purposes of analysis.

## Viewing your Metric

With the metric set up, you can load or schedule loads of a timeseires view to populate a timeseries that tracks the population value and aids in debugging/identifying data bugs. Additionally, this can be used to calculate the projected topline impact of releasing an experiment.

With the metric set up, you can start using it in experiments.
