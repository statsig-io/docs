---
title: How to Read Pulse
sidebar_label: Read Results
slug: /pulse/read-pulse
---

## How to read Pulse

### Exposures

![Exposures Chart](https://user-images.githubusercontent.com/77478319/137816780-c0af4967-3903-45bf-88d9-ff3d3236632e.png)

At the top of Pulse is the Exposures Chart. Exposures are the unique experimental units enrolled in the experiment. This is typically the number of unique users, and for device-level experimentation, this is the number of devices. The timeline shows you when the experiment was started, and how many exposures were enrolled on any given day. You can see the rate at which users were added into each group of the experiment, how many total users were exposed, and confirm the target ratio matches what you configured in experiment setup.

### Metric Lifts

#### First 24 hours post-experiment start 

For the first 24 hours after starting your experiment, Pulse is calculated hourly. This more real-time Pulse is designed to enable you to confirm that exposures and metrics are being calculated as expected and debug your experiment or gate setup if needed. 

Please note that you should **not** make any experiment decisions based on more real-time Pulse data in the first 24 hours after experiment start. Experiments should only be called once the experiment has hit target duration, as set by your primary metric(s) hitting experimental power. Read more about target duration [here](https://docs.statsig.com/experiments-plus/create-new#target-duration). 

A few key differences between Hourly Pulse and your daily Pulse results that will start showing after the initial 24 hour window post-experiment start: 

- No confidence intervals
- 

#### Ongoing Metric Lifts  

![Screen Shot 2022-12-29 at 1 47 32 PM](https://user-images.githubusercontent.com/101903926/210014132-cfe6d82c-d451-4deb-8834-971412d482d4.png)

The **Metric Lifts** section, a.k.a. **Pulse** calculates the difference between the comparable randomization groups (eg. test and control) across your company's suite of metrics, and applies a statistical test to the results. You can read more about Statsig's stats engine [here](https://docs.statsig.com/stats-engine). 

For every metric, we will show you:

- The calculated relative difference (Delta %)
- The confidence interval
- Whether the result is statistically significant
  - Positive lifts are green
  - Negative lifts are red
  - Non-significant results are grey

The formula for calculating lift is:

Delta(%) = (Test - Control) / Control

Confidence intervals are reported at the selected significance level (95% by default). In a typical two-sided Z-test, we show the confidence interval as +/- 1.96 \* standard error. 

99.9% winsorization is automatically applied to event_count, event_count_custom, and sum metrics. This caps extreme outlier values to reduce their impact on experiment results. For metrics added to the **Scorecard** or **Monitoring Metrics** sections of your experiment or gate, you can also apply other optional statistical treatments, such as CUPED (pre-experiment bias reduction) and sequential testing adapted confidence intervals. Read more [here](https://docs.statsig.com/stats-engine). 

### Dimensions

There are two ways in which we can breakdown a given Pulse metric - one is by user dimension, the other is by value dimension.

#### User Dimensions

User dimensions refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these attributes are operating system, country, and region.

You can create [custom queries](/pulse/custom-queries) to create queries that _filter on_ or _group by_ available user dimensions. For example, you could "See results for users in the US", or "See results for users using iOS, grouped by their country".

#### Value dimensions

Value Dimensions refer to the set of distinct values logged alongside a given metric. If you want to see Pulse results for a metric further broken down by categories that are specific to that metric, specify the dimension you want to break down by in the **value** or **metadata** attributes when you log the event. For example, when you log a click event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. 

To see the Pulse result breakdowns for all categories within a metric, click on the (+) sign next to the metric. Read more about configuring metric dimensions [here](https://docs.statsig.com/metrics/metric-dimensions). 

![image](https://user-images.githubusercontent.com/88338316/158864531-be7f4527-6f83-4f9c-9b9d-2de4f34ec77f.png)
![image](https://user-images.githubusercontent.com/1315028/134992035-1bfa67f2-73a0-4b88-ac1d-688fa6ef0b33.png)
