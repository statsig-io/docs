---
title: Metric Examples
slug: /statsig-warehouse-native/configuration/metric-examples
sidebar_label: Metric Examples
keywords:
  - owner:craig
last_update:
  date: 2025-05-02
---

For customers transitioning from other Warehouse Native Vendors, the format of metrics should be similar and generally customers have been able to use APIs to fetch remote configurations, translate them, and post them to Statsig without issue.

For customers migrating from in-house systems, there may be gaps in translation between how they think about experiment metrics and how Statsig handles them. This page is intended as a collection of common use cases and how they're handled in Statsig.

## User Revenue from a Wide Table

In many cases, companies will have a primary source-of-truth table about user engagement with one row per user-day and many columns representing actions taken or other values. This is very easy to integrate with Statsig.

First, enter the table path and optionally a partition column to use for date partitioning:

![configuration](/img/metric_examples_configuration.png)

Then, configure your timestamp field and ID types. Add any custom SQL aliases for other users, e.g. dividing revenue by 100 to convert from cents to dollars.
![initials](/img/metric_examples_initials.png)

Go to the metrics tab, press create, configure your name/source, and then configure a sum metric on the column with the revenue value.

![create_revenue](/img/metric_examples_create_revenue.png)

![configure_revenue](/img/metric_examples_configure_revenue.png)

### How it works in experiments

First, Statsig aggregates each unit-level record across the days they are enrolled in the experiment.

Then, Statsig will calculate the mean unit-level revenue per experiment group, imputing 0s for all exposed users with no revenue.

Statsig provides a description of this in-product for any user who wants to learn more:
![aggregation_description](/img/metric_examples_configuration.png)



## Current Account Value

Often, you will want to understand if your experiment has altered the "state" of users. Let's say you care about the current account value today on users in test vs. control of your experiment - have you helped users grow their account?

On your end, you'll just need a table or query that tracks users' account values each day. Then, set up a metric source pointing to that table or query.



Go to the metrics tab, press create, configure your metric name & source, and then configure a latest value metric on the column with the account value.

![create_account](/img/metric_examples_create_account.png)

![configure_account](/img/metric_examples_configure_account.png)

### How it works in experiments

First, at unit level, Statsig calculates each day's latest non-null value within any cohort bounds and takes the latest value from the latest day available. 

Then, Statsig will calculate the mean unit-level value per experiment group on each day, imputing 0s for all exposed users with no value.

Statsig provides a description of this in-product for any user who wants to learn more: 
![Screenshot 2025-03-27 at 11 33 31 AM](https://github.com/user-attachments/assets/7fe6af8f-02a9-45f4-ae3f-5c682757e571)




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

In our example, we want to measure the user participation within 7 days. So you can pick 'Custom Attribution Window' as your rollup mode and set start = 0 end = 6 to define a 7-day window. Option to enable 'Only include units with a completed window' to exclude users who haven't reached the full 7-day period from your analysis. 
![Screenshot 2025-03-27 at 10 47 02 AM](https://github.com/user-attachments/assets/0632de2f-dc8c-44c0-85c1-39e8a6a6f070)


### How it works in experiments

First, at unit level, Statsig will create a 0/1 flag if the event is triggered during the specified time window. 

Then, at the group level, the mean is calculated as the SUM of the unit-level flags, divided by the count of UNIQUE UNITS exposed to the experiment.

Statsig provides documentation of this for any user who wants to learn more: https://docs.statsig.com/statsig-warehouse-native/metrics/unit-count-window 


## User Funnel Metric

A common analysis in experimentation is understanding how a new feature impacts dropoff rates at each step of a user funnel.

To create a funnel metric in Statsig, you need an event table that records each step of the events you want to track. The setup for your metric source follows the same process as described earlier.

When you navigate to the metric catalog, select 'Funnel' as your metric type. Choose the unit level for your funnel steps – this can be a distinct count of users or sessions based on what you want to measure.
![Screenshot 2025-03-27 at 11 39 01 AM](https://github.com/user-attachments/assets/76c815a1-14a6-4d8c-853e-10460f38d4a6)

Then, you cam define your funnel steps, specifying the sequence of events users go through.

![Screenshot 2025-03-27 at 11 41 16 AM](https://github.com/user-attachments/assets/91d50945-ba23-47d0-b0e4-85308a0e404c)

In the Advanced Settings, you can further customize your funnel metric to fit different use cases. Options include specify calculation window, measure time to convert, treat exposure as initial funnel event, etc.

These settings provide full flexibility, allowing you to tailor the funnel metric based on your specific analysis needs.
![Screenshot 2025-03-27 at 11 42 15 AM](https://github.com/user-attachments/assets/a6de4690-83ad-49ed-af9a-4eef9c6a9700)


### How it works in experiments

First, at unit level, a 1/0 (or session-count number for session funnels) metric is constructed for each step of the funnel. This flag is 1 if the unit completed that step some time after all previous steps were completed in order. If using a session-level funnel, it's the number of sessions where that is true, e.g. all previous steps were completed in order for that session key.

Then, at the group level, the stepwise mean is calculated as the total of each step's metric divided by the total metric from the previous step. The overall mean is calculated as the units/sessions that completed the funnel divided by the unit/sessions that started the funnel.

Statsig provides a description of this in-product for any user who wants to learn more: 
![Screenshot 2025-03-27 at 11 45 42 AM](https://github.com/user-attachments/assets/84c22973-af41-495d-a943-f0f7436050ee)



## User Retention Rate

A retention metric is a great way to measure changes in user stickiness and product growth with the new feature you've built.

To create a retention metric in Statsig, you'll need an event table that captures the key activities indicating user retention.  The setup for your metric source follows the same process as described earlier.

When you navigate to the metric catalog, select 'Retention' as your metric type. Configure the retention period and look back window. For example, if you set your 'Retention Period End' to be 14 and retention lookback window to be 7, retention is measured as whether the user has triggered the retention event between day 8 and day 14. 
![Screenshot 2025-03-27 at 2 40 05 PM](https://github.com/user-attachments/assets/e418815e-505c-4356-9922-d706bebb053c)

You also have the option to "Use a different start and completion event for retention calculations" if you don’t want to use exposure as the starting event or if you want to define a specific subset of events as your retention event.
For example, based on the setup shown in the screenshots, we will be measuring the week 2 retention rate of users who made a purchase in week 1.
![Screenshot 2025-03-27 at 2 43 41 PM](https://github.com/user-attachments/assets/d3e12922-3767-4a05-987b-e16df126ea41)

In the Advanced Settings, you can configure what's the ID type for your retention metric. 
![Screenshot 2025-03-27 at 2 48 21 PM](https://github.com/user-attachments/assets/cdf184a4-cd3a-4622-8669-0d029b1e76dc)


### How it works in experiments

First, for each unit per day, Statsig checks if the retention start event is triggered and assigns a 0/1 flag, which serves as the denominator of the calculation.

Next, Statsig checks if the retention completion event occurs within the specified time window and assigns a 0/1 flag, which serves as the numerator of the calculation.

Finally, at the group level, retention is calculated as sum(numerator) / sum(denominator) to determine the overall retention rate.

Statsig provides a description of this in-product for any user who wants to learn more:
![Screenshot 2025-03-27 at 2 48 43 PM](https://github.com/user-attachments/assets/94843265-ed43-4bce-954f-3f64ec2d380f)

