---
title: Stop Assignments
sidebar_label: Stop Assignments
slug: /experiments-plus/stop-assignment
---


## Stopping New User Assignments in an Experiment

You have been running an experiment for a while. Your users are split across various control and treatment groups. But now you want to stop enrolling more users into your experiment and going forward analyze only the users who have been exposed thus far.

With the Stop Assignment option, you can do exactly that. You can stop assignment for an experiment by clicking the Make Decision dropdown as shown below.

:::info 
You will need to configure [Persistent Assignment](https://docs.statsig.com/server/concepts/persistent_assignment) for this feature to work.
:::

![Stop Assignment](/img/pause_assignment.png)


Things you should keep in mind when stopping assignments for an experiment:
- Once you stop assignment, the experiment will stop enrolling new users in it. That is, the experiment will stop performing checks on new users.
- Previously exposed users will keep receiving the consistent control vs treatment experience. Make sure to configure [Persistent Assignment](https://docs.statsig.com/server/concepts/persistent_assignment) to preserve the user variants.
- The analysis will continue as the experiment keeps recording new data points for the already exposed users.

Stop Assignment is an irreversible decision. Once you make this decision, you cannot “resume” assigning users into your experiment.