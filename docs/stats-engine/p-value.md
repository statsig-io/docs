---
title: p-Value Calculation
sidebar_label: p-Values
slug: /stats-engine/p-value
---

In hypothesis testing, the p-value is the probability of observing an effect larger than or equal to the measured metric delta, under the assumption that the null hypothesis is true.  In practice, a p-value that's lower than your pre-defined threshold is treated as evidence for there being a true effect.

The methodology used for p-value calculation depends on the number of degrees of freedom (*&nu;*).  A two-sample z-test is appropriate for most experiments.  Welch's t-test is used for smaller experiments with *&nu; < 100*.  In both cases, the p-value depends on the metric [mean](https://docs.statsig.com/stats-engine/metric-deltas) and [variance](https://docs.statsig.com/stats-engine/variance) computed for the test and control groups.

### Two-Sample Z-Test

The z-statistic of a two-sample z-test is:

![image](https://user-images.githubusercontent.com/90343952/168131340-d318d6e3-adce-4ede-bb91-adc2390f7107.png)


The two-sided p-value is obtained from the standard normal cumulative distribution function:

![image](https://user-images.githubusercontent.com/90343952/168123953-44b9dc83-b8cc-4edb-804a-a9b9c25b80b6.png)

### Welch's t-test

For smaller sample sizes, Welch's t-test is the preferred statistical test for lower false positive rates in cases of unequal sizes and variances.  In Pulse, Welch's t-test is automatically applied when the degress of freedom *&nu; < 100*.  

The t-statistic is computed in the same way as the two-sample z-statistic above.  Additionally, we compute the degrees of freedom *&nu;* using:

![image](https://user-images.githubusercontent.com/90343952/168124467-58a81687-95e4-4fac-905d-3782509b8c8d.png)

The p-value is then obtained from the t-distribution with *&nu;* degrees of freedom.




