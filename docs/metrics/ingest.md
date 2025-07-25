---
title: Ingesting Metrics
sidebar_label: Ingesting Metrics
slug: /metrics/ingest
keywords:
  - owner:shubham
last_update:
  date: 2025-03-21
---
## Ingesting Precomputed [Metrics](/metrics)

Statsig can ingest your precomputed product and business metrics using our data warehouse connector (Metrics Imports).  Integrations like [Snowflake](/integrations/data-imports/snowflake), [BigQuery](/integrations/data-imports/bigquery) and [Redshift](/integrations/data-imports/redshift) are supported.

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

The timestamp provided should be:

- A unix timestamp
- Represents the latest point in time for which all metrics before have been uploaded.
- Any future calls to this API with an earlier timestamp will be invalid.
- We don’t guarantee correct behavior if metrics are provided with an earlier timestamp after this API is called.

Statsig processes metrics as a full day in the PST timezone; we will wait until a full day is marked as ready before processing that day.

## Debugging Precomputed Metrics 

All precomputed metrics generate Metric Detail View pages. However, these Detail View pages take a few hours to generate post-ingestion. The fastest way to start seeing and debugging your precomputed metrics is via the **Metrics Logstream** on the **Metrics Catalog** tab within **Metrics**. 

![Screen Shot 2022-07-13 at 4 22 46 PM](https://user-images.githubusercontent.com/101903926/178854882-730ef0d5-8eb2-4344-88ab-33111301e712.png)

The **Metrics Logstream** will surface all ingested, precomputed metrics in real-time as they are ingested, enabling you to check metric name, value, ID, ID type, and ingestion date. Pro tip- we often find that customers get tripped up on ensuring their precomputed metrics have the right ID type, so pay extra attention to this column! 

We've also exposed the ability to include test metrics, tagged with **isTest**, which you can toggle on/ off for debugging purposes in the **Metrics Logstream**. Note that this **isTest** flag is only available for precomputed metrics ingested via Statsig's APIs. Support for this flag via our integrations with Snowflake, BigQuery, and Redshift is coming soon.

To mark a batch of metrics as test metrics the isTest parameter needs to be set to true as part of the data for the request as seen below.

```bash
curl \
  “https://events.statsigapi.net/v1/log_custom_metric” \
  --header “statsig-api-key: <YOUR-SDK-KEY>” \
  --header “Content-Type: application/json” \
  --request POST \
  --data “{"isTest": true, “metrics": [{"user_id": "1237", "metric_name": "test_metric", "id_type": "user_id", "metric_value": 90}, {"user_id": "4568", "metric_name": "ratio", "id_type": "stable_id", "numerator": 3, "denominator": 15}]}”
```

![292825183_585502089655173_8192569048240569580_n](https://user-images.githubusercontent.com/101903926/179048336-ebdde45b-17e7-47ad-bb81-01f8f032b978.png)

Finally, it's important to note that **Metrics Logstream** only appears if you're actively ingesting precomputed metrics, so if you're not seeing it appear at the bottom of your **Metrics Catalog** this means there is likely a connection or schema issue and Statsig is not receiving your precomputed metrics. 
