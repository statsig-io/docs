---
title: Manage an Ongoing Release Pipeline
sidebar_label: Manage Actions
slug: /release-pipeline/actions
keywords:
  - owner:shubham
last_update:
  date: 2025-09-18
---

# Managing Release Actions

Once a Release Pipeline is triggered, you can control its progression using the following actions. These controls allow you to safely test, pause, fast-track, or halt propagation of feature gate and config changes across pipeline phases.

<img src="https://github.com/user-attachments/assets/519ecada-cce9-4b70-9492-62d21190a85a" />

### Approve
**What it does:**
Kick off a phase that requires a manual approval before rollout begins. This is useful when human verification is required before changes move forward.

**How to use it:**
1. The pipeline will automatically pause at the last completed phase awaiting approval
2. You will receive a notification prompting you to take action
3. Go to the Release Pipeline status page
4. Click the ⋯ menu and select 'Approve'
5. Confirm the action — the next phase will begin rolling out

### Pause
**What it does:**
Stops the bake timer between two phases. Useful if you want to delay rolling out the next phase in order to investigate the current phase. 
:::note
Pause does not stop the current phase — only the timer to move to the next phase.
:::

**How to use it:**
1. Go to the Release Pipeline status page
2. Click the ⋯ menu and select 'Pause'
3. Confirm to pause the bake timer

### Unpause
**What it does:**
Resumes a previously paused bake timer, allowing the pipeline to move to the next phase after the remaining wait time.

**How to use it:**
1. Go to the Release Pipeline status page
2. Click the ⋯ menu and select 'Unpause'
3. Confirm to resume the bake timer

### Skip
**What it does:**
Immediately skips the current phase and moves rollout to the next defined phase. Useful for fast-tracking safe changes.

**How to use it:**
1. Go to the Release Pipeline status page
2. Click the ⋯ menu and select 'Skip'
3. Confirm to resume the bake timer

### Abort
**What it does:**
Halts the release process. The feature gate or dynamic config will revert to its pre-release state, and no further changes will propagate.

**Important:** Aborting a release is an irreversible action. Once aborted, you will need to trigger a new release to restart the process with any modifications.

**How to use it:**
1. Go to the Release Pipeline status page
2. Click the ⋯ menu and select 'Abort'
3. Confirm to resume the bake timer

### Full Roll Out
**What it does:**
Skips all intermediate phases and releases the latest version across all environments and custom attributes once.

**How to use it:**
1. Go to the Release Pipeline status page
2. Click the ⋯ menu and select 'Full Roll Out'
3. Confirm to resume the bake timer
