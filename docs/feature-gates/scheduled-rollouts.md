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
