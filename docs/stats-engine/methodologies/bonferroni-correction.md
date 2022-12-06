---
title: Bonferroni Correction
sidebar_label: Bonferroni Correction
slug: /stats-engine/methodologies/bonferroni-correction
---

## Bonferroni Correction

If you run a tests with α = 0.05, the probability of a false positive will be 5%. If you run more comparisons at the same significance level, the chance of at least one false positive goes up because each comparison is an additional opportunity for false positive.

Bonferroni corrections are an optional feature on Statsig experiments that reduces the probability of Type I errors (false positives) by adjusting the significance level (α). The significance level is divided by the number of comparisons (equivalent to the number of test variants) in the experiment.
