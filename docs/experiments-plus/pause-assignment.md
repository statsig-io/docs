---
title: Pause Assignment
sidebar_label: Pause Assignment
slug: /experiments-plus/pause-assignment
---


## Pausing Assignment in an Experiment

You have been running an experiment for a while. Your users are split across various control and treatment groups. But now you want to stop enrolling more users into your experiment and going forward analyze only the users who have been exposed thus far.

With Pause Assignment option, you can do exactly that. You can pause assignment for an experiment by clicking the Make Decision dropdown as shown below.

:::info 
You will need to configure [Persistent Assignment](https://docs.statsig.com/server/concepts/persistent_assignment) for this feature to work.
:::

![Pause Assignment](/img/pause_assignment.png)


Things you should keep in mind when pausing assignments for an experiment:
- Once you pause assignment, the experiment will stop enrolling new users in it. That is, the experiment will stop performing checks on new users.
- Previously exposed users will keep receiving the consistent control vs treatment experience. Make sure to configure [Persistent Assignment](https://docs.statsig.com/server/concepts/persistent_assignment) to preserve the user variants.
- The analysis will continue as the experiment keeps recording new data points for the already exposed users.

Pause Assignment is an irreversible decision. Once you make this decision, you cannot “resume” assigning users into your experiment.