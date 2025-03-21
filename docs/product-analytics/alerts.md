---
title: Alerts
sidebar_label: Alerts
slug: /product-analytics/alerts
keywords:
  - owner:shubham
last_update: 2025-03-01 09:39:44 -0800
---

# Alerts 
Statsig offers two types of alerts on the platform today:
1. **Rollout Alerts**- These are alerts on a metric's value _in the context of_ a gate or experiment rollout.
2. **Topline Metric Alerts**- These are alerts on a metric's topline value, independent of any experiment or gate. 


Topline Alerts are useful for keeping tabs on topline trends and ensuring you know if key product and business metrics are trending in a concerning direction. Rollout Alerts are helpful to confirm no key metrics are regressing when you start rolling out a new feature or experiment.  

:::info 
NOTE- Topline Alerts are in beta and are currently only available on Statsig Cloud. Support for Warehouse Native is coming soon. 
:::


## Rollout Alerts
On Statsig Cloud, Rollout Alerts are hourly for the first 24 hours post experiment/gate rollout (this includes new gate rules/rollouts), and then daily thereafter. This is to help provide more real-time visibility during the most critical phase of a rollout; in those first 24 hours post-going live. Alerts only trigger if the metric delta is statistically significant lower/higher than your threshold, which helps reduce alert noisiness. 

On Statsig Warehouse Native, Rollout Alerts are evaluated every time Pulse is loaded. Loading Pulse on the first day of a rollout will help provide more real-time visibility during this window. Alerts only trigger if the metric delta is statistically significant lower/higher than your threshold, which helps reduce alert noisiness. 

Finally, all stats methodologies you've enabled for your experiment/gate rollout (CUPED, Sequential Testing, etc.) will be applied to alert calculations post-the first 24 hours (once the alert becomes daily). 

:::info 
NOTE: Rollout Alerts do not alert at the **topline metric value** level, but rather at **the experiment/feature gate level**. This means that even if you have an experiment allocated to 10% of your users, but the metric change within that 10% allocation breaches the set threshold, you will be alerted. All alerts you receive will be in the context of a specific experiment or feature gate and to debug/resolve the alert you will be directed to the offending experiment or gate in question.
:::

### Configuring a Rollout Alert
To set up a Rollout Alert, go to the **Metrics** tab  —>  **Metrics Catalog** and search for the desired metric. 

<img width="1508" alt="Screen Shot 2022-12-06 at 9 37 23 AM" src="https://user-images.githubusercontent.com/101903926/205982663-f5eabaf6-733b-410f-bba1-63268f3af31a.png"/>

Once in the Metric Detail View, go to the **Alerts** tab, and tap **+ Create Alert**. As part of Rollout Alert configuration, you will be asked to configure the following inputs-
- **% Change-** The metric delta threshold after which you want to trigger an automated alert. As noted above, this delta is *in the context of the feature gate rollout or experiment the metric is being measured in* and is not a top-line metric value change across your whole user-base.
- **Minimum Participating Units-** You can set a minimum threshold of exposures you want to log before triggering an alert. We surface the 25/ 50/ 75th percentiles of exposure volume across your gates/experiments to help you choose a reasonable threshold. 
- **Direction-** Positive or negative, depending on whether you want to be alerted based on your metric *exceeding* vs. *dropping below* a target threshold.
- **Subscribers-** By default, all creators of a feature gate/experiment with a metric that has an alert configured will be notified if an alert is fired. You can also add additional, global subscribers to a Rollout Alert, who will be notified if *any* feature gate or experiment regresses the metric beyond the target threshold. Note that in a large project adding yourself as a global subscriber of a metric risks being noisy.

<img width="1430" alt="Screen Shot 2022-12-06 at 9 41 03 AM" src="https://user-images.githubusercontent.com/101903926/205983421-a50e4373-29b7-4110-91de-a0246f87fe5d.png"/>

Once a Rollout Alert has been configured for a given metric, you will see an “alert” alarm bell icon next to the metric inline in the Metrics Catalog. You can also filter for metrics with alerts set on them via the standard metrics filtering affordance next to the search bar.

### Determining the Right Threshold 
To help you configure the right threshold for your Rollout Alert, there is a preview of how much the metric has moved in the context of any feature gates or experiments containing that metric in the Scorecard. 

