---
title: Insights
sidebar_label: Insights
slug: /insights
keywords:
  - owner:vm
last_update:
  date: 2025-02-27
---

Insights shows the impact that active experiments and feature gates are having on a metric of interest.  This is a powerful tool for root causing unexpected changes in a metric.  

Insights presents a reverse perspective of the [Pulse](/pulse/read-pulse) view. While Pulse measures the impact of a new feature on all your metrics, Insights allows you to focus on a single metric and identify which tests are impacting it the most. 


## How lifts are calculated (for Cloud)

The impact of an active experiment on the overall topline metric depends on:
* The metric lifts caused by the experiment.  This is the test vs. control comparison you see in Pulse.
* The number of users participating in the test group, which depends upon the targeting gate, layer allocation, and test group size.  A large relative lift from a small experiment may have negligible impact on the topline metric.  

We calculate **Topline Effect %** and **Absolute Effect** to measure the impacts. They are computed daily and averaged over the selected date.  The exact calculation depends on whether the metric represents an absolute quantity or a ratio.

![Screen Shot 2024-05-30 at 10 48 43 AM](https://github.com/statsig-io/docs/assets/167142706/09212042-3d75-41c4-bbb1-d92ae303b880)


**Count and sum metrics (event_count, sum)**

The absolute impact is derived directly from the experiment results:

![Screen Shot 2024-05-30 at 12 12 18 PM](https://github.com/statsig-io/docs/assets/167142706/f6db4f59-8dfe-41c4-91da-a4d647321b79)

where *&mu;<sub>t</sub>* and *&mu;<sub>c</sub>* represent the mean metric value for the test and control group, respectively, and *N<sub>t</sub>* is the number of users in the test group.

Knowing the absolute impact and the overall metric value (as seen in the [metrics dashboard](/metrics/console)), we can compute the relative impact:

![image](https://user-images.githubusercontent.com/90343952/167228998-cac03f91-597e-4c17-894c-2a4aff1b3307.png)

**Ratio and mean metrics**
To properly derive the topline impact on a ratio metric we must understand the impact on the numerator (*X*) and denominator (*Y*) separately:

![image](https://user-images.githubusercontent.com/90343952/167229064-f2e0d46d-c620-423e-a786-3a683509d8ba.png)

where *&mu;<sub>X,t</sub>* and *&mu;<sub>Y,t</sub>* represent the average numerator and denominator values for the test group, and similarly for the control group.  *Topline_X* and *Topline_Y* are the overall numerator and denominator values for the topline metric.

The relative impact for ratio metrics is obtained by dividing the absolute impact by the topline value of the metric that we would expect without this experiment:

![image](https://user-images.githubusercontent.com/90343952/167229114-f3290e10-1b78-4440-b48a-7aa886b0fb17.png)

**Confidence intervals**
To determined whether the impact from a given experiment is statistically significant, we calculate the confidence intervals for each of the impact equations shown above.  The variance is obtained using the Delta method. This properly accounts for the correlation between the various numerator and denominator terms and leverages Taylor expansion to linearize expressions containing non-linear combinations of experiment variables.   

### How to read Insights
1.	Navigate to the Insights section on the Statsig console: https://console.statsig.com/ 
2.	Select a metric that you want to observe from the selector drop down at the top of the page. 
3.	Select the time window that you want to observe.
4.	With Relative Lifts toggle ON, it will show the delta that is observed in gate/experiment. Note that all results are without CUPED.
5.	With Relative Lifts toggle OFF, it will show you the daily topline delta. You can find how these numbers are calculated below.

In the example below, the group 'Item You May Like' in **homepage_banner** is driving an 0.66% average daily lift in this metric, which contributes to 0.11% increase of topline value and estimated launch impact of 0.64%. 

<img width="1263" alt="Screen Shot 2025-02-26 at 11 43 47 PM" src="https://github.com/user-attachments/assets/ce5ca33b-d6e4-4dcd-80c5-e55a9e86fd9e" />


## How lifts are calculated (for Warehouse Native)

We calculate **Relative Effect %** and **Absolute Effect** to measure the impacts. The exact calculation depends on whether the metric represents an absolute quantity or a ratio.

![Screen Shot 2024-05-30 at 10 55 13 AM](https://github.com/statsig-io/docs/assets/167142706/5c0323eb-23ed-4bc1-936b-64141fd4de85)

**Count and sum metrics**

The relative effect and absolute effect are derived directly from the experiment results:

![Screen Shot 2024-05-30 at 12 12 18 PM](https://github.com/statsig-io/docs/assets/167142706/f6db4f59-8dfe-41c4-91da-a4d647321b79)

![Screen Shot 2024-05-30 at 12 23 11 PM](https://github.com/statsig-io/docs/assets/167142706/9ac3cc6f-b7c9-454e-b9e4-0fe4845be6e5)

where *&mu;<sub>t</sub>* and *&mu;<sub>c</sub>* represent the mean metric value for the test and control group, respectively, and *N<sub>t</sub>* is the number of users in the test group.

**Ratio and mean metrics**

The relative effect and absolute effect are derived directly from the experiment results:

![Screen Shot 2024-05-31 at 10 47 14 AM](https://github.com/statsig-io/docs/assets/167142706/95e02071-30c2-412f-8fd7-4ae9dd95ae17)

![Screen Shot 2024-05-30 at 1 13 06 PM](https://github.com/statsig-io/docs/assets/167142706/015158e6-fb8d-47cb-b1ef-10c8b8670d53)

where *&mu;<sub>X,t</sub>* and *&mu;<sub>Y,t</sub>* represent the average numerator and denominator values for the test group, and similarly for the control group.

### How to read Insights
1.	Navigate to the Insights section on the Statsig console: https://console.statsig.com/ 
2.	Select a metric that you want to observe from the selector drop down at the top of the page. 
3.	The **Feature Lifts** panel shows two numbers. The number in parentheses is the absolute change in the metric driven by the users in the test group. The delta % is percentage change relative to the topline value of the metric. 

In the example below, the **halloween_email_campaign_v3** is driving an 145% average daily lift in this metric, which contributes to 7.8% increase of topline value and estimated launch impact of 15.6%. 

<img width="1255" alt="Screen Shot 2025-02-26 at 11 49 07 PM" src="https://github.com/user-attachments/assets/7444b54d-3eba-4179-ad41-752135da86ce" />

