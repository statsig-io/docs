---
title: Custom Pulse Queries
sidebar_label: Custom Queries
slug: /feature-gates/custom-queries
---

## Custom Queries

Custom queries can be run on pulse results in order to gain deeper insights from your experiments. These allow you to group by user dimensions, or filter to a specific set of users to see how the experiment impacted their experience.

Be careful with statistical interpretation of custom queries, especially when grouping by a dimension with lots of options. This can increase your chance of seeing a false positive statistically significant results.

### Running a Custom Query

To run a custom query, navigate to your pulse results. In the header, press the "Custom Queries" tab.

Pressing the "Create" button opens up the menu to create your custom query. This has a few fields:

- Name: the name of your custom query. This is a display name, so use it to describe your query and why you're running it.
- Date range: the date range for which you're running your analysis on
- User dimension group by: a user dimension that the results will be grouped by. For example, if you were to choose Country, each Country would have its own lift calculated in the custom query
- User dimension fitler: a user dimension that the results will be filtered to. Users not matching this dimension will be excluded from the analysis
- (Advanced) ID List Segment filters. You can choose an ID-list based [segment](/segments), and your results will only be calculated for users who are in that segment. This can be useful if you forgot to log an important user dimension that you want to filter to, or realized that you only care about a sub-population that you've defined in your own data warehouse
  - Careful! This option can easily lead to erroneous and biased results. You will need to make sure the segment is defined based on the user's status _before_ they were exposed to the experiment or feature gate.

These queries take a few minutes to run, but once complete the results will be visible in the "Custom Queries" tab of the Gate or Experiment you ran the query for (you will also receive an email and console notification with a link).

![image](https://user-images.githubusercontent.com/88338316/158862836-381dafe2-8140-4b7d-9a28-b59a0ebcbd4c.png)
![image](https://user-images.githubusercontent.com/88338316/158864531-be7f4527-6f83-4f9c-9b9d-2de4f34ec77f.png)
