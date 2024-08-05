---
title: Entity Properties
slug: /statsig-warehouse-native/features/entity-properties
sidebar_label: Entity Properties
description: Provide additional details about given entity
displayed_sidebar: cloud
---

# Entity Properties

Entity Properties are categorical details about an entity (e.g. a user) in an experiment, which you can use across all experiments to filter or group experiment results in the Explore section. Create these at Experiments -> Entity Properties.

You can either provide additional detail about an entity that doesn't typically change (e.g. a user's home country), or a property that may change as part of an experiment (e.g. Subscriber Status : True/False). For the latter, you provide a timestamp field which will be used to identify most recent value prior to the user's exposure. This prevents imbalanced groups and biased results from when an experimental treatment impacts the property, for example if it increased the subscription rate.

![image](https://github.com/statsig-io/docs/assets/31516123/7fcac725-54b4-46be-bb68-52fcc308fe5f)


![image](https://github.com/statsig-io/docs/assets/31516123/6c151cf4-d343-4750-8bfd-a6d48afd6e10)

