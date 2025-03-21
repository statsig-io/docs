---
title: Metric Examples
slug: /statsig-warehouse-native/configuration/metric-examples
sidebar_label: Metric Examples
keywords:
  - owner:craig
last_update: 2025-03-20 10:47:38 -0700
---

For customers transitioning from other Warehouse Native Vendors, the format of metrics should be similar and generally customers have been able to use APIs to fetch remote configurations, translate them, and post them to Statsig without issue.

For customers migrating from in-house systems, there may be gaps in translation between how they think about experiment metrics and how Statsig handles them. This page is intended as a collection of common use cases and how they're handled in Statsig.

## User Revenue from a Wide Table

In many cases, companies will have a primary source-of-truth table about user engagement with one row per user-day and many columns representing actions taken or other values. This is very easy to integrate with Statsig.

First, enter the table path and optionally a partition column to use for date partitioning:

<img width="1536" alt="Configuration" src="https://github.com/user-attachments/assets/98a75031-abfa-44ae-9574-013f0b879c38" />

Then, configure your timestamp field and ID types. Add any custom SQL aliases for other users, e.g. dividing revenue by 100 to convert from cents to dollars.
<img width="1512" alt="Initial" src="https://github.com/user-attachments/assets/586b847c-c390-4610-bd3d-d322ee9d4715" />

Go to the metrics tab, press create, configure your name/source, and then configure a sum metric on the column with the revenue value.

<img width="502" alt="Create Revenue" src="https://github.com/user-attachments/assets/4bb4e616-78c5-4137-97d0-a4d0ed90ec56" />

<img width="859" alt="Configure Revenue" src="https://github.com/user-attachments/assets/e9769f90-4150-4187-bd1e-0496a07579e4" />

### How it works in experiments

First, Statsig aggregates each unit-level record across the days they are enrolled in the experiment.

Then, Statsig will calculate the mean unit-level revenue per experiment group, imputing 0s for all exposed users with no revenue.

Statsig provides a description of this in-product for any user who wants to learn more:
<img width="651" alt="Aggregation description" src="https://github.com/user-attachments/assets/fceee0b7-8c86-47ae-98a1-b43361bb407d" />

## Current Account Value

Often, you will want to understand if your experiment has altered the "state" of users. Let's say you care about the current account value today on users in test vs. control of your experiment - have you helped users grow their account?

On your end, you'll just need a table or query that tracks users' account values each day. Then, set up a metric source pointing to that table or query.

First, enter the table path and optionally a partition column to use for date partitioning:
<img width="1536" alt="Configuration" src="https://github.com/user-attachments/assets/98a75031-abfa-44ae-9574-013f0b879c38" />

Then, configure your timestamp field and ID types. Add any custom SQL aliases for other users, e.g. dividing revenue by 100 to convert from cents to dollars.

<img width="1512" alt="Initial" src="https://github.com/user-attachments/assets/586b847c-c390-4610-bd3d-d322ee9d4715" />

Go to the metrics tab, press create, configure your name/source, and then configure a latest value metric on the column with the account value.

<img width="504" alt="Create Account Value" src="https://github.com/user-attachments/assets/2eccb731-6dc7-4a30-863a-fc6d0b984d9b" />
<img width="1541" alt="Configure Account Value" src="https://github.com/user-attachments/assets/6ca8eabc-759e-45ca-babd-ce950c5def58" />

### How it works in experiments

First, Statsig aggregates each unit-level's latest value on each day of the experiment, carrying forward for null days to prevent the latest
day from being set to 0.

Then, Statsig will calculate the mean unit-level value per experiment group on each day, imputing 0s for all exposed users with no value.

Statsig provides a description of this in-product for any user who wants to learn more:
<img width="658" alt="Latest Description" src="https://github.com/user-attachments/assets/1bf53269-57b7-40af-8004-399e9b6cad52" />
