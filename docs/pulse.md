---
title: Pulse
sidebar_label: Pulse
slug: /pulse
---

# Pulse

Pulse measures the impact of a new functionality rolled out using a feature gate. Connecting new functionality to its impact on your customers and business is a powerful mechanism to understand customer behavior. Pulse automatically surfaces this impact on the Statsig console with no additional effort from you. 

## How to read Pulse
As the new functionality is exposed to new customers, Pulse uncovers how each of your metrics shift and if this shift is statistically significant. In the example below, Pulse is showing the impact of promotional campaign on an ecommerce website. The campaign has improved conversion rate for the shopping cart but also reduces daily active users (DAU) and product views. In this case, we may find that adding an item to the cart takes you to the checkout instead of browsing more products. Pulse highlights these trade-offs to ensure that you can make better decisions in shipping new functionality to more users.

![image](https://user-images.githubusercontent.com/1315028/131383108-4fca1a3e-8adb-4f5e-9adb-081c891ef15f.png)

To get your hands on Pulse, see the Statsig demo at www.statsig.com/demo. 

## Terms
Hovering over a metric in Pulse renders a tool tip with key statistics for the control and treatment groups as shown and listed below.

![image](https://user-images.githubusercontent.com/1315028/131383593-384225bc-abbd-483f-a45a-3280d8bf5941.png)

 - **Mean**: Average of the metric over the observed distribution 
 - **Std**: Standard deviation of this metric
 - **Abs Delta**: Absolute difference of the Mean between test groups i.e. Pass Mean - Fail Mean
 - **Delta %**: Relative difference of the Mean i.e. (Pass mean – Fail mean) / Fail mean - 100%
 - **P-Value**: The p-value is the (two-sided) probability of achieving the observed (or more extreme) difference assuming that there is no difference between the test groups (or the new feature has no impact). A low p-value means that this assumption that there’s no difference is incorrect.  


