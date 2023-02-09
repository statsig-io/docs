---
title: Using Statsig for Experiment Analysis (Only)
sidebar_label: Using Statsig for Experiment Analysis (Only)
slug: /guides/Experiment-Analysis-Point-Solution
---


# Using Statsig for experiment analysis only


While Statsig as an end-to-end (E2E) platform can be quite powerful, we understand that sometimes, you already have an assignment tool you’re feeling invested in and want to be able to simply plug and play a point solution to analyze your experiment results - Statsig’s  powerful stats engine and visualization is available for you in that case, too!

### I just want a peek at your experiment analysis capabilities

**Pulse** is Statsig's powerful visualization that shows an experiment's impact across a wide range of metrics. It allows you to quickly assess which metrics you need to pay attention to, while finding trends across metrics, allowing you to validate existing hypotheses or devise alternative explanations. You can check out this [article](https://docs.statsig.com/pulse/read-pulse) to learn more. 

Or better yet, we encourage you to play with our [demo project](https://console.statsig.com/demo?ref=demo_redirect) to see Pulse in action! In this demo project, we've pre-populated a few experiments for you to interact with, so you can get a better feel how your experiment results would look on Statsig.

### I want to plug in an existing experiment I’ve run/am running/will run

This is how data will flow from one platform to another in this scenario:

![Flow](https://user-images.githubusercontent.com/120431069/217403623-954b8a08-e38d-4beb-8d03-4112ab60a79c.png)

First, [create a free account on Statsig](https://www.statsig.com/signup), then follow these 3 easy steps to use Statsig to analyze your experiment results - 

1. **Connect to your data source and import assignment data to Statsig**
Statsig is able to import your assignment data from a variety of sources:
   - If your assignment data is stored in your data warehouse (most common): follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/introduction)
   - If your assignment data is being piped to either Segment or mParticle: reach out to us on slack for support

2. **Generate or import the metrics you’re tracking against**
These are metrics that you're hoping to impact with the metric you're setting up (step #3 below). Without metrics, your experiment results won't really be useful, so we highly recommend you to complete this step before setting up your experiment. There are two ways you can get your metrics into Statsig -
   - Generate events using Statsig SDK
   - Import custom events or precomputed metrics from your data source
       - from your data warehouse: follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/data_mapping)
       - from other integrations: follow this [guide](https://docs.statsig.com/integrations/introduction)

3. **Set up your experiment, using assignment data that was imported in step #1**
    
    Creating an experiment follows the same exact process as Statsig as a E2E platform, and we make this process even more convenient for you by pulling in required fields from your imported assignment data. Follow the [guide](https://docs.statsig.com/experiments-plus/create-new) here.
   

And now, let Statsig do our magic! After 24 hours, your pulse will populate, and you can follow this [guide](https://docs.statsig.com/pulse) to analyze the results you see.
