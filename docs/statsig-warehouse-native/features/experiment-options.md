---
sidebar_label: Configuration
title: Configuring Experiments
keywords:
  - owner:craig
---

# Configuration

In Statsig Warehouse Native, there's a large amount of configurability in experiment setup and analysis. Statsig users should be able to run an experiment with "default" options and get powerful, trustworthy statistical analysis of your results, but in many cases an advanced configuration helps users maximize power and helps to measure exactly what is intended to be measured.

This page is intended as a broad glossary for advanced experimentation settings - what they do, how to use them, and tradeoffs to be aware of.

# Experiment Settings

## Basic Settings

### Hypothesis

Hypotheses are required to run experiments in Statsig. Hypotheses should specify what an experiment is aiming to accomplish, and how that will be measured.

### Primary and Secondary Metrics

These are the metrics used as the evaluation criteria for your experiment. Generally, Statsig recommends a small number of primary metrics to use as your overall evaluation criteria, and to put guardrails and exploratory metrics into Secondary.

There is project-level configuration of the maximum number of primary/secondary metrics available; this behavior varies by company and industry, as well as the complexity of the space being measured.

### Experiment Duration

In experiment setup there are fields for _Experiment Measured In_ and _Target_. This allows configuration of how long your experiment should be run for, influencing sequential testing as well as notifications/timeline alerts.

Note that Statsig's [power analysis tools](./power-analysis.md) are the best way to determine what the target duration should be. A power analysis can be attached to an experiment to add context on the duration.

### Experiment Configuration

### Assignment Source and Groups

For analysis-only experiments, this section will be pre-filled from the observed data in the data warehouse. Images and descriptions can be configured. Group sizes will be inferred, but should be reviewed and corrected if mismatched with the intended traffic split.

This can be updated by resetting the experiment from the decision menu after it has started.

### Groups and Parameters

For end-to-end experiments (experiments using Statsig for both assignment and analysis), this section is where targeting, layers, and finally the groups and associated parameters are configured. Exposures generated from the setup will automatically be associated with this experiment for analysis.

### Advanced Settings

There are a large number of advanced settings available for customizing analysis. These can have complex interactions with data.

### Pre-computed User Dimensions

Dimensions can be configured as default breakdowns in pulse. That is, a user dimension (e.g. country) can be specified here and it will be available in the scorecard results with daily loads.

This allows users to skip the process of doing scheduled explore queries for this dimension, and allows the results to be available "inline" in their scorecard.

### Stratified Sampling

Stratified Sampling allows users to balance their experiments across behavior or segments. This is achieved by testing random salts, and picking the one that best-balances user attributions. This can be partially achieved during analysis using [CURE](/experiments-plus/cure/)
See [Stratified Sampling](/experiments-plus/stratified-sampling) for further documentation.

### ID Type and Secondary ID Type

The ID type, which is the unit of randomization for an experiment, is configured when setting up the experiment and is a critical field. This represents the kind of entity being experimented on. For example, if splitting traffic randomly per user, this should be `User ID`. If splitting traffic by company, this should be `Company ID`.

Secondary ID types are used to associate metrics on a different ID with the unit of randomization. Concretely, if running an experiment on a logged out cookie ID, specifying `UserID` as a secondary ID allows easy analysis of `UserID` metrics like revenue, while keeping `Cookie ID`s as the unit of analysis (e.g. the denominator in means). This is a powerful way to understand downstream impact of your experiments without introducing survivorship bias or other bias to the analysis.

This mapping can come directly from the assignment source. If multiple exposures are logged for a given unit, and at least one has both ID types, Statsig will identify that these two IDs are mapped to each other. Alternately, mappings can be specified in an Entity Property Source - just provide a mapping table of `ID1` to `ID2` and Statsig will connect the data during analysis.

Secondary ID mapping can be configured as an enforced 1:1 mapping, or as a first-touch attribution. Refer to the [full documentation](./id-resolution.md) for more details.

### Allocation and Cohorting

**Configure Allocation Duration**

If using a persistent assignment SDK ([docs](/client/concepts/persistent_assignment)), this setting controls when to stop enrolling users into the experiment.

This can also be used without a persistent assignment SDK to filter users after the duration period from the analysis - this use case is helpful for enforcing even cohorts across a userbase. For example, if a metric takes 7 days to mature, and stopping the experiment will halt the experiment effect, setting the allocation duration to 14 days and running the experiment for 21 days will analyze the first 14 days of exposed units while analyzing all 7 days of the last cohort's metric behavior.

**Configure Analysis Period**

This is similar to the allocation duration, but controls the dates from which metric data will be collected. This is useful for truncating the analysis while continuing to run an experiment

**Allow cohort metrics to mature after experiment end**

This setting allows cohort or baked metrics that take time to mature to continue collecting data after the end of an experiment. This is only recommended if an experiment is a one-time intervention.

For example, consider a 14 day experiment on new users that modifies a signup page. Removing the changes to the signup page does not impact users who already saw it, so to maximize data for "first-week revenue" metric, this setting can be checked and data will continue to collect for users enrolled on the 14th day until the 21st day, or for users enrolled on the 10th day until the 17th day, even though the experiment is no longer running after the 14th day.

