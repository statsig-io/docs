---
title: Metric Examples
slug: /statsig-warehouse-native/configuration/metric-examples
sidebar_label: Metric Examples
keywords:
  - owner:craig
last_update:
  date: 2025-03-27
---

For customers transitioning from other Warehouse Native Vendors, the format of metrics should be similar and generally customers have been able to use APIs to fetch remote configurations, translate them, and post them to Statsig without issue.

For customers migrating from in-house systems, there may be gaps in translation between how they think about experiment metrics and how Statsig handles them. This page is intended as a collection of common use cases and how they're handled in Statsig.

## User Revenue from a Wide Table

In many cases, companies will have a primary source-of-truth table about user engagement with one row per user-day and many columns representing actions taken or other values. This is very easy to integrate with Statsig.

First, enter the table path and optionally a partition column to use for date partitioning:

![configuration](/img/metric_examples_configuration.png)

Then, configure your timestamp field and ID types. Add any custom SQL aliases for other users, e.g. dividing revenue by 100 to convert from cents to dollars.
![initials](/img/metric_examples_initials.png)

Go to the metrics tab, press create, configure your name/source, and then configure a sum metric on the column with the revenue value.

![create_revenue](/img/metric_examples_create_revenue.png)

![configure_revenue](/img/metric_examples_configure_revenue.png)

### How it works in experiments

First, Statsig aggregates each unit-level record across the days they are enrolled in the experiment.

Then, Statsig will calculate the mean unit-level revenue per experiment group, imputing 0s for all exposed users with no revenue.

Statsig provides a description of this in-product for any user who wants to learn more:
![aggregation_description](/img/metric_examples_configuration.png)

## Current Account Value

Often, you will want to understand if your experiment has altered the "state" of users. Let's say you care about the current account value today on users in test vs. control of your experiment - have you helped users grow their account?

On your end, you'll just need a table or query that tracks users' account values each day. Then, set up a metric source pointing to that table or query.

First, enter the table path and optionally a partition column to use for date partitioning:

![configuration](/img/metric_examples_configuration.png)

Then, configure your timestamp field and ID types. Add any custom SQL aliases for other users, e.g. dividing revenue by 100 to convert from cents to dollars.

![initials](/img/metric_examples_initials.png)

Go to the metrics tab, press create, configure your name/source, and then configure a latest value metric on the column with the account value.

![create_account](/img/metric_examples_create_account.png)

![configure_account](/img/metric_examples_configure_account.png)

### How it works in experiments

First, Statsig aggregates each unit-level's latest value on each day of the experiment, carrying forward for null days to prevent the latest
day from being set to 0.

Then, Statsig will calculate the mean unit-level value per experiment group on each day, imputing 0s for all exposed users with no value.

Statsig provides a description of this in-product for any user who wants to learn more:
![latest_description](/img/metric_examples_latest_description.png)
