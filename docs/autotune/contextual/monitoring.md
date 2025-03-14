---
title: Monitoring your Contextual MAB
sidebar_label: Monitoring
slug: /autotune/contextual/monitoring
---

There are three primary ways we recommend you monitor autotune performance.

# Linked Experiments

The best way to evaluate if a bandit is working is seeing if it drives more of the targeted behavior via baseline experience. You can easily set up and link an a/b test in Statsig to evaluate this, and this will also let you monitor other user behaviors and guardrail metrics.

This is the gold standard of measurement and is highly encouraged.

# Success Rate

Statsig will track the cumulative and daily success rate of your variants over time. This can be tricky to interpret. It may be the case that variant A has lower CTR, but the users being served variant A _would have had_ even lower CTR on other variants. We generally recommend using this for tracking and for understanding, and seeing if there are good or bad outliers in your variants.

# Traffic Allocation

Traffic allocation shows you where Statsig is sending users who see your Autotune. This is a helpful debug view and can help you identify if a variant is dominating traffic or is not receiving any traffic.

# Model Features

(In Beta)

Statsig tracks and surfaces coefficients and feature importance; this can be very useful for understanding which features might be worth further study, or which populations may have unmet needs in your product.
