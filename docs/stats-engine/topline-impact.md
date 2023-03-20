---
title: Topline and Projected Impact
sidebar_label: Topline Impact
slug: /stats-engine/topline-impact
---

The **topline impact** is the measured effect that an active experiment has on the overall topline metric over the rollup windows.  This is the real impact that results from running the experiment with its current allocation.  The **projected launch impact** is an estimate of the topline impact we expect to see if a decision is made and the test group is launched to all users. This impact is computed relative to the expected baseline value of the topline metric if the experiment wasn't running at all.

## Computing Topline Impact

The topline impact is computed over rollup windows of 7, 14, 28 days, and the impact over an arbitrary date range is approximated by that of closest largest rollup windows. This gives the most accurate estimate and tight confidence interval. 
>For example, the impact over the recent 30 days is estimated by the impact of 28-day rollup; 12-day window is estimated by that of 7-day rollup.

The exact calculation depends on whether the metric represents an absolute quantity or a ratio:

### Count and Sum Metrics (event_count, event_dau, sum)

The absolute topline impact is derived directly from the experiment results. It depends on the difference in means between test and control, and the number of users in the test group.

![image](https://user-images.githubusercontent.com/90343952/171673761-504e4de4-4f9b-4107-a228-2c921a725723.png)

Knowing the absolute impact and the overall metric value (as seen in the [metrics dashboard](/metrics/console)), we can compute the relative impact.  This is the percentage change in the overall metric value over the rollup window that is attributed to the active experiment.

![image](https://user-images.githubusercontent.com/90343952/171680476-c05fd539-0bb9-44f6-96e5-7d5a9f496a3d.png)

### Ratio and Mean Metrics

To properly derive the topline impact on a ratio metric we must understand the impact on the numerator (*X*) and denominator (*Y*) separately.  The topline impact is the current value of the ratio metric minus the baseline value we obtain by subtracting the numerator and denominator impacts:

![image](https://user-images.githubusercontent.com/90343952/171699910-18e1d851-7993-4e94-acc6-c446f38c11e3.png)

Where the baseline value is the expected value of the topline metric if the experiment wasn't running:

![image](https://user-images.githubusercontent.com/90343952/171698926-1cf68891-938b-400f-a041-ddcbf174b41c.png)

The relative impact for ratio metrics is obtained by dividing the absolute impact by the baseline value:

![image](https://user-images.githubusercontent.com/90343952/171700303-981e9cc1-88a2-468a-9873-ce017f091966.png)

## Computing Projected Launch Impact

The layer allocation of the experiment and the size of the test group are used to estimate a scaling factor *m*, which represents the increase in absolute impact expected when a decision is made to launch the test group.

The launch factor over a rollup window is calculated as

$
m_{rollup}=\frac{1}{\sum_{1}^{rollup}{layer\_alloc \times group\_pct}} \times rollup
$

to accommodate changes in allocation during the experiment.

Note that the targeting gate isn't factored in.  The projected impact calculation assumes that the target gate remains the same after the experiment is launched.

### Count and Sum Metrics (event_count, event_dau, sum)

For count and sum metrics, the projected absolute impact is simply the current topline impact scaled by a factor of *m*.  For example: Consider an experiment running with 50% layers allocation and 50/50 test/control split, so that 25% of all users are in the test group.  If the topline impact is currently +10 events per day, then launching the experiment would lead to +40 events per day. 

![image](https://user-images.githubusercontent.com/90343952/171690003-6f9ce544-647a-4229-846c-ff1ee472ba28.png)

The relative projected impact is expected percentage change in the topline metric, relative to the baseline value of the metric without the experiment running.

![image](https://user-images.githubusercontent.com/90343952/171692363-2ebb64a6-4496-49b7-a4e3-48e5bcd7c03e.png)

### Ratio and Mean Metrics

Similar to the topline impact calculation above, the projected impact of ratio metrics depends on the numerator and denominator impacts.  We use the same scaling factor *m* to obtain the projected impact for each term:

![image](https://user-images.githubusercontent.com/90343952/171698790-dba2b646-578d-48a5-a794-b2c07183a7f7.png)

Where the first term represents the projected metric value after launch. 

Finally, the projected relative impact of a ratio metric is the projected absolute impact divided by the baseline value of the ratio: 

![image](https://user-images.githubusercontent.com/90343952/171698482-5695e1f9-53e2-476b-b13e-0d2887dd254c.png)

## Confidence intervals

The confidence intervals for topline and projected impact are computed in the same way as the [confidence intervals](https://docs.statsig.com/stats-engine/confidence-intervals) for experiment deltas.  

![image](https://user-images.githubusercontent.com/90343952/171684138-976c0653-2a82-40c5-93d1-9955936515c6.png)

In the case of absolute impact of count and sum metrics, the variance calculation is simply a linear combination of the test and control variances:  

![image](https://user-images.githubusercontent.com/90343952/171685198-b1ed7c6b-3d6b-4b4c-8be0-91664efa3f9d.png)

And for projected launch impact we get:

![image](https://user-images.githubusercontent.com/90343952/171702289-e787d01e-bd40-4a53-a7ed-56b2eced1d23.png)

For ratio metrics and relative impacts, the variance is calculated using the Delta method.  This properly accounts for the correlation between the various numerator and denominator terms, leveraging Taylor expansion to linearize expressions containing non-linear combinations of experiment variables.  

For example, the variance in the relative impact of a count metric is given by:

![image](https://user-images.githubusercontent.com/90343952/171686256-4ae81e10-c4f4-474d-9326-3a2ea6911ea3.png)

