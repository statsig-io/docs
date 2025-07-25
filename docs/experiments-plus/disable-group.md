---
title: Disable a Group
sidebar_label: Disable a Group
slug: /experiments-plus/disable-group
keywords:
  - owner:vm
last_update:
  date: 2025-04-03
---

## Disabling a Group in an Experiment

Sometimes you start an experiment with multiple test groups, only to find that one of the groups is performing very poorly or creating bad user experiences. The other test groups are fine and you want to keep them running, but stop the bad experiences. For these situations, we allow you to disable an experiment group.

:::info Note
The group will continue to show up in diagnostics charts, exposures stream, and Pulse - but the users will see the default (unassigned) experience. We keep showing the group and logging exposures so that you can verify that the user experiences have recovered after the group was disabled.
:::

### How To

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Experiments**
- Select the experiment where you want to disable a group
- Click on the **...** menu in the top right corner
- Select the **Disable A Group** option
- Select the experiment groups you would like to disable, and hit **Confirm** 

![Screen Shot 2022-06-22 at 9 53 47 AM](https://user-images.githubusercontent.com/88338316/175094935-1dbb9b34-ebbe-467c-9a84-e61aeeb3180f.png)
![Screen Shot 2022-06-22 at 9 57 23 AM](https://user-images.githubusercontent.com/88338316/175095107-2ef5d9e3-4c33-44ec-ac13-937f3b030149.png)

## Reenable a Group

If you've previously disabled a group but want to revert this change, you can reenable a group by using the **...** menu and selecting **Disable or Enable A Group**.

![Screenshot 2025-03-03 at 5 27 17 PM](https://github.com/user-attachments/assets/2fa3cb71-9a46-46f1-bb11-b8e7f07df9c6)
![Screenshot 2025-03-03 at 5 26 42 PM](https://github.com/user-attachments/assets/a56e7f14-53e9-4d41-8266-d70de1ec3ebf)

:::info
Be mindful that users in any reenabled group might have experienced multiple treatment experiences over the course of the experience. This may be reflected in the metric data collected for the group.
:::
