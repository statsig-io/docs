---
sidebar_label: Commonly Used Features
title: Commonly Used Features on Statsig for Enterprise Customers
---

# Features you should be using on Statsig

## Single Sign On (SSO)
### ⚠️ Security risk if not enabled 
If you've not enabled SSO on Statsig, your ex-employees will be able to make changes in your Statsig project, unless you remember to deactivate them in Statsig. Using SSO makes sure they cannot access Statsig when you remove their user account from your systems (by forcing them to authenticate with your systems frequently). [See more](https://docs.statsig.com/access-management/sso/overview) 

## Require Change Review
### ⚠️ Production systems at risk if not enabled
Like with changes to your source code or production configuration, requiring a second pair of eyes to review changes in Statsig helps reduces mistakes in production. When enabled, changes impacting only pre-production environments do not require approval - allowing agility there. You can grant admins or oncalls the ability to self-approve changes if desired. If you choose to ignore this recommendation, consider enabling change review and granting all members the ability to self-approve changes, so they clearly see the change they're committing before doing so. [See more](https://docs.statsig.com/access-management/sso/overview) 

## Tags for organization
Tags let you apply light-weight organization to your Statsig config (e.g. gates, experiments and metrics) to allow easy filtering by team (or organization objectives). E.g. You can tag growth related experiments and metrics with a tag called "Growth", easily filtering down to just these when needed. This is particularly useful with metrics - since you can now just add the Growth tag to your scorecard metrics, and pull in all the key Growth metrics instead of individually picking them.

The Core tag is meant to be used for company critical metrics. These are defaulted into experiment scorecards so experimenters are looking at impact on these metrics as part of their experiments.

## Metric and User Dimensions
Metric dimensions let you break out  breakdown an event such as add-to-cart into product categories such as sports, toys, appliances, electronics. To do this, you would simply log add-to-cart events and provide the product category in the event's value field. [See more](https://docs.statsig.com/metrics/metric-dimensions)

User dimensions let you slice or filter metrics based on a user property. This is often something like Country, Device Type or a property like Free vs Paid. On Statsig Cloud, these are frozen when a user is first exposed to a feature gate or experiment - in case your experiment ends up changing these properties (e.g. convert a Free user to Paid). If you're using Statsig Warehouse Native, these properties can be set anytime before analysis. 

## Slack Notifs
Statsig supports two classes of Slack Notifications -  Project and Personal. [See more](https://docs.statsig.com/integrations/slack)
Project Notifications will drop into a Slack channel you choose updates including Configuration changes (User1 rolled out Feature1 to 100% of Everyone), Health Check Alerts (Experiment1 is failing Sample Ratio Mismatch checks) and Statsig Health Status Reports (also posted to https://status.statsig.com). 

Individuals can opt into Personal Notifications - so they're notified when tagged in discussions, invited to review a change or there's a change on an experiment they're following. 

## Discussions
Experimentation is a collaborative exercise where teams work together. Often this collaboration requires people taking screenshots around the experiment and DMing team mates to ask them questions. This information is siloed and lost to others. In-context Discussions allow teams to discuss aspects of the experiment while making this context available to other team members. Common reasons include discussing a surprising metric lift, asking questions on validation  performed before ramping up a feature rollout or even keeping a running log of observations/escalations that can be referenced when the experiment is complete. 

