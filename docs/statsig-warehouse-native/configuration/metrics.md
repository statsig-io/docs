---
title: Metrics
slug: /statsig-warehouse-native/configuration/metrics
sidebar_label: Metrics
---

## Metrics

Metrics are measures of user or system behavior that are used as evaluation criteria for
experiments and for performing analysis.

## Creating Metrics

Metrics are a combination a metric source, an aggregation, and optional filters and advanced settings. The metric source provides the raw data, and the aggregation defines how Statsig aggregates data across different granularities like user-level, group-level, or for daily timeseries.

Metrics can support multiple units of analysis - for example a revenue metric can be used for a "User Level" and a "Store Level" experiment, as long as the metric source has a mapping for both ID types.

Filters are also a core component of metrics. Statsig offers a rich set of filtering options, including SQL-based filters, so you can reuse the same metric source for many use cases.

## Using Metrics

Metrics can be used for standalone analysis, as part of your experiment scorecard, or as guardrails for feature releases. They can also be put into collections based on Tags for easy addition on these various surfaces.

Statsig's recommendation is to use tags heavily - a combination of team-level and surface or product-level tags ensures easy discovery of metrics

To view details about a metric, you can navigate to the Metrics page where you can the definition, related experiments, and a timeseries of the metric value. In [insights tab](/insights/introduction) and in [meta-analysis](/experiments/meta-analysis), you can perform more detailed analysis of how experiments have impacted a metric, and how the metric relates to other metrics in your catalog.

## Metric Management

Without a well-managed Metric Catalog, it's hard to trust results as end users don't understand if they can trust a metric, or the nuances of how it's defined. Statsig helps you solve this with a variety of tools:

- [Verified Metrics] and programmatic management allow you to vet your core metrics and make it clear which metrics set the gold standard
- [RBAC and Team Ownership] can be enabled to help limit the number of potential editors for Metrics, keeping control of core definitons in the experiment team's hands
- [Local Metrics] in Pulse or Explore queries allow you to make experiment-scoped and clearly-labelled changes to metric definitions without adding a large amount of single-user metrics to your metrics catalog
- Scorecard hover-over definitions make it trivial to discover, in-context, what settings were applied to a metric and how the calculation was performed.

## Metric Types

Statsig offers the largest coverage of metric types of any enterprise platform. These can be roughly divided into 3 categories:

### Aggregations

Aggregations are basic unit-level counts or sums measuring user behavior. These are often used as inputs to ratios, especially for [cluster-based experiments]("statsig-warehouse-native/guides/metrics/different-id") where you want to normalize measures.

Aggregations are aggregated at the unit-level, and are then averaged across all units in the experiment during Pulse analysis.

Support aggregations are:

- [Count](../metrics/count)
- [Sum](../metrics/sum)
- [Count Distinct](../metrics/count-distinct)
- Thresholds
  - special cases of sum/count which measure a 1/0 flag for if a user passed a threshold value during the experiment - e.g., "the number of users who spent more than $100"

### Unit Counts, Retention, and Conversion

Statsig offers a large number of ways to "count" units in an experiment. This allows you to measure questions like:

- did users sign up more often
- are more users are currently a subscriber at the end of my experiment
- how many users refunded in the first week of the experiment

These all fall under the "Unit Count" type, with rollups specifying details of the calculation. In general, unit counts turn into a 1/0 flag, or sum of user-days at the user-level, and are then averaged across all units in the experiment during pulse analysis.

Supported unit count types are:

- [One-Time Event](../metrics/unit-count-once), measuring if a user performed an action at all during the experiment
- [Windowed](../metrics/unit-count-windowed), measuring if a user performed an action within some time window after exposure
- [Latest Participation](../metrics/unit-count-latest), measuring if a user fulfilled some criteria on their latest recorded record (e.g. is this user currently a subscriber)
- [Daily Participation](../metrics/unit-count-rate), the rate at which units were daily active users during the experiment

### Ratios and Funnels

Ratios and funnel measures rates or conversion. These are aggregated differently, and measure the total of a numerator metric divided by the total of a denominator metric across each experiment group. These also apply the delta method to correct for covariance between the component metrics.

[Ratio Metrics](../metrics/ratio) allow you to measure ratios of two differnet metrics, giving nuance to results and helping you to normalize results by another measure - for example:

- B2C: Average purchase revenue (`SUM(Revenue) / COUNT(orders)`)
- B2B: Revenue per User (`SUM(Revenue) / COUNT_DISTINCT(user_id)`)

[Funnel Metrics](../metrics/funnel) allow you to analyze user-conversion through multi-step flows at an overall and stepwise level. This helps you to identify dropoff points in your user journeys, and are a critical measurement tool for increasing user conversion. Statsig offers session-level funnels, going beyond user conversion to conversion within distinct checkout flows, support conversations, or viewing sessions.

### Performance Metrics

Teams working on performance problems use Statsig to analyze the impact of their changes at a system level. These metric types can also be useful for user behavior. The types most commonly used here are

- [Percentile Metrics](../metrics/percentile.md) allow you to measure changes in values like the P99.9 - useful for measuring improvements or regressions in latency, TTL, or measuring median change when the mean is skewed
- [Mean Metrics](../metrics/mean) are an easy shorthand for ratio metrics summing an event-level value and dividing by the total records
