---
title: Topline Alerts
sidebar_label: Topline Alerts
slug: /product-analytics/alerts/topline_alerts
keywords:
  - owner:mseger
last_update:
  date: 2025-04-08
---

## Topline Metric Alerts
Topline Metric Alerts are currently in Beta on both Statsig Cloud and Statsig Warehouse Native as part of Statsig's Product Analytics suite. 

Topline Alerts are threshold based (anomaly detection coming soon). On Statsig Cloud they are evaluated every minute for small evaluation windows. On Statsig Warehouse Native you can define the evaluation frequency and lookback window. 

### Configuring a Topline Alert
To configure a Topline Alert, head to **Analytics** -> **Topline Alerts** tab where you can find all your Topline Alerts and configure new ones. Tap **+Create** and name your new alert.  Under alert configuration, there are a few settings, which will differ depending on whether you are on Statsig Cloud or Statsig Warehouse Native- 

**Event/ Metric Source Configuration**

On Statsig Cloud, you will select the event you want to alert on, then choose the aggregation for this event. On Statsig Warehouse Native, you will choose the Metric Source you want to use and filter to the event/ metric you want to alert on. 

In this example alert we're configuring on Statsig Cloud, we're going to set an alert on P90 latency of a Metrics Explorer (MEX query). 

Our event name is "mex_query" and we log latency as a dimension of this event, so we will select the event, choose "P90" aggregation of the "latency" event dimension. You can also apply a filter to the event, for example I could filter out any Statsig internal employee queries. 

We'll see a preview of the event values in the **Alert Preview** section above event configuration. 

<img width="1052" alt="Screen Shot 2025-03-01 at 8 32 31 AM" src="https://github.com/user-attachments/assets/1a8be658-ec02-4ed2-994c-ad39d8df4a5d" />

<img width="1053" alt="Screen Shot 2025-03-01 at 8 42 59 AM" src="https://github.com/user-attachments/assets/a002eb84-107d-404e-a898-71cd1c633c5b" />

<img width="1141" alt="Screen Shot 2025-03-01 at 8 55 51 AM" src="https://github.com/user-attachments/assets/399884de-2ea5-4314-b3aa-4c94d5c2d510" />

**Alert Conditions**

The next step in configuring your alert is setting your alert conditions. Set the alert threshold, directionality, and an "Alert" and "Warning" value. On Statsig Cloud, you will choose the time window over which you want to evaluate the alert. 

<img width="1053" alt="Screen Shot 2025-03-01 at 8 46 24 AM" src="https://github.com/user-attachments/assets/f7175682-e777-4eb7-a9d4-f748263871f1" />

When configuring an alert on Warehouse Native, you will need to define the evaluation frequency, lookback, and max delay. The evaluation frequency and lookback period you define will influence the cost of evaluating this alert in your warehouse. 

<img width="1091" alt="Screen Shot 2025-04-03 at 8 51 06 PM" src="https://github.com/user-attachments/assets/0318ada2-a077-4c74-a9cf-ff3b22b9140f" />


**Notification**

The final step in alert configuration is to configure your alert message and set the list of who should be notified when the alert fires. All alert subscribers will receive a notification via email, in the Statsig Console, and via Slack for users who have configured Slack notifications for their Statsig accounts. You can enable company-wide notification settings (such as routing all alerts to a Slack channel) in your project Integration settings.

### Viewing Alert History 
To view alert history, head to the **Diagnostics** tab of the alert page, where you can see a history of when the alert has triggered. 

<img width="1436" alt="Screen Shot 2025-03-01 at 9 30 03 AM" src="https://github.com/user-attachments/assets/8d6e786f-09c1-4617-8230-4f11fb665ecc" />


### Alert Resolution
When an alert fires, it will show up as active at the top of the alert page. At this point, you can explore Samples of the event or explore the topline trend via Metrics Explorer. You can mute an alert for a period of time while you work on resolving any issues to avoid notification spam.

<img width="1439" alt="Screen Shot 2025-03-01 at 9 27 24 AM" src="https://github.com/user-attachments/assets/fba30475-c902-4878-911c-31108c7a7bc4" />



