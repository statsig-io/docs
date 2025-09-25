---
title: Get Started with Geotests
sidebar_label: Getting Started
slug: /experiments-plus/geotests-setup
keywords:
  - owner:makris
last_update:
  date: 2025-09-18
---

# Get Started with Geotests

This guide walks you through creating a Geotest experiment using Statsig. The steps include:

1. Define your Geo Types
2. Configure your Metric Source
3. Create and Configure
4. Evaluate Design Options
5. Run Analysis

## Define your Geo Types

First decide on one more geo types relevant to your business. Some of the most common are Postal Codes and DMAs (Designated Market Areas), but Statsig allows you to define any arbitrary geo type you'd like.

![Geo types configuration interface](/img/geotests/geo_types_settings.png)

## Configure your Metric Source

Assuming you've already added a [metric source](/statsig-warehouse-native/configuration/metric-sources/) to Statsig, you can next indicate which column(s) represent the geo type(s) you've created.

![Geo column mapping configuration screen](/img/geotests/geo_column_mapping.png)

## Create and Configure

- Navigate to your Experiments page.
- Click the + Create button.
- In the modal, select Analyze to analyze existing experiment data in your warehouse.

![Experiment creation modal with analyze option](/img/geotests/CreateXP.png)

- Enter a name and description for your experiment.
- Choose Geotest as the experiment type from the dropdown. Fill in the remaining info as you usually would

<img src="/img/geotests/SetType.png" alt="Geotest experiment type selection dropdown" width="500px" />

:::note
If you are unable to create a Geotest at this step, it might be because your organization requires experiments to use a Template. If so, you need to contact your project admin and ask for a Geotest Template or bypass the policy.
:::

In the Setup tab:

- Define your hypothesis.
- Set the Geo Type (e.g., country_id) from one of the types you've defined in your project and metric sources
- Choose your Primary Metrics.

:::important Metric Types
GeoTest metrics are currently limited to SUM, COUNT, and COUNT_DISTINCT types. This limitation is driven by the inference techniques involved in synthetic control methodologies.
:::

![Geotest experiment setup configuration screen](/img/geotests/SetupXP.png)

Configure:

- Expected Treatment Start/End Dates
- Desired Effect Size % (this is the MDE you're hoping to measure; smaller MDEs will make finding a valid design harder)
- Type of Test: 1-sided or 2-sided
- Alpha level (desired type I error rate, inverse of Significance)
- Optionally enable Budgeting
- Additional advanced modeling parameters for users familiar with [Geolift's Advanced API](https://github.com/facebookincubator/GeoLift/blob/main/R/pre_test_power.R)

![Experiment configuration settings interface](/img/geotests/XPConfigs.png)

## Generate Design Options

When you're happy with your initial settings, click "Use Experiment Designer" to begin to design process.

![Experiment designer launch button](/img/geotests/StartDesigner.png)

The Experiment Designer automates the process of evaluating potential splits of geos. Creating a new design set involves 3 steps:

1. **Define your targeting**
2. **Set any Inclusion or Exclusion overrides**
3. **Define your date range**

![Geographic limitations configuration interface](/img/geotests/CreateDesign.png)

### Define Targeting

Targeting allows you to define the set of geos potentially eligible to be included in your experiment. By default it pulls the unique set of geo types from your metric source from the last 90 days. You can add additional custom filters that help you filter your geos down, based on columns in your metric source. For example, you can filter geos to those in a certain region or by transactions that occurred in a certain language.

![Image](/img/geotests/targeting.png)

You can also manually specify a set of geos yourself. The geo id types must match those in your metric source exactly.

### Set Inclusion or Exclusion Overrides

After defining your targeting set, you can manually overwrite any of these geos into treatment or control groups as desired.

![Image](/img/geotests/targetingoverwrites.png)

For example, when testing if a new marketing campaign is effective, you might know that you want include the city of Austin because a contract has already been signed. And you might know that you do not want to launch in New York, Los Angeles, or Washington D.C. because of local regulations. You can specify these constraints on the designer and it will ensure that all design options considered will conform to these rules.

### Define Date Range

Lastly, you must define the data range of your design dataset. This date range defines what data gets pulled as historical baseline to train a synthetic control model. In general, a good rule of thump is that you design data duration should be at least 4x the expected duration of your treatment period in order to achieve good fits and maximize sensitivity and power of your experiments.

### Advanced Options

- **Rolling Lookback Windows:** Control how many iterative simulations should be done to evaluate power. For instance, a value equal to 5 would simulate power for the last five possible tests in the date range. Corresponds to `lookback_window` in the GeoLift API.

- **Dynamic Time Warping:** Control how much the synthetic control model depends on auto-correlations in the metric vs. correlations between different geos on the same days. A value of 1 focuses exclusively on the metric while a value of 0 (default) relies on correlations only. Corresponds to `dtw` in the GeoLift API.

- **Control Cell Size Requirements:** Sets limits on the share of primary metric value from geos in any considered control group. If not set, all design options will be analyzed regardless of their size. For example, if designing on a Revenue metric, a control size range of [50%, 90%] would mean that only design options where 50% to 90% of revenue was in the designated control geos. Corresponds to `holdout` in the GeoLift API.

## Evaluate Design Options

Once a Design Option Set has been created (usually takes a few minutes), it will be shown in your Experiment Designs tab. All design option sets generated are shown here, enabling you to look through prior design iterations as needed.

![Experiment designer options display](/img/geotests/DesignerOptions.png)

Click into a completed design set (e.g. “Design Set 3”).

- Review the ranked recommendations for your best design options
- Compare MDE, Power, Cost and Control/Test Allocation
- Click View Cell Details to expand and see specific geo assignments
- See additional model performance details
- Select your desired design using the radio button, and clicking **Save Design to Experiment**.

![Design option selection interface](/img/geotests/DesignOption.png)

## Run Analysis

![Geotest analysis results dashboard](/img/geotests/AnalysisResults.png)
