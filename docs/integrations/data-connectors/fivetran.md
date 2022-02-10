---
title: Fivetran
---

## Overview

Enabling the Fivetran integration for Statsig will allow Statsig to push events to your Fivetran account through a webhook. This allows you to forward Statsig data to any connectors available from Fivetran.

## Configuring Outbound Events

1. Follow the steps in the [Fivetran Webhook Setup Guide](https://fivetran.com/docs/events/webhooks/setup-guide) to create a new Webhook URL.
2. On the Statsig [Integrations](https://console.statsig.com/integrations) page, enable the Fivetran integration by pasting in the Fivetran Webhook URL and click **Confirm**.

## Filtering Events

Once you've enabled outbound events to Fivetran, you can select which categories of Statsig events you want to export by click on the **Event Filtering** button and checking the appropriate boxes as shown below.

![image](https://user-images.githubusercontent.com/1315028/150854805-c70a1e01-5d3e-407f-9f2b-2eccafbe04a3.png)


![image](https://user-images.githubusercontent.com/1315028/150855038-fc6add6c-48ed-4063-8fdf-b210b43a3308.png)
