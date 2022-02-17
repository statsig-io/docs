---
title: Metrics Dashboard
sidebar_label: Metrics Dashboard
slug: /metrics/console
---

Metrics are available for all unit types enabled in the project.  User ID and Stable ID are provided by default and others can be added following [these steps](https://docs.statsig.com/guides/experiment-on-custom-id-types#step-1---add-companyid-as-a-new-id-type-in-your-project-settings).  Make a selection from the drop down to view event DAU and user accounting metrics calculated based on the desired unit type.

![Screen Shot 2022-01-06 at 2 55 39 PM](https://user-images.githubusercontent.com/90343952/148464170-d3edd74a-8bab-43f0-a9a6-7a72286ef029.png)

## Events
The Metrics console allows you to visualize all the [events that you have logged](/guides/logging-events) in Statsig. The **Events** tab shows all the events, including a real-time stream of events as they come in.

![image](https://user-images.githubusercontent.com/74588208/127933988-c981bf83-f20c-4404-8194-004017cf96ef.png)

From here you can drill into each event and see a detailed view of the logs, broken down by each unique value that was logged.

![image](https://user-images.githubusercontent.com/74588208/127934009-c94d7d55-6cdc-4c7e-8ea7-381a6fb4db3d.png)

## Users
The **Users** tab shows user-level metrics that are derived from the events that you log.

![image](https://user-images.githubusercontent.com/74588208/127933909-a51c5587-992b-4fc7-8dd4-147c149772cb.png)

## Custom Metrics
The **Custom** tab allows you to create new metrics based on the ones you have logged.

![image](https://user-images.githubusercontent.com/74588208/127936616-ee236410-a324-4990-a4eb-2e0d7a6829e1.png)

## Charts
The **Charts** tab enables you to visualize customer journeys through your application. These **User Flows** can be a great source of new hypotheses about customer behavior and you could turn these hypotheses into new features and experiments to validate your understanding of customer behavior.

![image](https://user-images.githubusercontent.com/1315028/141157888-ea748571-b049-41fd-b121-56d7894b5ab7.png)

## Metrics Catalog

The **Metrics Catalog** tab allows you to search and tag your metrics. Tags enable you organize your metrics and create collections of metrics that are associated in some way. For example, you could tag a set of metrics focused on a product area, business function, business objective, and so on. You can also create a loose collection of guardrail metrics that teams check in every experiment to ensure there are causing no unexpected effects in other parts of the business. Once you create a tagged collection of metrics, you can easily pull up this set of metrics when viewing your experiment results and zoom into the context that you want to focus on. 

![image](https://user-images.githubusercontent.com/1315028/154570829-7cc258e7-d4b4-49a3-b0b4-b7023e589f23.png)


