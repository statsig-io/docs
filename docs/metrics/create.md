---
title: Creating Metrics
sidebar_label: Creating Metrics
slug: /metrics/create
---

## Metrics Automatically Derived from Events

Statsig's metrics engine automatically creates 3 metric types from the events you log or send.  Two individual metrics are created for each unique event (event_count and event_dau), while a standard set of user accounting metrics are created from the entire set of log_event(), check_gate() and get_config().

1. Event Counts (event_count) - The total count (frequency) for each event per day.
2. Event Daily Active Users (event_dau) - The total number of unique user that triggered a specific event on a given day.
3. User Accounting Metrics (user) - A standard set of user accounting metrics based on a definition of a "daily active user".  This includes project-wide metrics like monthly active users, weekly new users, D1-retention, and weekly stickiness.

## Custom Metrics

![Custom Metrics Section](https://user-images.githubusercontent.com/77478319/137035147-1d87b955-3f95-46b7-b2c7-fb709f7cec7d.png)

We also support the ability to create custom metrics.  You can find this under Metrics > Custom.  We support two metric types:

1. Sum - Add up numeric values.  This can be useful when specific events have numeric values (eg. purchase price, or timespent).
2. Ratio - Comparison metric that involve a numerator and denominator.  This can include conversion rate metrics, or number of events per user.

### Custom Sum

![image](https://user-images.githubusercontent.com/31516123/157346324-e84188a2-9143-4a41-94c3-2b4246eb28af.png)

Sum metrics can be created in 3 easy steps:
1. Provide a Metric Name - It's generally best practice to make sure the name reflects the calculation (eg. total_timespent, total_revenue, sum_of_message_sends).
2. Select an Event
3. Specify where the numeric value will be provided (value or metadata).  While Value is the easiest way to log, we recommend using Metadata.  This allows you to use the Value field for a metric dimension (ie. subcategory).

### Custom Ratio

![custom_ratio](https://user-images.githubusercontent.com/77478319/137035931-32f63525-1bb6-4ecc-8195-461580442998.png)

Custom Ratio metrics comprise of a numerator and a denominator.  We support a flexible way to generate these ratio metrics.  The important caveat is that these metrics are first calculated at a user-level, and then aggregated at the company or experiment level.  This means that users with a denominator value of zero are excluded (which removes undefined values from the calculation).  This does support the construction of conversion rate metrics and the tracking of users through funnel events (eg. Out of all the users who triggered Event A, what percent also triggered Event B).  It's worth a reminder that metrics are computed daily so conversions must happen on the same calendar day to qualify.

Ratio metrics can be constructed in 3 steps:
1. Provide a Metric Name - It's generally best practice to make sure the name reflects the calculation (eg. click_thru_rate, items_per_cart_ratio, and likes_per_post).
2. Select an event to use for the numerator.  We support two modes of calculation, total count (ie. event_count) and unique users (ie. event_dau).
3. Select an event to use for the denominator.

#### Total Count vs Unique Users: Examples

We offer a flexible option in computing the numerator and denominator.  They can be used for a variety of situations:
1. Items Per Cart - You can track the number of unique items added to a cart if your company logs an "add_to_cart" event for each item.  You can compute the ratio by selecting "add_to_cart" for both the numerator and denominator.  For the numerator, you want total count and the denominator should be unique users.  Since this metric is computed daily, only for users with a non-zero denominator, this metric can compute ratios like 1/1, 2/1, 2/1, and 5/1 for individual users, which is aggregated to 10/4 = 2.5 items per cart.
2. Click-Thru Rate (CTR).  Can be computed by providing two events, a button-view event (button_rendered) and a click event (button_clicked).  It's generally best practice to specify Unique Users for each, so users who reload the page multiple times, but click only once correspond to a 100% CTR (1 out of 1).  Likewise, users who load a page once, but click multiple times on a button will only count as 1 out of 1.  This also solves for the case where users will see an important button like "Sign-up" multiple times a day, and it's still considered a success if they click just once.

#### A word of caution

In experimentation, ratio metrics are a frequent source of misleading information.  It's possible to see an increase in click-through-rate, but have a net decrease in total clicks (the opposite can also exist).  This situation can occur if the total number of button views (denominator) decreases.  It's generally best practice to track the numerator and denominator as individual metrics when monitoring ratio metrics.  Ratio metrics are often highly subjected to statistical noise and can be tricky to obtain a statistically significant result.
