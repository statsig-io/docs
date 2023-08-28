---
title: Statsig Warehouse Native Pipeline Overview
slug: /statsig-warehouse-native/pipeline-overview
sidebar_label: Pipeline Overview
description: Understand what we're running on your warehouse
---

This page is intended to give you a high level overview of the pipeline Statsig will run on your warehouse.

The steps in the pipeline are:

- Identifying first exposures
- Annotating Metric Sources with exposure Data
- Creating user-day level summaries
- Calculating group-level summary Statistics

![Pipeline View](https://user-images.githubusercontent.com/102695539/237244471-dee2e868-073c-43a1-aab4-f953c3744269.png)

Alongside and inside this main flow, we'll also

- Run Health Checks and a Summary View for exposures
- Calculate top dimensions for dimensional metrics
- Run CUPED and Winsorization procedures during the group-level summaries to reduce variance and outlier influence
- Calculate inputs to the Delta Method to avoid bias on Ratio and Mean metrics

In the Statsig console, you'll be able to see the queries we run. This will also be fully transparent from your own Warehouse's history and usage management. We'll generate tables prefixed with your experiment name from the Statsig Console for easy discovery.

Clicking into the history icon on your pulse results, you'll be able to see the Jobs and IDs we ran for each pulse reload, alongside relevant information on compute time and cost.
