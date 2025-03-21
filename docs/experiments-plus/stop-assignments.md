---
title: Stop Assignments
sidebar_label: Stop Assignments
slug: /experiments-plus/stop-assignments
keywords:
  - owner:vm
last_update: 2024-12-04 12:27:28 -0800
---


## Stopping New User Assignments in an Experiment

You have been running an experiment for a while. Your users are split across various control and treatment groups. But now you want to stop enrolling more users into your experiment and going forward analyze only the users who have been exposed thus far.

With the Stop Assignment option, you can do exactly that. 

## Enabling Stop Assignment Option
The **Stop Assignment** option must first be enabled in Project Settings to show as an option in the **Make Decision** modal. To enable this option, head to **Settings** --> **Project Info** and toggle on the **Enable stop new user assignments for experiments** setting. 

<img width="692" alt="Screen Shot 2024-12-04 at 12 10 28 PM" src="https://github.com/user-attachments/assets/cd4bf488-9f9f-486e-b152-123a35a0204e"/>


## How it Works
You can stop assignment for an experiment by clicking the Make Decision dropdown as shown below.

:::info 
You will need to configure [Persistent Assignment](/server/concepts/persistent_assignment) for this feature to work. If you don't configure this, people already exposed to the treatment groups will no longer get the treatment experience.
:::

![Stop Assignment](/img/stop_assignment.png)


Things you should keep in mind when stopping assignments for an experiment:
- Once you stop assignment, the experiment will stop enrolling new users in it. That is, the experiment will stop performing checks on new users.
- Previously exposed users will keep receiving the consistent control vs treatment experience. Make sure to configure [Persistent Assignment](/server/concepts/persistent_assignment) to preserve the user variants.
- The analysis will continue as the experiment keeps recording new data points for the already exposed users.

Stop Assignment is an irreversible decision. Once you make this decision, you cannot “resume” assigning users into your experiment.
