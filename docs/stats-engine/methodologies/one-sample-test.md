---
title: One-Sample Test
sidebar_label: One-Sample Tests
slug: /stats-engine/one-sample-test
keywords:
  - owner:vm
---

## One-Sample Tests (aka Fixed-Value Test)

A one-sample test compares a single sample of data against a known or hypothesized value to determine if there is a statistically significant difference. Unlike A/B tests that compare two groups, one-sample tests evaluate whether a single group differs from a specific benchmark, target, or historical baseline.

## When to Use One-Sample Tests

One-sample tests are useful for comparing a single group against a known value:

- **Single Group Events**: When only one group can trigger certain events (e.g., feature usage, error types), compare against expected baseline
- **Algorithm Testing**: Test if an algorithm performs better than random (e.g., testing if success rate differs from 50%)

## Statistical Considerations

One-sample tests provide a way to make statistical inferences about whether your observed data differs significantly from a hypothesized value. The test helps determine if any observed difference is due to random variation or represents a true change in the underlying process.

## How to Enable the Feature

1. Go to the setup page of an experiment

2. Click the metric name

3. Select Use Fixed Baseline as Control
