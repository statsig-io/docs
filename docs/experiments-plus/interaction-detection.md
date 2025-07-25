---
title: Interaction Detection
sidebar_label: Interaction Detection
slug: /experiments-plus/interaction-detection
keywords:
  - owner:vm
last_update:
  date: 2025-03-21
---


## What is Interaction Detection

When you run overlapping experiments, it is possible for them to interfere with each other. Interaction Detection lets you pick two experiments and evaluate them for interaction. This helps you understand if people exposed to both experiments behave very differently from people who're exposed to either one of the experiments.

## Should I worry about it?

Our general guidance is to run overlapping experiments. People seeing your landing page should experience multiple experiments at the same time. [Our experience](https://www.statsig.com/blog/embracing-overlapping-a-b-tests-and-the-danger-of-isolating-experiments) is echoed by all avid experimenters ([link](https://www.microsoft.com/en-us/research/articles/a-b-interactions-a-call-to-relax/)). Teams expecting to run conflicting experiments are typically aware of this and can avoid conflicts by making experiments mutually exclusive via [Layers](/layers) (also referred to as Universes).

## How to use it

You can initiate an Interaction Detection analysis as a special type of custom query on top of an Experiment (Experiment ->  Results -> Explore -> Interaction Effect Detection)

![image](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/jZMgd0DwQQ1ecgiZmsNS/b49e62b2-ba95-4db3-8d5a-3ce3f08b620d.png)

 You can pick a second experiment to analyze (along with metrics) and we will show you a quick summary.

In each section:

- By Groups: gives you the unit counts based on the collective slice of group assignment
- Metric Summary Results: shows you the estimated intervals of difference in metric lift
- Overlapping Unique Users: offers an overview of the general traffic intersection of the two experiments

![image](https://github.com/user-attachments/assets/ebbb4383-8abe-4b9b-9132-fb543e6b33ac)

See more examples in this [article](https://www.statsig.com/blog/interaction-effect-detection).

## Methodology

$$
\LARGE
\Delta_{\text{treatment effect}} = (\overline{X_{test \cdot test}} - \overline{X_{test \cdot control}}) - (\overline{X_{control \cdot test}} - \overline{X_{control \cdot control}})
$$

$$
\LARGE
\Delta_{\text{treatment effect}}{\%} = \frac{\Delta_{\text{treatment effect}}}{(\overline{X_{control \cdot test}} - \overline{X_{control \cdot control}})}
$$

$$
\LARGE
variance = \frac{Var(X_{test \cdot test})}{n_{test \cdot test}} + \frac{Var(X_{test \cdot control})}{n_{test \cdot control}} + \frac{Var(X_{control \cdot test})}{n_{control \cdot test}} + \frac{Var(X_{control \cdot control})}{n_{control \cdot control}}
$$
