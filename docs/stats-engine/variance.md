---
title: Variance 
sidebar_label: Variance
slug: /stats-engine/variance
---

The variance of the metric delta is required for computing its confidence interval and p-value.  It can be obtained directly from the variances of the test and control group means, which require different calculations depending on the type of metric.

## Computing Variance 

The variance of the absolute metric delta is simply the sum of the variances of the test and control means:

![image](https://user-images.githubusercontent.com/90343952/167954255-3a6dca90-defd-44f7-86fb-c1bf33fcad82.png)

In other words, it comes down to correclty calcualting the variance of the means for each group. 

### Count and Sum Metrics

For count and sum metrics, the variance of the sample mean for a given group is obtained directly from the sample variance:

![image](https://user-images.githubusercontent.com/90343952/167955743-1927c90a-dca9-4882-b494-a145c0326946.png)

Where:
* *N* is the number of users in the group
* *X<sub>i</sub>* is the metric value for user *i*
* *X-bar* is the user-level average of *X* for users in that group

### Ratio and Mean Metrics

The variance of ratio and mean metrics depends upon the numberator and denominator variables, which are typically correlated.  For example, consider a *clicks per session* metric. The number of clicks and the number of sessions are two sets of obervations coming from the same group of users, so they are not independent from each other.  To properly account for this correlation, the variance of the mean of a ratio metric *R* is obtained using the delta method:

![image](https://user-images.githubusercontent.com/90343952/167956015-cc3f9fca-2c4d-410c-bff1-3f13dd16d105.png)

where the variance of the numerator and denominator means are computed in the same way as detailed above for count metrics, and the covariance is 

![image](https://user-images.githubusercontent.com/90343952/167956127-c17017ef-07b2-4f76-88c4-00539eec50a7.png)



 


