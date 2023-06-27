---
title: Data Health Checks
sidebar_label: Health
slug: /metrics/health-checks
---

Once you turn on your experiment, you can monitor the health of your experiment and view the exposures for the control and variants groups.

### Monitoring Experiment Health

To monitor the health of your experiment, you can perform the following checks:

#### Event Count Health Check

The Event Count Health Check flags the data if the number of events ingested today differs from the previous day by more than 95%, or if it differs from the same day on the week before by more than 50%.

#### Frequency Health Check

The Frequency Health Check flags the data if an ID appears a lot more frequently than any other ID. It helps identify cases where certain IDs are disproportionately represented in the data.

#### Data Processed Health Check

The Data Processed Health Check flags the data if the number of events ingested divided by the number of events submitted is less than 95%. It ensures that a high percentage of the submitted events are successfully processed and ingested.

Performing these health checks can help you identify any anomalies or issues with the experiment setup. By monitoring these health checks, you can ensure the reliability and accuracy of your experiment results.

### Monitoring Exposures

To monitor the exposures for all variants and control groups, you can follow these steps:

1. Navigate to **Experiments** in the left-hand navigation panel in the Statsig console.
2. Select the experiment that you want to monitor.
3. Click the **Results** tab.
4. The **Cumulative Exposures** panel shows the exposures for each variant in your experiment over time.

By monitoring the exposures, you can track the distribution of users across different variants and control groups, enabling you to analyze the impact of your experiment on different user segments.

Monitoring experiment health and exposures is crucial for ensuring the validity and effectiveness of your experiments. Regularly checking these metrics allows you to identify any issues early on and make informed decisions based on reliable data.
