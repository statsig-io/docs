---
title: Pipeline Overview
slug: /statsig-warehouse-native/pipeline-overview
sidebar_label: Pipeline Overview
description: Understand what we're running on your warehouse
---

This page is intended to give you a high level overview of the pipeline Statsig Warehouse Native will run on your warehouse.

## Main Steps

The main steps in the pipeline are:

- Identifying users' first exposures
- Annotating Metric Sources with exposure data
- Creating metric-user-day level staging data
- Running intermediate rollups for better performance
- Calculating group-level summary Statistics

![Pipeline View](https://user-images.githubusercontent.com/102695539/264113011-b0bdf1af-3ec6-4770-aabd-35f948ea842d.png)

## Types of DAGs

Statsig lets you run your pipeline in a few different ways:

- A **Full Refresh** totally restates the experiment's data and calculates it from scratch. This is useful for starting an experiment, or if underlying data has changed
- An **Incremental Refresh** appends new data to your experiment data. This reduces the cost of running scheduled updates to your results
- A **Metric** refresh allows you to update a specific metric in case you changed a definition, or want to add new metrics to your analysis

## Other Jobs

Alongside and inside this main flow, Statsig will also:

- Run Health Checks and a Summary View for exposures
- Calculate top dimensions for dimensional metrics
- Calculate funnel steps
- Run CUPED and Winsorization procedures during the group-level summaries to reduce variance and outlier influence
- Calculate inputs to the Delta Method to avoid bias on Ratio and Mean metrics

Statsig generates experiment-level tables - this makes it easy to do your own follow-up analyses on specific experiments.

## Visibility

Clicking into the history icon on your pulse results, you'll be able to see the Jobs and IDs we ran for each pulse reload, alongside relevant information on compute time and cost.

This will also be fully transparent from your own Warehouse's history and usage management, but having the costs in console is helpful knowledge for the cross-functional experimentation teams running the analysis.
