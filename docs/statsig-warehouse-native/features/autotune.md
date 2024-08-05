---
title: Autotune (Beta)
slug: /statsig-warehouse-native/features/autotune
sidebar_label: Autotune
---

Autotune Experiments in Warehouse Native have a very similar setup to cloud [Autotunes](https://docs.statsig.com/autotune). In Warehouse Native, Autotune success events will be pulled from a Metric Source, and computation of results will happen in your warehouse.

:::info Note
Autotune in WHN is currently in beta, please contact the team to get it enabled in your account
:::

# Creating an Autotune

As with a normal Autotune, you will want to define a success event. In Warehouse Native, this will be a Metric Source. Instructions on [how to set up a Metric Source can be found here](/statsig-warehouse-native/configuration/metric-sources).

Once you have a Metric Source setup that exemplifies your success event, you are ready to create the Autotune.

1. Navigate to the [Experiments section](https://console.statsig.com/experiments) in the sidebar of the Statsig Console.
2. Click on the [Autotune tab](https://console.statsig.com/autotune) at the top.
3. Click the Create button and enter the name and description of the Autotune Experiment that you want to create.
4. Select an ID Type for your Experiment.
5. Create and name your variants for your Autotune Experiment. The variant that's listed as Control/Default will be returned when the Autotune Experiment is not running.
6. Select your Metric Source that you defined earlier as shown below.

![image](https://github.com/statsig-io/docs/assets/152932686/857371e2-22e4-4316-bca0-b310f541b5c3)

There are a few parameters you can specify:

- Exploration Window - The initial time period where Autotune will equally split the traffic. This is useful for noisy or temporal metrics where hourly swings in data can bias Autotune's initial measurements.
- Attribution Window - The maximum duration between the exposure and success event that counts as a success. We recommend 1 hr for most applications, but adjust accordingly if you expect the success event to lag the exposure event by several hours.
- Winner Threshold - The "probability of best" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic. Setting a lower number will result in faster decisions but increases the probability of making suboptimal decisions (picking the wrong winner).

Click "Create" to finalize the setup.

7. Your Autotune is set up and ready to go. Click "Start" when you're ready to launch your Autotune test.
