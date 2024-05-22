---
title: Funnel Charts
tags:
- Statsig Cloud 
sidebar_label: Funnels
slug: /product-analytics/funnels
---
# Overview

Funnel Charts in Metrics Explorer provide a granular understanding of what portion of users completing each step of a journey you define through your product or service. These charts are useful for understanding user behavior, identifying bottlenecks, and helping you develop insight-driven product changes that help users convert through your product more successfully. 

### Example Use Cases

- **Conversion Analysis**: Monitor the progression of users through stages like sign-up, adding to cart, and purchase completion.
- **Identifying Drop-off Points**: Pinpoint where users drop-off of a process, allowing targeting improvements at these points.
- **Comparing User Segments**: Observe how different user segments move through the funnel, highlighting variations in behavior based on demographics, user types, or other criteria.
- **Product Optimization**: Determine which features or steps effectively move users to the next stage, and which require improvements.

# Defining a User Funnel

## Step 1: Select the Steps of your Funnel

To define a funnel, select a series of a events that represent different parts of a product flow that you are interested in understanding. 

To do so:

1. Go to Metrics Explorer by clicking the Metrics tab, and use the top left drop-down to select Funnel. 
2. Add steps to your funnel using the “+” icon. Optionally add filters to funnel steps to target specific event or user properties. 

## Step 2: Choose an ID Type

In general, you want to construct funnels to understand the rate at which individual users make it through each step of the flow you’ve defined. This means creating a funnel using a userID.

However, some interesting funnels may involve several people in an organization using your service. For example, you may want to understand the end-to-end success of company onboarding to your service, where different people are involved in purchasing, deploying, and then using your service.

To this end, Statsig allows you to perform individual or group analytics. This enables you to analyze the success of your funnel at the user level, or the success of your funnel for whole groups such as organizations or companies.

You can choose any of the ID types defined in your Statsig project to create a funnel over. 

## Step 3: Define the Conversion Window

Once you have defined your funnel, select the time frame in which a user must complete the funnel to be counted as having converted.

Selecting “Daily” means the user will have to complete each step in the funnel within 24 hours to be counted as having converted.

Selecting “Overall” means that if a user completes the steps in the funnel at any time within the selected time range (e.g., Last 14 days), they will be counted as converted.

## Step 4: Define Sequence Requirements

In general, the power of funnels lies in understanding whether or not users completed a specific set of events, in a specific order. This is the most common scenario, and you can achieve this by selecting “Sequential” as the funnel calculation.

Sequential funnels require that a user completes the selected events in the specified order to be counted as converted. The user may still perform other events between the specified events, including events in the funnel, and still be counted as converted. For example, if a sequential funnel is defined with events A, B, C, and D, the following sequence will count as converted: A→B→B→A→C→K→D.

Sometimes, you just want to know whether a user has completed all a given set of events, regardless of the order they completed them in. You can achieve this by selecting “Unordered” in the funnel calculation. Unordered funnels only require that the user completes the specified events within the given time range to be counted as converted.
