---
title: Archiving or Deleting Metrics
sidebar_label: Archiving or Deleting Metrics
slug: /metrics/archiving-metrics
---

Statsig offers two ways to manage the end-of-life for your metrics. 
- Archiving a metric: for when a metric is no longer relevant. This will stop computing the metric, but retain the history for your record. Use case example: you can archive older versions of a metric that continues to evolve so you have a record of how the metric has evolved over time.
- Deleting a metric: for when there was a mistake. This will remove the metric from Statsig completely, including its history. Use case examples include incorrect definition, incorrect name, duplicative metric that you don't want to confuse others with. 
*note: renaming metrics is not supported today, but is planned to be in mid Q1 2023

# Archiving Metrics 

### Archiving a Metric 
There are two ways where you can archive a metric: 
1) In your Metric Catalog, select the metric(s) you want to archive to see a toolbar of options appear to **Archive**, **Compare**, or **Tag**. Select the **Archive** icon.
2) In the Metrics Detail View page, select the "..." in the upper right-hand corner, and select **Archive**. 

Once you select Archive, Statsig will check if this metric is used in any feature gates, experiments, and other metrics. While feature gate or experiment dependencies will be shown as soft warnings (no action necessary), metric dependencies will require you to remove the dependency first, before proceeding with the archival. This is because archival of a metric stops its computation, and we don't want other metric values impacted by this archival. 

Once you have no metric dependencies, you will start a 24-hour grace period during which you'll be able to undo the archival. In the Metrics Detail View page, you will see a new banner appear at the top of the page, indicating the start of the grace period. 

After the 24-hour grace period, Statsig will stop computing this metric and the Metric Detail View page will update with a new banner indicating that the metric has been archived, and Metric Value will change to a disabled state to indicate that this metric is archived.

### Implications of Archiving a Metric 
- Archived metrics will no longer be computed (when the 24-hour grace period ends). 
- Archived metrics will not show up in your Metric Catalog search. To access all archived metrics, go to the last page(s) of your Metrics Catalog. 
- Archived metrics will be removed from Pulse, including any time the archived metric has been added to the Scorecard of an experiment or the Monitoring Metrics section of a Feature Gate 

### Unarchiving a Metric
If you mistakenly archived a metric you can undo your Archival in 2 ways:
1) During the 24 hour grace period, click "undo" on the archival banner at the top of the Metrics Detail View page. Since you undid Archival before the grace period ended (when the metric is no longer computed), this will restore the  metric to both your Metrics Catalog as well as any experiment results that include the metric.  
2) After the 24 hour grace peirod - 
    a) Go to the last few pages of your Metrics Catalog, select the archived metric, and tap "Unarchive" from the banner at the top of the Metric Detail view page. 
    b) In the Metrics Detail View page of an archived metric, select the "..." in the upper right-hand corner, and select **Unarchive**. 


# Deleting Metrics 

### Deleting a Metric 
To delete a metric, go the Metrics Detail View page of a metric you wish to delete, select the "..." in the upper right-hand corner, and select **Delete**. 

Once you select Delete, Statsig will check if this metric is used in any feature gates, experiments, and other metrics. While feature gate or experiment dependencies will be shown as soft warnings (no action necessary), metric dependencies will require you to remove the dependency first, before proceeding with the deletion, so that other metric values are not impacted by this deletion.

Once you have no metric dependencies, you will start a 24-hour grace period during which you'll be able to undo the deletion. In the Metrics Detail View page, you will see a new banner appear at the top of the page, indicating the start of the grace period. **Metric Deletion cannot be undone after the grace period.**


### Implications of Deleting a Metric 
- Deleted metrics and their history will removed from Statsig completely, and cannot be restored. 
- Deleted metrics will be removed from Pulse, including any time the deleted metric has been added to the Scorecard of an experiment or the Monitoring Metrics section of a Feature Gate 
