---
title: mParticle
---

## Overview

Enabling the [mParticle](https://www.mparticle.com/) integration for Statsig allows Statsig to receive events from mParticle.

You can find all events that Statsig receives from mParticle in the [Metrics](/metrics) tab in the Statsig console. Statsig will automatically include these events in [Pulse](/pulse) and [Experiment](/experiments-plus/monitor) results for your feature gates and experiments respectively.

## Configuring Incoming Events

1. From the [API Keys](https://console.statsig.com/api_keys) tab in the Statsig console, copy the Statsig `Server Secret Key`.
2. Use your Statsig `Server Secret Key` to configure a Statsig Event Integration via mParticle's integrations directory.

### Mapping User IDs

In order to associate your mParticle events with your Statsig Feature Gates or Experiments, you must use mParticle's [IDSync framework](https://docs.mparticle.com/guides/idsync/introduction/) to ensure your mParticle events pass along the same user IDs used with the Statsig SDK.
