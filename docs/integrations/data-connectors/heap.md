---
title: Heap
---

## Overview

Enabling the Heap integration will allow you to send Statsig events to your configured Heap app with information on the status of each user's feature gate and experimentation groups.

Every time the `initialize` API is called from a Statsig Client SDK, Statsig will send the following events to your Heap app:

| Event Name | Properties |
|----------|--------|
| Statsig Feature Gates | For each [Statsig Feature gate](feature-gates), contains a property that maps the name of the feature gate to `true` or `false`, stating whether the user passes or does not pass the feature gate.
| Statsig Experiments | For each [Statsig Experiment](/experiments-plus), contains a property that maps the name of the experiment to the name of the group in the experiment that the user is allocated to.|

## Configuration
1. Navigate to your [Heap Projects page](https://heapanalytics.com/app/manage/projects) to find and copy the App ID for your project.

![img](https://console.statsig.com/img/integrations/heap_integration_steps/outgoing_1.png)

2. Paste the App ID into the App ID input field for the Heap configuration in the [Statsig Integration page](https://console.statsig.com/integrations) and save your changes.