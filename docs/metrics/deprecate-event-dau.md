---
title: Deprecating Event_dau Metric
sidebar_label: Deprecating Event_dau
slug: /metrics/deprecate-event-dau
keywords:
  - owner:shubham
last_update:
  date: 2025-03-21
---

### Deprecation Details

From Wednesday, October 16, 2024, we will stop auto-generating new event_dau metrics for incoming events into Statsig. We will continue to auto-generate an event_count metric for each logged event as we do today. **Note: This change will only affect Statsig Cloud customers, Warehouse Native customers will not be impacted.**

- Any existing event_dau metrics that have been used in a gate, experiment, dashboard, other Custom Metrics will NOT be affected by this change.

- Existing event_dau metrics that have been archived or never been used in another config will NO longer exist. See ‘Next Steps’ if you want to retain these metrics.

- Going forward, new event_dau metrics will need to be created manually as a Custom Metric. See [this guide](https://docs.statsig.com/metrics/custom-dau) to learn how to create a DAU metric.

If you have any questions or concerns, please don’t hesitate to reach out!

### Motivation for This Change

Historically, we have auto generated an event_count and event_dau metric for every incoming event into Statsig. After working closely with hundreds of customers, we have seen that auto generating two metrics for every event causes confusion and clutter inside projects. The proposed change will lead to cleaner Metrics Catalog and faster Console performance, while still retaining your ability to create event_dau metrics for the events you care about most.

### Next steps

If you wish to keep any unused event_dau metrics going forward, you can earmark those metrics by performing any of the actions below:

- Adding a Tag (RECOMMENDED)
- Adding a description
- Referencing in a gate/experiment/dashboard

These actions will mark your unused metric as active, signaling us that you don’t want them to be deprecated.
