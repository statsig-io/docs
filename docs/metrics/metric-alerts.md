---
title: Metric Alerts
sidebar_label: Metric Alerts
slug: /metrics/metric-alerts
---

# Metric Alerts
When rolling out a new feature or experiment, you may want to be notified if your rollout or experiment regresses a metric beyond a pre-set threshold. Statsig enables this via metric alerts.

NOTE: Metric alerts are **not top-line metric value** alerts, but rather **alert at the experiment/ feature gate level**. This means that even if you have an experiment allocated to 10% of your users, but the metric change within that 10% allocation breaches the set threshold, you will be alerted. All alerts you receive will be in the context of a specific experiment or feature gate and to debug/ resolve the alert you will be directed to the offending experiment or gate in question.

## Setting up a Metric Alert
To set up a metric alert, go to the **Metrics** tab  —>  **Metrics Catalog** and search for the desired metric. If you want to set up alerts for all metrics in a given tag, filter the Metrics Catalog by the target tag.

<img width="1508" alt="Screen Shot 2022-12-06 at 9 37 23 AM" src="https://user-images.githubusercontent.com/101903926/205982663-f5eabaf6-733b-410f-bba1-63268f3af31a.png"/>

Once in the Metric Detail View, go to the **Alerts** tab, and tap **+ Create Alert**. As part of Metric Alert configuration, you will be asked to configure the following inputs-
- **% Change-** The metric delta threshold after which you want to trigger an automated alert. As noted above, this delta is *in the context of the feature gate rollout or experiment the metric is being measured in* and is not a top-line metric value change across your whole user-base.
- **Direction-** Positive or negative, depending on whether you want to be alerted based on your metric *exceeding* vs. *dropping below* a target threshold.
- **Alert Window-** You can configure alerts to check for hourly variance or daily variance. If a metric is typically noisy throughout the day, but stays relatively consistent over a 24hr period, you may want to consider setting a daily alert window over an hourly alert window. Please note that today hourly alert windows are only available for “COUNT” metrics, not “DAU” metrics or Custom Metrics.
- **Subscribers-** By default, all creators of a feature gate/ experiment with a metric that has an alert configured will be notified if an alert is fired. You can also add additional, global subscribers to a metric alert, who will be notified if *any* feature gate or experiment regresses the metric beyond the target threshold. Note that in a large project adding yourself as a global subscriber of a metric risks being noisy.

<img width="1430" alt="Screen Shot 2022-12-06 at 9 41 03 AM" src="https://user-images.githubusercontent.com/101903926/205983421-a50e4373-29b7-4110-91de-a0246f87fe5d.png"/>

Once a metric alert has been configured for a given metric, you will see an “alert” alarm bell icon next to the metric inline in the Metrics Catalog. You can also filter for metrics with alerts set on them via the standard metrics filtering affordance next to the search bar.

## Determining the Right Threshold 
To help you configure the right threshold for your metric alert, there is a preview of how much the metric has moved in the context of any feature gates or experiments containing that metric in the Scorecard. These metric delta previews can be toggled to show Hourly vs. Daily deltas by changing the metric’s **Alert Window**. Please note that for hourly lifts, no confidence intervals are shown. Additionally, both hourly and daily-windowed alerts are triggered based on the mean metric delta, *without* confidence intervals.

<img width="1509" alt="Screen Shot 2022-12-06 at 9 38 16 AM" src="https://user-images.githubusercontent.com/101903926/205982857-e3f7d9ed-7eb8-4649-8807-e16f706315e2.png"/>

To see how a given metric has trended over a longer period of time, hover over the metric delta for a given feature gate/ experiment, and tap **View Details**. This will open the time-series for the metric, with a configurable date range picker.

<img width="258" alt="Screen Shot 2022-12-06 at 9 39 49 AM" src="https://user-images.githubusercontent.com/101903926/205983179-85aa1d8d-7860-4919-9a53-5bfdbc260bc1.png"/>

<img width="897" alt="Screen Shot 2022-12-06 at 9 40 31 AM" src="https://user-images.githubusercontent.com/101903926/205983312-e0e878a9-defa-4dc2-831e-0af9115449f1.png"/>

## Alert UX 
If a Metric Alert is triggered, all subscribers and the relevant gate/ experiment creator(s) will receive a notification via email, in the Statsig Console, and via Slack for users who have configured Slack notifications for their Statsig accounts. 

<img width="609" alt="Screen Shot 2022-12-06 at 9 42 11 AM" src="https://user-images.githubusercontent.com/101903926/205983664-14d2715d-924b-429e-b4a3-40365c4a26af.png"/>

<img width="752" alt="Screen Shot 2022-12-06 at 9 42 59 AM" src="https://user-images.githubusercontent.com/101903926/205983817-6a569919-7e2b-4716-9862-aa406c9db843.png"/>

Tapping on **View Alert** will take you into the Diagnostics page of the offending feature gate or experiment that triggered the metric alert.

<img width="1474" alt="Screen Shot 2022-12-06 at 9 43 45 AM" src="https://user-images.githubusercontent.com/101903926/205983990-6ccbd888-acd4-47e3-96ef-8b3a513a26bf.png"/>

Once in the Diagnostics section, scroll to the **Metric Delta Alerts** section and select the active alert. You will see the metric delta trend with the threshold overlayed. To resolve the alert, tap **Resolve** inline, which will give you the option to either resolve the alert (+ provide an explanation), or snooze the alert for a specified period of time. The alert will show as resolved both inline in the **Metric Delta Alerts** section, as well as on the top of the Pulse page for the given gate/ experiment. 

<img width="1473" alt="Screen Shot 2022-12-06 at 9 46 19 AM" src="https://user-images.githubusercontent.com/101903926/205984434-f60e7d21-8356-499d-95e8-0c551f82a74d.png"/>

## Viewing Alert History 
To view alert history, go to **Metrics** tab —> **Metrics Catalog** and select the metric you want to view alert history for. Then go to **Alerts** —> **…** menu in the **Experiment and Gate Alerts** section, and select **View Alert History**. You will be able to see all instances of the alert firing, being resolved, or being snoozed, as well as reason provided for resolution, who resolved the alert, and at what time. 

<img width="1474" alt="Screen Shot 2022-12-06 at 9 47 06 AM" src="https://user-images.githubusercontent.com/101903926/205984564-216fdf30-185b-4b05-9047-b64769c844ec.png"/>

<img width="1054" alt="Screen Shot 2022-12-06 at 9 47 24 AM" src="https://user-images.githubusercontent.com/101903926/205984591-cf528cab-c6bd-43a5-8aa1-c80704d4e137.png"/>


