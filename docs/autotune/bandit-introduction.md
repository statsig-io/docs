---
title: Autotune (Bandits)
sidebar_label: Introduction
slug: /bandit-introduction
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

Multi-Armed Bandits are solutions that automatically find the best variant among a group of candidates, balancing between "exploring" options and "exploiting" the best option by dynamically allocating traffic. On Statsig, Bandits are used to pick the best user experience to drive a target metric or action.

Statsig's [Autotune](./multi-armed-bandit.md) (the Multi-Armed Bandit solution) allocates traffic towards high-performing variants and can eventually identify a winning variant.

Statsig's [Autotune AI](./contextual-bandit.md) (the Contextual Bandit solution) is a personalization tool that serves users the best variant determined by a machine learning model trained on previous observations.

## How Autotune works

Autotune is Statsig's [Bayesian Multi-Armed Bandit](./multi-armed-bandit.md), and Autotune AI is Statsig's [Contextual Bandit](./contextual-bandit.md).

Both Autotune products will test and measure different variations and their effect on a target metric.

- The multi-armed bandit continuously adjusts traffic towards the best performing variations until it can confidently pick the best variation. The winning variation will then receive 100% of traffic.
- The contextual bandit personalizes what variant a user sees based on "context" - or provided user/interaction attributes - to serve each user the variation predicted to be best (i.e. personalization).

Contextual Bandits are a subset of Multi-Armed Bandits; both seek to balance the "explore"/"exploit" problem - balancing between "exploiting" the current best known solution versus "exploring" to get more information about other solutions.

Our blog posts on [Multi-Armed Bandits](/autotune) and [Contextual Bandits](https://www.statsig.com/blog/statsig-autotune-contextual-bandits-personalization) go into depth on use cases and considerations. The chart below describes some of the main considerations on when to use either bandits, a ranking engine, or an experiment.

|                            | A/B/n Test | Multi-Armed Bandit (Autotune) | Contextual Bandit (Autotune AI)  | Ranking Engine                           |
| -------------------------- | ---------- | ----------------------------- | -------------------------------- | ---------------------------------------- |
| Typical # Variants         | 2-3        | 4-8                           | 4-8                              | Arbitrary #                              |
| Personalization Factor     | None       | None                          | Moderate                         | High                                     |
| Input Data Required        | None       | Very Little (100+ samples)    | Little - generally 1000+ samples | Tens of thousands to millions of samples |
| Model Efficacy             | None       | Basic                         | Moderate                         | High                                     |
| Identifies Best Variant    | Yes        | Yes                           | No                               | No                                       |
| Consistent User Assignment | Yes        | No                            | No                               | No                                       |
