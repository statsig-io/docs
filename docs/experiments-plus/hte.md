---
title: Heterogeneous Treatment Effects
sidebar_label: Heterogeneous Effects
slug: /experiments-plus/hte
---

## What are Heterogeneous Treatment Effects
Experiments can have interesting effects on sub-populations that are easily missed. They might have a bug that impacts only a certain browser, OS, or country. If the topline impact isn't significant or is canceled out by other changes - these are missed. 

Statsig will automatically flag experiments when extreme heterogeneous effects are noticed for any sub-population your company has configured. Experiments are analyzed by default when Pulse is loaded after Day 1, Day 3 and when the Target Duration is met. 

## Enabling this
On Statsig Warehouse Native, configure the "Segments of Interest" you want automatically evaluated. These will either have to be configured as [Entity Properties](https://docs.statsig.com/statsig-warehouse-native/features/entity-properties) or passed in by a Statsig SDK as user properties in the [User Object](https://docs.statsig.com/client/concepts/user).

![image](https://github.com/statsig-io/docs/assets/31516123/0ee87ff3-f276-4f8e-88a8-fab3ff9d58e0)
![image](https://github.com/statsig-io/docs/assets/31516123/c216d7f1-dec5-4f39-926a-cc5034a0f738)

## Methodology

We use a Welch’s t-test to compare the treatment effect for a particular segment of users to the treatment effect for all other users since we expect to potentially see unequal population variances when comparing user segments.

The average treatment effect is calculated as follows:

$
\overline{TE} = \overline{X_t} - \overline{X_c} 
$

The variance in treatment effect is calculated as follows:

$
var(TE) = var(X_t) + var(X_c)
$

The n of the treatment effect is calculated as follows:

$
n_{TE} = min(n_t, n_c)
$

With these calculations, we can determine the t-statistic and degrees of freedom as we would for any experiment using [Welch's t-test](https://docs.statsig.com/stats-engine/p-value#welchs-t-test).
We then use a Bonferroni Correction to adjust our alpha to avoid false positives, setting a threshold where we consider there to be a high likelihood of heterogeneous treatment effect or some likelihood of heterogeneous treatment effect. We consider a specific dimension vs the rest calculation for one metric of one test variant vs the control to be one "comparison" for the sake of the Bonferroni Correction.

$
\text{high chance of HTE, } \alpha = \frac{0.01}{\text{number of comparisons}}
$

$
\text{some chance of HTE, } \alpha = \frac{0.05}{\text{number of comparisons}}
$

