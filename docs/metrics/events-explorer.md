---
title: Events Explorer
sidebar_label: Events Explorer
slug: /metrics/301/events-explorer
---

Statsig's **Events Explorer** enables you to dive straight into real-time events emitted by your application. 

Events Explorer enable you to create queries **without requiring any SQL expertise** and analyze results to complex queries within **sub-second latency**.

## Use Cases
1. **Diagnosting Product Performance**: As you accelerate your product development velocity, Events Explorer enables you to monitor and interactively analyze how your product is performing in real-time. Product performance issues can range from app crashes to 'innocuous' bugs that impact app-wide usage. Compared to pre-aggregated graphs that limit root cause analyses, Events Explorer allows you to dive deep into arbitrary product data for real-time, ad-hoc analyses.
2. **Exploratory Product Analyses**: As you add product features, Events Explorer enables you to investigate product usage patterns that can point to further improvements and new product hypotheses. For example, at Statsig, we use the Events Explorer to better understand customer onboarding patterns on Statsig.

## Table View
Event Explorer's **Table View** enables you to breakdown your overall events data based on aggregate event counts. This is useful to quickly review what events are being logged and the default view will show you the count of all your events. 

In the example below, you're seeing 100.41 million **product_view** events, 55.59 million **product_details** events, and so on over the **past one week**.

![image](https://user-images.githubusercontent.com/1315028/182466662-c9d0eb0a-184c-4052-b270-483b3edc56cb.png)


Clicking on an event row pops up a modal where you can add the event as a filter. 

![image](https://user-images.githubusercontent.com/1315028/182466471-dfc3c077-760f-4d6f-b2d8-9e1747f53db4.png)


Suppose you want to see which countries contribute most to purchases by country. To do this,
 - In the **Group by Column** dropdown, select **country** 
 - In the **Aggregation** section, select the **sum** function and the **value** field to aggregate; the **value** field captures the purchase amount for each order as part of the **purchase_event** (you can do the same with the **average** function as shown in the image below) 

![image](https://user-images.githubusercontent.com/1315028/182466923-a233ce3a-c0ee-4cea-9118-78c54f823b44.png)

Statsig currently supports **count**, **sum**, and **average** operations. Watch this space for more coming soon. 


## Time Series View
Switching to the **Time Series** view enables you to visualize trends of these values over time.  

![image](https://user-images.githubusercontent.com/1315028/182466764-8b7473e3-6dbe-4363-b46b-d86bd0f51b44.png)

This visualization is a powerful tool as you release new products and features. For example,
- You can monitor the gradual rollout of a product or feature, i.e. watch usage/impressions/clicks start to ramp up in a specific region or for a new feature
- You can watch for spikes in error logs, understand which users are being affected and when, and monitor rolling out a fix as errors return to baseline
- You can quickly gain context on spikes in app errors or reported issues; e.g. Are these errors specific to a certain region or a certain operating system platform? Are the errors affecting iOS, Android, Web, or all platforms? Did error spikes coincide with a gate or experiment launch?
- If a user or employee reports an issue, you can quickly confirm if this issue is widespread or localized; e.g. Is there a sharp drop in checkout impressions for everyone or only on our staging tier?

The **Time Series** offers different time granularities (ranging from 5min to 1day) and overlaid comparisons (week over week comparison for a single event) with up to 8 series in one chart.

## Samples View
The **Samples View** allows you to see sample rows for events. This is valuable to start exploring data when you're unfamiliar with the underlying data schema and want to see exactly is being logged. 

This query enables you to quickly see exactly which fields are being logged, what data is being logged in each field, and what kind of filters or groupings you might be able to apply to each field.

![image](https://user-images.githubusercontent.com/1315028/182467327-bb33f8f9-c334-4262-b841-04ccc8eb39d6.png)

At Statsig, we use this view to audit and understand what we log with each event to inform what logging and telemetry we are missing and should consider adding.


To learn more, read our blog post [Introducing the Events Explorer](https://blog.statsig.com/introducing-the-events-explorer-75c1044d2465).
