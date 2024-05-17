---
title: Stratified Sampling
sidebar_label: Stratified Sampling
slug: /experiments-plus/stratified-sampling
---

## What is Stratified Sampling

Stratified sampling involves dividing the entire population into homogeneous groups called strata (plural for stratum). Random samples are then selected from each stratum. e.g. If you had  XS and XL customers and randomized them into two groups - Control and Test, you'd want both Control and Test to be balanced across XS and XL customers. You can also stratify based on a metric like Revenue/User. 

With large numbers, randomization typically solves this. However in B2B scenarios and other relatively low volume or high variance scenarios, stratified sampling is useful to ensure this balance. Statsig supports both automated and manual stratified sampling. On tests where a tail-end of power users drive a large portion of an overall metric value, stratified sampling  meaningfully reduces false positive rates and makes your results more consistent and trustworthy. In our simulations, we saw around a 50% decrease in the variance of reported results.

## Automated Stratified Sampling

### How it works
The Statsig SDKs use a _salt_ to randomize or bucket experiment subjects ([learn more](https://docs.statsig.com/faq#how-does-bucketing-within-the-statsig-sdks-work)). When you enable stratified sampling, we'll try n different salts (100 for now) and evaluate how "balanced" your groups. We evaluate this balance based on either a metric you pick - or an attribute you give us describing your experiment subjects. We pick the best salt from this set and save this as the salt to use. [Learn more](https://statsig.com/blog/introducing-stratified-sampling).
![image](https://github.com/statsig-io/docs/assets/31516123/99f72b83-9f14-45a3-aa6e-ffcbd6211ec7)


### Enabling Stratified Sampling
You can enable this on experiment under Advanced Settings on the experiment setup page. There are two ways you can "stratify" on Statsig. 
If you choose a metric to stratify using, we'll use that to balance the group. 
![image](https://github.com/statsig-io/docs/assets/31516123/0cfc499d-4fdf-44a8-ba2a-3537ba5bb904)

If you instead choose an attribute or a classification (e.g. S, M, L, XL) we'll use that to balance the group. On Statsig Cloud you'll upload a CSV, on Statsig Warehouse Native, you'll use Entity Properties.
![image](https://github.com/statsig-io/docs/assets/31516123/102a839f-37fd-4443-807a-4b269f137490)

Once you press the Stratify button, we'll analyze a set of salts and pick the best one. 
![image](https://github.com/statsig-io/docs/assets/31516123/412f5c78-8c4f-4f16-88d3-60d3d3555ffd)


### Manual assignment for Stratified Sampling

When setting up an experiment, you can configure overrides (e.g. force user X or Segment A into Control, force user Y or Segment B into Test). This is  meant for testing; overridden users are excluded from experimental analysis in Pulse results. If you do want manual assignment for stratified sampling, you should check the _Include Overrides in Pulse_ checkbox. This will include the users you've manually overridden into each variant in all metric lift analyses. You can configure 100% of experiment participants into your test variants manually, or configure some subset of participants into variants manually and randomly assign the rest of your participants.

Note that while you can add overrides for an ID type that is different than the ID type of the experiment, those ID evaluations will not be resolved to the id type of the experiment and will not contribute to pulse results.

When you use the Statsig SDK for assignment, it takes care of randomization. When you control assignment of users, you're responsible for making sure users are balanced across experiment groups.   

![image](https://user-images.githubusercontent.com/31516123/230964234-8cc81f66-f4f8-4f37-b6df-6d36d0d7ab98.png)

