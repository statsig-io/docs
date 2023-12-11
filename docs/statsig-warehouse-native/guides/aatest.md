---
title: A/A Test
slug: /statsig-warehouse-native/guides/AATest
sidebar_label: A/A Test
---

To create a quick A/A test, you can randomly split existing users you already have events for.Create an assignment source using the script below - and you;ll be ready to analyze your A/A test in minutes and see Pulse scorecards light up. 

Example script to use - 

```sql
SELECT
  user_id,
  timestamp,
  'test_experiment' as experiment_name,
  IF (mod(abs(farm_fingerprint(user_id)), 100) < 50, 'test', 'control') as experiment_group
FROM <my_event/metrics_table>
```
