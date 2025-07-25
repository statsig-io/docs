---
title: Data Health Checks
sidebar_label: Health
slug: /metrics/health-checks
keywords:
  - owner:shubham
last_update:
  date: 2025-03-21
---

### Monitoring Data Health

To monitor the health of your data,

- Navigate to **Metrics** in the left-hand navigation panel in the Statsig console
- Select the **events** tab at the top

- **Data Health Checks Card**

![Screen Shot 1402-04-06 at 15 31 53](https://github.com/statsig-io/docs/assets/133702265/07997263-9840-4e09-ae2f-e709e852df71)

- The data health checks card displays the results of the health checks that are run on your data. If any health check fails, the card is automatically expanded revealing the health check results.
- Hover over the icon and click on a check for more details.

- Viewing these health checks can help you identify any anomalies or issues with the data. By monitoring these health checks, you can ensure the reliability and accuracy of your metrics. To monitor the health of your Data, the following health checks are performed.

### Health Check Details

- **Event Count Health Check**

  - The Event Count Health Check flags the data if the percentage difference in number of events ingested today differs from the previous day falls outside a dynamically set bound.
    The bound is computed by leveraging the day-to-day percentage difference data across all companies for the past 30 days.

  - The percentage difference is computed with respect to the minimum of the two values.

  - The upper bound is set as two standard deviations above the mean of percentage differences
  - The lower bound is set as two standard deviations below the mean of percentage differences

  - **Thresholds**

    - $Event\ Count\ >\ 100,000$  
      and one of the following:
    - $\frac{|Event\ Count_{Today}\ -\ Event\ Count_{Yesterday}|}{min(Event\ Count_{Today}\ ,\ Event\ Count_{Yesterday})} > Upper\ Bound\%$
    - $\frac{|Event\ Count_{Today}\ -\ Event\ Count_{Yesterday}|}{min(Event\ Count_{Today}\ ,\ Event\ Count_{Yesterday})} < Lower\ Bound\%$

- **Frequency Health Check**

  - The Frequency Health Check displays as many rows as there are unique unit type in the data. For each unit type, the health check flags the row if an ID appears a lot more frequently than any other ID. It helps identify cases where certain IDs are disproportionately represented in the data.

  - **Thresholds**

    - $Frequency > 1,000$
    - $\frac{Frequency}{\sum Frequency} > \frac{1}{\log_{2}(Frequency)}$

- **Data Processed Health Check**

  - The Data Processed Health Checks displays a row for each event type up to 10 rows. For each event type, the health check flags the row if number of events ingested divided by the number of events submitted is less than 95%. It ensures that a high percentage of the submitted events are successfully processed and ingested.

  - **Thresholds**

    - $Rows Ingested > 1,000$
    - $\frac{Rows Processed}{Rows Ingested} < 95\%$

- Monitoring data health is crucial for ensuring the validity and effectiveness of your experiments. Regularly checking these health checks allows you to identify any issues early on and make informed decisions based on reliable data.
