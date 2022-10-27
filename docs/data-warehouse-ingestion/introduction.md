---
title: Data Warehouse Ingestion
---

![Slide 4_3 - 2](https://user-images.githubusercontent.com/108023879/187794828-333622ec-6db2-4936-987d-efbef4ba9a47.png)

## Introduction

Statsig can directly ingest data from your Data Warehouse. This lets you send raw events and pre-computed metrics for tracking and experimental measurement.
We currently support ingestion from the following providers:

1. [BigQuery](bigquery.mdx)
2. [Redshift](redshift.mdx)
3. [Snowflake](snowflake.mdx)
4. [Databricks](databricks.mdx)

### How it works

In Statsig console, you can:

1. Set up connection to your data warehouse
2. Query your data warehouse for appropriate data
3. Map your data fields to Statsig's expected schema
4. Bulk ingest & schedule future ingestions

Ingestion is set up on a daily schedule. Statsig will run a query you provide on your data warehouse, download the result set, and materialize the results into your console the same as those that came in through the SDK.

If data lands late or is updated, Statsig will detect this change (currently via listening for row count changes) on a rolling window and reload the data for that day.

### How to Begin Data Ingestion

To begin ingestion from a Data Warehouse:

1. Go to your Statsig Console
2. Navigate to Metrics tab on the side navigation bar
3. To go the "Ingestion" tab

![Ingestion Tab](https://user-images.githubusercontent.com/108023879/187800555-47885bbd-8317-40d9-b8d7-ad5236e3c73f.png)

You will be required to set up connections with necessary credentials, and map your data fields to the fields Statsig expects to ingest. Please refer to the warehouse-level setup documentation for more information on setup.

### Scheduling Ingestion & Backfilling

Statsig supports multiple schedules for ingestion. At the scheduled window, we will check if data is present in your warehouse for the latest date, and load if it exists. 

At several follow-up windows we will check if the data has changed, and reload it if there's a change larger than 1%. 

We also support a user-triggered backfill. This could be useful if a specific metric definiton has changed, or you want to resync data older than a few days. 

Reloading data and backfilling metrics and events is billed as any other [custom event](metrics/raw-events#billing)

### Frequently Asked Questions
1. **Does the event data from count towards Statsig's "user metrics" such as DAU or Retention?**
No, event data from ingestions does not count towards Statsig's "user metrics" such as DAU or Retention. Customers typically send Statsig a subset of their events, which could result in multiple competing values for "fact" data such as daily active users in your Statsig project. Statsig recommends      sending your own precomputed metric for DAU or as a daily event per user (1 'daily_active' event if a user was active that day).

2. **How long does the data take to load?** 
3. For most customers, data ingestions should take 1-2 hours to materialize in the Statsig console from the point the ingestion is scheduled. Note that the schedule is in PST, and not PDT, so depending on daylight savings time they may start an hour later or earlier.

3. **Does Statsig load data incrementally every day or does it refresh all historical data?**
Yes, Statsig loads data incrementally every day. Statsig also monitors this daily data over several follow-windows for up to two weeks, and reloads data for a given day if it has changed more than 1%.

4. **Can I ingest multiple metrics (and event types) in the same scheduled ingestion?**
Yes, you can ingest multiple metrics (and event types) in the same scheduled ingestion. Statsig enables you to run a SQL query against your data warehouse cluster to join multiple tables to generate a view with all your precomputed metrics. You can use this as the source view for your scheduled data ingestion and import multiple metrics at the same time. For example, your dataset could import both `metric-1` and `metric-2`, with `metric-2` including multiple units of analysis (`user_id` and `alphabet_id`).

5. **If ingested data does not include metric values for a given user on a given day, how does this effect my experiments?**
If the metric value is unavailable for a given user on a given day, Statsig takes it to be `zero` for additive metrics such as counts and sums. For metrics that depend on a user "participating" in the metric, say conversion rate, the user is excluded. Note that additive metrics typically have a single `metric_value` column in the ingested data, while ratio (participating) metrics typically have separate numerator and denominator columns. 

