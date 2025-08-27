---
title: Meta-Analysis
sidebar_label: Meta-Analysis
slug: /experimentation/meta-analysis
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

## The Concept
As teams run a number of experiments, it is possible to glean learning across these experiments. This is meta-analysis. Examples of learning people seek to derive include
- How hard is a metric to move
- Are there more sensitive proxies for the metric we care about?
- How are teams doing relative to each other?

We've worked with multiple companies to get them to thousands of trustworthy experiments a year. Our inspiration here was looking at what they were trying to learn across these tests. We've built this to be useful whether you're running 50 experiments a year or 5000. Feel free to reach out to help influence our roadmap in [Slack](https://statsig.com/slack).

## Experiment Timeline View
This view lets you to filter down to experiments a team has run. At a glance you can answer questions like
1. What experiments are running now?
2. When are they expected to end?
3. What % of experiments ship Control vs Test?
4. What is the typical duration?
5. Do experiments run for their planned duration - or much longer or shorter?
6. Do experiments impact key business metrics - or only shallow or team level metrics?
7. How much do they impact key business metrics?
![image](https://github.com/user-attachments/assets/d1e1db49-18b4-46af-93f7-4c0e58c5bdb0)


## Metric Impact (Batting Average)
The "batting average" view lets you look at how easy or hard a metric is to move. You can filter to a set of shipped experiments and see how many experiments moved a metric by 1% vs 10%. Like with other meta-analysis views, you can filter down to a team, a tag or even if results were statistically significant. 
Common ways to use this include
- Sniff testing whether the claim that the next experiment will move this metric by 15% is a good idea.
- Establishing reasonable goals, based on past ability to move this metric

![image](https://github.com/user-attachments/assets/72f987a4-02ba-4937-9f3d-06892c55e4e9)


## Metric Correlation View
This view lets you visualize two metrics (each data point is an experiment) and visually inspect them for correlation. 

Often the metric you want to move isn't very sensitive and takes a while to measure. It is helpful to find metrics that are more sensitive and faster to measure - and run experiments on this.

This view lets you plot two metrics on the same chart - each data point is an experiment's impact on them. You can quickly get a sense for whether the metrics tend to move together - or not. You can also remove outliers, filter down to a team's experiments or download the underlying dataset.

In this hypothetical example - "Checkouts" is the metric you want to move, but it's not very sensitive. "AddToCart" correlates well with "Checkouts", while "ViewItemDetail" doesn't.
![image](https://github.com/statsig-io/docs/assets/31516123/016285b0-cdc4-46a4-8fdf-204b20b5b0e4)

![image](https://github.com/statsig-io/docs/assets/31516123/c29e5d7d-d8b6-4841-acaf-8d521a5db398)


## Metric Insights
This view lets you pick a metric and see all experiments and feature rollouts that impact this metric. [Learn more](/aggregated-impact).

<img width="1003" alt="417923655-430563dc-4794-4d69-a314-36c76a6fcf74" src="https://github.com/user-attachments/assets/8d61ada1-bf1f-41cf-b52b-f01d24052568" />

## Knowledge Bank
The KB acts as a searchable repository of experiment learning across teams. It helps you find shipped, healthy experiments and gain context on past effort and generate ideas on new things to try. 

Make it easy for new team mates to explore and find experiments a team ran, or where a topic was mentioned. Our meta-analysis tools offer more structured  means to discover and look across your experiment corpus, but when you do want free text search, this exists. 
![image](https://github.com/user-attachments/assets/860430c4-a754-4ff8-aa85-8bf49a755801)


