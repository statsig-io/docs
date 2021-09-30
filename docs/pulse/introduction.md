---
title: Pulse
sidebar_label: Introduction
slug: /pulse
---

Pulse measures the impact of a new functionality as compared to a control experience.  The comparison could either be created via a partially rolled out feature gate or an A/B/n test from Experiments+. Connecting new functionality to its impact on your customers and business is a powerful mechanism to understand customer behavior. Pulse automatically surfaces this impact on the Statsig console with no additional effort from you. 

## How to read Pulse
As the new functionality is exposed to new customers, Pulse uncovers how each of your metrics shift and if this shift is statistically significant. In the example below, Pulse is showing the impact of promotional campaign on an ecommerce website. The campaign has improved conversion rate for the shopping cart but also reduces daily active users (DAU) and product views. In this case, we may find that adding an item to the cart takes you to the checkout instead of browsing more products. Pulse highlights these trade-offs to ensure that you can make better decisions in shipping new functionality to more users.

![image](https://user-images.githubusercontent.com/1315028/131383108-4fca1a3e-8adb-4f5e-9adb-081c891ef15f.png)

To get your hands on Pulse, see the Statsig demo at www.statsig.com/demo. 

## Terminlogy
Hovering over a metric in Pulse renders a tool tip with key statistics for the control and treatment groups as shown and listed below.

![image](https://user-images.githubusercontent.com/1315028/131383593-384225bc-abbd-483f-a45a-3280d8bf5941.png)

 - **Mean**: Average of the metric over the observed distribution 
 - **Std**: Standard deviation of this metric
 - **Abs Delta**: Absolute difference of the Mean between test groups i.e. Pass Mean - Fail Mean
 - **Delta %**: Relative difference of the Mean i.e. (Pass mean – Fail mean) / Fail mean - 100%
 - **P-Value**: The p-value is the (two-sided) probability of achieving the observed (or more extreme) difference assuming that there is no difference between the test groups (or the new feature has no impact). A low p-value means that this assumption that there’s no difference is incorrect.  

## Metric Dimensions
If you want to see Pulse results for a metric further broken down by categories, use the **value** attribute to specify a category when you log the event. For example, when you log a click event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. To see the Pulse results for all categories within a metric, click on the (+) sign next to the metric. 

![image](https://user-images.githubusercontent.com/1315028/134992035-1bfa67f2-73a0-4b88-ac1d-688fa6ef0b33.png)

## Export Report
 
You can export Pulse results for a specific Rule and Rollout.  Exporting results can take up to 10 minutes.  When it's ready, a link will be available under under Project Settings -> Reports.  Inside you will find two files:
1. <experiment>_pulse_summary.csv - contains Pulse aggregate metrics computed over the duration of the experiment.
2. <experiment>_pulse_daily.csv - contains Pulse aggregate metrics computed on a daily basis.
 
Definitions:
- Date - The date of the data.  Statsig uses date stamps anchored to PST (Pacific Standard Time, GMT-8).
- name - Name of the Experiment or Feature Gate
- rule_id - Name of the Feature Gate Rule.
- group - The group of users for which this metric is computed for.  For a feature gate, this is pass/fail.  For an experiment, this is the variant name.
- metric_type - Category of the metric.  Different metric_types are computed differently, including how they're computed in Pulse.
- metric_name - The name of the metric.  For event metrics, this is the name of the event.
- dimension - The subcategory of the metric.  For example, if you log value in LogEvent, then value will show up as a subdimension.  dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions.
- units - The number of observations included in this metric.  For most metrics, this is the sum of daily exposed users across the duration of the experiment.  A user who was exposed 5 days ago will count as 5 units, regardless of their activity.
- participating_units - The number of units that have a recorded value.
- mean - The average value of this metric across units (or participating units when applicable)
- total - The aggregate value of this metric.  For metrics like DAU, this represents the average DAU across days.
- stddev - The standard deviation of the metric across units.  This is used to compute standard error and confidence intervals.
 
