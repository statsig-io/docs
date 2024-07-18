---
title: Debugging Guide
slug: /statsig-warehouse-native/guides/debugging
sidebar_label: Debugging
---

## Debugging

When you're interacting with complex data sources, it's common to run into strange artifacts or results that don't make sense. Statsig will proactively monitor for these and let you know if something looks off. This guide is to help with the next steps of identifying what went wrong, and for reconciling differences in results between Statsig's analysis and your own.

## Common Issues

### Mismatched IDs

In many cases, you may have multiple versions of the same ID across tables. For example, the user `abc123` in one source might be `USER_abc123` in another; or, in some cases, certain loggers will hash ID values for privacy reasons.

This will usually result in Statsig triggering an alert that it was unable to join data between sources. What we recommend doing is:

- Going to the relevant sources and running the sample queries to check for obvious ID mismatches
- Failing that, find the job which isn't able to join sources and copy SQL. By working through the SQL query you should be able to pinpoint where the mismatch is occurring

### Conflicting Filters

Statsig allows a high degree of customization in explore queries and on explore pages. This can lead to scenarios where you add two conflicting filters that, together, will never pass. For example:

- You have a metric with a cohort window from 7 to 13 days, but set up your experiment analysis to run on users' first 6 days. These two filters return no users.
- You create a count metric filtered to `event='purchase`', and then create a local metric that filters to `event='checkout'`. This set of filters will also return a null set.

Like the above, we recommend going to the Unit-Level Aggregations jobs (where filters are rendered) and checking the filter by searching for the metric name of interest in the SQL code.

## Common Points of Confusion

Many data scientists run their own analyses using the Statsig staging data in their warehouse. In some cases, they can see very different results. There's a few common methodology differences that tend to explain this:

### Join conditions

Statsig joins events/metrics to exposures based on the event or metric input data occurring after the user was exposed to the experiment that's being analyzed. If you check the Treat Timestamp as Date setting, this is done by comparing dates. By default, it uses a timestamp. Not having a time filter, or using a Date when Statsig uses a timestamp (or vice versa) can yield very different results in some cases.

### Winsorization/Capping

Metrics can be configured to be capped or winsorized in Statsig. If you have extreme outliers, you will see significant differences in results if this procedure is not carried out. You can perform this procedure yourself, or create a local metric (or clone the metric) without winsorization.

### CUPED

CUPED can greatly reduce variance, and for aggregation (non-ratio) metrics can shift the group-level mean estimates if there's pre-experiment bias. You can turn this off in the scorecard any time to view the non-cuped results for comparison.

### Metric Types

In some cases, users have assumed that their input data is binomial - that is, the metric will only be 1-or-0 at a unit/user level. If this isn't the case, and the metric is configured as a count or sum, it can lead to much higher variance than expected.
