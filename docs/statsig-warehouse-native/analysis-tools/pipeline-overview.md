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

The following tables will be generated and stored in your warehouse per-experiment. You have full access to these data sources for your own analysis, models, or visualizations. For experiments, `experiment_id` will be the name of the experiment; for Feature Gates, `experiment_id` will be the name of the gate along with the specific rule ID (e.g. `chatbot_llm_model_switch_31e9jwlgO1bSSznKntb2gp_exposures_summary`)

| Table                                                           | Description                                                                                                                     | Notes                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| first\_exposures\_<experiment_id\>                               | Deduplicated and stitched (for experiments with ID resolution) first exposure events                                            | Useful for ad-hoc analysis                                 |
| exposures\_summary\_<experiment_id\>                             | Timeseries of exposures per group for display in Pulse                                                                          |                                                            |
| unit\_day\_metrics\_<experiment_id\>                              | User-day level metric aggregations table                                                                                        | Useful for ad-hoc analysis                                 |
| unit\_covariate\_metrics_<experiment_id\>                        | User-level pre-experiment aggregations for regression adjustment/CUPED                                                          |                                                            |
| funnel\_events\_<experiment_id>                                | Staging table for running funnel analysis                                                                                       |                                                            |
| windowed\_metrics\_<experiment_id\>                              | Staging table for generating running totals when restating Pulse                                                                |                                                            |
| results\_<rollup\>_<experiment_id\>                            | Outputs of Statistical Analysis for different rollups (e.g. daily, days-since-exposure, cumulative, 7-day). Exported to Statsig | Pulse inputs - useful for replicating Statistical analysis |
| ratio\_results\_<rollup\>\_<experiment_id\>                      | Outputs of Statistical Analysis for ratio metrics in different rollups (e.g. daily, days-since-exposure, cumulative, 7-day). Exported to Statsig | Pulse inputs - useful for replicating Statistical analysis |

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


## Exposure Export Table
Statsig dedupes and records each user's first exposure to an experiment into a table in your warehouse. This table name is configurable in the Data Connection setup and defaults to statsig_forwarded_exposures. This table contains each user's first exposure to an experiment. For feature gates, we dedupe and record exposures for partial rollouts (e.g. 5% or 50% rollouts - but not 0% or 100% rollouts).



| Column Name             | Data Type | Description                                                                                   |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------- |
| experiment_id           | string    | The identifier for the gate/experiment                                                        |
| group_id				        | string    | groupID for experiments; ruleID+Pass/Fail for gates                                           |
| group_name  		        | string    | Name of the experiment group (e.g. Control vs Test) (Coming soon, ETA April 15                |
| user_id                 | string    | The ID passed in as the Statsig userID                                                        |
| stable_id               | string    | Statsig Client SDK managed stable device identifier                                           |
| \[your custom ids]       | string    | One column for every custom unitID you use on Statsig                                        |
| timestamp               | timestamp | Statsig Client SDK managed stable device identifier                                           |
| user_dimensions         | object    | Warehouse specific object with all the user dimensions                                        |
| ts                      | timestamp | Timestamp of the first exposure                                                               |

