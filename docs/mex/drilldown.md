---
title: Metric Drilldown Charts
tags:
- Statsig Cloud 
sidebar_label: Metric Drilldown
slug: /mex/drilldown
---

# Metric Drilldown

## Metric Drilldown

The Metric Drilldown chart in Metrics Explorer is a versatile tool for understanding customer behavior and trends within your product. Designed for clarity and depth, it allows you to analyze key metrics and user behavior over time. Importantly, it also allows you to delve several layers deeper into your metrics by filtering to interesting properties or cohorts, as well as the ability to group-by these same properties to compare behaviors between groups.

## Use Cases

- **Trend Analysis Over Time**: Gain insights into how specific metrics evolve over time. Visualizing product data in Metrics Explorer allows you to track and compare key performance indicators and user behavior, and helps understand long-term trends and short-term fluctuations in how users engage with your product and your product’s performance.
- **Identify interesting cohorts**: Define and explore interesting cohorts by zooming in on users who performed certain events at frequencies you define.
- **Understand how Targeted Feature Launches, A/B tests, and Experiments affect usage:** Split any metric out by Experiment Group or Feature Gate Group to compare how those metrics perform for different groups. Leverage automatically generated annotations on charts for important decisions such as Feature or Experiment launches to help correlate those decisions with changing trends.
- **Segmentation and Comparison**: Dissect metrics to understand how different user segments or product features perform. This is crucial for identifying which areas are providing value for your users and those which may need more attention or improvement. It is also useful in understanding how different segments interact with your product, and for identifying unique trends or needs within these groups.
- **Filtering**: Focus on specific segments or cohorts that are of particular interest. This filtering capability allows for a more targeted analysis, helping you to understand the behaviors and needs of specific user groups.
- **Statistical Understanding:** Understand how the average, median, or other percentile value (e.g. p99, p95) of a metric changes over time.
- **Dynamic Metric Creation with Formulas**: Craft new metrics on the fly using custom formulas. This flexibility is useful in deriving ad-hoc insights with minimal effort.
- **Flexible Visualization Options**: Choose from a range of visualization formats, like line charts, bar charts, or stacked bar charts, to best represent your data. The right visualization can make complex data more understandable and actionable.
- **Event Samples for Debugging**: Quickly access and analyze a metric’s underlying sample events, and the granular user-level information attached to the event. This feature is particularly useful for troubleshooting and understanding the root causes of trends or anomalies in your data.
- **Detailed Data Control**: Adjust the granularity of your data analysis, from high-level overviews to detailed breakdowns. Use features like rolling averages to smooth data for more accurate trend analysis and decision-making.

# Using the Metric Drilldown Chart

## Selecting Metrics and Events

In Metrics Explorer you can choose events, custom-metrics, or auto-generated metrics to explore. You can add several metrics and events to plot on a single chart. 

### Events

When selecting an event, the total number of times the event occurred (Count) on a given data point (hour, day, etc) will be plotted by default. You can also choose different ways to aggregate event data. The full list is as follows:

