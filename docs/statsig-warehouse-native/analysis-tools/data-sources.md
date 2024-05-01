---
title: Data Sources
slug: /statsig-warehouse-native/data-sources
sidebar_label: Data Sources
description: Inputs to experimental analysis
---

Statsig Warehouse Native can read from a variety of source queries. These do need to conform to an interface, but in general are very flexible.

## Metric Sources

All Statsig needs to create metrics is a timestamp or date, and a unit (or user) identifier. Context fields let you pull multiple metrics from
the same base query, and select values to sum, mean, or group by.

| Column Type            | Description                                                         | Format/Rules                   |
| ---------------------- | ------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the metric data occurred         | Castable to Timestamp/Date     |
| unit identifier        | **Required** At least one entity to which this metric belongs       | Generally a user ID or similar |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types     |                                |
| context columns        | _Optional_ Fields which will be aggregated, filtered, or grouped on |                                |

For example, you could pull from event logging and aggregate the event-level data to create metrics:

| timestamp           | user_id       | company_id | event      | time_to_load | page_route |
| ------------------- | ------------- | ---------- | ---------- | ------------ | ---------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | page_load  | 207.22       | /          |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | page_load  | 522.38       | /search    |
| 2023-10-10 00:02:22 | my_user_18821 | c_22235455 | serp_click | null         | /search    |

You could create an average TTL metric by averaging time_to_load, and group it by page route or filter to specific routes when creating your metric.

As another example, you might pre-calculate some metrics yourself at a user-day grain - either to match your source-of-truth exactly or to add more complex logical fields:

| timestamp  | user_id       | company_id | country | page_loads | satisfaction_score | revenue_usd | net_revenue_usd |
| ---------- | ------------- | ---------- | ------- | ---------- | ------------------ | ----------- | --------------- |
| 2023-10-10 | my_user_17503 | c_22235455 | US      | 13         | 9                  | 130.21      | 112.33          |
| 2023-10-10 | my_user_18821 | c_22235455 | CA      | 1          | 2                  | 0           | 0               |
| 2023-10-10 | my_user_18828 | c_190887   | DE      | 0          | null               | 22.1        | 0               |

You can create different metrics by summing and filtering on those daily fields.

## Assignment Sources

For experiment assignment sources, Statsig requires information on who was exposed, when, and to what experiment:

| Column Type            | Description                                                                               | Format/Rules                   |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the experiment exposure occurred                       | Castable to Timestamp/Date     |
| unit identifier        | **Required** at least one entity to which this metric belongs                             | Generally a user ID or similar |
| experiment identifier  | **Required** the experiment the exposure was for                                          | Usually an experiment name     |
| group identifier       | **Required** the experimental variant the user was assigned to                            | Usually a group name           |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types                           |                                |
| context columns        | _Optional_ Fields which can be used to group by and filter results in exploratory queries |                                |

For example, you could pull from exposure event logging directly:

| timestamp           | user_id       | company_id | experiment_name  | group_name | country |
| ------------------- | ------------- | ---------- | ---------------- | ---------- | ------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | ranking_v1_vs_v2 | v1         | US      |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | ranking_v1_vs_v2 | v2         | CA      |
| 2023-10-10 00:02:22 | my_user_18821 | c_22235455 | search UI revamp | control    | CA      |

## Qualifying Events

Qualifying events are used to simulate exposures for power analysis. They are similar to exposures, except they do not require experimental information. Context columns can be used to filter the qualifying event for power analysis - for example you might have a Qualifying Event for page load, and filter to different page identifiers for power analyses of experiments on different surfaces.

| Column Type            | Description                                                                               | Format/Rules                   |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the qualifying event occurred                          | Castable to Timestamp/Date     |
| unit identifier        | **Required** At least one entity to which this metric belongs                             | Generally a user ID or similar |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types                           |                                |
| context columns        | _Optional_ Fields which can be used to group by and filter results in exploratory queries |                                |

For example, you could pull from page load event logging directly:

| timestamp           | user_id       | company_id | page_route |
| ------------------- | ------------- | ---------- | ---------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | /          |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | /search    |
| 2023-10-10 00:03:12 | my_user_22251 | c_9928     | /profile   |

## Entity Property Sources

For property sources, Statsig only needs a user_id and property fields. Property sources can define **fixed** properties (e.g. a users Country of origin), but can also define **dynamic**
in which case you need to provide a timestamp for Statsig to identify the most recent pre-exposure record.

| Column Type      | Description                                                                                 | Format/Rules                   |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp        | _Optional_ an identifier of when the property was defined. Required for dynamic properties  | Castable to Timestamp/Date     |
| unit identifier  | **Required** At least one entity to which this metric belongs                               | Generally a user ID or similar |
| property columns | **Required** Fields which can be used to group by and filter results in exploratory queries |                                |

For example, a static property source could just be:

| user_id       | company_id | country |
| ------------- | ---------- | ------- |
| my_user_17503 | c_22235455 | US      |
| my_user_18821 | c_22235455 | CA      |

Which could be used to filter and group by any experiment that was exposed one either user_id or company_id.

For a dynamic property, it might look like this:

| user_id       | timestamp  | company_id | intent_segment | spend_segment |
| ------------- | ---------- | ---------- | -------------- | ------------- |
| my_user_17503 | 2023-10-10 | c_22235455 | high_intent    | high          |
| my_user_17503 | 2023-10-11 | c_22235455 | high_intent    | high          |
| my_user_17503 | 2023-10-12 | c_22235455 | mid_intent     | high          |
| my_user_18821 | 2023-10-10 | c_22235455 | low_intent     | low           |
| my_user_18821 | 2023-10-11 | c_22235455 | low_intent     | mid           |
| my_user_18821 | 2023-10-12 | c_22235455 | low_intent     | mid           |

The first user in this example has their intent_segment property change on `2023-10-12`; based on what the intent_segment was prior to their exposure, they might have different intent_segment values for different experiment analyses.
