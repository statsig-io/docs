---
title: Confidence Intervals
sidebar_label: Confidence Intervals
slug: /stats-engine/confidence-intervals
---

Confidence intervals are an intuitive way to quantify the uncertainty in the observed metric deltas.  A 95% confidence interval should contain the true effect 95% of the time.  This means that if we ran an experiment 100 times, the true value of the metric delta should be inside the confidence intervals 95 times.  

In practical terms, a 95% confidence interval that doesn't contain zero represents a statstically significant result (with *&alpha; = 0.05*). Only 5% of the time would we expect to see that confidence interval if the true effect was zero.  Larger confidence intervals imply less certainity in the exact size of the effect with a larger range of likley values.  

## Computing Confidence Intervals

Confidence intervals are calculated using a two-sample z-test.  This requires knowledge of the variance in the metric delta we're measuring, which is derived differently depending on the type of metric (details [here](https://docs.statsig.com/stats-engine/variance)).    

For the **absolute metric delta**, the confidence interval is given by:

![image](https://user-images.githubusercontent.com/90343952/167956443-c0ac7088-4c15-4180-a942-d16e52895e3c.png)

where: 
* *Z* is the z-statistic for the desired significance level (1.96 for two-sided 95% confidence interval)
* *var(&Delta;X-bar)* is the variance of the absolute delta

Similarly, the confidence interval for the **relative metric delta** is:

![image](https://user-images.githubusercontent.com/90343952/167956640-ecad04ad-18d5-4231-a031-b3ca0d90460a.png)

Since the relative delta is a ratio of 2 variables, we must take care to properly account for the variance of both the numerator and denominator.  Applying the delta method with the assumption of independent test and control groups yields:

![image](https://user-images.githubusercontent.com/90343952/167956897-915afe53-e6b9-47dc-8a07-dcbe499cfe27.png)


## Welch's T-test for Small Sample Sizes

For small sample sizes, we use Welch's t-test instead of a standard z-test.  This statistical test is a better choice for handling samples of unequal size or variance without increasing the false positive rate.  The structure of the confidence interval calculation remains the same as above, but instead of the z-statistic we use the t-statistic with degrees of freedom *&nu;* given by:

![image](https://user-images.githubusercontent.com/90343952/167957056-c661b667-fca7-48de-9064-e007c9d40825.png)

Where *N<sub>t</sub>* and *N<sub>c</sub>* are the number of user in the test and control groups, respectively.  Note that for large number of degrees of freedom, the t-statistic converges with the z-statistic.  Therefore, Welch's t-test is used only when *&nu; < 100*.
