---
title: Metric Sources
slug: /statsig-warehouse-native/guides/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are an interface to connect to your data from Statsig. These act as building blocks for experiment metrics. Here, we'll go through the process of setting one up.

## Creating a Metric Source

To create a metric source, go to the metric tab in Statsig and go to the Metric Sources pane.

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

## Daily Vs. Realtime Sources

When specifying a timestamp, you can also specify if the metric source contains data at a daily or timestamp granularity by toggling the "Treat Timestamp as Date" setting.

![Screenshot 2024-01-09 at 4 15 05 PM](https://github.com/statsig-io/docs/assets/102695539/f0edfdaf-9531-4583-b440-d05f0f3c3618)

When this setting is enabled, data from the first day of exposures will be included. For example, if the metric date were '2024-01-01' and a user was exposed at '2024-01-01T12:00:00', a timestamp based join would not include this first day of metrics, but a date-based join would.

This is a common issue you might run into when your data is aggregated date-level metrics, but your exposures are logged in real-time. Toggling this setting allows you to include day-1 metrics for those aggregated sources, while getting timestamp-based joins for realtime sources like event logging.

### Note - Governance

If you are concerned about granting Statsig broad read access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.
