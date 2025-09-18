---
title: Scheduled Reloads
slug: /statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads
sidebar_label: Scheduled Reloads
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Overview
You can control daily reload settings for Metrics and Experiments. While these can be configured on each entity, you can also set defaults that entities can inherit from in your Project Settings. You also have the option of using the Console API to [trigger experiment result loads](/console-api/experiments#post-/experiments/-experiment_id-/load_pulse) (experiment results). This is often used for triggering refreshes when your data pipelines are ready.

<img width="1443" alt="Project-level scheduled reload settings interface" src="https://github.com/user-attachments/assets/d056be8d-19a0-43ae-91e1-cf5e16d23b53" />

![Individual experiment pulse scheduling interface](https://github.com/user-attachments/assets/efc232e7-4189-4ee7-b35a-5b1530041c70)

## Gate/Experiment Pulse Scheduling

For feature gates and experiments, individual Pulse scheduling is available separately from the project-level settings. You can schedule daily Pulse metric reloads for individual feature gates and experiments.

To access this feature:
1. Navigate to your feature gate/experiment in the Statsig Console
2. Go to the Pulse Results tab
3. Use the scheduling controls to configure daily reloads

The scheduling allows you to:
- Set a daily reload time in UTC
- Choose between Full and Incremental reload types
- Save, edit, or cancel scheduled reloads

This feature requires gates with partial rollout rules and overrides any project-level settings.
