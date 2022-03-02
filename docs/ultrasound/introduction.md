---
title: Ultrasound
sidebar_label: Ultrasound
slug: /ultrasound
---

Ultrasound identifies the combined impact of multiple features on a given metric. In particular, Ultrasound enables you to to recognize which features have had the most impact on a given metric and to root cause what is causing a certain metric to trend up or down. 

Ultrasound presents a reverse perspective of the [Pulse](/pulse) view. While Pulse measures the impact of a new feature on all your metrics, Ultrasound measures the impact of all features on a specific metric. 


## How to read Ultrasound
1.	Navigate to the Ultrasound section on the Statsig console: https://console.statsig.com/ 
2.	Select a metric that you want to observe from the selector drop down at the top of the page. 
3.	Select the time window that you want to observe.   
4.	The **Feature Lifts** panel shows two numbers. The number in parantheses is the absolute number of events triggered by users who were exposed to the selected feature (treatment group). The **Delta %** is the number of events triggered by this treatment group divided by events triggered by users who were NOT exposed to the feature (control group). Both numbers represent the mean of the daily average over the time window you have selected.

In the example below, the **twenty_five_percent_off_items** feature has resulted in average 237 more **add_to_cart** events per day over the last 30 days. This is about 0.11% of 215K **add_to_cart** events from users who didn't see the **twenty_five_percent_off_items** feature.

![image](https://user-images.githubusercontent.com/1315028/134554987-8432f407-e317-416f-bd36-ec3ecf3a95a2.png)
