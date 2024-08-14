---
title: Exposures
sidebar_label: Exposures
slug: /feature-flags/view-exposures
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

## Gate Exposures

To see the number of users who are being exposed to a feature gate, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate that you want to test
- Click on the **Pulse Results** tab
- The **Cumulative Exposures** panel shows total exposures of a feature gate, broken down into three groups-
  1. Units that passed the feature gate, and were used for analysis
  2. Units that did not pass the feature gate, and were used for analysis vs. the "Pass" group
  3. Units that did not pass the feature gate, and were *not* used for analysis vs. the "Pass" group

<img width="1417" alt="Screen Shot 2024-02-19 at 2 36 22 PM" src="https://github.com/statsig-io/docs/assets/101903926/9b115b7b-026c-4364-aac9-24a2e0007b5d"/>

## Metric Lifts
The **Metrics Lifts** panel shows how your feature is performing based on lifts in any business metrics added to the list of **Monitoring Metrics** for your gate. 

After working with experimentation experts across the industry, we aligned on an equal variant comparison (i.e. 10% vs 10% in this example) for calculating metric lifts for gate rollouts. You can read more about the advantages of this methodology in ["A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled Experiments”](https://www.researchgate.net/publication/361226478_AB_Testing_Intuition_Busters_Common_Misunderstandings_in_Online_Controlled_Experiments) by Ron Kohavi, Alex Deng, & Lukas Vermeer. 

In the example below, the rises in *product view count* and *purchase event count* are statistically significant, suggesting this feature positively impacts the number of product views, but may actually be *negatively* impacting conversions to purchases itself. 

<img width="1420" alt="Screen Shot 2024-02-19 at 2 50 30 PM" src="https://github.com/statsig-io/docs/assets/101903926/01207199-5a5a-4505-a0af-7e6354b4590d"/>

## Bots & Filtering

:::important

Information on Bots & Filtering has been moved to its [own page](../feature-flags/bots.md)

:::

