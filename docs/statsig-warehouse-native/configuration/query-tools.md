---
title: Macros
slug: /statsig-warehouse-native/configuration/query-tools
sidebar_label: Macros
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
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

## Timezone Note
All timestamps in Warehouse Native from statsig are in UTC, and it is assumed that timestamps in the warehouse will be timezone-less/UTC as well.

## Advanced Macros
- `{statsig_start_date_int}`
- `{statsig_end_date_int}`
Int versions of the above for use with number based partitioning - e.g. '2025-03-01' => 20250301

- `{statsig_experiment_start_timestamp}`
Only available for metric sources and entity property sources; this will resolve to the start timestamp of the experiment. In non-experiment contexts, it resolves to `TIMESTAMP('1970-01-01')`. This is useful for generating entity properties such as "30d revenue before the experiment started".


