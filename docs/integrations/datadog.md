---
title: Datadog
keywords:
  - owner:brock
last_update:
  date: 2025-07-23
---

### Overview

There are four key use-cases to the Datadog integration:
1. [Config Changes](https://docs.statsig.com/integrations/datadog/#config-changes) - Streaming changes made in Statsig into Datadog, so you can see what feature was turned on that may have caused a CPU usage spike or some other degradation of performance (most widely-used integration).
2. [Event Forwarding](https://docs.statsig.com/integrations/datadog/#events) - Statsig will forward event-count totals to DataDog, purely for the purpose of monitoring your Statsig usage volumes. 
3. [Datadog RUM integration](https://docs.statsig.com/integrations/datadog/#Datadog-RUM-integration) - This allows you to enrich DataDog RUM data with flag/experiment assignment info, allowing customer to correlate product feature changes with their impact on system/performance metrics.
4. [DataDog triggers](https://docs.statsig.com/integrations/triggers/datadog) - When an alarm goes off in DataDog, it kills a Statsig feature gate.

forwarding event counts and change config changes. The goal of this integration is to allow monitoring of Statsig usage for billing purposes and alerts for config changes.
We also offer a [Datadog trigger](/integrations/triggers/datadog) integration.

### Connecting to Datadog

1. To create a Datadog API key, navigate to **Organization Settings** > **API Keys**. If you have the permission to create API keys, click **New Key**.

![Image](https://user-images.githubusercontent.com/26360698/232632837-d1e81380-78a3-48a2-887d-72b13d541b0a.png)

2. Paste the API key in the text box at the top of the integration dialog, then hit "Confirm".

If the above is out of date, refer to the [Datadog documentation](https://docs.datadoghq.com/account_management/api-app-keys/#add-an-api-key-or-client-token) on how to setup API Keys

### Event Totals Forwarding

This integration will forward the <i>number</i> of Statsig SDK Events
reported to Datadog. This is meant for monitoring your project's Statsig
usage. This integration also has the option to allow non-production events
to be forwarded to Datadog.

Statsig events are mapped to Datadog metrics with listed tags as follows:

- statsig::gate_exposure -> statsig.check_gate.count

  - environment
  - name
  - value

- statsig::config_exposure -> statsig.get_config.count

  - environment

- statsig::experiment_exposure -> statsig.get_experiment.count

  - environment
  - group
  - name

- statsig::layer_exposure -> statsig.get_layer.count

  - environment
  - name

- statsig::holdout_exposure -> statsig.get_holdout.count
  - environment
  - name
  - value

#### Example of check_gate metric

![image](https://user-images.githubusercontent.com/26360698/232629870-e1776bd6-c63d-438d-863e-2d7a3a347eab.png)

### Datadog RUM integration
This integration requires a client-side setup as outlined [here in DataDog documentation](https://docs.datadoghq.com/integrations/statsig-rum/). 

### Config Changes

This integration will send Datadog Events of your choice when your
project&apos;s settings change. For instance, we will send an Event when
someone edits a Feature Gate.

These events can be found in the Datadog Events Explorer.

![image](https://user-images.githubusercontent.com/26360698/232636042-ee5cf1d0-e9e7-4158-903b-5a447ab14575.png)
