---
title: Redshift Connection
slug: /statsig-warehouse-native/connecting-your-warehouse/redshift
sidebar_label: Redshift
---

## Overview

To set up connection with Redshift, Statsig needs the following information

- Cluster Endpoint
- A service user Username
- A service user Password
- A staging schema that Statsig can write results to

You can find this information in your aws console within your specific cluster, as shown in the image below. (Open image in new tab for a bigger image). The service user should be able to read necessary experiment data, and be able to write to the Statsig staging schema you specify.

![Frame 1](https://user-images.githubusercontent.com/108023879/187515405-17fa7d90-44e1-422f-87a7-cfde090637ed.png)

When you save the connection, we will run a series of tiny commands to test permissions -- e.g. creating a temp table, running a select/delete statement on that table, and then dropping that table.

## SSH Tunneling

For Redshift connections, we also allow users to create an SSH tunnel into their Redshift cluster for a more secure and private access to the database.
To enable access, Statsig requires:

- SSH Host
- SSH Port
- SSH User

Statsig will use this information to generate an SSH key. Please add this generated key to your `~/.ssh/authorized_keys` file on your SSH proxy machine to enable SSH tunneling.

### What IP addresses will Statsig access data warehouses from?

[See FAQ](https://docs.statsig.com/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
