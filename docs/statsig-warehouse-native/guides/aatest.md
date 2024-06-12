---
title: Synthetic A/A Test
slug: /statsig-warehouse-native/guides/AATest
sidebar_label: A/A Test
---

To create a quick A/A test, you can randomly split existing users you already have events for. Create an assignment source using the script below - and you;ll be ready to analyze your A/A test in minutes and see Pulse scorecards light up.

Example script to use -

```sql
SELECT
    user_id,
    timestamp,
    'AA_Test_1' AS experiment_name,
    CASE
        WHEN <random_logic> THEN 'Control'
        ELSE 'Test'
    END AS GroupAssignment
FROM <my_event/metrics_table>
```

Replace `<random_logic>` with the following based your warehouse:

- Bigquery: `mod(abs(farm_fingerprint(cast(user_id as string))), 100) < 50`
- Redshift: `mod(abs(farmFingerprint64(cast(user_id as varchar))), 100) < 50`
- Snowflake: `mod(abs(hash(cast(user_id as string))), 100) < 50`
- Databricks: `mod(abs(hash(cast(user_id as string))), 100) < 50`
- Athena: `mod(abs(cast(conv(substr(md5(cast(user_id as varchar)), 1, 16), 16, 10) as bigint)), 100) < 50`
