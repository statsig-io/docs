---
title: Metric Reloads
slug: /statsig-warehouse-native/features/metric-reloads
sidebar: Metric Reloads
keywords:
  - owner:vm
last_update:
  date: 2024-06-12
---

Metric reloads drop all data from staging pipelines associated with a metric, and restate that data from scratch. Where this data is interconnected (e.g. ratios, funnels, etc.), related entities will be updated as well.

This is a big time saver in cases where a new metric needs to be added to an experiment, or a metric definition has changed, since you can avoid reloading N unrelated experiment metrics.

## How Metric Reloads Work

Metric reloads:
- Drop all data for the experiment for that metric for the entire experiment time period
- Restate that data from scratch
- The date range used is [experiment start, latest incremental/full load date loaded]

These are essentially full reloads scoped to a specific metric. The problem they solve is if a metric definition or underlying data has changed meaningfully.

## Common Use Cases

- Adding a new metric to an existing experiment
- Updating a metric definition
- Fixing data quality issues for a specific metric
- Re-analyzing a subset of metrics without reloading everything

## Limitations

Currently, metric reloads are not available on an incremental basis. Each metric reload will perform a complete restatement of the data for that metric. This is by design to avoid complex data integrity issues that could arise if metrics were at different stages of processing.
