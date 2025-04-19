---
title: Incremental Reloads
slug: /statsig-warehouse-native/features/incremental-reloads
sidebar: Incremental Reloads
keywords:
  - owner:vm
last_update:
  date: 2024-06-12
---

Incremental reloads save state from the last load, and load from the latest data read with a small buffer to ensure completeness. This job wipes data since the last load, plus that buffer, and then appends all new data to the staging datasets before calculating results for changed days.

This is the recommended way to load active experiments, and is used for ongoing, daily loads -- especially when datasets are large.

## The Buffer Period

Incremental reloads include a built-in buffer that reprocesses the last few days of data. This buffer exists because:
- Many data sources have streaming data landing that can't be tracked perfectly
- Late-landing data may arrive after initial processing
- It ensures data completeness even with slightly inconsistent data pipelines

## Repeated Incremental Loads

If an experiment is fully caught up and you run another incremental load, Statsig will still reprocess the last few days of data due to this buffer. This ensures that any late-arriving data is incorporated into your analysis.

For example, if you run one incremental load in the morning and another in the afternoon of the same day, the afternoon load will reprocess the buffer period to catch any data that landed between the two load times.
