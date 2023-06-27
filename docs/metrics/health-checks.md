---
title: Data Health Checks
sidebar_label: Health
slug: /metrics/health-checks
---

Viewing these health checks can help you identify any anomalies or issues with the experiment setup. By monitoring these health checks, you can ensure the reliability and accuracy of your experiment results.

# Data Health Monitoring

To monitor the health of your Data, the following health checks are performed.

## Event Count Health Check

The Event Count Health Check flags the data if the number of events ingested today differs from the previous day by more than 95%, or if it differs from the same day on the week before by more than 50%.

### Thresholds

- $event\_count \geq 1,000,000$
  and one of the following:
- $\frac{|Event Count Today - Event Count Yesterday|}{Event Count Yesterday} > 95%$
- $\frac{|Event Count Today - Event Count 1 week ago|}{Event Count 1 week ago} > 50%$

## Frequency Health Check

The Frequency Health Check displays as many rows as there are unique unit type in the data. For each unit type, the health check flags the row if an ID appears a lot more frequently than any other ID. It helps identify cases where certain IDs are disproportionately represented in the data.

### Thresholds

- $Frequency \geq 1,000$
- $\frac{Frequency}{\sum Frequency} > \frac{1}{\log_{2}(Frequency)}$

## Data Processed Health Check

The Data Processed Health Checks displays a row for each event type up to 10 rows. For each event type, the health check flags the row if number of events ingested divided by the number of events submitted is less than 95%. It ensures that a high percentage of the submitted events are successfully processed and ingested.

### Thresholds

- $Rows\_Ingested \geq 1,000$
- $\frac{Rows Ingested}{Rows Processed}$

Monitoring data health is crucial for ensuring the validity and effectiveness of your experiments. Regularly checking these health checks allows you to identify any issues early on and make informed decisions based on reliable data.
