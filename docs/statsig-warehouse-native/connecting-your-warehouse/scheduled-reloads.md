---
title: Scheduled Reloads
slug: /statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads
sidebar_label: Scheduled Reloads
keywords:
  - owner:vm
last_update:
  date: 2025-06-12
---

## Overview
You can control daily reload settings for Metrics and Experiments. While these can be configured on each entity, you can also set defaults that entities can inherit from in your Project Settings. You also have the option of using the Console API to [trigger experiment result loads](/console-api/experiments#post-/experiments/-experiment_id-/load_pulse) (experiment results). This is often used for triggering refreshes when your data pipelines are ready.

<img width="1443" alt="Screenshot 2025-02-27 at 9 03 55 PM" src="https://github.com/user-attachments/assets/d056be8d-19a0-43ae-91e1-cf5e16d23b53" />

![Screenshot 2025-02-27 at 9 12 23 PM](https://github.com/user-attachments/assets/efc232e7-4189-4ee7-b35a-5b1530041c70)

## Feature Gate Pulse Scheduling (Statsig Cloud)

For feature gates in Statsig Cloud, individual Pulse scheduling is available separately from these project-level Warehouse Native settings. This feature allows you to automatically reload Pulse metric data for individual feature gates on a daily basis, ensuring your feature gate analytics stay current without manual intervention.

### Key Differences from Warehouse Native Scheduling

While Warehouse Native provides project-level scheduling for experiments and metrics within your data warehouse, feature gate Pulse scheduling operates differently:

- **Scope**: Individual feature gate level (not project-wide like WHN)
- **Infrastructure**: Runs within Statsig's cloud infrastructure (not your warehouse)
- **Configuration**: Managed per feature gate through the Statsig Console
- **Independence**: Operates separately from WHN scheduled reload settings

### How Feature Gate Pulse Scheduling Works

Feature Gate Pulse scheduling automatically runs daily metric reloads to keep your analytics up-to-date. When enabled, Statsig will reload Pulse data for every partially rolled-out rule in your feature gate at your specified time each day.

**Key Characteristics:**
- **Individual Level**: Available only at the individual feature gate level
- **Daily Schedule**: Runs once per day at your specified UTC time
- **Automatic**: No manual intervention required once configured
- **Partial Rollouts Only**: Only reloads data for rules with partial rollouts (between 0% and 100%)

### Prerequisites for Feature Gate Scheduling

Before you can schedule Pulse reloads for a feature gate, ensure:

1. **Rule Configuration**: Your feature gate must have at least one rule with a partial rollout (between 0% and 100%)
2. **Exposure Data**: Users must be actively encountering your feature gate to generate meaningful analytics
3. **Metrics Setup**: Relevant metrics should be configured to measure the impact of your feature gate

### Accessing Feature Gate Pulse Scheduling

To configure scheduled reloads for a feature gate:

1. Navigate to your feature gate in the Statsig Console
2. Go to the **Pulse Results** tab
3. Look for the scheduling controls in the Pulse interface
4. Click on the scheduling option to open the scheduling dialog

### Configuration Options

#### Reload Time Selection
- Choose from 24-hour UTC options (0-23)
- The interface displays both UTC time and your local timezone equivalent
- Example: "2:00 AM UTC (9:00 PM PST)"
- Select a time that aligns with your data pipeline schedules and team availability

#### Reload Type Options

**Full Reload**
- Reloads all metrics from rollout start date to current date
- Recommended for feature gates where underlying data may change significantly
- Ensures complete data accuracy but uses more compute resources
- Always available for all feature gate configurations

**Incremental Reload**
- Reloads metrics from last reloaded date to current date
- More efficient option that only processes new data
- Recommended for most use cases to minimize compute usage
- May be disabled for certain feature gate configurations (e.g., feature gates with secondary unit types)

### Managing Scheduled Reloads

#### Saving Configuration
After selecting your reload time and type, click **Save** to activate your scheduled reload. Your feature gate will then automatically reload Pulse data daily at the specified time.

#### Editing Existing Schedules
Return to the scheduling dialog to modify reload time or type. The dialog will show "Edit Scheduled Reloads" for feature gates with existing schedules.

#### Canceling Scheduled Reloads
Use the **Cancel Scheduled Reloads** option in the scheduling dialog to stop automatic reloads for a feature gate.

### Troubleshooting Feature Gate Scheduling

**Incremental Reload Option Disabled**
- Feature gates with secondary unit types attached require full reloads
- Certain advanced feature gate setups only support full reloads
- Solution: Use the Full reload option, which is always available

**Scheduling Option Not Available**
- Verify your feature gate has rules with partial rollouts
- Confirm users are actively encountering your feature gate
- Check that you have appropriate permissions to modify feature gate settings

**Scheduled Reloads Not Running**
- Verify your scheduled reload is still active in the scheduling dialog
- Ensure sufficient time has passed since configuration (reloads run daily)
- Confirm your feature gate is still active and generating exposures

### Integration with Data Pipelines

When using feature gate Pulse scheduling alongside Warehouse Native:

- **Timing Coordination**: Consider aligning feature gate reload times with your WHN data pipeline schedules
- **Data Consistency**: Feature gate scheduling uses Statsig Cloud data, while WHN uses your warehouse data
- **Monitoring**: Both systems operate independently, so monitor each separately
- **API Integration**: Use Console API for programmatic control of both WHN and feature gate scheduling

### Future Enhancements

Project-level scheduling settings for feature gates (similar to what exists for experiments in WHN) are planned for future release. This will allow you to set default scheduling preferences that can be inherited by feature gates in your project, providing better integration with Warehouse Native workflows.

If you're looking for data freshness for exposures generated by SDKs, [look here](/statsig-warehouse-native/features/early-diagnostics).
