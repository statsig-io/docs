---
title: Types of Experiments
slug: /statsig-warehouse-native/features/types-of-experiments
sidebar_label: Types of Experiments
---

Statsig offers many forms of Experiment Analysis, detailed below:

## Analysis Only

### A/B/n

Analysis-only A/B/n tests run analysis on top of Assignment and Metric data from your warehouse. In these experiments, Statsig operates as a statistics engine to help make analyses more reproducible.

## Assign and Analyze

### A/B/n

The most common Assign-and-Analyze experiments are A/B/n tests that integrate warehouse data with Statsig's live SDK. In these experiments, Statsig operates as an assignment tool, a real-time diagnostics tool, and as a statistics engine.

### Switchback Experiments

Statsig offers [Switchback](/experiments-plus/switchback-tests) tests, which are a powerful way to experiment in the presence of meaningful network effects or for ecosystems where changing an experience for one group will leak outside of that group (e.g. a ride-service app changing prices for some users will change driver demand for all users).

Switchback test are configurable in Statsig's console, and use time periods (as well as optional buckets, like, city or country) to change experiments, and run a bootstrapping analysis to estimate test statistics. This includes advanced options like burn-in/burn-out periods, allocation windows, and configurable window lengths.

### Geo Testing [Alpha]

Statsig is finalizing initial tests on integrating with Geo-testing platforms to create test segments and run causal inference analysis on marketing campaigns run through vendors like Google or Facebook Ads.

Please out to our [support team](mailto:support@statsig.com), or in slack, if you're interested in exploring this method of testing.

### MABs

- [Autotune](/statsig-warehouse-native/features/autotune) is Statsig's multi-armed bandit solution, which balances explore and exploit to deliver the optimal global treatment to your users. This is a useful way to explore a high number of options and dynamically adjust traffic to avoid over-delivering underperforming variants.

- Statsig also offers a Contextual Multi Armed Bandit [Alpha], which extends the multi-armed bandit by personalizing which experience is served to users depending on "context", or user/event attributes provided to the Statsig SDK. This balances explore-and exploit by optimizing for potential upside in its predictions.

Using both MABs is as simple as calling Statsig's getExperiment, and providing relevant attributes to the user object for the CMAB approach. Please out to our [support team](mailto:support@statsig.com), or in slack, if you're interested in exploring Contextual Multi-Armed Bandits.
