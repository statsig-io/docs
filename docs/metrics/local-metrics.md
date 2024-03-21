---
title: Local Metrics 
sidebar_label: Local Metrics 
slug: /metrics/local-metrics
---

# Local Metrics

## Overview 
Local Metrics are metrics that are scoped to an individual config, i.e. a specific experiment or gate. They are created in the context of this config with the goal of being able to measure a specific metric value in the context of that config, without adding that new metric to the Project-wide Metrics Catalog on an ongoing basis. 

## Creating a Local Metric 
You can create a Local Metric from two places within your config- 
1. **Setup**- As you're setting up your gate or experiment and adding Primary/ Secondary/ Monitoring metrics, you may find that you want to add a metric that doesn't yet exist to your Scorecard. In this scenario, you can simply tap, **+ Create New Local Metric** to enter into the Local Metric creation flow.
![Screen Shot 2024-03-21 at 11 06 57 AM](https://github.com/statsig-io/docs/assets/101903926/2a249684-56a9-4c63-b2b2-7870efd89b76)
2. **Scorecard/ Monitoring Metrics**- If you've already started your gate/ experiment rollout, it's not too late to create and add a new Local Metric to your scorecard. From your Scorecard, tap **Edit Primary Metrics** (or Secondary/ Monitoring metrics depending on where you want to add your new Local Metric), and then **+ Create New Local Metric**. 
![Screen Shot 2024-03-21 at 11 10 15 AM](https://github.com/statsig-io/docs/assets/101903926/b718c3b7-9696-4af0-bbc5-48fef3cfa1d3)

Entering into the Local Metric creation flow from either entry point will kick off the Local Metric creation wizard. If you're a heavy user of Metrics Explorer, this will feel quite familiar. The wizard allows you to select event(s), add filters, and preview the output values. 


## Types of Local Metrics
The types of Local Metrics you can create are very similar to Custom Metrics (accessible via the Metrics Tab), with a few exceptions. 



## Lifecycle of Local Metrics 
