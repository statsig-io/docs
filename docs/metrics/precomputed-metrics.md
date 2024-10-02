---
title: Precomputed Metrics
sidebar_label: Precomputed Metrics
slug: /metrics/precomputed-metrics
---

## Importing Precomputed Metrics

You can import precomputed metrics in three ways.

![image](https://user-images.githubusercontent.com/1315028/182465932-1ad1e592-ddac-47cb-9895-60cc28771c92.png)

### Importing Precomputing Metrics from your Data Warehouse

Statsig integrates natively with cloud data warehouses such as [Snowflake](/data-warehouse-ingestion/snowflake), [BigQuery](/data-warehouse-ingestion/bigquery), [Redshift](/data-warehouse-ingestion/redshift) to ingest any of your existing metrics for computing experiment results. See [Data Warehouse Ingestion](/data-warehouse-ingestion/introduction) to get started.

### Logging Precomputed Metrics using HTTP API

You can also ingest these metrics using Statsig's [HTTP API](/http-api). As shown below, the `log_custom_metric` API call requires an **Unit Identifier** (e.g. user_id, stable_id) and the corresponding **ID type**. The API call should also include either a **metric_value** or (if it's a ratio metric) provide a numerator and denominator of the metric.

```bash
curl \
  “https://events.statsigapi.net/v1/log_custom_metric” \
  --header “statsig-api-key: <YOUR-SDK-KEY>” \
  --header “Content-Type: application/json” \
  --request POST \
  --data “{“metrics": [{"user_id": "1237", "metric_name": "test_metric", "id_type": "user_id", "metric_value": 90}, {"user_id": "4568", "metric_name": "ratio", "id_type": "stable_id", "numerator": 3, "denominator": 15}]}”
```

Response:
`{"success":true}`

Statsig does not automatically process these metrics until you mark them as ready, as it's possible you might land data out of order. Once you are finished loading data for a period, you mark the data as ready by hitting the `mark_data_ready` API:

```
curl --location --request POST ‘https://api.statsig.com/v1/mark_data_ready’ \
--header ‘statsig-api-key: {your statsig server secret}’ \
--header ‘Content-Type: application/json’ \
--data-raw ‘{
    “timestamp”: 1647975283,
    “type”: “metrics”
}
```

The timestamp provided should:

- Be a unix timestamp
- Represent the latest point in time for which all metrics before have been uploaded.

Any future calls to this API with an earlier timestamp will be invalid. Statsig doesn't guarantee correct behavior if you record the same metric with an earlier timestamp with another API call.

Statsig processes metrics as a full day in the PST timezone and wait until a full day is marked as ready before processing that day.

### Uploading Data to Azure Blob

You can also import data into Statsig by uploading your data into a Statsig-owned Azure Blob container. To learn more, hit up the Statsig team on the [Statsig Slack channel](https://statsig.com/slack).

## Debugging Precomputed Metrics

Statsig creates a metric detail page for all precomputed metrics that you import from your data warehouse or ingest using the HTTP API. These metric detail pages take a few hours to generate post-import or ingestion. The fastest way to start seeing and debugging your precomputed metrics is via the **Metrics Logstream** in the **Metrics Catalog** tab within **Metrics**.

![Screen Shot 2022-07-13 at 4 22 46 PM](https://user-images.githubusercontent.com/101903926/178854882-730ef0d5-8eb2-4344-88ab-33111301e712.png)

The **Metrics Stream** will surface all ingested, precomputed metrics in real-time as they are ingested, enabling you to check metric name, metric value, unit identifier, ID type, and ingestion date.

:::info Tip
Customers can trip up on ensuring that their precomputed metrics have the right ID type. Pay extra attention to this column!
:::

Statsig also offers the ability to include test metrics, tagged with **isTest**. You can toggle these on/ off while debugging in the **Metrics Stream**. The **isTest** flag is currently available for precomputed metrics ingested via Statsig's APIs. Support for this flag via our integrations with Snowflake, BigQuery, and Redshift is coming soon.

To mark a batch of metrics as test metrics the **isTest** parameter needs to be set to true as part of the data for the request as seen below.

```bash
curl \
  “https://events.statsigapi.net/v1/log_custom_metric” \
  --header “statsig-api-key: <YOUR-SDK-KEY>” \
  --header “Content-Type: application/json” \
  --request POST \
  --data “{"isTest": true, “metrics": [{"user_id": "1237", "metric_name": "test_metric", "id_type": "user_id", "metric_value": 90}, {"user_id": "4568", "metric_name": "ratio", "id_type": "stable_id", "numerator": 3, "denominator": 15}]}”
```

![292825183_585502089655173_8192569048240569580_n](https://user-images.githubusercontent.com/101903926/179048336-ebdde45b-17e7-47ad-bb81-01f8f032b978.png)

Finally, the **Metrics Stream** only appears if you're actively ingesting precomputed metrics. If you're not seeing it appear at the bottom of your **Metrics Catalog**, Statsig likely is not receiving your precomputed metrics due to a connection issue or an invalid schema.
