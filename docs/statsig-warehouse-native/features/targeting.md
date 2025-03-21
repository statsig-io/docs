---
title: Targeting
slug: /statsig-warehouse-native/features/targeting
sidebar_label: Targeting
keywords:
  - owner:vm
last_update:
  date: 2024-06-12
---

## How to Target Experiments

Experiments integrate natively with Statsig's Feature Gates product in order to target interventions. Feature gates provide a rich language for targeting users by properties or segments, and experiments can be given a targeting gate in order to only test an intervention on units which pass that gate.

See more about feature gates in their [documentation](/feature-flags/working-with)

## When to Target an Experiment

Targeting an experiment makes sense when

- You want to gradually release the experiment to tiers of users
- Part of your hypothesis is that the experiment intervention will only work for a target subset of users, e.g. mobile users