- **Count**: Plot the number of times the event occurred within the given time range per data point.
- **Unique**: Plot the number of unique ids (generally UserIDs) that performed the event in the given time range per data point.
    
    ![image](https://github.com/statsig-io/docs/assets/3464964/6f450da6-0e1c-44a9-91f2-8e51e1225e77)
    
    - When viewing data on uniques (e.g. unique users) at daily granularity, you can choose to have the value of each daily data point represent the number of unique weekly users (unique users over previous 7 days). This enables you to get a sense of how weekly usage is changing day over day.
        
        ![image](https://github.com/statsig-io/docs/assets/3464964/ff68249f-940c-47f4-997f-5410644e8f08)

        
- **Average**: Plot the average of a selected event property value within the given time range per data point. Note this only works for properties that have numerical values.
    
    ![image](https://github.com/statsig-io/docs/assets/3464964/0e283f82-a06b-49d3-910f-66fffcf25fb1)

    
- **Sum**: Plot the sum of a selected event property value within the given time range per data point. Note this only works for properties that have numerical values.
    
    ![image](https://github.com/statsig-io/docs/assets/3464964/d0bf3d0c-f37e-4e46-bf1d-751eac554e84)

    
- **Percentiles**: Plot the value of a selected event property value at the selected percentile within the given time range per data point.
    
    ![image](https://github.com/statsig-io/docs/assets/3464964/9933b80e-e24f-467b-9f56-b502c9522b36)

    

### Metrics

Selecting a custom Metric or auto-generated  Metric plots the value of that metric over your selected date-range. 

**Viewing and Modifying the Metric Definition**

You can easily view the definition of the metric directly below the metric name.  You can also modify your metric plot on the fly by making ad-hoc edits to the event based definition shown. This allows you to plot new metrics on the fly, based on metrics you have already defined.  

### Comparing Multiple Metrics or Events

You can compare multiple metrics or events by plotting them on the same chart. To add multiple metrics click the “+” icon and select “Metric”. Then select the metric of interest. 

When multiple metrics are plotted, you can scope to a single metric by clicking anywhere on that metric’s row in the table below the chart. Clicking on the row again undoes the scoping.  

You can scope to a specific set of metrics by using the check boxes next to the metric names in the table. 

### Filtering

It’s often useful when exploring data to narrow your exploration down in order to find an interesting insight. Filters allow you to scope to events & metrics logged by users with specific properties. 

To add a filter to an event or metric, click the filter icon and select the event or user property you would like to filter to. 

### Adding formulas

A powerful tool for on-the-fly analysis of trends and user behavior are formulas. They allow you to dynamically combine and transform plotted events and metrics to answer new questions as they arise using mathematical expressions. 

To add a formula, hover over the “+” icon in the Metrics section and select Formula. This will give you a free-form text field in which you can use the label of each plotted Metric or Event (each plotted metric is labeled with a letter) as variables in your expression. For example if you had

- Metric A, which plotted number of unique purchasers
- Metric B, which plotted total purchases

You could plot purchases per purchaser as “B/A”.

## Drilling down

In addition to plotting metrics, you may want to drill into your metrics to identify unique groups that tell you something interesting about how people are leveraging your product. We support several features that make finding these types of insights easy. 

### Group-By

Leveraging a Group-By makes it easy to disaggregate plotted metrics and events by a selected property or group. Doing so allows you to compare how an action or user behavior may correlate with a specific property. Adding a Group-By will split the the plotted metric(s) into several plots. By default we only show the top ten groups by value on the chart, but you can select more groups. You can select 50 groups when the chart is set to daily granularity. 

A metric can be grouped-by event properties, user properties, experiment group, or feature gate group. 

**Feature Gate  and Experiment Groups**

At Statsig we believe in the power of experimentation. To that end, you can also select one of your Feature Gate or Experiments in order to split out a metric by the different groups in the selected test. 

**Adding a Group-By**

To add a group by, hover over the “+” icon in the Drilldown section and select Group By. You can then select the property or experiment group to split the metric out by. 

**Quickly hiding or isolating lines**

When performing a Group By, it’s often useful to isolate lines to show data for a specific set of groups. You can do this by clicking in the row representing that group in the table view under the cart. Clicking on a group that is currently isolated will once again show all groups. 

You can uncheck and check groups in the table view to scope to a custom set of groups. 

### Define and Compare Event-Based Cohorts

Building a useful group of users to analyze often requires a bit more precision than just comparing by different property values. For example you may want to understand the behavior of your power users and compare them against your general set of users. 

To support this we allow you to define event-based cohorts. You can select an event of interest, and then define a frequency criteria for how often users in the cohort performed the event. These criteria include: 

- Performed the event ***at least*** some number of times
- Performed the event ***at most*** some number of times
- Performed the event ***exactly*** some number of times

You can also define the window in which a user performed the event for inclusion, as well as filter to some property in order to be as granular as needed when defining the cohort. 

We are planning to ship support for saving cohorts for reuse in early 2024. 

## Exploring a Metric Drilldown Chart

### Selecting chart Granularity

The Metric Drilldown chart gives the flexibility to view data at the granularity you need. You can view data at the daily, hourly, 30 minutes, 5 minute, or 1 minute granularity. This granularity corresponds with the interval between x-axis values. Viewing data at granularities less than hourly limits the analysis time window to 1 day. 

The default chart granularity is daily. You can change this by selecting the “Daily” drop down in the top right of your chart and selecting the granularity you prefer. 

Note that when viewing data on uniques (e.g. unique users) at daily granularity, you can choose to have the value of each daily data point represent the number of unique weekly users (unique users over previous 7 days). This enables you to get a sense of how weekly usage is changing day over day.  

### Setting the Date Range

The default date range of a chart is 14 days. To select the date range of a chart click on the “Last 14 days” dropdown and select one of the quick date ranges, or select a custom range you prefer. 

### Smoothing out the data with Rollups

Metrics like daily usage often have seasonality effects which can make longer-term trends harder to see at a glance. To help with this, techniques such as modifying each data point on a daily chart to represent a 7 day rolling average is useful. 

We support the following rollups to smooth out data, each of which can be rolled up over 3, 7, 14, 28, 48, or 60 data points:

- Rolling average: Replaces each data point with the average of the preceding number of selected data points.
- Rolling sum: Replaces each data point with the sum of the preceding number of selected data points.

### Selecting the chart visualization

Metrics Drilldown offers many ways to visualize your data, including: 

- **Line:** Useful when plotting one or or metrics.
- **Stacked Line:** Useful when comparing groups to understand the relative proportion a certain group has of a metric or event.
- **Bar:** Useful when comparing the total value of two metrics over the entire date range.

### Zooming in

Often when digging for insight, you may want to quickly zoom in on a certain portion of the date range to view things with more granularity. To help with this, you can simply use your mouse to click at one end of the date range you want to zoom in on, and hold the mouse button down while moving to the other end of the date range of interest. Letting go of the mouse button will then zoom in on that portion of the chart. To reset your zoom, click “Reset Zoom” in the top right of the chart. 

### Sharing your insights

Once you’ve arrived at an insight you find interesting and want to share you have two options for sharing: 

- **Share via URL:** Simply copy the URL. This is a quick and easy way to share a query as it currently is defined.
- **Create a share link:** If you would like to share a shorter, cleaner, URL, clicking the “…” button in the top right of the chart and then clicking “Share Link” copies a shortened link to the query as currently configured to the clipboard.
- **Share to Dashboard:** Clicking the “…” button and selecting “Export to Dashboard” allows you to either save your chart to an existing dashboard, or create a new dashboard where you can save the chart.

Note sharing a chart via URL or shortened link essentially shares a “snapshot” of the chart as currently defined when the link was copied. Any subsequent changes will not be captured via the share link.
