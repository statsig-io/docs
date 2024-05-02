---
title: Metrics
slug: /statsig-warehouse-native/guides/metrics
sidebar_label: Metrics
---

Metrics are measures of user or system behavior that you'll use as evaluation criteria for
experiments. In Statsig Warehouse Native, Metrics are calculations on top of Metric Sources. The configuration of a metric includes:

- The type of aggregation you want to perform (E.g. Sum, Mean, Count, Unique Users)
- For Means, Sums, etc., the field to use for the numerical calculation
  - Optional filters on fields from your Metric Source query
  - Optional drill-down dimensions on metadata fields to be used in experiment analysis
  - Optional toggle for lower/upper winsorization bounds for outlier control
  - Optional toggle for cohort windows to take input data from
  - Optional toggle for whether the metric should wait for a user's data to bake before including a user in results
- For Ratios and Funnels, the metric sources and fields that contribute the components of the metric
  - Optional filters on fields from your Metric Source query
  - Optional toggle for cohort windows to take input data from


![Metric Tab](https://user-images.githubusercontent.com/102695539/264088732-187cba73-1cf9-4ddf-b720-9641e97ce678.png)

## Supported Metric Types

Metrics define different aggregations for user-level aggregations, as well as group-level aggregations
and Statistical calculations.

We're actively working on adding more metric types - refer to the crosstab below for the metric types available today, and how these are calculated on the backend.

| Metric Type           | Examples                                            | Metrics Tab Calculation                                | User Level Calculation                                  | Group Calculation Type            | Stats Notes          |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | --------------------------------- | -------------------- |
| [**Count**](/guides/metrics.md#count)                 | clicks, purchases, API requests                     | Count of Metric Source rows                            | "                                                       | Sum of user values                |                      |
| [**Sum**](/guides/metrics.md#sum)                   | revenue, time spent, bandwidth                      | Sum of Metric Source values                            | "                                                       | Sum of user values                |                      |
| [**Mean**](/guides/metrics.md#mean)                  | average latency, average purchase price             | Average of non-null Metric Source values               | Sum of values, Count of values                          | Sum(values)/Sum(counts)           | Delta Method applied |
| [**Count Distinct**](/guides/metrics.md#count-distinct)        | Unique game rooms the user connected to             | Count of distinct user-value pairs                     | Count of distinct values                                | Average of user-level counts      |                      |
| [**Unit Count**](/guides/metrics.md#unit-count)            | Metrics based on users with various configurations  |                                                        |                                                         |                                   |                      |
| _- Daily Participation_ | Average DAU of exposed users                        | Daily Active Users                                     | 1/0 flag for participation on each day                  | Sum of values / Total Days        |                      |
| _- One Time Event_      | Did a user complete an event during the experiment  | Daily Active Users                                     | 1/0 flag for participation across experiment lifespan   | Count of users                    |                      |
| _- Custom Window_       | Did a user subscribe between 3-7 days from exposure | Daily Active Users                                     | 1/0 flag for participation within window                | Count of users                    |                      |
| _- Latest Value_        | Is the user a subscriber today?                     | Daily Active Users                                     | 1/0 flag for participation on latest available day of data | Count of users                 |                      |
| [**Ratio**](/guides/metrics.md#ratio)                 | revenue per page hit, revenue per new user          | Value of Numerator/Value of Denominator based on types | Value of numerator, denominator based on types          | Sum(numerators)/Sum(denominators) | Delta Method applied |
| [**Funnel**](/guides/metrics.md#funnel)                | conversion through a 5-step buy flow                | Value of Numerator/Value of Denominator based on types | For each step, did the user complete all previous steps | Sum(completions)/Sum(step starts) | Delta Method applied |
| [**Percentile**](/guides/metrics.md#percentile)            | p99.5 latency on page load                          | PX of all daily values observed                        | N/A                                                     | Configured Percentile of value column  | Uses the outer CI method |

You can think of each of these in terms of a SQL query. The means of the experiment groups are either calculated directly (for ratios and mean metrics) or as the group total divided by the group population.

### Count
```
-- User Level
SELECT
  user_id,
  COUNT(1) as value
FROM source_data
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(value) as total,
  COUNT(distinct user_id) as population
FROM user_level_data
GROUP BY group_id;
```

### Sum
```
-- User Level
SELECT
  user_id,
  SUM(value_column) as value
FROM source_data
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(value) as total,
  COUNT(distinct user_id) as population
FROM user_level_data
GROUP BY group_id;
```

### Mean
```
-- User Level
SELECT
  user_id,
  SUM(value_column) as value,
  COUNT(value_column) as records
FROM source_data
WHERE value_column IS NOT NULL
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(value)/SUM(records) as mean
FROM user_data
GROUP BY group_id;
```

### Count Distinct
```
-- User Level
SELECT
  user_id,
  COUNT(distinct value_column) as value
FROM source_data
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(value) as total,
  COUNT(distinct user_id) as population
FROM user_data
GROUP BY group_id;
```

### Percentile
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

### Unit Count
```
-- User Level
SELECT
  user_id,
  COUNT(distinct date_column) as `Daily Participation Value`,
  MAX(1) as `One-Time Event Value`,
  MAX(IF(minutes_since_exposure between window_start and window_end, 1, 0)) as `Custom Window Value`,
  MAX_BY(passes_filters, date_column) as `Latest Value Value`
FROM source_data
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(`Daily Participation Value`/days_exposed) as `Daily Participation Total`
  SUM(`One-Time Event Value`) as `One-Time Event Total`,
  SUM(`Custom Window Value`) as `Custom Window Total`,
  SUM(`Latest Value Value`) as `Latest Value Total`,
  COUNT(distinct user_id) as population
FROM user_data
GROUP BY group_id;
```

### Ratio
```
-- User Level
SELECT
  user_id,
  <> as numerator, --depends on numerator type
  <> as denominator -- depends on denominator type
FROM source_data
GROUP BY user_id;

-- Group Level
SELECT
  group_id,
  SUM(numerator)/SUM(denominator) as mean
FROM user_data
WHERE COALESCE(denominator, 0) != 0
GROUP BY group_id;
```

### Funnel
```
-- User Level, per step
SELECT
  user_id,
  funnel_session_id, -- optional
  funnel_step_id,
  IF(`Completed All Steps Up to Current Step In Order`, 1, 0) as numerator,
  IF(`Completed Previous Steps In Order`, 1, 0) as denominator
FROM user_data;

--Group Level
SELECT
  group_id,
  funnel_step_id,
  SUM(numerator)/SUM(denominator) as mean
FROM user_data
GROUP BY group_id;
```


## Configuring Your Metric

When creating a metric, pick your metric source, and determine if you want to filter your metric source data. You can press the reload button to validate that any filters are working as expected. Then, depending on your metric source, you will configure the inputs to the metric as well as specific configurations for experiment analysis.

![Example Metric](https://user-images.githubusercontent.com/102695539/264088978-0aa89c83-e6ee-43d6-9d69-2dafeba6f94d.png)

Some common configurations you can use are below:

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

### Thresholds

Sum and count metrics can be configured to use a threshold. When using a threshold, the metric will measure if the user's sum or count metric surpassed a given threshold. This is usually combined with cohort windows to create a metric like "% of users who spent more than $100 in their first week". 

## Example Metrics

### Filtered Revenue Metric

This metric would calculate the total revenue on checkout events on clothing/electronics items for items costing < $1000. User-level values would be winsorized to the 99.9th percentile, and the results would be grouped by 2 different selected metadata columns by default.

![Sum Metric](https://user-images.githubusercontent.com/102695539/264089678-75cf6e83-9399-416c-a8e1-22dd7d86b931.png)

### Ratio Metric

This metric would calculate the ratio of total checkout events per distinct users in the experiment who ever visited.

![Ratio Metric](https://user-images.githubusercontent.com/102695539/264089903-aa1defd6-c09b-4837-b47b-9805e3571f4d.png)

### Activation Metric

This metric would calculate if a user ever visited in the span of the experiment.

![Activation metric](https://user-images.githubusercontent.com/102695539/264099042-87ddc3b7-fe3e-48f1-9983-dceb78dbad39.png)

### Week 2 Retention Metric

This metric would calculate the rate at which exposed users were active in the 2nd week since their exposure, a common pattern for signup experiments.

Since the metric is configured to wait for users to reach the window, users who were exposed < 14 days ago would not be included in the experiment results on a given day.

![Retention Metric](https://user-images.githubusercontent.com/102695539/264097021-b9ce0caa-5a4c-4ae5-a5be-4ef3204257d7.png)

### Funnel Metric

This funnel metric would calculate the overall and step-level conversion for users going from a visit -> cart view -> checkout at a unique user level. Each event would only count if the user had already completed the previous steps in order.

Since the calculation window is set to 7, the user would have 7 days to complete the funnel from the time of their first visit.

![Funnel Metric](https://user-images.githubusercontent.com/102695539/264097015-87f2d98e-c394-49a8-b133-30f479c78e50.png)

### When Analysis Units and Assignment Units Are Different
[Analysis with Different ID](https://docs.statsig.com/metrics/different-id)

## Viewing your Metric

With the metric set up, you can load or schedule loads of a timeseries view to populate a timeseries that tracks the population value and aids in debugging/identifying data bugs. Additionally, this can be used to calculate the projected topline impact of releasing an experiment.

![Timeseries](https://user-images.githubusercontent.com/102695539/264099747-687a3241-db10-43d4-b1ef-8c4c2a29d0dc.png)

With the metric set up, you can start using it in experiments.
