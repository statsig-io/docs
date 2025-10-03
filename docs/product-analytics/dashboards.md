---
title: Dashboards
tags:
- Statsig Cloud 
sidebar_label: Dashboards
slug: /product-analytics/dashboards
keywords:
  - owner:akin
last_update:
  date: 2025-09-18
---

# Dashboards

## Overview

Statsig’s dashboards are the most effective way to consume, share, and save the insights that matter most for your product. Metrics Explorer is how you start creating insights; dashboards are where those insights can live in an ongoing capacity to be absorbed by the entire team.

## Creating a Dashboard

There are two ways to create a dashboard:

1. Navigate to the Dashboards tab and click Create. Here, you have the option to choose one of Statsig’s [Dashboard Templates](#dashboard-templates) or create a custom new one
    
![Dashboard creation interface](https://github.com/user-attachments/assets/15696f0e-17b8-4413-a5fe-ab68f6c5c7c7)

    
2. You can also create a Dashboard directly from Metrics Explorer. To do this, once you have finished building a chart:
    1. Click “Export to Dashboard” at the top right corner of the chart
    2. Name the Chart
    3. Select “Create New Dashboard” from the Dashboard Destination selector
    4. Finally, give your new Dashboard a name

![Export to dashboard from Metrics Explorer](https://github.com/user-attachments/assets/012d7dc0-a09b-4424-af10-ab8a714040cb)


### Adding Charts, Feature Gates, and Experiments to a Dashboard

Dashboards are designed to help teams share and absorb product insights of all types. To that end, it is possible to add Metric Charts and keep track of ongoing pulse results from A/B tests & feature launches.

There are several types of dashboard widgets you can add or create including:

- **Charts:** Create a new chart directly from a dashboard or export a chart created in Metrics Explorer to a dashboard. Supported charts include:
    - Drilldown Charts
    - Funnel Charts
    - Retention Charts
    - Distribution Charts
    - User Journey Charts
- **Text**: Annotate dashboards with context or create section headers for better readability.
- **Single Value:** Highlight a hero metric with clarity by adding a single value to the dashboard.
- **Experiment, Feature Flag:** Get a quick snapshot of an experiment or feature flag.
- **Funnel Metrics:** Visualize custom funnel metrics.

### To add a widget to a dashboard:

1. Click the “Add Widget” button
2. Select the type of widget you would like to add
3. Configure the widget, e.g. select a chart type and then select events and metrics you want to track
4. Save the widget to the dashboard

## Exploring your Dashboard

### Edit Date Ranges[](/product-analytics/dashboards#dashboard-date-ranges)

By default, the charts and widgets on a dashboard are synced with the date range set for the entire dashboard. To update this default date range, click the pencil icon in the top right corner of the dashboard. In the settings that appear, you can modify the dashboard's title, description, and "Default Date Lookback Range." This selection will determine the date range that is automatically applied each time you open the dashboard. Choosing the "Chart Default" option allows each chart to revert to the date range originally set when it was first added to the dashboard, offering greater customization to your dashboard.

![Dashboard settings and date range configuration](https://github.com/user-attachments/assets/a89fc3b7-48f6-40b2-a226-11c925553f14)

You can also change the date range of the dashboard on the fly by modifying the date picker on the top right of the dashboard. Applying changes to this selector will synchronize all charts and widgets on the dashboard. Note that any changes made here will not be saved the next time you open up the dashboard.

![Dashboard date picker interface](https://github.com/user-attachments/assets/1c038930-f9bd-4d94-9bb4-4ba84a417dda)

### Exporting your Dashboard

If you want to share a static version of your dashboard, print it, or save it for any other purpose, you can easily export a copy of your dashboard with the present data by clicking the settings dropdown "..." in the top right corner, and then clicking on the "Export as PDF" button. After a few seconds, a PDF of your dashboard will be generated and downloaded automatically.

<img width="1577" alt="image" src="https://github.com/user-attachments/assets/37e8b00d-981e-4bc2-a375-a975b6d4d302" />



### Cloning your Dashboard

If you want to duplicate or clone any of your dashboards, open the desired dashboard, and click the settings dropdown "..." in the top right corner, then click on the "Clone" button. This will bring up the dialog for you to clone your dashboard, and take you there upon success.

![Dashboard clone dialog](https://github.com/user-attachments/assets/abf7b681-5859-4a0e-b63e-d6fe16ea6e77)

### Filtering your Dashboard

You can click on the filters button below the dashboard name to add a global filter to your dashboard. The filter will be applied across all eligible widgets and you can quickly view updated results across all widgets, rather than having to filter each widget individually. You can also use free-form text to apply filters for more generic values, such as filtering emails that contain '@gmail.com'.

![Dashboard global filter interface](https://github.com/user-attachments/assets/397d0197-632d-4f25-a8be-a5413575173f)

#### Default Dashboard Filters

Default dashboard filters allow you to pin commonly used filters directly to your dashboards, making it easier to analyze different views of your data without rebuilding filters from scratch. These filters appear at the top of your dashboard and apply across all eligible widgets, enabling quick comparison across different dimensions like company, region, or platform.

To configure default dashboard filters:

1. Navigate to your dashboard and click the settings cog ⚙️
2. Scroll to "Default Filters" and configure the filters you want to pin to the dashboard
3. Click Save

Once configured, the pinned filters will appear at the top of your dashboard. You can quickly swap values to see how different users, cohorts, or properties impact the same set of charts. When you change a filter value, all charts on the dashboard update automatically without needing to reconfigure each widget individually.

This feature is particularly useful for comparing trends across different segments of your data. Instead of duplicating dashboards or manually editing filters on each widget, you can reuse the same dashboard with dynamic filtering to perform scoped analysis more efficiently.

### Refreshing your Dashboard Widgets

To ensure your dashboard data is up to date, you can refresh dashboard widgets in several ways:

**Manual Refresh**: Simply click the refresh button shown in the image below to refresh all dashboard widgets at once.

![Dashboard refresh button](https://github.com/user-attachments/assets/2799df0e-2a71-454b-8fee-df0420cdf68b)

**Automatic Dashboard Refreshes**: Dashboards can now be automatically refreshed on a schedule with results cached for faster loading and a snappier experience.

You can configure a refresh frequency for each dashboard (e.g. hourly, daily) and automatically cache results in the background. Once set, queries for that dashboard will run on the specified schedule and store the results. When someone opens the dashboard, they'll see the most recent cached data instantly, instead of triggering fresh queries.

To configure automatic dashboard refreshes:
1. Navigate to your dashboard and click the settings cog ⚙️
2. Scroll to "Schedule Dashboard Refresh" and set the interval
3. Click Save

This feature helps dashboards load faster and stay up to date without manual effort, especially helpful for shared dashboards or recurring check-ins where you want fresh data ready without delay.


### Organize your Dashboard

A well-made dashboard helps easily convey a narrative around what information is most important and the relationship between items on the dashboard. To facilitate this, we make it easy to move and resize dashboard widgets in place.

Each dashboard is constructed as a grid over which you you can place, move, and resize dashboard widgets. Move dashboard items around the grid by placing your mouse on empty space in the widget, and then click and hold to drag the widget around.

Resize the the widget by clicking and holding the the bottom right edge of the widget dragging to the desire size.

### View and Edit a Chart in a Dashboard

All of the charts we support in Metrics Explorer can be added to a dashboard. In addition, dashboard charts are not static.

To dive into a chart on the dashboard, click the [ ] icon. Once expanded, you get the full power of Metrics Explorer, allowing you to modify the overall query, the date range and the chart title. These modifications enable further exploration without permanently altering the chart on the dashboard.

If you want to save changes to a chart on the dashboard, configure the chart as desired and click "Save" to update the existing chart, or "Save As" to create a new chart on your dashboard.

![Chart editing interface in dashboard](https://github.com/user-attachments/assets/aa563da7-eab1-4578-a081-1ad1f343cc5c)


## Tips

### Dashboard Templates {#dashboard-templates}

Dashboard templates are a great way to reduce the time to insights. Statsig compiles industry-standard metrics to ensure your data visualization is focused on critical success indicators. You can start with a template and add on any additional insights you find helpful. Currently, Statsig offers the following templates:

- Product Growth
    - Use Statsig’s built-in metrics like DAU, WAU, Stickiness, etc. to track long-term product health
- Feature Success
    - Input a feature usage event, like form_submit or purchase_completed, to evaluate the success of your feature rollout with usage and retention metrics
    - Optionally, you can add a feature adoption event or related feature flag to broaden the scope of your tracking
- B2B SaaS Topline Metrics
    - Input a key feature event and user subscription events to monitor product usage, user retention and subscription conversion rates over time
- Web Analytics
    - Available with Autocapture, track essential web metrics like page views, clicks, and sessions duration. See more on Autocapture [here](/guides/sidecar-experiments/measuring-experiments#using-autocapture)
- Create from Gate or Experiment
    - Input your Gate or Experiment of interest to generate a focused dashboard with related monitoring metrics
- Create from Tag
    - Utilize Statsig’s project tagging to create and easily maintain a dashboard with the metrics, experiments, and feature flags you care about

### Finding Dashboards

Once you’ve created a dashboard, you may want to quickly find the charts that matter to you. Heading to the Dashboards tab will give you several ways to find a dashboard.

1. Find dashboards you’ve created quickly by navigating to the Dashboards tab, clicking into the search box, and selecting “My dashboards”.
2. Navigate to the Dashboards tab and click the filter icon to scope to Dashboards with specific tags or created by specific team members.
3. Navigate to the Dashboards tab and simply search for the name of the dashboard you would like to find.
4. Anywhere within Statsig you can bring up global search with “cmd+k” and type in the name of the dashboard.
