---
title: Pulse Metrics
sidebar_label: Pulse Metrics
slug: /metrics/metrics-101/pulse-metrics
---

# Pulse Metrics

Statsig computes experiment results, also known as Statsig's **Pulse** results, depending on the metric type. Most metrics are aggregated across all users in the group. Some ratio type metrics are only aggregated across partipating users (users that have non-null value for that metric).

## Pulse Statistics by Metric Type

| Metric Type      | Total Calculation       | Mean           | Units          |
|------------------|-------------------------|----------------|----------------|
| event_count      | Sum of events (99.9% winsorization)           | Average events per user (99.9% winsorization)  | All users  |
| event_dau        | Sum of event DAU (distinct user-day pairs) | Average event_dau value per user per day. Note that we call this "Event Participation Rate" as this can be interpreted as the probability a user is DAU for that event.  | All users |
| ratio            | Overall ratio: sum(numerator values)/sum(denominator values)  | Overall ratio  |  Participating users |
| sum              | Total sum of values (99.9% winsorization)     | Average value per user (99.9% winsorization)   | All users |
| mean             | Overall mean value    | Overall mean value   | Participating users |
| user: dau, wau, mau_28day |  Not shown   | Average metric value per user per day. The probability that a user is xAU | All users |
| user: new_dau, new_wau, new_mau_28day |  Count of distinct users that are new xAU at some point in the experiment  | Fraction of users that are new xAU |  All users |
| user: retention metrics |  Overall average retention rate   | Overall average retention rate  | Participating users |
| user: L7, L14, L28 |  Not shown   | Average L-ness value per user per day  | All users |


## Winsorization
To reduce the impact of outliers, Statsig caps *event_count* and *sum* metric types at the 99.9th percentile. This mitigates the risk of bots and extreme values significantly swaying experiment results.

