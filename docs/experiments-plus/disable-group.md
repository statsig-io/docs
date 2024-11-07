---
title: Disable a Group
sidebar_label: Disable a Group
slug: /experiments-plus/disable-group
---

## Disabling a Group in an Experiment

Sometimes you start an experiment with multiple test groups, only to find that one of the groups is performing very poorly or creating bad user experiences. The other test groups are fine and you want to keep them running, but stop the bad experiences. For these situations, we allow you to disable an experiment group.

:::info Note
- The group will continue to show up in diagnostics charts, exposures stream, and Pulse - but the users will be seeing the control experience. We keep showing the group and logging exposures so that you can verify that the user experiences have recovered after the group was disabled.
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
