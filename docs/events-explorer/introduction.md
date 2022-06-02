---
title: Events Explorer
sidebar_label: Events Explorer
slug: /events-explorer
---

The Events Explorer tab allows you to analyze your event log data in real-time, supporting a variety of queries against the data you send us by when you use our SDKs or integrations.

## Events Explorer Use Cases
We built Events Explorer with two primary use cases in mind:
1. Diagnosing Product Performance: As you accelerate your product development velocity, Events Explorer enables you to monitor and interactively analyze how your product is performing in real-time. Product performance issues can range from app crashes to seemingly innocuous bugs that impact app-wide usage. Compared to pre-aggregated graphs that limit root cause analyses, Events Explorer allows you to dive deep into arbitrary product data for real-time, ad-hoc analyses.
2. Exploratory Analyses: As you experiment with more product features, Events Explorer enables you to investigate product usage patterns that can point to further improvements and new product hypotheses. For example, we've been using the Events Explorer over the last couple of weeks to better understand customer onboarding patterns on Statsig.

## How to use Events Explorer
1. When you first land on the Events Explorer tab from the left hand navigation bar, you'll see a Table view of the top 20 events that you're logging, ordered by volume.
2. To dive deeper into any of these events, you may want to start by looking at samples of this event. You can do this by switching to the Samples view from the Results View dropdown. In the Filters section, select eventName from the dropdown, enter the name of the event you want to explore, and hit Run Query. This will generate a sample of the most recent events with the columns that you've selected.
3. Suppose you want to see the trend for this event over the last week. Switch to the Time Series view, set the Group By field to eventName, the Aggregation field to count, set the Time Range to Past 1 week, and hit Run Query to see how this event is trending over time.
4. Suppose you want to chart the sum or average of a property for this event. Select Sum or Average from the Aggregation dropdown, and select the property to aggregate from the dropdown next to it. Hit Run Query to see the Time Series view of the aggregation. You can further breakdown this aggregation by setting the Group By column to the dimension you want to see (e.g. country in the last screenshot below).

Time series view:
![Screen Shot 2022-06-02 at 9 26 13 AM](https://user-images.githubusercontent.com/88338316/171684227-cdce9072-b4b2-4ac3-8574-71f184ccbbc5.png)

Samples view:
![Screen Shot 2022-06-02 at 9 30 51 AM](https://user-images.githubusercontent.com/88338316/171684253-eab884ed-3e33-44b0-8e64-340338f01c07.png)

Table view:
![Screen Shot 2022-06-02 at 9 30 34 AM](https://user-images.githubusercontent.com/88338316/171684238-59e93285-7d61-4905-b684-22ef4928c1fc.png)


## Notes
Events Explorer uses sampled data over a 14-day rolling window. Whenever you aggregate data (count, average, sum), we use the inverse of the sampling rate for a given row as the weight, to provide approximate values of the aggregation.
