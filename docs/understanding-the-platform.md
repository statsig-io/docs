---
sidebar_label: Getting Started
title: Getting Started
---

Statsig offers two flexible ways to leverage its core products based on your needs: Statsig Cloud (where we host your data) and Statsig Warehouse Native (where you host your data in your own warehouse).

---

## Statsig Cloud

With Statsig Cloud, setting up is simple. Install the Statsig SDK and configure event logging—we handle everything else.

- You get feature flags and 1 million metered events for free.
- Enjoy powerful analytics tools such as the Dashboard, Metrics Explorer, and Insights.
- For more details on the pricing, check [our pricing page](https://www.statsig.com/pricing).

Statsig Cloud is a great choice for those who want to get started quickly without needing to manage infrastructure or data warehousing.

---

## Statsig Warehouse Native (WHN)

If your events and metrics already reside in your own data warehouse and you have a dedicated data team, Statsig Warehouse Native (WHN) may be a better option.

- WHN allows you to host Statsig’s Stats Engine within your warehouse, enabling you to calculate metric lifts on your pre-existing datasets.
- You can choose between two methods:
    1. **Using 3rd party or your own SDKs**: You handle feature assignment and provide us exposure data (you randomize the users).
    2. **Using Statsig SDKs**: We handle randomization and write data into your warehouse for you.

The first method helps you scale analysis, while the second can 10x your experimentation velocity.

> Note: WHN is available only with Enterprise contracts. If you’re interested in this option, check [this link](/statsig-warehouse-native/introduction) or [schedule a demo](https://www.statsig.com/contact/demo) with our Sales team.
> 

---

## Which Model is Right for You?

Below is a summary of key criteria to consider when making your decision between the two modes of deployment:

| Criteria | Cloud-hosted | Warehouse native (WHN) |
| --- | --- | --- |
| Data Source | Primary source of metrics come from Statsig SDKs or CDPs like Segment. Some metrics can still come from a warehouse. | Warehouse is the primary source of metrics, making WHN ideal when wanting to reuse existing data pipelines and computation. |
| Analysis needs | Automated experimentation for every experiment and product launch, especially with metrics derived from event logging. | Flexible analysis on top of your existing source of truth metric data. |
| Data team involvement | Involvement is optional but recommended for experiment design and readouts. | Necessary for setting up the warehouse connection and configuring core metrics, but not mandatory for every experiment. |
| Costs | TCO is slightly lower. No warehouse costs involved. | TCO includes Statsig license + costs incurred for computation and storage in your warehouse. |
| Modularity | An integrated end-to-end platform that spans SDKs for feature rollout, experiment execution, analysis, and experiment readouts. | Modular: You can opt for the integrated end-to-end platform or choose to use only a subset of capabilities, such as assignment or experiment analysis. |

Still unsure! Read this blog post for further information: [Statsig Cloud vs Warehouse Native](https://www.statsig.com/blog/deciding-cloud-hosted-versus-warehouse-native-experimentation-platforms).

## Next steps
Once you've decided whether Statsig Cloud or Statsig Warehouse Native fits your organization’s needs, choose the appropriate *getting started* guide for your first use case:

- [Getting Started with Statsig Cloud](/sdks/getting-started)
- [Getting Started with Statsig Warehouse Native](/statsig-warehouse-native/guides/quick-start)

:::info
Have a question or need help getting set up? Our Engineering, Data, and Product teams are ready to answer questions in our [Slack community](https://www.statsig.com/slack).
:::
