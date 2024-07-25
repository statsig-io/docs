---
title: User Journeys
tags:
- Statsig Cloud 
sidebar_label: User Journeys
slug: /product-analytics/user-journeys
---

# User Journeys

## Overview

The User Journeys chart shows you the many paths users are taking through your product so you can better understand the end-user experience. 

![image](https://github.com/user-attachments/assets/75660cfc-c0cd-4114-8f99-34c0df67728e)


### Use cases

- **Event Pathways:** Follow along the most common paths users are taking through your product
- **Identifying Drop-off Points:** Pinpoint where users are dropping off within key product flows
- **Discovering Unexpected Behavior:** Uncover surprising usages and iterate on your product

## Creating a User Journeys Chart

### Step 1: Choose an starting or ending event

The selected event will indicate where you want your analysis to begin. You can choose whether you want to explore a journey that either starts or ends with a specific event. This allows you to understand where people go from some starting event, or where people come from for some ending event. 

Starting events are often some “top-of-funnel” event such as sign-up or log-in but can also be an event trigger for any new feature you introduce into your product. 

You can optionally add filters to the event to scope your analysis to a specific group.

### Step 2: Choose an ID type

Statsig allows you to perform individual or group analytics. This enables you to analyze the paths of registered users with User IDs, Stable IDs, or your own custom IDs. 

### Step 3: Define your measurement criteria

Under the “Measured as” section, you can further refine your analysis by choosing between total conversions or unique conversions. Under total conversions, users can re-enter the flow every time they trigger the start event. Under unique conversions, the users will only show up in the path once. 

Next, you can specify the duration of your observation. Defaulted to 1 hour, you can change the length of time users have to convert to the next event. This is can help validate if users are passing through flows at a pace you expect

You can gain additional context by breaking the User Journey out by an event property. This allows you to choose a specific event property and view the user journey granularity expanded by the different property values of the select property. This is similar to a group-by. For example, you can view user journeys split out by operating system.  

Finally, you can further filter down your exploration by excluding user paths that include a specified event. 

When editing the measurement criteria, remember to click “Run Query” to confirm your selections. 

### Step 4: Adjust your chart visualization

Finally, at the top bar of the chart, you can edit the conversion percent threshold, hide events, and expand your time window. The conversion percent threshold sets the minimum percentage of conversions needed to be considered relevant. If below the threshold, the event will be consolidated under “Others”. The “Hide Events” selector allows you to filter out extraneous events you don’t want to see. Finally, adjusting the time selector allows you to view user journeys during the time window you most care about. 

## Using User Journeys

After selecting your start event, you will see a sankey diagram of all next steps users took. By clicking any node, the graph will continue on to display the next events users triggered. Notice that under each event is the total number of events counted and the percentage of users who triggered this particular event. You can continue clicking on nodes to explore user flows through your product.
