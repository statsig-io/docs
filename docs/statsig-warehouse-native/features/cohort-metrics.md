---
title: Cohort Metrics
slug: /statsig-warehouse-native/features/cohort-metrics
sidebar_label: Cohort/Window Metrics
description: Analyze Cohorts with Statsig
displayed_sidebar: cloud
keywords:
  - owner:vm
last_update: 2024-08-05
---

# Cohort Metrics

Cohort metrics are a way to analyze the impact of an experiment in a certain time frame per user.

This can be a useful way to ignore noisy day-1 metrics or capture a specific critical window around something like subscriptions. It is also an easy way to measure experiment-based retention, since you can use it to ask if an experiment - for example - caused users to come back in their 2nd week from being exposed to an experiment.

![Cohort Metric](https://github.com/statsig-io/docs/assets/102695539/cc96d4ba-4edc-4b31-b937-7ad8d62245f7)

In the example above, the metric will count distinct users in an experiment group with a click event between 3 and 7 days from their first exposure.

Since "Wait until users reach end window to include them in calculation" is clicked, users who are not yet at 7 days from their first exposure will be excluded from the numerator and the denominator of the metric in the analysis.

# Metric Bake Windows

In some cases, a metric in your warehouse may not be matured until a certain time period, after which you care about the daily value. Statsig provides the option to specify a bake window for your metrics. Similarly to the option above, metrics who have not reached the bake window's end will be excluded from the numerator and denominator of the metric in the analysis.

One example of a metric that may not be immediately mature is daily revenue. If a user makes a purchase but refunds it a few days later, their daily revenue may retroactively change to reflect the refund on a later date. A 28 day long refund period for users might align naturally a 28 day long bake window for revenue metrics.

![Metric Bake Example](https://github.com/statsig-io/docs/assets/102695539/7c0ca9e7-ae49-4213-96aa-e0815a46940e)

In the example above, the user has a revenue metric that considers the last 28 days. Instead of calculating a partial result, they will exclude users from the analysis until they've had 28 days for their data to mature.

Partial results can happen because if a metric bakes over a long period, part of the metric values are from before the experimental intervention and will dilute the results. If a user had been exposed 1 day ago, 27/28 days of their revenue metric would be from the pre-intervention period and would dilute the experiment results.
