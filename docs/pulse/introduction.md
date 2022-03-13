---
title: Pulse
sidebar_label: Pulse
slug: /pulse
---

Pulse is Statsig's powerful visualization that shows an experiment's impact across a wide range of metrics.  It allows you to quickly assess which metrics you need to pay attention to, while finding trends across metrics, allowing you to validate existing hypotheses or devise alternative explanations. Pulse is currently available on partially rolled out feature gates and Experiments+.

Statsig believes that experimentation should never be reduced to a single metric and that it's critical to understand the effect of changes and experiments across a suite of your company's metrics.  Examining more than one metric allows you to find corroborating data about how and why an experiment works.  It can also help you identify potential issues, tradeoffs, and unintended consequences.  This powerful approach to experimentation was pioneered and proven by some of the largest tech companies.

## How to read Pulse

### Exposures

![Exposures Chart](https://user-images.githubusercontent.com/77478319/137816780-c0af4967-3903-45bf-88d9-ff3d3236632e.png)

At the top of Pulse is the Exposures Chart.  Exposures are the unique experimental units enrolled in the experiment.  This is typically the number of unique users, and for device-level experimentation, this is the number of devices.  The timeline shows you when the experiment was started, and how many exposures were enrolled as of any given day.  You can see the rate at which users were added into each group of the experiment, how many total users were exposed, and confirm the target ratio.

### Metrics Overview

![Pulse Metrics](https://user-images.githubusercontent.com/1315028/148865111-6bffe795-901c-4489-b9b1-36c6b97d9d13.png)

Pulse calculates the difference between the comparable randomization groups (eg. test and control) across your company's suite of metrics, and applies a statistical test to the results.  For every metric, we will show you:
- The calculated relative difference (Delta %)
- The confidence interval
- Whether the result is statistically significant
   - Positive lifts are green
   - Negative lifts are red
   - Non-significant results are grey.

The formula for calculating lift is:

Delta(%) = (Test - Control) / Control

Confidence intervals are reported at the selected significance level (95% by default).  In a typical Z-test, we show the confidence interval as +/- 1.96 * standard error.

### Dimensions

There are two ways in which we can breakdown a given Pulse metric - one is by user dimension, the other is by value dimension.

**User dimensions** refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these attributes are operating system, country, and region. Clicking on the "Settings" button in the Pulse metrics view will show you the option to add a filter on a single user dimension through the drop down. If you would like to view a more complex breakdown, either by including multiple values for a single user dimension (e.g. see metrics for users who are either in the United States or Canada) or including filters on multiple user dimensions (e.g. see metrics for users in the United States and using iOS devices), you can create a Custom Query by clicking on the "Create Custom Query" button located in the same "Settings" menu, or by navigating to the "Custom Query" tab within the Experiment or Feature Gate you want to create the query for.

**Value dimensions** refer to the set of distinct values logged alongside a given metric. If you want to see Pulse results for a metric further broken down by categories that are specific to that metric, specify that category in in **value** attribute when you log the event. For example, when you log a click event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. To see the Pulse results for all categories within a metric, click on the (+) sign next to the metric. 

![image](https://user-images.githubusercontent.com/1315028/134992035-1bfa67f2-73a0-4b88-ac1d-688fa6ef0b33.png)

### Metrics Drill-Down

A tooltip with key statistics and deeper information is shown if you hover over a metric in Pulse.

![image](https://user-images.githubusercontent.com/1315028/140843461-d874a26a-056c-45b6-9ce7-a6df4909711d.png)

 - **Group**: The name of the group of users. For Feature Gates, the "Pass" group is considered the test group while the "Fail" group is the control. In Experiments, these will be the variant names.
 - **Units**: The number of observations included in the metric. Most metrics report a value for each exposed user on a daily basis. A user who has been in the experiment for 7 days will produce 7 observations (units).
 - **Mean**: Average of the metric across the units (observations).
 - **Std**: Standard error of the mean estimate for this metric.
 - **Abs Delta**: The absolute difference of the Mean between test groups i.e. Test Mean - Fail Mean.
 - **Delta %**: Relative difference of the Mean i.e. 100% x (Pass mean – Fail mean) / Fail mean
 - **p-Value**: The probability that such an extreme difference can arise by random chance when the experiment or test actually has no effect.  A low p-value implies the observed difference is unlikely due to random chance.  In hypothesis testing, a p-value threshold is used to determine which results are due to a real effect and which are plausibly due to random chance.
 - **Time Series**: A daily view of how the metric has evolved over a given period of time (shown below). 
 
   ![image](https://user-images.githubusercontent.com/1315028/140843916-73bb885e-4cc5-40a9-a587-36d9616f16ed.png)




## Best Practices and Avoiding False Positives

We have some suggestions on how to interpret Pulse in a scientifically-sound way:
1. Have a hypothesis in mind before viewing Pulse.  What are the metric(s) you expect to shift due to the change you made?  What else could have happened?  What are signs it has gone wrong?
2. Establish a small set of key metrics that are directly related to your hypothesis and would most directly establish that the experiment worked.  Having more than a handful of key metrics is usually a sign of an ill-defined hypothesis or shotgun experimentation.  Examining too many metrics will lead to a higher false positive rate (seeing results when only statistical noise exists).
3. Avoid cherry-picking results.  For example, don't selectely pick three metrics that look good, but ignore the two that don't.  Also avoid picking "good" or "bad" numbers that have no connection to your hypothesis.  Context matters a lot, and statistically-significant results should have a plausible explanation (false positive can be a plausible explanation).
5. Seeing multiple (independent) effects that are consistent with a plausible story lends credibility that the observed effects are real, even with borderline p-values.
6. Expect to see false positives and be suspicious of statistically significant results with borderline p-values.  For example, a 95% confidence interval (5% significance level) is expected to turn up one statistically significant metric out of twenty due purely to random chance.  This number goes up if you start to include borderline metrics (eg. p = 0.06).
7. Look beyond your hypothesis.  What other effects can you find?  Are there tradeoffs?  Are there unexpected behaviors?  These can reveal information about your users and how they interact with your product.  They are often the source of follow-up experiments and new ideas.


## Export Report
 
You can export Pulse results for Feature Gates and Experiments+.  Exporting results can take up to 10 minutes.  When it's ready, a link will be available under under Project Settings -> Reports.  

There are two types of export:
1. Pulse Summary - This provides precomputed summary experimental data for all metrics and test groups including everything that's visible on Pulse. Two files are provided, daily and overall (**around 10-100 kb**).  This will contain:
   1. \<experiment\>_pulse_summary.csv - contains Pulse aggregate metrics computed over the duration of the experiment.
   2. \<experiment\>_pulse_daily.csv - contains Pulse aggregate metrics computed on a daily basis.

2. Raw Data - This provides raw exposures and metrics data at the user-day level. This is best used for manually inspecting data, or recomputing your own statistics (**around 10-1000MB**).  This will contain:
   1. \<experiment\>_.csv - contains a list of users and their first exposure to the experiment.
   2. \<experiment\>_.csv - contains a list of experimental users, and their calculated metrics for each day they were enrolled in the experiment.

### Pulse Summary and Daily File Description

| Column Name | Description |
|-------------|-------------|
| Date | The date of the data.  Statsig uses date stamps anchored to PST (Pacific Standard Time, GMT-8). |
| name | Name of the Experiment or Feature Gate |
| rule_id | Name of the Feature Gate Rule.
| experiment_group | The group of users for which this metric is computed for.  For a feature gate, this is pass/fail.  For an experiment, this is the variant name.
| metric_type | Category of the metric.  Different metric_types are computed differently, including how they're computed in Pulse.
| metric_name | The name of the metric.  For event metrics, this is the name of the event.
| dimension | The subcategory of the metric.  For example, if you log value in LogEvent, then value will show up as a subdimension.  dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions.
| units | The number of observations included in this metric.  For most metrics, this is the sum of daily exposed users across the duration of the experiment.  A user who was exposed 5 days ago will count as 5 units, regardless of their activity.
| participating_units | The number of units that have a recorded value.
| mean | The average value of this metric across units (or participating units when applicable)
| total | The aggregate value of this metric.  For metrics like DAU, this represents the average DAU across days.
| stddev | The standard deviation of the metric across units.  This is used to compute standard error and confidence intervals.

### First Exposures File Description

| Column Name | Description |
|-------------|-------------|
| user_id / stable_id | Refers to the unit identifier used in the experiment |
| name | The name of the gate/experiment |
| rule | For gates, this refers to the rule name |
| experiment_group | The group the user was assigned to |
| first_exposure_utc | The UTC timestamp when the user was first assigned to the experiment |
| first_exposure_pst_date | The date in PST when the user was first assigned to the experiment |
| as_of_pst_date | The date this data was generated |

### Unit Metrics File Description

| Column Name | Description |
|-------------|-------------|
| pst_ds | The 24hr window the the data refers to.  All dates are anchored from 12:00a -> 11:59p PST. |
| user_id / stable_id | Refers to the unit identifier used in the experiment |
| metric_type | The category of the metric |
| metric_name | The name of the metric |
| metric_dimension | The name of the metric dimension.  '!statsig_topline' is the overall metric with no slicing. |
| metric_value | The numeric value of the metric |
| numerator | For some metrics, we track the numerator |
| denominator | For some metrics, we track the denominator |
