---
title: Power Analysis
sidebar_label: Power Analysis
slug: /experiments-plus/power-analysis
keywords:
  - owner:vm
---

The power analysis tool leverages the known mean and variance of a metric and the observed traffic volume to estimate the relationship between three variables:
* **Minimum detectable effect (MDE)**: The smallest change in the metric that the experiment can reliably detect. For example: An MDE of 1% with Power set to 80% means that if there's a true effect of 1% on our metric, we expect the experiment will have an 80% chance to produce a statistically significant result. If the magnitude of the true effect is smaller than 1%, it will be less likely to produce a statistically significant result (though it can still occur).

* **Number of days or exposures**: How long the experiment is active and the number of users enrolled in it.  Longer running experiments typically have more observations, leading to tighter confidence intervals and smaller MDE.  We use historical data to estimate the number of new users that would be eligible for the experiment each day.

* **Allocation**: The percentage of traffic that participates in the experiment.  Larger allocation leads to smaller MDE, so it's often desirable to allocate as many users as possible to get faster or more sensitive results.  When there's a risk of negative impact or a need for mutually exclusive experiments however, it's useful to know the smallest allocation that can achieve the desired MDE. 

## Using the Tool

Power Analysis Calculator can be accessed from the tools menu. It's also linked on the experiment setup page, underneath the Experiment Duration field.

<img width="506" alt="Power Analysis Navigation" src="https://github.com/user-attachments/assets/976b1ef3-b192-4af7-a63e-43e9256d435a" />
   
1. Select the population used to determine the metric mean and variance and to estimate the number of exposures over time.
    - **Everyone**: Analysis is based on the entire user base.  
    - **Targeting gate**: Analysis is scoped to the set of users who pass the selected feature gate, which must have been active for at least 7 days.  Choose this option when you plan to use a targeting gate for the experiment.  
    - **Past experiment**: Analysis is based on data collected from in a previous experiment.  Use this option when the new experiment will impact a similar user base or part of the product as the previous one.
    - **Qualifying event**: Analysis is scoped to the set of users who logged the event specified.
  
2. Select a metric of interest (or multiple metrics for a targeting gate analysis)
   
3. Click on **Run Power Analysis** to calculate results

<img width="860" alt="Screenshot 2025-03-12 at 7 59 22 AM" src="https://github.com/user-attachments/assets/a74f2b80-cdab-4804-a8cc-ebaa2530ed5d" />

Your past power analysis calculations will be available to view in the "Past Analyses" tab.

<img width="1200" alt="Screenshot 2025-03-12 at 8 04 31 AM" src="https://github.com/user-attachments/assets/82a91aa4-dd3a-4d09-aca4-2de8b43f49e8" />

## Population Types

The population selected directly impacts the inputs of the analysis (mean, variance, number of users).  To obtain reliable power analysis estimates, the metric values of the selected population should roughly match those of the users you'll be targeting in the experiment.  

### Example

Say we want to test a change in the checkout flow and we want to know our expected MDE for total_purchases.  Let's assume that only ~10% of our daily users reach the checkout page.  If we use the *Everyone* population for our analysis, we're likely to:

* Overestimate the number of users that the experiment will get.
* Underestimate the mean value of the total_purchases metric.  The 90% of user that don't reach the checkout page have a value of zero, but in practice they won't be in our experiment and won't contribute to the metric.
* Incorrectly estimate the variance in the total_purchases metric.  The distribution of metric values is different if we include the 90% of users that have 0 purchases because they never reached the checkout page.

Thus, in cases when the experiment only includes a biased subset of users, it's possible the MDE and duration obtained by the power analysis won't be a good estimate. 

One way to address this is to use data from a past experiment to estimate the power of a new, similar experiment (coming soon!).  In our example, if we had a prior experiment that was also targeting the checkout page, we could use it to get better estimates of traffic volumes and metrics for this part of the product.

### Inputs by Population Type

This is how the various inputs for the power analysis are obtained from the different population types:

