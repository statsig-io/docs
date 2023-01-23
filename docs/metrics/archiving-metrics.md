---
title: Archiving Metrics
sidebar_label: Archiving Metrics
slug: /metrics/archiving-metrics
---

# Archiving and Deleting Metrics 

### Archiving a Metric 
To archive a metric, select the metric(s) you want to archive. Once you've selected at least one metric, you will see a toolbar of options appear to **Archive**, **Compare**, or **Tag** the selected metrics. 

![Screen Shot 2022-11-23 at 1 14 30 PM](https://user-images.githubusercontent.com/101903926/203647259-64d0d903-8ad8-46df-a738-204ff7b89641.png)

Tap the **Archive** button and you will see the metric change to a disabled state with the "Archived" symbol next to it to indicate that it is archived.

![Screen Shot 2022-11-23 at 1 16 21 PM](https://user-images.githubusercontent.com/101903926/203647513-937c9a2e-d5cc-4179-9398-d839831c3292.png)

You can also archive directly from the Metrics Detail View page. Tap the "..." in the upper right-hand corner, and select **Archive**. 

![Screen Shot 2022-11-23 at 1 59 15 PM](https://user-images.githubusercontent.com/101903926/203653065-00134f24-a3a4-49ab-8d84-f52d71b861cf.png)

When you go to the Metric Detail View for this metric, you will see a banner across the top of the page indicating that the metric has been archived. 

![Screen Shot 2022-11-23 at 1 17 20 PM](https://user-images.githubusercontent.com/101903926/203647646-4453bdd2-78a4-41c1-bb46-3680ac6a491d.png)

### Implications of Archiving a Metric 
If you archive a metric, the metric will be hidden in your Metrics Catalog and in Pulse. This means- 

- Archived metrics will not show up in your Metric Catalog search. To access all archived metrics, go to the last page(s) of your Metrics Catalog. 
- Archived metrics will be removed from Pulse, including any time the archived metric has been added to the Scorecard of an experiment or the Monitoring Metrics section of a Feature Gate 
- Any Custom Metrics that leverage an archived metric will not be impacted, as we are still computing all archived metrics on the backend. However, it's still recommended to take a pass on any Custom Metrics that use an archived metric to decide whether you need to swap out the archived metric being used for another metric in the Custom Metric setup. 


### Unarchiving a Metric
If you mistakenly archived a metric you can undo your archive by "Unarchiving" the metric. Simply go to the last page or two of your Metrics Catalog, select the archived metric, and tap "Unarchive" from the banner at the top of the Metric Detail view page. This will restore the  metric to both your Metrics Catalog as well as any experiment results that include the metric. 

![Screen Shot 2022-11-23 at 2 41 54 PM](https://user-images.githubusercontent.com/101903926/203658136-2e672906-8122-4c99-a985-970e9b60317c.png)


