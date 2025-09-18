---
title: SRM Checks
sidebar_label: SRM Checks
slug: /stats-engine/methodologies/srm-checks
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## SRM - Sample Ratio Mismatch

Sample ratio mismatch (SRM for short) is when the observed allocation of __unique__ users between test groups differs from the expected allocation or "split" of the test. We have a brief [rundown on this topic here](https://www.statsig.com/blog/sample-ratio-mismatch) on our blog.

This is a signal that there could be some unknown bias in the test. This is a major problem because unless you can clearly diagnose the reason for the imbalance, there's not an easy way to know how much this bias impacts your results.

## SRM Checks

Statsig runs SRM checks on all experiments and feature gates as part of our Health Checks (described [here](../../experiments-plus/monitor.md)). We use a Chi-squared test to identify if the split of users between groups is indicative of a Sample Ratio Mismatch.

![SRM health check results interface](https://github.com/statsig-io/docs/assets/31516123/3e05224d-64cc-4047-b73a-368be5005af6)

We automatically analyze data by common dimensions logged by the Statsig SDK to identify potential drivers of SRM. These include sdk_type, sdk_version, reason, is_bot, browser_name, browser_version, os, os_version and region to identify potential causes.
![SRM dimension analysis breakdown](https://github.com/statsig-io/docs/assets/31516123/8ecd6930-a493-4f91-8590-71b0f42dfb30)
