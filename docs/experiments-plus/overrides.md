---
title: Overrides
sidebar_label: Overrides
slug: /experiments-plus/overrides
keywords:
  - owner:vm
last_update:
  date: 2025-03-21
---

## Override group allocation for an Experiment

During development, it can be useful to explicitly state which experiment group a user should fall into. For example, if a developer is testing that each of the experiment conditions work as expected, they may want to force themselves into each of the different conditions to test.

Overrides can be added based on Feature Gates and Segments, and will allow you to create rules that force all users that pass a given Feature Gate or Segment to be allocated to a given group. When fetching parameters for an experiment, if the user matches any of the overrides, the overridden result will be returned immediately.

:::info Note
- For Experiments that are in a Layer, the overrides must be set at the Layer level. A user can only be overridden into one Experiment within that Layer (since layers always make experiments within them mutually exclusive).
- It is best to add overrides to your experiment before it starts or at least before a user's first exposure. Users whose first exposures are controlled by overrides are excluded from Pulse results. Since these users are not randomized, we purposely exclude them from experimental results. Adding a large number of users to the override can affect the reliability of your experimental results.
  - Warning: if you add overrides after a user has already been exposed in an experiment, that user will not be excluded from Pulse results. That user's events and metrics will continue to be attributed to the group they were first assigned to. However, the override will be applied and honored once you define it. This can cause your experiment results to be diluted or polluted since the user's actions may be attributed to one group while they were actually exposed to a different group. The overall impact from this issue will depend on how many users fall into this category.
- ID Overrides are evaluated first, then conditional overrides (from top to bottom).
:::

![overrides modal](/img/overrides-modal.png)

### Adding an Override

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Experiments**
- Select the experiment where you want to add an Override, and navigate to the Setup tab
- Click the **Manage Override** button, configure the override, and hit **Save**

![overrides modal](/img/overrides-entry.png)

### Deleting an Override

If you add an override but later decide it is no longer needed. You can remove it so the rules will be evaluated as normal.

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Experiments**
- Select the Experiment or Layer from which you want to delete the Override
- Click the **Manage Overrides** button
- Click on the trash can icon next to the override you would like to delete, and hit **Save**

### Testing an Override

Once your override has been added, you can test it in the "Check Group for a User" window by navigating to the **Diagnostics** tab, and then adding the necessary properties that would be required to make a user pass the gate or segment that was added as an override.
