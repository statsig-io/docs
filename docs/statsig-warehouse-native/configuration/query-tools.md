---
title: Macros
slug: /statsig-warehouse-native/configuration/query-tools
sidebar_label: Macros
---

In **Metric** and **Assignment sources**, you can use Statsig Macros to directly inject a DATE() type which will be relative to the experiment period being loaded.

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
WHERE dt BETWEEN DATE('2023-09-01') AND DATE('2023-09-03')
```

This is a powerful tool since you can inject filters into queries with joins or CTEs and be confident that the initial scan will be pruned.

We will adjust the range as necessary in some cases. For example, in entity properties we will add some pre-experiment buffer to allow for late-landing property data. We then choose the most recent value as of each unit's exposure. For CUPED, we will adjust the range to include the pre-experiment window for CUPED calculations.
