---
title: Metric Reloads
slug: /statsig-warehouse-native/features/metric-reloads
sidebar: Metric Reloads
keywords:
  - owner:vm
last_update:
  date: 2024-06-12
---

Metric reloads drop all data from staging pipelines associated with a metric, and restate that data from scratch. Where this data is interconnected (e.g. ratios, funnels, etc.), related entities will be updated as well.

This is a big time saver in cases where a new metric needs to be added to an experiment, or a metric definition has changed, since you can avoid reloading N unrelated experiment metrics.
