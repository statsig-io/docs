---
title: Sequential Testing
sidebar_label: Sequential Testing
slug: /experiments-plus/sequential-testing
---

## What is Sequential Testing?

Traditional A/B testing best practices dictate that the readout of experiment metrics should occur only once, when the target sample size of the experiment has been reached.  Continous monitoring for the purpose of decision making results in inflated false positive rates (a.k.a. *the peeking problem*), much higher than expected based on the significance level selected for the test.  

This is because p-values fluctuate and are likely to drop in and out of significance just by random chance, even when there is no real effect.  Continuous monitoring introduces selection bias in the date we pick for the readout: Selectively choosing a date based on the observed results is essentially cherry-picking a stat-sig result that would never be observed if the data were to be analyzed only over the entire, pre-determined duration of the experiment. This increases the false positive rate (observing an experimental effect when there is none).

In Sequential Testing, the p-values for each preliminary analysis window are adjusted to compensate for the increased false positive rate associated with peeking.  The goal is to enable early decision making when there's sufficient evidence while limiting the risk of false positives.  While peeking is typically discouraged, regular monitoring of experiments with sequential testing is particularly valuable in some cases.  For example:
* Unexpected regressions: Sometimes experiments have bugs or unintended consequences that severly impact key metrics.  Sequential testing helps identify these regressions early and ditinguishes significant effects from random fluctuations.
* Opportunity cost: This arises when a signifcant loss may be incurred by delaying the experiment decision, such as launching a new feature ahead of a major event or fixing a bug.  If sequential testing shows an improvement in the key metrics, an early decision could be made.  But use caution: An early stat-sig result for certain metrics doesn't guarantee sufficient power to detect regressions in other metircs.  Limit this approach to cases where only a small number of metrics are relevant to the decision.    

## Quick Guide: Interpreting Sequential Testing Results

Click on Edit at the top of the metrics section in Pulse to toggle Sequential Testing on/off.

![image](https://user-images.githubusercontent.com/90343952/191135447-5e094892-49e5-485e-8186-18732888662c.png)

When enabled, an adjustment is automatically applied to results calculated before the target completion date of the experiment. 

![image](https://user-images.githubusercontent.com/90343952/191135645-0042dced-3e8f-479f-8f63-c814dfbd4923.png)

The dashed line represents the expanded confidence interval resulting from the adjustment.  The solid bar is the standard confidence interval computed without any adjustments.  If the adjusted confidence interval overlaps with zero, this means the metric delta is not stat-sig at the moment, and the experiment should continue its course as planned. 

Hover over a metric and click **View Details** to review the progression of the sequential test.  

(screen shot coming)

The **Sequential Testing Z-Statistic** time series contains the following information for a metric:

* **Efficacy Boundaries** (solid red and green curves): The thresholds for positive and negative statistical significance.  These start out high, signifying the increased confidence needed for making an early decision. When the target duration is reached, they converge to the standard Z-score for the selected significance level (dashed lines).
* **Measurement Z-score** (dots): These are the Z-scores computed each day for the test vs. control comparison.  A Z-score higher than the upper efficacy boundary is stat-sig positive.  One lower than the bottom boundary is stat-sig negative.  


## Statsig's Implementation of Sequential Testing

We use an adjustment factor *q<sub>n</sub>* that's determined by the number of days *n* the experiment has been running:

![image](https://user-images.githubusercontent.com/90343952/191127696-c8cbbf6f-8757-439e-86df-c7d7dd13ef36.png)

When the target duration is reached, *q<sub>n</sub> = 1* and no more adjustments are applied.  This method has 2 benefits:
* Simplicity: The calculation of the adjustment factor is easy to understand.  It also satisifes the intuitive expectation that the significance threshold be higher early on.
* Power: When the target duration is reached, the efficacy boundary converges with the standard Z-score for the selected significance level.  Therefore, there is no loss in statistical power when doing a metrics readout at the conclusion of the pre-determined experiment duration. We selected this approach because we believe the primary value of sequential testing is to provide higher confidence when making early decisions based on unexpected metric movements, such as ending an experiment early due to a large regression.  However, in most cases it's best make a decision based on the complete set of relevant metrics at the end of the experiment, without any adjustments that reduce power. 

### Efficacy Boundary and Z-score Calculation
On any given day *n*, the **efficacy boundary** is given by

![image](https://user-images.githubusercontent.com/90343952/191126482-959246fe-5298-4c4d-a8ae-fb238e3157be.png)

where *Z* is the standard Z-score for the desired significance level (e.g.: 1.96 for two-sided test with $\alpha$ = 0.05).  This determines the Z-score threshold for statistical significance on day *n*.  

The Z-statistic for a metric comparison (*Z<sub>X</sub>*) is computed in the [standard way](https://docs.statsig.com/stats-engine/p-value):

![image](https://user-images.githubusercontent.com/90343952/191580477-c7210afc-9e73-439c-bcd8-67cea65c40ea.png)

A metric is stat-sig when the calculated Z-score falls outside of the efficacy boundary.  Specifically:
* *Z<sub>X</sub> > Z<sub>n</sub>* is stat-sig positive even after Sequential Testing adjustment
* *Z<sub>X</sub> < -Z<sub>n</sub>* is stat-sig negative even after Sequential Testing adjustment
* *Z<sub>n</sub> > Z<sub>X</sub> > Z* or *-Z<sub>n</sub> < Z<sub>X</sub> < -Z* is not stat-sig with the adjustment, but would be stat-sig without it.  These are possible false positive that can be avoided with Sequential Testing
* *Z > Z<sub>X</sub> > -Z* is not stat-sig

### Adjusted p-values and Confidence Intervals

The p-value calculation for day *n* is similar to the standard calculation, but with the Z-score scaled by a factor of *q<sub>n</sub>*.  This leads to higher p-values, meaning the bar for statistical significance is higher.

![image](https://user-images.githubusercontent.com/90343952/191584741-d223dee4-1ce8-4f1f-bf22-11e3f1027ecc.png)

Similarly, the confidence intervals (CI) are adjusted by a factor of *1/q<sub>n</sub>*, leading to larger CIs when *q<sub>n</sub> < 1*.

![image](https://user-images.githubusercontent.com/90343952/191585493-659ddb9b-cd7a-4ed2-a39c-85751dad49c8.png)


