---
title: Types of Experiments
slug: /statsig-warehouse-native/features/types-of-experiments
sidebar_label: Types of Experiments
keywords:
  - owner:vm
last_update:
  date: 2025-07-28
---

Statsig offers many forms of Experiment Analysis, detailed below:

## Analysis Only

### A/B/n

Analysis-only A/B/n tests run analysis on top of Assignment and Metric data from your warehouse. In these experiments, Statsig operates as a statistics engine to help make analyses more reproducible.

## Assign and Analyze

### A/B/n

The most common Assign-and-Analyze experiments are A/B/n tests that integrate warehouse data with Statsig's live SDK. In these experiments, Statsig operates as an assignment tool, a real-time diagnostics tool, and as a statistics engine. Assignment related features supported include:

> #### [Stratified Sampling](/experiments-plus/stratified-sampling)
> Dividing your population into homogeneous groups (based on a metric or classification).

> #### Configurable Allocation Duration
> You can enroll users for a subset of an experiment's duration. If you are experimenting on a one-time experience (e.g. signup flows), this just works. If it is not a one-time experience (enrolled users need to keep being assigned), you will need to configure your SDKs to use Persistent Assignment (you provide a store to save user's enrollment states; the SDK manages this state). Learn more about Persistent Assignment on  [Client](/client/concepts/persistent_assignment) and [Server](/server/concepts/persistent_assignment) SDKs.

### Switchback Experiments

Statsig offers [Switchback](/experiments-plus/switchback-tests) tests, which are a powerful way to experiment in the presence of meaningful network effects or for ecosystems where changing an experience for one group will leak outside of that group (e.g. a ride-service app changing prices for some users will change driver demand for all users).

Switchback test are configurable in Statsig's console, and use time periods (as well as optional buckets, like, city or country) to change experiments, and run a bootstrapping analysis to estimate test statistics. This includes advanced options like burn-in/burn-out periods, allocation windows, and configurable window lengths.

### Geo Testing

Statsig has launched [Geotesting](/experiments-plus/geotests) to support marketing and product causal inference techniques where you can't run a traditional A/B test. Geotesting treats geographic units (e.g. postal codes and DMAs) as your unit of analysis, and unlocks new experimental methodologies like rigorous testing of paid marketing and/or search on platforms like Google and Facebook Ads.

Geotesting relies on Synthetic Control methodologies built using the best-in-class open source package GeoLift from Meta, combined with the ease and simplicity of the Statsig platform. All your existing metrics and metric sources are available to use with the addition of some geographical labels.

### MABs

- [Autotune](/statsig-warehouse-native/features/autotune) is Statsig's multi-armed bandit solution, which balances explore and exploit to deliver the optimal global treatment to your users. This is a useful way to explore a high number of options and dynamically adjust traffic to avoid over-delivering underperforming variants.

- Statsig also offers a [Contextual Multi Armed Bandit](/autotune/contextual/introduction), which extends the multi-armed bandit by personalizing which experience is served to users depending on "context", or user/event attributes provided to the Statsig SDK. This balances explore and exploit by optimizing for potential upside in its predictions.

Using both MABs is as simple as calling Statsig's getExperiment, and providing relevant attributes to the user object for the CMAB approach. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or in our [Slack community](https://statsig.com/slack), if you're interested in exploring Contextual Multi-Armed Bandits.
