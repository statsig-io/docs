---
title: Funnel Metrics
sidebar_label: Funnel Metrics
slug: /metrics/create-user-funnels
---


You can create a custom **funnel metric**, from either the **Custom Metrics** creation wizard in the **Metrics Catalog** or via the **Charts** tab. 

![Screen Shot 2022-06-07 at 1 05 37 PM](https://user-images.githubusercontent.com/101903926/172472515-c94b264c-85a6-4b78-bf12-769585e4880d.png)

## Components of Funnel Metrics
Funnel metrics have a few components:
1. **Lineage**: Surfaces the events used to generate the funnel 
2. **Metric Value**: Metric value represents the overall funnel conversion rate, or the percentage of users who complete a funnel (trigger the end event) relative to all users who start the funnel (trigger the starting event)
3. **Roll-up Window**: Funnel metrics are calculated on a daily basis. 
3. **Conversion Rate between Stages**: This set of metrics track the percentage of users who triggered an event N relative to all users that triggered event N-1 in the funnel


![Screen Shot 2022-06-07 at 10 34 58 AM](https://user-images.githubusercontent.com/101903926/172446711-5511e394-b353-4d38-97f1-1b681b67042b.png)

After funnels are created and populated, you can view your funnel metric much like any other metric in Pulse. Additionally, you can expand the funnel metric to view Pulse performance at each step in the funnel. 

## User-based Funnel Metrics

When counting distinct events, funnel metrics add the number of events per day over the analysis period. When counting distinct users, funnel metrics add the number of distinct users per day over the analysis period. 

Suppose a funnel consists of events A, B, and C, in that order. User-based funnel metrics count the number of distinct users who triggered events A, B, and C on a given day. If you're tracking funnel conversion over multiple days, the daily granularity of funnel metrics may not be a good fit for your analysis.

## Example
In the example below, the **Square** variant shows a lift in the **overall funnel conversion rate**. Expanding the metrics to examine the entire funnel reveals two key insights:
* Both the **Square** and **Circle** variants show a lift in top-of-funnel DAU (_Land Page View Start DAU_). However, only the **Square** variant shows statistically significant increase in end-of-funnel DAU (_Purchase Event End DAU_).
* The overall funnel conversion rate improvement for **Square** is primarily due to the higher conversion from _Checkout Event_ to _Purchase Event_ stages in the funnel.  

![image](https://user-images.githubusercontent.com/90343952/148440643-8e8a24bd-934d-4100-a15a-abcbcc4bb11c.png)




