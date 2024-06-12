---
sidebar_label: Getting Started
title: Getting Started
---

# Statsig Platform Overview
Statsig has three core product lines- [**Feature Flags**](/feature-flags/working-with), [**Experiments**](/experiments-plus), and [**Analytics**](/product-analytics/overview)- all of which sit on top of our suite of SDKs, APIs, and integrations that enable you to (1) manage assignment, and (2) log or import events and exposures. 

Here’s how the Statsig ecosystem looks at the highest-level: 

<img src="/img/products_overview_light.png" alt="statsig product overview"/>

# Statsig Models 
There are two ways to leverage Statsig's core products: Statsig Cloud (we host your data) and Statsig Warehouse Native (you host your data in your warehouse). 

<img src="/img/statsig_banner_light.png" alt="statsig banner"/>

- **Statsig Cloud:** Set up ***Statsig SDK***, configure **events logging**. Everything else is handled by us.
    - You get feature flags and 1 million metered events for free, as well as many analytics tools such as Dashboard, Metrics Explorer, and Insights. Here is [a link](https://www.statsig.com/pricing) to our pricing details.
      
- **Warehouse Native:** If the events and metrics you want to experiment on are already in your warehouse and you have a data team, you may want to consider [Warehouse Native](https://docs.statsig.com/statsig-warehouse-native/introduction) (WHN).
    - With WHN, you can host Statsig’s Stats Engine within your own Data Warehouse, calculating metric lifts on your own pre-existing data sets.
    - You can use 3rd party or your own SDKs for feature assignment and provide us exposures in a table (you randomize), or use our SDKs (we randomize and write into your warehouse). The former helps you scale analysis; the latter helps you [10x experimentation velocity](https://www.statsig.com/blog/features-to-10x-experiment-velocity).
    - Today this option is only available with Enterprise contracts. Check [this link](https://docs.statsig.com/statsig-warehouse-native/introduction) for more details or [Schedule a demo](https://www.statsig.com/contact/demo) with our Sales team if you are interested in this option.
 

Once you know whether Statsig Cloud or Statsig Warehouse Native is a better fit for your organization, choose the “Getting Started” guide that best fits your first use-case for Statsig. Read more about choosing between the two models [here](https://statsig.com/blog/deciding-cloud-hosted-versus-warehouse-native-experimentation-platforms).

:::info
Have a question or need help getting set up? Our Eng, Data, and Product teams are ready to answer questions in our [Slack community](https://www.statsig.com/slack)
:::
