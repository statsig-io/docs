---
title: Pulse
slug: /statsig-warehouse-native/guides/pulse
sidebar_label: Pulse
displayed_sidebar: cloud
---

Pulse is Statsig's visualization of how an experiment impacted target metrics. This page walks through the tool and how to use it to evaluate your experiment.

## Pulse

You can navigate to your Pulse Results from within any experiment or gate. This is also the default landing page for an experiment that has an analysis ready to view.

## Exposures

At the top of pulse is the exposures view. This shows how unique users have onboarded to an experiment over time. It also has the overall splits of users in the experiment.

In the health checks, an SRM check will flag if exposures are imbalanced in a significant way.

![Exposures Card](https://user-images.githubusercontent.com/102695539/264086660-26573d9d-5242-4594-9b46-5e8a21df8812.png)

## Scorecard

The scorecard is the core view of pulse.

Below, we'll summarize what's in this page. For a deeper look, go to the [stats engine docs](https://docs.statsig.com/stats-engine).

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

Winsorization will be applied based on metric-level settings. This caps extreme outlier values to reduce their impact on experiment results. CUPED (regression adjustment) is applied by default, with an easy toggle to see non-CUPED results if desired. Sequential testing, bonferroni corrections for multiple comparisons and controlling family-wise error rates, and Bayesian analysis are available in the settings page.

![Scorecard](https://user-images.githubusercontent.com/102695539/264087011-46725b31-6064-4cd4-806b-d8db119e0e9b.png)

## Health Checks

In the diagnostics tab, the results of Statistical and Data Quality checks are available. These include:

- The status of Jobs. Here you can also see and copy the SQL that was run for every step of the Pulse analysis
- Exposures are balanced between group. This uses a chi-squared test to detect if there is a meaningful difference between the group populations and the expected split.
- Checking that there's not a large population of users with exposures in both test and control. These users are discarded in pulse analysis, but a significant population could reduce power or cause bias.
- Checking that there were exposures present in the analysis range selected
- Confirming that metric data was able to be joined to exposure data; this can identify a mismatch in IDs or a misconfigured metric

![Health Checks](https://user-images.githubusercontent.com/102695539/264087016-c6a8040f-2760-4829-a5ae-ee9f5b29ed41.png)

## Explore

The explore tab allows you to use user dimensions to drill down and explore results. This is a powerful tool for diagnostics and hypothesis generation, though it's important to treat these results as inconclusive unless the experiment had a specific hypothesis in mind for your target population. You can also select from "special" tags including **All Metrics** (all metrics in your project) and **Scorecard Metrics** (all metrics on the experiment scorecard). 
![image](https://github.com/statsig-io/docs/assets/31516123/829cf18b-e3bd-4a8b-ad51-5259bb3eda29)

