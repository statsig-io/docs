---
title: Archiving and Deleting Metrics
sidebar_label: Archiving and Deleting Metrics
slug: /metrics/archiving-metrics
keywords:
  - owner:tim
last_update:
  date: 2023-07-20
---

Statsig offers two ways to manage the end-of-life for your metrics. 
- **Archiving a metric**: the metric will no longer be computed, but its history will be retained for your record. Use this for when a metric is no longer relevant, but you still wish to maintain the history of it. Use case example: you can archive older versions of a metric that continues to evolve so you have a record of how the metric has evolved over time.
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
While feature gate or experiment dependencies will be shown as soft warnings (no action necessary), metric dependencies will require you to remove the dependency first, before proceeding with the archival. This is because archival of a metric stops its computation, and we don't want other dependent metric values impacted by this archival.

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

### Auto-Archival

To combat metric clutter, Statsig offers a default auto-archival feature that cleans up metrics that have not been in-use for at least 60 days. Metric creators and admins will get a warning about a week before archival happens, at which time they can either choose to extend the metric for another 60 days or mark it as permanent. The entire process is outlined below:

![state graph](https://github.com/statsig-io/docs/assets/132317445/c7912507-636f-4f33-9555-70180dfd205e)

#### How do we measure activity?

Statsig counts the number of times the custom metric is used in one or more of the following components:
1. *Scorecard*: Used in experiments, pulse reports, holdouts, etc.
2. *Dashboards*: Used to build dashboards and other analytical assets
3. *Other Metrics*: Used to calculate other composite metrics

If a metric is in use, it will be considered as active. You can see a summary of a metric’s usage on the metric’s main page:

![Metric References](https://github.com/statsig-io/docs/assets/132317445/6f7eb3db-399a-45c8-be19-794e89dd349d)

At the same time, we are also detecting (1) any edits to the metrics, including changing any fields in the setup or restoring a previous version, (2) adding tags to the metrics, or (3) creating or modifying an alert on the metric. Any such interaction would restart the 60 day clock.

#### How to Pause / Stop Auto-Archiving

Any tracked action above (adding it to a scorecard, etc) will also take the metric out of the archival queue. Outside of that, if you want to pause the archival process, you may simply extend the metric for another 60 days. We also give you an option to mark it as permanent, which takes it out of the auto-archival process entirely. We recommend this only for the most important and widely reused metrics.

![Banner](https://github.com/statsig-io/docs/assets/132317445/d7378d7b-a588-496b-ae35-24f38c6d5b6a)


Another way to mark it as permanent by clicking into the setup dropdown from the metrics page and selecting “Mark as Permanent”

![Dropdown](https://github.com/statsig-io/docs/assets/132317445/2a570a92-76d6-41b3-aea5-ebdd53469856)

If you’d like to turn off auto-archiving entirely for your project, you may do so in the Project Settings page

![Project Settings](https://github.com/statsig-io/docs/assets/132317445/74cd5575-e1bb-4f69-87f9-1feece5eb73f)


# Deleting Metrics 

### Deleting a Metric 
To delete a metric, go the Metrics Detail View page of a metric you wish to delete, select the "..." in the upper right-hand corner, and select **Delete**. 
![delete metric](https://user-images.githubusercontent.com/120431069/215641202-82f23bac-f620-4d4a-8c32-fe64a4ffc06c.png)

Once you select Delete, Statsig will check if this metric is used in any feature gates, experiments, or other metrics. While feature gate or experiment dependencies will be shown as soft warnings (no action necessary), metric dependencies will require you to remove the dependency first, before proceeding with the deletion, so that other dependent metric values are not impacted by this deletion.
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



