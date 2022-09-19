---
title: Sequential Testing
sidebar_label: Sequential Testing
slug: /pulse/sequential-testing
---

## What is Sequential Testing?

Traditional A/B testing best practices dictate that the readout of experiment metrics should occur only once, when the target sample size of the experiment has been reached.  Continous monitoring for the purpose of decision making results in inflated false positive rates, much higher than expected based on the significance level selected for the test.  

This is because p-values fluctuate and are likely to drop in and out of significance just by random chance, even when there is no real effect.  Continuous monitoring introduces selection bias in the date we pick for the readout: Selectively choosing a date based on the observed results is essentailly cherry-picking a stat-sig results that would never be observed if the data were to be analyzed only over the entire, pre-determined durtaion of the experiment.

In Sequential Testing, the p-values from each preliminary analysis are adjusted to compensate for the increased false positive rate associated with peeking.  The goal to enable early decision making when there's sufficient evidence while limiting the risk of false positives.

## Quick Guide: Interpreting Sequential Tesing Results

Click on Edit at the top of the metrics section in Pulse to toggle Sequential Testing on/off.

![image](https://user-images.githubusercontent.com/90343952/191135447-5e094892-49e5-485e-8186-18732888662c.png)

When enabled, an adjustment is automatically applied to results calculated before the target completion date of the experiment. 

![image](https://user-images.githubusercontent.com/90343952/191135645-0042dced-3e8f-479f-8f63-c814dfbd4923.png)

A Dashed line 


## Statsig's Implementation of Sequential Testing

The adjustment factor is determined by the number of days the experiment has been running:

![image](https://user-images.githubusercontent.com/90343952/191127696-c8cbbf6f-8757-439e-86df-c7d7dd13ef36.png)

where *n* is the number of ellapsed days.  When the target duration is reached, *q<sub>n</sub> = 1* and no more adjustments are applied.

### Efficacy Boundary and Z-value
On any given day *n*, the **efficacy boundary** is given by

![image](https://user-images.githubusercontent.com/90343952/191126482-959246fe-5298-4c4d-a8ae-fb238e3157be.png)

where *Z* is the standard Z-value for the desired significance level (e.g.: 1.96 for two-sided test with $\alpha$ = 0.05).  This determines the Z-value threshold for statistical significance on day *n*.  The Z-statistic for a metric comparison (*Z<sub>X</sub>*) is computed in the standard way, and is stat-sig when it falls outside of the efficacy boundary.  Specifically:
* *Z<sub>X</sub> > Z<sub>n</sub>* is stat-sig positive even after Sequential Testing adjustment
* *Z<sub>X</sub> < -Z<sub>n</sub>* is stat-sig negative even after Sequential Testing adjustment
* *Z<sub>n</sub> > Z<sub>X</sub> > Z* or *-Z<sub>n</sub> < Z<sub>X</sub> < -Z* is not stat-sig with the adjustment, but would be stat-sig without it.  These are possible false positive that can be avoided with Sequential Testing
* *Z > Z<sub>X</sub> > -Z* is not stat-sig

### Adjusted p-values and Confidence Intervals

