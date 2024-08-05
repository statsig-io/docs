---
title: Early Diagnostics
slug: /statsig-warehouse-native/features/early-diagnostics
sidebar_label: Early Diagnostics
description: Data Freshness
displayed_sidebar: cloud
---

## Exposures from Statsig SDKs
You'll get just-in-time updates for the first 1 million exposures/experiment when Pulse is loaded; afterwards, updates will be on a daily cadence.

After launching an experiment, you may want to check certain results -- such as page load time, impressions on key pages, and business-critical metrics -- as early as possible to detect crashes or catch a bug.

If you are using the Statsig SDK to generate exposures, when Pulse is loaded soon after the experiment starts, we'll update exposures in your warehouse before computing Pulse results. This lets you see Pulse results **as fresh as ~15m** (assuming events and metrics come in at the same speed).

Under the covers, we perform a just-in-time update of exposures in your warehouse when Pulse is loaded, for the first 1 million exposures. After that, the exposures are batched, deduplicated and written to your warehouse once a day. The daily job does brings in additional fields that the JIT write doesn't (e.g. Group Names).

## Custom Events from Statsig SDKs
Custom events logs will be exported to your warehouse hourly, plus a short amount of processing delay.

If you're using our SDKs to capture events, we'll export these events to your warehouse hourly. You can see Pulse results on metrics derived from those events **as fresh as ~1hour**.
