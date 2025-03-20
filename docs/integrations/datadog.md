---
title: Datadog
keywords:
  - owner:brock
---

### Overview

There are two aspects to the Datadog integration, forwarding event counts and change config changes. The goal of this integration is to allow monitoring of Statsig usage for billing purposes and alerts for config changes.
We also offer a [Datadog trigger](/integrations/triggers/datadog) integration.

### Connecting to Datadog

1. To create a Datadog API key, navigate to **Organization Settings** > **API Keys**. If you have the permission to create API keys, click **New Key**.

![Image](https://user-images.githubusercontent.com/26360698/232632837-d1e81380-78a3-48a2-887d-72b13d541b0a.png)

2. Paste the API key in the text box at the top of the integration dialog, then hit "Confirm".

If the above is out of date, refer to the [Datadog documentation](https://docs.datadoghq.com/account_management/api-app-keys/#add-an-api-key-or-client-token) on how to setup API Keys

### Events

This integration will forward the <i>number</i> of Statsig SDK Events
reported to Datadog. This is meant for monitoring your project's Statsig
usage. This integration also has the option to allow non-production events
to be forwarded to Datadog.

<br />
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

### Config Changes

This integration will send Datadog Events of your choice when your
project&apos;s settings change. For instance, we will send an Event when
someone edits a Feature Gate.

These events can be found in the Datadog Events Explorer.

![image](https://user-images.githubusercontent.com/26360698/232636042-ee5cf1d0-e9e7-4158-903b-5a447ab14575.png)
