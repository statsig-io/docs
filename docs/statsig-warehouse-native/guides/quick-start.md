---
title: Quick Start
sidebar_label: Quick Start
slug: /statsig-warehouse-native/guides/quick-start
---

You can get experiment results in record time with Statsig Warehouse native. This page walks you through connecting your data, configuring a metric, and getting experiment results.

All you'll need is a table in your warehouse that has metric or event logging data.

# Step 1.) Connecting Your Warehouse

Statsig will use your warehouse to store and analyze your experiment data - you have total control and visibility. To connect your warehouse, visit your warehouse's setup page.

- [Bigquery](../connecting-your-warehouse/bigquery.md)
- [Databricks](../connecting-your-warehouse/databricks.md)
- [Redshift](../connecting-your-warehouse/redshift.md)
- [Snowflake](../connecting-your-warehouse/snowflake.md)
- [Athena](../connecting-your-warehouse/athena.md)

# Step 2.) Connect to Data

To connect your event or metric, data, you'll create a [Metric Source](/statsig-warehouse-native/configuration/metric-sources.md). Navigate to the Metric Sources page and click Create to make a new Metric Source.

![Screenshot 2024-06-11 at 1 21 46 PM](https://github.com/statsig-io/docs/assets/102695539/66229d92-99a8-45c6-9a1c-7f8585465338)

If you have a table, use the `Table` metric source type and put in the path to your table. Otherwise, you can write a query to access or generate some test data.

Press analyze to generate samples from your table, and then map required columns (Timestamp and UserID) so that Statsig can connect your metric data to your assignment data.

![Screenshot 2024-06-11 at 1 23 59 PM](https://github.com/statsig-io/docs/assets/102695539/c0982d71-71c5-4899-bed9-a72c7db59515)

Save your changes, and you've connected to your data!

# Step 3.) Make a Metric

Now that you've connected to data, you can build metrics on top of this. Later, this can be configured programmatically, but for now navigate to your Metrics Catalog and click Create to make a new Metric.

![Screenshot 2024-06-11 at 1 27 43 PM](https://github.com/statsig-io/docs/assets/102695539/8b997a0c-22e9-409d-8918-d21a95af1367)

Point to the metric source you just configured, name your metric, and press Create. This will take you to the new Metric's page, where you can configure your metric.

To get started, we recommend just making a [count metric](/statsig-warehouse-native/metrics/count). This is the simplest kind of metric, which just counts the number of rows in your metric source. This is useful for event logging - for example, you might filter to a "purchase" event to count the number of times users purchased an item.

Select "Count" and save - or, feel free to pause here and explore the options here.

# Step 4.) Connect an Experiment

Next, you'll connect to experiment data. If you have a table with exposures you've already logged, feel free to use that. You'll just need to make sure that you've logged the same identifier there as you used in your metric source.

Otherwise, you can quickly follow our guide to setting up an [A/A test](/statsig-warehouse-native/guides/aatest), using the same data you used for your exposures. This should generate a neutral experiment result.

Navigate to Assignment Sources and create a new one.

![Screenshot 2024-06-11 at 1 33 29 PM](https://github.com/statsig-io/docs/assets/102695539/fe0e4c5d-e2a6-4943-9b09-cb81dbadee9e)

If using an AA test, follow the instructions to randomly assign users to groups. If you're using existing assignments, write a query to pull the data from your logs and map the unit, group, experiment, and timestamp columns.

![Screenshot 2024-06-11 at 1 27 43 PM](https://github.com/statsig-io/docs/assets/102695539/08e3f20c-1590-4b08-ad60-fa96ecbf15cb)

Pressing save and scan will save your new source and detect experiments that exist on the source. This should only take seconds to a few minutes, and once it's done you can scroll down to look through the experiments Statsig found.

![Screenshot 2024-06-11 at 1 36 18 PM](https://github.com/statsig-io/docs/assets/102695539/8be2f079-4440-4742-9727-08e25b65c84b)

# Step 5.) Analyze Your Experiment

Press Create on your experiment of interest to start creating your experiment.

![Screenshot 2024-06-11 at 1 37 49 PM](https://github.com/statsig-io/docs/assets/102695539/fc6e7092-b621-494a-bedb-8cd03a64d510)

Add a display name and hypothesis, and press Create. This will take you to the final setup step, where you specify the metrics for your experiment. Choose the metric you created in step 3).

Statsig will automatically detect the group split, but if the detected split is incorrect you can manually adjust it to the intended value.

![Screenshot 2024-06-11 at 1 41 01 PM](https://github.com/statsig-io/docs/assets/102695539/287bc60b-23a6-4681-ac26-282ce8b88c13)

Press Save and Analyze, and Statsig will start calculating Pulse Results. You can track the progress in the loading bar at the bottom of the experiment's results page.

# Step 6.) Reading Results

If everything worked, you should see:

- Your hypothesis. This lives at the top of the results page to give context and guide interpretation of the results.
- Cumulative exposures. This shows you the number of unique units exposed to each group, and the balance between groups
- Your scorecard. This shows a quick summary of the observed differences in metrics between your experiment groups, with access to additional views and raw statistics

![Screenshot 2024-06-11 at 1 52 47 PM](https://github.com/statsig-io/docs/assets/102695539/38f4f438-2592-44cb-9063-d3bc97da404b)

There's a lot of features here - please explore the product and the docs to learn more!

- Click into a result's error bar to view raw statistics, timeseries, and projected [timeline impact](/stats-engine/topline-impact)
- Hover over a metric to get detailed context on its inputs and how the pulse result was calculated
- Navigate to the diagnostics tab to see the [checks](/statsig-warehouse-native/features/monitor-an-experiment) Statsig automatically ran to make sure your experiment results were valid
- Click into the reloaded timestamp to see the run time and query cost of your pulse analysis, as well as the SQL queries used to calculate the pulse results
- Visit the explore tab to start filtering data, exploring results by dimensions, or running other follow-up analyses
- Visit the summary tab to start putting together a [report](/statsig-warehouse-native/features/reports) to share out the results of your analysis
- Start a discussion or add context, either in the discussion tab or with in-context comments on top of the results themselves

Note that our experiment was not an AA test, and there was an experimental impact. In this case, we have a statistically significant result, with an estimated lift of +12.89% ±0.93% from our control group to our test group. We can also click into see additional details, like the expected change to our overall topline metric value if we were to ship this experiment.

![Screenshot 2024-06-11 at 1 54 02 PM](https://github.com/statsig-io/docs/assets/102695539/33e5fc2a-9b36-43f9-a6c2-2936867a7980)

Congratulations - you've completed the Quick Start guide!
