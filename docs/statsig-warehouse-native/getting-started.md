---
title: Getting Started with Statsig Warehouse Native
slug: /statsig-warehouse-native/getting-started
sidebar_label: Getting Started
description: Set up your first Statsig Warehouse Native project
---

In this guide, you'll set up an experiment and load results in Statsig Warehouse Native.

## Prerequisites

In order to run an experiment in Statsig Warehouse Native, you'll need:

- At least one data source in your warehouse which tracks experiment assignment events. This needs a user identifier, a timestamp, and assignment data (experiment_id, group_id)
- At least one data source in your warehouse which can serve as a source for metric data. This could be any kind of data with a user identifier, a timestamp, and a value you want to turn into a metric.

## Step 1 - Connect Your Data

Use the landing page guide or go to your **Project Settings** (the gear in the top right menu). Then, click on **Data Connection**.

![Data Connection Navigation](https://user-images.githubusercontent.com/102695539/237239163-1d528c2e-94d5-4656-addd-400c9e3e1925.png)

This connection is very similar to the setups for warehouse ingestion. Refer to the docs for vendors:

- [Bigquery](../data-warehouse-ingestion/bigquery.mdx)
- [Snowflake](../data-warehouse-ingestion/snowflake.mdx)

One difference for Statsig Warehouse Native is that you should create an isolated Dataset or Schema that Statsig's service user has **write access** to. We will use this to save intermediate results, making queries more performant and giving you access to hour experimential data.

_Note - while you're here, you can go to **Basic Settings** and add any Custom ID Types you want to use for experimentation._

## Step 2 - Create a Metric Source

Next, click into **Metrics** on the left navbar and go to the **Metric Sources**. Click **Create** to create a new Metric source. Give your new Metric Source a relevant name and description.

![Metric Source Navigation](https://user-images.githubusercontent.com/102695539/237239161-9e7fd9ac-c800-4e64-948f-296648357987.png)

When defining a Metric Source, you'll give us a SQL query that functions as a view into your data. For example, a Metric source could represent data for a single event:

`SELECT * FROM my_events_table WHERE event_name = 'myEvent'`

or an entire dataset:

`SELECT * FROM my_metrics_table`

![SQL Pane for Metric Sources](https://user-images.githubusercontent.com/102695539/237239158-5ecc01ef-1f58-4e0a-a40b-a54340da16ef.png)

After running your SQL to pull a small sample set, you'll be asked to map specific columns that we require to calculate results. You can also include extra columns for later use in breakdowns and filtering when you create Metrics.

Expand the sample set we pull to help you map correctly and validate that the data looks how you expect it to.

![Mapping Metric Source Columns](https://user-images.githubusercontent.com/102695539/237241710-4c2c5875-1c56-4e17-887a-a329a835ccbd.png)

Once that's done, save your metric source.

## Step 3 - Create Metrics

Once you have a **Metric Source** set up, creating metrics is very similar to the usual Statsig flow. Go back to the Metrics view and click **Create** in the **Metrics** tab.

![Metrics Tab Nav](https://user-images.githubusercontent.com/102695539/237239161-9e7fd9ac-c800-4e64-948f-296648357987.png)

To create a metric, you pick the Metric Source you're deriving the metric from and specify some settings:

![Metric Creation Flow](https://user-images.githubusercontent.com/102695539/237241707-54306e23-5f28-434a-8d53-8e3d42d5587a.png)

**Metric Type**

Metric types specify the aggregations and available settings for your experiment metric. We support:

- Counts: basic counts of events with filters, such as click events
- Sum: sums of values from events, such as revenue or aggregating over pre-aggregated metric fields (e.g. daily_clicks in a user-day level source).
- Mean: the mean value of non-null value fields
- User Count: the number of users who had records in your Metric Source, calculated as a daily average, an overall participation rate, or a participation rate in some window based on their exposure
- Ratio: the population-level ratio of two metrics you define

**Metadata Columns**

For most metric types, you can specify breakdown columns which will automatically break down a result into common elements in metadata fields.

For example, you might break down a "click" metric by which "page_name" the click happened on. When you calculate experiment results, we'll calculate deltas for the top pages alongside the topline change.

**Filters**

Filters are a powerful way to flexibly reuse metric sources. Your Data Team can provide cleaned and organized views into data, and anyone can use the filtering UI to set up specific custom metrrics as needed

Once a metric is set up, you can reload your sampled source with filters applied to make sure things look good. Save your metric, and you're good to go!

![Filtered Sample](https://user-images.githubusercontent.com/102695539/237241706-3b8ddbba-5d19-48fe-bd19-1bd04ee98c35.png)

## Step 4 - Create an Assignment Source

An **Assignment Source** is very similar to a Metric Source. You can create one by going to **Experiments** in the left navbar and clicking on the **Assignment Sources Tab**, and then **Create**.

![Assignment Source Nav](https://user-images.githubusercontent.com/102695539/237241704-f2dc5c83-a0c9-4cf2-a354-2904f6612c47.png)

Here, you'll specify a query that provides a view into your exposure assignment data. You'll need to provide a timestamp, experiment ID, group ID, and at least one unit identifier.

![Assignment Source Query](https://user-images.githubusercontent.com/102695539/237241702-d877cafa-23f0-4964-a50c-813e93cb3add.png)
![Assignment Source Mapping](https://user-images.githubusercontent.com/102695539/237241701-5f95ff7f-2ae3-4a31-85aa-aa9ec111770d.png)

## Step 5 - Create an Experiment

With **Metrics** and an **Assignment Source**, creating an experiment is easy. Go back to the experiments tab and create a new experiment. You'll see a pop up where you'll enter a name, your core hypothesis, and relevant tags. You can sync your Assignment Sources to pull any new experiments.

![Experiment Creation Flow](https://user-images.githubusercontent.com/102695539/237241700-c100522e-c3e7-4ba7-b065-9af370aa23eb.png)

In the experiment config, you can configure which metrics you want to measure and manage the groups you want to analyze. We'll automatically detect groups and infer the experimental split, but in some cases you may need to correct the split so we can properly evaluate Sample Ratio Mismatch issues.

![Group Setup](https://user-images.githubusercontent.com/102695539/237241689-7838cff7-65e6-4055-9674-f8d82d0a1398.png)

Once it's set up, click Analyze to define the experiment timeline. After this, your results will start calculating!

## Step 6 - Analyze Results

-- todo working image here
