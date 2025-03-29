---
title: How to Read Pulse
sidebar_label: Read Results
slug: /pulse/read-pulse
keywords:
  - owner:vm
last_update:
  date: 2024-11-01
---

## How to read Pulse

### Exposures

![Exposures Chart](https://user-images.githubusercontent.com/77478319/137816780-c0af4967-3903-45bf-88d9-ff3d3236632e.png)

At the top of Pulse is the Exposures Chart. Exposures are the unique experimental units enrolled in the experiment. This is typically the number of unique users, and for device-level experimentation, this is the number of devices. The timeline shows you when the experiment was started, and how many exposures were enrolled on any given day. You can see the rate at which users were added into each group of the experiment, how many total users were exposed, and confirm the target ratio matches what you configured in experiment setup.

### Metric Lifts

#### Immediately Post-experiment Start 

For up to the first 24 hours after starting your experiment (before our daily Pulse run), the **Metric Lifts** section, a.k.a. Pulse, is calculated in near real-time (this only applies to Statsig Cloud, for WHN projects you will need to reload pulse on demand or set up a daily schedule). This more real-time Pulse is designed to enable you to confirm that exposures and metrics are being calculated as expected and debug your experiment or gate setup if needed. 

Please note that you should **not** make any experiment decisions based on more real-time Pulse data in this first 24 hour window after experiment start. Experiments should only be called once the experiment has hit target duration, as set by your primary metric(s) hitting experimental power. Read more about target duration [here](/experiments-plus/create-new#target-duration). 

<img width="1205" alt="Screen Shot 2023-06-19 at 3 29 13 PM" src="https://github.com/statsig-io/docs/assets/101903926/c148deb6-b20d-4f36-af1a-83836d23371b"/>


Given data during this early post-experiment start window is designed for diagnostic, not decision-making purposes, you will notice a few key differences between this Pulse view and the Pulse results that will start showing after daily runs have initiated: 

- Metric lifts do not have confidence intervals
- No time-series view of metric trends
- No projected topline impact analysis
- No option to apply more advanced statistical tactics, such as CUPED or Sequential Testing 

<img width="992" alt="Screen Shot 2023-06-19 at 3 32 13 PM" src="https://github.com/statsig-io/docs/assets/101903926/c34d4358-c92d-488f-ae49-d073904065d0"/>



All of these are available in daily Pulse results, which will start showing in the next daily Pulse run. 

#### Post-first Day Metric Lifts  

<img width="1194" alt="Screen Shot 2023-09-20 at 11 35 05 AM" src="https://github.com/statsig-io/docs/assets/101903926/85fdc847-8d70-4215-a6ad-5a1f2d49c5e7"/>

The Pulse daily run calculates the difference between the comparable randomization groups (eg. test and control) across your company's suite of metrics, and applies a statistical test to the results. You can read more about Statsig's stats engine [here](/stats-engine). 

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

99.9% winsorization is automatically applied to event_count, event_count_custom, and sum metrics. This caps extreme outlier values to reduce their impact on experiment results. For metrics added to the **Scorecard** or **Monitoring Metrics** sections of your experiment or gate, you can also apply other optional statistical treatments, such as CUPED (pre-experiment bias reduction) and sequential testing adapted confidence intervals. Read more [here](/stats-engine). 

### Pulse Views 
There are a few different views to see your Pulse metric lifts, namely: 

- Cumulative results (default view)
- Daily results
- Days since exposure

Cumulative results includes a detailed view on hover, where you can additionally view the raw statistics used in the Pulse metric lift calculations, as well as topline impact.

<img width="1282" alt="Screen Shot 2023-09-20 at 11 35 16 AM" src="https://github.com/statsig-io/docs/assets/101903926/1509479e-b5c6-416f-8d2a-ac0672165dd1"/>


<img width="1194" alt="Screen Shot 2023-09-20 at 11 35 35 AM" src="https://github.com/statsig-io/docs/assets/101903926/9cdb7294-c979-4e0d-b26c-e20c86794d2b"/>


### Dimensions

There are two ways in which we can breakdown a given Pulse metric - one is by a **User Dimension**, the other is by an **Event Dimension**.

#### User Dimensions

User Dimensions refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these user attributes could be operating system, country, and region.

You can create [custom queries](/pulse/custom-queries) to create queries that _filter on_ or _group by_ available user dimensions. For example, you could "See results for users in the US", or "See results for users using iOS, grouped by their country".

#### Event dimensions

Events Dimensions refer to the value or metadata logged as part of a custom event that is used to define the metric. If you want to see Pulse results for a metric broken down by categories that are specific to that metric, [specify the dimension](/metrics/metric-dimensions) you want to break down by in the **value** or **metadata** attributes when you log the source event. For example, when you log a "click" event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. 

To see the Pulse result breakdowns for all categories within a metric, click on the (+) sign next to the metric.

![!image](/img/dimension_button.png)

![image](https://user-images.githubusercontent.com/88338316/158864531-be7f4527-6f83-4f9c-9b9d-2de4f34ec77f.png)
![image](https://user-images.githubusercontent.com/1315028/134992035-1bfa67f2-73a0-4b88-ac1d-688fa6ef0b33.png)

### Significance Level Settings

These settings can be adjusted at any time to view Pulse results with different significance levels. 

* **Apply Bonferroni Correction**: Select this option to apply the correction in experiments with more than one test group. This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Confidence Interval**: Changes the confidence interval displayed with the metric deltas.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.
* **CUPED**: Toggle CUPED on/ off via the inline settings above the metric lifts. NOTE- this setting can only be toggled for **Scorecard** metrics, as CUPED is not applied to non-Scorecard metrics. 
* **Sequential Testing**: Applies a correction to the calculate p-values and confidence intervals to reduce false positive rates when evaluating results before the target completion date of the experiment.  This helps mitigate the increased false positive rate associated with the "peeking problem". Toggle Sequential Testing on/ off via the inline settings above the metric lifts.  NOTE- this setting is available only for experiments with a set target duration.

![Screen Shot 2022-07-08 at 5 24 36 PM](https://user-images.githubusercontent.com/101903926/178084399-13b8f2a9-e175-4b95-a2a1-ae28b0098dc6.png)

   