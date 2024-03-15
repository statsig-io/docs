---
title: Experiments
slug: /statsig-warehouse-native/guides/experiments
sidebar_label: Experiments
---

Setting up an experiment is a core flow in Statsig. In Warehouse Native, there's two modes to setting up an experiment. In one, you'll connect to existing assignment data from your warehouse. In the other, you'll configure the experiment in Statsig, use the Statsig SDK, and then analyze the resulting exposures in your warehouse.

This page goes through creating and configuring an experiment for analysis in Statsig.

## Creating An Experiment

To create an experiment, you can go to the experiments tab in your console and press the create button.

There's two types of experiments in Statsig Warehouse Native:

- Analyze: these are for 3rd-party or in-house exposure sources
- Assign & Analyze: these are Statsig-configured experiments. You can set up all of the configuration here, implement it through Statsig SDKs, and track results.

![image](https://github.com/statsig-io/docs/assets/31516123/30954be6-7c2e-48f4-8072-f196349adbc3)


Next, you'll give the experiment a name, specify your hypothesis, and pick the experiment from your exposure sources. You can sync sources
if your exposure isn't loaded in the dropdown.

You'll need to specify the control group as well as the ID type the experiment is using here.

![Configure Experiment](https://user-images.githubusercontent.com/102695539/264101227-e3a1e76a-6a3b-4089-87be-5a4b6e7dd662.png)

## Choose Metrics

You'll land in the setup page for the experiment. Here, you can further refine your hypothesis and add the Primary and Secondary metrics for your experiment.

- Primary metrics should be a short list (1-3) of metrics that specify your overall evaluation criteria for the experiment. Generally this is one target metric, and a first-mile metric (e.g. revenue, and checkout clicks)
- Secondary metrics are guardrails and explanatory metrics. These are more observational in nature, and should be treated as less conclusive. Applying bonferroni corrections is a way to formalize this approach, though it can be overly conservative.

![Choose Metrics](https://user-images.githubusercontent.com/102695539/264101219-396f00f6-fbdc-4944-94c0-62354eaa2980.png)

## Choose Groups

Statsig infers the groups and group splits in your experiment, but you should check and correct the splits to make sure SRM checks can work as intended.

Here, you can also rename groups or delete irrelevant groups.

![Choose Groups](https://user-images.githubusercontent.com/102695539/264101203-d9d4feef-653a-45ae-b6f1-f6e888e2762d.png)

## Advanced Settings

Statsig has many settings you can configure in your experiment. Defaults for these can be set at the org level as well. These include:

- Frequentist vs. Bayesian Analysis
- Target duration of the experiment
- Whether or not to apply Sequential Testing adjustments
- Whether and how to apply bonferroni Correction
- Confidence Intervals
- Default rollup windows for result readouts (Cumulative, 1, 7, 14, or 28 days from the analysis date)

## Start The Experiment

With all this done, press Save and Analyze to start the experiment. You'll be prompted to finalize the dates, experiment status, and optionally set up a schedule to reload experiment results.

![Schedule](https://user-images.githubusercontent.com/102695539/264101192-1626481b-3c45-4622-b7c8-1e9638436a8d.png)

When you press load data, a Pulse analysis will start and you'll be taken to the results page.

## Data Freshness
For a Statsig-configured experiment where you're using the Statsig SDKs to generate exposures - the default  is that exposures are batched, deduplicated and written to your warehouse once a day. When you launch an experiment, it's helpful to be able to look at early metric deltas  (to detect crashes or catch an egregious bug). When Pulse is loaded soon after the experiment starts, we'll update exposures in your warehouse before computing Pulse results. This lets you see Pulse results as fresh as ~15m (assuming events and metrics come in at the same speed).

Under the covers, if the # of exposures on an experiment is < 1 million we perform a just-in-time update of exposures in your warehouse when Pulse is loaded.

Note : We only write to your warehouse exposure information that will be used for experiment analysis. We will not write exposures in pre-production environements or from overrides. 
