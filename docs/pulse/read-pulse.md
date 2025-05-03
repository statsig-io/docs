---
title: How to Read Pulse (Experiment Results)
sidebar_label: Read Results
slug: /pulse/read-pulse
keywords:
  - owner:vm
last_update:
  date: 2024-11-01
---

## Read Experiment Results

To read the results of your experiment, go to the **Results** tab, where you will see your experiment hypothesis, **exposures**, and **Scorecard**.

### Exposures

![Exposures Chart](https://github.com/user-attachments/assets/7a80e74e-140d-4c36-a78e-c9b626e1fee5)

At the top of the Results page is the Exposures Chart. Exposures are the unique experimental units enrolled in the experiment. This is typically the number of unique users, and for device-level experimentation, this is the number of devices. The timeline shows you when the experiment was started, and how many exposures were enrolled on any given day. You can see the rate at which users were added into each group of the experiment, how many total users were exposed, and confirm the target ratio matches what you configured in experiment setup.

### Scorecard

The experiment **Scorecard** shows the metric lifts for all Primary and Secondary metrics you set up at experiment creation.

#### Immediately Post-experiment Start 

For up to the first 24 hours after starting your experiment (before our daily metric results run), the **Scorecard** section, a.k.a. Pulse, is calculated hourly (this only applies to Statsig Cloud, for WHN projects you will need to reload pulse on demand or set up a daily schedule). This more real-time Pulse is designed to enable you to confirm that exposures and metrics are being calculated as expected and debug your experiment or gate setup if needed. 

Please note that you should **not** make any experiment decisions based on more real-time Pulse data in this first 24 hour window after experiment start. Experiments should only be called once the experiment has hit target duration, as set by your primary metric(s) hitting experimental power. Read more about target duration [here](/experiments-plus/create-new#target-duration). 

Given data during this early post-experiment start window is designed for diagnostic, not decision-making purposes, you will notice a few key differences between this Pulse view and the Pulse results that will start showing after daily runs have initiated: 

- Metric lifts do not have confidence intervals
- No time-series view of metric trends
- No projected topline impact analysis
- No option to apply more advanced statistical tactics, such as CUPED or Sequential Testing 

All of these are available in daily Pulse results, which will start showing in the next daily Pulse run. 

#### Post-first Day Scorecard

![Scorecard](https://github.com/user-attachments/assets/8b855f5c-d26f-4185-ac31-5108fbebe18e)

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

* **Experiment results are computed for the first 90 days**: By default, Statsig will compute Pulse Results for your experiment for only the first 90 days of your experiment. You will be notified via e-mail as you approach the 90 days cap, at which point will be able to extend this compute window for another 30 days at a time. If the experiment runs beyond the compute window, new users will stop getting added into the experiment's result, but analysis for existing users who have been exposed to the experiment will continue to run even if the compute window is not extended, until you make a decision on the experiment. Note that this only affects whether a user is included in the experiment's analysis, and does not affect the treatment each user would receive, i.e. new users would still receive the experience for the group they get randomized into.

### Pulse Views 
There are a few different views to see your Pulse metric lifts, namely: 

- Cumulative results (default view)
- Daily results
- Days since exposure

Cumulative results includes a detailed view on hover, where you can additionally view the raw statistics used in the Pulse metric lift calculations, as well as topline impact.
![Screenshot 2025-05-01 at 4 36 34 PM](https://github.com/user-attachments/assets/856c7750-df56-45d9-b253-6b63f336cac7)

### Dimensions

There are two ways in which we can breakdown a given Pulse metric - one is by a **User Dimension**, the other is by an **Event Dimension**.

#### User Dimensions

User Dimensions refer to user level attributes that are either part of the user object you log, or additional metadata that Statsig extracts. Examples of these user attributes could be operating system, country, and region.

You can create [custom "explore" queries](/pulse/custom-queries) to _filter on_ or _group by_ available user dimensions. For example, you could "See results for users in the US", or "See results for users using iOS, grouped by their country". Go to the "explore" tab to draft a custom query

![custom queries](https://github.com/user-attachments/assets/e3afb526-8f9d-465e-af33-ea9575ac69e7)


#### Event dimensions

Events Dimensions refer to the value or metadata logged as part of a custom event that is used to define the metric. If you want to see Pulse results for a metric broken down by categories that are specific to that metric, [specify the dimension](/metrics/metric-dimensions) you want to break down by in the **value** or **metadata** attributes when you log the source event. For example, when you log a "click" event on your web or mobile application, you may also log the target category using the **value** attribute as shown below. Pulse will automatically generate results for each category in addition to the top level metric. 

To see the Pulse result breakdowns for all categories within a metric, click on the (+) sign next to the metric.
![dimension button](https://github.com/user-attachments/assets/65cbe2a0-d269-4385-a606-c825ff2e8e05)

![dimension results view](https://github.com/user-attachments/assets/f557dac6-e29f-4cb5-bd6a-19fc2b226193)

### Significance Level Settings

These settings can be adjusted at any time to view Pulse results with different significance levels. 

* **Apply Benjamini-Hochberg Procedure per Variant**: Select this option to apply the procedure to reduce the probability of false positives by adjusting the significance level for multiple comparisons - [read more here](/stats-engine/methodologies/benjamini–hochberg-procedure).
* **Confidence Interval**: Changes the confidence interval displayed with the metric deltas.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.
* **CUPED**: Toggle CUPED on/ off via the inline settings above the metric lifts. NOTE- this setting can only be toggled for **Scorecard** metrics, as CUPED is not applied to non-Scorecard metrics. 
* **Sequential Testing**: Applies a correction to the calculate p-values and confidence intervals to reduce false positive rates when evaluating results before the target completion date of the experiment.  This helps mitigate the increased false positive rate associated with the "peeking problem". Toggle Sequential Testing on/ off via the inline settings above the metric lifts.  NOTE- this setting is available only for experiments with a set target duration.
* 
![analysis settings](https://github.com/user-attachments/assets/d2d7405a-9e86-4317-8f32-51b369c66699)  