### Cure Covariates

This section allows configuration of covariates for CURE. It is recommended to configure strong defaults in the project settings, and use this to add relevant/domain-specific covariates. See the [CURE](/experiments-plus/cure/) documentation for more details.

### Analysis Settings

**Analytics Type**

Whether to use Frequentist or Bayesian analysis. This cannot be changed once an experiment starts to avoid cherry-picking methodology.

**Apply Sequential Testing [Frequentist Only]**

Controls whether [sequential testing](/experiments-plus/sequential-testing) is applied. This setting is recommended to avoid false positives from peeking.

**Bonferroni/Benjamini-Hochberg [Frequentist Only]**

Configures multiple-comparisons corrections - either controlling the false positive rate or false discovery rate. Refer to the more detailed documentation for [Bonferroni](/stats-engine/methodologies/bonferroni-correction.md) and [Benjamini-Hochberg](/stats-engine/methodologies/benjamini–hochberg-procedure).

**Default Confidence Interval/Chance to Beat Threshold**

The confidence level used for this experiment. By default this is 95%, which is a strongly recommended default and industry standard. However, depending on the risk profile of the experiment and the risk tolerance of the experimenter, it might make sense to use a stricter or less strict setting in some cases.

**Use Informative Priors [Bayesian Only]**

For bayesian experiments, whether to use informed priors in analysis, and the configuration for them.

**Turbo Mode**

Whether to use [Turbo Mode](./turbo.md) to run experiment reloads more quickly.

**Filter Exposures by Qualifying Event**

This setting allows filtering exposures to experimental units that did (or did not) trigger a secondary event beyond exposure. This is very useful for analysis-only experiments on web experimentation platforms that over-expose heavily. Generally for end-to-end experiments we recommend using statsig to expose only at the point of intervention.

This setting has a few inputs:

- A qualifying event, which is joined to exposures to understand if users triggered an event
- _Exclude Matching Units_ - if toggled, units that triggered this event will be _dropped from the analysis_. If unchecked, the analysis will be filtered to units that triggered the event.
- _Use qualifying event timestamp for first exposures_ if checked, units' exposure timestamp will be replaced with the qualifying event's timestamp. This is useful for small cohort windows - e.g. wanting to measure if something happened within 10 minutes of the intervention. If the intervention occurred several minutes after the original exposure event, it can be helpful to use the actual time that the user saw the intervention
- _Filter events by time window_ only consider qualifying events for the inclusion/exclusion filters which occurred within a certain time from the exposure. This is useful if a user may come back and re-trigger the qualifying event when it's no longer relevant to the exposure.

**Filter Assignment Source**

This setting controls additional filters to be applied to the exposure data for this experiment. This can be useful to filter out bad dates with data that is known to be biased or non-representative, or to filter to a specific subset of interest for the scorecard results.

**Default Rollup Window**

Statsig calculates results across multiple rollups. Cumulative is almost always the correct choice for this setting, as it maximizes statistical power and the other views can be easily switched to in the scorecard.

# Explore (Custom) Query Settings

Explore queries enable drilldown, filtering, grouping, and more advanced ways to cut metric data by user and metric properties. These are a way to to deeply understand experiment results. On Statsig, explore queries run with the same statistics as the scorecard; with no filters or other settings, results should match the scorecard results.

## Metrics

Pick the metrics to run the explore/drilldown analysis on - this can include tags and local metrics.

## Group By

This setting is the bread and butter of explore/custom queries and allows drilldowns into user segments. This is used to understand differentiate performance and can be combined with [differential impact detection](/experiments-plus/differential-impact-detection) to deeply understand experiment results beyond topline averages.

By default only the top 10 dimension levels with over 100 units per segment are shown in results. The rest are grouped into an OTHER category. This is to prevent aggravated false positive rates and keep statistical analysis rigorous; reach out in slack if this needs adjustment.

## Filter

Filters can be used to include/exclude certain cohorts of units in an explore analysis by specifying the property and a filter-set for it.

## Time Range for Metric Data

This setting filters metric data to a certain date period; e.g., seeing the results for all users on the 3 days from April 10 to April 12. This can be useful to understand blips in data, get a recent cohort if results have changed dramatically, or generally run drill-down analyses.

## Filter by Exposure Date

In some cases it is useful to filter to units that entered the experiment on a certain date, or filter those out (e.g. units exposed on Christmas may behave oddly). This option allows users to specify filters based on user exposure date and remove them from analysis.

By switching the mode to Days Since First Exposure, users can also drill down into each cohort's behavior during a certain window post-exposure. This is a great way to understand behaviors observed in the days-since-first-exposure timeline view.

## Scheduling

After running a query, it can be scheduled. This query will be run daily after any scheduled pulse load to update the results. Scheduled queries can also be put into the experiment Summary page as part of the experiment writeup and downloadable summary.

## Interaction Effect Detection

Explore queries can be used to trigger [interaction effect detection](/experiments-plus/interaction-detection) analyses to understand if two experiments are interacting in a synergistic or destructive fashion.
