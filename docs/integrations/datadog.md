---
title: Datadog
---

### Overview

There are two aspects to the datadog integration, forwarding event counts and change config changes. The goal of this integration is to allow monitoring of Statsig usage for billing purposes and alerts for config changes. 
We also offer a Datadog Trigger integration which you can read more about [here](https://docs.statsig.com/integrations/triggers/datadog)

### Connecting to Datadog

<ol>
  <li>
    To create a Datadog application key, navigate to{' '}
    <b>Organization Settings</b> &gt; <b>Application Keys</b>. If you have
    the permission to create application keys, click <b>New Key</b>.
  </li>

![Image](https://user-images.githubusercontent.com/26360698/232632837-d1e81380-78a3-48a2-887d-72b13d541b0a.png)

  <br />
  <li>
    Paste the API key in the text box at the top of the integration dialog, then hit
    &quot;Confirm&quot;.
  </li>
</ol>



If the above is out of date, refer to the [Datadog documentation](https://docs.datadoghq.com/account_management/api-app-keys/#add-application-keys) on how to setup API Keys

### Events

This integration will forward the <i>number</i> of Statsig SDK Events
reported to Datadog. This is meant for monitoring your project's Statsig
usage. This integration also has the option to allow non-production events
to be forwarded to Datadog.

<br />
Statsig events are mapped to Datadog metrics with listed tags as follows:

<ul>
  <li>
    statsig::gate_exposure -&gt; statsig.check_gate.count
    <ul>
      <li>environment</li>
      <li>name</li>
      <li>value</li>
    </ul>
  </li>
  <li>
    statsig::config_exposure -&gt; statsig.get_config.count
    <ul>
      <li>environment</li>
      <li>name</li>
    </ul>
  </li>
  <li>
    statsig::experiment_exposure -&gt; statsig.get_experiment.count
    <ul>
      <li>environment</li>
      <li>group</li>
      <li>name</li>
    </ul>
  </li>
  <li>
    statsig::layer_exposure -&gt; statsig.get_layer.count
    <ul>
      <li>environment</li>
      <li>name</li>
    </ul>
  </li>
  <li>
    statsig::holdout_exposure -&gt; statsig.get_holdout.count
    <ul>
      <li>environment</li>
      <li>name</li>
      <li>value</li>
    </ul>
  </li>
</ul>

#### Example of check_gate metric

![image](https://user-images.githubusercontent.com/26360698/232629870-e1776bd6-c63d-438d-863e-2d7a3a347eab.png)


### Config Changes

This integration will send Datadog Events of your choice when your
project&apos;s settings change. For instance, we will send an Event when
someone edits a Feature Gate.

These events can be found in the Datadog Events Explorer.

![image](https://user-images.githubusercontent.com/26360698/232636042-ee5cf1d0-e9e7-4158-903b-5a447ab14575.png)

