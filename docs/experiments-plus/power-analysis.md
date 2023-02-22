---
title: Power Analysis
sidebar_label: Power Analysis
slug: /experiments-plus/power-analysis
---

The power analysis tool leverages past data for a given metric to estimate the relationship between three variables:
* Minimum detectable effect (MDE): The smallest change in the metric that the experiment can detect.  For example: An MDE of 1% means that if there's a true effect of 1% or larger on our metric, we expect the experiment will show a statistically significant result.  If the effect is smaller than 1%, then it will likely fall inside the confidence intervals and not be statistically significant.  
* Number of days: How long the experiment is active.  Longer running experiment typically have more observations, leading to tighter confidence intervals and smaller MDE.  We use historical data to estimate the number of new users that would be eligible for the experiment each day.
* Allocation: The percentage of traffic that participates in the experiment.  Larger allocation leads to smaller MDE, so it's often desirable to allocate as many users as possible to get faster or more sensitive results.  When there's a risk of negative impact however, it's useful to know the smallest allocation that can achieve the desired MDE. 

### Using the Tool

To begin, launch the tool from the experiment creation flow: 

   ![image](https://user-images.githubusercontent.com/90343952/145107332-49befa18-3ca0-4cde-89cb-e80a1663754c.png)
   
1. Select a metric of interest
2. Select the type of analysis to perform
3. Click on **Start Calculation** to see the results

   ![image](https://user-images.githubusercontent.com/90343952/145108695-097fc8f3-1008-4cf9-866e-5e3b7d2dc85c.png)

### Fixed MDE Analysis

Choose this option if the smallest effect size that the experiment should detect is known.  Enter the desired MDE as a percentage of the current metric value.  For example: If a website currently gets 1,000 clicks per day, an MDE of 5% means we can detect a change of 50 or more clicks per day.  

The results show the minimum number of days needed to reach this MDE for different allocation percentages.  In the example below, the experiment should run for at least 11 days with 100% allocation or 21 days at 50%. 

   ![image](https://user-images.githubusercontent.com/90343952/145110692-75e23199-1a1d-4cc7-bb53-445e43b9ce53.png)


### Fixed Allocation Analysis

Choose this option to understand how the length of the experiment impacts the MDE.  The example below shows how the MDE for a click count metric shrinks over time in an experiment with 100% allocation.  On the first day the MDE is 64%, after 30 days it's down to 11%.

   ![image](https://user-images.githubusercontent.com/90343952/145121657-c36d37ce-7c19-4088-bd20-6a216a00cd37.png)

### Advanced Options

   ![image](https://user-images.githubusercontent.com/90343952/145122364-02af83d7-ea3d-4b24-8a10-506c1f227f8b.png)


Advanced settings to customize the analysis:
* **One-sided or Two-sided test**: Toggle this setting to select the type of z-test to use for the analysis.  
* **Number of Experiment Groups**: The total number of groups in the experiment, including control.
* **Test Group Size**: Default is 1, meaning the test and control groups are the same size.  For different sized groups, enter the multiplier applied to the test group size.  E.g.: 0.5 means the test group is half the size of the control group. 
* **ID Type**: The Unit ID type that the experiment will be based on.
* **Custom Date Range**: The date range for past data used to obtain the metric mean, variance, and estimate of the total available traffic.  By default, the most recent 7 days are used.  Use this feature to exclude holidays or other events that are not representative of typical data trends expected during the experiment.  A 7 day period is recommended to account for weekly seasonality.  

### Calculation Details

The relative percentage MDE for a given metric *X* is computed using the following equation:

![image](https://user-images.githubusercontent.com/90343952/220699401-79cfc732-e7c8-431a-8a3e-72f1d83e1339.png)

* *X-bar* is the mean metric value across all users 
* *var(X)* is the population variance of the metric  
* *N<sub>test</sub>* and *N<sub>control</sub>* are the estimated number of users in the test and control group. These are based on historical active user data along with experiment allocation and group size.
* *Z<sub>1-&beta;</sub>* is the standard Z-score for the selected power.  Typically *1-&beta; = 0.8* and *Z<sub>1-&beta;</sub> = 0.84*
* *Z<sub>1-&alpha;/2</sub>* is the standard Z-score for the selected significance level in a 2-sided test.  Typically *&alpha; = 0.05* and *Z<sub>1-&alpha;/2</sub> = 1.96*

**Note:** This calculation relies on statistics computed across the entire user base of the project.  It does not account for the fact that experiments targeting only a subset of users may have different summary statistics for their key metrics.  For example, the metric mean and variance can be different in an experiment that targets only Android users or one that exposes users at the lower part of an acquisition funnel. 
