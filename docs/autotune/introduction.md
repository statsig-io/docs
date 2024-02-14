---
title: Autotune
sidebar_label: Introduction
slug: /autotune
---

Autotune automatically finds the best variant among a group of candidates, while dynamically allocating traffic to optimize for a single target metric.

## How Autotune works

Autotune is Statsig's [Bayesian Multi-Armed Bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit).  Autotune will test and measure different variations and their effect on a target metric.  It continuously adjusts traffic towards the best performing variations until it can confidently pick the best variation.  The winning variation will then receive 100% of traffic.  We use a Thompson Sampling (Bayesian) algorithm to estimate each variant's probability of being the best variant and allocate a proportional amount of traffic.  For example, if a given variant has a 60% probability of being the best, Autotune will provide it 60% of the traffic.  At a high level, the multi-armed bandit algorithm works by adding more users to a treatment as soon as it recognizes that it is clearly better in maximizing the reward (the target metric).  Throughout the process, higher performing treatments are allocated more traffic whereas underperforming treatments are allocated less traffic. When the winning treatment beats the second best treatment by enough margin, the process terminates.

## When to use Autotune

Autotune has two major differences from A/B testing (Statsig Experiments):
1. The traffic split isn't fixed over the duration of the test.  This allows Autotune to divert more traffic to the winner, fewer from the losers while making fewer mistakes.  However this means the user experience may not be consistent upon repeated visits.
2. Autotune can only optimize for a single metric.  Autotune can't accurately measure a collection of metrics, and isn't a great way to understand secondary effects of your changes.  Because of this, it works best when the metric is well-understood, has a direct and immediate relationship to the change being tested.

Because of these differences, Statsig recommends Autotune in the following scenarios:
1. The cost of exposing users to a losing treatment is high. For example, sending new users to a landing page that is inferior may result in lost revenue or churn. While this may be a one-time loss, testing two user registration flows may result in users that never sign up. In this case, Autotune avoids permanently losing users.
2. You want the decision to be automated.  Because Autotune automatically selects the winner, it requires no human decision-making.  This is great for launching dozens of simultaneous tests, or for running a long-term unmonitored test.
3. When it's okay for users to be exposed to different experiences upon return visits.  For example, changing text or recommendation algorithms.
4. When you have one simple metric to optimize for (eg. click-through rate) that has is an immediate effect of the test.
5. When you want to test multiple variations.  Autotune can quickly rules out really poor performers while focusing traffic on the best variants.

Autotune should be avoided in the following scenarios:
1. When you have a complex ecosystem and want to understand secondary effects, tradeoffs between variants, and user behavior.
2. When you are optimizing for complex metrics or delayed effects.

For these cases, we recommend A/B testing with [Experiments*](/experiments-plus).
