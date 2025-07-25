---
title: Metric Insights and Aggregated Impact
sidebar_label: Aggregated Impact
slug: /aggregated-impact
keywords:
  - owner:vm
last_update:
  date: 2025-04-04
---

Statsig's Insights page provides a clear view of how experiments and feature gates impact a specific metric of interest. It not only helps answer key questions such as "How much impact have I driven?", but also serves as a powerful tool for diagnosing unexpected changes in metrics.  

Insights presents a reverse perspective of the [Pulse](/pulse/read-pulse) view. While Pulse measures the impact of a new feature on all your metrics, Insights allows you to focus on a single metric and identify which tests are impacting it the most. This makes it particularly useful for assessing your or your team's impact, as well as setting realistic goals for your team or company.

## How to read Insights
1.	Navigate to the Insights section on the Statsig console: https://console.statsig.com/ . It is also available in the insight tab for each metric.
2.	Select a metric that you want to observe from the selector drop down at the top of the page. 
3.	Select the ID type, time window and other filters that you want to observe.
4.	Based on the filters you choose, you can see the relative impact, topline impact and projected launch impact for any experiment/gate which has this metric.
5.	We also sum up the projected launch impacts, adjust based on false positive risk ('winner's curse') and show as the 'Aggregated Impact Estimate'.

<img width="1003" alt="Screen Shot 2025-02-27 at 11 20 05 PM" src="https://github.com/user-attachments/assets/430563dc-4794-4d69-a314-36c76a6fcf74" />

## How the math works
Check how the topline and projected launch impact are calculated in this [doc](https://docs.statsig.com/stats-engine/topline-impact/#computing-projected-launch-impact).

To estimate false positive risk and calculate Aggregated Impact, we use the methodology in this [paper](https://dl.acm.org/doi/10.1145/3534678.3539160) which is widely adopted across the industry. Specifically:

$$
Aggregated Impact=\sum_{i}{(1 - FPR_i) \times Projected Launch Impact_i}
$$

Where the [projected launch impact](https://docs.statsig.com/stats-engine/topline-impact/) is an estimate of the topline impact assuming a decision is made and the test group is launched to all users; the false positive risk is calculated by the following formula:

$$
FPR_i = \frac{\alpha_i \times \pi}{\alpha_i \times \pi + (1 - \beta_i) \times (1 - \pi)}
$$

In this formula, $$\alpha_i$$ is the significance level for experiment i, $$\beta_i$$ is the power, and $$\pi$$ is the prior success rate based on historical experiment results.
