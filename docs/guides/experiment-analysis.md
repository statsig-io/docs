---
title: Using Statsig for Experiment Analysis (Only)
sidebar_label: Analyze External Experiments
slug: /guides/experiment-analysis
---


# Using Statsig for experiment analysis only


While Statsig as an end-to-end (E2E) platform can be quite powerful, we understand that sometimes, you already have an assignment tool you’re feeling invested in and want to be able to simply plug and play a point solution to analyze your experiment results - Statsig’s  powerful stats engine and visualization is available for you in that case, too!

**Pulse** is Statsig's powerful visualization that shows an experiment's impact across a wide range of metrics. It allows you to quickly assess which metrics you need to pay attention to, while finding trends across metrics, allowing you to validate existing hypotheses or devise alternative explanations. You can check out this [article](https://docs.statsig.com/pulse/read-pulse) to learn more. 

You can also play with our [demo project](https://console.statsig.com/demo?ref=demo_redirect) to see Pulse in action! In this demo project, we've pre-populated a few experiments for you to interact with, so you can get a better feel how your experiment results would look on Statsig.

### How to load your experiment on Statsig

This is how data will flow from one platform to another in this scenario:

![Flow](https://user-images.githubusercontent.com/120431069/217403623-954b8a08-e38d-4beb-8d03-4112ab60a79c.png)

First, [create a free account on Statsig](https://www.statsig.com/signup), then follow these 3 easy steps to use Statsig to analyze your experiment results - 

1. **Connect to your data source and import assignment data to Statsig**
Statsig is able to import your exposure events in one of the following ways - 
- (most common) Data Warehouse Ingestion: Follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/introduction)
- API: Follow this [guide](https://docs.statsig.com/http-api#log-exposure-event)
- Segment: Follow [Segment’s instructions](https://segment.com/docs/connections/destinations/catalog/statsig/) to set up Statsig as a **destination** from Segment for the source of your exposure events
- mParticle: Follow [mParticle’s instructions](https://docs.mparticle.com/integrations/statsig/event/) to set up the Statsig integration

If you use LaunchDarkly for assignment, here are some resources to help you prepare your data for ingestion - 
  - Warehouse Ingestion: You can also also pipe your LaunchDarkly data into a data warehouse via [Amazon Kinesis](https://docs.launchdarkly.com/home/data-export/kinesis), [Azure Event Hubs](https://docs.launchdarkly.com/home/data-export/event-hub), or [Google Cloud Pub/Sub](https://docs.launchdarkly.com/home/data-export/google-pubsub), and ingest that into Statsig via our [Data Warehouse Ingestion](https://docs.statsig.com/data-warehouse-ingestion/introduction) feature.
  - Segment: Follow [Segment’s instructions](https://segment.com/docs/connections/sources/catalog/cloud-apps/launchdarkly/) to set up LaunchDarkly as an **event source** to Segment.
  - mParticle: Follow [LaunchDarkly’s instructions](https://docs.launchdarkly.com/home/data-export/mparticle) to set up mParticle as a Data Export destination.

2. **Generate or import the metrics you’re tracking against**
These are metrics that you're hoping to impact with the experiment you're setting up (step #3 below). Without metrics, your experiment results will look pretty blank, so we highly recommend you to complete this step before setting up your experiment. There are two ways you can get your metrics into Statsig:
- Generate events using Statsig SDK
- Import custom events or precomputed metrics from your data source
  - from your data warehouse: follow this [guide](https://docs.statsig.com/data-warehouse-ingestion/data_mapping)
  - from other integrations: follow this [guide](https://docs.statsig.com/integrations/introduction)

3. **Set up your experiment, using assignment data that was imported in step #1**
Once you've connected to your data source for exposure events, Statsig automatically recognizes that your experiments will be utilizing imported exposure events. During experiment setup, you will now be able to select a Foreign Experiment ID and Group ID(s) that have been extracted from your exposure events data.
![Flow](https://user-images.githubusercontent.com/120431069/223882436-ddb8fe46-93d1-4a1b-ab82-8ca75c8eb291.png)
![group](https://user-images.githubusercontent.com/120431069/223883047-79e548f6-3b04-4aeb-89f5-798e6ad5e228.png)

Once your import data have landed, you'll see checks and log stream populate under Diagnostics so you can make sure your experiment was setup correctly. 
![image](https://user-images.githubusercontent.com/120431069/223885006-7b86e146-393e-4ec2-a3e7-f06d8106c6d5.png)

   
And now, let Statsig do our magic! Just wait for Pulse Results to be computed (computed daily), and you can follow this [guide](https://docs.statsig.com/pulse) to start analyzing your results!
