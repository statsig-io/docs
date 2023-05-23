---
title: Metric Sources
slug: /statsig-warehouse-native/building-blocks/metric-sources
sidebar_label: Metric Sources
---

Metric Sources are the building blocks of experimental metrics in Statsig Warehouse Native. These are very flexible,
but we do have suggested best practices on how to set up your project.

## What goes in a Metric Source

A metric source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig expects (user identifiers, a `timestamp`, and a `value). Because of this simple interface, you can
put many kinds of data into your Metric Source:. For example:

- raw event logging, using the log timestamp as the timestamp
- user/unit-level daily fact table, using the date of the row as the timestamp
- user/day level aggregate tables, again using the date of the row as the timestamp

For example, if you wanted to calculate a metric for revenue, you could use the raw revenue event
logging table with the logged value as the value, or use an aggregated and cleaned daily version
with the calculated daily sum of revenue as the value.

## Best practices

### Where to Filter

You can filter Metric Sources in metric definitions For example o a Metric Source can key to multiple event-based metrics
by filtering to different events in the Metric definition. This can be very powerful for unblocking non-data stakeholders
who want to set up metrics from trusted Metric Sources. The downside is that if you are filtering huge datasets in Metric
definitions, it can possibly lead to us scanning more data than necessary.

The best practice recommended is to set up metric sources for modular "clusters" of Metrics that will be used together
frequently. For example, if you are frequently using the `Core` tag to collect and measure guardrails, it could make sense
to pull those all from a common Metric Source.

### Governance

If you are concerned about granting Statsig broad read access, our recommended solution is to only give Statsig access
to its own staging schema/dataset, and create views or materialize staging tables in that location for the data you want
Statsig to see.
