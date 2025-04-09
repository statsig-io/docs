---
title: Qualifying Events
slug: /statsig-warehouse-native/configuration/qualifying-events
sidebar_label: Qualifying Events
keywords:
  - owner:vm
last_update:
  date: 2024-06-12
---

## Using Qualifying Events

Qualifying events are used to simulate exposures for power analysis, and to filter exposures to users who triggered a specific event. Setting up a Qualifying Event is identical to setting up an Assignment Source, except they do not require experimental information.

:::info
Please note that the qualifying event must occur after the exposure as indicated by their respective timestamps.
:::

Context columns can be used to filter the qualifying event for power analysis - for example you might have a Qualifying Event for page load, and filter to different page identifiers for power analyses of experiments on different surfaces.

## Example Data

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
