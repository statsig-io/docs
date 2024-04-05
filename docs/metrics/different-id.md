---
title: Analysis with different IDs
sidebar_label: Different ID
slug: /metrics/different-id
---

# Analysis When the Unit of Assignment and the Unit of Analysis Are Different

There are several cases where the experiment assignment unit differs from the unit you wish to analyze. Each scenario requires a distinct resolution approach:
1. To measure session-level data in a user-level experiment, use ratio metrics.
2. To expose on a logged-out ID and measure logged-in revenue, use ID resolution.
3. To aggregate all a user's businesses' revenue as a user-level metric, address this by tagging the business revenue with the user ID of the owner.
 
For the first scenario, we have this demo experiment to illustrate how ratio metrics should be defined. In [the experiment](https://www.statsig.me/l/bmwpnhu9):
- The [unit of assignment is the org_id](https://console.statsig.com/3dElKM5STY5EC8SG2zjhK4/assignment_sources/aqILGOV81t4BS9PLYaJFM).
- [Each org_id is associated with multiple user_ids](https://console.statsig.com/3dElKM5STY5EC8SG2zjhK4/metrics/metric_sources/265jYDifYZMVcVAVQIbm56).
- We want to analyze the impact of this org_id experiment on the revenue per user metric.
- The [Revenue per unit](https://console.statsig.com/3dElKM5STY5EC8SG2zjhK4/metrics/metrics_catalog/Revenue%20per%20unit/user_warehouse/setup) metric shows the wrong way of defining this ratio metric, because the denominator is the org_id, following the setup of the experiment
- The ["Revenue_over_num_user_id"](https://console.statsig.com/3dElKM5STY5EC8SG2zjhK4/metrics/metrics_catalog/Revenue_over_users/user_warehouse/setup) metric shows the right way of defining this ratio metric.
You can check the assignment source, the metric definition, and the metric source for more understanding.
  
In the Stats Engine, we utilize the delta method to calculate variance and confidence intervals.
- For mean metrics, we record a value indicating the number of observations per exposed unit in the records column of the staging data. This acts as the denominator or cluster-size value for delta calculations.
- For general ratio metrics, we monitor the two component metrics (the ratio and the denominator) as independent metrics and combine them during the pulse analysis to derive a single metric from them.

For more information on how we apply the delta method, visit: [Statsig - Delta Method Methodology.](https://docs.statsig.com/stats-engine/methodologies/delta-method). The reason we choose to use the delta method is to account for the covariance between the numerator and the denominator (i.e. more users per org is correlated with more revenue)

This approach is also relevant for analyzing event-level outcomes, such as average purchase value, where randomization occurs at the user level, and each user may experience multiple session events.
