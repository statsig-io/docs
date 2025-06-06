---
title: Safeguards
sidebar_label: Overview
slug: /safeguards/overview
keywords:
  - owner:Shubham
last_update:
  date: 2025-06-05
---

Safeguards help you ship with confidence by continuously monitoring critical metrics and automatically intervening in your Feature Gate rollouts when risk thresholds are exceeded. This ensures faster recovery from issues, eliminates the need for constant manual checks, and protects your users from unintended impact.

:::info
Safeguards is currently in open beta and is available on our Pro and Enterprise billing tiers. Please reach out to us if you have questions or feedback.
:::

:::info
Safeguards is only available on Cloud right now. We are actively working on the WHN version and will be announcing it in the next few weeks! Reach out to us over Slack if you'll be interested in the WHN version!
:::

## When to use Safeguards
Use Safeguards when you want to:
- Limit the impact of a feature on a critical business or performance metrics
- Automate rollout progression to more users based on how your metrics are performing
- Maintain system stability by automatically responding to API errors, latency spikes, or infrastructure issues

## How Safeguards work
Safeguards work by listening to different types of alerts, such as Rollout Alerts and Topline Alerts, that you have created in your project. When any alert fires due to metric regressions, Safeguards automatically pause your rollout, rolls it back, or finish a rollout based on your settings.

<u> Pre-requisite </u>

You must create at least one Rollout Alert or Topline Alert before configuring Safeguard on a Feature Gate. See the [Alerts](/product-analytics/alerts) documentation for setup instructions.

## Two types of Safeguards
There are two different types of alerts a Safeguard can use to take an action on your Feature Gate:

#### Rollout Alert
Definition: Monitor the regression of metric delta between users who pass and fail your Feature Gate

Use-case: When you want to ensure that your Feature Gate is not causing any negative drift on the users getting the new flag variation. Only works on partially rolled out rules (pass rate between 0% and 100%)

#### Topline Alert
Definition: Monitor absolute metric values regardless of Feature Gate assignment

Use-case: When you want to take an action on your Feature Gate when system metrics breach thresholds, regardless of confirming causation. Works on fully rolled out (0% or 100%) as well as partially rolled out rules

## Getting Started
Follow these tutorials to start using Safeguards:

- [Create a new Safeguard](/safeguards/create)
- [Manage an existing Safeguard](/safeguards/manage)