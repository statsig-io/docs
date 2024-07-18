---
title: Assignment Sources
slug: /statsig-warehouse-native/configuration/assignment-sources
sidebar_label: Assignment Sources
---

Assignment Sources are how you schematize your assignment data for Statsig, and they serve as the input data for determining who is in an experiment, and which treatment they got.

## Creating an Assignment Source

To create an assignment source, go to the experiments tab in Statsig and go to the Assignment Sources pane.

An Assignment Source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig requires (user identifiers, a `timestamp`, an experiment identifier, and a group identifier).

![Assignment Source](https://user-images.githubusercontent.com/102695539/264100295-05d71c64-9b31-4531-b371-03b6cb692446.png)

## Scanning Assignment Sources

Statsig scans assignment sources on-demand and/or on a schedule to find experiment data. These jobs are very quick and identify unique groups, the ID types present in the experiment, and the estimated of users per group.

Once the scan is complete, you can view and create experiments from the Assignment source. The assignment's experience will also populate the Experiment creation flow after the scan completes.

![Screenshot 2024-06-11 at 3 12 00 PM](https://github.com/statsig-io/docs/assets/102695539/87fac269-75bc-4a65-a660-339486605e24)

## Manage Assignment Sources

In the Assignment Source tab, you can see your Assignment sources and the experiments they're being used in.

![Assignment Source Tab](https://user-images.githubusercontent.com/102695539/264100297-c41cd747-089c-4ccf-8b45-b70a1b4e264a.png)

## Example Data

For experiment assignment sources, Statsig requires information on who was exposed, when, and to what experiment:

| Column Type            | Description                                                                               | Format/Rules                   |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the experiment exposure occurred                       | Castable to Timestamp/Date     |
| unit identifier        | **Required** at least one entity to which this metric belongs                             | Generally a user ID or similar |
| experiment identifier  | **Required** the experiment the exposure was for                                          | Usually an experiment name     |
| group identifier       | **Required** the experimental variant the user was assigned to                            | Usually a group name           |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types                           |                                |
| context columns        | _Optional_ Fields which can be used to group by and filter results in exploratory queries |                                |

For example, you could pull from exposure event logging directly:

| timestamp           | user_id       | company_id | experiment_name  | group_name | country |
| ------------------- | ------------- | ---------- | ---------------- | ---------- | ------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | ranking_v1_vs_v2 | v1         | US      |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | ranking_v1_vs_v2 | v2         | CA      |
| 2023-10-10 00:02:22 | my_user_18821 | c_22235455 | search UI revamp | control    | CA      |
