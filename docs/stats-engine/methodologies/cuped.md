---
title: CUPED
sidebar_label: CUPED
slug: /stats-engine/methodologies/cuped
---

> Our robust stats engine enables us to apply CUPED to metrics of both SUM/COUNT type and RATIO type.

## CUPED - Controlled-experiment Using Pre-Existing Data

CUPED (short for Controlled-experiment Using Pre-Existing Data) is a technique which leverages user information from before an experiment to reduce the variance, and increase confidence in experimental metrics. This can help to debias experiments which have meaningful pre-exposure bias (e.g. the groups were randomly different before any treatment was applied).

See more at the [Variance Reduction](../variance-reduction.md) page.

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
\frac{Y_{cv}}{N_{cv}}=\frac{Y}{N}-\theta \frac{X}{M} + \theta \mathbb{E}[X]
$$

While $\mathbb{E}[X]$ is hard to deduct, we recognized that

$$
\LARGE
\frac{Y_{cv}(control)}{N_{cv}(control)}=\frac{Y(control)}{N(control)}
$$

$$
\LARGE
\frac{Y_{cv}(test)}{N_{cv}(test)}=\frac{Y(control)}{N(control)} -\theta \frac{X(control)}{M(control)} +\theta \frac{X(test)}{M(test)}
$$

Using the optimal $\theta$, we are hoping to reduce group-level variance by plugging the parameter back in to calculate the adjustment. Please note that across-group $\theta$ does not necessarily reduce variance for one group, or the sum of variances of all groups, but in most cases it does. Our simulation shows that 98.3% of metrics saw a decrease by CUPED.

Statsig will use CUPED variance when all of the following are met:

- CUPED reduces the total variance of all groups of a metric
- Enough units have pre-experiment values (> 100)
- Enough percentage of units have pre-experiment values (> 5%)
