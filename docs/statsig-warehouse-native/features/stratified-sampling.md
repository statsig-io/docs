---
title: Stratified Sampling
slug: /statsig-warehouse-native/features/stratified-sampling
sidebar_label: Stratified Sampling
description: avoid pre-existing differences between groups in your experiments 
---

This feature allows you to avoid pre-existing differences between groups in your experiments. You can balance the distribution of subjects using either a metric (e.g. Purchases Made/User) or using a arbitrary attributes (e.g. your own S/M/L/XL classifications for Companies).

We commonly trust random sampling. The Law of Large Numbers ensures that a sufficiently-sized sample will be representative of the entire population. However, in some cases, this may not be true, such as 
- When the sample size is small
- When the samples are heterogeneous
For instance, imagine being at a 5-star restaurant in Bellevue, WA, and deciding to sample 50 individuals to measure the average net worth of restaurant diners. If you happen to draw Bill Gates or Jeff Bezos, your numbers will inevitably be skewed.
In A/B testing this often shows up in B2B experimentation. First, a successful B2B business may only have hundreds, if not thousands of customers. Second, your customer base may range from Fortune 500 companies like Microsoft and Home Depot, to family-owned coffee and donut shops. Randomly assigning customers in an A/B test runs the risk of having Microsoft and Home Depot in the test group, vs a couple of donut shops in the control group.

For B2B tests, or tests where a tail-end of power users drive a large portion of an overall metric value, this feature meaningfully reduces false positive rates and makes your results more consistent and trustworthy. In our simulations, we saw around a 50% decrease in the variance of reported results.

## How it works
The Statsig SDKs use a _salt_ to randomize or bucket experiment subjects ([learn more](https://docs.statsig.com/faq#how-does-bucketing-within-the-statsig-sdks-work)). When you enable stratified sampling, we'll try n different salts (100 for now) and evaluate how "balanced" your groups. We evaluate this balance based on either a metric you pick - or an attribute you give us describing your experiment subjects. We pick the best salt from this set and save this as the salt to use. 

## Enabling Stratified Sampling
You can enable this on experiment under Advanced Settings on the experiment setup page. There are two ways you can "stratify" on Statsig. 
If you choose a metric to stratify using, we'll use that to balance the group. 
![image](https://github.com/statsig-io/docs/assets/31516123/0cfc499d-4fdf-44a8-ba2a-3537ba5bb904)

If you instead choose an attribute (using Entity Properties), we'll use that to balance the group.
![image](https://github.com/statsig-io/docs/assets/31516123/102a839f-37fd-4443-807a-4b269f137490)

Once you press the Stratify button, we'll analyze a set of salts and pick the best one. 
![image](https://github.com/statsig-io/docs/assets/31516123/412f5c78-8c4f-4f16-88d3-60d3d3555ffd)
