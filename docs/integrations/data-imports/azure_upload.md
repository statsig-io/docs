---
title: Azure Metrics Upload
---

## Overview

Statsig allows you to upload your pre-computed metrics data to a secure Azure blob owned by Statsig. We'll ingest all of your uploaded metrics for a day once you've signalled that a given day is finished uploading.

## Getting Started

Reach out in slack or to your primary Statsig point of contact. We'll set up an Azure blob storage container and provide you with credentials to connect.

## Filesystem Format

To allow for daily uploads, please set up your blob storage container with the following folders:

- `events/` for events data
- `metrics/` for metrics data
- `signals/` for signal flags when you've finished uploading data for a day. You can omit this folder and instead use the [`mark_data_ready` API](/metrics/ingest) instead, but you must use one or the other

We recommend writing folders by date partitions for ease of debugging, i.e. storing day's data in folders with ISO-formatted names (`YYYY-MM-DD`).

### Data Format

Please make sure your data conforms to the following schemas.

<b>Events</b>

| Column         | Description                                                                                                       | Rules                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| timestamp      | UNIX timestamp of the event                                                                                       | UTC timestamp                                                                                           |
| event_name     | The name of the event                                                                                             | String under 128 characters, using `_` for spaces                                                       |
| event_value    | A string representing the value of a current event. Can represent a 'dimension' or a 'value'                      | Read as string format; numeric values will be converted into value                                      |
| event_metadata | A dictionary<string, string> in the form of a JSON string, containing named metadata for the event                | String format. Not null. Length < 128 characters                                                        |
| user           | A JSON object representing the user this event was logged for; see below                                          | Escaped JSON string including the keys 'custom' and 'customIDs'. A userID or customID must be provided. |
| timeuuid       | A unique UUID or timeUUID used for deduping. If omitted, will be generated but will not be effective for deduping | UUID format                                                                                             |

Please refer to docs for the [Statsig User Object](https://docs.statsig.com/client/concepts/user#user-attributes) for available fields. An example would look like:

```
{
  userID: "12345",
  customIDs: {
    stableID: "<device_id_here>",
    ...
  }
  email: "12345@gmail.com",
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.40 Safari/537.36",
  ip: "192.168.1.101",
  country: "US",
  locale: "en_US",
  appVersion: "1.0.1",
  systemName: "Android",
  systemVersion: "15.4",
  browserName: "Chrome",
  browserVersion: "45.0",
  custom: {
    new_user: "false",
    age: "22"
    ...
  },
}
```

<b>Metrics</b>

Make sure to include all of metric_value, numerator, and denominator, writing `cast(null as double)` for numerator and denominator if you are omitting them (or conversely for metric_value if sending numerator/denominator).

| Column       | Description                                                                                                                   | Rules                                                                                                                                                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unit_id      | The unique user identifier this metric is for. This might not necessarily be a user_id - it could be a custom_id of some kind | String format. Make sure this is in the same format as your logged unit_ids                                                                                                                                                                  |
| id_type      | The id_type the unit_id represents.                                                                                           | String format. Must be a valid id_type. The default Statsig types are user_id/stable_id, but you may have generated custom id_types. Make sure this matches (case sensitive) a customID in your project, or you won't get experiment results |
| date         | Date of the daily metric                                                                                                      | Read as string format; can be written as ISO date. Statsig's dates are calculated in PST - we'll load custom metrics to whatever date you use here                                                                                           |
| metric_name  | The name of the metric                                                                                                        | String format. Not null. Length < 128 characters                                                                                                                                                                                             |
| metric_value | A numeric value for the metric                                                                                                | Double format. Metric value, or both of numerator/denominator need to be provided for Statsig to process the metric. See details below                                                                                                       |
| numerator    | Numerator for metric calculation                                                                                              | Double format. Required for ratio metrics. If present along with a denominator in any record, the metric will be treated as ratio and only calculated for users with non-null denominators                                                   |
| denominator  | Denominator for metric calculation                                                                                            | Double format. See above                                                                                                                                                                                                                     |

### Scheduling

Because you may be streaming events to your tables or have multiple ETLs pointing to your metrics table, Statsig relies on you signalling that your metric/events for a given day are done.

To do this, write a dataset with the single column `finished_date`, which contains all dates of data which have been written to Statsig. For example, once you have written data for `2022-06-22` you would insert a record with `finished_date` of `2022-06-22` to trigger ingestion of data from up to and including `2022-06-22`.

Unlike some other integrations like Snowflake, for S3 Statsig will skip dates; if your latest finished date is `2022-06-22` and you insert `2022-07-01`, we will ingest all data as of `2022-07-01` and infer that data for dates between (e.g. `2022-06-25`) is loaded.

Alternatively, you can use the `mark_data_ready` API and send a timestamp for which the data previous to that timestamp has finished loading into your container.

<a name="checklist"></a>

#### Checklist

These are common errors we've run into - please go through and make sure your setup is looking good!

- Field names are set incorrectly
- The `id_type` is set correctly
  - Default types are `user_id` or `stable_id`. If you have custom ids, make sure that the capitalization and spelling matches as these are case sensitive (you can find your custom ID types by going to your Project Settings in the Statsig console).
- Your ids match the format of ids logged from SDKs
  - In some cases, your data warehouse may transform IDs. This may mean we can't join your experiment or feature gate data to your metrics to calculate pulse or other reports. You can go to the Metrics page of your project and view the log stream to check the format of the ids being sent (either `User ID`, or a custom ID in `User Properties`) to confirm they match
