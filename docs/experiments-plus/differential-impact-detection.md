---
title: Differential Impact Detection
sidebar_label: Differential Impact
slug: /experiments-plus/differential-impact-detection
---

## What is Differential Impact Detection?
Experiments can have interesting effects on sub-populations that are easily missed. They might have a bug that impacts only a certain browser, OS, or country. If the topline impact isn't significant or is canceled out by other changes - these are missed.  

Statsig will automatically flag experiments when extreme differential impacts are detected for any sub-population you have configured. Once configured, experiments are analyzed for differential impact when Pulse is loaded after Day 1, Day 3 and when the Target Duration is met.
![image](https://github.com/user-attachments/assets/9783ba7a-812b-4fea-97af-4e3344f8345f)

## Enabling this
On Statsig Warehouse Native, configure the "Segments of Interest" you want automatically evaluated for Differential Impact Detection. These will either have to be configured as [Entity Properties](/statsig-warehouse-native/features/entity-properties) or passed in by a Statsig SDK as user properties in the [User Object](/client/concepts/user).

![image](https://github.com/user-attachments/assets/c1bc4f51-2c8c-4db7-87f5-7a883f7e0fcf)

![image](https://github.com/statsig-io/docs/assets/31516123/c216d7f1-dec5-4f39-926a-cc5034a0f738)

This feature is also  also referred to as as **Heterogeneous Treatment Effect** or **Segments of Interest**. 

## Seeing Differential Impacts
If extreme outliers are found for a segment you have configured, Statsig will flag this when you're looking at Pulse results. You will be able to see the data broken out by segments in the Explore section of your Pulse results. 
![image](https://github.com/user-attachments/assets/5e5a3907-ff67-404c-a94f-2f986262008e)


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

With these calculations, we can determine the t-statistic and degrees of freedom as we would for any experiment using [Welch's t-test](/stats-engine/p-value#welchs-t-test).
We then use a Bonferroni Correction to adjust our alpha to avoid false positives, setting a threshold where we consider there to be a high likelihood of heterogeneous treatment effect or some likelihood of heterogeneous treatment effect. We consider a specific dimension vs the rest calculation for one metric of one test variant vs the control to be one "comparison" for the sake of the Bonferroni Correction.

$
\text{high chance of HTE, } \alpha = \frac{0.01}{\text{number of comparisons}}
$

$
\text{some chance of HTE, } \alpha = \frac{0.05}{\text{number of comparisons}}
$


##