| Population       | Mean and Variance Calculation       | Total Exposures by Week Estimate         |
|------------------|-------------------------|----------------|
| Everyone         | Mean and variance across all users, estimated for 1, 2, 3, and 4 week rollups   | Total count of users seen in the past 1, 2, 3, and 4 weeks |
| Targeting Gate   | Mean and variance for users that pass the targeting gate, computed for 1, 2, 3, 4 week rollups | Total users that passed the targeting gate after 1, 2, 3, 4 weeks |
| Past Experiment  | Cumulative mean and variance for the control group at 1, 2, 3, and 4 weeks | Total experiment exposures after 1, 2, 3, and 4 weeks, adjusted according to the past experiment's allocation and the desired allocation for the new experiment.
| Qualifying Event | Mean and variance for users who logged a specified event, computed for 1, 2, 3, 4 week rollups | Total users who logged a specified event after 1, 2, 3, 4 weeks |


## Analysis Types

When looking at the results, you can modify certain inputs like "# of Groups", "Control Group %", and Analysis Types to update your power analysis results based on your updated inputs.

<img width="1200" alt="Screenshot 2025-03-12 at 8 07 59 AM" src="https://github.com/user-attachments/assets/110ee88a-6bf7-4be8-b419-1626ee562fe5" />
      
### Fixed Allocation Analysis

If you already know the available allocation, fixed allocation allows you to understand how the length of the experiment impacts the MDE. The example below shows how the MDE for a page load metric shrinks over time in an experiment with 100% allocation.  After 1 week we expect 5200 users per group and an MDE of 21.6%, by week 4 the number of users per group should increase to ~48k and the MDE is reduced to 7%.

   ![image](https://github.com/statsig-io/docs/assets/90343952/c3b5e22c-951e-4ef1-84a9-0b935a2e18e8)

### Fixed MDE Analysis

If you already know the effect size you want to measure, fixed MDE analysis allows you to understand the allocation and duration needed for desired MDE. Enter the desired MDE as a percentage of the current metric value.  For example: If a website currently gets 1,000 page loads per day, an MDE of 10% means we can detect a change of 100 or more page loads per day.  

The results show the minimum number of weeks needed to reach this MDE for different allocation percentages.  In the example below, the experiment should run for at least 2 weeks with 65% allocation or 4 weeks with 50% allocation.  There's no way achieve the desired MDE in 1 week, as this would require more than 100% allocation (more users than we expect to see in one week).

   ![image](https://github.com/statsig-io/docs/assets/90343952/494a847a-89a0-4487-86e5-a4d453e04fb1)

## Advanced Options

   ![image](https://user-images.githubusercontent.com/90343952/145122364-02af83d7-ea3d-4b24-8a10-506c1f227f8b.png)


Advanced settings to customize the analysis:
- **Number of Experiment Groups**: The total number of groups in the experiment, including control.
- **Control Group %**: What percent of users will be in the control group, e.g. 50% if half of all users will be control.
- **Fixed Allocation or Fixed MDE Analysis**: Different types of analyses you want to run. See [here](https://docs.statsig.com/experiments-plus/power-analysis/#analysis-types) for more details.
- **One-sided or Two-sided test**: Toggle this setting to select the type of z-test to use for the analysis.
- **Significant Level (α)**
- **Power (1-β)**
- **Bonferroni Correction Per Variant**: Whether to include α correction for multiple tests in power analysis.

## Calculation Details

The relative percentage MDE for a given metric *X* is computed using the following equation:

![image](https://user-images.githubusercontent.com/90343952/220699401-79cfc732-e7c8-431a-8a3e-72f1d83e1339.png)

* *X-bar* is the mean metric value across all users 
* *var(X)* is the population variance of the metric  
* *N<sub>test</sub>* and *N<sub>control</sub>* are the estimated number of users in the test and control group. These are based on historical active user data along with experiment allocation and group size.
* *Z<sub>1-&beta;</sub>* is the standard Z-score for the selected power.  Typically *1-&beta; = 0.8* and *Z<sub>1-&beta;</sub> = 0.84*
* *Z<sub>1-&alpha;/2</sub>* is the standard Z-score for the selected significance level in a 2-sided test.  Typically *&alpha; = 0.05* and *Z<sub>1-&alpha;/2</sub> = 1.96*

**Note:** This calculation relies on statistics computed across the entire user base of the project.  It does not account for the fact that experiments targeting only a subset of users may have different summary statistics for their key metrics.  For example, the metric mean and variance can be different in an experiment that targets only Android users or one that exposes users at the lower part of an acquisition funnel. 
