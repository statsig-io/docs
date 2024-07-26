---
title: Benjamini–Hochberg Procedure
sidebar_label: Benjamini–Hochberg
slug: /stats-engine/methodologies/benjamini–hochberg-procedure
---

## Coming soon

Currently in beta. Reach out in Slack if you're having it turned on for your company now.

## Methodology

The Benjamini-Hochberg procedure is a statistical method that reduces the probability of false positives by adjusting the significance level for multiple comparisons. It is not as extreme as a [Bonferroni Correction](https://docs.statsig.com/stats-engine/methodologies/bonferroni-correction), because instead of controlling the chance of at least one false positive (Family Wise Error Rate), this controls the expected value of false positives when the null hypothesis has been rejected (False Discovery Rate).

The significance level is calculated by sorting p-values in ascending order and comparing with the a threshold. Each p-value’s threshold is the desired False Discovery Rate divided by the number of comparisons being evaluated multiplied by what rank a p-value is in the ordered list. The largest threshold value which is higher than its corresponding p-value is our new significance level ($\alpha$).

The Benjamini-Hochberg Correction can be applied based on:

- The number of test groups (multiple treatment hypotheses). For each metric aggregate the list of p-values from each variant and complete the Benjamini-Hochberg procedure.
- The number of metrics in the scorecard. For each variant aggregate the list of p-values from each metric and complete the Benjamini-Hochberg procedure.
- Both the number of test groups and number of metrics in the scorecard. All p-values are aggregated to complete the Benjamini-Hochberg procedure.
