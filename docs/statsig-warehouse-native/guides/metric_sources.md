---
title: Metric Sources
slug: /statsig-warehouse-native/guides/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are an interface to connect to your data from Statsig. These act as building blocks for experiment metrics. Here, we'll go through the process of setting one up.

## Creating a Metric Source

To create a metric source, go to the metric tab in Statsig and go to the Metric Sources pane. We also have a metrics API that lets you create metrics programatically.

<!-- <Image_Of_Metric_Source_Page> -->

A metric source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig requires (user identifiers, a `timestamp`, and a `value`).

<!-- <Image of set up metric> -->

This is fairly flexible and can be used with many data granularities:

- raw event logging, using the log timestamp as the timestamp
- user/unit-level daily fact table, using the date of the row as the timestamp
- user/day level aggregate tables, again using the date of the row as the timestamp

For example, if you wanted to calculate a metric for revenue, you could use the raw revenue event
logging table with the logged value as the value, or use an aggregated and cleaned daily version
with the calculated daily sum of revenue as the value.

## Manage Metric Sources

In the metric source tab, you can see your metric sources and the metrics they're being used in. This varies; in some cases, it can make sense to have a broad metric source that's reused with many metrics using different filters and aggegations. In others, a metric source might exist for one metric (such as a set of specific events for a funnel).

<!-- <Image of Metric Source Tab> -->

Now that we have a metric source set up, we can use it to create a Metric.

### Note - Governance

If you are concerned about granting Statsig broad read access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.
