---
title: Using Statsig for Experiment Analysis (Only)
sidebar_label: Using Statsig for Experiment Analysis (Only)
slug: /guides/Experiment-Analysis-Point-Solution
---


# Using Statsig for experiment analysis only


While Statsig as an end-to-end (E2E) platform can be quite powerful, we understand that sometimes, you already have an assignment tool you’re feeling invested in and want to be able to simply plug and play a point solution to analyze your experiment results - Statsig’s  powerful stats engine and visualization is available for you in that case, too!

### I just want a peek at your experiment analysis capabilities

**Pulse** is Statsig's powerful visualization that shows an experiment's impact across a wide range of metrics. It allows you to quickly assess which metrics you need to pay attention to, while finding trends across metrics, allowing you to validate existing hypotheses or devise alternative explanations. You can check out this [article](https://docs.statsig.com/pulse/read-pulse) to learn more. 

Or better yet, we encourage you to play with our [demo project](https://console.statsig.com/demo?ref=demo_redirect) to see Pulse in action!

### I want to plug in an existing experiment I’ve run/am running/will run

This is how data will flow from one platform to another in this scenario:

![Flow](https://user-images.githubusercontent.com/120431069/217403623-954b8a08-e38d-4beb-8d03-4112ab60a79c.png)

First, [create a free account on Statsig](https://www.statsig.com/signup), then follow these 3 easy steps to use Statsig to analyze your experiment results - 

1. **Connect to your data source and import assignment data to Statsig**
    1. If your assignment data is stored in your data warehouse: follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/introduction)
    2. If your assignment data is being piped to either Segment or mParticle: reach out to us on slack for support
2. **Generate or import the metrics you’re tracking against**

These metrics will be included in your experiment (step #3 below) so that you can actually see useful results that are ready to be analyzed. There are two ways for you to choose from to get the metrics you need -
    1. Generate events using Statsig SDK
    2. Import custom events or precomputed metrics from your data source
        - from your data warehouse: follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/data_mapping)
        - from other integrations: follow this [guide](https://docs.statsig.com/integrations/introduction)
3. **Set up your experiment, using assignment data that was imported in step #1**
    
    Creating an experiment follows the same exact process as Statsig as a E2E platform, and we make this process even more convenient for you by pulling in required fields from your imported assignment data. Follow the [guide](https://docs.statsig.com/experiments-plus/create-new) here.
   

And now, let Statsig do our magic! After 24 hours, your pulse will populate, and you can follow this [guide](https://docs.statsig.com/pulse) to analyze the results you see.
