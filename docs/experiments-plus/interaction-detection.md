---
title: Interaction Detection
sidebar_label: Interaction Detection
slug: /experiments-plus/interaction-detection
---

## What is Interaction Detection

When you run overlapping experiments, it is possible for them to interfere with each other. Interaction Detection lets you pick two experiments and evaluate them for interaction. This helps you understand if people exposed to both experiments behave very differently from people who're exposed to either one of the experiments.

## Should I worry about it?

Our general guidance is to run overlapping experiments. People seeing your landing page should experience multiple experiments at the same time. [Our experience](https://www.statsig.com/blog/embracing-overlapping-a-b-tests-and-the-danger-of-isolating-experiments) is echoed by all avid experimenters ([link](https://www.microsoft.com/en-us/research/articles/a-b-interactions-a-call-to-relax/)). Teams expecting to run conflicting experiments are typically aware of this and can avoid conflicts by making experiments mutually exclusive via [Layers](/layers) (also referred to as Universes).

## How to use it

You can find it from Experiment -> Pulse Results -> Explore -> Interaction Effect Detection

![image](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/jZMgd0DwQQ1ecgiZmsNS/b49e62b2-ba95-4db3-8d5a-3ce3f08b620d.png)

Interaction Detection is available as a special custom query on an experiment. You can pick a second experiment to analyze (along with metrics) and we will show you a quick summary.

![image](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/jZMgd0DwQQ1ecgiZmsNS/dd24b23b-d562-4a4e-9b0a-6443b083f24a.png)

## Methodology

$$
\delta_{treatment effect} = (\overline{X_{test \cdot test}} - \overline{X_{test \cdot control}}) - (\overline{X_{control \cdot test}} - \overline{X_{control \cdot control}})
$$

$$
\delta_{treatment effect}{\%} = \frac{\delta_{treatment effect}}{(\overline{X_{control \cdot test}} - \overline{X_{control \cdot control}})}
$$

$$
variance = \frac{Var(X_{test \cdot test})}{n_{test \cdot test}} + \frac{Var(X_{test \cdot control})}{n_{test \cdot control}} + \frac{Var(X_{control \cdot test})}{n_{control \cdot test}} + \frac{Var(X_{control \cdot control})}{n_{control \cdot control}}
$$
