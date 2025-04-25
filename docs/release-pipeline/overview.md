---
title: Release Pipeline Overview
sidebar_label: Overview
slug: /release-pipeline
keywords:
  - owner:shubham
last_update:
  date: 2025-04-18
---

# Release Pipelines

Release Pipelines enable sophisticated, multi-stage rollout strategies that respect your infrastructure boundaries, providing greater control over feature deployments.

:::info
Release Pipeline is currently in Beta. Statsig team is working on adding more features around it. Please see the [Current Limitations section](#current-limitations) below for current limitations. Please reach out to us if you have questions.
:::

:::info
Release Pipeline is an Enterprise feature.  Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you need to enable Enterprise features as you try out Statsig.
:::

## When to Use Release Pipelines

Consider implementing Release Pipelines when you need to:

- Implement infrastructure-aware deployment strategies beyond what traditional feature flags offer
- Safely roll out changes in complex, distributed systems with minimal risk
- Deploy progressively across environments (dev → staging → prod)
- Target specific infrastructure segments with precision (e.g., prod-us-west → prod-us-east → prod-eu)
- Control progression between stages with time intervals or manual approvals
- Monitor each deployment stage before proceeding to the next
- Enable instant rollbacks if issues arise during any phase

**Especially valuable for:**
- Platform engineering teams managing multi-environment, multi-region infrastructure
- DevOps practitioners implementing progressive delivery strategies
- SREs responsible for maintaining system reliability across complex deployments
- Organizations with mission-critical services that cannot afford downtime

## Key Concepts

| Concept | Description |
|---------|-------------|
| **Release Pipeline** | Defines the complete release strategy for a feature gate or dynamic config change |
| **Phase** | A distinct stage in the pipeline with specific conditions targeting designated release segments |
| **Trigger** | An event initiated when a feature gate or dynamic config starts using a Release Pipeline |
| **Action** | Controls that can be applied to an active Trigger to manage the release process |

## Getting Started

:::note
Release Pipeline is currently only supported in Statsig's [Server Core SDKs](https://www.statsig.com/blog/introducing-statsig-server-core-v0-1-0). Legacy SDKs will continue to work but will not get the full features of release pipelines.
:::

Follow these tutorials to begin implementing Release Pipelines:

- [Create and Manage Release Pipelines](/release-pipeline/create-and-manage)
- [Trigger a Release Pipeline](/release-pipeline/trigger)
- [Manage an Ongoing Release Pipeline](/release-pipeline/actions)

## Current Limitations

- Experiments are not supported in release pipeline
- Resalt/Disable/Delete/Archive/Launch actions won’t trigger a release pipeline
- [Scheduled rollouts](/feature-flags/scheduled-rollouts) are not supported to work in conjunction with release pipeline
- Changes on Gates, Dynamic Configs with Release Pipeline attached through CAPI won't trigger a release pipeline
