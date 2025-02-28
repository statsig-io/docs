---
title: Aggregated Impact Estimate
sidebar_label: Aggregated Impact Estimate
slug: /aggregated-impact
---
The aggregated impact estimate is a powerful tool to understand the overall impacts from multiple experiments on a given metric.

## When it is useful
There are two typical use cases for this feature:
- When you want to understand how much impact you or your team have made. This feature will answer questions like "how much revenue increase my team has driven in the past quarter".
- When you want to set a reasonable goal for your team/company. this feature will answer questions like "what should be the goal for my team for next quarter?" by looking at historical impacts that previous experiments have driven.

## Where it can be found
The aggregated impact estimate can be found in [meta-analysis](https://docs.statsig.com/experimentation/meta-analysis), as well as in the insight tab for each metric.

<img width="1003" alt="Screen Shot 2025-02-27 at 11 20 05 PM" src="https://github.com/user-attachments/assets/430563dc-4794-4d69-a314-36c76a6fcf74" />

## How the math works
We sum up projected launch impact and adjust it based on false positive risk ("winner's curse"). To estimate false positive risk, we use the methodology in this [paper](https://dl.acm.org/doi/10.1145/3534678.3539160) which is widely adopted across the industry. Specifically:

$$
Aggregated Impact=\sum_{i}{(1 - FPR_i) \times Projected Launch Impact_i}
$$

Where the [projected launch impact](https://docs.statsig.com/stats-engine/topline-impact/) is an estimate of the topline impact assuming a decision is made and the test group is launched to all users; the false positive risk is calculated by the following formula:

$$
FPR_i = \frac{\alpha_i \times \pi}{\alpha_i \times \pi + (1 - \beta_i) \times (1 - \pi)}
$$

In this formula, $$\alpha_i$$ is the significance level for experiment i, $$\beta_i$$ is the power, and $$\pi$$ is the prior success rate based on historical experiment results.
