---
title: Funnel Charts
tags:
- Statsig Cloud 
sidebar_label: Funnels
slug: /product-analytics/funnels
---
# Funnels

# **Overview**

Funnel Charts in Metrics Explorer provide a granular understanding of what portion of users completing each step of a journey you define through your product or service. These charts are useful for understanding user behavior, identifying bottlenecks, and helping you develop insight-driven product changes that help users convert through your product more successfully.

## **Example Use Cases**

- **Conversion Analysis**: Monitor the progression of users through stages like sign-up, adding to cart, and purchase completion.
- **Identifying Drop-off Points**: Pinpoint where users drop-off of a process, allowing targeting improvements at these points.
- **Comparing User Segments**: Observe how different user segments move through the funnel, highlighting variations in behavior based on demographics, user types, or other criteria.
- **Product Optimization**: Determine which features or steps effectively move users to the next stage, and which require improvements.

# Defining a User Funnel

## Step 1: Add Steps to your Funnel

To define a funnel, select a series of a events that represent different parts of a product flow that you are interested in understanding.

To do so:

1. Go to **Metrics Explorer** under **Analytics** in the Navigation Bar, and switch over to the Funnel Charts view. 
2. Add steps to your funnel using the “**+**” icon. **Optionally add filters** to funnel steps to target specific event or user properties.

### Combining Multiple Events into one step

You can also combine multiple events into a single step. This is especially useful when there are more than 1 qualifying events that are indicative of a meaningful yet single portion of your funnel. Combined events are done so using OR logic. To do this: 

1. On the step in question click the “…” button and select “**Combine Events**”.
2. Select the an additional event to add. 
3. Add any desired filters to each of the events in the funnel step.

Repeat these steps as needed. You can define a step as a combination of up to 5 events. 

![image](https://github.com/user-attachments/assets/7f2ee5ad-c365-45dc-953c-4ac9ab2c97f1)



### Filtering to the first time a user performed an event

It is sometimes useful to understand the first-time user experience, which may significant impact on things such as long term retention or may meaningfully differ from general flows through the product. To help analyze first-time experience, you can filter the events in a funnel to the first time ever a user (or other unit ID) performed an event. To do so:

1. Click “…” next to the event in question. 
2. Select the “**Apply First-time Filter**”. 

![image](https://github.com/user-attachments/assets/b646b075-4594-467b-8791-ec8674a635c5)


### Renaming Steps

When sharing a Funnel Chart you have created, such as by saving it to a dashboard, the event names as logged may not always be easily readable or meaningfully understood. In these cases you may want to rename the steps in your funnel for better legibility. To do so:

1. Click the “…” next to the event name you would like to rename.
2. Click “**Rename Funnel Step**”. 
3. Give the funnel step a new easily readable name. 

Note this doesn’t change the name of the underlying event, and only applies to the funnel being configured. 


## **Step 2: Select a Graph Type**

We support 3 graph types for understanding conversion funnels:

- **Conversion Rate**: This is a standard funnel view that offers a step-by-step breakdown of where users are dropping off in your funnel, and the number of people converting through each step.
- **Conversion Rate Over Time**: This shows how the overall conversion rate of your funnel has changed over time. This is useful in understanding how new features and product changes have made an effected your funnel conversion rate.
- **Time to Convert**: This graph type helps you understand distributions in time it takes to complete your funnel.

## **Step 3: Choose an ID Type**

In general, you want to construct funnels to understand the rate at which individual users make it through each step of the flow you’ve defined. This means creating a funnel using a userID.

However, some interesting funnels may involve several people in an organization using your service. For example, you may want to understand the end-to-end success of company onboarding to your service, where different people are involved in purchasing, deploying, and then using your service.

To this end, Statsig allows you to perform individual or group analytics. This enables you to analyze the success of your funnel at the user level, or the success of your funnel for whole groups such as organizations or companies. 

You can choose any of the ID types defined in your Statsig project to create a funnel over.

***Group analytics is not an paid add-on at Statsig and is included at no-extra cost for all tiers.***

## **Step 4: Define the Conversion Window**

Once you have defined your funnel, you can limit your analysis to Users (or other Unit IDs) that converted within a specified time frame. Users who start the funnel but do not convert within this time frame will be count as dropped off. 

## **Step 5: Drilldown**

To better understand how conversion varies between different groups of users, you leverage the **Group-By** feature to split out funnels by properties, experiment groups, or feature gate groups. To this, click the **“+”** to the right of “Group By” and select the property, experiment, or feature gate you would like to split out the funnel conversion analysis by. 

## Advanced Funnel Analysis

### Ordered or Unordered Funnels

In general, the power of funnels lies in understanding whether or not users completed a specific set of events in a specific order. This is the most common scenario, and you can achieve this by toggling “Ordered” on. This is the default. 

Ordered funnels require that a user completes the selected events in the specified order to be counted as converted. The user may still perform other events between the specified events, including events in the funnel, and still be counted as converted. For example, if an ordered funnel is defined with events A, B, C, and D, the following sequence will count as converted: A→B→B→A→C→K→D.

Sometimes, you just want to know whether a user has completed all a given set of events, regardless of the order they completed them in. You can achieve this by toggling “Ordered” off in the advanced settings. Unordered funnels only require that the user completes the specified events within the given time range to be counted as converted.

### Unique Users (or Unit ID) vs Total Conversions

You can choose whether your funnel analysis is defined by the total number of conversion that occur, or the number of unique users who convert. The default is Unique Users. 

### Daily Aggregation

When toggled on, this calculates funnel conversions per calendar day. A given unit with funnel conversions on multiple days is counted as multiple conversions. This is toggled on by default.
