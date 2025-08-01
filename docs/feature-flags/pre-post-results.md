---
title: Pre-Post Results
sidebar_label: Pre-Post Results
slug: /feature-flags/pre-post-results
keywords:
  - owner:shubham
last_update:
  date: 2025-08-01
---

# Pre-Post Results

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
2. **Collect pre-rollout data** - Gather metric values for these users from the period before the feature was rolled out
3. **Collect post-rollout data** - Gather metric values for these users from the period after the feature rollout
4. **Calculate the difference** - Compute the mean metric values for both pre and post periods, then calculate the delta (difference) between them
5. **Statistical analysis** - Generate confidence intervals around this delta to determine if the change is statistically significant

This method ensures we're comparing the same users before and after the feature rollout, helping to isolate the feature's impact from other factors like user acquisition or seasonal changes.

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
| Participating Unit | ❌ No |

## Best Practices

When using Pre-Post Results, consider these guidelines:

- Focus on metrics that are directly related to your feature's intended impact and have sufficient volume for rigorous analysis
- Remember that correlation doesn't equal causation. Consider other changes, seasonal effects, or external events that might influence your metrics during the analysis period
- Validate with domain knowledge. Use Pre-Post Results as one data point alongside qualitative feedback, user research, and business context to make informed decisions
- Look at A/B results when possible. If you have the chance to partially roll out a feature to less than 100% of users, it's highly recommended since this way you can measure the metric impact for users seeing the feature vs. not seeing the feature and arrive at true causation.

## Limitations

- **30-day window** - Only rollouts from the last 30 days are supported
- **No control group** - Results show correlation, not definitive causation
- **External factors** - Other changes during the analysis period can influence results
- **Metric type restrictions** - Some advanced metric types are not yet supported
