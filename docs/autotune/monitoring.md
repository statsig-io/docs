---
title: Autotune
sidebar_label: Monitoring
slug: /autotune/monitoring
keywords:
  - owner:vm
last_update: 2022-01-18
---

## How to monitor your Autotune Test

### Computations and Traffic Allocation Updating

The results tab within Autotune provides a view of your ongoing and completed Autotune tests.  Autotune is computed hourly with metrics and traffic allocation updated throughout the day.  Results from exposures are ingested once the attribution window is complete.  For example, an exposure at 1pm with a 6 hr attribution window is not counted until 7 pm.

### Result

![image](https://user-images.githubusercontent.com/77478319/150008289-2119f756-ff71-4634-af85-fca840cf1e4c.png)

This section shows you a summary of your Autotune test.  The top bars show a 95% Bayesian Credible interval for the estimated conversion rate (exposure -> success event).  There is a 95% chance that the real value is within this interval.  The table shows the number of exposures, success events, and overall success rate for each variation across the duration of the test.  We also provide a plain English text to describe the current state of the test.

### Details

![image](https://user-images.githubusercontent.com/77478319/150009034-74a9f2b9-42ee-4d24-9c95-5fe6dff35334.png)

There are several charts provided:
1. Probability of Best - shows the progress of the Autotune test, and which variant is currently winning.
2. Cumulative Success Rate - Shows the overall success rate (exposure -> success) to date.
3. Daily Success Rate - Shows the success rate for each variation per day.
4. Traffic Allocation - Shows the daily number of exposures allocated to each variation on a given day.
