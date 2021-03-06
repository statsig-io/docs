---
title: What is a feature gate?
sidebar_label: Overview
slug: /feature-gates/working-with
---

A feature gate is a mechanism for teams to configure what system behavior is visible to users without changing application code. Feature gates are also commonly called feature flags or feature toggles.

## When to use feature gates

Feature gates are commonly used as on/off switches to turn a certain system behavior on or off in production. Teams often use feature gates to turn on certain features or behavior for a small percentage of the total user base. Teams may do this to gradually ramp up a software release across their user base to limit the impact of any unanticipated system behavior, or to enable a restricted behavior only for a specific set of users.

Statsig offers several built-in capabilities with feature gates:

- A feature gate can be a simple _kill switch_ that you can use to turn off a particular code branch for all your users
- You can use a feature gate to target newly coded system behavior to a specific set of users to implement _whitelisting_
- You can create user targeting _rules_ based on Statsig-derived _environment attributes_ such as location, client device, browser type, and client app version
- You can create user targeting _rules_ based on _user attributes_ such as email and user ID that you provide
- Each feature gate offers built-in _A/B testing_ with no additional effort or charge so you can automatically see how your feature is performing in production compared to the default or control
- A feature gate may depend on other _targeting gates_ that control when it’s active; for example, you can create a feature gate as a top level kill switch that activates child feature gates that depend on it

The following tutorials show how you can perform common tasks with feature gates.

- [Create a feature gate](/feature-gates/create-new)
- [Create a rules for a feature gate](/feature-gates/add-rule)
- [Use a language-specific Statsig SDK to implement a feature gate in your application](/feature-gates/implement)
- [Test a feature gate](/feature-gates/test-gate)
- [Override a feature gate](/feature-gates/overrides)
- [View feature gate exposures](/feature-gates/view-exposures)
