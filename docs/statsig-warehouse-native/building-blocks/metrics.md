---
title: Metrics in Statsig Warehouse Native
slug: /statsig-warehouse-native/building-blocks/metrics
sidebar_label: Metrics
---

Metrics are measures of user or system behavior that you'll use as evaluation criteria for
experiments. In Statsig Data Warehouse Native, Metrics are defined as an aggregation, a set of
filters, and an optional metadata breakdown field.

## Types of Metrics

Metrics define different aggregations for user-level aggregations, as well as group-level aggregations
and Statistical calculations. Refer to the crosstab below for the metric types available, and how
we'll calculate these on the backend.

| Metric Type | Examples                                                | Metrics Tab Calculation                                      | User Level Calculation                                | Group Calculation Type            | Stats Notes          |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------- | -------------------- |
| Count       | clicks, purchases, API requests                         | Count of Metric Source rows                                  | "                                                     | Sum of user values                |                      |
| Sum         | revenue, time spent, bandwidth                          | Sum of Metric Source values                                  | "                                                     | Sum of user values                |                      |
| Mean        | average latency, average purchase price                 | Average of non-null Metric Source values                     | Sum of values, Count of values                        | Sum(values)/Sum(counts)           | Delta Method applied |
| User Count  | DAU, conversion to subscriber, conversion within 1 week | Count of distinct users; not comparable for windowed metrics | 1/0 flag for participation on a day or windowed basis | Sum of values                     |                      |
| Ratio       | revenue per page hit, revenue per new user              | Value of Numerator/Value of Denominator based on types       | Value of numerator, denominator based on types        | Sum(numerators)/Sum(denominators) | Delta Method applied |

### Looking for more?

We're always happy to partner with customers on new metric types or functionality! Reach out in your slack channel to discuss your use case.

## Where Metrics Live

Metrics will have

- A timeseries view in their setup tab to help identify erroneous setup or source data
- Pulse results in experiments they've been chosen for
- Experiment-scoped user-level and experiment-group-level rollups in your warehouse
