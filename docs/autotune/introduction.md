---
title: Autotune
sidebar_label: Introduction
slug: /autotune
---

Autotune automatically finds the winning variant for you among a group of candidates, and dynamically allocates traffic to optimize for a single target metric.

## How Autotune works

Autotune is Statsig's [Bayesian Multi-Armed Bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit).  Autotune will test the variants you provide and measure their effect on a target metric.  As it learns, it will adjust the traffic towards the variations that perform the best until it ultimately settles on the "best" variation and divert 100% of traffic to the winner.  On the backend, we use a Thompson Sampling (Bayesian) algorithm that estimates each variant's probability of being the best variant, and allocates it that proportion of traffic.  For example, if a given variant has a 60% probability of being the best, Autotune will provide it 60% of the traffic.  At a high level, the multi-armed bandit algorithm works by adding more users to a treatment as soon as it recognizes that it is clearly better in maximizing the reward (the target metric).  Throughout the process, higher performing treatments are allocated more traffic whereas underperforming treatments are allocated less traffic. When the winning treatment beats the second best treatment by enough margin, the process terminates.

## When to use Autotune

Unlike A/B testing (Statsig Experiments), the traffic split isn't fixed over the duration of the test.  Instead, Autotune diverts more traffic to the winner and making fewer mistakes.  This is ideal when there are 4+ variations as it usually can rule out the worst performers and focus traffic on the best variants.  The downside is that users users are not guaranteed a consistent experience upon return visits.

Statsig recommends using Autotune in any of the following scenarios:
1. The cost of exposing users to a losing treatment is high. For example, sending users to a landing page that is inferior may result in lost revenue. While this may be a one-time loss, testing two user registration flows may result in users that never sign up. In this case, Autotune avoids permanently losing users.  
2. You want the decision to be automated.  Because Autotune automatically selects the winner, it requires no human decision-making.  This is great for launching dozens of simultaneous tests, or for running a long-term unmonitored test.
3. When it's okay for users to be exposed to different experiences upon return visits.  For example, changing text or recommendation algorithm.
4. When you have one single and simple metric to optimize for (eg. click-through rate).

Autotune does not work well in the following scenarios:
1. When you have a complex ecosystem and want to understand secondary effects, tradeoffs between variants, and user behavior.
2. When you are optimizing for long-term or complex and indirect effects.

In the above cases, we recommend A/B testing.

## How to use Autotune

1. To create a new Autotune experiment, navigate to the Autotune section on the Statsig console: https://console.statsig.com/ 
2. Click the Create New button and enter the name and description of the Autotune experiment that you want to create. 
3. Enter the variants that you want to test in the Autotune experiment as shown below.

![image](https://user-images.githubusercontent.com/1315028/131385189-5f0c1d93-ba87-4159-8995-3c30991587a0.png)

4. Select the success metric that you want to optimize in the Autotune experiment as shown below.

![image](https://user-images.githubusercontent.com/1315028/131385239-5a76d253-022b-457e-a370-f9ee7ce566a1.png)

5. As the Autotune experiment runs, it automatically converges on the winning variant as shown below.

![image](https://user-images.githubusercontent.com/1315028/131384977-144dd868-787b-45ad-9ff1-fc9afbd4c769.png)
