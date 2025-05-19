---
title: Comparing Warehouse Native and Cloud
slug: /statsig-warehouse-native/native-vs-cloud
sidebar_label: WHN vs Cloud
description: Understand the different Statsig products
keywords:
  - owner:vm
last_update:
  date: 2025-01-15
---

Statsig Warehouse Native and Statsig Cloud share many capabilities, but there are some differences between the platforms. This page is intended to make those differences clear, and to help you make the right choice for your experimentation needs.

If there's any confusion, or if a feature is critical for your evaluation, we're always open to prioritizing requests. Don't hesitate to reach out in Slack or to our [support team](mailto:support@statsig.com)

## Feature Gates

| Feature                   | Cloud vs. WHN Status |
| ------------------------- | -------------------- |
| Targeting                 | Identical            |
| Overrides                 | Identical            |
| SDKs                      | Identical            |
| Diagnostics               | Identical            |
| Pulse                     | Identical            |
| Gate lifecycle management | Identical            |

## E2E Experiments (with SDK)

| Feature | Cloud vs. WHN Status         |
| ------- | ---------------------------- |
| Pulse   | WHN offers on-demand reloads |

## Pulse (Scorecards)

| Feature                 | Cloud vs. WHN Status                             |
| ----------------------- | ------------------------------------------------ |
| CUPED                   | Identical                                        |
| CURE                    | WHN only for now                                 |
| Topline Impact          | Identical                                        |
| Daily Time Series       | Identical                                        |
| Frequentist vs Bayesian | Identical                                        |
| Sequential Testing      | Identical                                        |
| BF Correction           | Identical                                        |
| Power Analysis          | Identical                                        |
| Custom Queries          | Identical                                        |
| Guardrail Metric Alerts | Available in WHN, based on your pipeline cadence |
| Export to CSV           | Identical                                        |
| Share Links             | Identical                                        |

## Analysis Only Experiments (without SDK)

| Feature                     | Cloud vs. WHN Status |
| --------------------------- | -------------------- |
| Overrides                   | Not relevant w/o SDK |
| Diagnostics (SDK Related)   | Not relevant w/o SDK |
| Diagnostics (Data specific) | WHN has additional   |
| Capture Hypothesis          | Identical            |
| Capture Images              | Identical            |
| Experiment Groups           | Identical            |
| Experiment Parameters       | Not relevant w/o SDK |
| SRM Checks                  | Identical            |
| View SQL                    | WHN-only             |

## Core Features

| Feature        | Cloud vs. WHN Status |
| -------------- | -------------------- |
| Layers         | Identical            |
| Dynamic Config | Identical            |
| Dashboards     | Identical            |
| Segments       | Identical            |
| Holdouts       | Identical            |

## Insights

| Feature                   | Cloud vs. WHN Status |
| ------------------------- | -------------------- |
| Experiment Timeline       | Identical            |
| Knowledge Bank            | Identical            |
| Metric Insights           | Identical            |
| Metric Correlations       | Identical            |
| Metric Impacts            | Identical            |
| Active feature analysis   | Identical            |
| Historic feature analysis | Identical            |

## Metrics

| Feature                                   | Cloud vs. WHN Status |
| ----------------------------------------- | -------------------- |
| Metrics Explorer                          | Cloud has additional |
| SDK Events Logstream                      | Identical            |
| Autocreate metric from SDK Events         | Cloud only for now   |
| User Accounting Metrics (DAU, Stickiness) | Cloud only for now   |
| Automated A/A Tests                       | Cloud only for now   |

## Organization & Settings

| Feature           | Cloud vs. WHN Status |
| ----------------- | -------------------- |
| SSO               | Identical            |
| Experiment Policy | Identical            |
| Change Reviews    | Identical            |
| Custom UnitIDs    | Identical            |
| Custom RBAC       | Identical            |

## Integrations & Admin

| Feature                                  | Cloud vs. WHN Status |
| ---------------------------------------- | -------------------- |
| Change mgmt (Slack, Datadog, Github etc) | Identical            |
| CDBs (Segment/Rudderstack etc)           | Not relevant for WHN |
| Custom Environments                      | Identical            |
| Target Applications                      | Identical            |
| Console API                              | Identical            |
| Audit Log                                | Identical            |
| Audit Log API                            | Identical            |
| Autotune (MAB)                           | Identical            |
| Users Tab                                | Identical            |
