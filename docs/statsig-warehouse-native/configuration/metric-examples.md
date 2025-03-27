---
title: Metric Examples
slug: /statsig-warehouse-native/configuration/metric-examples
sidebar_label: Metric Examples
keywords:
  - owner:craig
last_update:
  date: 2025-03-20
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

First, same as the previous example, enter the table path and optionally a partition column to use for date partitioning in your metric source. 

Then, configure your timestamp field and ID types. Add any custom field if necessary. 

Go to the metrics tab, press create, configure your metric name & source, and then configure a latest value metric on the column with the account value.

<img width="504" alt="Create Account Value" src="https://github.com/user-attachments/assets/2eccb731-6dc7-4a30-863a-fc6d0b984d9b" />
<img width="1541" alt="Configure Account Value" src="https://github.com/user-attachments/assets/6ca8eabc-759e-45ca-babd-ce950c5def58" />

### How it works in experiments

First, at unit level, Statsig calculate each day's latest non-null value within any cohort bounds and take the latest value from the latest day available. 

Then, Statsig will calculate the mean unit-level value per experiment group on each day, imputing 0s for all exposed users with no value.

Statsig provides a description of this in-product for any user who wants to learn more:
<img width="658" alt="Latest Description" src="https://github.com/user-attachments/assets/1bf53269-57b7-40af-8004-399e9b6cad52" />



## Users D7 Participation

A common metric in experimentation is measuring whether exposed users take specific actions within a defined time window.

On your end, you will just need to provide an event table that records user action with essential columns such as user_id, timestamp and event type. Similarly as above, configure your timestamp field and ID types. 
![Screenshot 2025-03-27 at 10 37 49 AM](https://github.com/user-attachments/assets/148469b7-df7b-4f39-af87-1ee9dd5ee431)
![Screenshot 2025-03-27 at 10 39 14 AM](https://github.com/user-attachments/assets/5bd9fcc7-54e1-4a15-a8c4-8d9950631d24)

Then you can navigate to the metric catalog and create a unit count metric using the defined metric source. You could leverage the 'Add Filter' option to focus on specific events relevant to your designed metric. 

![Screenshot 2025-03-27 at 10 43 05 AM](https://github.com/user-attachments/assets/04712a16-8dac-4c1f-a327-1854fd15d2aa) 

When defining the metric, you can choose from several rollup modes:
- Daily Participation Rate -> it measures the days a unit was active after being exposed to the experiment divided by its total days in the experiments
- On-Time Event -> it measures if a unit performed an action any time after being exposed to the experiment
- Latest Value -> it measures if a unit passed metric filters on their last observed record
- Custom Attribution Window -> to include data for each unit in a specified time window after being exposed to the experiment

![Screenshot 2025-03-27 at 10 40 08 AM](https://github.com/user-attachments/assets/959c5dbd-eecf-4797-bc87-7970ccda4947)

In our example, we want to measure the user participation within 7 days. So you can pick 'Custom Attribution Window' as your rollup mode and set start = 0 end = 6 to define a 7-day window. Otion to enable 'Only include units with a completed window' to exclude users who haven’t reached the full 7-day period from your analysis. 
![Screenshot 2025-03-27 at 10 47 02 AM](https://github.com/user-attachments/assets/0632de2f-dc8c-44c0-85c1-39e8a6a6f070)


### How it works in experiments

First, at unit level, Statsig will create a 0/1 flag if the event is triggered during the specified time window. 

Then, at the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

Statsig provides a documentation of this for any user who wants to learn more: https://docs.statsig.com/statsig-warehouse-native/metrics/unit-count-window 

