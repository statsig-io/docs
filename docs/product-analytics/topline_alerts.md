---
title: Topline Alerts
sidebar_label: Topline Alerts
slug: /product-analytics/alerts/topline_alerts
keywords:
  - owner:laurel
last_update:
  date: 2025-09-30
---

Topline Alerts notify you when key metrics cross a threshold or change significantly. They are available in Statsig Cloud and Statsig Warehouse Native.
- **Threshold Alerts:** Trigger when a metric crosses a fixed limit.
- **Change Alerts:** Trigger when a metric shifts by an absolute amount or a percentage.

---

# Creating a Topline Alert
### **Step 1:** Navigate to Topline Alerts
In the left product menu, go to **Analytics** -> **Topline Alerts**

### **Step 2:** Create a New Alert
Click **+Create** and give the new alert a name.

### **Step 3:** Select the Event or Metric Source. 
Choose the data you want to monitor. 
- **On Statsig Warehouse Native:** Select a Metric Source and filter down to your desired event/metric. 
- **On Statsig Cloud:** Select the event you want to alert on, then choose the aggregation for this event.
  
  Example: Monitor `mex_query` with P90 latency. We will also filter out internal employee queries.

  <img width="1053" alt="Screen Shot 2025-03-01 at 8 42 59 AM" src="https://github.com/user-attachments/assets/a002eb84-107d-404e-a898-71cd1c633c5b" />

### **Step 4:** Review the Alert Preview
At the top of the page, the preview shows how your metric is trending over time. Use this to confirm the configuration looks correct.
If you need deeper analysis, you can open the metric directly in Metrics Explorer (MEx) for further exploration.

  <img width="1141" alt="Screen Shot 2025-03-01 at 8 55 51 AM" src="https://github.com/user-attachments/assets/399884de-2ea5-4314-b3aa-4c94d5c2d510" />

### **Step 5:** Set Alert Conditions
Choose when the alert should fire. The preview will update as you set conditions.

Set the alert condition type, directionality, and _"Alert"_ / _"Warn"_ values. 
- **On Statsig Cloud:** Choose the time window over which you want to evaluate the alert.
- **On Warehouse Native:** Define the evaluation frequency, lookback, and max delay. The evaluation frequency and lookback period you define will influence the cost of evaluating this alert in your warehouse.


| Alert Condition Type         | When to Use                          | Example                                                   |
|--------------------|-----------------------------------------|-----------------------------------------------------------|
| **Threshold**     | Use when you want to stay above or below a fixed number. | “Alert me when P90 latency spikes above 15 seconds.” |
| **Change**        | Use when the absolute size of the change matters. | “Alert me when hourly P90 latency increases by 10 secounds.” |
| **Change (%)**    | Use when the relative size of the change matters more than raw numbers. | “Alert me when hourly P90 latency increases by 50%.” |


### **Step 6:** Add Notifications

A well-crafted alert should clearly describe what happened. **Start by writing the notification message.** If relevant, suggest next steps for the person receiving it. 

You can then **add subscribers** who should be notified, and **set a priority level** so alerts can be triaged appropriately.
- All subscribers will receive notifications by email, in the Statsig Console, and through Slack if connected. 
- You can also configure project-wide defaults, such as routing all alerts to a Slack channel, under Integration settings.

### **Step 7:** Save!!!
🎉 Congrats - You've just finished making your alert.

When an alert fires, it will show up as active at the top of the alert page. At this point, you can explore Samples of the event or explore the topline trend via Metrics Explorer. You can mute an alert for a period of time while you work on resolving any issues to avoid notification spam.
<img width="1439" alt="Screen Shot 2025-03-01 at 9 27 24 AM" src="https://github.com/user-attachments/assets/fba30475-c902-4878-911c-31108c7a7bc4" />


To view alert history, head to the **Diagnostics** tab of the alert page, where you can see a history of when the alert has triggered. 

<img width="1436" alt="Screen Shot 2025-03-01 at 9 30 03 AM" src="https://github.com/user-attachments/assets/8d6e786f-09c1-4617-8230-4f11fb665ecc" />

---

### Interested in more?

- 👉 Check out how to [create a Topline Alert on log lines](/infra-analytics/topline-alerts-logs)
- 🔔 Learn how to set up [team Slack notifications](https://docs.statsig.com/integrations/slack/#team-notifications)

