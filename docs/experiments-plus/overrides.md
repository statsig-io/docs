---
title: Overrides
sidebar_label: Overrides
slug: /experiments-plus/overrides
---

## Override group allocation for an Experiment

During development, it can be useful to explicity state which experiment group a user should fall into. For example, if a developer is testing that each of the experiment conditions work as expected, they may want to force themselves into each of the different conditions to test.

Overrides can be added based on Feature Gates and Segments, and will allow you to create rules that force all users that pass a given Feature Gate or Segment to be allocated to a given group. When fetching parameters for an experiment, if the user matches any of the overrides, the overriden result will be returned immediately.

:::info Note
- For Experiments that are in a Layer, the overrides are set at the Layer level, and a user can only be overridden in to one Experiment within that Layer.
- When you add an override to an Experiment, the metrics for users allocated to the group via the override will not be counted towards the Pulse results for that group. As a result, adding overrides that change the allocation for a significant number of users can have adverse effects on the reliability of your experiment results.
:::

### Adding an Override

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Experiments**
- Select the experiment where you want to add an Override, and navigate to the Setup tab
- Click the **Manage Override** button, configure the override, and hit **Save**

### Deleting an Override

If you add an override but later decide it is no longer needed. You can remove it so the rules will be evaluated as normal.

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Experiments**
- Select the Experiment or Layer from which you want to delete the Override
- Click the **Manage Overrides** button
- Click on the trash can icon next to the override you would like to delete, and hit **Save**

### Testing an Override

Once your override has been added, you can test it in the "Check Group for a User" window by navigating to the **Diagnostics** tab, and then adding the necessary properties that would be required to make a user pass the gate or segment that was added as an override.