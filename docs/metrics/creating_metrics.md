---
title: Metrics
sidebar_label: Creating Metrics
slug: /metrics
---

# Creating Metrics

## Automatic Metrics Derived from Events

Statsig's metrics engine automatically derives 3 metric types from the events you log or send.  Two individual metrics are created for every unique event (event_count and event_dau), while a standard set of user accounting metrics are created from the entire set of events.

1. Event Counts (event_count) - The total count (frequency) for each event per day.
2. Event Daily Active Users (event_dau) - The total number of unique user that triggered a specific event on a given day.
3. User Accounting Metrics (user) - A standard set of user accounting metrics based on a definition of a "daily active user".  This includes project-wide metrics like monthly active users, weekly new users, D1-retention, and weekly stickiness.

## Custom Metrics

We also support the ability to create custom metrics.

1. Sum - Add up numeric values.  This can be useful when specific events have numeric values (eg. purchase price, or timespent).
2. Ratio - Comparison metric that involve a numerator and denominator.  This can include conversion rate metrics, or number of events per user.
