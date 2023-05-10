---
title: Statsig Warehouse Native
slug: /statsig-warehouse-native/introduction
sidebar-label: Statsig Warehouse Native
description: Statsig in your warehouse
---

![Slide 4_3 - 2](https://user-images.githubusercontent.com/108023879/187794828-333622ec-6db2-4936-987d-efbef4ba9a47.png)

## Introduction

Statsig Warehouse Native is a version of Statsig that runs calculations in your warehouse. This version of Statsig will calculate intermediate results fully within your warehouse and only export a small, aggregated, and anonymized dataset that's displayed in your Statsig console.

This is an appealing option for customers who are privacy sensitive or who are already using other solutions for experiment assignment. Our [support team](mailto:support@statsig.com) can help you decide if Statsig Warehouse Native is a good fit for your experimentation needs.

### How it works

:::info
Statsig Warehouse Native is only available for Enterprise contracts. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you are interested in evaluating Statsig Warehouse Native.
:::

For any online experimental analysis, the high level steps are to:

1. Assign users to groups and test interventions on users in test groups
2. Identify when a user was first enrolled into an experiment group
3. Calculate user-level metrics for users based on data after their first exposure event
4. Aggregate those metrics and perform statistical analyses to inform your business decisions

With Statsig Warehouse Native, the first step is modular. You can use Statsig's feature flags and experimentation, your own in-house system, or any number of third-party vendors. When you want to run an analysis, all you need is:

- Assignment data containing a unit identifier, the experiment group that units were assigned to, and a timestamp
- Event or metric data with a user identifier, a value, and a timestamp

Statsig takes care of steps 2, 3 and 4. In the Statsig console, you'll configure how you want to aggregate your metric data, and we'll join it to exposures, aggregate, and perform statistical techniques in your warehouse using SQL commands. We'll save and download a summary set with the group-level information we need to perform statistical tests.

With Statsig Warehouse Native, you set up connections to your source data using basic SQL queries and define metrics with aggregations and filters. Statsig will run a short, SQL-based [data pipeline](pipeline-overview.md) in your warehouse to aggregate and analyze those results. All we download is a small result set with group-level summary data at the end.

![Simple-view](https://user-images.githubusercontent.com/102695539/236989885-a30c24d8-26c9-4f8e-b596-3565a0be018d.png)

This process is fully transparent, and we run algorithms like CUPED in SQL to avoid black boxes and inconsistent results. Nonetheless, the Statsig Warehouse Native pipeline supports many of the advanced features offered in Statsig, such as:

- Support for multiple unit types - the same event can be used in experiments for a user_id, company_id, etc.
- Dimensional breakdowns - set up metrics to calculate dimensional breakdowns as well as a topline view
- Timeseries and days-since-exposure breakdowns
- Exploratory queries - filter and group results by user-level attributes
- CUPED, Sequential Testing, Outlier Removal, and more

### Getting Started

Statsig Warehouse Native is only available for Enterprise contracts. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you are interested in evaluating Statsig Warehouse Native.

Once you have access, check out the [getting started](getting-started.md) page for a quick guide on how to get pulse results in Statsig.

For more information on how Statsig processes data on your warehouse, refer to the [pipeline overview](pipeline-overview.md) and the best practices information available in the sidebar.
