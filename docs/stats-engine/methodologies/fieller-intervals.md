---
title: Fieller Intervals
sidebar_label: Fieller Intervals
keywords:
  - owner:liz
slug: /stats-engine/methodologies/fieller-intervals
last_update:
  date: 2025-09-18
---

## Fieller Intervals

Organizations can choose to use Fieller Intervals as the methodology of calculation for the confidence intervals for the relative change between test and control group.

The Delta Method is an approximation for the variance of a ratio between two variables that is then used to establish a confidence interval, while Fieller Intervals are an exact solution for the confidence interval.

In most cases though, Fieller Interval results are very similar to results from the Delta Method. Since Fieller Intervals are more accurate, we recommend that you opt into using this methodology!

## Calculation

### 1: Determine if a Fieller Interval is Well-Defined

Before proceeding to applying Fieller’s Theorem, we need to check that the denominator of the relative lift metric $\Large \overline{X_C}$ is significantly distinct from 0.

We do this by calculating the parameter $\Large g$:

$$
\Large
g = \frac{Z_{\alpha/2}^2 \cdot var(X_C)}{(n_C-1) \cdot \overline{X_C}^2}
$$

Where:
$\Large Z_{\alpha/2}$ is the critical value associated with the desired confidence level $\Large var(X_C)$ is the variance of the control group metric values $\Large n_C$ is the number of units in the control group $\Large \overline{X_C}$ is the mean of the control group metric values

When $\Large g$ < 1, the control mean is significantly different from 0, and we can use Fieller intervals.

### 2A: Apply Fieller Interval Formula

Since the control and test group results are independent of each other, covariance terms in Fieller's Theorem can be dropped.

$$
\Large
CI(\% \Delta \overline{X} ) = \frac{1}{1-g} ( \frac{\overline{X_T}}{\overline{X_C}} - 1 \pm \frac{Z_{\alpha/2}}{\sqrt{n_C} \cdot \overline{X_C}} \sqrt{(1-g) \cdot \frac{var(X_T)}{n_T(n_T-1)} + \frac{\overline{X_T} var(X_C)}{\overline{X_C} n_C (n_C-1)}})
$$

### 2B: Edge Case: Control Mean not Statistically Distinct from Zero

In rare cases (less than 5\% of observed metric comparisons on Statsig), g $\geq$ 1, which means that the control group’s mean is not statistically distinguishable from 0.

When $\overline{X_C}$ is not statistically different from zero, the denominator of our relative lift calculation is unstable. This means that the confidence interval for the percent difference between test and control is unbounded.

When this happens, we surface the relative lift observed during the experiment.

$$
\Large
\% \Delta \overline{X} = \frac{\overline{X_T}-\overline{X_C}}{\overline{X_C}}
$$

## Enabling on Statsig

Controlling which relative confidence interval methodology you use is available in your Experimentation Settings at the Organization level, and changing this setting only impacts experiments created after the setting change.
![Experimentation settings configuration interface](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/CbjKvuo40oMU45psWLvG/9c8b90f8-1f0b-472f-883d-c3f30bd78696.png)

In many cases, the results will be effectively the same as using the [Delta Method](/stats-engine/methodologies/delta-method), but especially if you’re running experiments with small sample sizes or noisy denominators, Fieller Intervals are more reliable. Thus, we'd strongly recommend using Fieller Intervals.

In the experiment scorecard, Fieller Intervals will look like this
![Experiment scorecard with Fieller intervals](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/CbjKvuo40oMU45psWLvG/1cb4ebb6-0425-49bf-a319-48794d25ce96.png)
