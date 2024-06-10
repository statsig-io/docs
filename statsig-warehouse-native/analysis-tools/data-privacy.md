---
title: Data Privacy
slug: /statsig-warehouse-native/data-privacy
sidebar_label: Data Privacy
description: Understand what leaves your warehouse
---

One advantage of using Statsig Warehouse Native is that user-level data comes directly from your source of truth without needing to be copied or leave your warehouse. This page walks through how Statsig interacts with your warehouse.

## Permissions

The permissions Statsig requires are:

- Job Access (where applicable) to run queries as a service user
- Read Access on event, metric, and exposure data you want to use for experiment analysis
  - Statsig only selects from these tables
- Read, Write, Delete access in a Statsig Staging environment you specify
  - In Bigquery this is a dataset
  - In Snowflake and Redshift this is a schema
  - In Databricks this is a database

Best practice is to create a new dataset for Statsig Staging to make sure this environment is isolated. Statsig only modifies tables it creates as part of analysis.

## What Statsig Reads

Statsig only reads two forms of data, both of which are very small (generally in Kilobytes)

- Small samples used for validating setup in the following surfaces:
  - Metrics Tab
  - Metric Source Tab
  - Assignment Source Tab
  - (If using Statsig exposures) Users Tab
- Aggregated results at the group or experiment level. This data doesn't contain user IDs and is rolled up at the group, metric, group/metric or experiment level. This includes:
  - Existing groups and group sizes for experiment setup
  - Pulse Results
  - Total exposure counts for power analysis
  - Daily total metric values
  - Experiment-level health checks (e.g. distinct metrics, count of exposures)

##

During analysis, data stays in your warehouse. Intermediate tables and results are written to the Statsig data staging set. When the results of Health Checks or Pulse become available, Statsig consumes those result sets and stores them on its servers as well (usually < 1000 rows):

![Analysis Flow](https://user-images.githubusercontent.com/102695539/264110212-b9e07098-cd3a-4107-aa3f-6740fc3d8b7a.png)

## Data Retention

Customer data contained within exposure events when using the SDK for assignment is retained for a maximum of 30 days purely for diagnostics and debugging purposes.
Statsig will automatically remove any customer data no longer than 30 days after the events are sent to our system.

