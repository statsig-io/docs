---
sidebar_label: Migrate from LaunchDarkly
title: Migrate your feature flags from LaunchDarkly
keywords:
  - owner:oliver
last_update:
  date: 2024-10-02
---

Migrating from LaunchDarkly to Statsig is a strategic move that can lead to more efficient feature flag management and a stronger experimentation culture. By following this guide, you'll be well equipped to make the transition with confidence.

Statsig has **two migration tools** to automate recreating feature flags you already have in LaunchDarkly:

[1. UI-based wizard to help you import LaunchDarkly feature flags and segments into Statsig](/guides/ui-based-tool) - It will tell you which gates and segments were migrated and which weren’t. It only imports the "production" environment at the moment.

[2. Open-source script template that migrates feature flags from LaunchDarkly to Statsig](/guides/open-source-script) - This is a good option if you want to customize the integration logic. It will also spit out a CSV of all of your LaunchDarkly flags, along with migration status and relevant URLs to the flag in LaunchDarkly and the gate in Statsig. This imports all of your environments.

## Conceptual considerations before migration
### The distinction between experiments and feature flags
Statsig deliberately distinguishes between feature flags (for immediate action) and experiments (for deeper inquiry). They can be used together or separately. 

- **On LaunchDarkly, everything is a feature flag**, and feature flags may have variants and return different types.
- **On Statsig, feature gates are purely boolean.** When deciding to ship a feature, this becomes a matter of flipping a switch. There are no variables within the feature that must be altered or replaced.

In relation to multi-type flags on LaunchDarkly, Statsig supports two important a structures:

- [Dynamic Configurations](/dynamic-config) for pure configurations or entitlements types of use cases. Supports multi-type return values.
- [Experiments](/experiments-plus) for measuring performance between different variations. Supports multi-type return values.

In comparison to boolean flags, multi-type flags offered by LaunchDarkly introduce a layer of complexity that can obscure the path to full implementation.

When the time comes to transition to full deployment and remove the flag, references to those multi-type configurations need to be replaced, introducing potential points of failure and delaying the shipping process. This necessitates extra diligence and refactoring that could have been avoided with a simple boolean check. And, as we all know, teams may already be slow in cleaning up feature gates. More than a matter of convenience, this is a strategic approach that enhances decision-making clarity, accelerates the release process, and helps cultivate true experiment culture without slowing down development speed.

### Environments
In Statsig, the hierarchy is designed with **a single project that contains multiple environments**, such as development, staging, and production. This structure allows for centralized management of feature flags and experiments across different stages within the same project, thus simplifying governance. Here's an example of a flag which is only on in development, which was imported using our [open source migration script](/guides/open-source-script) from LaunchDarkly:

![image](https://github.com/statsig-io/docs/assets/173515951/76489c32-3c65-4096-9d07-de55f4332faf)

Within the same workspace and feature flag, you can then filter the rules based on environment:

![image](https://github.com/statsig-io/docs/assets/173515951/b129a979-763f-4ccb-9f07-d16e2d92ad40)

Conversely, **LaunchDarkly adopts an Environment > Project hierarchy**, where each environment can be considered a separate workspace.

The key difference lies in the centralization versus separation of environments: Statsig centralizes environments within a project for streamlined management, while LaunchDarkly treats each environment as a distinct workspace.

### Defaults
Currently, `false` is the global default option for feature flags in Statsig's SDKs. If you want the default to be true, you may consider inverting the gate check logic. For Experiments in Statsig, defaults are provided in code.

### Authentication
Are you using SSO? Are you assigning custom roles via SSO? If so, read on.

Currently, [we haven’t hooked role definition into auto provisioning yet.](https://docs.LaunchDarkly.com/home/account/okta#assigning-custom-roles-in-okta) For automatic provisioning with SSO, new users authenticated by Okta can be automatically provisioned into a Statsig **organization**.

If your **project** within the **organization** is set to open, users will default to having access. For private projects, they must request access.

Each JIT-provisioned user would have member access. You will need to [update their roles manually](/access-management/projects)/via API. It’s a similar pattern with teams and roles right now.

This is on our roadmap!
