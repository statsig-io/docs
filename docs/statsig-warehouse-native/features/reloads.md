---
title: Loading Pulse
slug: /statsig-warehouse-native/features/reloads
sidebar_label: Loading Pulse
---

## The Pulse Engine

Statsig's experimentation engine runs the necessary setup, diagnostics, and transformations required to generate the data points that power statistical experiment analysis. In Warehouse Native, this consists of a series of query jobs (referred to as a DAG, or Directed Acyclic Graph) that take data from your sources and metric configurations to a final result set.

### Types of Reloads

Statsig offers a number of ways to reload data:

- [Full Reloads](./full-reloads) completely restate your experiment data. This can be useful if your underlying data changes a lot (e.g. a full DBT reload) day-to-day, and you want to ensure your analysis matches your raw data
- [Incremental Reloads](./incremental-reloads) catch your data up from where it was the last load to where it is today. Running daily incremental reloads is the recommended way to keep your data current without using unnecessary compute resources to recalculate data that hasn't changed.
- [Metric Reloads](./metric-reloads) are a useful feature for when you want to add a metric to an analysis, or when a metric definition has changed. This does an efficient spot replacement of the data for a single metric or set of metrics.

Full and incremental loads can be [scheduled][./scheduled-reloads] so that you have fresh results each day.

### Transparency

For every load, Statsig logs the compute time and jobs, cost, and queries associated with the reload. This is highly visible in your console, and provides a powerful tool for understanding what's taking time or delaying results.

### Efficient Reloads

Statsig borrows heavily from its cloud roots to optimize the queries running in your warehouse - generally, in head-to-head evaluations customers report that we use significantly less resources than comparable platforms.

To add to this, Statsig offers turbo mode, which skips some enrichment calculations (in particular some time series rollups) in order to very cheaply compute the latest snapshot of your data. With this tool, customers have run experiments on 150+ million users in less than 5 minutes on a snowflake S cluster.

### Cleaning Up Storage

Statsig will automatically clean up after itself for explore datasets, power analyses, and stratification artifacts. Once you make a decision on an experiment, you can choose whether or not to delete the staging datasets and/or the result datasets; you can always come back to the experiment to clean up from the experiment menu as well.
