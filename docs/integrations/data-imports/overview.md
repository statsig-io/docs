---
title: Imports Overview
---

## Overview

Statsig can directly ingest data from your Data Warehouse. This lets you send raw events and pre-computed metrics for tracking and experimental measurement.
We currently support ingestion from the following providers:

1. [BigQuery](./bigquery.mdx)
2. [Redshift](./redshift.mdx)
3. [Snowflake](./snowflake.mdx)

### How it works

Ingestion is set up on a daily schedule. Statsig will run a query you provide on your data warehouse, download the result set, and materialize the results into your console the same as those that came in through the SDK.

If data lands late or is updated, Statsig will detect this change (currently via listening for row count changes) on a rolling window and reload the data for that day.

### How to Begin Data Ingestion

To begin ingestion from a Data Warehouse:

1. Go to your Statsig Console
2. Navigate to Metrics tab on the side navigation bar
3. To go the "Ingestion" tab
4. Click on a Data Warehouse you want to ingest from

You will be required to set up connections with necessary credentials, and map your data fields to the fields Statsig expects to ingest. Please refer to the warehouse-level setup documentation for more information on setup.
