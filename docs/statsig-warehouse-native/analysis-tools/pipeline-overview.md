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

## Artifacts and Entity Relationships

The following tables will be generated and stored in your warehouse per-experiment. You have full access to these data sources for your own analysis, models, or visualizations.

| Table                                                        | Description                                                                                                                     | Notes                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <experiment\>\_first_exposures                               | Deduplicated and stitched (for experiments with ID resolution) first exposure events                                            | Useful for ad-hoc analysis                                 |
| <experiment\>\_exposures_summary                             | Timeseries of exposures per group for display in Pulse                                                                          |                                                            |
| <experiment\>\_user_level_aggregations                       | User-day level metric aggregations table                                                                                        | Useful for ad-hoc analysis                                 |
| <experiment\>\_user_level_aggregations_for_pre_exposure_data | User-level pre-experiment aggregations for regression adjustment/CUPED                                                          |                                                            |
| <experiment\>\_funnel_events                                 | Staging table for running funnel analysis                                                                                       |                                                            |
| windowed_metrics\_<experiment\>                              | Staging table for generating running totals when restating Pulse                                                                |                                                            |
| <experiment\>\_results\_<rollup\>                            | Outputs of Statistical Analysis for different rollups (e.g. daily, days-since-exposure, cumulative, 7-day). Exported to Statsig | Pulse inputs - useful for replicating Statistical analysis |

The high level relationships/contents of these tables are represented below - refer to the Main Steps image below for scheduling details.

![WHN ER Diagram](https://github.com/statsig-io/docs/assets/102695539/120eb9ed-fe35-4a66-8acd-cbcd819a2bdf)

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
