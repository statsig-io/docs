---
title: Heap
---

## Overview

Enabling the Heap integration allows you to export Statsig events to your configured Heap app with information on the status of each user's feature gate and experimentation groups.

Statsig sends the following events to your Heap app every time you call the `initialize` API from a Statsig client SDK. 

| Event Name | Properties |
|----------|--------|
| Statsig Feature Gates | For each [Statsig Feature gate](feature-gates), this field contains a property that maps the name of the feature gate to `true` or `false`, stating whether the user passes or does not pass the feature gate.
| Statsig Experiments | For each [Statsig Experiment](/experiments-plus), this field contains a property that maps the name of the experiment to the variant that the user is assigned to.|

## Configuring Outbound Events
1. Navigate to your [Heap Projects](https://heapanalytics.com/app/manage/projects) page to find and copy the App ID for your project.

![img](https://console.statsig.com/img/integrations/heap_integration_steps/outgoing_1.png)

2. Paste the App ID into the App ID input field for the Heap configuration in the Statsig [Integrations](https://console.statsig.com/integrations) page and save your changes.
