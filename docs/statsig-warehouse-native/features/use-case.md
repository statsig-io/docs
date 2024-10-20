---
title: Practical Use Cases
slug: /statsig-warehouse-native/features/use-case
sidebar_label: Practical Use Cases
---

## How can I define and filter results to 'new users' only?

### Scenario
I want to filter the experiment results to new users only: A user is 'new' if they had never visited the website before they were exposed to this experiment. In other words, if the first time that they visited the website was after the exposure timestamp in this experiment, they were 'new users'; otherwise they were existing users. 

### Solution

Assuming you have a logging table which contains every time when a user visits the website and relative timestamp `logging`, and you have another table with all user's user_id `user`. First, you need to create an Entity Property with the following logic: 
```
select distinct
  user_id,
  'new' as new_user,
  timestamp('1900-01-01') as timestamp
from user -- you can add filters here to include only targeted population only
union all
select distinct
  user_id,
  'old' as new_user,
  timestamp as timestamp
from logging
```
Click Run Query and will return a table like this. Click Save Results, then you can directly use this Entity Property across all experiments/gates to filter or group experiment results by whether they are a new users or not. 

|    user_id    |    new_user    |         timestamp         |
| ------------- | -------------- | ------------------------- |
|       A       |       new      | 1900-01-01T00:00:00+00:00 |
|       A       |       old      | 2024-01-01T10:10:18+00:00 |
|       B       |       new      | 1900-01-01T00:00:00+00:00 |

