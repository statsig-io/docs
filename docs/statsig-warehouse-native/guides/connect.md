---
title: Connect Your Warehouse
slug: /statsig-warehouse-native/guides/connect
sidebar_label: Overview
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

To run analysis on your warehouse, Statsig needs to connect to your warehouse via a service user. You control the access this user gets to your warehouse. In general, Statsig will require:

- Read access to metric data and exposures data
- Write access to an isolated Statsig Staging database for writing results and exporting data
- Access to run jobs and queries

## Choose Your Warehouse

The following warehouses/tools are currently supported in Statsig Warehouse Native:

- [Snowflake](../connecting-your-warehouse/snowflake.md)
- [Athena](../connecting-your-warehouse/athena.md)
- [Bigquery](../connecting-your-warehouse/bigquery.md)
- [Databricks](../connecting-your-warehouse/databricks.md)
- [Redshift](../connecting-your-warehouse/redshift.md)
- [Trino](../connecting-your-warehouse/trino.md)
- [Clickhouse](../connecting-your-warehouse/clickhouse.md)
- [Fabric](../connecting-your-warehouse/fabric.md)
