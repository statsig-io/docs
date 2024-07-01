---
title: Heterogeneous Treatment Effects
sidebar_label: Heterogeneous Treatment Effects
slug: /experiments-plus/hte
---

## What are Heterogeneous Treatment Effects
Experiments can have interesting effects on sub-populations that are easily missed. They might have a bug that impacts only a certain browser, OS, or country. If the topline impact isn't significant or is cancelled out by other changes - these are missed. 

Statsig will automatically flag experiments when extreme heterogenous effects are noticed for any sub-subpopulation your company has configured. Experiments are analyzed by default when Pulse is loaded after Day 1, Day 3 and when the Target Duration is met. 

## Enabling this
On Statsig Warehouse Native, configure the "Segments of Interest" you want automatically evaluated. These will either have to be configured as [Entity Properties](https://docs.statsig.com/statsig-warehouse-native/features/entity-properties) or passed in by a Statsig SDK as user properties in the [User Object](https://docs.statsig.com/client/concepts/user).

![image](https://github.com/statsig-io/docs/assets/31516123/0ee87ff3-f276-4f8e-88a8-fab3ff9d58e0)
![image](https://github.com/statsig-io/docs/assets/31516123/c216d7f1-dec5-4f39-926a-cc5034a0f738)


