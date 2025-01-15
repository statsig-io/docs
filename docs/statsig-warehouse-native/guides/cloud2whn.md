---
title: Cloud to Warehouse Native Migration
slug: /statsig-warehouse-native/guides/cloud2whn
sidebar_label: Cloud -> WHN Migration
displayed_sidebar: cloud
---

This page gives you a quick overview of what migrating from Statsig Cloud to Statsig Warehouse Native looks like. If you are an enterprise customer on Statsig Cloud and want to use Statsig Warehouse Native please work with your Statsig contact to evaluate feasibility. If all (or most) of your metrics 

## Migration Overview
1. Statsig will create for you a WHN project on the side.
2. Kick the tires in this project, without changing anything in your app. Re-analyze some experiments you've already run on Statsig Cloud.
3. To move forward, re-create in the WHN project all the metrics you need - on top of data in your warehouse.
4. Pick a migration date. Plan for a 24hr change freeze on Statsig. (Admins can continue to make changes in case you need to respond to an incident.)
5. During the migration window
    a. Statsig will copy the metrics from your WHN project to your current project
    b. Statsig will turn your current project into a WHN project
    c. Statsig will run validation and then ask you help validate the health of the project
    d. For any in-progress experiments, you will need to select scorecard metrics (from the WHN metric set).
6. You're done. There are minor difference in experience for your Statsig users. Prepare them for this.  

The migration pattern is designed to keep the risk to your SDKs at 0. If there are glitches, the impact is limited to delays in generating scorecard results - and are easily recoverable.  
