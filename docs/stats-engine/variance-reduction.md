---
title: Variance Reduction
sidebar_label: Variance Reduction
slug: /stats-engine/variance_reduction
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Variance Reduction

[Variance](/stats-engine/variance) is a measurement of dispersion which measures the amount of "noise" in a metric or experiment results. Higher variance is associated with larger confidence intervals, and leads to experiments requiring more sample size to consistently observe a statistically significant result on the same effect size.

Reducing variance can lead to shorter experiment run times due to the lower sample required. Because of this, techniques have been developed to reduce the variance in experiment results in order to reduce run times and increase confidence.

At Statsig, we use a form of CUPED based on a [2013 Microsoft paper](https://www.exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf) (Deng, Xu, Kohavi, & Walker). This is automatically applied to experiments at Statsig, and is run for the topline results on key metrics in Pulse. This observably leads to significant variance reduction in the large majority of metrics where CUPED can be applied.

Refer to our [launch post for CUPED](https://blog.statsig.com/cuped-on-statsig-d57f23122d0e) for more details.

## CUPED

CUPED is a technique in which we use information about an experiment's users from before an experiment started to reduce the variance in their experiment metrics.

The pre-experiment information we use is referred to as a "control variate". We adjust the user's metric value based on this control variate multiplied by a coefficient θ. The method by which it reduces variance is conceptually similar to adding a second variable to a linear regression predicting users' metric value, where the first variable is the treatment group. Part of the error previously attributed to the experiment group term will be explained by the new variable.

Extending this observation, the more correlated the pre-experiment information is with the post-experiment information, the more of the error or noise in the experiment results is explained by the covariate, and the more the variance in the experimental term is reduced.

### Where CUPED works best

- CUPED works best on metrics and behaviors which are predictable from past behavior; in particular, if a metric is consistent over time for the same user, CUPED can be very effective
- CUPED also acts as a partial solve for pre-exposure bias. If one group has a systemic bias in their pre-exposure data (which is independent of the experiment group they are in), their adjusted metric value will be adjusted towards the population mean.

### Where CUPED is less effective

- CUPED does not work on new users, because there is not pre-exposure data to leverage
- CUPED is less effective if a user's metric value is uncorrelated with historical behavior
- On Statsig Cloud : CUPED will not be applied historically for newly created metrics, or metrics that were added to Key Metrics partway through an experiment, but will be calculated for exposed users after the metric is added.
- CUPED is applied to most metric types, but not all. Today, funnel metrics and "event user" metrics (# users who had an event 1+ time in a given time window) are CUPED-ineligible. We're working on rolling CUPED out to more metric types.

## Winsorization

Another common technique for reducing noise is Winsorization, which is a way to manage the influence of outliers.

Winsorization refers to the practice of measuring the percentile _P<sub>x</sub>_ of a metric and setting all values over _P<sub>x</sub>_ to _P<sub>x</sub>_. At Statsig, the default percentile for winsorization is 99.9%. This reduces the influence of extreme outliers caused by factors such as logging errors or bad actors. ([learn more](https://docs.statsig.com/stats-engine/methodologies/winsorization/))

## Metric Selection

The metrics you use can dramatically influence the sensitivity of your analysis. The transformations above, in addition to techniques like creating threshold-based flags, can let you trade-off exact numbers for significantly more power. Please refer to our [blog post](https://www.statsig.com/blog/understanding-and-reducing-variance-and-standard-deviation) on the topic for more information.

## Literature

Here's a short list of useful content for understanding more about these techniques and its applications

- [Deng, Xu, Kohavi, & Walker](https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf) is the seminal paper on using this technique for online controlled experiments
- [Booking.com](https://booking.ai/how-booking-com-increases-the-power-of-online-experiments-with-cuped-995d186fff1d) has an excellent blog post on the theory and practice of CUPED
- [Improving the Sensitivity of Online Controlled Experiments: Case Studies at Netflix](https://www.kdd.org/kdd2016/papers/files/adp0945-xieA.pdf)
