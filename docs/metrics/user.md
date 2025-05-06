---
title: User Accounting Metrics (DAU/WAU/etc.)
sidebar_label: User Accounting Metrics
slug: /metrics/user
keywords:
  - owner:shubham
last_update:
  date: 2025-01-29
---

## DAU (Daily Active User) Definition

Statsig automatically creates a standard set of user accounting metrics to track common product-wide engagement metrics like daily active users (DAU), new users, and retention.  We also track more sophisticated metrics like L-ness, retention, and stickiness. 

All of these Standard User Accounting Metrics rely on a company-wide definition of a daily active user, which is defined by default in Statsig as [users that the Statsig SDK has logged](/concepts/user) any event or request (e.g., check_gate, get_config, log_event) for. You can always [customize your company's definition of a DAU](#customizing-the-dau-definition).


:::tip[Warehouse Native Users]
You're currently viewing a feature designed for Statsig Cloud users. Warehouse Native customers typically have multiple datasets that uniquely affect how they define active users. Read about [Retention metrics in Warehouse Native](/statsig-warehouse-native/metrics/retention).
:::

## Notation and Conventions
- It's common to denote the first day a (new) user was active as Day Zero (D0), and the subsequent days as D1, D2, D3... etc.
- A weekly active user is someone who has been active within the last 7 days (0-6 days).  This includes users who were active on each of the 7 days, and users who have only been active on a single day.  The same definition applies to a monthly active user.
- A user with a single session that spans midnight with qualifying events at 11:59p and 12:01a will qualify a user as being a daily active user on both days.

## Default User Accounting Metrics in Statsig

### General User Metrics

| **Metric Name**              | **Type**           | **Description** |
|-----------------------------|--------------------|-------------------------------|
| `daily_active_user`         | Count              | Users who were active on a given calendar day (DAU). |
| `weekly_active_user`        | Count              | Users who were active at least once in the past 7 days (WAU). |
| `monthly_active_user`       | Count              | Users who were active at least once in the past 28 days (MAU). |
| `new_dau`                   | Count              | Users who became active for the first time on a specific day. |
| `new_wau`                   | Count              | Users who became active for the first time within the last 7 days. |
| `new_mau_28d`               | Count              | Users who became active for the first time within the last 28 days. |
| `daily_user_stickiness`     | Stickiness (Rolling) | Fraction of the previous day's users who are active on the next day. Rolling day-to-day repeat engagement (**not** DAU/MAU or DAU/WAU). |
| `weekly_user_stickiness`    | Stickiness (Rolling) | Fraction of the previous week's users who have been active within the last 7 days. Rolling week-over-week repeat engagement (**not** WAU/MAU). |
| `monthly_user_stickiness`   | Stickiness (Rolling) | Fraction of the previous month's users who have been active within the last 28 days. Rolling month-over-month repeat engagement (**not** DAU/MAU). |
| `d1_retention_rate`         | Retention (Rolling)| % of new users from 1 day ago who were active at least once today. Rolling Day 2 window retention. |
| `WAU @ D14 Retention Rate`  | Retention (Rolling)| % of new users from 13 days ago who were active at least once in days 8–14. Rolling Week 2 window retention. |
| `MAU @ D56 Retention Rate`  | Retention (Rolling) | % of new users from 56 days ago who were active at least once during days 29–56. Rolling Month 2 retention. |
| `L7`                        | L-ness         | Average number of days a user was active in the last 7 days (value range: 0–7). |
| `L14`                       | L-ness         | Average number of days a user was active in the last 14 days (value range: 0–14). |
| `L28`                       | L-ness         | Average number of days a user was active in the last 28 days (value range: 0–28). |


These user metrics can be very useful in understanding the long-term behavior of your users.  However, several of these metrics do not behave well as daily experimentation metrics.  This is because metrics like L7 are highly correlated across days.  For example, a user who is L7 = 7 on a given day can either be L7 = 6 or L7 = 7 the following day.  This is not a true daily independent variable.  Metrics like this can be more likely to trigger false positive and false negative results.  This generally applies to stickiness and L-ness metrics.

## Customizing the DAU Definition

You can customize the definition of DAU within the Statsig Console and specify or exclude a set of Statsig and custom events.  You can find this in the Project Settings. If you have privileges, you can edit this.

![image](https://github.com/user-attachments/assets/8239e1f5-133c-4ae2-914a-df5864159ccf)


There are several options:
1. Include or Exclude Statsig Events - check_gate() and get_config() can be included or excluded from the current active user definition.  By default, they are included.
2. Log Events - You can specify the set of events which will qualify a user as a daily active user.  By default, all events are included.
  i. Excluding specific events - Some companies may want to exclude specific events (eg. events that aren't considered significant user interactions, homepage_visit or notification_sent).  You can Expand and uncheck events you do not want to include.  You can also toggle whether future events (not shown on the list) should be included or excluded.
  ii. Include specific events - Some companies prefer to have a very narrow definition of an active user (eg. event = login).  This can be accomplished by selecting the set of events, and turning off "Include New Events by Default".

Changes to the DAU definition will go in place on the date of the change.  Historic data will remain unchanged.  We do not currently support the ability to backfill.  We do recommend setting your DAU definition before running any experiments or rolling out any features.
