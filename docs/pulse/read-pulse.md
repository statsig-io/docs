---
title: How to Read Pulse
sidebar_label: Read Results
slug: /pulse/read-pulse
---

## How to read Pulse

### Exposures

![Exposures Chart](https://user-images.githubusercontent.com/77478319/137816780-c0af4967-3903-45bf-88d9-ff3d3236632e.png)

At the top of Pulse is the Exposures Chart. Exposures are the unique experimental units enrolled in the experiment. This is typically the number of unique users, and for device-level experimentation, this is the number of devices. The timeline shows you when the experiment was started, and how many exposures were enrolled as of any given day. You can see the rate at which users were added into each group of the experiment, how many total users were exposed, and confirm the target ratio.

### Metrics Overview

![Pulse Metrics](https://user-images.githubusercontent.com/1315028/148865111-6bffe795-901c-4489-b9b1-36c6b97d9d13.png)

Pulse calculates the difference between the comparable randomization groups (eg. test and control) across your company's suite of metrics, and applies a statistical test to the results. For every metric, we will show you:

- The calculated relative difference (Delta %)
- The confidence interval
- Whether the result is statistically significant
  - Positive lifts are green
  - Negative lifts are red
  - Non-significant results are grey.

The formula for calculating lift is:

Delta(%) = (Test - Control) / Control

Confidence intervals are reported at the selected significance level (95% by default). In a typical two-sided Z-test, we show the confidence interval as +/- 1.96 \* standard error.

99.9% winsorization is automatically applied to event_count, event_count_custom, and sum metrics. This caps extreme outlier values to reduce their impact on experiment results.

### Dimensions

There are two ways in which we can breakdown a given Pulse metric - one is by user dimension, the other is by value dimension.

#### User Dimensions

User dimensions refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these attributes are operating system, country, and region.

You can create [custom queries](/pulse/custom-queries) to create queries that _filter on_ or _group by_ available user dimensions. For example, you could "See results for users in the US", or "See results for users using iOS, grouped by their country".

#### Value dimensions

Value Dimensions refer to the set of distinct values logged alongside a given metric. If you want to see Pulse results for a metric further broken down by categories that are specific to that metric, specify that category in in **value** attribute when you log the event. For example, when you log a click event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. To see the Pulse results for all categories within a metric, click on the (+) sign next to the metric.

![image](https://user-images.githubusercontent.com/88338316/158864531-be7f4527-6f83-4f9c-9b9d-2de4f34ec77f.png)
![image](https://user-images.githubusercontent.com/1315028/134992035-1bfa67f2-73a0-4b88-ac1d-688fa6ef0b33.png)
