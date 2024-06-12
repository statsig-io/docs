---
title: Funnel Metrics
sidebar_label: Funnel
---

## Summary

Funnel metrics measure user journeys through a series of steps. There's more guides [here](/statsig-warehouse-native/features/funnel-metrics) on how to configure and use funnel metrics.

### Use Cases

Funnel metrics are a powerful tool to understand how users move through your product. For example, you might want to measure:

- User conversion through a subscription flow, e.g. Start -> Description Page -> Payment Info -> Confirm, so you can measure if an experiment causes users to drop of less, and at which steps
- User conversion from "logged out visitor" to "first logged-in-article-read" leveraging Statsig's [ID Resolution](/statsig-warehouse-native/features/funnel-metrics)
- Session-level conversion of checking out a vacation property, so you can understand what the conversion looks like for every unique checkout flow -- not just at the user level

## Calculation

At the unit level, funnel metrics will calculate, for each step of the funnel, if the unit completed that step some time after all previous steps were completed in order. This creates a series of step flags.

If using session funnels, those step flags are instead counts of unique sessions.

At the group level, the stepwise mean is calculated as the units for the next step divided by the units for the current step. The overall mean is calculated as the units/sessions that completed the funnel divided by the unit/sessions that started the funnel.

This would look like the SQL below:

```
-- Unit Level, per step
SELECT distinct
  unit_id,
  funnel_session_id, -- optional
  funnel_step_id,
  IF(`Completed All Steps Up to Current Step In Order`, 1, 0) as numerator,
  IF(`Completed Previous Steps In Order`, 1, 0) as denominator
FROM source_data;

--Group Level
SELECT
  group_id,
  funnel_step_id,
  SUM(numerator)/SUM(denominator) as mean
FROM unit_data
GROUP BY group_id;
```

### Methodology Notes

Conversion metrics require adjustment due to potential unit-level covariance between the numerator and the denominator. Statsig uses the delta method to estimate this adjustment.

By default, Statsig only includes numerators from metrics with non-null, non-zero denominators. This is configurable in the advanced settings.

## Options

- Count Distinct Mode
  - Whether to count sessions or units. For sessions, you must provide a session identifier field on each step
- Calculation window (optional)
  - How long a unit has to complete the funnel, once started, and if the funnel starts when the unit is exposed to the experiment or when they trigger the first event in the funnel
