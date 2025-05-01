---
title: Feature flags (feature gates) - what are they?
sidebar_label: Overview
slug: /feature-flags/working-with
keywords:
  - owner:shubham
last_update:
  date: 2025-01-15
---

A feature flag is a mechanism for teams to configure what system behavior is visible to users without changing application code. You might also hear them called flippers, toggles, or (at Statsig), gates.

:::note

In the Statsig UI and SDKs, we refer to what most customers know as _feature flags_ as _feature gates_, as they act as a "gatekeeper" to new features. Outside of this intro, we'll refer to them as "gates".

:::

## When to use feature flags

Feature flags are commonly used as on/off switches to turn a certain system behavior on or off in production. Teams often use feature flags to turn on certain features or behavior for a small percentage of the total user base. Teams may do this to gradually ramp up a software release across their user base to limit the impact of any unanticipated system behavior, or to enable a restricted behavior only for a specific set of users.

Statsig offers several built-in capabilities with feature flags:

- A feature flag can be a simple _kill switch_ that you can use to turn off a particular code branch for all your users
- You can use a feature flag to target newly coded system behavior to a specific set of users to implement _whitelisting_
- You can create user targeting _rules_ based on Statsig-derived _environment attributes_ such as location, client device, browser type, and client app version
- You can create user targeting _rules_ based on _user attributes_ such as email and user ID that you provide
- Each feature flag offers built-in _A/B testing_ with no additional effort so you can automatically see how your feature is performing in production compared to the default or control
- A feature flag may depend on other _targeting gates_ that control when it’s active; for example, you can create a feature flag as a top level kill switch that activates child feature flag that depend on it

The following tutorials show how you can perform common tasks with feature gates.

- [Create a feature flag](/feature-flags/create-new)
- [Create a rules for a feature flag](/feature-flags/add-rule)
- [Use a language-specific Statsig SDK to implement a feature gate in your application](/sdks/getting-started)
- [Test a feature flag](/feature-flags/test-gate)
- [Override a feature flag](/feature-flags/overrides)
- [View feature flag exposures](/feature-flags/view-exposures)