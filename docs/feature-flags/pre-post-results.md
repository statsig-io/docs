---
title: Pre-Post Results
sidebar_label: Pre-Post Results
slug: /feature-flags/pre-post-results
keywords:
  - owner:shubham
last_update:
  date: 2025-08-02
---

# Pre-Post Results

:::info Cloud Only Feature
This feature is currently available only on Statsig Cloud and is not yet supported on Warehouse Native.
:::

## What are Pre-Post Results in Statsig?

Pre-Post Results is an analysis mode for Feature Gates in Statsig that allows you to measure the impact of feature rollouts when a traditional A/B comparison isn't possible. By comparing key metrics before and after a feature gate is rolled out to 100% of users, you can identify the directional impact of your features in production.

![Pre-Post Results Interface](/img/pre-post-results.png)

This is particularly valuable for:

- **Emergency rollouts** - Features that needed to be shipped immediately without time for slow rollout
- **Infrastructure changes** - Backend improvements or technical features that affect all users by nature
- **Retroactive analysis** - Understanding the impact of features that were already rolled out without experiments
- **Regulatory or ethical features** - Changes that can't ethically be withheld from a control group

## When does Statsig calculate Pre-Post Results?

Pre-Post Results are available for targeting rules that meet specific rollout conditions:

1. The targeting rule started at 100% pass rate or was rolled out from 0% to 100% in a single step
2. The rollout happened in the last 30 days

When you select a qualifying rule in the Metrics Impact tab, Statsig automatically switches to Pre-Post Results mode and displays a banner to indicate you're viewing Pre-Post analysis.

## How does Pre-Post Results work?

Pre-Post Results uses a straightforward approach to measure feature impact:

1. **Identify the participating units** - Find all users who were exposed to the feature after the 100% rollout
2. **Collect pre/post-rollout data** - Gather metric values for these users from the periods before and after the rule change
3. **Bucket metric data into discreet periods** - Statsig automatically groups metric data into buckets of a consistent duration
4. **Calculate the difference** - Compute the mean metric values for both pre and post periods, treating each bucket as a unique observation, then calculate the delta (difference) between them

This method ensures we're comparing the same users before and after the feature rollout.

## Supported Metric Types

| Metric type | Supported |
|-------------|-----------|
| Event Count | ✅ Yes |
| Event Count Custom | ✅ Yes |
| Event User | ✅ Yes |
| Sum | ✅ Yes |
| Mean | ✅ Yes |
| Funnel | ❌ No |
| Ratio | ❌ No |
| Participation Rate | ❌ No |

## Best Practices

When using Pre-Post Results, consider these guidelines:

- Focus on metrics that are directly related to your feature's intended impact and have sufficient volume
- Remember that correlation doesn't equal causation. Consider other changes, seasonal effects, or external events that might influence your metrics during the analysis period
- Validate with domain knowledge. Use Pre-Post Results as one data point alongside qualitative feedback, user research, and business context to make informed decisions
- Look at A/B results when possible. If you have the chance to partially roll out a feature to less than 100% of users, it's highly recommended since this way you can measure the metric impact for users seeing the feature vs. not seeing the feature and arrive at true causation.

## Limitations

- **30-day window** - Only rollouts from the last 30 days are supported
- **No control group** - Results show correlation, not definitive causation
- **External factors** - Other changes during the analysis period can influence results
- **Metric type restrictions** - Some advanced metric types are not yet supported
