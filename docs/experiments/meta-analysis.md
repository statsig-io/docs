---
title: Meta-Analysis
sidebar_label: Meta-Analysis
slug: /experimentation/meta-analysis
---

## The Concept
As teams run a number of experiments, it is possible to glean learning across these experiments. This is meta-analysis. We're rolling out a suite of meta-analysis features this summer - feel free to reach out to help influence our roadmap in Slack. 

## Experiment Timeline View
This view lets you to filter down to experiments a team has run. At a glance you can answer questions like
1. What experiments are running now?
2. When are they expected to end?
3. What % of experiments ship Control vs Test?
4. What is the typical duration?
5. Do experiments run for their planned duration - or much longer or shorter?
6. Do experiments impact key business metrics - or only shallow or team level metrics?
7. How much do they impact key business metrics?
![image](https://github.com/statsig-io/docs/assets/31516123/215f42b0-f3a1-46cd-a396-c2a2f3fd6561)

## Metric Correlation View
This view lets you visualize two metrics (each data point is an experiment) and visually inspect them for correlation. 

Often the metric you want to move isn't very sensitive and takes a while to measure. It is helpful to find metrics that are more sensitive and faster to measure - and run experiments on this.

This view lets you plot two metrics on the same chart - each data point is an experiment's impact on them. You can quickly get a sense for whether the metrics tend to move together - or not. You can also remove outliers, filter down to a team's experiments or download the underlying dataset.

In this hypothetical example - "Checkouts" is the metric you want to move, but it's not very sensitive. "AddToCart" correlates well with "Checkouts", while "ViewItemDetail" doesn't.
![image](https://github.com/statsig-io/docs/assets/31516123/016285b0-cdc4-46a4-8fdf-204b20b5b0e4)

![image](https://github.com/statsig-io/docs/assets/31516123/c29e5d7d-d8b6-4841-acaf-8d521a5db398)

## Metric Impact (Batting Average)
The "batting average" view lets you look at how easy or hard a metric is to move. You can filter to a set of shipped experiments and see how many experiments moved a metric by 1% vs 10%. This quickly gives you a sense for whether betting your next experiment will move this by 15% is a good idea. Like with other meta-analysis views, you can filter down to a team, a tag or even if results were statistically significant. 

![image](https://github.com/user-attachments/assets/6e1807aa-42e1-4c98-86cb-e09e3c2c4a90)


## Metric Insights
This view lets you pick a metric and see all experiments and feature rollouts that impact this metric. [Learn more](https://docs.statsig.com/insights).

![image](https://github.com/statsig-io/docs/assets/31516123/6f7daa5e-adf3-4e3c-a9dd-53f7cb8e5498)
