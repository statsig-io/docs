---
title: Custom Pulse Queries
sidebar_label: Custom Queries
slug: /pulse/custom-queries
---

## Custom Queries

Custom queries can be run on Pulse results in order to gain deeper insights from your experiments and feature roll-outs. These allow you to filter or group metrics by event or user dimensions, or filter to a specific set of users to see how an experiment or launch has impacted these users' experience.

Be careful with statistical interpretation of Custom Queries, especially when grouping by a dimension with lots of options. This can increase your chance of seeing a false-positive statistically significant result.

### Running a Custom Query

To run a Custom Query, navigate to the **Explore** tab within your experiment.

<img width="467" alt="Screenshot 2025-02-06 at 6 49 18 PM" src="https://github.com/user-attachments/assets/b2737ba1-dbf4-4235-a806-afea5dfe9a78" />

Custom Query fields: 

- **Date range:** The date range you're running your analysis on
- **Metric(s):** The metric(s) you want to analyze. You can select a single metric, a few metrics, or a Metric Tag. Adding a Tag will include all the metrics within that Tag in your Custom Query. There are two "default" Tags included as shortcuts- "All Metrics" (every metric in your Metrics Catalog), and "Scorecard Metrics" (the metrics included in the Primary/ Secondary Metrics sections of your experiment setup). 
- **Filter:** You can filter each individual metric by either Event or User dimensions. For example, if you wanted to look at your experiment results for Canadian users only, you could filter to "Country = CA". 
- **Group By:** You can group your Custom Query results by either an Event or User dimension. Whereas Custom Query filters can be applied at the *per-metric* level, the Group By action is at the *query* level (so all included metrics will have whatever Group By you select applied to them). 
- **(Advanced) ID List Segment filters:** You can choose an ID-list based [Segment](/segments), and your results will only be calculated for users who are in that segment. This can be useful if you forgot to log an important user dimension that you want to filter to, or realized that you only care about a sub-population that you've defined in your own data warehouse. 
  - Careful! This option can easily lead to erroneous and biased results. You will need to make sure the segment is defined based on the user's status _before_ they were exposed to the experiment or feature gate.
  - Similarly, you can choose to _exclude_ a certain ID list segment, for example if you want to exclude a set of users who have been retroactively identified as bad actors from your lifts analysis.
- **(Advanced) Filter by Exposure Date:** You can also filter the results by Exposure Date which can give you more flexibility. You can choose only include or exclude a date range, or in WHN, you can additionally include/exclude users based on when they were first exposed to the experiment.
  - This is useful when your metrics have novelty effect, delayed impact, or specific scenarios where you only want to filter your results to certain users. Use it cautiously because it can lead to biased results.  

> Note: User data in this tool is based off of first-touch attribution. The filters and grouping applied will be based on the user attributes collected at the time of first exposure.

![Screen Shot 2023-12-01 at 5 46 04 PM](https://github.com/statsig-io/docs/assets/101903926/6f65f611-44ba-4d97-ad19-f73ba3c3b8d8)

![Screen Shot 2023-12-01 at 5 48 17 PM](https://github.com/statsig-io/docs/assets/101903926/2b1a7528-8361-41b0-8163-43af950b1055)


### Viewing a Custom Query in Explore

These queries take a few minutes to run (don't worry, we'll send you an email once your results are ready in case you want to hop to another task), but once complete the results will be visible in the **Query History** section of the **Explore** interface. All historical queries (across your team) will be stored here. You can also give your query a display name inline for easier future identification. 

<img width="1345" alt="Screenshot 2025-02-06 at 6 52 42 PM" src="https://github.com/user-attachments/assets/76d8f99a-668f-4218-95b4-91c0814f254b" />


### Scheduling a Custom Query

If you want a daily refresh of a given Custom Query, you can schedule your Custom Query directly from the **Explore** tab. To do this, author the Custom Query you wish to schedule, then tap the "..." menu, then **Schedule**. This Custom Query will now run daily and live in the **Scheduled** tab of your Metric Lifts. 

<img width="1347" alt="Screenshot 2025-02-06 at 6 53 16 PM" src="https://github.com/user-attachments/assets/9ecb39c0-0cd0-478f-8ef6-ff9150cbb11b" />

<img width="505" alt="Screenshot 2025-02-06 at 6 53 33 PM" src="https://github.com/user-attachments/assets/fad0c8ce-3f9c-46be-a09c-52263e124259" />





