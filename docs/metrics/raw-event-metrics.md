---
title: Auto-generated Metrics
sidebar_label: Auto-generated Metrics
slug: /metrics/metrics-from-events
---

# Auto-generated Metrics
Metrics are critical for monitoring the health and usage of your product as well as the impact of new features and experiments. 

Statsig automatically generates a standard set of metrics from the **custom events** you that log. These metrics consist of three elements:
1. **Roll-up Window** - Statsig computes metrics from custom events aggregated over a day. Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not change with daylight savings time. This prevents some days from having 23 and 25 hours which can cause a +/-4% change to some metrics on a biannual basis.
2. **Unit Identifier** - While you can record custom events with and without a unique user identifier, Statsig requires a unit identifier (usually a user_id) to track a user across multiple events and sessions to support Experiments, Pulse (experiment results), and Autotune. If you don't have access to a user_id when logging a custom event, create a temporary identifier to track users at a session or device-level. 
3. **Metric Value** - Statsig automatically computes values for **event_count** and **event_dau** metrics that measure the number of times an event is triggered and the number of unique users that triggered the event.  


| Metric      | Automatic | Dimensions | Possible Values            | Description                                                                |   Example                      |
| ----------- | --------- | ---------- | -------------------------- | -------------------------------------------------------------------------- | ------------------------------ |
| event_count | Yes       | Yes        | 0, 1, 2,...                | Counts the number of events triggered on a given day                       | Number of page views           |
| event_dau   | Yes       | Yes        | 0, 1                       | Marks each user as 1 or 0 based on whether they triggered the event or not | Unique users who viewed a page |


When you click on an event type in the **Events** tab, you will see a detailed view of the event, including the **event_count** and **event_dau** metrics linked to that event. Click on these metrics to visit the detail pages for these metrics. 

![image](https://user-images.githubusercontent.com/1315028/182260966-7b50660d-352f-4d84-9a16-7bd915983894.png)

## Event Count Metric
Event count is the simplest metric in your Statsig Project. For every event recorded, Statsig automatically creates an **event_count** metric based on the number of times Statsig receives that event each day. In experiments, Statsig calculates this value for each user, and each user can have values ranging from 0, 1, 2,... etc.

You will find an **event_count** metric for each event type that you record in the Statsig console. The name of the metric matches the name of the raw event and its metric type is marked as **event_count**. 

![Screen Shot 2022-08-01 at 1 48 36 PM](https://user-images.githubusercontent.com/1315028/182260179-a1bfc2b7-e6bf-4d5a-8c04-7acb344e5b35.gif)

## Event DAU Metric
Like **event_count**, Statsig automatically creates an **event_dau** metric that measures the number of unique users who trigger a specific event on a given day. Each user can have a value of 1 or 0 corresponding to active or inactive, based on whether they trigger an event or not, on a given day. This metric counts the number of users who are marked as active ("1") or not ("0").

It's important to note that an **event_dau** metrics produces a value per user per day. When the metric is is aggregated for users accross the duration of an experiment, it is known as the "Event Participation Rate" as this can be interpreted as the probability a unit is DAU for that event. As such, **event_dau** metrics are always between 0 and 1 for a user, since they are computed as "# Days with the Event" / "# Days Being Considered".

> [!TIP]
> Sometimes you might want a metric similar to **event_dau** but not normalized by a number of days.
>
> If you're looking for a metric that measures if the user has an event over the entire duration of the experiment, try a "Unit Count" custom metric with "One-Time Event" rollup mode.

This metric works well in experimentation as it minimizes outliers, has tighter confidence intervals, and enables a simple measure to describe a user's breadth of activity across different events.

Statsig computes the **event_dau** for each unit ID that you define in your Statsig Project. For example, given User IDs, **event_dau** counts the number of distinct users that triggered the event. Given Stable IDs, *event_dau* counts the number of distinct devices using your application.

You will find an **event_dau** metric for each event type that you record with Statsig. The name of the metric matches the name of the raw event and its metric type is marked as **event_dau**. 

![Screen Shot 2022-08-01 at 1 48 49 PM](https://user-images.githubusercontent.com/1315028/182260198-d8c9f508-e405-4451-81ef-6759636d8c38.gif)

## User Accounting Metrics
Statsig automatically derives a number of **User Accounting** metrics based on any exposure or custom event triggered by a user on a given day.

**User Accounting** metrics start with a definition of a daily active user (DAU). By default, Statsig considers a user as a DAU if they've trigger any event, gate check, or experiment check on a given day. A DAU is a binary designation that's assigned to every user. A user can be either a DAU for a given day, or not (i.e. inactive). You can customize this definition of DAU to exclude or include specific exposure and custom events from your application.

| Metric      | Automatic | Dimensions | Possible Values            | Description                                                                |   Example                      |
| ----------- | --------- | ---------- | -------------------------- | -------------------------------------------------------------------------- | ------------------------------ |
| user        | Yes       | No         | Depends on specific metric | Counts users that trigger any exposure or custom event on a given day         | Daily Active Users             |


Like the **event_dau** metric, Statsig computes **User Accounting Metrics** for each unit ID that you define in your Statsig Project. For example, given User IDs, DAU counts the number of distinct users that triggered the event. Given Stable IDs, DAU counts the number of distinct devices running your application.

User Accounting metrics are listed in the **Metrics** section under the **Charts** tab in the Statsig console. See [User Accounting Metrics](/metrics/user) for the full list of user accounting metrics and learn how to customize the definition of a DAU. 

![Screen Shot 2022-06-07 at 12 55 08 PM](https://user-images.githubusercontent.com/101903926/172470741-af6294d0-a84a-4630-80f8-827de7e0c03b.png)

Note that Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not follow daylight savings time. 

Note: Auto-generated **User Accounting Metrics** are not supported today for data warehouse ingestions. 

## Metrics Catalog

The **Metrics Catalog** tab allows you to quickly search and tag your metrics. Tags enable you organize your metrics and create collections of metrics that are associated in some way. For example, you could tag a set of metrics focused on a product area, business function, business objective, and so on. You can also create a loose collection of guardrail metrics that teams check in every experiment to ensure there are causing no unexpected effects in other parts of the business. Once you create a tagged collection of metrics, you can easily pull up this set of metrics when viewing your experiment results and zoom into the context that you want to focus on. 

![Screen Shot 2022-06-07 at 12 08 08 PM](https://user-images.githubusercontent.com/101903926/172462680-68a6de4e-17bf-4b11-920d-6d7830551012.png)

 Similar to the **Events** tab, you can toggle between a list view or chart view of your metrics to view the trend line over time.  
 
 ![Screen Shot 2022-06-07 at 12 09 40 PM](https://user-images.githubusercontent.com/101903926/172462947-877bbcc7-46b3-45cd-ac57-d0dc2c949d7d.png)
