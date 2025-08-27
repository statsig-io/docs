---
title: Data Warehouse Ingestion
keywords:
  - owner:tim
last_update:
  date: 2025-07-23
---

![Slide 4_3 - 2](https://user-images.githubusercontent.com/108023879/187794828-333622ec-6db2-4936-987d-efbef4ba9a47.png)

## Introduction

Statsig Cloud can directly ingest data from your Data Warehouse. This lets you send raw events and pre-computed metrics for tracking and experimental measurement.
We currently support ingestion from the following providers:

1. [BigQuery](bigquery.mdx)
2. [Redshift](redshift.mdx)
3. [Snowflake](snowflake.mdx)
4. [Databricks](databricks.mdx)
5. [Synapse](synapse.mdx)
6. [S3](s3.mdx)
7. [Athena](athena.mdx)

:::tip[Warehouse Native users]
You're viewing the Cloud docs for this page. If your project is configured as [Statsig Warehouse Native](/statsig-warehouse-native/introduction/), your data should already be available if you completed the [quickstart](../statsig-warehouse-native/guides/quick-start/).
:::

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

:::note
Auto-generated **User Accounting Metrics** are not supported today for data warehouse ingestions.
:::

### API Triggered Ingestion (mark_data_ready)

Enterprise customers can trigger ingestion for `metrics` or `events` using the statsig API. This will run your daily ingestion immediately after triggering, and can be helpful for companies whose data availability timing may vary day over day and want data to land as soon as possible in Statsig. This can be enabled by selecting "API Triggered" as your ingestion schedule - note that with this enabled, there will not be an automatic ingestion, but we will still re-sync data after the initial ingestion if we observe a change.

To trigger ingestion, send a post request to the `https://api.statsig.com/v1/mark_data_ready_dwh` endpoint using your statsig API key. An example would be:

```
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"datestamps": "2023-02-20", "type": "events", "sources":["source1", "source2]}' \
  "https://api.statsig.com/v1/mark_data_ready_dwh"
```

Parameters:
- datestamps: Refers to the date of the data being triggered.
- type: `metrics` or `events`
- sources (only for multi-source ingestions): Array of strings representing the sources to trigger

:::note
This is rate limited to once every two hours, and there may be a few minutes delay after triggering before status updates while compute resources are created.
:::

### Frequently Asked Questions

For frequently asked questions, see our [FAQ page](/data-warehouse-ingestion/faq).
