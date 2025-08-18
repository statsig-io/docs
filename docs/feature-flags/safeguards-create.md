---
title: Create a Safeguard
sidebar_label: Create a Safeguard
slug: /safeguards/create
keywords:
  - owner:Shubham
last_update:
  date: 2025-07-29
---

You can create a Safeguard on one or multiple targeting rules within a Feature Gate. To create a Safeguard on a rule, follow the steps below:

1. Go to a Feature Gate’s <b>Setup</b> tab

2. Pick a targeting rule for which you want to monitor regressions

3. Click the three-dot (...) menu and choose <b>‘Safeguard Rule’</b>

    ![Create Safeguard on a rule](/img/safeguards/create-safeguard.png)

4. Choose the action to take when alerts fire: 
    - <b>Rollback to 0%</b> - Assign Default value to all users  
    - <b>Roll out to 100%</b> - Assign Pass value to all users
    - <b>Pause Rollout</b> - Stop scheduled rollout progression (only available with active Schedule Rollout policy)

    ![Select an action](/img/safeguards/choose-safeguard-action.png)

5. (Optional) Set how long to monitor alerts for safeguarding the rule:

    | Alert type | Evaluation period | Evaluation start time|
    | --- | --- | --- |
    | Topline alert | Choose your own | Starts when the safeguard is created|
    | Rollout alert | Fixed (90 days) | Starts whenever targeting rule's pass % changes |
    
    ![Set evaluation period](/img/safeguards/evaluation-period.png)
     
    <b>Recommended:</b> Ideally you want to monitor topline alerts for crashes, errors, latency, etc. *for a few days* after a Feature Gate rollout to make sure things are stable. We recommend starting with a 14-day evaluation period.

6. Select one or more alerts to monitor:

    - Rollout alerts - For feature-specific regression detection
    - Topline alerts - For system-wide health monitoring

    ![Add alerts for your Safeguard](/img/safeguards/add-alerts.png)

7. Click <b>Save</b>