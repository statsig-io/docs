---
title: Experiment Diagnostics
slug: /statsig-warehouse-native/features/monitor-an-experiment
sidebar_label: Diagnostics
description: Monitor the health of experiments
---

Once you turn on your experiment, you can monitor the health of your experiment and view the exposures for the control and variants groups.

### Monitoring experiment health

To monitor the status of your experiment,

- Navigate to **Experiments** in the left-hand navigation panel in the Statsig console
- Select the experiment you want to monitor
- **Experiment Health Checks** show alerts for problems with the experiment setup. Hover over the icon and click on a check for more details.

  ![Diagnostic health check image](https://github.com/statsig-io/docs/assets/5475308/8b557e40-2473-45e1-ac0c-bd61a2eb5208)

  - **Pulse metrics available** monitors availability of Pulse results, which are expected on the day after the experiment starts.
  - **Exposures are balanced** checks that the number of units exposed in each group matches the expected allocation. The Sample Ratio Mismatch (SRM) check is performed using a Chi-Squared test of independence. It is possible for experiments to temporarily show small imbalances simply due to the randomness of the user assignment. These will often resolve on their own after a couple days, while true SRM imbalances that originate from systematic assignment/logging problems tend to persist over time. The following thresholds are used for displaying SRM alerts:
    - **p-value between 0.001 and 0.01**: Warning (yellow) for possible imbalance. The p-value is not low enough to confidently say that there is a real imbalance. In this case the recommendation is to wait and check again the next day.
    - **p-value < 0.01 and group size differs from expected size by less than 0.1% absolute**: Warning (yellow) indicating that an imbalance is possible, but the impact to the experiment is expected to be small. This scenario typically occurs in large web experiments (1M+ users) where small variations in performance across groups can cause a small fraction of exposures to be dropped for certain groups more than others.
    - **p-value < 0.001 and more than 0.1% absolute deviation from expected group size**: Alert (red) meaning there is likely a problem with the experiment exposures and experiment results may not be trustworthy.
  - **Crossover users** monitors the percentage of units which are exposed to more than one experiment group for a given experiment. Statsig discards crossover users from the experiment analysis, which may reduce your sample size and statistical power. The following thresholds are used for displaying crossover users alerts:
    - **Crossover user percentage between 1% and 10%**: Warning (yellow) meaning that the presence of a number of crossover users has been detected, but the impact on the experiment is expected to be relatively small.
    - **Crossover user percentage over 10%**: Alert (red) indicating that there are a substantial number of crossover users, which can indicate a problem with you experiment setup.
  - **User metrics were computed** This check confirms that we were able to join exposure data to metric data and produce experiment results.

  Some health checks are relevant only to end-to-end statsig experiments where the statsig sdk is used for assignment, while some are only relevant for analysis experiments where assignment is handled outside of statsig.

  - **Checks started** (end-to-end only) verifies that config checks are occurring. Available shortly after the experiment starts.
  - **Checks have valid unit type** (end-to-end only) ensures that config checks contain the unit ID type selected for this experiment (user ID by default). Available when checks begin.
  - **Exposures found** (analysis only) verifies that exposures for this experiment are provided, and is populated after pulse is loaded.

  Some health checks are used in experiments where id types are stitched: for example in a sign-up flow experiment where stitching Stable ID to User ID allows for analysis before and after a user is logged in.

  Duplicate mapped IDs happen when the same primary ID is associated with multiple secondary IDs or vice versa. This happens when the primary identifier gets reset, or if there are multiple conversions from the same primary identifier. Deduplication can reduce your sample size and may impact the overall magnitude of your results.

  - **Deduplication Rate Check** reports the percentage of exposures which have duplicate mapped ids across primary and secondary IDs. The following thresholds are used for displaying deduplication rate alerts:
    - **Deduplication rate between 1% and 5%** Warning (yellow) meaning that a number of deduplications have been made which will not be included in analysis, reducing the sample size and potentially impacting the overall magnitude of results.
    - **Deduplication rate greater than 5%** Alert (red) meaning that a substantial number of deduplications have been made which will not be included in the analysis. This can indicate a problem with the experiment setup
  - **Deduplication Bias Check** reports the percentage of exposures which have duplicate mapped ids across primary and secondary IDs in each group and performs a Chi-Squared test of independence. The following thresholds are used for displaying deduplication bias alerts:

    - **p-value between 0.001 and 0.01**: Warning (yellow) indicating possible bias.The p-value is not low enough to confidently say that there is a real imbalance in deduplication rate between groups. In this case the recommendation is to wait and check again the next day.
    - **p-value < 0.001**: Alert (red) meaning that there is likely a problem with deduplication being applied more to one of the treatment groups and experiment results may not be trustworthy.

  - **Pre-experimental Bias Check** In some cases, users in two experiment groups can have meaningfully different average behaviors before your experiment applies any intervention to them. If this difference is maintained after your experiment starts, it's possible that experiment analysis will attribute that pre-existing difference to your intervention. This can make a result seem more or less "good" or "bad" than it really is. CUPED is helpful in addressing this bias, but can't totally account for it. [Learn more](https://docs.statsig.com/stats-engine/pre-experiment-bias).
