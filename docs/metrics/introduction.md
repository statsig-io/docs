---
title: Metrics
sidebar_label: Introduction
slug: /metrics
---

Metrics are critical to monitoring your product and providing experimental results.  Statsig converts the events you send us into useful metrics that track the health and usage of your product.  There are a few important conventions we follow:

1. Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not change with daylight savings time.  This prevents some days from having 23 and 25 hours which can cause a +/-4% change to some metrics on a biannual basis.
2. We track and report events with and without user_id wherever possible.  We require user_id to track users across events and sessions and some Statsig features (like Experiments, Pulse and Autotune) will not work without it.  If you do not have a user_id, we recommend creating your own identifier to at least be able to track users at a session or device-level.

# Metric Types

Statsig automatically generates metrics and allows creation of custom metrics.  We currently support the following metric types.

| Metric Type | Automatic | Dimensions | Possible Values | Example |
|-------------|-----------------------|-----------------|---------|
| event_count | Yes | Yes | 0, 1, 2, ... | Number of times a page was viewed |
| event_dau   | Yes | Yes | 0, 1 | Number of users who've viewed the page |
| user        | Yes | No  | Depends on specific metric | Daily Active Users |
| sum         | No  | Yes | Float | Total Revenue |
| ratio       | No  | No  | Float | Purchase Conversion Rate |

All metrics are computed for each day.

## 1. Event Count

`metric_type = event_count`

Event counts are the simplest metric.  For every event we receive, we automatically create an event_count metric based on the number of times Statsig receives that event for each day.  In experiments, this value is calculated for each user, and users can have values ranging from 0, 1, 2, ... etc.

Every unique event you send us creates an event_count metric.  The name of this metric will match the name of the event, and be denoted with a metric_type = event_count.

## Event Daily Active Users

`metric_type = event_dau`

Event DAU measures the number of unique users that have triggered a specific event on a given day.  Like event_count, these are automatically generated.  Users can have a value of 1 or 0 corresponding to active or inactive.  This metric works great in experimentation as it minimizes outliers, has tighter confidence intervals while being a simple metric that describes a user's breadth of activity across different events.

Every unique event you send us creates an event_dau metric.  The name of this metric will match the name of the event, and be denoted with a metric_type = event_dau.

## User Accounting Metrics

`metric_type = user`

User metrics start with a definition of a daily active user (DAU).  By default, Statsig will consider a user as a daily active user if they've triggered any event, gate check, or config check on a given day.  A daily active user is a binary designation that's assigned to every user; A user can be either a daily active user for a given day, or not (ie. inactive).  Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not follow daylight savings time.

User metrics are a standard set of 15 metrics (as of October 2021) that are created for each company.  Companies can customize their definition of DAU to exclude or include specific events.

## Sum Metrics

`metric_type = sum`

Sum metrics are a custom metric that tallies either the `value` field or a `metadata` field (recommended) for a given event.  This metric is useful when you want to calculate metrics that have different weights.  For example, a total timespent metric can be generated if you logged an event called  `timespent`, and logged the timespent in seconds as metadata, eg. `time_s = 50.2`.  This metric can also be used for monetary amounts however we recommend logging all numeric values in the same currency (eg. US dollars).

## Ratio Metrics

`metric_type = ratio`

# Dimensions

Statsig allows metrics to be broken down into a single set of non-overlapping dimensions.  For example, and event called `purchase` could be broken down into product categories like `jewelry`, `clothing`, `shoes`, and `watches`.  To accomplish this, you would simply log a `purchase` event, and provide the category as the `value`.  Logging in this manner will allow you to see total purchases metric like event_count and event_dau across all products, while also allowing you to see each metric broken down by category.  Each event can only be assigned to one dimension value, but nulls are accepted.

We recommend keeping this to less than 20 unique categories, although Statsig can handle more.  If you reach our tracking limit, we will prioritize tracking of the most common dimensions and overflow less values into an "other" bucket.

Dimensions are supported for custom sum metrics.  To set this up, log your dimension as a `value` and the number to be tallied as a metadata field.