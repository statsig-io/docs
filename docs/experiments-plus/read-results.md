---
title: Reading Experiment Results
sidebar_label: Read Results
slug: /experiments-plus/read-results
---


### Reading experiment results

To read the results of your experiment, you can zoom straight into your key metrics as well as starred metrics and metric tags that are relevant for your experiment. 
You can also deep dive into how all your metrics shifted with the experiment.   

#### Key Metrics
The **Key Metrics** panel shows how your primary experiment metrics for each variant compared against the control.

In the example below, neither the **Square** nor the **Circle** variant have statistically significant changes in any key metrics compared to **Rounded Square (control)**. This is represented by the gray Overall Lift symbols and large p-values.

Other information displayed for key metrics includes:
* Overall Value: The total value of the metric aggregated over the entire analysis time period. Example: Total purchase events logged for each group.
* Average per User: The average metric value per user for each group.  Example: Average number of purchase events per user during the course of the experiment. 
More details on the values presented for each metric type are available in the [Metrics Docs](https://docs.statsig.com/metrics)
   
![image](https://user-images.githubusercontent.com/90343952/160920867-d77173f7-1996-41ad-a1ae-c506423bb70b.png)


#### Metrics Lifts
The **Metrics Lifts** panel shows how your *starred* or *tagged* metrics compare against the control. You can also see how *all* your other metrics compare against the control in the **All Metrics** section as shown below.
 

![image](https://user-images.githubusercontent.com/1315028/148863304-7fed87d0-b9e5-43de-84b3-b70cc08c2d62.png)

### Significance Level Settings

These settings can be adjusted at any time to view Pulse results with different significance levels.  

* **Apply Bonferroni Correction**: Select this option to apply the correction in experiments with more than one test group. This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Confidence Interval**: Changes the confidence interval displayed with the metric deltas.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.


![image](https://user-images.githubusercontent.com/90343952/149221247-f78d382d-49e1-4a52-bcb5-02e8ad2121d8.png)


   

