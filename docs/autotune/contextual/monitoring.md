---
title: Monitoring your Contextual MAB
sidebar_label: Monitoring
slug: /autotune/contextual/monitoring
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

There are three primary ways we recommend you monitor autotune performance.

# Linked Experiments

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

# Success Rate

Statsig will track the cumulative and daily success rate of your variants over time. This can be tricky to interpret. It may be the case that variant A has lower CTR, but the users being served variant A _would have had_ even lower CTR on other variants. We generally recommend using this for tracking and for understanding, and seeing if there are good or bad outliers in your variants.

# Traffic Allocation

Traffic allocation shows you where Statsig is sending users who see your Autotune. This is a helpful debug view and can help you identify if a variant is dominating traffic or is not receiving any traffic.

# Model Features

Statsig tracks and surfaces coefficients and feature importance; this can be very useful for understanding which features might be worth further study, or which populations may have unmet needs in your product.

- Importance is an estimate of the influence of a feature on the outcome; in layman's terms, this is "how important" the feature is to the prediction
- A positive coefficient means that feature leads to an outcome being more likely (or for continuous outcome spaces is associated with a higher outcome). A negative coefficient means the outcome is less likely, or is associated with a lower continuous outcome.
