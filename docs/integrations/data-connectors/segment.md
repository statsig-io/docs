---
title: Segment
---

## Overview

Enabling the Segment integration for Statsig will allow Statsig to pull in your Segment events. This allows you to run experimentation using Statsig with all of your pre-existing events without requiring any additional logging.

## Configuration

1. Follow the steps in the [Segment Webhook documentation](https://segment.com/docs/connections/destinations/catalog/webhooks/) to create a Webhook for Statsig.

2. In the Segment Webhooks settings, provide https://api.statsig.com/v1/webhooks/segment_webhook as the Webhook URL. Additionally add a Header with key statsig-api-key and input your Statsig Server Secret

![img](https://console.statsig.com/img/integrations/segment_integration_steps/in1.png)

3. Click on Save in Segment and your Segment events will be automatically sent to Statsig

4. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the Segment integration.