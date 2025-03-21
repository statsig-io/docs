---
title: Precomputed Metrics
sidebar_label: Precomputed Metrics
slug: /metrics/precomputed-metrics
keywords:
  - owner:shubham
last_update: 2024-10-14
---

## Importing Precomputed Metrics

### Importing Precomputing Metrics from your Data Warehouse

Statsig integrates natively with cloud data warehouses such as [Snowflake](/data-warehouse-ingestion/snowflake), [BigQuery](/data-warehouse-ingestion/bigquery), [Redshift](/data-warehouse-ingestion/redshift) to ingest any of your existing metrics for computing experiment results. See [Data Warehouse Ingestion](/data-warehouse-ingestion/introduction) to get started.

## Debugging Precomputed Metrics

Statsig creates a metric detail page for all precomputed metrics that you import from your data warehouse. These metric detail pages take a few hours to generate post-import or ingestion. The fastest way to start seeing and debugging your precomputed metrics is via the **Metrics Logstream** in the **Metrics Catalog** tab within **Metrics**.

![Screen Shot 2022-07-13 at 4 22 46 PM](https://user-images.githubusercontent.com/101903926/178854882-730ef0d5-8eb2-4344-88ab-33111301e712.png)

The **Metrics Stream** will surface all ingested, precomputed metrics in real-time as they are ingested, enabling you to check metric name, metric value, unit identifier, ID type, and ingestion date.

:::info Tip
Customers can trip up on ensuring that their precomputed metrics have the right ID type. Pay extra attention to this column!
:::

Finally, the **Metrics Stream** only appears if you're actively ingesting precomputed metrics. If you're not seeing it appear at the bottom of your **Metrics Catalog**, Statsig likely is not receiving your precomputed metrics due to a connection issue or an invalid schema.
