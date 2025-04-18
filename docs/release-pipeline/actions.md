---
title: Manage an Ongoing Release Pipeline
sidebar_label: Manage Actions
slug: /release-pipeline/actions
keywords:
  - owner:shubham
last_update:
  date: 2025-04-18
---

# Managing Release Actions

Once a Release Pipeline is triggered, you can control its progression through the available actions. These actions allow you to manage how and when changes move through your defined pipeline phases.

## Approving a Phase

When a phase in your Release Pipeline requires manual approval:

1. The pipeline will automatically pause at the transition point
2. A notification will appear in the status banner at the top of the page
3. Navigate to the release details view
4. Click the **Approve** button to allow the release to continue to the next phase
5. Confirm your decision in the dialog that appears

**Note:** Only users with appropriate permissions in your organization can approve phase transitions.

![Approving a phase transition](/img/release-pipeline/approve.png)

## Aborting a Release

If you detect issues or concerns during the release process:

1. Navigate to the release details view for the active pipeline
2. Click the **Abort** button
3. Confirm your decision in the dialog that appears
4. The system will immediately halt the release process and revert all changes
5. The feature gate or dynamic config will return to its previous state

**Important:** Aborting a release is an irreversible action. Once aborted, you will need to trigger a new release to restart the process with any modifications.

![Aborting an active release](/img/release-pipeline/abort.png)

## Best Practices for Managing Releases

When working with Release Pipelines, consider these recommendations:

- Always thoroughly test changes in early phases before approving progression
- Monitor relevant metrics during each phase to detect any unexpected behavior
- Document the reason for any abort actions to help improve future releases
- Coordinate with team members when managing critical releases
- Set up appropriate notifications to alert the team when approval is required

## Viewing Release History

All release actions are recorded in the history of the feature gate or dynamic config for future reference and auditing purposes.
