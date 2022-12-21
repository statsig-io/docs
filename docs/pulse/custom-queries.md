---
title: Custom Pulse Queries
sidebar_label: Custom Queries
slug: /pulse/custom-queries
---

## Custom Queries

Custom queries can be run on pulse results in order to gain deeper insights from your experiments. These allow you to group by user dimensions, or filter to a specific set of users to see how the experiment impacted their experience.

Be careful with statistical interpretation of custom queries, especially when grouping by a dimension with lots of options. This can increase your chance of seeing a false positive statistically significant results.

### Running a Custom Query

To run a custom query, navigate to your pulse results. In a feature gate, custom queries are accessible via the **Custom Queries** tab, immediately adjacent to the **Pulse Results** tab. For experiments, you can access custom queries via the **Explore** tab within **Metrics Lifts** in Pulse.  

Entry point into custom queries for feature gates:


![Screen Shot 2022-05-12 at 10 19 33 AM](https://user-images.githubusercontent.com/102695539/168132433-83907af3-1b25-47e2-8734-9708b9377ae3.png)

Entry point into custom queries for experiments: 


![Screen Shot 2022-10-14 at 10 23 58 AM](https://user-images.githubusercontent.com/101903926/195905568-65c4f0a4-beaa-4c5e-a5c4-8ca39b3096de.png)

Custom query fields: 

- **Name:** the name of your custom query. This is a display name, so use it to describe your query and why you're running it.
- **Date range:** the date range for which you're running your analysis on
- **User dimension group by:** a user dimension that the results will be grouped by. For example, if you were to choose Country, each Country would have its own lift calculated in the custom query
- **User dimension filter:** a user dimension that the results will be filtered to. Users not matching this dimension will be excluded from the analysis
- **(Advanced) ID List Segment filters:** You can choose an ID-list based [segment](/segments), and your results will only be calculated for users who are in that segment. This can be useful if you forgot to log an important user dimension that you want to filter to, or realized that you only care about a sub-population that you've defined in your own data warehouse
  - Careful! This option can easily lead to erroneous and biased results. You will need to make sure the segment is defined based on the user's status _before_ they were exposed to the experiment or feature gate.

> Note: These queries take a few minutes to run, but once complete the results will be visible in the "Custom Queries" tab of the Gate or Experiment you ran the query for (you will also receive an email and console notification with a link).

> Note: User data in this tool is based off of first-touch attribution. The filters and grouping applied will be based on the user attributes collected at the time of first exposure.

### Viewing a Custom Query

These queries take a few minutes to run, but once complete the results will be visible inline within the gate or experiment you ran the query for (you will also receive an email and console notification with a link).

![Screen Shot 2022-10-14 at 10 30 35 AM](https://user-images.githubusercontent.com/101903926/195906665-45aee135-5b3b-48ab-b3a8-3e7ea2af41a9.png)


![Screen Shot 2022-10-14 at 10 32 01 AM](https://user-images.githubusercontent.com/101903926/195906893-6307319b-e0af-453c-a77c-1e13c35a90aa.png)
