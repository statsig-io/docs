---
title: Delta Method
sidebar_label: Delta Method
slug: /stats-engine/methodologies/delta-method
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Delta Method

Statsig uses the delta method when calculating the variance for variables that have a numerator and denominator.

The variance of ratio and mean metrics depends upon the numerator and denominator variables, which are typically correlated. For example, consider a _clicks per session_ metric. The number of clicks and the number of sessions are two sets of observations coming from the same group of users, so they are not independent from each other. To properly account for this correlation, the variance of the mean of a ratio metric _R_ is obtained using the delta method:

![Delta method variance formula](https://user-images.githubusercontent.com/90343952/167956015-cc3f9fca-2c4d-410c-bff1-3f13dd16d105.png)

where the variance of the numerator and denominator means are computed in the same way as detailed above for count metrics, and the covariance is

![Covariance calculation formula](https://user-images.githubusercontent.com/90343952/167956127-c17017ef-07b2-4f76-88c4-00539eec50a7.png)
