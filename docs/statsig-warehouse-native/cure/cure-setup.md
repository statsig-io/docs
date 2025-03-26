---
title: Get Started With CURE
sidebar_label: Getting Started
slug: /experiments-plus/cure-setup
keywords:
  - owner:craig
---

## Defaults

By default, CURE will run a univariate regression when enabled - the same as the [standard implementation of CUPED](https://www.exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf).

To add additional covariates

## Project Defaults

In project settings under Experimentation, specify default covariates for your company:

![Project Settings](/img/cure/project_setting.png)

Properties with an EPS name attached come from a property source and will always be included. Properties without an EPS come from an assignment source, and will be used if the column exists on the assignment source of a given experiment.

## Experiment Settings

Per-experiment, specify additional covariates or remove covariates specific to your analysis:

![Experiment Settings](/img/cure/experiment_setting.png)

## Metric:Metric

One tool our framework enables is using metric:metric covariates; for example, using units' pre-experiment clicks as a covariate for units' in-experiment revenue. We decided against using this for several reasons:

- Consistency. It should not be the case that adding a new metric to your analysis significantly alters the results of other metrics
- It's not necessary. If you have key metrics that function as covariates, we recommend **explicitly** providing these - for all metrics - as a covariate in an entity property source. This achieves the same result, without "black box" outputs coming from unknown metric covariances

Statsig has a strong opinion that throwing in arbitrary covariates based on an experiment's metric selection is a bad practice, and it is better to explicitly include key metric covariates as numerical covariates; please reach out in Slack if you would like to discuss!

## Preventing Adjustments

You can turn off CUPED in your pulse results, and can create a project-level setting to enforce this. This will still run CURE, however, which entails some amount of compute cost. To avoid running CURE, you can turn it off on a given metric by un-checking the CUPED option in the metric's setup page.

![Metric Settings](/img/cure/metric_setting.png)
