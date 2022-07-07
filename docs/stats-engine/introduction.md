---
title: Introduction
sidebar_label: Introduction
slug: /stats-engine
---

## Statsig Stats Engine

This section provides detailed view of the statistical methodology that powers [Pulse](https://docs.statsig.com/pulse). Delivering these results involves a series of calculations to idenitify the following:
* [Metric deltas](https://docs.statsig.com/stats-engine/metric-deltas): The difference in metrics between the test and control groups.
* [Confidence intervals](https://docs.statsig.com/stats-engine/confidence-intervals): The gray, red, and green bars in Pulse. They represent the uncertainty in the metric deltas and depend on the [standard error](https://docs.statsig.com/stats-engine/variance) of the metrics. 
* [p-Values](https://docs.statsig.com/stats-engine/p-value): A statistical measurement common in hypothesis testing.  Represents the probability of observing a metric delta at least a extreme as the one we measured, under the assumption that the treatment has no impact on that metric. 
