---
title: Dashboards
tags:
- Statsig Cloud 
sidebar_label: Dashboards
slug: /product-analytics/dashboards
---

# Dashboards

# Overview

Statsig’s dashboards are the most effective way to consume, share, and save the insights that matter most for your product. Metrics Explorer is how you start creating insights; dashboards are where those insights can live in an ongoing capacity to be absorbed by the entire team. 

# Creating a Dashboard

There are two ways to create a dashboard. 

1. Navigate to the Dashboards tab and click Create. 
2. You can also create a Dashboard directly from Metrics Explorer. To do this, once you have finished building a chart:
    1. Click the “…” button and choose “Export to Dashboard”. 
    2. Click the Dashboard Destination button, name the Chart 
    3. Select “Create New Dashboard”. 
    4. Finally give your new Dashboard a name. 
    5. Note, charts created with a “Last x days” date-range will continue to update on the dashboard as time goes on. 

# Adding Charts, Feature Gates, and Experiments to a Dashboard

Dashboards are designed to help teams share and absorb product insights of all types. To that end, it is possible to add both Metric Charts to a dashboard as well as keep track of ongoing A/B tests & Experiments, as well as the impact of feature launches. 

There are several types of dashboard widgets you can add or create including: 

- **Charts** Create a new chart directly from a dashboard or export a chart created in Metrics Explorer to a dashboard. Supported charts include:
  - Drilldown Charts
  - Retention Charts
  - Funnel Charts
  - User Journey Charts
- **Text**: Annotate dashboards with context or create section headers for better readability.
- **Single Value:** Highlight a hero metric with clarity by adding a single value to the dashboard.
- **Experiment, Feature Gate:** Get a quick snapshot of an experiment or feature gate.
- **Funnel Metrics:**  Visualize custom funnel metrics.

To add a widget to a dashboard: 

1. Click the “Add Widget” button
2. Select the type of widget you would like to add
3. Configure the widget. E.g. select a chart type and then select events and metrics you want to track. 
4. Save the widget to the dashboard. 

# Organizing a Dashboard

A well-made dashboard helps easily convey a narrative around what information is most important and the relationship between items on the dashboard. To facilitate this, we make it easy to move and resize dashboard widgets in place. 

Each dashboard is constructed as a grid over which you you can place, move, and resize dashboard widgets. Move dashboard items around the grid by placing your mouse on empty space in the widget, and then click and hold to drag the widget around. 

Resize the the widget by clicking and holding the the bottom right edge of the widget dragging to the desire size. 

# Viewing and Exploring a Chart in a Dashboard

All of the charts we support in Metrics Explorer can be added to a dashboard. In addition, dashboard charts are not static. 

To dive into a chart on the dashboard, click [ ] icon.  Once expanded, you have the full power of Metrics Explorer. Charts can be modified just as you would in Metrics Explorer for further exploration without making a persisted change to the dashboard itself. 

## Dashboard Date Ranges

The charts and widgets on a dashboard are by default synced with the date range of the dashboard itself. You can change the date range of the entire dashboard by modifying the date range. You can view widgets in custom date ranges by expanding the chart / widget and modifying its date range. 

![image](https://github.com/statsig-io/docs/assets/3464964/32fbd71d-ac30-45f4-895b-321edf5824d2)


# Editing a Chart in Dashboard

If you want to persist a change to a chart on a Dashboard, you can click the pencil icon. You can then make any changes you would like to the chart, including changing the overall query, the date range, or updating metadata such as the chart title or description. Once finished, click the Save button to persist the changes. 

# Finding Dashboards

Once you’ve created a chart you may want to quickly find the charts that matter to you. Heading to the Dashboards tab will give you several ways to find a dashboard. 

1. Find dashboards you’ve created quickly by navigating to the Dashboard tab, clicking into the search box, and selecting “My dashboards”. 
2. Navigate to the Dashboard tab and click the filter icon to scope to Dashboards with specific tags or created by specific team members. 
3. Navigate to the Dashboard tab and simply search for the name of the dashboard you would like to find. 
4. Anywhere within Statsig you can bring up global search with “cmd+k” and type in the name of the dashboard. 

# Automatically Generating Dashboards

To make creating dashboards easier, we provide the ability to automatically generate dashboards based on certain entity metadata. For example, you can create a dashboard that syncs all metrics, experiments, or feature gates with a specific tag. This will automatically create the dashboard and add any new entities created with that tag to the dashboard. 

Dashboards that are generated via syncing entities are indicated with sync icon.
