---
title: Retention Metrics
sidebar_label: Retention
keywords:
  - owner:vm
---

## Summary

Retention metrics measure the rolling retention rate across a configured time window for a given event - or between two different events.

### Use Cases

Retention metrics are an easy and powerful way to measure user stickiness, conversion, and growth over the duration of experiments and holdouts. For example, this retention metric can evaluate the change of "Current User Retention", "Notification Retention", "Video Viewer Retention" or more over the course of the experiment, and be broken down in timeseries and days-since-exposure views to understand how this shifted over time.

It's fairly typical for platforms to limit retention metrics to checking if a unit was active between days X and X+Y since exposure. This is useful for new-user or marketing experiments, but is incomplete and is notably less useful for experiments targeted at an existing userbase.

[This article in Lenny's newsletter](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth) provides a view into how people are using these metrics to drive user growth.

We highly recommend using this metric type for any change aimed at increasing user stickiness - e.g. anything that touches notifications, reactivation campaigns, or quality work.

### Setup and Definition

Retention metrics are defined with a duration and a lookback window. The period is measured backwards from the end - so "Lookback = 7, Duration = 14" or L7D14 would measure the week ending 14 days after the start event

![Retention Setup](https://github.com/user-attachments/assets/cce09282-0a9b-4218-b823-7416f03ef387)

This is a rolling calculation. Each day a user triggers the start event, they get a 1 in their metric denominator. If they are active in the corresponding completion window, their numerator will be 1 for that day.

Only days with completed windows will be included in pulse. For example if the duration is 7, the last week of data is excluded from pulse to avoid diluting the metric since an L3D7 metric would always have a numerator of 0 for those days.

![Retention Explanation](https://github.com/user-attachments/assets/2a9d8731-1c28-4c59-a0fe-3c1e7586c129)

## Calculation

```
-- Denominator - 1/0 flag for activity on a day
WITH denominator AS (
    SELECT
        unit_id,
        date,
        group_id,
        MAX(1) as denominator
    FROM source_data
    WHERE <start_filter>
    GROUP BY ALL;
),

-- Numerator Candidates - 1/0 flag for success activity on a day
-- Note by default this is equivalen tot the denominator CTE
numerator_candidates AS (
    SELECT
        unit_id,
        date,
        group_id,
        MAX(1) as denominator
    FROM source_data
    WHERE <success_filter>
    GROUP BY ALL
),

-- Numerators, deduplicated - 1/0 flag for success per denominator
-- Now we have a 1-0 numerator flag per denominator-day
joined_data AS (
    SELECT
        denominator.unit_id,
        denominator.date,
        den.group_id,
        1 as denominator
        MAX(CASE WHEN numerator_candidates.unit_id IS NOT NULL THEN 1 ELSE 0 END) as numerator
    FROM denominator
    LEFT JOIN numerator_candidates
    ON denominator.unit_id = numerator_candidates.unit_id
    AND numerator_candidates.date BETWEEN
        denominator.date + INTERVAL '<END - (LENGTH - 1)>' DAY
        AND denominator.date + INTERVAL '<LENGTH>' DAY
    GROUP BY ALL
)

-- Group Level
SELECT
  group_id,
  SUM(denominator) as unit_days_started,
  SUM(numerator) as unit_days_completed,
  SUM(numerator)/SUM(denominator) as mean
FROM joined_data
GROUP BY ALL
```

### Methodology Notes

Retention metrics are [ratio metrics](./ratio.md) for the purposes of pulse calculations; the only distinction is that the metric date is attributed to the denominator date.

The ratio components for retention metrics reflect the rolling metric definition:
- the denominator is the average number of days per user where the "retention start" event was triggered
- the numerator is the average number of days per user where a "retention start" event had a corresponding "retention end" event in its retention period.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- Retention Lookback Window (Days)
  - The length of the "Completion Event" collection window
- Retention Period End (Days)
  - When to stop measuring retention completion events
- Use a different start and completion event for retention calculations
  - Choose a secondary event for completion windows. By default, retention measures a behavior's retention to itself. Toggling this allows you to measure a secondary event instead - for example if you have user accounting flags you could measure "IS CHURNED" -> "IS REACTIVATED" as well as "IS REACTIVATED" -> "IS CHURNED" to measure both reactivation and falloff of a long-term marketing test.
- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
