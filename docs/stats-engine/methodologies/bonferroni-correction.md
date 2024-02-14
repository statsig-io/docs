---
title: Bonferroni Correction
sidebar_label: Bonferroni Correction
slug: /stats-engine/methodologies/bonferroni-correction
---

## What is Bonferroni Correction?

A Bonferroni Correction is a statistical method that reduces the probability of false positives by adjusting the significance level for multiple comparisons.

If you run a tests with α = 0.05, the probability of a false positive will be 5%. If you run more comparisons at the same significance level, the chance of at least one false positive goes up because each comparison is an additional opportunity for false positive.

Bonferroni corrections are an optional feature on Statsig experiments that reduces the probability of Type I errors (false positives) by adjusting the significance level (α). The significance level is divided by the number of comparisons being evaluated.

You can choose to apply these based on one or both of the following:

- The number of test groups (multiple treatment hypotheses). The significance level is divided by the number of variants being compared against control.
- The number of metrics in the scorecard. Here you may select what percentage of your total α is divided evenly among the Primary Metrics, and the remaining α is split equally among Secondary Metrics. For example:
  - Significance level of 0.05
  - 2 Primary Metrics and 4 Secondary Metrics
  - 60% of α applied to Primary Metrics
  - Each Primary Metric is calculated with α = 0.6 \* 0.05 / 2 = 0.015
  - Each Secondary Metric is calculated with α = 0.4 \* 0.05 / 4 = 0.005
- If both corrections are selected, they're applied on top of each other. In the example above, if we also wanted to correct for having 2 tests groups, we would further divide each α by 2.

When analyzing dimensions, if correction for metrics is enabled, it's applied separately for the dimensional breakdown. We use the number of dimensions as the total metric count to correct for _in the dimensional analysis_, but it does not impact topline metrics.

![image](https://github.com/statsig-io/docs/assets/31516123/038d75eb-5745-4587-b180-86b88594ccb9)
