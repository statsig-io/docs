---
title: Funnel++
sidebar_label: Funnel++
---

## Summary

Funnel metrics measure user journeys through a series of steps. There's additional guidance [here](/statsig-warehouse-native/features/funnel-metrics) on how to configure and use funnel metrics.

Statsig allows you to use advanced functionalities - normally reserved for product analytics tools - within the rigorous statistical framework used in pulse analysis. This includes:

- Configurable completion windows per-step
- Session controls - going beyond user-based conversion
- Built-in allowance for timestamp noise

### Use Cases

Funnel metrics are a powerful tool to understand how users move through your product. For example, you might want to measure:

- User conversion through a subscription flow, e.g. Start -> Description Page -> Payment Info -> Confirm, so you can measure if an experiment causes users to drop of less, and at which steps
- User conversion from "logged out visitor" to "first logged-in-article-read" leveraging Statsig's [ID Resolution](/statsig-warehouse-native/features/funnel-metrics)
- Session-level conversion of checking out a vacation property, so you can understand what the conversion looks like for every unique checkout flow -- not just at the user level

## Calculation

At the unit level, funnel metrics will calculate, for each step of the funnel, if the unit completed that step some time after all previous steps were completed in order. This creates a series of step flags.

If using session funnels, those step flags are instead counts of unique sessions.

At the group level, the stepwise mean is calculated as the units for the next step divided by the units for the current step. The overall mean is calculated as the units/sessions that completed the funnel divided by the unit/sessions that started the funnel.

Note that for each step, the _first_ occurrence after the previous step is treated as the canonical trigger and timestamp for that event going forward for subsequent timestamp comparisons.

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

Funnels in experiment-analysis order strictly. For example, in the funnel A->B->C, all subsequent timestamp comparisons are based on the FIRST occurrence of A. If a user has an A event on day 0, with no other events, and then A/B/C all occur in order on day 5, this funnel will not count as completed if there is a 1-day conversion window from A->B since the time from the first A to the first B is 5 days.

## Options

- Conversion window
  - A step-level setting specifying how long this step has to occur after the previous step. For example, in the funnel A->B->C, if B has a conversion window of one hour, it will only be counted if it occurs within 1 hour of A.
- Use Strict Event Ordering
  - Whether to use >= or > when comparing step timestamps. Strict mode allows you to have two subsequent steps of the same event without it "automatically" passing
- Timestamp Allowance
  - Allow some amount of buffer, in milliseconds, between funnel steps. Event logs can have noise on timestamps, so sometimes events may be logged slightly out of order. This setting helps to correct for this issue.
- Count Distinct Mode
  - Whether to count sessions or units. For sessions, you must provide a session identifier field on each step
- Calculation window (optional)
  - How long a unit has to complete the funnel, once started, and if the funnel starts when the unit is exposed to the experiment or when they trigger the first event in the funnel
- Treat Exposure as Initial Funnel Event
  - With this setting enabled, the first step of the funnel is the exposure event of the experiment. This makes it easy to measure the conversion rate to the first event, and additionally normalizes the final outcome per experiment-user. Note that this is incompatible with session-based funnels.
- Measure time to complete
  - Switches the funnel mode into measuring the average time for users to complete a funnel. This will create a ratio metric, where the numerator is the sum of funnel seconds-to-complete, and the denominator is the number of completed funnels. This can be useful in isolation, or when paired with a conversion measurement to understand the change to both completion rate and time to complete.
