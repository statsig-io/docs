---
title: Databricks Connection
slug: /statsig-warehouse-native/connecting-your-warehouse/databricks
sidebar_label: Databricks
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

## Overview

To set up a connection with Databricks, you will need the following:

- Your Databricks Server Hostname
- An HTTP Path to a Cluster or SQL Warehouse
- A staging database for writing results and intermediate tables into
- An access token with read access on your experiment data and write access to the staging database
- Use either Serverless SQL Warehouse or an always-on cluster. Statsig uses interactive queries during setup (and some analysis) which will fail if the cluster takes several minutes to start up.

Start by enabling the Databricks source in your project settings.

## Note on Databricks Access

For users who use databricks and a dbfs-based deltalake as their primary warehouse, permissions are managed easily for databricks. For customers using databricks as an intermediary to other data sources, you need to make sure that databricks and the Statsig user through databricks has appropriate access to your storage (e.g. S3 for athena tables). Often, permissions are reset at some point which will start to cause errors; to validate this, try creating tables through the Statsig console to verify that the permissions on Statsig's side are sufficient.

## Getting Connection Information

1. Follow the [Databricks documentation](https://docs.databricks.com/integrations/jdbc-odbc-bi.html#get-connection-details-for-a-cluster) to get the hostname and http path of the cluster you'll use to run your experimental analysis. You may want to create a specific cluster for this use case.

![credentials](https://user-images.githubusercontent.com/102695539/242474157-e6329ea8-92ae-43af-95dc-7bce2a26a3e6.png)

<br />

2. Follow [these instructions](https://docs.databricks.com/dev-tools/auth.html#databricks-personal-access-tokens) to get the personal access token that will be used to calculate experiment results on your warehouse. Alternatively, you can follow [these instructions](https://docs.databricks.com/en/administration-guide/users-groups/service-principals.html#manage-personal-access-tokens-for-a-service-principal) to get a personal access token for a service principal. 

![databricks info](https://user-images.githubusercontent.com/108023879/188731186-ecdc0872-de06-4576-b387-fa08bdca447d.png)

3. Create or choose a database to use. For example, you could run this sql in a notebook:

```
staging_database_name = '<my_name>'
spark.sql(f"CREATE DATABASE IF NOT EXISTS {staging_database_name}")
```
### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
