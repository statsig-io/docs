---
title: Frequentist Sequential Testing
sidebar_label: Frequentist Sequential Testing
slug: /experiments-plus/sequential-testing
---

## What's the problem with looking early?

Traditional A/B testing best practices (t-tests, z-tests, etc.) dictate that the readout of experiment metrics should occur only once, when the target sample size of the experiment has been reached.  Continuous experiment monitoring for the purpose of decision making results in inflated false positive rates (a.k.a. *the peeking problem*) which are much higher than expected based on the desired significance level. 

Continuous monitoring leads to inflated false positives because metric values and p-values always fluctuate to some extent due to noise, and their results are likely to pop into and out of statistical significance just by random chance, even when there is no real effect. These noisy fluctuations can be caused by random unit assignment and random human behavior we can't predict, and they can't be entirely removed from an experiment. Not every test is subject to the same amount of experimental noise, however, and like so many things it's dependent on what you're testing and who your users are. Tests also vary over time in the amount of noise they see, especially as adding more users and observing them for longer tends to help the random fluctuations even out.

Peeking, however well-intentioned, will always introduce some amount of selection bias by allowing us to adjust the date of a readout. When an experimenter makes any early decision about results (e.g. is the result stat-sig, can we ship a variant?) they've increased the chances that their decision is based on a temporary snapshot of always fluctuating results. They are essentially cherry-picking a stat-sig result that might never have been observed if the data were to be analyzed only once using the full, pre-determined duration of the experiment. Unfortunately, this process can only increase the false positive rate (declaring an experimental effect when there really is none), even when the intention is to make a less-biased decision based on the statistics.

## What is Frequentist Sequential Testing?

In Sequential Testing, the experimental results for each preliminary analysis window are adjusted to compensate for the increased false positive rate associated with peeking.  The goal is to enable early decision making when there's sufficiently strong observations that outweigh the random fluctuations while limiting the risk of false positives.  While peeking is typically discouraged, regular monitoring of experiments with sequential testing is particularly valuable in some cases.  For example:
* Unexpected regressions: Sometimes experiments have bugs or unintended consequences that severely impact key metrics.  Sequential testing helps identify these regressions early and distinguishes significant effects from random fluctuations.
* Opportunity cost: This arises when a significant loss may be incurred by delaying the experiment decision, such as launching a new feature ahead of a major event or fixing a bug.  If sequential testing shows an improvement in the key metrics, an early decision could be made.  But use caution: An early stat-sig result for certain metrics doesn't guarantee sufficient power to detect regressions in other metrics.  Limit this approach to cases where only a small number of metrics are relevant to the decision.    

## Quick Guide: Enabling Sequential Testing Results

In the **Setup** tab of your experiment, with Frequentist selected as your Analysis type, you can enable Sequential Testing under the Analysis Settings section. This setting can be toggled at any time during the life of the experiment, and it does not need to be enabled prior to the start of the experiment.

![image](/img/enable_freq_sequential_testing.png)

## Quick Guide: Interpreting Sequential Testing Results

Click on Edit at the top of the metrics section in Pulse to toggle Sequential Testing on/off.

![image](https://user-images.githubusercontent.com/90343952/191135447-5e094892-49e5-485e-8186-18732888662c.png)

When enabled, an adjustment is automatically applied to results calculated before the target completion date of the experiment. 

![image](https://user-images.githubusercontent.com/90343952/191135645-0042dced-3e8f-479f-8f63-c814dfbd4923.png)

The dashed line represents the expanded confidence interval resulting from the adjustment.  The solid bar is the standard confidence interval computed without any adjustments.  If the adjusted confidence interval overlaps with zero, this means the metric delta is not stat-sig at the moment, and the experiment should continue its course as planned. 

Sequential testing is a reliable way to make an early decision, particularly for early detection of regressions.  One should be mindful that early decision-making will often result in underpowered lift estimates with a high degree of uncertainty.  If making the right decision is important, you can use statistically-significant sequential testing results.  If an accurate measurement is important, you should wait for full power as estimated by your pre-experimental power calculation.  We do not calculate statistical power on post-hoc experimental results (See section "Post-hoc Power Calculations are Noisy and Misleading" in [Kohavi, Deng, and Vermeer, A/B Testing Intuition Busters](https://bit.ly/ABTestingIntuitionBusters).

## Statsig's Implementation of Sequential Testing

Statsig uses mSPRT based on the the approach proposed by Zhao et al. in this [paper](https://arxiv.org/pdf/1905.10493.pdf).  The two-sided Sequential Testing confidence interval with significance level  $\alpha$ is given by:

![image](https://github.com/statsig-io/docs/assets/90343952/d50bc6c4-fd72-4ac3-b3d7-e2d802ab6cfa)

Here *V* is the variance of the difference in means, which can be obtained from the sample variance of the test and control group means:

![image](https://github.com/statsig-io/docs/assets/90343952/cbee704f-75fd-4947-a49a-6e256a76dfae)

$\tau$ is the mixing parameter given by:

![image](https://github.com/statsig-io/docs/assets/90343952/24fb4569-925e-4c39-bc2b-233efc7c7008)

We have validated that this parameter satisfies the expected False Positive Rate and provides enough power to detect large effects early.  More details on this analysis are available [here](https://www.statsig.com/blog/sequential-testing-on-statsig).




