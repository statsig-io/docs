---
title: A/A Test
slug: /statsig-warehouse-native/guides/AATest
sidebar_label: A/A Test
---

To create a quick A/A test, you can randomly split existing users you already have events for. 

Example script - 

```sql
SELECT
  user_id,
  timestamp,
  'test_experiment' as experiment_name,
  IF (mod(abs(farm_fingerprint(user_id)), 100) < 50, 'test', 'control') as experiment_group
FROM <my_event/metrics_table>
```
