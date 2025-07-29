---
title: Slicing by User Properties
sidebar_label: User Properties
slug: /pulse/user_properties
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

Statsig let's you slice results by user properties. Common examples of doing this include breaking down results by user's home country, subscription status or engagement level. 
![image](https://github.com/user-attachments/assets/60ad9a4f-8e85-42a6-8c36-147fc6c85873)

For Statsig Cloud, these user properties are captured (and frozen) from the properties set on the user's first exposure. Statsig Warehouse Native also adds support for reading them from a warehouse table (Entity Properties). You can always run custom queries on experiments to slice by user properties. 

## Pre-Computed User Properties
User properties that are frequently used to slice results can be pre-computed when using Statsig Warehouse Native. To do this, you can configure these properties to be pre-computed on the experiment setup page, under the advanced settings. It's also possible to configure team-level defaults for this - or pre-configure it on an experiment template.
![image](https://github.com/user-attachments/assets/196bd217-dd29-4b63-9f1b-d08639e0d36d)

Once configured, you can also apply filters to all metrics on your results.
![image](https://github.com/user-attachments/assets/8b5c6dcc-feac-46c9-a6fa-331daafc4864)
