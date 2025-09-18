---
sidebar_label: Commonly Used Features
title: Commonly Used Features on Statsig for Enterprise Customers
displayed_sidebar: cloud
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

# Commonly Used Features on Statsig for Enterprise Customers

## Single Sign On (SSO)
### ⚠️ Security risk if not enabled 
If you've not enabled SSO on Statsig, your ex-employees will be able to make changes in your Statsig project, unless you remember to deactivate them in Statsig. Using SSO makes sure they cannot access Statsig when you remove their user account from your systems (by forcing them to authenticate with your systems frequently). [See more](/access-management/sso/overview) 

## Require Change Review
### ⚠️ Production systems at risk if not enabled
Like with changes to your source code or production configuration, requiring a second pair of eyes to review changes in Statsig helps reduces mistakes in production. When enabled, changes impacting only pre-production environments do not require approval - allowing agility there. You can grant admins or oncalls the ability to self-approve changes if desired.
![Change review configuration interface](https://github.com/statsig-io/docs/assets/31516123/7d640328-2615-4b17-94e3-b2788fb6d164)

If you choose to ignore this recommendation, consider enabling change review and granting all members the ability to self-approve changes, so they clearly see the change they're committing before doing so. [See more](/guides/setting-up-reviews) 
![Self-approval settings interface](https://github.com/statsig-io/docs/assets/31516123/5e298030-a4ae-4cea-9a77-811c2c30d8ea)

## Tags for organization
Tags let you apply light-weight organization to your Statsig config (e.g. gates, experiments and metrics) to allow easy filtering by team (or organization objectives). E.g. You can tag growth related experiments and metrics with a tag called "Growth", easily filtering down to just these when needed. This is particularly useful with metrics - since you can now just add the Growth tag to your scorecard metrics, and pull in all the key Growth metrics instead of individually picking them.

The Core tag is meant to be used for company critical metrics. These are defaulted into experiment scorecards so experimenters are looking at impact on these metrics as part of their experiments.
![Tags organization interface](https://github.com/statsig-io/docs/assets/31516123/92a44de5-71bb-4b80-9fea-f8d83e2c4f95)


## Metric and User Properties
Metric properties let you break out an event such as add-to-cart into product categories such as sports, toys, appliances, electronics. To do this, you would simply log add-to-cart events and provide the product category in the event's value field. [See more](/metrics/metric-dimensions)
![Metric properties configuration interface](https://github.com/statsig-io/docs/assets/31516123/f1478766-3471-45c8-970a-4a3335675c82)

User properties let you slice or filter metrics based on a user property. This is often something like Country, Device Type or a property like Free vs Paid. On Statsig Cloud, these are frozen when a user is first exposed to a feature gate or experiment - in case your experiment ends up changing these properties (e.g. convert a Free user to Paid). If you're using Statsig Warehouse Native, these properties can be set anytime before analysis. 
![User properties configuration interface](https://github.com/statsig-io/docs/assets/31516123/975df15b-8ac8-4396-aa3b-5877843ed5d5)

## Slack Notifs
Statsig supports two classes of [Slack Notifications](/integrations/slack) -  Project and Personal. 
Project Notifications will drop into a Slack channel you choose updates including Configuration changes (User1 rolled out Feature1 to 100% of Everyone), Health Check Alerts (Experiment1 is failing Sample Ratio Mismatch checks) and Statsig Health Status Reports (also posted to https://status.statsig.com). 
![Slack project notifications setup interface](https://github.com/statsig-io/docs/assets/31516123/9f7d3a81-a228-43cd-80f9-cf2c7a2d63a1)

Individuals can opt into Personal Notifications - so they're notified when tagged in discussions, invited to review a change or there's a change on an experiment they're following. 
![Slack personal notifications setup interface](https://github.com/statsig-io/docs/assets/31516123/6604cdc4-8191-44bf-bbfe-7c4853a8f226)

## Discussions
Feature rollout and experimentation are collaborative exercises where teams work together. Often this collaboration requires people taking screenshots, looking at metrics and DMing team mates to ask them questions. This information is siloed and lost to others. In-context Discussions allow teams to discuss aspects of the feature rollout or experiment while making this context available to other team members. Common reasons include discussing a surprising metric lift, asking questions on validation performed before ramping up a feature rollout or even keeping a running log of observations/escalations that can be referenced when the experiment is complete. 

![Discussions interface for collaborative feature rollout](https://github.com/statsig-io/docs/assets/31516123/7215b193-41ae-4932-aeff-8f41fc00c55e)

## Users tab
The users tab is a powerful diagnostics tool for developers trying to troubleshoot or validate experiments. It can answer questions like "which experiment group was this user in?" or "when did the user first see this feature?". [See more](/users).
![Users tab diagnostics interface](https://github.com/statsig-io/docs/assets/31516123/6826e065-85c9-40ab-9ce0-531cb02f0c30)

## Dynamic Config
Dynamic config is a tool that replaces hard-coded values in your application with configuration parameters defined on the server. These configuration parameters can include any property across your client-side or server-side application code, from button colors to ranking configurations. This enables you to control the behavior of your application dynamically in near real-time. [See more](/dynamic-config).

## Holdouts
Holdouts are an advanced feature that helps with experimentation program maturity. They let you measure the cumulative impact of feature releases - in addition to measuring if wins are sustained. [See more](https://statsig.com/blog/getting-in-on-holdouts).  
