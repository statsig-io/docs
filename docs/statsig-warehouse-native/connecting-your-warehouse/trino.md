---
title: Trino Connection [Beta]
slug: /statsig-warehouse-native/connecting-your-warehouse/trino
sidebar_label: Trino [Beta]
keywords:
  - owner:vm
last_update:
  date: 2025-06-10
---

:::warning
The Trino connector for warehouse native is fully functional, but some functionality may not be performance-optimized or may have minor syntax errors until the beta period is over.

Please reach out to support for assistance getting started with Trino on Statsig.
:::

## Overview

To set up connection with Trino, we need the following:

- The host address and port of the Trino cluster
- The catalog and schema containing the relevant data for analysis data
- A user that will be used to run queries. This requires read permissions on source data, and read/write access to a statsig schema
- The region of your trino cluster
- Relevant IAM/Permission data (e.g. access keys, ARNs, and Role External IDs)

## Grant Permissions to Statsig's Service Account

You need to grant some permissions for Statsig from your cloud provider's console in order for us to access your Trino data. Statsig requires

- READ on any tables and data you are using for experimentation
- USAGE/WRITE on a Statsig-specific schema we'll use to materialize temp tables and results. This enables us to cache data and perform incremental loads. For example, AWS users will specify which Glue Database and S3 Bucket to use, and we will create a Statsig S3 Subfolder to do our staging operations

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
