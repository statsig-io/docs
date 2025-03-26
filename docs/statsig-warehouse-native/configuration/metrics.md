---
title: Metrics
slug: /statsig-warehouse-native/configuration/metrics
sidebar_label: Overview
keywords:
  - owner:vm
last_update:
  date: 2025-02-27
---

## Metrics

Metrics are measures of user or system behavior that are used as evaluation criteria for
experiments and for performing analysis.

Metrics are organized within your Metrics Catalog.
![Screenshot 2024-06-12 at 11 31 44 AM](https://github.com/statsig-io/docs/assets/102695539/8cc2781c-23ac-46d2-b270-0d5d359c8f5b)

## Creating Metrics

Metrics are a combination a metric source, an aggregation, and optional filters and advanced settings. The metric source provides the raw data, and the aggregation defines how Statsig aggregates data across different granularities like user-level, group-level, or for daily timeseries.

Metrics can support multiple units of analysis - for example a revenue metric can be used for a "User Level" and a "Store Level" experiment, as long as the metric source has a mapping for both ID types.

Filters are also a core component of metrics. Statsig offers a rich set of filtering options, including SQL-based filters, so you can reuse the same metric source for many use cases.

![Screenshot 2024-06-12 at 11 35 00 AM](https://github.com/statsig-io/docs/assets/102695539/b57ae00f-d993-4e0f-b073-b8dea91d7f90)

## Using Metrics

Metrics can be used for standalone analysis, as part of your experiment scorecard, or as guardrails for feature releases. They can also be put into collections based on Tags for easy addition on these various surfaces. Metrics can also be configured to fire alerts globally if any experiment or gate causes a regression.

Statsig's recommendation is to use tags heavily - a combination of team-level and surface or product-level tags ensures easy discovery of metrics

To view details about a metric, you can navigate to the Metrics page where you can the definition, related experiments, and a timeseries of the metric value.

![Screenshot 2024-06-12 at 11 33 11 AM](https://github.com/statsig-io/docs/assets/102695539/88b163e0-608e-4349-bc4f-28ac30528506)

In the [insights tab](/insights/introduction.md) and in [meta-analysis](/experiments/meta-analysis.md), you can perform more detailed analysis of how experiments have impacted a metric, and how the metric relates to other metrics in your catalog.

![Screenshot 2024-06-12 at 11 33 20 AM](https://github.com/statsig-io/docs/assets/102695539/97fce3be-56c2-47da-af7d-4ed5e06566fb)

## Loading Metrics

To use metrics to measure topline impact, or for ongoing tracking in the metrics page, you'll want to schedule loads of the metric values. This can be done ad-hoc by clicking load on the metric page, or scheduled from there (3 dot menu -> edit scheduled reload). You can also set this as a project level setting in your settings under Data Connection.

## Metric Management

Without a well-managed Metric Catalog, it's hard to trust results as end users don't understand if they can trust a metric, or the nuances of how it's defined. Statsig helps you solve this with a variety of tools:

- [Verified Metrics] and programmatic management allow you to vet your core metrics and make it clear which metrics set the gold standard
- [RBAC and Team Ownership] can be enabled to help limit the number of potential editors for Metrics, keeping control of core definitions in the experiment team's hands
- [Local Metrics] in Pulse or Explore queries allow you to make experiment-scoped and clearly-labeled changes to metric definitions without adding a large amount of single-user metrics to your metrics catalog
- Scorecard hover-over definitions make it trivial to discover, in-context, what settings were applied to a metric and how the calculation was performed.

## Metric Types

Statsig offers the largest coverage of metric types of any enterprise platform. These can be roughly divided into 3 categories:

### Aggregations

Aggregations are basic unit-level counts or sums measuring user behavior. These are often used as inputs to ratios, especially for [cluster-based experiments](/metrics/different-id) where you want to normalize measures.

Aggregations are aggregated at the unit-level, and are then averaged across all units in the experiment during Pulse analysis.

Supported aggregations are:

- [Count](/statsig-warehouse-native/metrics/count)
- [Sum](/statsig-warehouse-native/metrics/sum)
- [Logged Sums and Counts](/statsig-warehouse-native/metrics/log)
- [Count Distinct](/statsig-warehouse-native/metrics/count-distinct)
- [First Value](/statsig-warehouse-native/metrics/latest-value.md)
- [Latest Value](/statsig-warehouse-native/metrics/latest-value.md)
- Thresholds
  - A special cases of sum/count which measure a 1/0 flag for if a user passed a threshold value during the experiment - e.g., "the number of users who spent more than $100"

### Unit Counts, Retention, and Conversion

Statsig offers a large number of ways to "count" units in an experiment. This allows you to measure questions like:

- did users sign up more often
- are more users are currently a subscriber at the end of my experiment
- how many users refunded in the first week of the experiment

These all fall under the "Unit Count" type, with rollups specifying details of the calculation. In general, unit counts turn into a 1/0 flag, or sum of user-days at the user-level, and are then averaged across all units in the experiment during pulse analysis.

Supported unit count types are:

- [One-Time Event](/statsig-warehouse-native/metrics/unit-count-once), measuring if a user performed an action at all during the experiment
- [Windowed](/statsig-warehouse-native/metrics/unit-count-window), measuring if a user performed an action within some time window after exposure
- [Latest Participation](/statsig-warehouse-native/metrics/unit-count-latest), measuring if a user fulfilled some criteria on their latest recorded record (e.g. is this user currently a subscriber)
- [Daily Participation](/statsig-warehouse-native/metrics/unit-count-rate), the rate at which units were daily active users during the experiment
- [Retention](/statsig-warehouse-native/metrics/retention.md), the rolling rate of retention on an action or set of actions with a configurable time window

### Ratios and Funnels

Ratios and funnel measures rates or conversion. These are aggregated differently, and measure the total of a numerator metric divided by the total of a denominator metric across each experiment group. These also apply the delta method to correct for covariance between the component metrics.

[Ratio Metrics](/statsig-warehouse-native/metrics/ratio) allow you to measure ratios of two different metrics, giving nuance to results and helping you to normalize results by another measure - for example:

- B2C: Average purchase revenue (`SUM(Revenue) / COUNT(orders)`)
- B2B: Revenue per User (`SUM(Revenue) / COUNT_DISTINCT(user_id)`)

[Funnel Metrics](/statsig-warehouse-native/metrics/funnel) allow you to analyze user-conversion through multi-step flows at an overall and stepwise level. This helps you to identify dropoff points in your user journeys, and are a critical measurement tool for increasing user conversion. Statsig offers session-level funnels, going beyond user conversion to conversion within distinct checkout flows, support conversations, or viewing sessions.

### Performance Metrics

Teams working on performance problems use Statsig to analyze the impact of their changes at a system level. These metric types can also be useful for user behavior. The types most commonly used here are:

- [Percentile Metrics](/statsig-warehouse-native/metrics/percentile.md) allow you to measure changes in values like the P99.9 - useful for measuring improvements or regressions in latency, TTL, or measuring median change when the mean is skewed
- [Mean Metrics](/statsig-warehouse-native/metrics/mean) are an easy shorthand for ratio metrics summing an event-level value and dividing by the total records

## Filters

Statsig offers a large variety of ways to filter your data. You can, of course, write filters in SQL, but leaving metric sources broad and allowing users to construct filters in the UI or through semantic layer syncs gives a high degree of 'no-code' flexibility to metric creation and follow-up analysis, especially using [local metrics](/metrics/local-metrics).

### Any of / None of

These are the equivalent to a SQL `IN` or `NOT IN` statement, and can also be used for equality/inequality. You can supply 1 to N values to the filter that will be included or excluded from your result set.

### Inequalities

You can compare numerical values using `=`, `>`, `<`, `>=`, or `<=`. Equality can also be used to compare non-numerical values, which will be evaluated as a string-casted comparison.

### Null Checks

Statsig supports checks for `Is Null` or `Non Null`, which can be useful for identifying if a flag was logged or for filtering out partial data.

### Contains/Does Not Contain/Starts With/Ends With

These operators are similar to a SQL `LIKE` operator:

- Contains checks for if a substring is in a string, e.g. `field LIKE '%search_string%'
- Does Not Contain checks for if a substring is in a string, e.g. `field not LIKE '%search_string%'
- Starts With checks for if a substring starts the field, e.g. `field LIKE 'search_string%'
- Ends With checks for if a substring ends the field, e.g. `field LIKE '%search_string'

### Is After Exposure

This filter allows you to specify a **secondary** date/timestamp field that has to come after the user's enrollment to the experiment.

By default, Statsig only considers metric data where the primary metric timestamp is after the user first saw the experimental intervention. However, you might have another field like "first_saw_content_at". You can use `Is After Exposure` to enforce that this secondary timestamp also takes place after the user's exposure.

### SQL Filters

SQL filters allow you to inject any SQL filter string into your metric definition, which will be validated before being saved. This is flexible and lets you interact with complex objects or do complex logic operations as needed to define your metrics.

For example, the sql filter `(weight_lb)/pow(height_inches, 2) > 25` would be added to your metric source query for this metric as:

```
  SELECT
    <columns>
  FROM <source_table>
  WHERE <other_filters> AND ((weight_lb)/pow(height_inches, 2) > 25)
```

## Settings

Each metric type's page has specific information on settings relevant to that metric. This section is a brief introduction to common settings on metrics.

### Breakdowns

Most aggregation-type metrics (sum, count, count distinct, unit count, means, ratios, percentiles, first/latest, min, max) allow you to generate a breakdown view of any column automatically. You can specify this column in the metric set up, and you will be able to click into the experiment result to see the breakdown.

### Cohorts

Cohort settings allow you to specify a window for data collection after a unit's exposure. For example, a 4-6 day cohort window would only count actions from days 4, 5, and 6 after a unit was exposed to an experiment.

Only include units with a completed window can be selected to remove units out of pulse analysis for this metric until the cohort window has completed. On experiment settings, you can choose to enable post-experiment data collection to allow these cohorts to mature in the case that you believe the intervention effect will still apply even if the user gets the control/shipped experiment (e.g. NUX experiments).

### Baking

Many metric types support baking. Statsig will wait to calculate baked metrics, and use "old" data for baked metrics. This is appropriate for cases like credit card chargebacks, where you may adjust your payments dataset to account for chargebacks in a "net revenue" metric.

Statsig will:

- Not calculate baked metrics until the bake period has elapsed since the user's enrollment
- On a given load, Statsig will pull historical data that "just baked" as of that day
- Calculate will only calculate results for users whose bake window has elapsed to avoid diluting metrics

This way incomplete data is not shown in pulse (either incomplete in the warehouse, or incomplete because of the late-landing data)

### Thresholding

Thresholding functionally converts a sum, count, count-distinct, max/min, or first/latest metric into a 1/0 unit metric by converting the user's total value to a specified threshold. For example, you might want to measure the count of users who spent at least $100 in their first week on the platform. You'd specify this as a 0-6 day cohort metric, summing revenue, with a threshold of $100.

### CUPED

You can enable/disable CUPED per metric, and also specify the lookback window for which users' pre-exposure data will be pulled and used as an input to the CUPED regression.

### Winsorization

See [winsorization](/docs/stats-engine/methodologies/winsorization.mdx). Winsorization is applicable to aggregate metrics and allows you to specify an upper/lower, percentile-based threshold which data above/below will be clamped to. This reduces the incidence of inflated variance or skewed means from outlier data or buggy logging.

### Capping

Capping is an alternate outlier-control method that allows specifying a unit-day cap (specifiable per unit type) that values will be clamped to. For example, you might clamp "total purchase count" to 100 to avoid resellers skewing your metrics on an auction platform, if 100 is a reasonable upper bound for typical users.
