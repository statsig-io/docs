---
title: Monitor an experiment
sidebar_label: Monitor
slug: /experiments-plus/monitor
keywords:
  - owner:vm
last_update: 2024-10-02 00:20:38 -0700
---

Once you turn on your experiment, you can monitor the health of your experiment and view the exposures for the control and variants groups.

### Monitoring experiment health

To monitor the status of your experiment,

- Navigate to **Experiments** in the left-hand navigation panel in the Statsig console
- Select the experiment you want to monitor

- **Experiment Health Checks** show alerts for problems with the experiment setup. Hover over the icon and click on a check for more details.

  - **Checks started** verifies that config checks are occurring. Available shortly after the experiment starts.
  - **Checks have valid unit type** ensures that config checks contain the unit ID type selected for this experiment (user ID by default). Available when checks begin.
  - **Event metrics have data** checks that events are being logged with unit IDs matching the experiment. If logged events don't have the same unit ID as the experiment exposures, event based metrics won't be available in Pulse. A common cause is running an experiment using an ID type that isn't userID (eg. stableID or a customID) - while events data coming from a system like Segment is missing this identifier to match to. You can look at examples of how to set this [here](/integrations/data-connectors/segment#user-ids-and-custom-ids). Available within an hour after an exposure and event have been logged by the same unitID.
  - **Pulse metrics available** monitors availability of Pulse results, which are expected on the day after the experiment starts.
  - **Exposures are balanced** checks that the number of units exposed in each group matches the expected allocation. The Sample Ratio Mismatch (SRM) check is performed using a Chi-Squared test of independence. It is possible for experiments to temporarily show small imbalances simply due to the randomness of the user assignment. These will often resolve on their own after a couple days, while true SRM imbalances that originate from systematic assignment/logging problems tend to persist over time. The following thresholds are used for displaying SRM alerts:

    - **p-value between 0.001 and 0.01**: Warning (yellow) for possible imbalance. The p-value is not low enough to confidently say that there is a real imbalance. In this case the recommendation is to wait and check again the next day.
    - **p-value < 0.01 and group size differs from expected size by less than 0.1% absolute**: Warning (yellow) indicating that an imbalance is possible, but the impact to the experiment is expected to be small. This scenario typically occurs in large web experiments (1M+ users) where small variations in performance across groups can cause a small fraction of exposures to be dropped for certain groups more than others.
    - **p-value < 0.001 and more than 0.1% absolute deviation from expected group size**: Alert (red) meaning there is likely a problem with the experiment exposures and experiment results may not be trustworthy.

    Read [more](/stats-engine/methodologies/srm-checks) on our SRM methodology and Statsig's debugging tool.

  - **Crossover units detected** checks for a high percentage (over 0.1%) of units that were exposed to more than one variant. These units are considered invalid for pulse metric calculation since their responses cannot be reliably attributed to a single group. We include them in the group-level statistics as they don't introduce bias generally, assuming the behavior of crossing over happens across the board. This check is ephemeral, only appearing when the alert is triggered.

    Potential reasons that caused crossover units:

    1. if any exposure in the log stream shows up with reason `BootstrapStableIDMismatch`, that means you have generated the values for a different stable id.

  If you cannot root cause it, you can reach out to us on slack.

  - **Default value type mismatch** detects if an experiment's fallback default value type has differed from the set parameter type.
  - **Group assignment healthy** verifies that your SDKs are configured correctly and surfaces if there are a high percentage of checks with assignment reasons like "Uninitialized" or "InvalidBootstrap" which might indicate experiment assignment is not configured correctly. You can view an hourly breakdown of assignment reason via the **View Assignment Reasons** CTA. To better understand what each assignment reason means, see our breakdown [here](/sdk/debugging).

![Screen Shot 2024-01-10 at 1 24 02 PM](https://github.com/statsig-io/docs/assets/101903926/afd2d1f4-8c2d-42a2-99ed-c2f301e8625a)

![Screen Shot 2024-01-10 at 1 27 19 PM](https://github.com/statsig-io/docs/assets/101903926/3696383e-7e56-4a9b-87aa-cb92a8c9517a)

### Monitoring exposures

To monitor the exposures for all variants and control groups,

- Navigate to **Experiments** in the left-hand navigation panel in the Statsig console
- Select the experiment that you want to monitor
- Click the **Results** tab and
- The **Cumulative Exposures** panel shows the exposures for each variant in your experiment over time (as shown below)

![image](https://user-images.githubusercontent.com/1315028/129122046-6d61f5fb-ed26-49d7-a774-52604c1aaa3a.png)
