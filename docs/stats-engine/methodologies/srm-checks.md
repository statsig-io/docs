---
title: SRM Checks
sidebar_label: SRM Checks
slug: /stats-engine/methodologies/srm-checks
---

## SRM - Sample Ratio Mismatch

Sample ratio mismatch (SRM for short) is when the observed allocation of users between test groups differs from the expected allocation or "split" of the test. We have a brief [rundown on this topic here](https://www.statsig.com/blog/sample-ratio-mismatch) on our blog.

This is a signal that there could be some unknown bias in the test. This is a major problem because unless you can clearly diagnose the reason for the imbalance, there's not an easy way to know how much this bias impacts your results.

## SRM Checks

Statsig runs SRM checks on all experiments and feature gates as part of our Health Checks (described [here](../../experiments-plus/monitor.md)). We use a Chi-squared test to identify if the split of users between groups is indicative of a Sample Ratio Mismatch.
