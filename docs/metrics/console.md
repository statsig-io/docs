---
title: Metrics Dashboard
sidebar_label: Metrics Dashboard
slug: /metrics/console
---

Metrics are available for all unit types enabled in the project.  User ID and Stable ID are provided by default and others can be added following [these steps](https://docs.statsig.com/guides/experiment-on-custom-id-types#step-1---add-companyid-as-a-new-id-type-in-your-project-settings).  Make a selection from the drop down to view event DAU and user accounting metrics calculated based on the desired unit type.

![Screen Shot 2022-06-07 at 10 58 26 AM](https://user-images.githubusercontent.com/101903926/172450890-4a4c95eb-a362-49a6-90ad-68f3460a933f.png)

## Events
The Metrics console allows you to visualize all the [events that you have logged](/guides/logging-events) in Statsig. The **Events** tab shows all the events, including a real-time stream of events as they come in.

![Screen Shot 2022-06-07 at 10 59 14 AM](https://user-images.githubusercontent.com/101903926/172451019-fc450842-a546-4ea0-94a9-d54df8279ed2.png)

You can toggle between a list view or chart view of your events to view the trend line over time.  

![Screen Shot 2022-06-07 at 12 00 22 PM](https://user-images.githubusercontent.com/101903926/172461387-a3d42641-2c2c-4128-aabc-fc2b5dba2ed9.png)

From here you can drill into each event and see a detailed view of the logs, broken down by each unique value that was logged.

![Screen Shot 2022-06-07 at 12 05 35 PM](https://user-images.githubusercontent.com/101903926/172462231-ff2f3063-0c4e-49fd-af17-7147bd09d3d1.png)

## Metrics Catalog
The **Metrics Catalog** tab allows you to search and tag your metrics. Tags enable you organize your metrics and create collections of metrics that are associated in some way. For example, you could tag a set of metrics focused on a product area, business function, business objective, and so on. You can also create a loose collection of guardrail metrics that teams check in every experiment to ensure there are causing no unexpected effects in other parts of the business. Once you create a tagged collection of metrics, you can easily pull up this set of metrics when viewing your experiment results and zoom into the context that you want to focus on. 

![Screen Shot 2022-06-07 at 12 08 08 PM](https://user-images.githubusercontent.com/101903926/172462680-68a6de4e-17bf-4b11-920d-6d7830551012.png)

 Similar to the **Events** tab, you can toggle between a list view or chart view of your metrics to view the trend line over time.  
 
 ![Screen Shot 2022-06-07 at 12 09 40 PM](https://user-images.githubusercontent.com/101903926/172462947-877bbcc7-46b3-45cd-ac57-d0dc2c949d7d.png)


## Custom Metrics
The **Custom** tab allows you to create new metrics based on the ones you have logged.

![image](https://user-images.githubusercontent.com/74588208/127936616-ee236410-a324-4990-a4eb-2e0d7a6829e1.png)

## Charts
The **Charts** tab enables you to visualize customer journeys through your application. These **User Flows** can be a great source of new hypotheses about customer behavior and you could turn these hypotheses into new features and experiments to validate your understanding of customer behavior.

![image](https://user-images.githubusercontent.com/1315028/141157888-ea748571-b049-41fd-b121-56d7894b5ab7.png)

The **Users** tab shows user-level metrics that are derived from the events that you log.

![image](https://user-images.githubusercontent.com/74588208/127933909-a51c5587-992b-4fc7-8dd4-147c149772cb.png)


