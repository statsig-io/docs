---
title: Distribution
tags:
- Statsig Cloud 
sidebar_label: Distribution
slug: /product-analytics/distribution
---

# Distribution Charts

# Overview

Distribution charts in Metric Explorer help you visualize the range of user experiences across your product. These charts are a great way to generalize central tendencies, evaluate product health, and identify outlying behavior.

## Use Cases

- **Analyze the Range of User Experiences:** Study the distribution of event values to identify any outliers or trends
- **Measure Feature Engagement:** Visualize how often each user is interacting with a critical event
- **Montitor Product Performance:** Ensure that your product isn't experiencing performance issues like unusual latency times

# Creating a Distribution Chart

## Step 1: Choose a metric or event

The first step to creating a distribution chart is to decide if you want to use a metric or an event. The distribution of a metric will show you the aggregated property value per unit ID. For example, if your metric aggregation is by count, the chart will display the number of times each user has triggered the event. The distribution of an event will show you the range of data stored under the property “Value” for each logged event. Note that the distribution of events is only displayed if the data under “Value” is numeric.

## Step 2: Refine your bucket size

As a default, the bucket size will be set to 1 with a minimum value of 0 and a maximum value of 10. Note that the buckets are always lower inclusive and upper exclusive. If your range exceeds the initial max bucket value, we exhibit the data as “10+”. You can refine your bucket sizes, minimums, and maximums to find the best view of your data.

# Interpreting your Distribution Chart

## Distribution of a metric

Under distribution of a metric, there are two important factors to consider: the unit ID and the metric value. The distribution will always represent the metric values per unit ID. The X-axis represents the metric value. This could be a count of events or the sums and averages of a property value, depending on the configuration of your metric. The Y-axis is the unit ID of the metric. Depending on the construction, this can be users, stable IDs or a custom ID you’ve constructed.

## Distribution of an Event

The distribution of an event will always display the range of data under the “Value” property of your event. Thus, the X-axis is the “Value” and the Y-axis is the number of events.
