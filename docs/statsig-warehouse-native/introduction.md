---
title: Statsig Warehouse Native
slug: /statsig-warehouse-native/introduction
sidebar-label: Statsig Warehouse Native
description: Statsig in your warehouse
---

![Slide 4_3 - 2](https://user-images.githubusercontent.com/108023879/187794828-333622ec-6db2-4936-987d-efbef4ba9a47.png)

## Introduction

Statsig Warehouse Native is a version of Statsig that runs data computations on top of your warehouse. We'll calculate intermediate results fully within your warehouse, and only export a small, aggregated, and anonymized dataset that we'll display in your Statsig console.

This is an appealing option for customers who are privacy sensitive or who are already using other solutions for experiment assignment. See our [comparison page](statsig-vs-statsig-warehouse-native.md) for more context on when to consider using Statsig Warehouse Native.

### How it works

:::info
Statsig Warehouse Native is only available for Enterprise contracts. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you are interested in evaluating Statsig Warehouse Native
:::

For any online experimental analysis, the high level steps are to:

- Assign users to groups, and test an intervention on users in test groups
- Identify group membership, and when a user was first enrolled into an experiment group
- Calculate user-level metrics for users based on data after their first exposure event
- Aggregate those metrics and perform statistical analysis to inform decisions

Statsig Data Warehouse makes the first step modular. You can use Statsig's feature flags an experimentation, your own in-house system, or any number of third-party vendors. By the time you run an analysis, all you need are:

- Assignment data with a user identifier, the experiment group that they were assigned to, and a timestamp
- Event or metric data with a user identifier, a value, and a timestamp

Statsig takes care of steps 3 and 4. You'll tell us **how** to aggregate your metric data, and we'll join it to exposures, aggregate, and perform statistical techniques in your warehouse using SQL commands. We'll save and download a summary set with information like group values, variance, and inputs like covariance for techniques like the delta method.

With Statsig Warehouse Native, you set up connections to that source data using basic SQL queries and define metrics with aggregations and filters. Statsig will run a short, SQL-based [data pipeline](pipeline-overview.md) in your warehouse to aggregate and analyze those results. All we download is a small result set with group-level summary data at the end.

![Simple-view](https://user-images.githubusercontent.com/102695539/236989885-a30c24d8-26c9-4f8e-b596-3565a0be018d.png)

This is intended to be very transparent; and we've deliberately chosen to perform algorithms like CUPED in SQL to keep things totally visibile. Nonetheless, our pipeline supports many of the advanced features offered in Statsig, such as:

- Support for multiple unit types - the same event can be used in experiments for a user_id, company_id, etc.
- Dimensional breakdowns - set up metrics to calculate dimensional breakdowns as well as a topline view
- Timeseries and days-since-exposure breakdowns
- Exploratory queries - filter and group results by user-level attributes
- CUPED, sequential testing,

### Getting Started

For a full tutorial, check out the [getting started](getting_started.md) page. We also have a [quick start guide](quick-start-guide.md) for those who want to quickly see an experiment result in Statsig.

For more information on how Statsig processes data on your warehouse, refer to the [pipeline overview](pipeline-overview.md) and the best practices information available in the sidebar.
