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

Statsig automatically creates a standard set of user accounting metrics to track common product-wide engagement metrics like daily active users (DAU), new users, and retention.  We also track more sophisticated metrics like L-ness, retention and stickiness metrics.  All of these rely on a company-wide definition of a daily active user.  By default, any Statsig SDK event/request (check_gate, get_config, log_event) associated with a user will automatically designate that user as being active for that day.  You can customize this set of events.

::: important
Auto-generated user accounting metrics are only created for customers using Statsig on cloud. Warehouse Native companies (WHN) most often have multiple datasets that could affect how they compute active users, and they generally opt to define their versions of user accounting metrics.
:::

### Notation and Conventions

- It's common to denote the first day a (new) user was active as Day Zero (D0), and the subsequent days as D1, D2, D3...etc.
- A weekly active user is someone who has been active within the last 7 days (0-6 days).  This includes users who were active on each of the 7 days, and users who have only been active on a single day.  The same definition applies to a monthly active user.
- A user with a single session that spans midnight with qualifying events at 11:59p and 12:01a will qualify a user as being a daily active user on both days.

# Statsig's Standard User Accounting Metrics

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
| monthly_user_stickiness | Stickiness | Fraction of the previous month's users who have been active within the last 28 days. |
| D1_retention_rate      | Retention  | Fraction of the previous day's (D0) new users who are active the following day (D1). |
| WAU @ D14 Retention Rate | Retention  | Fraction of new users from 13 days ago that have been active in the previous 7 days. |
| MAU @ D56 Retention Rate | Retention  | Fraction of new users from 56 days ago that have been active in the previous 28 days. |
| L7       | L-ness  | Average number of days a user was active in the last 7 days.  Each user can have a value of 0-7. |
| L14      | L-ness  | Average number of days a user was active in the last 14 days.  Each user can have a value of 0-14. |
| L28      | L-ness  | Average number of days a user was active in the last 28 days.  Each user can have a value of 0-28. |

These user metrics can be very useful in understanding the long-term behavior of your users.  However several of these metrics do not behave well as daily experimentation metrics.  This is because metrics like L7 are highly correlated across days.  For example, a user who is L7 = 7 on a given day can either be L7 = 6 or L7 = 7 the following day.  This is not a true daily independent variable.  Metrics like this can be more likely to trigger false positive and false negative results.  This generally applies to stickiness and L-ness metrics.

# Customizing the DAU Definition

You can customize the definition of DAU within the Statsig Console and specify or exclude a set of Statsig and custom events.  You can find this in the Project Settings. If you have privileges, you can edit this.

![image](https://github.com/user-attachments/assets/8239e1f5-133c-4ae2-914a-df5864159ccf)


There are several options:
1. Include or Exclude Statsig Events - check_gate() and get_config() can be included or excluded from the current active user definition.  By default, they are included.
2. Log Events - You can specify the set of events which will qualify a user as a daily active user.  By default, all events are included.
  i. Excluding specific events - Some companies may want to exclude specific events (eg. events that aren't considered significant user interactions, homepage_visit or notification_sent).  You can Expand and uncheck events you do not want to include.  You can also toggle whether future events (not shown on the list) should be included or excluded.
  ii. Include specific events - Some companies prefer to have a very narrow definition of an active user (eg. event = login).  This can be accomplished by selecting the set of events, and turning off "Include New Events by Default".

Changes to the DAU definition will go in place on the date of the change.  Historic data will remain unchanged.  We do not currently support the ability to backfill.  We do recommend setting your DAU definition before running any experiments or rolling out any features.
