---
title: RevenueCat
---

## Overview

Enabling the RevenueCat integration for Statsig will allow Statsig to pull billing, subscription, and revenue metrics into your Statsig projects. This provides easy mechanisms to optimize purchases and revenue by using Statsig's feature gates or experimentation tools without any additional logging.

Statsig integrates with RevenueCat through a Webhook and receives data as mentioned [in the RevenueCat documentation](https://docs.revenuecat.com/docs/webhooks)

## Configuration

1. Navigate to the Webhooks tab in your [RevenueCat dashboard](https://app.revenuecat.com/overview)

   ![img](https://console.statsig.com/img/integrations/revenue_cat_integration_steps/dashboard.png)

2. Provide `https://api.statsig.com/v1/webhooks/revenuecat_webhook` as the WebhookURL.

   ![img](https://console.statsig.com/img/integrations/revenue_cat_integration_steps/webhook.png)

3. Provide `Bearer {'{statsig-server-secret}'}` as the Authorization header value, where statsig-server secret is replaced, with the Statsig Server Secret for your Project.

   ![img](https://console.statsig.com/img/integrations/revenue_cat_integration_steps/authorization.png)

4. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the RevenueCat integration.

## Matching RevenueCat Users with Statsig Users

In order to associate RevenueCat data with your Statsig experiments, you must ensure that the RevenueCat `App User ID` matches the Statsig `User ID` provided when checking a Statsig feature gate or experiment. You can set up `App User ID` in RevenueCat by following the instructions [here](https://docs.revenuecat.com/docs/user-ids#provided-app-user-id)
