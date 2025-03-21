---
title: Comparing Warehouse Native and Cloud
slug: /statsig-warehouse-native/native-vs-cloud
sidebar_label: Native vs Cloud
description: Understand the different Statsig products
keywords:
  - owner:vm
last_update: 2025-01-15 04:49:39 +0000
---

Statsig Warehouse Native and Statsig Cloud share many capabilities, but there are some differences between the platforms. This page is intended to make those differences clear, and to help you make the right choice for your experimentation needs.

If there's any confusion, or if a feature is critical for your evaluation, we're always open to prioritizing requests. Don't hesitate to reach out in Slack or to our [support team](mailto:support@statsig.com)

| Product Area                        | Feature                                   | Status                                             |
| ----------------------------------- | ----------------------------------------- | -------------------------------------------------- |
| Feature Gates                       | Targeting                                 | Identical                                          |
|                                     | Overrides                                 | Identical                                          |
|                                     | SDKs                                      | Identical                                          |
|                                     | Diagnostics                               | Identical                                          |
|                                     | Pulse                                     | Identical                                          |
|                                     | Gate lifecycle management                 | Identical                                          |
| E2E Experiments (w/ SDK)            | Pulse                                     | WHN offers on-demand reloads                       |
| Pulse (Scorecards)                  | CUPED                                     | Identical                                          |
|                                     | Topline Impact                            | Identical                                          |
|                                     | Daily Time Series                         | Identical                                          |
|                                     | Frequentist vs Bayesian                   | Identical                                          |
|                                     | Sequential Testing                        | Identical                                          |
|                                     | BF Correction                             | Identical                                          |
|                                     | Power Analysis                            | Identical                                          |
|                                     | Custom Queries                            | Identical                                          |
|                                     | Guardrail Metric Alerts                   | Available in WHN, based on your pipeline cadence   |
|                                     | Export to CSV                             | Identical                                          |
|                                     | Share Links                               | Identical                                          |
| Analysis Only Experiments (w/o SDK) | Overrides                                 | Not relevant w/o SDK                               |
|                                     | Diagnostics (SDK Related)                 | Not relevant w/o SDK                               |
|                                     | Diagnostics (Data specific)               | WHN has additional                                 |
|                                     | Capture Hypothesis                        | Identical                                          |
|                                     | Capture Images                            | Identical                                          |
|                                     | Experiment Groups                         | Identical                                          |
|                                     | Experiment Parameters                     | Not relevant w/o SDK                               |
|                                     | SRM Checks                                | Identical                                          |
|                                     | View SQL                                  | WHN-only                                           |
| Layers                              | All                                       | Identical                                          |
| Insights                            | Experiment Timeline                       | Identical                                          |
|                                     | Knowledge Bank                            | Identical                                          |
|                                     | Metric Insights                           | Identical                                          |
|                                     | Metric Correlations                       | Identical                                          |
|                                     | Metric Impacts                            | Identical                                          |
|                                     | Active feature analysis                   | Identical                                          |
|                                     | Historic feature analysis                 | Identical                                          |
| Dynamic Config                      | All                                       | Identical                                          |
| Dashboards                          | All                                       | Identical                                          |
| Segments                            | All                                       | Identical                                          |
| Holdouts                            | All                                       | Identical                                          |
| Metrics                             | Metrics Explorer                          | Cloud has additional                               |
|                                     | SDK Events Logstream                      | Identical                                          |
|                                     | Autocreate metric from SDK Events         | Cloud only for now                                 |
|                                     | User Accounting Metrics (DAU, Stickiness) | Cloud only for now                                 |
|                                     | Automated A/A Tests                       | Cloud only for now                                 |
| Org Settings                        | SSO                                       | Identical                                          |
|                                     | Experiment Policy                         | Identical                                          |
| Project Settings                    | Change Reviews                            | Identical                                          |
|                                     | Custom UnitIDs                            | Identical                                          |
|                                     | Custom RBAC                               | Identical                                          |
| Integrations                        | Change mgmt - Slack, Datadog,Github etc   | Identical                                          |
|                                     | CDBs - Segment/Rudderstack etc            | Not relevant for WHN                               |
| Admin                               | Custom Environments                       | Identical                                          |
|                                     | Target Applications                       | Identical                                          |
|                                     | Console API                               | Identical                                          |
|                                     | Audit Log                                 | Identical                                          |
|                                     | Audit Log API                             | Identical                                          |
| Autotune                            | MAB                                       | Identical                                          |
| Users Tab                           | Users tab                                 | Identical                                          |
