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

Once in the Metric Detail View, go to the **Alerts** tab, and tap **+ Create Alert**. As part of Metric Alert configuration, you will be asked to configure the following inputs-
- **% Change-** The metric delta threshold after which you want to trigger an automated alert. As noted above, this delta is *in the context of the feature gate rollout or experiment the metric is being measured in* and is not a top-line metric value change across your whole user-base.
- **Direction-** Positive or negative, depending on whether you want to be alerted based on your metric *exceeding* vs. *dropping below* a target threshold.
- **Alert Window-** You can configure alerts to check for hourly variance or daily variance. If a metric is typically noisy throughout the day, but stays relatively consistent over a 24hr period, you may want to consider setting a daily alert window over an hourly alert window. Please note that today hourly alert windows are only available for “COUNT” metrics, not “DAU” metrics or Custom Metrics.
- **Subscribers-** By default, all creators of a feature gate/ experiment with a metric that has an alert configured will be notified if an alert is fired. You can also add additional, global subscribers to a metric alert, who will be notified if *any* feature gate or experiment regresses the metric beyond the target threshold. Note that in a large project adding yourself as a global subscriber of a metric risks being noisy.

Once a metric alert has been configured for a given metric, you will see an “alert” alarm bell icon next to the metric inline in the Metrics Catalog. You can also filter for metrics with alerts set on them via the standard metrics filtering affordance next to the search bar.

## Determining the Right Threshold 
To help you configure the right threshold for your metric alert, there is a preview of how much the metric has moved in the context of any feature gates or experiments containing that metric in the Scorecard. These metric delta previews can be toggled to show Hourly vs. Daily deltas by changing the metric’s **Alert Window**. Please note that for hourly lifts, no confidence intervals are shown. Additionally, both hourly and daily-windowed alerts are triggered based on the mean metric delta, *without* confidence intervals.

To see how a given metric has trended over a longer period of time, hover over the metric delta for a given feature gate/ experiment, and tap **View Details**. This will open the time-series for the metric, with a configurable date range picker.

## Alert UX 
If a Metric Alert is triggered, all subscribers and the relevant gate/ experiment creator(s) will receive a notification via email, in the Statsig Console, and via Slack for users who have configured Slack notifications for their Statsig accounts. 

Tapping on **View Alert** will take you into the Diagnostics page of the offending feature gate or experiment that triggered the metric alert.

Once in the Diagnostics section, scroll to the **Metric Delta Alerts** section and select the active alert. You will see the metric delta trend with the threshold overlayed. To resolve the alert, tap **Resolve** inline, which will give you the option to either resolve the alert (+ provide an explanation), or snooze the alert for a specified period of time. The alert will show as resolved both inline in the **Metric Delta Alerts** section, as well as on the top of the Pulse page for the given gate/ experiment. 

## Viewing Alert History 
To view alert history, go to **Metrics** tab —> **Metrics Catalog** and select the metric you want to view alert history for. Then go to **Alerts** —> **…** menu in the **Experiment and Gate Alerts** section, and select **View Alert History**. You will be able to see all instances of the alert firing, being resolved, or being snoozed, as well as reason provided for resolution, who resolved the alert, and at what time. 
