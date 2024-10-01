---
title: Interaction Detection
sidebar_label: Interaction Detection
slug: /experiments-plus/interaction-detection
---

## What is Interaction Detection
When you run overlapping experiments, it is possible for them to interfere with each other. Interaction Detection lets you pick two experiments and evaluate them for interaction. This helps you understand if  people exposed to both experiments behave very differently from people who're exposed to either one of the experiments.  

## Should I worry about it?
Our general guidance is to run overlapping experiments. People seeing your landing page should experience multiple experiments at the same time. [Our experience](https://www.statsig.com/blog/embracing-overlapping-a-b-tests-and-the-danger-of-isolating-experiments) is echoed by all avid experimenters ([link](https://www.microsoft.com/en-us/research/articles/a-b-interactions-a-call-to-relax/)). Teams expecting to run conflicting experiments are typically aware of this  and can avoid conflicts by making experiments mutually exclusive via [Layers](https://docs.statsig.com/layers) (also referred to as Universes).

## How to use it
Interaction Detection is available as a special custom query on an experiment. You can pick a second experiment to analyze (along with metrics) and we will show you a quick summary. 

![image](https://github.com/user-attachments/assets/ba64afe5-3c40-4c72-a2f1-dd36add6b05c)
