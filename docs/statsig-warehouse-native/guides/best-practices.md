---
title: Data Best Practices
slug: /statsig-warehouse-native/guides/best-practices
sidebar_label: Best Practices
description: Best Practices for using Statsig in your warehouse
---

## Cost Management

Statsig's pipelines leverage many SQL best practices in order to reduce cost, and smaller customers can run month-long analyses for a few pennies.

Following these best practices will help keep costs under control and consistent.

### Follow SQL Best Practices

Statsig uses your SQL to connect to your source data. Here's some common issues:

- Avoid using `SELECT *`, and only select the columns you'll need

  - `SELECT *` leads to a lack of clarity in what you are pulling/require for other users
  - For warehouse like Bigquery and Snowflake, it can increase the scan/size of materialized assets like CTEs in snowflake
  - This leads to higher query runtime and higher warehouse bills

- Filter to the data you will need in your base query

  - This reduces the scan and amount of data required in future operations
  - You can use Statsig Macros (below) to dynamically prune date partitions in subqueries

- Group common metric groups into a single Metric Source

  - Statsig will filter your source to the minimal set of data and then create materializations of experiment-tagged data. To maximize the effectiveness of this strategy,
    have metric sources that cover common suites of metrics that are usually pulled together.

- Cluster/Partition tables to reduce query scope
  - Most warehouses offer some form of partitioning or indexing along frequently filtered keys. In warehouses with clustering, we recommend the following strategy:
    - Partition/Cluster Assignment Source tables by date, and then your experiment_id column so experiment-level queries can be scoped to just that experiment
    - Partition/Cluster Metric Source tables based on date, and then the fields you expect to use for filters

These best practices are generally true across all warehouses, especially as the datasets you use for experimentation scale.

### Materialize Tables/Views

Since Statsig offers a flexible and robust metric creation flow, it's common for people to write joins or other complex queries in a metric source. As tables and experimental velocity scale, these joins can become expensive since they will be run across every experiment analysis.

To reduce the impact of this, best practice is to:

- Materialize the results of the join and reference that in Statsig, so you only have to compute the join once
- Use Statsig macros to make sure partitions are pruned before the join, and you only join the data you need

### Use Incremental Reloads

Statsig offers both Full and Incremental reloads. Incremental reloads will only process new data, and can be significantly cheaper on long-running experiments. A number of advanced settings in the pulse advanced settings section (and available at an org-level default) will help you make tradeoffs to reduce the total compute cost. For example "Only calculate the latest day of experiment results" skips timeseries, but can run large full reloads (e.g. 1-year on 100M users) in 5 minutes on a Large snowflake cluster.

### Reload Data Ad-Hoc

Depending on your warehouse and data size, Statsig Pulse results can be available in as little as 45 seconds. Since there's flat costs to pipelines, reloading 5 days is not 5 times as expensive as loading one day.

If cost is a high concern, being judicious about which results you schedule vs. load on-demand can significantly reduce the amount of processing your warehouse has to do.

### Leverage Statsig's Advanced Options

By default, Statsig runs a thorough analysis including historical timeseries and context on your results. 

### Utilize Metric Level Reloads

Statsig offers Metric-level reloads; this allows you to add a new metric to an experiment and get its entire history, or restate a single metric after its definition has changed. This is cheaper than a full reload for experiments with many metrics, and is an easy way to check guardrails or analyze follow-up questions post-hoc.

### Use Statsig's Macros

In Metric and Assignment sources, you can use Statsig Macros to directly inject a DATE() type which will be relative to the experiment period being loaded.

- `{statsig_start_date}`
- `{statsig_end_date}`

For example, in an incremental reload from `2023-09-01` to `2023-09-03`, this query:

```
SELECT
    user_id,
    event,
    ts,
    dt
FROM log_table
WHERE dt BETWEEN `{statsig_start_date}` AND `{statsig_end_date}`
```

resolves to

```
SELECT
    user_id,
    event,
    ts,
    dt
FROM log_table
WHERE dt BETWEEN DATE('2023-09-01') AND DATE('2023-09-03)
```

This is a powerful tool since you can inject filters into queries with joins or CTEs and be confident that the initial scan will be pruned.

### Avoid Contention

Resource contention is a common problem for Data Engineering teams. Usually, there will be large runs in the morning to calculate the previous day's data or reload tables. On warehouses that have flat resources or scaling limits, Pulse queries can be significantly slower during these windows, and additionally will slow down core business logic pipelines.

The best practice is to assign a scoped resource to Statsig's service user. This has a few advantages:

- Costs are easy to understand, since anything billed to that resource is attributable to Statsig
- You can control the max spend by controlling the size of the resource, and independently scale the resource as your experimentation velocity increases
- Statsig jobs will not effect your production jobs, and vice versa

If this is not possible, it's a good idea to:

- Schedule your Statsig runs after your main runs - this also ensures the data in your experiment analysis is fresh
- Use API triggers to launch Statsig analyses after the main run is finished

## Debugging

Statsig shows you all the SQL being run, and any errors that occur. Generally these are caused by changing underlying tables or Metric Sources, causing a metric query to fail. Here's some best practices for debugging Statsig Queries.

### Use the Queries from your Statsig console

If a pulse load fails, you can find all of the SQL queries and associated error messages in the Diagnostics tab. You can easily click the copy button to run/debug the query within your warehouse. Look out for common errors:

- A query attempting to access a field that no longer exists on a table
- A table not existing - usually due to the Statsig user not having permission on a new table

### Ask!

Statsig's support is very responsive, and will be happy to help you fix your issue and build tools to prevent it in the future - whether it's due to system or user error.
