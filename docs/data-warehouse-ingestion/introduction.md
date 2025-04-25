---
title: Data Warehouse Ingestion
keywords:
  - owner:tim
last_update:
  date: 2024-08-29
---

![Slide 4_3 - 2](https://user-images.githubusercontent.com/108023879/187794828-333622ec-6db2-4936-987d-efbef4ba9a47.png)

## Introduction

Statsig can directly ingest data from your Data Warehouse. This lets you send raw events and pre-computed metrics for tracking and experimental measurement.
We currently support ingestion from the following providers:

1. [BigQuery](bigquery.mdx)
2. [Redshift](redshift.mdx)
3. [Snowflake](snowflake.mdx)
4. [Databricks](databricks.mdx)
5. [Synapse](synapse.mdx)
6. [S3](s3.mdx)
7. [Athena](athena.mdx)

### How it works

In Statsig console, you can:

1. Set up connection to your data warehouse
2. Query your data warehouse for appropriate data
3. Map your data fields to Statsig's expected schema
4. Bulk ingest & schedule future ingestions

Ingestion is set up on a daily schedule. Statsig will run a query you provide on your data warehouse, download the result set, and materialize the results into your console the same as those that came in through the SDK.

If data lands late or is updated, Statsig will detect this change and reload the data for that day (details below).

### How to Begin Data Ingestion

To begin ingestion from a Data Warehouse:

1. Go to your Statsig Console
2. Navigate to Metrics tab on the side navigation bar
3. To go the "Ingestion" tab

![Ingestion Tab](https://user-images.githubusercontent.com/108023879/187800555-47885bbd-8317-40d9-b8d7-ad5236e3c73f.png)

You will be required to set up connections with necessary credentials, and map your data fields to the fields Statsig expects to ingest. Please refer to the warehouse-level setup documentation for more information on setup.

### Connection Flow

See the docs sidebar to find the documentation for the data warehouse of your choice. Upon connection, you will provide a SQL query to generate a view via data for Statsig to ingest.

<img src="https://user-images.githubusercontent.com/87334575/199855101-2bed8f01-bfc7-4ef9-91a8-42620f7b796b.png" width="700"/>

### Data Mapping

After connecting and providing a SQL query, we ask you to map columns in your data output to fields Statsig expects and run a small sample query to make sure that there aren't any basic issues with data types.

<img src="https://user-images.githubusercontent.com/87334575/199855255-ebd683fb-bf3b-4825-9f2b-63913e1dda89.png" width="700"/>
<img src="https://user-images.githubusercontent.com/87334575/199855270-a59ead1a-4fd7-4d99-bd1f-a511ca21750a.png" width="700"/>

See [here](data_mapping.mdx) for more information.

### Scheduling Ingestion & Backfilling

Statsig supports multiple schedules for ingestion. At the scheduled window, we will check if data is present in your warehouse for the latest date, and load if it exists.

We will check the underlying source table for changes. For up to 3 days after initial ingestion, we will check for >5% changes in row counts and reload the data.

We also support a user-triggered backfill. This could be useful if a specific metric definition has changed, or you want to resync data older than a few days.

<img src="https://user-images.githubusercontent.com/87334575/199854289-dec60731-b54e-43d1-92a0-2fbd53f47087.png" width="400"/>

Reloading data and backfilling metrics and events is billed as any other [custom event](/metrics/raw-events#billing)

Note: Auto-generated **User Accounting Metrics** are not supported today for data warehouse ingestions.

### API Triggered Ingestion (mark_data_ready)

Enterprise customers can trigger ingestion for `metrics` or `events` using the statsig API. This will run your daily ingestion immediately after triggering, and can be helpful for companies whose data availability timing may vary day over day and want data to land as soon as possible in Statsig. This can be enabled by selecting "API Triggered" as your ingestion schedule - note that with this enabled, there will not be an automatic ingestion, but we will still re-sync data after the initial ingestion if we observe a change.

To trigger ingestion, send a post request to the `https://api.statsig.com/v1/mark_data_ready_dwh` endpoint using your statsig API key. An example would be:

```
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"datestamps": "2023-02-20", "type": "events"}' \
  "https://api.statsig.com/v1/mark_data_ready_dwh"
```

Parameters:
- datestamps: Refers to the date of the data being triggered.
- type: `metrics` or `events`

Note that this is rate limited to once every two hours, and there may be a few minutes delay after triggering before status updates while compute resources are created.

### Frequently Asked Questions

1. **Does event data from ingestion count towards Statsig's [User Accounting Metrics](/metrics/user) such as DAU or Retention?**

No, event data from ingestions does not count towards Statsig's User Accounting Metrics such as DAU or Retention. Customers typically send Statsig a subset of their events, which could result in multiple competing values for "fact" data such as daily active users in your Statsig project. Statsig recommends sending your own precomputed metric for DAU or as a daily event per user (1 'daily_active' event if a user was active that day).

2. **How long does the data take to load?**

For most customers, data ingestions should take 1-2 hours to materialize in the Statsig console after the ingestion is scheduled. Note that the schedule is in PST, and not PDT, so depending on daylight savings time ingestions may start an hour later or earlier.

3. **Does Statsig load data incrementally every day (or does it refresh all historical data)?**

Statsig loads data incrementally every day. Statsig also monitors data over several follow-up windows for up to two weeks, and reloads data for a given day if it has changed more than 1%.

4. **Can I ingest multiple metrics (and event types) in the same scheduled ingestion?**

Yes, you can ingest multiple metrics (and event types) in the same scheduled ingestion. Statsig enables you to run a SQL query against your data warehouse cluster to join multiple tables to generate a view with all your precomputed metrics. You can use this as the source view for your scheduled data ingestion and import multiple metrics at the same time.

For example, your dataset could import both `metric-1` and `metric-2`, with `metric-2` including multiple units of analysis, say user_id and alphabet_id.

5. **If ingested data does not include metric values for a given user on a given day, how does this effect metric calculations in my experiments?**

If the metric value is unavailable for a given user on a given day, Statsig takes it to be `zero` for additive metrics such as counts and sums. For metrics that depend on a user "participating" in the metric, say conversion rate, the user is excluded. Note that additive metrics typically have a single `metric_value` column in the ingested data, while ratio (participating) metrics typically have separate `numerator` and `denominator` columns.

6. **Does Statsig notify me about the status of scheduled ingestions?**

Statsig shows the status of your daily ingestion on the console under the **Ingestions** tab. Statsig reports three kinds of ingestion statuses:

- ingestion succeeded for a given day
- ingestion succeeded for a given day, but no data was detected
- ingestion failed for a given day

Statsig also sends email notifications with these status updates to the Statsig user who set up the ingestion. This user can also enable Slack direct message (DM) notifications to themselves in their Statsig [Account Settings](https://console.statsig.com/account_notifications).

7. **Does Statsig automatically backfill data**

Statsig looks back at data for 3 days from the initial ingestion to see data has changed (>5% increase in the number of rows) to automatically trigger a backfill. Outside of this window, we expect the customer to trigger backfill for the range of dates.
