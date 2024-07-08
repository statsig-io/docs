---
title: Statistics
slug: /statsig-warehouse-native/features/statistics
sidebar_label: Statistics
---

Statsig's statistics engine is designed to deliver the best analysis of experiment results in the market. We have four core values around our Stats Engine: Transparency, Trust, Flexibility, and Power

Details of the Pulse Statistics Engine are in the pages below and offers a comprehensive view into how results are calculated.

## Transparency

All of Statsig's methodology is documented, and the analysis run is totally visible to you in Warehouse Native.

Statsig gives you the tools, data, and queries that you need to reproduce the results you see in console, with no black boxes. Most enterprise data science teams have gone through the exercise of hand-validating results as part of their evaluation process.

How this manifests is:

- Console-based access to the SQL Statsig runs; not only do you have access to the tables and queries on your warehouse, but Statsig will surface SQL snippets in console any time it runs a query so you can be completely sure if what's being calculated
- Transparency around costs. Most customers can run pulse analyses for pennies, but Statsig clearly surfaces the run time and utilization of resources to help you manage your warehouse bill for experimentation
- Support: Statsig has best-in-class support, with access to our data science team for open discussion of methodology, approaches, and collaborative development of new features

## Trust

Experiments drive important business decisions, and it's critical that you can trust the analysis and statistics being run. Statsig has a rigorous evaluation process for its methodologies, including peer review, simulations, and publishing the thought process behind statistical designs.

This means that you can trust Statsig's results being accurate and reliable as they help to guide your decisions.

How this manifests is:

- Detailed blog posts on the rationale behind decisions in new features
- Documentation of methodologies in blogs, and references to prior art referenced
- A full suite of diagnostic health checks on experiment results to warn you when statistical assumptions, or data quality, have been compromised

## Flexibility

Experimentation is not a one-size-fits-all tool. Depending on your industry, philosophy, or even the setup of a specific experiment, Statsig lets you configure your analysis to suite your needs, offering:

- Standard T-Tests
- Sequential Testing
- Bayesian Tests
- Switchback Tests
- Multi-armed bandits

Additionally, Statsig offers many options around tools to control for multiple comparisons, outliers, and regression adjustment.

## Power

Effective experimentation relies on having trustworthy results in a short amount of time. Tools to reduce experiment run time and increase accuracy are of paramount importance, and Statsig has invested heavily into bringing the highest degree of accuracy and power available - meaning your results will be faster and more reliable.

Some examples of features focused on the power of Statsig's stats engine are:

- [CUPED](https://www.statsig.com/blog/cuped), which can significantly reduce experiment run-times and account for pre-experiment bias
- [Stratified Sampling](experiments-plus/stratified-sampling), which makes experiment results much more accurate and consistent, meaning you can trust the effects you see
