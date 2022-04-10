---
title: Metrics
sidebar_label: Introduction
slug: /metrics
---

Metrics are critical to monitoring your product and providing experimental results. Statsig converts the events you send us into useful metrics that track the health and usage of your product. There are a few important conventions we follow:

1. Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not change with daylight savings time. This prevents some days from having 23 and 25 hours which can cause a +/-4% change to some metrics on a biannual basis.
2. We track and report events with and without user_id wherever possible. We require user_id to track users across events and sessions and some Statsig features (like Experiments, Pulse and Autotune) will not work without it. If you do not have a user_id, we recommend creating your own identifier to at least be able to track users at a session or device-level.

## Metric Types

Statsig automatically generates three types of metrics:

| Metric Type | Automatic | Dimensions | Possible Values            | Example                        |
| ----------- | --------- | ---------- | -------------------------- | ------------------------------ |
| event_count | Yes       | Yes        | 0, 1, 2,...                | Number of page views           |
| event_dau   | Yes       | Yes        | 0, 1                       | Unique users who viewed a page |
| user        | Yes       | No         | Depends on specific metric | Daily Active Users             |

See [Creating Custom Metrics](/metrics/create) to learn how to create custom metrics for your product and business.

See [Ingesting Metrics](/metrics/ingest) to learn how to ingest your pre-computed product and business metrics into Statsig. 

All metrics are computed for each day.

### 1. Metric Type: Event Count

Event counts are the simplest metric. For every event we receive, we automatically create an event_count metric based on the number of times Statsig receives that event for each day. In experiments, this value is calculated for each user, and users can have values ranging from 0, 1, 2, ... etc.

Every unique event you send us creates an event_count metric. The name of this metric will match the name of the event, and be denoted with a metric_type = event_count.

### 2. Metric Type: Event Daily Active Users

`metric_type = event_dau`

Event DAU measures the number of unique units that have triggered a specific event on a given day. Like event_count, these are automatically generated. Users can have a value of 1 or 0 corresponding to active or inactive. This metric works great in experimentation as it minimizes outliers, has tighter confidence intervals while being a simple metric that describes a user's breadth of activity across different events.

These metrics are computed separately for each unit type available in the project. For example, User ID event DAU counts the number of distinct users that triggered the event and Stable ID event DAU counts distinct devices.

Every unique event you send us creates an event_dau metric. The name of this metric will match the name of the event, and be denoted with a metric_type = event_dau.

### 3. Metric Type: User Accounting Metrics

User metrics start with a definition of a daily active user (DAU). By default, Statsig will consider a user as a daily active user if they've triggered any event, gate check, or config check on a given day. A daily active user is a binary designation that's assigned to every user; A user can be either a daily active user for a given day, or not (ie. inactive). Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not follow daylight savings time.

User metrics are a standard set of 15 metrics (as of October 2021) that are created for each company. Companies can customize their definition of DAU to exclude or include specific events.

These metrics are computed separately for each unit type. For example, when Stable ID is selected, DAU represents the number of distinct devices seen that day.

More information on specific metrics and their defintions can be found at (User Accounting Metrics)[/metrics/user].

## Metric Dimensions

Statsig allows metrics to be broken down into a single set of non-overlapping dimensions. For example, an event like **add-to-cart** could be broken down into product categories like _sports_, _toys_, _appliances_, _electronics_. To accomplish this, you would simply log a **add-to-cart** event, and provide the category as the event's **value** as shown below.

```js
statsig.logEvent('add_to_cart', 'sports', {'price': '9.99', 'item_name': 'tennis_balls'});
```

Logging an event this way allows you to break down the impact on the total **add-to-cart** events by category as shown below. This enables you to zero in on the category that's most impacted by your experiment. 

![image](https://user-images.githubusercontent.com/1315028/162332284-259ea614-8cb6-4c9d-aebd-3e41f9092a64.png)


Statsig recommends keeping this **value** to less than 20 unique options, though we can handle more. If you reach our tracking limit, we will prioritize tracking of the most common dimensions, and consolidate less frequent values into an "other" bucket.

Metric dimensions are also supported for custom **Aggregation** metrics. To set this up, log your dimension as a **value** and the number to be tallied as a metadata field.

## Tags

Statsig allows you organize your metrics using tags. With tags, you can create a collection of metrics for associated in some way, such as a product area, business function, business objective, and so on. You can also create a loose collection of _guardrail metrics_ that teams check in every experiment to ensure there are causing no unexpected effects in other parts of the business. Once you create a tagged collection of metrics, you can easily pull up this set of metrics when viewing your experiment results and zoom into the context that you want to focus on.

You can create a tag in the [Metrics Catalog](https://console.statsig.com/4TLCtqzctSqusYcQljJLJE/metrics/metrics_catalog), and then add the tag to all the metrics that you want to add to the collection. To learn more, visit [Creating Metric Tags](https://docs.statsig.com/metrics/create-metric-tags).
