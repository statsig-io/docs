---
title: Event Property
sidebar_label:  Event Property
slug: /metrics/metric-dimensions
---

#  Event Property

Statsig enables you to breakdown metrics into a single set of non-overlapping dimensions for deep dive analyses. 

For example, you can breakdown an event such as **add-to-cart** into product categories such as _sports_, _toys_, _appliances_, _electronics_. To do this, you would simply log **add-to-cart** events and provide the product category in the event's **value** field. See the [Statsig SDK reference guide](client/jsClientSDK#step5) to learn more.  

Statsig enables you to define up to four custom dimensions for an event (one via the **value** field and three via **metadata** fields). To configure these custom event fields, go to **Metrics** --> **Events**, select the event you want to configure, and then go to the **Setup** tab for that event. 

![Screen Shot 2022-12-28 at 3 50 52 PM](https://user-images.githubusercontent.com/101903926/209886245-c26f569b-a4d4-4882-9d9c-f65f3c1ba43b.png)

Providing custom dimensions with logged events allows you to break down the impact on the total **add-to-cart** events by category in Pulse as shown below. This enables you to zero in on the category that's most impacted by your experiment. 

![image](https://user-images.githubusercontent.com/1315028/162332284-259ea614-8cb6-4c9d-aebd-3e41f9092a64.png)

Statsig recommends keeping the options used for all custom dimensions to fewer than 8. Console will prioritize tracking the most common dimensions and consolidate less frequent values into an "other" bucket.

Statsig also supports metric dimensions for custom metrics that are **Aggregations**. To set this up, log your dimension as a **value** and the number to be tallied as a metadata field. 

This is the old metric dimension page. We renamed it to Event Property.
