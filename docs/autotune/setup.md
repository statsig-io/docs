---
title: Autotune
sidebar_label: Setup
slug: /autotune/setup
---

## How to set up Autotune

1. To create a new Autotune experiment, navigate to the [Autotune section on the Statsig console](https://console.statsig.com/autotune).
2. Click the Create button and enter the name and description of the Autotune experiment that you want to create. 
3. Provide the variants that you want to test in the Autotune experiment.  Each variant needs a name, and a corresponding JSON value.  The variant that's listed as Control/Default will be returned when the Autotune experiment is not running.

![image](https://user-images.githubusercontent.com/1315028/131385189-5f0c1d93-ba87-4159-8995-3c30991587a0.png)

4. Select the success event to optimize for as shown below.  You can further specify an optional [event value](/guides/logging-events).

![image](https://user-images.githubusercontent.com/1315028/131385239-5a76d253-022b-457e-a370-f9ee7ce566a1.png)

There are a few parameters you can specify:
- Exploration Window - The initial time period where Autotune will equally split the traffic.  This is useful for noisy or temporal metrics where hourly swings in data can bias Autotune's initial measurements.
- Attribution Window - The maximum duration between the exposure and success event that counts as a success.  We recommend 1 hr for most applications, but adjust accordingly if you expect the success event to lag the exposure event by several hours.
- Winner Threshold - The "probability of best" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic.  Setting a lower number will result in faster decisions but increases the probability of making suboptimal decisions (picking the wrong winner).

Click "Create" to finalize the setup.

6. Similar to Feature Gates and Experiments, you can find a code snippet for the exposure check event to add to your code.  Don't forget to click "Start" when you're ready to launch your Autotune test.

![image](https://user-images.githubusercontent.com/1315028/131384977-144dd868-787b-45ad-9ff1-fc9afbd4c769.png)
