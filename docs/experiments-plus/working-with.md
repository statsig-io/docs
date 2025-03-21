---
title: Working with experiments
sidebar_label: Working With
slug: /experiments-plus/working-with
keywords:
  - owner:vm
last_update:
  date: 2022-07-07
---

Similar to A/B tests, Experiments provides the following features to run and analyze experiments with ease:
 - Automatically compute the sample size required to achieve statistical significance for a given experiment  
 - Configure allocations to define what proportion of eligible users are exposed to each variant in the experiment
 - Review the **Metrics Lifts** and confidence intervals for all your business metrics
 - Choose confidence intervals ranging from 80% to 99% depending on the confidence you need for your decision; a larger lift (say 20%) generally requires a lower confidence interval (about 80%), while a smaller lift (say 1%) generally requires a higher confidence interval (95%)
 - Analyze **Metrics Lifts** for different segments by filtering for dimensions such as operating system and browser version
 - Use the Statsig client or server SDK of your choice to implement the experiment in your application

Experiments offers additional features to accelerate and scale your experiments:
 - Create multiple variants as part of the same experiment (A/B/n tests)
 - Select the key metrics that you want to prioritize for your hypothesis 
 - Define layers to exclude the users participating in one experiment from other related experiments

## Tutorials
- [Your first A/B test](/guides/abn-tests)
- [Create an experiment using a userID](/experiments-plus/create-new)
- [Create an experiment using a customID](/guides/experiment-on-custom-id-types)
- [Use a language specific Statsig SDK to implement an experiment in your application](/experiments-plus/implement)
- [Monitor an experiment](/experiments-plus/monitor)
 
