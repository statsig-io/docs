---
title: Metric Sources
slug: /statsig-warehouse-native/guides/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are an interface to connect to your data from Statsig. These act as building blocks for experiment metrics. Here, we'll go through the process of setting one up.

## Creating a Metric Source

To create a metric source, go to the metric tab in Statsig and go to the Metric Sources pane. We also have a metrics API that lets you create metrics programmatically.

A metric source starts with a SQL query. This can be a flat read of a table or view, or a more complex join:
![Metric Source SQL](https://user-images.githubusercontent.com/102695539/264088009-f466deb1-cc48-4672-8ff9-76f593637d7e.png)

Running the query validates the syntax and pulls a short set of samples as well as the columns in the result set. Some fields need to be mapped to the fields
Statsig requires (user identifiers, a `timestamp`, and a `value`).

![Metric Source Mapping](https://user-images.githubusercontent.com/102695539/264088003-9938e02b-c1fb-4a37-a503-e7e49157509a.png)

This is fairly flexible and can be used with many data granularities:

- raw event logging, using the log timestamp as the timestamp
- user/unit-level daily fact table, using the date of the row as the timestamp
- user/day level aggregate tables, again using the date of the row as the timestamp

For example, if you wanted to calculate a metric for revenue, you could use the raw revenue event
logging table with the logged value as the value, or use an aggregated and cleaned daily version
with the calculated daily sum of revenue as the value.

## Manage Metric Sources

In the metric source tab, you can see your metric sources and the metrics/experiments they're being used in. This varies; in some cases, it can make sense to have a broad metric source that's reused with many metrics using different filters and aggregations. In others, a metric source might exist for one metric (such as a set of specific events for a funnel).

![Metric Source Page](https://user-images.githubusercontent.com/102695539/264087800-18970974-b639-4d73-8977-e54de752ae0a.png)

Now that we have a metric source set up, we can use it to create a Metric.

### Note - Governance

If you are concerned about granting Statsig broad read access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.
