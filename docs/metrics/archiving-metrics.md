---
title: Archiving and Deleting Metrics
sidebar_label: Archiving and Deleting Metrics
slug: /metrics/archiving-metrics
---

Statsig offers two ways to manage the end-of-life for your metrics. 
- **Archiving a metric**: the metric will no longer be computed, but its history will be retained for your record. Use this for when a metric is no longer relevant, but you still wish to maintain the history of it. Use case example: you can archive older versions of a metric that continues to evolve (i.e. a new metric with a better definition has been created) so you have a record of how the metric has evolved over time.
- **Deleting a metric**: the metric will be removed from Statsig completely, including its history. Use this for when you've made a mistake, logged or imported an irrelevant metric, or created a more accurate version of a metric. Use case examples include incorrect definition, incorrect name, duplicate metric that you don't want to confuse others with. 

# Archiving Metrics 

### Archiving a Metric 
There are two ways to archive a metric: 
1) In your Metric Catalog, select the metric(s) you want to archive to see a toolbar of options appear to **Archive**, **Compare**, or **Tag**. Select the **Archive** icon.
![Bulk Archive](https://user-images.githubusercontent.com/120431069/215638876-3c2ae682-8db8-4dc7-9c14-3b4d7185f57e.png)

2) In the Metrics Detail View page, select the "..." in the upper right-hand corner, and select **Archive**. 
![Archive](https://user-images.githubusercontent.com/120431069/215639240-321b4e3f-d9c7-4f7d-ab77-9e18ba1c5867.png)

Once you select Archive, Statsig will check if this metric is used in any feature gates, experiments, or other metrics. 
![archive dependencies](https://user-images.githubusercontent.com/120431069/215640348-b210eb9e-5475-4853-869f-7a9f66375f0a.png)
While the inclusion of a metric in a feature gate or experiment will trigger a soft warning (no action necessary), if a metric which is requested to be archived is used as a part of a composite metric, you will need to delete or archive the composite metric first.

Once you have no metric dependencies, you will start a 24-hour grace period during which you'll be able to undo the archival. In the Metrics Detail View page, you will see a new banner appear at the top of the page, indicating the start of the grace period. 

After the 24-hour grace period, Statsig will stop computing this metric and the Metric Detail View page will update with a new banner indicating that the metric has been archived, and Metric Value will change to a disabled state to indicate that this metric is archived.

### Implications of Archiving a Metric 
_As soon as the **Archive** button is clicked,_
- 24-hour grace period will start
- Owners of Experiments and Gates using this metric will receive an email notification to be notified of potential impact upstream

_After the 24-hour grace period has ended,_
- Archived metrics will no longer be computed (when the 24-hour grace period ends). 
- Archived metrics will not show up in your Metric Catalog search. To access all archived metrics, go to the last page(s) of your Metrics Catalog. 
- Archived metrics will be removed from Pulse, including any time the archived metric has been added to the Scorecard of an experiment or the Monitoring Metrics section of a Feature Gate 

### Unarchiving a Metric
If you mistakenly archived a metric you can undo your Archival. 
- _During_ the 24-hour grace period: Click "undo" on the archival banner at the top of the Metrics Detail View page. Since you **Unarchived** before the grace period ended (when the metric is no longer computed), this will restore the  metric to both your Metrics Catalog as well as any experiment results that include the metric.  
![Archive Grace Period](https://user-images.githubusercontent.com/120431069/215640435-412375f7-398b-4bef-9495-cc20d1805769.png)

- _After_ the 24-hour grace period: Either a) go to the last few pages of your Metrics Catalog, select the archived metric(s) you want to **Unarchive** to see a toolbar of options appear, and select the **Unarchive** icon OR b) in the Metrics Detail View page of an archived metric, select "Unarchive" in the banner indicating metric's archival
![Archive after grace period](https://user-images.githubusercontent.com/120431069/215640543-7cb05d46-e61d-4cf4-a07c-eb76c9f50e36.png)

Since the grace period has ended and the metric has stopped being computed already, its calculation will restart from scratch and history will not be restored. 

# Deleting Metrics 

### Deleting a Metric 
To delete a metric, go the Metrics Detail View page of a metric you wish to delete, select the "..." in the upper right-hand corner, and select **Delete**. 
![delete metric](https://user-images.githubusercontent.com/120431069/215641202-82f23bac-f620-4d4a-8c32-fe64a4ffc06c.png)

Once you select Delete, Statsig will check if this metric is used in any feature gates, experiments, or other metrics. While the inclusion of a metric in a feature gate or experiment will trigger a soft warning (no action necessary), if a metric which is requested to be archived is used as a part of a composite metric, you will need to delete or archive the composite metric first.
![dependencies](https://user-images.githubusercontent.com/120431069/215641295-55c8dc10-7199-4505-ba0e-d02299fb371a.png)


Once you have no metric dependencies, you will start a 24-hour grace period during which you'll be able to undo the deletion. In the Metrics Detail View page, you will see a new banner appear at the top of the page, indicating the start of the grace period. 
![undo delete](https://user-images.githubusercontent.com/120431069/215641634-1c70e688-0fe9-4cac-80bb-d3faeedcc0ed.png)


_**Metric Deletion cannot be undone after the grace period.**_


### Implications of Deleting a Metric
_As soon as **Delete** button is clicked_
- 24-hour grace period will start
- Owners of Experiments and Gates using this metric will receive an email notification to be notified of potential impact upstream

_After the 24-hour grace period has ended,_
- Deleted metrics and their history will be removed from Statsig, and cannot be restored. 
- Deleted metrics will be removed from Pulse, including any time the deleted metric has been added to the Scorecard of an experiment or the Monitoring Metrics section of a Feature Gate 

