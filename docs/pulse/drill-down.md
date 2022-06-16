---
title: Pulse
sidebar_label: Metric Drill-Down
slug: /pulse/drill-down
---

## Tooltip Overview

A tooltip with key statistics and deeper information is shown if you hover over a metric in Pulse.

![image](https://user-images.githubusercontent.com/90343952/171743900-23d84368-2eaf-4402-9267-3710b4dd3b19.png)

- **Group**: The name of the group of users. For Feature Gates, the "Pass" group is considered the test group while the "Fail" group is the control. In Experiments, these will be the variant names.
- **Units**: The number of distinct units included in the metric. E.g.: Distinct users for user_id experiments, devices for stable_id experiments, etc.
- **Mean**: The average per-unit value of the metric for each group.
- **Total**: The total metric value across all units in the group, over the time period of the analysis.
- **p-Value**: The probability that such an extreme difference can arise by random chance when the experiment or test actually has no effect. A low p-value implies the observed difference is unlikely due to random chance. In hypothesis testing, a p-value threshold is used to determine which results are due to a real effect and which are plausibly due to random chance. ([p-value calculation](https://docs.statsig.com/stats-engine/p-value))

The exact calculation for each of the above depends on the metric type: 

| Metric Type      | Total Calculation       | Mean           | Units          |
|------------------|-------------------------|----------------|----------------|
| event_count      | Sum of events (99.9% winsorization)           | Average events per user (99.9% winsorization)  | All users  |
| event_dau        | Sum of event DAU (distinct user-day pairs) | Average event_dau value per user per day. Note that we call this "Event Participation Rate" as this can be interpreted as the probability a user is DAU for that event.  | All users |
| ratio            | Overall ratio: sum(numerator values)/sum(denominator values)  | Overall ratio  |  Participating users |
| sum              | Total sum of values (99.9% winsorization)     | Average value per user (99.9% winsorization)   | All users |
| mean             | Overall mean value    | Overall mean value   | Participating users |
| user: dau | sum of daily active users   | Average metric value per user per day. The probability that a user is DAU | All users |
| user: wau, mau_28day | Not shown   | Average metric value per user per day. The probability that a user is xAU | All users |
| user: new_dau, new_wau, new_mau_28day |  Count of distinct users that are new xAU at some point in the experiment  | Fraction of users that are new xAU |  All users |
| user: retention metrics |  Overall average retention rate   | Overall average retention rate  | Participating users |
| user: L7, L14, L28 |  Not shown   | Average L-ness value per user per day  | All users |

## Detailed View

Click on **View Details** to access in depth metric information.  The deatiled view contains three sections: 
- **Time Series**: How the metrics evolve over time
- **Raw Date**: Group level statistics
- **Impact**: How the experiment impacts the metric 

### Time Series

In this view, select and drag as needed to zoom-in on different time ranges.  Three types of time series are avaialble in the drop-down:

**Daily**: The metric impact on each calendar day without aggregating days together.  This is useful for assessing the variability of the metric day-over-day and the impact of specific events.  It's the recommended time series view for Holdouts, since it highlights the impact over time as new features are launched. 

![image](https://user-images.githubusercontent.com/90343952/171748363-20d7819c-e264-4135-a126-93341e4bb717.png)

**Cumulative**: Shows how the aggregated metric lift and confidence intervals evolve over time. 

![image](https://user-images.githubusercontent.com/90343952/171912879-ad3ac78a-c8b2-4ccd-95d6-728fd4975817.png)
 
**Days Since Exposure**: Shows the metric impact broken down by the number of days users have been in the experiment, which helps distinguish between novelty effects and sustained impact.  For key metrics, this view also shows pre-experiment metrics to identify an differences that existed between groups even before the experiment started.  

![image](https://user-images.githubusercontent.com/90343952/171913487-9e8d7068-dbc1-4f78-9106-b61bb242eb3f.png)


### Raw Data

This view shows the group level statistics needed to compute the metric deltas and confidence interval.  Includes Units, Mean, and Total (explained above), as well as the Standard Error of the mean (Std Err).  Details on the statistical calculations are available [here](https://docs.statsig.com/stats-engine).

### Impact

![image](https://user-images.githubusercontent.com/90343952/171754168-624f740e-bdd6-46ea-a2e3-8d70e637ff75.png)

- **Experiment Delta (absolute)**: The absolute difference of the Mean between test groups i.e. Test Mean - Control Mean.
- **Experiment Delta (relative)**: Relative difference of the Mean i.e. 100% x (Test Mean – Control Mean) / Control Mean
- **Top-line Impact**: The measured effect that experiment is having on the overall topline metric each day, on average.  Computed on a daily basis and averaged across days in the analysis window.  The absolute value is the net daily increase or decrease in the metric, while the relative value is the daily percentage change.
- **Projected Launch Impact**: An estimate of the daily topline impact we expect to see if a decision is made and the test group is launched to all users.  This takes into account the layer allocation and the size of the test group.  Assumes the targeting gate (if there is one) remains the same after launch.

See [here](https://docs.statsig.com/stats-engine/topline-impact) for details on the exact calculation for topline and projected impact.

**FAQs about topline impact**

*Why is the projected launch impact smaller than the relative experiment delta?*

Often times, an experiment can impact only a subset of the user base that contributes to a topline metric.  So the relative experiment delta that we observe is effectively diluted when measured against the topline metric value.  

For example: Consider a top-of-funnel experiment on the registration page.  Among users that hit this page, the treatment is leading to more sign ups and a 10% lift in daily active users (DAU).  However, our topline DAU metric includes other user segments outside of the experiment, such as long term users that don't go to the registration page.  So what was a 10% lift in the test vs. control comparison, may amount to only a 1% increase in overal DAU.

*How can the topline impact be higher than the experiment delta?*

It's possible for the topline impact to be higher or lower than the experiment delta.  This is because the two values are computed differently and have different meaning.  

Experiment deltas are based on the unit-level averages: The mean value of the metric is computed for each user across all days, and then averaged to obtain the group mean.  The topline impact is computed daily based on the total pooled effect from all users, and we take the average across days to show the daily impact.  

We chose to compute topline impacts in this way because most metrics are tracked on a daily basis and the topline value tends to be computed as an aggregation across all users, rather than a user-level average.  For experiment analysis, on the other hand, best practice is for the analysis unit to match the randomization unit, so metrics are aggregated at the unit level first before computing experiment deltas.


