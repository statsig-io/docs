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

**User dimensions** refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these attributes are operating system, country, and region. Clicking on the "Settings" button and then the "Create Custom Query" button in the Pulse metrics view will take you through the flow for creating a query that _filters on_ and/or _groups by_ the user dimensions you have available. This allows you to do simple queries such as "See metrics for users in the US" to much more complicated queries such as "See metrics for users who use iOS, grouped by their Country". These queries take a few minutes to run, but once complete the results will be visible in the "Custom Queries" tab of the Gate or Experiment you ran the query for (you will also receive an email and console notification with a link).

![image](https://user-images.githubusercontent.com/88338316/158862710-042a4440-e17a-44ab-96cb-0af6a8597eb3.png)
![image](https://user-images.githubusercontent.com/88338316/158862836-381dafe2-8140-4b7d-9a28-b59a0ebcbd4c.png)
![image](https://user-images.githubusercontent.com/88338316/158864531-be7f4527-6f83-4f9c-9b9d-2de4f34ec77f.png)


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

![Finding Export Report](https://user-images.githubusercontent.com/77478319/163458841-5394573f-08e1-40b3-a62a-ae1bfe6cfde1.png)

You can export your Pulse Results for Feature Gates and Experiments.  Simply navigate to the relevant "Pulse Results" page, and click "Export Report". Exporting results can take up to 10 minutes.  A notification and an email will be sent when the report is ready, and a link will be available under under Project Settings -> Reports.

![Export Pulse Report Menu](https://user-images.githubusercontent.com/77478319/163458999-bcf599ec-4564-460a-87ba-c08975589b3b.png)

There are three types of export:
1. Exposures - A table of all exposed users and their first exposures.  This is useful for joining on your own internal data, and running custom queries within your own data warehouse.  This can also be used to verify who was in the experiment, what group they were assigned to, and when they were first exposed (around 1-25MB).  This will contain:
   1. <experiment\>_first_exposures.csv - contains a list of users and their first exposure to the experiment.
   
2. Pulse Summary - This provides precomputed summary experimental data for all metrics and test groups including everything that's visible on Pulse (**around 10-100 kb**).  This will contain:
   1. <experiment\>_pulse_summary.csv - contains Pulse aggregate metrics computed over the duration of the experiment.

3. Raw Data - This provides raw exposures and metrics data at the user-day level. This is best used for manually inspecting data, or recomputing your own statistics (**around 10MB-1GB**).  This will contain:
   1. <experiment\>_first_exposures.csv - contains a list of users and their first exposure to the experiment. If this is the only file you are interested in, you can get this by exporting an "Exposures" report which will be much smaller in size.
   2. <experiment\>_user_metrics.csv - contains a list of experimental users, and their calculated metrics for each day they were enrolled in the experiment.

### Pulse Summary File Description - For Feature Gates

| Column Name | Description |
|-------------|-------------|
| name | Name of the Experiment or Feature Gate |
| rule | Name of the Feature Gate Rule.
| metric_type | Category of the metric.  Different metric_types are computed differently, including how they're computed in Pulse.
| metric_name | The name of the metric.  For event metrics, this is the name of the event.
| metric_dimension | The subcategory of the metric.  For example, if you log value in LogEvent, then value will show up as a subdimension.  dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions.
| start_date | The start date for this measurement |
| end_date | The end date for this measurement |
| test_units | The number of users in the test group |
| test_mean | The average value of this metric across test users (or participating units when applicable) |
| test_stderr | The standard error for the estiamte of the mean for test users.  This can be used to compute confidence intervals. |
| ctrl_units | The number of users in the control group |
| ctrl_mean | The average value of this metric across control users (or participating units when applicable) |
| ctrl_stderr | The standard error for the estiamte of the mean for control users.  This can be used to compute confidence intervals. |
| abs_delta | The absolute difference between the test and control mean (test_mean - ctrl_mean) |
| abs_stderr | The estimated standard error of abs_delta |
| rel_delta | The relative difference between test and control mean, sometimes referred to as lift (test_mean - ctrl_mean)/ctrl_mean |
| rel_stderr | The estimated standard error of rel_delta  (abs_delta/ctrl_mean) |
| z_score | The calculated Z-score |
   
### Pulse Summary File Description - For Experiments
   
| Column Name | Description |
|-------------|-------------|
| name | Name of the Experiment or Feature Gate |
| rule | Name of the Feature Gate Rule. |
| experiment_group | The group of users for which this metric is computed for.  For a feature gate, this is pass/fail.  For an experiment, this is the variant name. |
| metric_type | Category of the metric.  Different metric_types are computed differently, including how they're computed in Pulse. |
| metric_name | The name of the metric.  For event metrics, this is the name of the event. |
| metric_dimension | The subcategory of the metric.  For example, if you log value in LogEvent, then value will show up as a subdimension.  dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions. |
| start_date | The start date for this measurement |
| end_date | The end date for this measurement |
| units | The number of users included in this metric estimate. |
| mean | The average value of this metric across units (or participating units when applicable) |
| stderr | The standard error for the estiamte of the mean.  This can be used to compute confidence intervals. |

### First Exposures File Description

| Column Name | Description |
|-------------|-------------|
| user_id / stable_id / <custom_id> | Refers to the unit identifier used in the experiment |
| name | The name of the gate/experiment |
| rule | For gates, this refers to the rule name |
| experiment_group | The group the user was assigned to |
| first_exposure_utc | The UTC timestamp when the user was first assigned to the experiment |
| first_exposure_pst_date | The date in PST when the user was first assigned to the experiment |
| as_of_pst_date | The date this data was generated |
| user_dimensions | JSON-formatted key-value pairs describing the user's attributes at the time of first exposure |
   
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
