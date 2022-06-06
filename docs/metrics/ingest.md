---
title: Ingesting Metrics
sidebar_label: Ingesting Metrics
slug: /metrics/ingest
---

## Ingesting Precomputed Metrics

Statsig allows you to ingest any of your precomputed product and business metrics in three different ways:
- Logging metrics using Statsig's HTTP API
- Importing metrics from a datawarehouse such as Snowflake
- Ingesting metrics from your collection layer service such as Segment. 

### Logging Metrics using the HTTP API
You can log one or more precomputed metrics with Statsing using the `log_custom_metric` API as shown below. The API call requires an **ID type** and should either (a) include a **metric_value**, or (b) provide a numerator and denominator of the metrics (if it's a ratio metric). 

```bash
curl \
  “https://api.statsig.com/v1/log_custom_metric” \
  --header “statsig-api-key: <YOUR-SDK-KEY>” \
  --header “Content-Type: application/json” \
  --request POST \
  --data “{“metrics": [{"user_id": "1237", "metric_name": "test_metric", "id_type": "user_id", "metric_value": 90}, {"user_id": "4568", "metric_name": "ratio", "id_type": "stable_id", "numerator": 3, "denominator": 15}]}”
 ```
 
With response:
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

The timestamp provided should be:
- A unix timestamp
- Represents the latest point in time for which all metrics before have been uploaded.
- Any future calls to this API with an earlier timestamp will be invalid.
- We don’t guarantee correct behavior if metrics are provided with an earlier timestamp after this API is called.

Statsig processes metrics as a full day in the PST timezone; we will wait until a full day is marked as ready before processing that day.

### Importing Metrics from Snowflake

See [Direct Ingestion from Snowflake](/integrations/snowflake#direct-ingestion-from-snowflake) on how to set up your Snowflake data warehouse instance so Statsig can directly and automatically ingest your precomputed metrics as well as raw events from Snowflake.

### Ingesting Metrics from Segment

See [Configuring Incoming Events](/integrations/data-connectors/segment#configuring-incoming-events) on how to configure Statsig and Segment to import your raw events from Segment. 

Watch this space on how to also ingest precomputed metrics via Segment.

