---
title: Metric Deltas
sidebar_label: Metric Deltas
slug: /stats-engine/metric-deltas
---

## Computing Metric Deltas

A metric delta refers to the difference in metric values between the test and control groups.  This is usually the impact we care about when looking at experiment results.  To account for the different number of users (or units) that constitute each group, we compare the mean metric value per user, not the total.  

Two different metric deltas are available in Pulse.  The **absolute delta** is simply the difference between the two means:

![image](https://user-images.githubusercontent.com/90343952/167957643-918eb0f4-cf4b-44df-9fbd-c617bc751232.png)

It's often helpful to understand the impact relative to the baseline value of the metric. For example, an absolute delta of +1 clicks/user has different meanings with a baseline value of 1 (+100% increase) vs. a baseline value of 100 (+1% increase).  The **relative delta** is computed using the mean of the control group as the baseline:

![image](https://user-images.githubusercontent.com/90343952/167957805-1c2328e7-5909-4f72-afc3-7f8096750168.png)

## Computing Means

Properly computing the groups means is critical for obtained meaningful metric deltas. The exact methodology for calculating the metric means depends on the type of metric.

### Event Count and Sum Metrics

These metrics represent totals: Number of times an event occurs, sum of time spent, total purchase amount, etc.  The mean is the average user-level total during the time period of the analysis.

The mean value of the metric *X* is given by:  

![image](https://user-images.githubusercontent.com/90343952/167957910-dde0c585-5fde-4fcf-9722-dfd2f048036f.png)

where 
* *N* is the number of users in the group 
* *n<sub>i</sub>* is the number of days during the analysis period that user *i* was the experiment
* *X<sub>i,d</sub>* is the metric value for user *i* on day *d*  

Note that only user metrics recorded after a user has been exposed to the experiment are included in the group mean.

###  Event DAU and User Accounting Metrics

Event DAU metrics capture the number of distinct users that have the event each day.  In Pulse results, they are normalized by the number of days the user has been in the experiment.  This represents the probability that a user is daily active for that event, i.e. the daily participation rate.  In the terms defined above, the event DAU group mean is given by:

![image](https://user-images.githubusercontent.com/90343952/167958004-7e1257d5-5a34-4d32-928f-2de185cf5569.png)

The following user accounting metrics are computed in the same may: *DAU, WAU, MAU_28day, L7, L14, L28*

For new user accounting (*new_DAU, new_WAU, new_MAU_28day*) we count users that are new xAU at some point during the analysis window.  So the group mean is given by:

![image](https://user-images.githubusercontent.com/90343952/174866462-aff0ce19-6e9e-497e-9021-e4e6c595bca4.png)

Where *max(X<sub>i</sub>)* is the maximum value of the new xAU metric for user *i*.

### Custom Ratios, Means, Retention and Stickiness Metrics

These are metrics such as click through rate, average purchase value, sessions per user, etc. They're obtained by diving a numerator value, *X*, by a denominator value, *Y*.  The mean value of a ratio metric *R* for an experiment group is given by:

![image](https://user-images.githubusercontent.com/90343952/167958053-044b0554-e33e-406b-8119-1a748a187fe1.png)

Where *N* is the number of users in the experiment group that participate in the metric, i.e. have a non-zero denominator value. *X<sub>i,d</sub>* and  *Y<sub>i,d</sub>* are the *X* and *Y* values for user *i* on day *d*. 

Different approaches exist for dealing with ratio metrics in experiments.  This implementation was selected because it's statistically sound as well as interpretable, given that:  
* *R* is the ratio of two means of independent observations: A set of user-level *X* values and a set of user-level *Y* values.  This means the central limit theorem can be used to separately obtain the summary statistics of *X* and *Y*.          
* The group means are computed in the same way as the topline metric value, making it easier to interpret the means and relate them to the topline metric.

