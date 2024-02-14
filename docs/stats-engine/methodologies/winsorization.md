---
title: Winsorization
sidebar_label: Winsorization
slug: /stats-engine/methodologies/winsorization
---

## Winsorization [Statsig Cloud]

Winsorization is a common technique for removing noise in experiment results, specifically from outliers.

Winsorization refers to the practice of measuring the percentile Px of a metric and setting all values over Px to Px.

At Statsig, the default percentile for winsorization is 99.9%. This reduces the influence of extreme outliers caused by factors such as logging errors or bad actors.

Winsorization is applied to to sum and event count metrics, including imported metrics. Winsorization will not be applied to Mean, Ratio, Funnel, Participation, or User Accounting metrics.


## Winsorization [Statsig WHN]

Winsorization is a common technique for removing noise in experiment results, specifically from outliers. It refers to the practice of measuring the percentile Px of a metric and setting all values over Px to Px (and/or setting all values under Px to Px). This reduces the influence of extreme outliers caused by factors such as logging errors, bad actors or whales.

Statsig Warehouse Native lets you configure this per metric - and choose explicitly the upper and/or lower bounds to apply.
![image](https://github.com/statsig-io/docs/assets/31516123/6d058842-27f7-4b6b-9bd8-245a5f894f90)

Winsorization is applied to to sum and event count metrics. Winsorization will not be applied to Mean, Ratio, Funnel or Participation.
