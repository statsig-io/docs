---
title: Custom Pulse Queries
sidebar_label: Custom Queries
slug: /pulse/custom-queries
---

## Custom Queries

Custom queries can be run on Pulse results in order to gain deeper insights from your experiments and feature roll-outs. These allow you to group by user dimensions, or filter to a specific set of users to see how an experiment or launch has impacted these users' experience.

Be careful with statistical interpretation of Custom Queries, especially when grouping by a dimension with lots of options. This can increase your chance of seeing a false-positive statistically significant result.

### Running a Custom Query

To run a Custom Query, navigate to your Pulse results. This is accessible via the **Explore** tab within **Metric Lifts** in Pulse.  

![Screen Shot 2022-10-14 at 10 23 58 AM](https://user-images.githubusercontent.com/101903926/195905568-65c4f0a4-beaa-4c5e-a5c4-8ca39b3096de.png)

Custom Query fields: 

- **Name:** The name of your Custom Query. This is a display name, so use it to describe your query and why you're running it.
- **Date range:** The date range for which you're running your analysis on
- **User dimension group by:** A user dimension that the results will be grouped by. For example, if you were to choose Country, each Country would have its own lift calculated in the Custom Query
- **User dimension filter:** A user dimension that the results will be filtered to. Users not matching this dimension will be excluded from the analysis.
- **(Advanced) ID List Segment filters:** You can choose an ID-list based [Segment](https://docs.statsig.com/segments), and your results will only be calculated for users who are in that segment. This can be useful if you forgot to log an important user dimension that you want to filter to, or realized that you only care about a sub-population that you've defined in your own data warehouse. 
  - Careful! This option can easily lead to erroneous and biased results. You will need to make sure the segment is defined based on the user's status _before_ they were exposed to the experiment or feature gate.
  - Similarly, you can choose to _exclude_ a certain ID list segment, for example if you want to exclude a set of users who have been retroactively identified as bad actors from your lifts analysis. 


> Note: User data in this tool is based off of first-touch attribution. The filters and grouping applied will be based on the user attributes collected at the time of first exposure.

### Viewing a Custom Query in Explore

These queries take a few minutes to run, but once complete the results will be visible inline within the **Explore** tab of **Metric Lifts** for the gate or experiment you ran the query for (you will also receive an email and console notification with a link). 


![Screen Shot 2022-10-14 at 10 30 35 AM](https://user-images.githubusercontent.com/101903926/195906665-45aee135-5b3b-48ab-b3a8-3e7ea2af41a9.png)


![Screen Shot 2022-10-14 at 10 32 01 AM](https://user-images.githubusercontent.com/101903926/195906893-6307319b-e0af-453c-a77c-1e13c35a90aa.png)

### Scheduling a Custom Query

If you want a daily refresh of a given Custom Query, you can schedule your Custom Query directly from the **Explore** tab. To do this, author the Custom Query you wish to schedule, then tap the "..." menu, then **Schedule**. This Custom Query will now run daily and live in the **Scheduled** tab of your Metric Lifts. 

![Screen Shot 2022-12-28 at 4 29 13 PM](https://user-images.githubusercontent.com/101903926/209888538-f7367f56-f2c9-44c7-852e-ec24f9c3e4cb.png)

![Screen Shot 2022-12-28 at 4 37 25 PM](https://user-images.githubusercontent.com/101903926/209889090-d5066297-a74e-48a0-aabf-fb1d90afcbdb.png)


![Screen Shot 2022-12-28 at 4 32 55 PM](https://user-images.githubusercontent.com/101903926/209888880-95b48763-538b-462e-95b2-9d2f657b0d4a.png)




