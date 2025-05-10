---
title: Working with dynamic config
sidebar_label: Working with
slug: /dynamic-config/working-with
keywords:
  - owner:shubham
last_update:
  date: 2025-03-06
---
A dynamic config allows you to use configuration parameters to control the behavior of your application in near real-time. 

In the example below, 
the dynamic config called **localization** allows you to retrieve localized strings for users in different countries. 
Users in Spanish speaking countries see Spanish strings, while users in French and Korean speaking countries see French and Korean strings respectively. 


![image](https://user-images.githubusercontent.com/1315028/129110998-d2d1cb31-cd87-4f93-81f0-21ab64565763.png)


A sample JSON payload for French speakers is also shown below.

![json payload french](../../static/img/dynamic-config/json-payload-french.png)


The following tutorials show you how to perform common tasks with dynamic configs.

#### Tutorials
- [Create a dynamic config](/dynamic-config/create-new)
- [Create a rule for a dynamic config](/dynamic-config/add-rule)
- [Use a language specific Statsig SDK to implement a dynamic config in your application](/sdks/getting-started)
