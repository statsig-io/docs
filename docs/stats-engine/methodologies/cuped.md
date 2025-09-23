---
title: CUPED
sidebar_label: CUPED
slug: /stats-engine/methodologies/cuped
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## CUPED - Controlled-experiment Using Pre-Existing Data

CUPED (short for Controlled-experiment Using Pre-Existing Data) is a technique which leverages user information from before an experiment to reduce the variance, and increase confidence in experimental metrics. This can help to debias experiments which have meaningful pre-exposure bias (e.g. the groups were randomly different before any treatment was applied).

Our Cloud product uses a 7-day window for CUPED calculation. For Warehouse Native customers, a 7-day window is recommended, but you have the flexibility to customize it to any length.

See more at the [Variance Reduction](../variance-reduction.md) page.

## CUPED for Simple Aggregations

The methodology for simple aggregations is described in the original [Microsoft paper](https://www.exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf), as well as our in-depth [article](https://www.statsig.com/blog/cuped) on the technique.

## CUPED for Ratio Metrics

CUPED for ratios metrics, where each experiment unit is represented by a numerator and a denominator. The variance reduction process is performed by finding the variance of experiment data, pre-experiment data, and the covariance between the two.

Denote the numerator, denominator, pre-experiment numerator, and pre-experiment denominator as $Y$, $N$, $X$, and $M$, respectively. Using the CUPED-reduced variance formula,

$$
\LARGE
Var(\frac{Y_{cv}}{N_{cv}})=Var(\frac{Y}{N})+\theta^2 Var(\frac{X}{M})-2\theta Cov(\frac{Y}{N}, \frac{X}{M})
$$

where optimal $\theta$ is found as

$$
\LARGE
\frac{Cov(\frac{Y}{N}, \frac{X}{M})}{Var(\frac{X}{M})}
$$

expanded to

$$
\LARGE
\frac{Cov(\frac{Y}{\mu_N}-\frac{\mu_Y N}{\mu^2_N}, \frac{X}{\mu_M}-\frac{\mu_X M}{\mu^2_M})}{Var(\frac{X}{\mu_M}-\frac{\mu_X M}{\mu^2_M})}
$$

The CUPED-adjusted group means are inferred based on the control group.

$$
\LARGE
\frac{Y_{cv}}{N_{cv}}=\frac{Y}{N}-\theta \frac{X}{M} + \theta \mathbb{E}[R]
$$

While $\mathbb{E}[R]$ is hard to deduct, we recognized that

$$
\LARGE
\frac{Y_{cv}(control)}{N_{cv}(control)}=\frac{Y(control)}{N(control)}
$$

$$
\LARGE
\frac{Y_{cv}(test)}{N_{cv}(test)} \\
=\frac{Y(control)}{N(control)} - (\frac{Y(control)}{N(control)} - \theta \frac{X(control)}{M(control)}) + (\frac{Y(test)}{N(test)} - \theta\frac{X(test)}{M(test)}) \\
=\frac{Y(test)}{N(test)} - \theta\frac{X(test)}{M(test)} + \theta \frac{X(control)}{M(control)}
$$

Using the optimal $\theta$, we are hoping to reduce group-level variance by plugging the parameter back in to calculate the adjustment. Please note that across-group $\theta$ does not necessarily reduce variance for one group, or the sum of variances of all groups, but in most cases it does. Our simulation shows that 98.3% of metrics saw a decrease by CUPED.

Statsig will use CUPED variance when all of the following are met:

- Core assumptions of the CUPED model are satisfied; this can be violated due to rounding error or other data artifacts
  - E(X_hat) = E(X)
  - The pooled variance of the adjusted population across groups is < the variance of the unadjusted population
- Enough units have pre-experiment values (> 100)
- Enough percentage of units have pre-experiment values (> 5%)
