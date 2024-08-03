---
title: Analysis with different IDs
sidebar_label: Different IDs
slug: /metrics/different-ids
---

# Analysis when the unit of assignment and the unit of analysis are different

There are a few cases when your experiment assignment is different than the unit you want to analyze on, each with a different recommendation solution:

1. I want to measure session-level data in a user-level experiment → use ratio metrics
2. I want to expose on a logged-out ID and measure logged-in revenue -> ID resolution
3. I want to sum up all of a user's businesses' revenue as a user-level metric -> solve on my end by tagging the business revenue with a userid of the owner

For the first case, we have created a demo experiment to showcase how the ratio metrics should be defined. In the experiment: https://www.statsig.me/l/bmwpnhu9
- The unit of assignment is org_id
- Each org_id contains multiple user_ids
- We want to analyze revenue per user

In the Stats Engine, we apply the delta method to calculate variance and confidence intervals.

- For mean metrics, we store a value indicating the number of observations per **exposed** unit in the **records** column of the staging data. This serves as the denominator or cluster-size value for delta calculations.
- For general ratio metrics, we track the two component metrics (the ratio and the denominator) as independent metrics and combine them during the pulse analysis to derive a single metric from them.

For details on how we apply the delta method, visit: [Statsig - Delta Method Methodology](https://docs.statsig.com/stats-engine/methodologies/delta-method).

This logic also applies to analyzing event-level outcomes, such as average purchase value, where each session represents a leaf, but randomization occurs at the user level.
