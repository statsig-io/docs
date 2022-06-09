---
title: Azure Upload
---

## Overview

Statsig allows you to upload your pre-computed metrics data to a secure Azure blob owned by Statsig. We'll ingest all of your uploaded metrics for a day once you've signalled that a given day is finished uploading.

## Getting Started

Reach out in slack or to your primary Statsig point of contact. We'll set up an Azure blob storage container and provide you with credentials to connect.

## Filesystem Format

We will expect data in your azure container to be saved in parquet format.

To allow for daily uploads, please set up a folder `statsig_user_metrics` with daily folders labelled according to ISO-formatted dates (`YYYY-MM-DD`). You can add metric-level (or other) partition folders underneath these as needed; we will be reading the daily folders in their entirety.

For example, your data for `2022-05-22` would go into `<container_name_from_statsig>/statsig_user_metrics/2022-05-22/`

## Table Format

Please make sure your data conforms to the following schema:

| Column       | Description                                                                                                                   | Rules                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unit_id      | The unique user identifier this metric is for. This might not necessarily be a user_id - it could be a custom_id of some kind | Make sure this is in the same format as your logged unit_ids                                                                                                                                                                  |
| id_type      | The id_type the unit_id represents.                                                                                           | Must be a valid id_type. The default Statsig types are user_id/stable_id, but you may have generated custom id_types. Make sure this matches (case sensitive) a customID in your project, or you won't get experiment results |
| date         | Date of the daily metric                                                                                                      | Statsig's dates are calculated in PST - we'll load custom metrics to whatever date you use here                                                                                                                               |
| metric_name  | The name of the metric                                                                                                        | Not null. Length < 128 characters                                                                                                                                                                                             |
| metric_value | A numeric value for the metric                                                                                                | Metric value, or both of numerator/denominator need to be provided for Statsig to process the metric. See details below                                                                                                       |
| numerator    | Numerator for metric calculation                                                                                              | Required for ratio metrics. If present along with a denominator in any record, the metric will be treated as ratio and only calculated for users with non-null denominators                                                   |
| denominator  | Denominator for metric calculation                                                                                            | See above                                                                                                                                                                                                                     |

#### Scheduling

Because you may be streaming events to your tables or have multiple ETLs pointing to your metrics table, Statsig relies on you
signalling that your metric/events for a given day are done.

To do this, create a separate folder in your blob called `statsig_user_metrics_signal` that has data from a table with a single column (`finished_date`). Once you are finished uploading a day's data, add a record
with that date. For example, once all of your metrics data is loaded into `statsig_user_metrics/2022-05-22`, you would insert `2022-05-22` into the data in `statsig_user_metrics_signal`.

Statsig expects you to load data in order. For example, if you have loaded up to `2022-05-22` and signal that `2022-05-24` has landed,
we will wait for you to signal that `2022-05-23` has landed, and load that data before we ingest data from `2022-05-24`

<a name="checklist"></a>

#### Checklist

These are common errors we've run into - please go through and make sure your setup is looking good!

- Field names are set incorrectly
- The `id_type` is set correctly
  - Default types are `user_id` or `stable_id`. If you have custom ids, make sure that the capitalization and spelling matches as these are case sensitive (you can find your custom ID types by going to your Project Settings in the Statsig console).
- Your ids match the format of ids logged from SDKs
  - In some cases, your data warehouse may transform IDs. This may mean we can't join your experiment or feature gate data to your metrics to calculate pulse or other reports. You can go to the Metrics page of your project and view the log stream to check the format of the ids being sent (either `User ID`, or a custom ID in `User Properties`) to confirm they match
