---
title: Scheduled Rollouts
sidebar_label: Scheduled Rollouts
slug: /feature-gates/scheduled-rollouts
---

## Context
Feature Gates are powerful in ensuring a safe, controlled feature rollout. Scheduled Rollouts add a time-based scheduling layer to Feature Gates, enabling you to pre-set any rollout schedule you want, which will execute automatically. This is particularly useful if, for example, you have a feature launch happening in another timezone (and don’t want to stay up all night!) or you have a standard, company-wide ramp-up schedule you follow with every feature release. 

Scheduled rollouts are set at the Feature Gate r**ule** level, enabling maximal flexibility. You can also “mix and match”- not all rules in your Gate need to include a scheduled rollout, simply set it up for whichever rules make the most sense.

### Setting up a Scheduled Rollout
To set up a Scheduled Rollout on a rule in your Feature Gate, simply tap on the “…” in the upper right-hand corner of the rule you want to schedule a rollout for. Select “Edit Rule or Rollout”, and then tap “Schedule Automated Rollout”. 

From here, you can configure each phase of your Scheduled Rollout. You will see in the upper right-hand corner your current pass percentage- this simply reflects the baseline pass percentage you entered for your rule and can be changed via “Edit Rule”. To add phases to your rollout, click “Add Phase” and configure as many phases as you want. 

Each phase includes- 
- Rollout date
- Rollout time*
- Pass percentage

*Please note that rollout times are available in 15 minute increments. Additionally, it is important to note that each configured phase represents a discrete increase to the next rollout percentage, not a gradual rollout amortized over the course of the entire phase. 

As you’re building your Scheduled Rollout, you will see a preview of the phases below the configuration wizard. This preview is also available for viewers of your Feature Gate on hover of a rule. 

### Executing a Scheduled Rollout
Once configured, each phase of a Scheduled Rollout will execute automatically on the schedule specified. The Feature Gate creator, any editors, and anyone Following the Feature Gate will all receive Scheduled Rollout notifications. 

Notifications will be sent via: 
- Email
- In-Console
- (Optional) Slack
    - To configure Slack notifications on Statsig, go to “Account Settings → Notifications”
