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
        WHEN mod(abs(farm_fingerprint(user_id)), 100) < 50 THEN 'Control'
        ELSE 'Test'
    END AS GroupAssignment
FROM <my_event/metrics_table>
```

Note : This script works on BigQuery. Replace farm_fingerprint with a hash function for your warehouse.
Snowflake : HASH(user_id, 'SHA256')

