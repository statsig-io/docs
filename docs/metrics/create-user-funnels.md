---
title: Creating User Funnels
sidebar_label: Creating User Funnels
slug: /metrics/create-user-funnels
---

Statsig's **User Funnels** enable you to analyze how your users step through successive stages to complete a goal defined by you. Funnels are fertile ground for experimentation because they can yield several actionable ways to grow your product usage.  

Funnels enable you identify where your users may be facing friction or ambiguity, and how to increase the success rate of your goal. For example, funnels are commonly used by teams working to improve user activations by reducing the friction for users to sign up (register) for their application.

When you create a funnel, Statsig automatically publishes the number of users entering and exiting the funnel as well as intermediate conversion metrics 
(collectively known as [funnel metrics](https://docs.statsig.com/metrics#6-funnel-metrics)) in the Results tab of your experiments.  

To create a **Funnel** from **Metrics Catalog**- 
1. Log into the Statsig console at https://console.statsig.com
2. On the left-hand navigation panel, select **Metrics** and then click the **Metrics Catalog** tab
3. Click on the **Create** button
4. Under the "Metric Type" field, select _Funnel_
5. Select the **Users** radio button to track unique users (using the most successful attempt of a user), or **Events** to include multiple attempts of a user through the funnel
6. Enter the sequence of events that you want to include in the funnel
7. Click on **Create** to finish creating your funnel

NOTE- while you won't explicitly set a time window for your funnel up-front at the time of creation, you can dynamically select a date range over which to view your funnel once it is created and populated as a metric. 

![Screen Shot 2022-06-07 at 1 38 40 PM](https://user-images.githubusercontent.com/101903926/172478013-e88055cf-03ba-45bf-bd77-4714b6ab3188.png)

To create a **Funnel** from **Charts**- 
1. Log into the Statsig console at https://console.statsig.com
2. On the left-hand navigation panel, select **Metrics** and then click the **Charts** tab
3. Click on the **Create** button
4. Enter the chart name and select the **Chart Type** as _Funnel_
5. Select the **Users** radio button to track unique users (using the most successful attempt of a user), or **Events** to include multiple attempts of a user through the funnel
6. Enter the sequence of events that you want to include in the funnel
7. Enter the window of time over which you want to review user activity in the funnel (Statsig's default is 7 days)
8. Click on **Create** to finish creating your funnel

![Screen Shot 2021-12-10 at 4 17 15 PM](https://user-images.githubusercontent.com/1315028/145865252-f522b749-3e5c-41d9-8b28-851b88133b24.png)


