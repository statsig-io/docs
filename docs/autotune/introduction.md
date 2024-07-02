---
title: Autotune (Bandits)
sidebar_label: Introduction
slug: /autotune
---

Autotune and Autotune AI are Multi-Armed Bandit solutions that automatically find the best variant among a group of candidates, while dynamically allocating traffic to optimize for a single target metric.

[Autotune](./multi-armed-bandit.md) (the Multi-Armed Bandit solution) allocates traffic towards high-performing variants and can eventually identify a winning variant.

[Autotune AI](./contextual-bandit.md) (the Contextual Bandit solution) is a personalization tool that serves users the best variant determined by a machine learning model trained on previous observations.

## How Autotune works

Autotune is Statsig's [Bayesian Multi-Armed Bandit](./multi-armed-bandit.md), and Autotune AI is Statsig's [Contextual Bandit](./contextual-bandit.md).

Both Autotune products will test and measure different variations and their effect on a target metric.

- The multi-armed bandit continuously adjusts traffic towards the best performing variations until it can confidently pick the best variation. The winning variation will then receive 100% of traffic.
- The contextual bandit personalizes what variant a user sees based on "context" - or provided user/interaction attributes - to serve each user the variation predicted to be best (i.e. personalization).

Contextual Bandits are a subset of Multi-Armed Bandits; both seek to balance the "explore"/"exploit" problem - balancing between "exploiting" the current best known solution versus "exploring" to get more information about other solutions.

Our blog posts on [Multi-Armed Bandits](https://docs.statsig.com/autotune) and [Contextual Bandits](https://www.statsig.com/blog/statsig-autotune-contextual-bandits-personalization) go into depth on use cases and considerations.

|                            | A/B/n Test | Multi-Armed Bandit (Autotune) | Contextual Bandit (Autotune AI)  | Ranking Engine                           |
| -------------------------- | ---------- | ----------------------------- | -------------------------------- | ---------------------------------------- |
| Typical # Variants         | 2-3        | 4-8                           | 4-8                              | Arbitrary #                              |
| Personalization Factor     | None       | None                          | Moderate                         | High                                     |
| Input Data Required        | None       | Very Little (100+ samples)    | Little - generally 1000+ samples | Tens of thousands to millions of samples |
| Model Efficacy             | None       | Basic                         | Moderate                         | High                                     |
| Identifies Best Variant    | Yes        | Yes                           | No                               | No                                       |
| Consistent User Assignment | Yes        | No                            | No                               | No                                       |

## Implementing Autotune

Implementing an Autotune is as simple as checking an experiment in Statsig. After initialization, or on server SDKs, this comes with sub-millisecond latency.

Autotune will have a JSON config associated with each variant, which will be returned by the SDK and can be used to modify elements of your webpage (e.g. an image URL or button color), or simply identify the variant so that you know which code to use.

## When to use Autotune

Autotune has two major differences from A/B testing (Statsig Experiments):

1. The traffic split isn't fixed over the duration of the test. This allows Autotune to divert more traffic to the winner, fewer from the losers while making fewer mistakes. However, this means the user experience may not be consistent upon repeated visits.
2. Autotune can only optimize for a single metric. Autotune can't accurately measure a collection of metrics, and isn't a great way to understand secondary effects of your changes. Because of this, it works best when the metric is well-understood, has a direct and immediate relationship to the change being tested

Because of these differences, Statsig recommends Autotune in the following scenarios:

1. The cost of exposing users to a losing treatment is high. For example, sending new users to a landing page that is inferior may result in lost revenue or churn. While this may be a one-time loss, testing two user registration flows may result in users that never sign up. In this case, Autotune avoids permanently losing users since it can quickly adapt to feedback unlike a static A/B test.
2. You want the decision to be automated. Because Autotune automatically selects the winner, it requires no human decision-making. This is great for launching dozens of simultaneous tests, or for running a long-term unmonitored test.
3. When it's okay for users to be exposed to different experiences upon return visits. For example, changing text or recommendation algorithms.
4. When you have one simple metric to optimize for (eg. click-through rate) that has is an immediate effect of the test.
5. When you want to test multiple variations. Autotune can quickly rules out really poor performers while focusing traffic on the best variants.

Autotune should be avoided in the following scenarios:

1. When you have a complex ecosystem and want to understand secondary effects, tradeoffs between variants, and user behavior.
2. When you are optimizing for complex metrics or delayed effects.

For these cases, we recommend A/B testing with [Experiments\*](/experiments-plus). In general, it is also a best practice to run Autotune within an experiment with a small (1-10%) holdout group to measure the impact of the Autotune.
