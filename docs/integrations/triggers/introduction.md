---
title: Introduction
slug: /triggers/introduction
---

### Overview
Triggers are a way to make changes to your Statsig project from a 3rd party source.
You can create a trigger with a specific action like "Disable a feature gate".
This will generate a URL that will perform that action when hit.

An example use case would be to create a trigger that disables a gate and hook it up to
a Datadog monitor so that if metric regression is detected, you can automatically 
turn off the feature.

### Trigger Types
Currently, the only supported type of triggers are gate triggers.
