---
title: Metric Sources
slug: /statsig-warehouse-native/guides/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are an interface to connect to your data from Statsig. These act as building blocks for experiment metrics. Here, we'll go through the process of setting one up.

## Creating a Metric Source

To create a metric source, go to the metric tab in Statsig and go to the Metric Sources pane.

A metric source starts with a SQL query. This can be a flat read of a table or view, or a more complex join:
![image](https://github.com/statsig-io/docs/assets/31516123/174bf9e4-ed8b-41fa-a8db-3a5f2dbd0985)


Running the query validates the syntax and pulls a short set of samples as well as the columns in the result set. Some fields need to be mapped to the fields
Statsig requires (user identifiers, a `timestamp`, and a `value`).

![image](https://github.com/statsig-io/docs/assets/31516123/1ed8f45b-19ed-42fb-bb26-5b43fca31a53)

This is fairly flexible and can be used with many data granularities:

- raw event logging, using the log timestamp as the timestamp
- user/unit-level daily fact table, using the date of the row as the timestamp
- user/day level aggregate tables, again using the date of the row as the timestamp

For example, if you wanted to calculate a metric for revenue, you could use the raw revenue event
logging table with the logged value as the value, or use an aggregated and cleaned daily version
with the calculated daily sum of revenue as the value.

## Tables as a Metric Source
If you simply want to use an existing table as a metric source, you can point to the table instead of writing a SQL query. This can be both simpler and more performant than operating on top of a SQL query. If you're using semantic layers to materialize metrics in tables, this is likely the interface to use. An added perk with using Tables as a Metric Source is being able to use formulae. You can apply simple SQL transforms (e.g. convert from cents to dollars by dividing by 100) or alias them to make them more discoverable.

![image](https://github.com/statsig-io/docs/assets/31516123/ada794c9-9ebc-480a-85d5-4dd8bc3bc573)



## Manage Metric Sources

In the metric source tab, you can see your metric sources and the metrics/experiments they're being used in. This varies; in some cases, it can make sense to have a broad metric source that's reused with many metrics using different filters and aggregations. In others, a metric source might exist for one metric (such as a set of specific events for a funnel).

![Metric Source Page](https://user-images.githubusercontent.com/102695539/264087800-18970974-b639-4d73-8977-e54de752ae0a.png)

Now that we have a metric source set up, we can use it to create a Metric.

## Daily Vs. Realtime Sources

When specifying a timestamp, you can also specify if the metric source contains data at a daily or timestamp granularity by toggling the "Treat Timestamp as Date" setting. 

![Screenshot 2024-01-09 at 4 15 05 PM](https://github.com/statsig-io/docs/assets/102695539/f0edfdaf-9531-4583-b440-d05f0f3c3618)

When this setting is **not** enabled, the system performs a timestamp-based join. This means that events are attributed to the experiment results based on the exact time they occur in relation to the exposure time. For example, if a user is exposed to an experiment at `2024-01-01T11:00:00` and an event occurs at `2024-01-01T11:01:00` on the same day, the event will be attributed to the experiment results because it happened after the exposure. Conversely, if the event occurs at `2024-01-01T10:59:00`, just before the exposure, it will not be attributed to the experiment results since it happened prior to the exposure.

On the other hand, if the "Treat Timestamp as Date" setting is enabled, the system performs a date-based join. In this case, all events occurring on the same calendar day as the exposure, regardless of the time, will be included in the experiment results. This includes data from the first day of exposures, ensuring that day-1 metrics are not omitted from the analysis.

### Note - Governance

If you are concerned about granting Statsig broad read access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.
