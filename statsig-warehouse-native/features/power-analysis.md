---
title: Power Analysis
slug: /statsig-warehouse-native/features/power-analysis
sidebar_label: Power Analysis
description: Determine your experiment duration with confidence
---

In general it is a good practice to establish a run-time for an experiment

- This aligns teams around timelines
- For fixed-horizon analysis, this establishes when it is valid to make a conclusion based off of the results

The way to do this is by establishing the size of impact you want to be able to consistently measure, if it exists (known as the "MDE" or minimum detectable effect) and run an analysis to determine how many samples - and time - you will need to achieve that MDE.

### Running a Power Analysis

To run a power analysis in Statsig, you need to provide 2 inputs:

- A population
  - This step is critical as most experiments will only reach a subset of users, and these users may have different behavior than the overall population
  - You can base the population on an experiment you already ran, or on a Qualifying Event
  - A qualifying event is an arbitrary set of historical user-timestamp pairs - for example, if you plan to expose on a button click, you could provide the
    users who clicked that button in the week before
- Metrics
  - Enter the metrics you plan to use as your evaluation criteria for your experiment. You can add multiple metrics, which can be a useful way to analyze
    which metrics will be more or less sensitive in your target population

![Power Analysis UI](https://github.com/statsig-io/docs/assets/102695539/563ee87d-e16a-4649-b50a-628e32acca34)

### Readout

Statsig will simulate an experiment based on your input, calculating population sizes and the relative variance based on historical behavior.

The power analysis readout will show you a week by week view of the experiment Stats you can expect to see.

In the settings section, you can specify

- The number of groups and group allocations you plan to have in your experiment
- The relative % of the target population you expect to allocate to this experiment
- Whether you want to analyze
  - The MDE per week given a fixed allocation
  - The allocation required to hit a target MDE

These will update your results based on the analysis that already ran
