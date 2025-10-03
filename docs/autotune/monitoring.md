---
title: Autotune
sidebar_label: Monitoring
slug: /autotune/monitoring
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## How to monitor your Autotune Test

### Computations and Traffic Allocation Updating

The results tab within Autotune provides a view of your ongoing and completed Autotune tests.  Autotune is computed hourly with metrics and traffic allocation updated throughout the day.  Results from exposures are ingested once the attribution window is complete.  For example, an exposure at 1pm with a 6 hr attribution window is not counted until 7 pm.

### Result

![Autotune test results summary](https://user-images.githubusercontent.com/77478319/150008289-2119f756-ff71-4634-af85-fca840cf1e4c.png)

This section shows you a summary of your Autotune test.  The top bars show a 95% Bayesian Credible interval for the estimated conversion rate (exposure -> success event).  There is a 95% chance that the real value is within this interval.  The table shows the number of exposures, success events, and overall success rate for each variation across the duration of the test.  We also provide a plain English text to describe the current state of the test.

### Details

![Autotune test detailed analytics charts](https://user-images.githubusercontent.com/77478319/150009034-74a9f2b9-42ee-4d24-9c95-5fe6dff35334.png)

There are several charts provided:
1. Probability of Best - shows the progress of the Autotune test, and which variant is currently winning.
2. Cumulative Success Rate - Shows the overall success rate (exposure -> success) to date.
3. Daily Success Rate - Shows the success rate for each variation per day.
4. Traffic Allocation - Shows the daily number of exposures allocated to each variation on a given day.


### Linked Experiments

The best way to evaluate if a bandit is working is seeing if it drives more of the targeted behavior via baseline experience. You can easily set up and link an a/b test in Statsig to evaluate this, and this will also let you monitor other user behaviors and guardrail metrics.

This is the gold standard of measurement and is highly encouraged.

Standard practice is to wrap the autotune in a experiment with a binary parameter, either as 50/50 or a 90/10 holdback.  You can link the experiment to the autotune to get the results on the autotune page. In code, this might look like:

```
experiment_value = statsig.get_experiment('wrapping_experiment').get('flag')
default_param = '..."
if(experiment_value):
  param = statsig.get_experiment('autotune').get('param_name')
else:
  param = default_param

# use param in code
```

You would start this experiment at the same time that you launch your autotune.
