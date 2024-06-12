---
title: Incremental Reloads
slug: /statsig-warehouse-native/features/incremental-reloads
sidebar: Incremental Reloads
---

Full reloads save state from the last load, and load from the latest data read with a small buffer to ensure completeness. This job wipes data since the last load, plus that buffer, and then appends all new data to the staging datasets before calculating results for changed days.

This is the recommended way to load active experiments, and is used for ongoing, daily loads -- especially when datasets are large.
