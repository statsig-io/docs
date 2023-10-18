---
title: Entity Properties
slug: /statsig-warehouse-native/features/entity-properties
sidebar_label: Entity Properties
description: Provide additional details about given entity
---

# Entity Properties

Entity Properties provide additional details about the given entity which you can use to filter or group by in experiment results. Create these at Experiments -> Entity Properties.

You can either provide additional detail about an entity that doesn't typically change (e.g. a user's home country), or a property that may change as part of an experiment (e.g. Subscriber Status : True/False). For the latter, you provide a timestamp field and we freeze the last value prior to the user's exposure to make sure you can measure any experimental impact you had.   

![image](https://github.com/statsig-io/docs/assets/31516123/77cfdfd7-3e8c-4fee-9acb-c85e98c0b182)

![image](https://github.com/statsig-io/docs/assets/31516123/6c151cf4-d343-4750-8bfd-a6d48afd6e10)

