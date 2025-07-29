---
title: Local Metrics 
sidebar_label: Local Metrics 
slug: /metrics/local-metrics
keywords:
  - owner:shubham
last_update:
  date: 2025-07-23
---

# Local Metrics

## Overview 
Local Metrics are metrics that are scoped to an individual config, i.e. a specific experiment or gate. They are created in the context of this config with the goal of being able to capture how that metric trends in the context of that config, without adding that new metric to the Project-wide Metrics Catalog forever more. 

## Creating a Local Metric 
You can create a Local Metric from two places within your config- 
1. **Setup**- As you're setting up your gate or experiment and adding Primary/ Secondary/ Monitoring metrics, you may find that you want to add a metric that doesn't yet exist to your Scorecard. In this scenario, you can simply tap, **+ Create New Local Metric** to enter into the Local Metric creation flow.
![Screen Shot 2024-03-21 at 11 06 57 AM](https://github.com/statsig-io/docs/assets/101903926/2a249684-56a9-4c63-b2b2-7870efd89b76)
2. **Pulse**- If you've already started your gate/ experiment rollout, it's not too late to create and add a new Local Metric to your scorecard. From your Scorecard in Pulse, tap **Edit Primary Metrics** (or Secondary/ Monitoring metrics depending on where you want to add your new Local Metric), and then **+ Create New Local Metric**. 
![Screen Shot 2024-03-21 at 11 10 15 AM](https://github.com/statsig-io/docs/assets/101903926/b718c3b7-9696-4af0-bbc5-48fef3cfa1d3)

Entering into the Local Metric creation flow from either entry point will kick off the Local Metric creation wizard. If you're a heavy user of Metrics Explorer, this will feel quite familiar. The wizard allows you to select event(s), add filters, and preview the output values. 

![Screen Shot 2024-03-21 at 11 19 22 AM](https://github.com/statsig-io/docs/assets/101903926/452d9efe-2706-4d47-aee6-48c8f6288e8f)

When you are ready to save your Local Metric, you can choose to save it to either the Primary/ Secondary Metrics section of your Scorecard (for experiments), or the Monitoring Metrics section of your feature gate rollout.

![Screen Shot 2024-03-21 at 11 20 44 AM](https://github.com/statsig-io/docs/assets/101903926/50bc5742-2f2a-4147-9cb3-70658d6391da)
![Screen Shot 2024-03-21 at 11 20 50 AM](https://github.com/statsig-io/docs/assets/101903926/ae3932df-f81b-4fed-9d23-b2b196ac83bc)

Once you've created a Local Metric, you can tap on the Local Metric in your Scorecard to view its configuration in the Local Metric wizard. 

## Types of Local Metrics
The types of Local Metrics you can create are very similar to Custom Metrics (accessible via the Metrics Tab), with a few exceptions.

Here are the supported types of Local Metrics: 

| Metric Type | Description | Examples |
|-------------|-----------------------|---------|
| Event Count | **Total count of events** filtered by the _value_ and _metadata_ properties of an event type | **Add to Cart** event filtered by category type |
| User Count |  **Number of unique users** that trigger events filtered by the _value_ and _metadata_ of an event type| **Active Users** based on their views of a product category |
| Aggregation       | **Sum or Average** of the _value_ of an event type  | **Total Revenue** |
| Ratio  | **Rates** (e.g. cart conversion rate, purchase rate),  **Normalized Values** (e.g. sessions per user, items per cart) | **Cart Conversion Rate**, **Sessions per User** |

The one type of Custom Metric that you cannot (yet) create as a Local Metric are funnels. 

## Lifecycle of Local Metrics 
By default, Local Metrics are scoped to the config they're created in the context of, and will only live for the lifecycle of that config. This means once you make a decision on your experiment or launch your feature gate, your Local Metric will no longer be computed. 

Local Metrics do NOT show up in your Project Metrics Catalog, and are not searchable in top-line search. 

While you can't convert a Local Metric into a "global" metric (i.e. a Metrics Catalog metric) today, this conversion flow is coming soon. In the meantime, you can recreate the same metric definition as a Custom Metric in the Metrics Catalog if you want this metric to live on in a more global capacity outside the scope of your gate/ experiment. 
