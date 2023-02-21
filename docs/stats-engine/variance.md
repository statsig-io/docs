---
title: Standard Error
sidebar_label: Standard Error
slug: /stats-engine/variance
---

The standard error of the means is required for computing the confidence interval and p-value of a metric delta. It can be obtained by dividing the sample standard deviation of _X_ by the number of users in the group.

![image](https://user-images.githubusercontent.com/90343952/168379752-9b9161a9-ddcd-497b-8a5e-96cbff6f666c.png)

Note that standard deviation is the square root of the variance. Since variances are easier to manipulate algebraically, here we derive the variance for each metric type and then take the square root to obtain the confidence intervals.

## Computing Variance

The variance of the absolute metric delta is simply the sum of the variances of the test and control means:

![image](https://user-images.githubusercontent.com/90343952/167954255-3a6dca90-defd-44f7-86fb-c1bf33fcad82.png)

In other words, it comes down to correctly calculating the variance of the means for each group.

### Count and Sum Metrics

For count and sum metrics, the variance of the sample mean for a given group is obtained directly from the sample variance:

![image](https://user-images.githubusercontent.com/90343952/167955743-1927c90a-dca9-4882-b494-a145c0326946.png)

Where:

- _N_ is the number of users in the group
- _X<sub>i</sub>_ is the metric value for user _i_
- _X-bar_ is the user-level average of _X_ for users in that group

### Ratio and Mean Metrics

The variance of ratio and mean metrics depends upon the numerator and denominator variables, which are typically correlated. For example, consider a _clicks per session_ metric. The number of clicks and the number of sessions are two sets of observations coming from the same group of users, so they are not independent from each other. To properly account for this correlation, the variance of the mean of a ratio metric _R_ is obtained using the delta method:

![image](https://user-images.githubusercontent.com/90343952/167956015-cc3f9fca-2c4d-410c-bff1-3f13dd16d105.png)

where the variance of the numerator and denominator means are computed in the same way as detailed above for count metrics, and the covariance is

![image](https://user-images.githubusercontent.com/90343952/167956127-c17017ef-07b2-4f76-88c4-00539eec50a7.png)
