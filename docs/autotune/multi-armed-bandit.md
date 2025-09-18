---
title: Methodology
sidebar_label: Methodology
slug: /multi-armed-bandit
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

## Model

The base Autotune implementation uses a Thompson Sampling (Bayesian) algorithm to estimate each variant's probability of being the best variant and allocate a proportional amount of traffic.

For example, if a given variant has a 60% probability of being the best, Autotune will provide it 60% of the traffic. At a high level, the multi-armed bandit algorithm works by adding more users to a treatment as soon as it recognizes that it is clearly better in maximizing the reward (the target metric).

Throughout the process, higher performing treatments are allocated more traffic whereas underperforming treatments are allocated less traffic. When the winning treatment beats the second best treatment by a specified margin, the process terminates.

Some helpful references:

- [Statsig Blog](https://www.statsig.com/blog/introducing-autotune)
- [Goyal and Agrawal (Microsoft Research)](https://proceedings.mlr.press/v23/agrawal12/agrawal12.pdf) Regret Analysis
- [Doordash Engineering](https://doordash.engineering/2022/03/15/using-a-multi-armed-bandit-with-thompson-sampling-to-identify-responsive-dashers/) Summary Blog

## Advantages

The major advantage of the base Multi-Armed Bandit over a contextual bandit is its ability to converge and identify a best variant. In cases where there is a "one-size-fits-all" solution, this is an elegant way to efficiently allocate traffic and determine a correct long-term solution while minimizing "regret" - the outcome of a high number of users being exposed to the worse variant like in an a/b test.

## Disadvantages

The major disadvantages of a Multi-Armed Bandit as compared to a contextual bandit is its inability to personalize; in cases where there's interactions between a user's attributes and variants, vanilla Autotune can identify a global maxima that is worse than serving users their individual best variant.

You can see this in a toy example; even if the "US Flag" variant had the highest overall CTR, it would be a bad choice for CA users. In this example, both groups will converge to a sub-optimal variant.

|                            | A/B/n Test | Multi-Armed Bandit (Autotune) | Contextual Bandit (Autotune AI)  | Ranking Engine                           |
| -------------------------- | ---------- | ----------------------------- | -------------------------------- | ---------------------------------------- |
| Typical # Variants         | 2-3        | 4-8                           | 4-8                              | Arbitrary #                              |
| Personalization Factor     | None       | None                          | Moderate                         | High                                     |
| Input Data Required        | None       | Very Little (100+ samples)    | Little - generally 1000+ samples | Tens of thousands to millions of samples |
| Model Efficacy             | None       | Basic                         | Moderate                         | High                                     |
| Identifies Best Variant    | Yes        | Yes                           | No                               | No                                       |
| Consistent User Assignment | Yes        | No                            | No                               | No                                       |
