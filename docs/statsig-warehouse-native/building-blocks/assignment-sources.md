---
title: Assignment Sources
slug: /statsig-warehouse-native/building-blocks/assignment-sources
sidebar-label: Assignment Sources
---

Assignment Sources are flat views into experiment assignment data. These will be cleaned
and joined to your Metric Sources to annotate your data with relevant experiment tags.

## What goes in an Assignment Source

A metric source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig expects (user identifiers, a `timestamp`, and experiment information (an `experiment_id`/`group_id` pair).
For example:

- raw exposure logging, using the log timestamp as the timestamp
- cleaned "first-exposure" tables, using the aggregated first exposure timestamp and metadata from the first exposure event
