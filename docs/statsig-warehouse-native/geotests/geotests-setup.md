---
title: Get Started with Geotests
sidebar_label: Getting Started
slug: /experiments-plus/geotests-setup
keywords:
  - owner:makris
last_update:
  date: 2025-04-16
---

# Get Started with Geotests

This guide walks you through creating a Geotest experiment using Statsig. The steps include:
1. Create and Configure
2. Evaluate Design Options
3. Run Analysis

:::tip

Geotests is currently in Alpha release. Statsig is actively interested in working with customers to understand your use-case and make improvements. Please reach out if you're interested in using Geotesting capabilities.

:::

## Create and Configure

- Navigate to your Experiments page.
- Click the + Create button.
- In the modal, select Analyze to analyze existing experiment data in your warehouse.

![Image](/img/geotests/CreateXP.png)

- Enter a name and description for your experiment.
- Choose Geotest as the experiment type from the dropdown. Note: You do not need to specify an experiment source.

![Image](/img/geotests/SetType.png)

In the Setup tab:

- Define your hypothesis (optional).
- Set the Geo Type (e.g., country_id).
- Choose your Primary Metrics.

![Image](/img/geotests/SetupXP.png)

Configure:

- Treatment Start/End Dates
- Desired Effect Size % (this is the MDE you're hoping to measure; smaller MDEs will make finding a valid design harder)
- Type of Test: 1-sided or 2-sided (click on your metric's name to see these options)
- Alpha level (desired type I error rate, inverse of Confidence)
- Optionally enable Budgeting or Holdouts

![Image](/img/geotests/XPConfigs.png)

When you're happy with your initial settings, click "Use Experiment Designer" to begin to design process.

![Image](/img/geotests/StartDesigner.png)

Here you can control:
- Allowed Geo IDS: Apply a global filter for any geos allowed for control or treatment. Leave blank to use all geos found in your data source.
- (Test) Inclusion List: Force some geos to be in your treatment cell. Leave blank to allow GeoLift to search for the most optimal set of geos without limits.
- (Test) Exclusion List: Block some geos from being in your control cell. Leave blank to allow GeoLift to search for the most optimal set of geos without limits.

![Image](/img/geotests/LimitGeos.png)

When ready, click "Run Analysis" to generate a new Design Option Set based on your desired rules.

## Evaluate Design Options

Once a Design Option Set has been created (usually takes a few minutes), it will be shown in your Experiment Designer tab. All design option sets generated are shown here, enabling you to look through prior design iterations as needed.

![Image](/img/geotests/DesignerOptions.png)

Click into a completed design set (e.g. “Design Set 3”).
- Compare Power, Cost, and Control/Test Allocation
- Click View Cell Details to expand and see geo assignments
- Select your desired design using the radio button, and clicking **Save Design to Experiment**.

![Image](/img/geotests/DesignOption.png)

## Run Analysis

![Image](/img/geotests/AnalysisResults.png)
