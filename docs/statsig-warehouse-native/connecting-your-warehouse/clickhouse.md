---
title: Clickhouse [Beta]
slug: /statsig-warehouse-native/connecting-your-warehouse/clickhouse
sidebar_label: Clickhouse [Beta]
keywords:
  - owner:vm
last_update:
  date: 2025-06-10
---

:::warning
The Clickhouse connector for warehouse native is fully functional, but some functionality may not be performance-optimized or may have minor syntax errors until the beta period is over.

Please reach out to support for assistance getting started with Clickhouse on Statsig.
:::

## Overview

To set up connection with Trino, we need the following:

- The URL to connect to, e.g. https://<ID>.us-east1.gcp.clickhouse.cloud:8443'
  - You can find this by going to the service you want to connect to and clicking "Connect" in the left rail
- The database in your service where statsig will have full CRUD access for writing logged data and intermediate tables
  - We recommend that this is be a separate databse from your production data
- A username/password for a Statsig database user. We recommend making a new, standalone user for audit purposes
- An exposures table to export exposures data logged to Statsig
- An events table to export events data logged to Statsig

![Connection Card](/img/chconnectioncard.png)

To create a user, the easiest way is to run:

```
create user <username> IDENTIFIED WITH sha256_password BY '<password>';
```

But the correct approach will depend on your DB administrator.

## Grant Permissions to Statsig's Service Account

You need to grant some permissions for Statsig in order to access your data and run workflows.

Statsig requires two levels of permission:

- Read-only access to any production data (outside of the data logged to Statsig) you will analyze in analytics or experimentation
- Full CRUD access within the staging database (specified above) where Statsig will write data artifacts to store results for long-running experiments

This can be granted to the Statsig user in SQL by an account with sufficient permissions.

Read:

```
GRANT SHOW TABLES, SHOW COLUMNS, SELECT ON <read_db>.* to <statsig_user>;
```

CRUD:

```
GRANT SHOW TABLES, SHOW COLUMNS, SELECT ON <statsig_db>.* to <statsig_user>;
GRANT CREATE, DROP, DELETE, ALTER, UPDATE, INSERT ON <statsig_db>.* to <statsig_user>;
```

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
