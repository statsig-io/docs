---
title: Pulse Metrics
sidebar_label: Pulse Metrics
slug: /metrics/pulse
keywords:
  - owner:shubham
---

# Pulse Metrics

Experiments with Statsig use **Pulse** to compute and communicate results. The metric type is important in computing and interpreting the final result.

Most metric types are aggregated across all users in the group; however, some metric types that use ratios are only aggregated across participating users (users that have non-null value for that metric). We'll walk through the various types of metrics available in experiments and how to interpret their pulse results.

## Pulse Statistics by Metric Type


| Metric Type                           | Total                                                                    | Mean                                                                                                                                                                    | Units               |
| ------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| event_count                           | Sum of events (99.9% winsorization applied)                              | Average events per user (99.9% winsorization applied)                                                                                                                   | All users           |
| event_dau                             | Sum of event DAU (distinct user-day pairs)                               | Average event_dau value per user per day. Note that we call this "Event Participation Rate" as this can be interpreted as the probability a user is DAU for that event. | All users           |
| sum                                   | Total sum of values (99.9% winsorization)                                | Average value per user (99.9% winsorization)                                                                                                                            | All users           |
| mean                                  | Overall mean value                                                       | Overall mean value                                                                                                                                                      | Participating users |
| event_user                            | Count of distinct users that have had the event.                         | Average metric value per user per day. Depending on Rollup Mode, can be a one-time event or daily participation rate.                                           | All users           |
| ratio                                 | Not shown                                                                | Overall ratio: sum(numerator values)/sum(denominator values)                                                                                                            | Participating users |
| funnel                                | Not shown                                                                | Overall ratio: sum(numerator values)/sum(denominator values)                                                                                                            | Participating users |
| user: dau, wau, mau_28day             | Not shown                                                                | Average metric value per user per day. The probability that a user is xAU                                                                                               | All users           |
| user: new_dau, new_wau, new_mau_28day | Count of distinct users that are new xAU at some point in the experiment | Fraction of users that are new xAU                                                                                                                                      | All users           |
| user: retention metrics               | Overall average retention rate                                           | Overall average retention rate                                                                                                                                          | Participating users |
| user: L7, L14, L28                    | Not shown                                                                | Average L-ness value per user per day                                                                                                                                   | All users           |

**Some example metric breakdowns in Pulse:**

![pulse 1](https://github.com/user-attachments/assets/aa7e1063-6473-4e4e-9ca4-7074f5a0c450)

![pulse 2](https://github.com/user-attachments/assets/7b0b1d99-c720-480e-8671-f5f696485500)

## Event Count and Event DAU in Pulse

:::important event_dau Legacy Support

event_dau metrics are now in legacy support only and are no longer created for new events. Existing event_dau metrics will continue to be available for any of your new experiments and will continue to be computed daily. For all new events, you should create an event_user metric to measure daily active users.

:::

From [Metrics 101](/metrics/metrics-from-events),

- [**event_count**](/metrics/metrics-from-events#event-count-metric) measures the volume of the activity based on count of events triggered
- [**event_dau**](/metrics/metrics-from-events#event-dau-metric) measures unique daily users who triggered a given event

For example, the table below shows the **event_count** and **event_dau** metrics for two event types,_Page Views_ and _Add to Cart_, for three users over three days.
![image](https://user-images.githubusercontent.com/1315028/187719553-c7e5c186-5dfe-4521-8bfb-1bb4b8cdb38d.png)

Over the duration of an experiment, Pulse results measure the change in:

- the **mean** event_count, or the average event count per user
- the **mean** event_dau, or average active days per user; we call this the **Daily Event Participation Rate**

For example, the table below shows the **Total event_count**, **Total Units**, and **Mean event_count** over the same three days as above, now in the context of an experiment.

![image](https://user-images.githubusercontent.com/1315028/187721781-3240ebc6-43ae-4fd8-ac44-c3493308e127.png)

Similarly, the table below shows the **Total event_dau**, **Total Units**, and **Mean event_dau** over the same three days of the experiment. Alice was 'active' on three days for the _Page View_ event and on one day for the _Add to Cart_ event. Therefore, average event*dau for Alice is 3/3 for the \_Page View* event and 1/3 for the _Add to Cart_ event. In other words, Alice's **daily participation rate** is 1.00 for the _Page View_ event and 0.33 for the _Add to Cart_ event so far in the experiment. Statsig aggregates this average event_dau for each user in the experiment, with each user weighted equally.

![image](https://user-images.githubusercontent.com/1315028/187721834-b8e94f15-f3ee-4584-924b-96e424ddcd0c.png)

To measure the change in engagement for a call to action link or button, use event_count to measure the change in average clicks per user, and use event_dau to measure the change in users’ daily participation rate for the click.

:::info Event Count and Event DAU in Custom Metrics

When creating a custom ratio metric, use event_count to include all events (counting all events triggered by the same user). Use event_user (or event_dau, if available) to count unique active users on a given day (all events triggered by the same user are counted as one).

:::

## Winsorization

To reduce the impact of outliers, Statsig caps _event_count_ and _sum_ metric types at the 99.9th percentile (by default). This mitigates the risk of bots and extreme values significantly swaying experiment results.

The winsorization 99.9th percentile is computed using all non-zero and non-null values of the metric, and then all values of exceeding this limit are replaced with it.

Warehouse-Native (WHN) allows for more customization of winsorization by metric and by percentile.

## Frequently Asked Questions

**1. Is it possible for a ratio metric to move in the opposite direction than both the numerator and denominator metrics?**

Yes, it is possible for the ratio to rise while both the numerator and denominator metrics decline. For example, this happens when the denominator is falls more than the numerator. As a best practice, Statsig recommends tracking the numerator and denominator as independent metrics when monitoring ratio metric. Ratio metrics are often subject to statistical noise and can be tricky to use for obtaining a statistically significant result.

**2. For ratio metrics, how does Statsig determine _participating users_?**

Ratio metrics are computed only for users that have a non-zero value in the denominator, i.e. the user must have triggered the denominator event on a given day to be included in the daily ratio. Users that don't trigger the denominator event during an experiment are not included in the test vs. control comparison of a ratio metric.

**3. What is the difference in metrics between One-Time Event vs Daily Participation Rate?**

The distinction between these in only relevant in the context of an experiment.
Daily participation rate counts the number of _days_ a user has that event, divided by the number of _days_ the user has been in the experiment.
One time event is a binary metric that checks whether the user has that event _at least once_ during their time in the experiment.
