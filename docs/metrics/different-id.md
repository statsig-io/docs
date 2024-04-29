---
title: Analysis with different IDs
sidebar_label: Different ID
slug: /metrics/different-id
---

# Analysis When the Unit of Assignment and the Unit of Analysis Are Different

There are two common cases where the experiment assignment unit differs from the analysis unit. Each scenario requires a different solution:
1. To measure session-level data in a user-level experiment, use ratio metrics (this doc).
2. To expose a logged-out ID and measure logged-in revenue, use [ID resolution](https://docs.statsig.com/statsig-warehouse-native/features/id-resolution).


## Example
For the first scenario, we will use a demo to explain, suppose: 
- Your metrics source has both user_id and org_id. The relationship between org_id and user_id is 1-to-many. Namely, one org contains several users, but a user cannot be associated with multiple org_ids.
- Your experiment is assigned at the org_id level.
- You are interested in understanding user_id level impact, such as revenue per user, across the treatment group and the control group.


First, you should set the metric source with org_id as an ID type. In this table, each row of data should have both org_id and user_id.
![Screenshot 2024-04-29 at 2 45 19 PM](https://github.com/statsig-io/docs/assets/139815787/30b454ad-9227-4407-a2dc-d574d1b8a055)


Second, choose your assignment source, where the unit of assignment is org_id.
![2 assignment source](https://github.com/statsig-io/docs/assets/139815787/82edd221-990a-47ed-89f6-9d0668372fe8)


Then, define your metric of revenue per user_id. Note that your denominator should be `count distinct user_id` instead of `unit count`, because the latter is equivalent to `count distinct org_id` in an org_id level experiment.

Correct definition
![3a right](https://github.com/statsig-io/docs/assets/139815787/ca4c9076-28e1-4cf8-8aa1-2127def7d771)

Wrong definition
![3b wrong](https://github.com/statsig-io/docs/assets/139815787/7d81e5f7-20b0-440c-a4d8-1281f93c1ece)


Finally, set up the experiment with org_id
![4 experiment](https://github.com/statsig-io/docs/assets/139815787/02f9c6bb-0b32-4caf-a529-5bacc2a56d44)


## Statistics in the backend
In the Stats Engine, we utilize the delta method to calculate variance and confidence intervals.
- For mean metrics, we record a value indicating the number of observations per exposed unit in the records column of the staging data. This acts as the denominator or cluster-size value for delta calculations.
- For general ratio metrics, we monitor the two-component metrics (the ratio and the denominator) as independent metrics and combine them during the pulse analysis to derive a single metric from them.

For more information on how we apply the delta method, visit: [Statsig - Delta Method Methodology.](https://docs.statsig.com/stats-engine/methodologies/delta-method). The reason we choose to use the delta method is to account for the covariance between the numerator and the denominator (i.e. more users per org is correlated with more revenue). See section 3 of [this paper](https://alexdeng.github.io/public/files/kdd2018-dm.pdf) for details. 

This approach is also relevant for analyzing event-level outcomes, such as average purchase value, where randomization occurs at the user level, and each user may experience multiple session events.
