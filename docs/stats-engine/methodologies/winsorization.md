---
title: Winsorization
sidebar_label: Winsorization
slug: /stats-engine/methodologies/winsorization
---

## Winsorization

Winsorization is a common technique for removing noise in experiment results, specifically from outliers.

Winsorization refers to the practice of measuring the percentile Px of a metric and setting all values over Px to Px.

At Statsig, the default percentile for winsorization is 99.9%. This reduces the influence of extreme outliers caused by factors such as logging errors or bad actors.

Winsorization is applied to to sum and event count metrics, including imported metrics. Winsorization will not be applied to Mean, Ratio, Funnel, Participation, or User Accounting metrics.
