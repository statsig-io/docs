---
title: Create and Manage Release Pipelines
sidebar_label: Create and Manage
slug: /release-pipeline/create-and-manage
keywords:
  - owner:shubham
last_update:
  date: 2025-04-18
---

# Creating and Managing Release Pipelines

A Release Pipeline must be defined before it can be used by feature gates or dynamic configs during the rollout process.

## Creating a New Pipeline

To create a new Release Pipeline:

1. Log into the [Statsig console](https://console.statsig.com)
2. Navigate to **Settings** > **Feature Management**
3. Under Release Pipelines, click the **Create** button
4. Enter a descriptive name for your pipeline
5. Click **Create** to proceed to the configuration page

![Create release pipeline interface](/img/release-pipeline/create.png)

## Configuring Phases

Each pipeline consists of one or more phases, with each phase representing a distinct release target.

### Adding Phases

For each phase in your pipeline:

1. Add one or more release rules
2. Select a required **Environment** for the rule
3. Optionally add custom field conditions for more precise targeting

![Phase configuration](/img/release-pipeline/phases.png)

### Setting Phase Transitions

Control how your phases progress with these transition options:

| Transition Type | Description |
|-----------------|-------------|
| **Require Review** | Requires manual approval from an authorized user before starting the phase |
| **Time Interval** | Automatically proceeds to the next phase after a specified duration (in minutes) |

**Note:** You can combine both options in a single phase. When both are used, the time interval will only begin counting down after the required approval is given.

![Phase transition conditions](/img/release-pipeline/condition.png)

## Managing Existing Pipelines

### Updating a Pipeline

To modify an existing pipeline:

1. Click on the pipeline name from the list
2. Make your desired edits to any section
3. Click **Save** to apply your changes

**Important:** Pipelines with active rollouts currently in progress cannot be modified until those rollouts complete or are aborted.

### Viewing References

To see which feature gates and dynamic configs are currently using a specific Release Pipeline:

1. Locate the pipeline in the list view
2. Click on the number displayed in the **References** column

This will show all features and configs that are currently attached to this pipeline.

![Reference](/img/release-pipeline/reference.png)
