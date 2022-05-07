---
title: Ultrasound
sidebar_label: Ultrasound
slug: /ultrasound
---

Ultrasound shows the impact that active experiments and feature gates are having on a metric of interest.  This is a powerful tool for root causing unexpected changes in a metric.  

Ultrasound presents a reverse perspective of the [Pulse](/pulse) view. While Pulse measures the impact of a new feature on all your metrics, Ultrasound allows you to focus on a single metric and identify which tests are impacting it the most. 


## How to read Ultrasound
1.	Navigate to the Ultrasound section on the Statsig console: https://console.statsig.com/ 
2.	Select a metric that you want to observe from the selector drop down at the top of the page. 
3.	Select the time window that you want to observe.   
4.	The **Feature Lifts** panel shows two numbers. The number in parantheses is the absolute change in the metric driven by the users in the test group. The **Delta %** is percentage change relative to the topline value of the metric. Both numbers represent the daily average impact over the time window you have selected.

In the example below, the **new_search_algo_v2** is driving an additional 65,070 **add_to_cart** events per day over the last 30 days.  This is equivalent to a 5.98% average daily lift in this metric, which has a daily average of 1.1 million events. 

![image](https://user-images.githubusercontent.com/90343952/167211755-4e87e8e2-2bb4-4bd6-a50f-56f3e5ce68b0.png)


## How lifts are calculated

The impact of an active experiment on the overall topline metric depends on:
* The metric lifts caused by the experiment.  This is the test vs. control comparison you see in Pulse.
* The number of users participating in the test group, which depends upon the targeting gate, layer allocation, and test group size.  A large relative lift from a small experiment may have negligible impact on the topline metric.  

The topline impact is computed daily and averaged over the selected date.  The exact calculation depends on whether the metric represents an absolute quantity or a ratio.

**Count and sum metrics (event_count, event_dau, sum)**

The absolute impact is derived directly from the experiment results:

![image](https://user-images.githubusercontent.com/90343952/167228987-f7aa186f-ee7b-4944-b4ee-9163cf95d2b4.png)

where *&mu;<sub>t</sub>* and *&mu;<sub>c</sub>* represent the mean metric value for the test and control group, respectively, and *N<sub>t</sub>* is the number of users in the test group.

Knowing the absolute impact and the overall metric value (as seen in the [metrics dashboard](/metrics/console)), we can compute the relative impact:

![image](https://user-images.githubusercontent.com/90343952/167228998-cac03f91-597e-4c17-894c-2a4aff1b3307.png)

**Ratio and mean metrics**
To properly derive the topline impact on a ratio metric we must understand the impact on the numerator (*X*) and denominator (*Y*) separately:

![image](https://user-images.githubusercontent.com/90343952/167229064-f2e0d46d-c620-423e-a786-3a683509d8ba.png)

where *&mu;<sub>X,t</sub>* and *&mu;<sub>Y,t</sub>* represent the average numerator and denominator values for the test group, and similarly for the control group.  *Toplin_X* and *Topline_Y* are the overall numerator and denominator values for the topline metric.

The relative impact for ratio metrics is obtained by dividing the absolute impact by the topline value of the metric that we would expect without this experiment:

![image](https://user-images.githubusercontent.com/90343952/167229114-f3290e10-1b78-4440-b48a-7aa886b0fb17.png)

**Confidence intervals**
To determined whether the impact from a given experiment is statistically significant, we calculate the confidence intervals for each of the impact equations shown above.  The variance is obtained using the Delta method. This properly accounts for the correlation between the various numerator and denominator terms and leverages Taylor expansion to linearize expressions containing non-linear combinations of experiment variables.   




