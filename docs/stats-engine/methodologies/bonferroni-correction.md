---
title: Bonferroni Correction
sidebar_label: Bonferroni Correction
slug: /stats-engine/methodologies/bonferroni-correction
---

## Bonferroni Correction

If you run a tests with α = 0.05, the probability of a false positive will be 5%. If you run more comparisons at the same significance level, the chance of at least one false positive goes up because each comparison is an additional opportunity for false positive.

Bonferroni corrections are an optional feature on Statsig experiments that reduces the probability of Type I errors (false positives) by adjusting the significance level (α). The significance level is divided by the number of comparisons (equivalent to the number of test variants) in the experiment.

You can choose to apply these based on the number of test groups (multiple treatment hypotheses) or the number of metrics (multiple metric hypotheses; you can choose how much α to allocate to your primary metrics) or both (these will stack) .When analyzing dimensions, if metrics is enabled we add the number of dimensions to the total metric count *for the dimensional analysis*, but it does not impact topline metrics.  

![image](https://github.com/statsig-io/docs/assets/31516123/038d75eb-5745-4587-b180-86b88594ccb9)