![Screen Shot 2024-03-20 at 2 24 48 PM](https://github.com/statsig-io/docs/assets/101903926/2a0434fe-e708-497d-b5bd-53c7b609cd47)

To see how a given metric has trended over a longer period of time, hover over the metric delta for a given feature gate/experiment, and tap on a data point to view more details. This will open the time-series for the metric, with a configurable date range picker.

![Screen Shot 2024-03-20 at 2 28 58 PM](https://github.com/statsig-io/docs/assets/101903926/a57599b6-044f-42b6-97fc-e6fb8bb3435c)

![Screen Shot 2024-03-20 at 2 28 50 PM](https://github.com/statsig-io/docs/assets/101903926/f4b0e8a2-c5aa-4bb3-b57d-36930e906e5d)

### Alert UX 
If a Rollout Alert is triggered, all subscribers and the relevant gate/experiment creator(s) will receive a notification via email, in the Statsig Console, and via Slack for users who have configured Slack notifications for their Statsig accounts. 

<img width="609" alt="Screen Shot 2022-12-06 at 9 42 11 AM" src="https://user-images.githubusercontent.com/101903926/205983664-14d2715d-924b-429e-b4a3-40365c4a26af.png"/>

<img width="752" alt="Screen Shot 2022-12-06 at 9 42 59 AM" src="https://user-images.githubusercontent.com/101903926/205983817-6a569919-7e2b-4716-9862-aa406c9db843.png"/>

Tapping on **View Alert** will take you into the Diagnostics page of the offending feature gate or experiment that triggered the Rollout Alert.

<img width="1474" alt="Screen Shot 2022-12-06 at 9 43 45 AM" src="https://user-images.githubusercontent.com/101903926/205983990-6ccbd888-acd4-47e3-96ef-8b3a513a26bf.png"/>

Once in the Diagnostics section, scroll to the **Rollout Alerts** section and select the active alert. You will see the metric delta trend with the threshold overlayed. To resolve the alert, tap **Resolve** inline, which will give you the option to either resolve the alert (+ provide an explanation), or snooze the alert for a specified period of time. The alert will show as resolved both inline in the **Rollout Alerts** section, as well as on the top of the Pulse page for the given gate/experiment. 

<img width="1473" alt="Screen Shot 2022-12-06 at 9 46 19 AM" src="https://user-images.githubusercontent.com/101903926/205984434-f60e7d21-8356-499d-95e8-0c551f82a74d.png"/>

### Viewing Alert History 
To view alert history, go to **Metrics** tab —> **Metrics Catalog** and select the metric you want to view alert history for. Then go to **Alerts** —> **…** menu in the **Experiment and Gate Alerts** section, and select **View Alert History**. You will be able to see all instances of the alert firing, being resolved, or being snoozed, as well as reason provided for resolution, who resolved the alert, and at what time. 

<img width="1474" alt="Screen Shot 2022-12-06 at 9 47 06 AM" src="https://user-images.githubusercontent.com/101903926/205984564-216fdf30-185b-4b05-9047-b64769c844ec.png"/>

<img width="1054" alt="Screen Shot 2022-12-06 at 9 47 24 AM" src="https://user-images.githubusercontent.com/101903926/205984591-cf528cab-c6bd-43a5-8aa1-c80704d4e137.png"/>


## Topline Metric Alerts
Available on Statsig Cloud, Topline Metric Alerts are currently in Beta as part of Statsig's Product Analytics suite. Topline Alerts are threshold based (anomaly detection coming soon) and are evaluated every 5 minutes. 

### Configuring a Topline Alert
To configure a Topline Alert, head to **Analytics** -> **Topline Alerts** tab where you can find all your Topline Alerts and configure new ones. Tap **+Create** and name your new alert. 

Under alert configuration, there are a few settings- 

**Event Configuration**
Set the event you want to alert on, then choose the aggregation for this event. In this example, we're going to set an alert on P90 latency of a Metrics Explorer (MEX query). 

Our event name is "mex_query" and we log latency as a dimension of this event, so we will select the event, choose "P90" aggregation of the "latency" event dimension. You can also apply a filter to the event, for example I could filter out any Statsig internal employee queries. 

We'll see a preview of the event values in the **Alert Preview** section above event configuration. 

<img width="1052" alt="Screen Shot 2025-03-01 at 8 32 31 AM" src="https://github.com/user-attachments/assets/1a8be658-ec02-4ed2-994c-ad39d8df4a5d" />

<img width="1053" alt="Screen Shot 2025-03-01 at 8 42 59 AM" src="https://github.com/user-attachments/assets/a002eb84-107d-404e-a898-71cd1c633c5b" />

<img width="1141" alt="Screen Shot 2025-03-01 at 8 55 51 AM" src="https://github.com/user-attachments/assets/399884de-2ea5-4314-b3aa-4c94d5c2d510" />

**Alert Conditions**
The next step in configuring your alert is setting your alert conditions. Set the alert threshold, directionality, and an "Alert" and "Warning" value. Finally, choose the time window over which you want to evaluate the alert. 

In my example, I'm setting a 500ms (5 second) alert threshold. And because I want to be evaluated quickly if anyone on the platform is having a poor query performance experience, I'll set the notification to evaluate and notify on all queries in the last 5 minutes. 

<img width="1053" alt="Screen Shot 2025-03-01 at 8 46 24 AM" src="https://github.com/user-attachments/assets/f7175682-e777-4eb7-a9d4-f748263871f1" />

**Notification**
The final step in alert configuration is to configure your alert message and set the list of who should be notified when the alert fires. All alert subscribers will receive a notification via email, in the Statsig Console, and via Slack for users who have configured Slack notifications for their Statsig accounts. 

When crafting your alert message, if you want to include dynamic content from the event itself, leverage the **Code** feature. In my example below, I'm including the impacted company name so I can quickly hop in and diagnose their slow query. 

<img width="1055" alt="Screen Shot 2025-03-01 at 9 19 22 AM" src="https://github.com/user-attachments/assets/d0204bfe-df63-4da9-a328-0f43b448191f" />

### Viewing Alert History 
To view alert history, head to the **Diagnostics** tab of the alert page, where you can see a history of the alert. 

<img width="1436" alt="Screen Shot 2025-03-01 at 9 30 03 AM" src="https://github.com/user-attachments/assets/8d6e786f-09c1-4617-8230-4f11fb665ecc" />


### Alert Resolution
When an alert fires, it will show up as active at the top of the alert page. At this point, you can explore Samples of the event or explore the topline trend via Metrics Explorer. 

<img width="1439" alt="Screen Shot 2025-03-01 at 9 27 24 AM" src="https://github.com/user-attachments/assets/fba30475-c902-4878-911c-31108c7a7bc4" />


