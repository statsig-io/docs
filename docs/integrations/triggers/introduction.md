---
title: Introduction
slug: /triggers/introduction
---

### Overview
Triggers are a way to make changes to your Statsig project from a 3rd party source.
You can create a trigger with a specific function like "Disable a feature gate".
This will generate a URL that, when hit, will perform that function.

An example use case would be to create a trigger to disable a gate and hook it up to
a Datadog monitor so that if metric regression is detected, you can automatically 
turn off the feature.

### Trigger Types
Currently, the only supported type of triggers are gate triggers.
