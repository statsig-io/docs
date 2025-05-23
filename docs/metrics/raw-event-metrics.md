---
title: Auto-generated Metrics
sidebar_label: Auto-generated Metrics
slug: /metrics/metrics-from-events
keywords:
  - owner:shubham
last_update:
  date: 2025-01-08
---

# Auto-generated Metrics
Metrics are critical for monitoring the health and usage of your product as well as the impact of new features and experiments. 

Statsig automatically generates an event_count metric for each uniquely named **custom event** that you log. This happens daily and any newly logged custom event should have an event_count metric created within 24 hours of logging their first events.

This auto-generated metric consists of three elements:

1. **Roll-up Window** - Statsig computes metrics from custom events aggregated over a 24-hour day, with the hours depending on your company's setting. These hours do not change with daylight saving time. This prevents some days from having 23 and 25 hours which can cause a +/-4% change to some metrics on a biannual basis.
2. **Unit Identifier** - While you can record custom events with and without a unique user identifier, Statsig requires a unit identifier (usually a user_id) to track a user across multiple events and sessions to support Experiments, Pulse (experiment results), and Autotune. If you don't have access to a user_id when logging a custom event, create a temporary identifier to track users at a session or device-level. 
3. **Metric Value** - Statsig automatically computes values for **event_count**, which measures the number of times an event is triggered. 

:::note

As of October 16, 2024, Statsig stopped auto-creating event_dau metrics for all custom events. Existing event_dau metrics will continue to function will continue to be documented here.

Users should create an event_user [custom metric](/metrics/custom-dau) with Rollup Mode set to Daily Participation Rate to replicate the prior event_dau behavior for any new custom event.

Please see the [deprecation details](/metrics/deprecate-event-dau) for more information.

:::

Up until October 16, 2024, Statsig also auto-computed values for an  **event_dau** metric that measures the number of unique users that triggered the event. While Statsig no longer auto-compute an **event_dau** metric for every logged event, you can create your own metrics that function like **event_dau** via [Custom Metrics](/metrics/custom-dau).


| Metric      | Automatic | Dimensions | Possible Values            | Description                                                                |   Example                      |
| ----------- | --------- | ---------- | -------------------------- | -------------------------------------------------------------------------- | ------------------------------ |
| event_count | Yes       | Yes        | 0, 1, 2,...                | Counts the number of events triggered on a given day                       | Number of page views           |
| event_dau (Legacy support as of October 16, 2024)  | Yes       | Yes        | 0, 1                       | Marks each user as 1 or 0 based on whether they triggered the event or not | Unique users who viewed a page |


When you click on an event type in the **Events** tab, you will see a detailed view of the event, including any metrics linked to that event. Click on these metrics to visit the detail pages for these metrics. 

![Screenshot 2024-11-13 at 8 33 18 AM](https://github.com/user-attachments/assets/e4967643-33b4-46b6-9fca-5cee83f8f0a6)

## Event Count Metric
Event count is the simplest metric in your Statsig Project. For every event recorded, Statsig automatically creates an **event_count** metric based on the number of times Statsig receives that event each day. In experiments, Statsig calculates this value for each user, and each user can have values ranging from 0, 1, 2,... etc.

You will find an **event_count** metric for each event type that you record in the Statsig console. The name of the metric matches the name of the raw event and its metric type is marked as **event_count**. 

![Screenshot 2024-11-13 at 8 37 30 AM](https://github.com/user-attachments/assets/4b7b30d6-d14d-4430-81a5-4fc467d466d2)


## User Accounting Metrics
Statsig automatically derives a number of **User Accounting** metrics based on any exposure or custom event triggered by a user on a given day.

**User Accounting** metrics start with a definition of a daily active user (DAU). By default, Statsig considers a user as a DAU if they've trigger any event, gate check, or experiment check on a given day. A DAU is a binary designation that's assigned to every user. A user can be either a DAU for a given day, or not (i.e. inactive). You can customize this definition of DAU to exclude or include specific exposure and custom events from your application.

| Metric      | Automatic | Dimensions | Possible Values            | Description                                                                |   Example                      |
| ----------- | --------- | ---------- | -------------------------- | -------------------------------------------------------------------------- | ------------------------------ |
| user        | Yes       | No         | Depends on specific metric | Counts users that trigger any exposure or custom event on a given day         | Daily Active Users             |


Like the **event_dau** metric (Deprecated as of October 16, 2024), Statsig computes **User Accounting Metrics** for each unit ID that you define in your Statsig Project. For example, given User IDs, DAU counts the number of distinct users that triggered the event. Given Stable IDs, DAU counts the number of distinct devices running your application.

See [User Accounting Metrics](/metrics/user) for the full list of user accounting metrics and learn how to customize the definition of a DAU. 

Note that Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not follow daylight savings time. 

Note: Auto-generated **User Accounting Metrics** are not supported today for data warehouse ingestions. 

## Metrics Catalog

The **Metrics Catalog** tab allows you to quickly search and tag your metrics. Tags enable you organize your metrics and create collections of metrics that are associated in some way. For example, you could tag a set of metrics focused on a product area, business function, business objective, and so on. You can also create a loose collection of guardrail metrics that teams check in every experiment to ensure there are causing no unexpected effects in other parts of the business. Once you create a tagged collection of metrics, you can easily pull up this set of metrics when viewing your experiment results and zoom into the context that you want to focus on. 

![Screenshot 2024-11-13 at 8 36 05 AM](https://github.com/user-attachments/assets/d22ff8d2-5aea-42b4-86e0-126c25678e15)

## Event DAU Metric (Legacy Support Only)

:::warning

See deprecation notice above.

:::

Like **event_count**, Statsig formerly created an **event_dau** metric that measures the number of unique users who trigger a specific event on a given day. Each user can have a value of 1 or 0 corresponding to active or inactive, based on whether they trigger an event or not, on a given day. This metric counts the number of users who are marked as active ("1") or not ("0").

It's important to note that an **event_dau** metrics produces a value per user per day. When the metric is is aggregated for users across the duration of an experiment, it is known as the "Event Participation Rate" as this can be interpreted as the probability a unit is DAU for that event. As such, **event_dau** metrics are always between 0 and 1 for a user, since they are computed as "# Days with the Event" / "# Days Being Considered". 

:::tip
Sometimes you might want a metric similar to **event_dau** but not normalized by a number of days.

If you're looking for a metric that measures if the user has an event over the entire duration of the experiment, try a custom metric set to metric type "Unit Count" with "One-Time Event" rollup mode.

:::

This metric works well in experimentation as it minimizes outliers, has tighter confidence intervals, and enables a simple measure to describe a user's breadth of activity across different events.

Statsig computes the **event_dau** for each unit ID that you define in your Statsig Project. For example, given User IDs, **event_dau** counts the number of distinct users that triggered the event. Given Stable IDs, *event_dau* counts the number of distinct devices using your application.

You will find an **event_dau** metric for each event type that you record with Statsig. The name of the metric matches the name of the raw event and its metric type is marked as **event_dau**. 

![Screenshot 2024-11-13 at 8 37 18 AM](https://github.com/user-attachments/assets/008034e9-cce8-4e6f-bce1-84a789ac4a19)
