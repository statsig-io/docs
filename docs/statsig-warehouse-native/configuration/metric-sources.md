---
title: Metric Sources
slug: /statsig-warehouse-native/configuration/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are how you schematize your warehouse data for Statsig, and they serve as the input data for metrics.

## What is a Metric Source

A metric source is a key part of Statsig's semantic layer (and integrations to other Semantic Layers). A metric source consists of a data source, which is either:

- A SQL Query that will be read as a view
- A warehouse table

And configuration around the source:

- Required identifier and timestamp columns
- Aliases, partition information
- [Beta] Data quality checks and configuration

This is the gateway for your data to be used in parameterized queries for experiment analysis, analytics, and more within the Statsig console.

## Data Sources

### Getting Data

Statsig Metric Sources can use a query or a table as the source of their data.

A query-based source will read a SQL query and use that as a source of truth. This, plus Statsig's built-in [query macros](/statsig-warehouse-native/configuration/query-tools), provides an efficient and extremely flexible way to create experimental data sources.

![Screenshot 2024-06-11 at 2 56 22 PM](https://github.com/statsig-io/docs/assets/102695539/2cec3d01-f852-4007-aa3b-de276418593b)

For larger or managed datasets, it's recommended to use table sources instead. This will minimize data scan and provides a more 1:1 mapping of "data source" to "metric source".

![Screenshot 2024-06-11 at 2 56 26 PM](https://github.com/statsig-io/docs/assets/102695539/04cb0209-580c-4603-a5db-45a08f00f90b)

### Configuring Data

For any source, you'll be asked to select which field to use for the timestamp of the logs/metrics being provided, as well as 1 to N user identifiers that can be used to join to experiment data.

![Screenshot 2024-06-11 at 3 03 21 PM](https://github.com/statsig-io/docs/assets/102695539/9a972d93-3500-4947-89e7-c144b877887f)

For table sources, you can optionally provide a partitioning column to reduce data scan, and provide aliases to format data as desired and make your column names more human-readable.

![Screenshot 2024-06-11 at 3 04 55 PM](https://github.com/statsig-io/docs/assets/102695539/4b388fac-1124-4606-88f6-a0615bd32b18)

### Types of Data

Statsig works natively with many different types and granularities of data. Common patterns are:

- raw event logging, using the log timestamp as the timestamp
- unit/day daily fact tables, using the date of the row as the timestamp
- unit/day level summary tables, using the date of the row as the timestamp

For example, if you want to measure revenue, you might have one source for raw purchase logs. You could create a [sum](/statsig-warehouse-native/metrics/sum) metric on a `PURCHASE_VALUE` field, adding whatever filters you want.

You might also have a canonical user-level table that's used for dashboards and revenue reporting. You can easily use this, and make sure that it matches your core KPIs, by pointing to that table and creating a sum metric on the relevant column (e.g. `REVENUE`)

Both of these sources can be used interchangeably and simultaneously.

## Managing Metric Sources

In the metric source tab, you can see your metric sources and the metrics/experiments they're being used in. This varies; in some cases, it can make sense to have a broad metric source that's reused with many metrics using different filters and aggregations. In others, a metric source might exist for one metric (such as a set of specific events for a funnel).

![Metric Source Page](https://user-images.githubusercontent.com/102695539/264087800-18970974-b639-4d73-8977-e54de752ae0a.png)

### Programmatic Updates

You can create and modify metric sources via API and as part of your release flow for data systems. This is full-service and allows for the creation of read-only artifacts. Refer to the [console API](/statsig-warehouse-native/configuration/console-api) and [Semantic Layer Sync](/statsig-warehouse-native/configuration/semantic-layer-sync) sections.

### Note - Governance

If you are concerned about granting Statsig broad warehouse access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.

## Daily Vs. Realtime Sources

When specifying a timestamp, you can also specify if the metric source contains data at a daily or timestamp granularity by toggling the "Treat Timestamp as Date" setting.

![Screenshot 2024-01-09 at 4 15 05 PM](https://github.com/statsig-io/docs/assets/102695539/f0edfdaf-9531-4583-b440-d05f0f3c3618)

When this setting is **not** enabled, the system performs a timestamp-based join. This means that events are attributed to the experiment results based on the exact time they occur in relation to the exposure time. For example, if a user is exposed to an experiment at `2024-01-01T11:00:00` and an event occurs at `2024-01-01T11:01:00` on the same day, the event will be attributed to the experiment results because it happened after the exposure. Conversely, if the event occurs at `2024-01-01T10:59:00`, just before the exposure, it will not be attributed to the experiment results since it happened prior to the exposure.

On the other hand, if the "Treat Timestamp as Date" setting is enabled, the system performs a date-based join. In this case, all events occurring on the same calendar day as the exposure, regardless of the time, will be included in the experiment results. This includes data from the first day of exposures, ensuring that day-1 metrics are not omitted from the analysis.

## Example Data

All Statsig needs to create metrics is a timestamp or date, and a unit (or user) identifier. Context fields let you pull multiple metrics from
the same base query, and select values to sum, mean, or group by.

| Column Type            | Description                                                         | Format/Rules                   |
| ---------------------- | ------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the metric data occurred         | Castable to Timestamp/Date     |
| unit identifier        | **Required** At least one entity to which this metric belongs       | Generally a user ID or similar |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types     |                                |
| context columns        | _Optional_ Fields which will be aggregated, filtered, or grouped on |                                |

For example, you could pull from event logging and aggregate the event-level data to create metrics:

| timestamp           | user_id       | company_id | event      | time_to_load | page_route |
| ------------------- | ------------- | ---------- | ---------- | ------------ | ---------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | page_load  | 207.22       | /          |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | page_load  | 522.38       | /search    |
| 2023-10-10 00:02:22 | my_user_18821 | c_22235455 | serp_click | null         | /search    |

You could create an average TTL metric by averaging time_to_load, and group it by page route or filter to specific routes when creating your metric.

As another example, you might pre-calculate some metrics yourself at a user-day grain - either to match your source-of-truth exactly or to add more complex logical fields:

| timestamp  | user_id       | company_id | country | page_loads | satisfaction_score | revenue_usd | net_revenue_usd |
| ---------- | ------------- | ---------- | ------- | ---------- | ------------------ | ----------- | --------------- |
| 2023-10-10 | my_user_17503 | c_22235455 | US      | 13         | 9                  | 130.21      | 112.33          |
| 2023-10-10 | my_user_18821 | c_22235455 | CA      | 1          | 2                  | 0           | 0               |
| 2023-10-10 | my_user_18828 | c_190887   | DE      | 0          | null               | 22.1        | 0               |

You can create different metrics by summing and filtering on those daily fields.
