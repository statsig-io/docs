---
title: Common Terms
sidebar_label: Common Terms
slug: /experiments-plus/experimentation/common-terms
---

- A **Control Variable** is an experimental variable that is thought to influence the key metrics of interest. In simple A/B experiments, a single control variable is assigned two values. It is more common to assign multiple values such as A,B,C, or D to a single control variable. Multivariate experiments evaluate multiple control variables that allow experimenters to discover a global optimum when multiple variables interact. 
- A **Variant** is a product or feature experience being tested, often by assigning values to control variables. In a simple A/B experiments, A and B are two variants, usually called Control and Treatment.  
- A **Randomization Unit** is the most granular unit that can participate in an experiment. Each eligible unit is randomly assigned to a variant, allowing causality to be determined with high probability. It is very common to use users as a randomization unit and Statsig highly recommends using users for running controlled experiments. 
- **Statistical Significance** can be assessed using multiple approaches. Two of these approaches are using the p-value and the confidence interval: 
  - The **p-value** measures the probability of the metric lift you observe (or a more extreme lift) assuming that the variant you’re testing has no effect. The scientific standard is to use a p-value less than 0.05 to identify variants that have a statistically significant effect. A p-value less than 0.05 implies that there’s less than 5% chance of seeing the observed metric lift (or a more extreme metric lift) if the variant had no effect. Lower the p-value, higher the statistically significance of the observation. 
  - A **confidence interval** examines whether the metric difference between the variant and control overlaps with zero. A 95% confidence interval is the range that covers the true difference 95% of the time. It is usually centered around the observed delta between the variant and control with an extension of 1.96 standard errors on each side.  

