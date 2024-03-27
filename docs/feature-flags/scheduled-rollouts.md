---
title: Scheduled Rollouts
sidebar_label: Scheduled Rollouts
slug: /feature-flags/scheduled-rollouts
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

## Context
Feature Gates are powerful in ensuring a safe, controlled feature rollout. Scheduled Rollouts add a time-based scheduling layer to Feature Gates, enabling you to pre-set any rollout schedule you want, which will execute automatically. This is particularly useful if, for example, you have a feature launch happening in another timezone (and don’t want to stay up all night!) or you have a standard, company-wide ramp-up schedule you follow with every feature release. 

Scheduled rollouts are set at the Feature Gate **rule** level, enabling maximal flexibility. Not all rules in your Gate need to include a scheduled rollout, simply set it up for whichever rules make the most sense.

### Setting up a Scheduled Rollout
To set up a Scheduled Rollout on a rule in your Feature Gate, simply tap on the “…” in the upper right-hand corner of the rule you want to schedule a rollout for. 

![Screen Shot 2022-11-03 at 3 57 52 PM](https://user-images.githubusercontent.com/101903926/199850775-42528d6c-b8f1-4e5d-9774-bc1b576c2916.png)

Select **Edit Rule or Rollout**, and then select **Schedule Automated Rollout**.

![Screen Shot 2022-11-03 at 4 04 00 PM](https://user-images.githubusercontent.com/101903926/199851487-2e2aba51-30d5-4fef-933f-b31c0e78dd57.png) 

From here, you can configure each phase of your Scheduled Rollout. You will see in the upper right-hand corner your current pass percentage- this simply reflects the baseline pass percentage you entered for your rule and can be changed via **Edit Rule**. To add phases to your rollout, click **Add Phase** and configure as many phases as you want. 

Each scheduled rollout phase includes- 
- Rollout date
- Rollout time*
- Pass percentage

*Please note that rollout times are available in 15 minute increments. Additionally, each configured phase represents a discrete increase to the next rollout percentage, not a gradual rollout amortized over the course of the entire phase. 

![Screen Shot 2022-11-03 at 4 06 51 PM](https://user-images.githubusercontent.com/101903926/199851781-60606e6b-d653-408a-a3ba-399e32d582b0.png)

As you are building your Scheduled Rollout, you will see a preview of the phases below the configuration wizard. This preview is also available for viewers of your Feature Gate on hover over a rule. 

![Screen Shot 2022-11-03 at 4 08 33 PM](https://user-images.githubusercontent.com/101903926/199851974-c95ea9d2-6d04-4c3e-b9e5-f5d5ea3d85b3.png)


![Screen Shot 2022-11-03 at 4 05 29 PM](https://user-images.githubusercontent.com/101903926/199851640-007d63d5-7b9e-4002-93af-132af24416a1.png)


### Executing a Scheduled Rollout
Once configured, each phase of a Scheduled Rollout will execute automatically on the schedule specified. The Feature Gate creator, any editors, and anyone Following the Feature Gate will receive Scheduled Rollout notifications. 

Notifications will be sent via: 
- Email
- Console
- (Optional) Slack
    - To configure Slack notifications on Statsig, go to “Account Settings → Notifications”
