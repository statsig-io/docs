---
title: Feature Gates
sidebar_label: Overview
slug: /feature-gates/overview
keywords:
  - owner:jinayoon
last_update:
  date: 2025-05-01
---

**Feature Gates**, commonly known as feature flags, allow you to toggle the behavior of your product in real time without deploying new code. Devs often use them to turn on certain features for a small percentage of the total user base. This allows for safer, gradual software releases because you can monitor the impact of system behavior. Feature Gates also enable you to limit application behavior for a specific set of users, like dogfooding environments.

![Feature Gates banner image](/img/featuregates.png)


## When to Use
#### Use when you need to...
- Schedule gradual feature rollouts to safely deploy new code
- Set up dev staging environments before code hits production, like dogfooding
- Have a just-in-case "kill switch" that lets you immediately turn off a particular code branch for users in production
- Modify the user experience based on attributes like username, email, or other identifiers 
- Change app behavior based on context like device, browser type, version, and other environment attributes

#### Not recommended if...
- You need to return structured or multi-value data based on targeting rules and conditions—use a [Dynamic Config](/dynamic-config)
- You want to test complex hypotheses beyond simple A/B tests and launch impact—set up an [Experiment](/experiments-plus) instead


## How It Works
1. First, [create a Feature Gate](/feature-gates/create) with [targeting rules](/feature-flags/conditions) in the Statsig console. 
2. For the Feature Gate to actually impact users, you'll need to integrate the [Statsig SDK](/sdks/getting-started) into your product code. The SDK will query the gate value during runtime and return a true/false result based on user attributes, environment data, and other conditions you define.  
3. You can [test a Feature Gate](/feature-flags/test-gate) to make sure it's behaving as expected before you actually roll it out.
4. For finer targeting control, you can also set up [Feature Gate overrides](/feature-flags/overrides), which are like "bypass lists" or "whitelists" for the gate.
5. Once your Feature Gate is live, you can [view Feature Gate exposures](/feature-flags/view-exposures) in the Statsig console to monitor who is encountering your gate.
6. You can easily set up deprecation rules and clean up old flags by [managing Feature Gate lifecycles](/feature-flags/feature-flags-lifecycle).

## Key Capabilities
### Scheduled Rollouts
Gradually deploy a feature over time by setting up a Feature Gate as a [Scheduled Rollout](/feature-flags/scheduled-rollouts).
### Override Lists
Implement Feature Gates with [Overrides](/feature-flags/overrides) to allow a specific list of users to bypass your gate.
### Chained Flag Dependencies
Chain Feature Gates together in parent-child or other dependent relationships so a top-level gate can enable or disable all its dependent flags in one go, perfect for global kill switches guarding sub-features.
### Built-in A/B Tests
You can run simple A/B tests without additional setup using [Pulse](/feature-flags/view-exposures). In practice, this means treating the users who see the new feature as the "treatment" group, and the users who are gated (and therefore do not see the new feature yet) as the "control".
### Gate Testing
[Test your Feature Gates](/feature-flags/test-gate) with Statsig's built-in tools to check whether your Feature Gate is configured to target the right people.


## FAQs
#### **How are Feature Gates different from Dynamic Configs?**
Dynamic Configs are key-value configs that let you return structured data (not just true/false) based on targeting rules. They're more for customizing behavior, tuning parameters, or supporting complex logic _beyond booleans_. Feature Gates are simpler on/off switches for gating access to a feature. Technically, you can set up a Dynamic Config as a Feature Flag.
  
#### **When should I use Feature Gates instead of Experiments (and vice versa)?**
We have a full guide on [Choosing Feature Flags vs. Experiments](/guides/featureflags-or-experiments). (TL;DR—Use Feature Gates when you just want to measure the general impact of a feature rollout, and use Experiments when you have a more specific hypothesis or "test" in mind.)

## Related Tutorials
- [Set up dev environments with Feature Gates](/guides/using-environments)
- [Customize dev environments with Feature Gates](/guides/testing)
- [Choosing Feature Flags vs. Experiments](/guides/featureflags-or-experiments)
- [Best Practices for Feature Gates](/feature-flags/best-practices)
