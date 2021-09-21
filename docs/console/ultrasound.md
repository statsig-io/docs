---
sidebar_label: Ultrasound
title: Ultrasound
---

So far we have seen how we can measure the metrics lift for a feature. Ultrasound pivots that and shows you how a specific metric is affected by a set of features.

To use it, just select a metric and a date range. You'll be shown a list of features with their average daily effect. The effect is reported as the absolute delta of the test group (between the true test group and a control group of the same size). The percent shown is of the topline value of the metric each day (again averaged across the days).

![Screen Shot 2021-09-21 at 2 00 18 PM](https://user-images.githubusercontent.com/77301670/134251623-4f64a255-7dd5-41c9-9790-5bf80cf61828.png)

To debug a drop in your metric, select the entire range of time that the drop has been noticed (ex. for a drop started a week ago, choose "Last 7 days").
