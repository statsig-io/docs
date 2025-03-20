---
title: How to Run a Playground Evaluation
slug: /statsig-warehouse-native/guides/dummy_evaluation
sidebar_label: Playground Evaluation
keywords:
  - owner:vm
---

:::info
Due to the effort involved in setting this up, this section only applies to Enterprise tier evaluations (not for free or pro tier)
:::

# Why Run a Playground Evaluation

Many users who evaluate Statsig have sensitive data and long lead times on testing with production data due to privacy reviews and other data security processes. Statsig offers a read-only [Demo Project](https://console.statsig.com/whn_demo), but this doesn't allow you to really experience the warehouse native product.

To solve this, you can reach out to support to ask for access to a Playground Evaluation project. This is a project hosted by Statsig with fake, near-real time data sources that can be used to set up experiments, analyze metrics, and get a feel for what it's like to use Statsig and to get internal feedback.

You'll be an admin, and can add teammates as desired to explore the shared project together.

# Recommendation

## Playground Projects

Playground projects come with some boilerplate connections hooked up:

- A real-time event streaming metric source
- A daily user-level metric source
- An assignment source with a handful of experiments
- A handful of pre-loaded metrics and experiments

Note that playground projects do not come with any assign-and-analyze experiments, so some features that require SDK usage (e.g. Stratified Sampling) won't be available. A normal demo project can be used with an SDK on a local script to generate data for those use cases.

## Evaluation

We recommend following steps 2+ from the [quick start](/statsig-warehouse-native/guides/quick-start) guide, starting with the tables available to the playground project. This will give you a sense of what it takes to run experiments and manage metrics in Statsig.

Once that's done, refer to the [POC guide](/statsig-warehouse-native/guides/running_a_poc) and simulate the steps that are relevant to your evaluation. Customers have also found it useful to explore the Pulse UI together - the Statsig team is always happy to chat about any questions or feedback.
