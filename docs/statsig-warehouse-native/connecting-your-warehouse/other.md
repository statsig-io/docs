---
title: Other Warehouses
slug: /statsig-warehouse-native/connecting-your-warehouse/other
sidebar_label: Other Warehouses
keywords:
  - owner:craig
last_update:
  date: 2025-09-18
---

## Other Warehouses

Statsig's architecture is set up to add new warehouses relatively easily. We are selective with which warehouses we choose to support long-term, but generally we will be happy to discuss your needs and consider building a solution that works for you on your cloud provider.

In general, Statsig will access your warehouse through API calls and will need corresponding information on the address of your cluster and authentication information; very similar to running queries through datagrip, python, or other services.

## Permissions

Statsig will require read permissions on any input tables for your analysis. Statsig also requires full CRUD (create/read/update/delete) permissions on a "sandbox" where staging data and other intermediate data artifacts will be stored as part of experimentation pipelines.

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
