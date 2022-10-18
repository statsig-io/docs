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
4. Databricks (Coming Soon)

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

Reloading data and backfilling metrics and events is charged as a logged event as per our [Pricing Plan](https://statsig.com/pricing). 

### Notes
- Event data from ingestions is generally treated the same as SDK-logged events. There are some minor differences, however:
  - Events from ingestions do not count towards Statsig's "user metrics" such as DAU or Retention. 
    - Many companies only send us a subset of their events, which means that the user accounting could lead to your having multiple competing values for "fact" data like daily active users. 
    - We recommend sending your own definition of DAU as a precomputed metric or as a daily event per user (1 'daily_active' event if a user was active that day)
- For most customers, data loads should take 1-2 hours to materialize in your console from when they are scheduled. Note that the schedule is in PST, and not PDT, so depending on daylight savings time they may start an hour later or earlier.
