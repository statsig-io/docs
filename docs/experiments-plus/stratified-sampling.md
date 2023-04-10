---
title: Stratified Sampling
sidebar_label: Stratified Sampling
slug: /experiments-plus/stratified-sampling
---

## What it is

Stratified sampling involves dividing the entire population into homogeneous groups called strata (plural for stratum). Random samples are then selected from each stratum. e.g. If you had  XS and XL customers and randomized them into two groups - Control and Test, you'd want both Control and Test to be balanced across XS and XL customers. 

With large numbers, good randomization typically solves this. However in B2B scenarios and other relatively low volume scenarios, stratified sampling is useful to ensure this balance. Statsig supports both automated (still in beta) and manual stratified sampling. 

### Automated Stratified Sampling
Reach out in [Slack](https://statsig.com/slack) if automated stratified sampling is of interest to you. Depending on your scenario we may have a beta for you. 

### Manual assignment for Stratified Sampling
When setting up an experiment, you can configure overrides (e.g. force user X or Segment A into Control, force user Y or Segment B into Test). This is  meant for testing; overriden users are excluded from experimental analysis in Pulse results. If you do want manual assignment for stratified sampling, you should check the _Include Overrides in Pulse_ checkbox. 

Users exposed to the experiment without an override will be randomized like they normally are. 
![image](https://user-images.githubusercontent.com/31516123/230964234-8cc81f66-f4f8-4f37-b6df-6d36d0d7ab98.png)

