---
title: Metrics
sidebar_label: Introduction
slug: /metrics
---

Metrics are critical to monitoring your product and providing experimental results.  Statsig converts the events you send us into useful metrics that track the health and usage of your product.  There are a few important conventions we follow:

1. Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not change with daylight savings time.  This prevents some days from having 23 and 25 hours which can cause a +/-4% change to some metrics on a biannual basis.
2. We track and report events with and without user_id wherever possible.  We require user_id to track users across events and sessions and some Statsig features (like Experiments, Pulse and Autotune) will not work without it.  If you do not have a user_id, we recommend creating a tracking ID (eg. for each session or device) if you are interested in these features.

# Creating Metrics

## Automatic Metrics Derived from Events

Statsig's metrics engine automatically derives 3 metric types from the events you log or send.  Two individual metrics are created for every unique event (event_count and event_dau), while a standard set of user accounting metrics are created from the entire set of events.

1. Event Counts (event_count) - The total count (frequency) for each event per day.
2. Event Daily Active Users (event_dau) - The total number of unique user that triggered a specific event on a given day.
3. User Accounting Metrics (user) - A standard set of user accounting metrics based on a definition of a "daily active user".  This includes project-wide metrics like monthly active users, weekly new users, D1-retention, and weekly stickiness.

## Custom Metrics

We also support the ability to create custom metrics.

1. Sum - Add up numeric values.  This can be useful when specific events have numeric values (eg. purchase price, or timespent).
2. Ratio - Comparison metric that involve a numerator and denominator.  This can include conversion rate metrics, or number of events oer user.

# Metric Types

## Event Count (metric_type = event_count)

Event counts are the simplest metric.  For every event, we count the number of times Statsig receives that event for each day.  In experiments, this value is calculated for each user, and users can have values ranging from 0, 1, 2, ... etc.

## Event DAU (metric_type = event_dau)

Event DAU measures the number of unique users that have triggered a specific event on a given day.  Users can have a value of 1 or 0 corresponding to active or inactive.  This metric tends to behave the best in experimentation as it minimizes outliers, has tighter confidence intervals while being a simple metric that tracks different user behaviors.

## User Accounting Metrics (metric_type = user)

User metrics start with a definition of a daily active user (DAU).  By default, Statsig will consider a user as a daily active user if they've triggered any event, gate check, or config check on a given day.  A daily active user is a binary designation that's assigned to every user; A user can be either a daily active user for a given day, or not (ie. inactive).  Statsig's default day starts at GMT-8 (Pacific Standard Time), and does not follow daylight savings time.

### Statsig's Standard User Accounting Metrics

From the simple definition of a daily active user, we can create an array of other user accounting metrics.  

Notation and Conventions:
- It's common to denote the first day a (new) user was active as Day Zero (D0), and the subsequent days as D1, D2, D3...etc.
- A weekly active user is someone who has been active within the last 7 days (0-6 days).  This includes users who were active on each of the 7 days, and users who have only been active on a single day.  The same definition applies to a monthly active user.
- A user with a single session that spans midnight with qualifying events at 11:59p and 12:01a will qualify a user as being a daily active user on both days.

| Metric Name            | Type       | Description                    |
|------------------------|------------|--------------------------------|
| daily active user      | Count      | Count of daily active users, or users who were active for a given day. |
| weekly_active_user     | Count      | Count of users who have been active within the last 7 days (0-6 days from a given date). |
| monthly_active_user    | Count      | Count of users who have been active within the last 28 days (0-28 days from a given date). |
| new_dau                | Count      | Count of users who are a daily active user for the first time on a given date. |
| new_wau                | Count      | Count of users who became a daily active user within the last 7 days. |
| new_mau_28d            | Count      | Count of users who became a daily active user within the last 28 days. |
| daily_user_stickiness  | Stickiness | Fraction of the previous day's users who are active on the next day. |
| weekly_user_stickiness | Stickiness | Fraction of the previous week's users who have been active within the last 7 days. |
| montly_user_stickiness | Stickiness | Fraction of the previous month's users who have been active within the last 28 days. |
| D1_retention_rate      | Retention  | Fraction of the previous day's (D0) new users who are active the following day (D1). |
| WAU @ D14 Retention Rate | Retention  | Fraction of new users from 13 days ago that have been active in the previous 7 days. |
| MAU @ D56 Retention Rate | Retention  | Fraction of new users from 56 days ago that have been active in the previous 28 days. |
| L7       | L-ness  | Average number of days a user was active in the last 7 days.  Each user can have a value of 0-7. |
| L14      | L-ness  | Average number of days a user was active in the last 14 days.  Each user can have a value of 0-14. |
| L28      | L-ness  | Average number of days a user was active in the last 28 days.  Each user can have a value of 0-28. |

These user metrics can be very useful in understanding the long-term behavior of your users.  However several of these metrics do not behave well as daily experimentation metrics.  This is because metrics like L7 are highly correlated across days.  For example, a user who is L7 = 7 on a given day can either be L7 = 6 or L7 = 7 the following day.  This is not a true daily independent variable.  Metrics like this can be more likely to trigger false positive and false negative results.  This generally applies to stickiness and L-ness metrics.

### Customizing the DAU Definition

You can customize the definition of DAU within the Statsig Console and specify or exclude a set of Statsig and custom events.  This can be used in multiple ways.
1. You can exclude a set of events which may not qualify a user as a daily active user.  Some companies will want to exclude light website browsing behavior (eg. homepage visit), or exclude non-user-triggered events (eg. notification sent).
2. You can include a specific set of events that most of your users will trigger (eg. Login).

Changes to the DAU definition will start to be reflected for the current day.  We do not currently support the ability to backfill.

# Metrics Tab

The Metrics tab allows you to visualize all the [events that you have logged](/guides/logging-events) in Statsig. The **Events** page shows all the events, including a real-time stream of events as they come in.

![image](https://user-images.githubusercontent.com/74588208/127933988-c981bf83-f20c-4404-8194-004017cf96ef.png)

From here you can drill into each event and see a detailed view of the logs, broken down by each unique value that was logged.

![image](https://user-images.githubusercontent.com/74588208/127934009-c94d7d55-6cdc-4c7e-8ea7-381a6fb4db3d.png)

The **Users** page shows user-level metrics that are derived from the events that you log.

![image](https://user-images.githubusercontent.com/74588208/127933909-a51c5587-992b-4fc7-8dd4-147c149772cb.png)

The **Custom** page allows you to create new metrics based on the ones you have logged.

![image](https://user-images.githubusercontent.com/74588208/127936616-ee236410-a324-4990-a4eb-2e0d7a6829e1.png)
