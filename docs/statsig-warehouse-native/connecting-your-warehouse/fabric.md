---
title: Fabric Connection
slug: /statsig-warehouse-native/connecting-your-warehouse/fabric
sidebar_label: Fabric
keywords:
  - owner:xhuang
last_update:
  date: 2025-09-15
---

## Overview

To set up connection with Microsoft Fabric, you must start from the [Fabric Workload Hub](https://app.fabric.microsoft.com/workloadhub/detail/Statsig.Statsig.Statsig?experience=fabric-developer).

## Add Statsig to your Fabric workspace

1. On the [Fabric Workload Hub](https://app.fabric.microsoft.com/workloadhub/detail/Statsig.Statsig.Statsig?experience=fabric-developer), click the 'Add Workload' button to add Statsig to your selected workspace.
![image](https://github.com/statsig-io/docs/blob/3b76788d87289164686af6b7deb196a94f861a65/docs/assets/add_fabric_statsig_workload.png)

2. Add Statsig as a new item in your Fabric workspace.

3. Provide connection details to connect Statsig to your warehouse and data source
![image](https://github.com/statsig-io/docs/blob/3b76788d87289164686af6b7deb196a94f861a65/docs/assets/edit_fabric_statsig_warehouse_connection.png)


### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from) to add Statsig's IP addresses in your firewall to only allow traffic originating from Census to access your Microsoft Fabric account. You can specify IP addresses to allow as part of [Microsoft Entra's conditional access](https://learn.microsoft.com/en-us/fabric/security/protect-inbound-traffic#entra-conditional-access).


