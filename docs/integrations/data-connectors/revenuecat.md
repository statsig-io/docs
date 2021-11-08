---
title: RevenueCat
---

## Overview

Enabling the RevenueCat integration for Statsig will allow Statsig to pull billing, subscription, and revenue metrics into your Statsig projects. This provides easy mechanisms to optimize purchases and revenue by using Statsig's feature gates or experimentation tools without any additional logging.

Statsig integrates with RevenueCat through a Webhook and receives data as mentioned [in the RevenueCat documentation](https://docs.revenuecat.com/docs/webhooks)

## Configuration

1. Navigate to your app in the RevenueCat dashboard and choose `Statsig` from the integrations menu

2. Provde your `statsig-server-secret` and select `Save`
   ![img](https://files.readme.io/f8b5f66-Screen_Shot_2021-11-05_at_9.20.40_AM.png)

3. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the RevenueCat integration.

## Matching RevenueCat Users with Statsig Users

In order to associate RevenueCat data with your Statsig experiments, you must ensure that the RevenueCat `App User ID` matches the Statsig `User ID` provided when checking a Statsig feature gate or experiment. You can set up `App User ID` in RevenueCat by following the instructions [here](https://docs.revenuecat.com/docs/user-ids#provided-app-user-id)

## Sandbox Events

By default, [Sandbox events](https://docs.revenuecat.com/docs/webhooks#testing) will not be ingested into Statsig to reduce noise from test events sent from RevenueCat. However, ingesting `Sandbox events` into Statsig can be enabled in the RevenueCat configuration on the Statsig [Integration page](https://console.statsig.com/integrations) for debugging purposes.
