---
title: Manage a Safeguard
sidebar_label: Manage a Safeguard
slug: /safeguards/manage
keywords:
  - owner:Shubham
last_update:
  date: 2025-07-23
---

## View a Safeguard
To view an existing Safeguard, tap the blue pill on your Feature Gate's targeting rule. Here you can see how your Safeguard is currently defined and make any changes if you want. You can add/remove alerts, change the action, or adjust the evaluation period.

![View an existing Safeguard](/img/safeguards/view-safeguard.png)

## When a Safeguard triggers
When a safeguard is triggered because of an alert:
- The configured action executes automatically (rollback/pause/complete)
- A banner appears on the targeting rule with action taken, timestamp, and diagnostic link
- Further rule modifications are blocked until the alert is resolved
- Notifications are sent per your alert configuration

![Safeguard is triggered on a rule](/img/safeguards/safeguard-rule-banner.png)
