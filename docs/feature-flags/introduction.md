---
title: Feature flags
sidebar_label: Introduction
slug: /feature-flags
---

# What is a feature flag (feature gate)?

A feature flag is a mechanism for teams to configure what system behavior is visible to users without changing application code. You might also hear them called flippers, toggles, or (at Statsig), gates.

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
In the Statsig UI and SDKs, we refer to what most customers know as "feature flags" as "features gates", as they act as a "gatekeeper" to new features. 

:::


## When to use feature flags

Feature flags are commonly used as on/off switches to turn a certain system behavior on or off in production. Teams often use feature flags to turn on certain features or behavior for a small percentage of the total user base. Teams may do this to gradually ramp up a software release across their user base to limit the impact of any unanticipated system behavior, or to enable a restricted behavior only for a specific set of users.

To get started, see the Statsig guides to:

- [Build your first feature gate](/guides/first-feature)
- [Analyze your first A/B test](/guides/abn-tests)
- [Log events to create custom metrics](/guides/logging-events)
- [Use environments](/guides/using-environments)

To learn about all that you can do with feature gates, see the Statsig tutorial to [working with feature gates](/feature-flags/working-with).
