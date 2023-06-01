---
title: Databricks Connection
slug: /statsig-warehouse-native/connecting-your-warehouse/databricks
sidebar_label: Databricks
---

## Overview

To set up a connection with Databricks, you will need the following:

- Your Databricks Server Hostname
- An HTTP Path to a Cluster or SQL Warehouse
- A staging database for writing results and intermediate tables into
- An access token with read access on your experiment data and write access to the staging database

Start by enabling the Databricks source in your project settings.

## Getting Connection Information

1. Follow the [Databricks documentation](https://docs.databricks.com/integrations/jdbc-odbc-bi.html#get-connection-details-for-a-cluster) to get the hostname and http path of the cluster you'll use to run your experimental analaysis. You may want to create a specific clsuter for this use case.

![credentials](https://github.com/craig-statsig/pics/assets/102695539/e6329ea8-92ae-43af-95dc-7bce2a26a3e6)

<br />

2. Follow [these instructions](https://docs.databricks.com/dev-tools/auth.html#databricks-personal-access-tokens) to get the personal access token that will be used to calculate experiment results on your warehouse.

![databricks info](https://user-images.githubusercontent.com/108023879/188731186-ecdc0872-de06-4576-b387-fa08bdca447d.png)

3. Create or choose a database to use. For example, you could run this sql in a notebook:

```
staging_database_name = '<my_name>'
spark.sql(f"CREATE DATABASE IF NOT EXISTS {staging_database_name}")
```
