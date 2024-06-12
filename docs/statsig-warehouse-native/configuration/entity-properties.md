---
title: Entity Properties
slug: /statsig-warehouse-native/configuration/entity-properties
sidebar_label: Entity Properties
---

## Entity Properties

Entity Properties are categorical details about an entity (e.g. a user) in an experiment, which you can use across all experiments to filter or group experiment results in the Explore section. Create these at Experiments -> Entity Properties.

You can either provide additional detail about an entity that doesn't typically change (e.g. a user's home country), or a property that may change as part of an experiment (e.g. Subscriber Status : True/False). For the latter, you provide a timestamp field which will be used to identify most recent value prior to the user's exposure. This prevents imbalanced groups and biased results from when an experimental treatment impacts the property, for example if it increased the subscription rate.

![image](https://github.com/statsig-io/docs/assets/31516123/7fcac725-54b4-46be-bb68-52fcc308fe5f)

![image](https://github.com/statsig-io/docs/assets/31516123/6c151cf4-d343-4750-8bfd-a6d48afd6e10)

## Example Data

For property sources, Statsig only needs a user_id and property fields. Property sources can define **fixed** properties (e.g. a users Country of origin), but can also define **dynamic**
in which case you need to provide a timestamp for Statsig to identify the most recent pre-exposure record.

| Column Type      | Description                                                                                 | Format/Rules                   |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp        | _Optional_ an identifier of when the property was defined. Required for dynamic properties  | Castable to Timestamp/Date     |
| unit identifier  | **Required** At least one entity to which this metric belongs                               | Generally a user ID or similar |
| property columns | **Required** Fields which can be used to group by and filter results in exploratory queries |                                |

For example, a static property source could just be:

| user_id       | company_id | country |
| ------------- | ---------- | ------- |
| my_user_17503 | c_22235455 | US      |
| my_user_18821 | c_22235455 | CA      |

Which could be used to filter and group by any experiment that was exposed one either user_id or company_id.

For a dynamic property, it might look like this:

| user_id       | timestamp  | company_id | intent_segment | spend_segment |
| ------------- | ---------- | ---------- | -------------- | ------------- |
| my_user_17503 | 2023-10-10 | c_22235455 | high_intent    | high          |
| my_user_17503 | 2023-10-11 | c_22235455 | high_intent    | high          |
| my_user_17503 | 2023-10-12 | c_22235455 | mid_intent     | high          |
| my_user_18821 | 2023-10-10 | c_22235455 | low_intent     | low           |
| my_user_18821 | 2023-10-11 | c_22235455 | low_intent     | mid           |
| my_user_18821 | 2023-10-12 | c_22235455 | low_intent     | mid           |

The first user in this example has their intent_segment property change on `2023-10-12`; based on what the intent_segment was prior to their exposure, they might have different intent_segment values for different experiment analyses.
