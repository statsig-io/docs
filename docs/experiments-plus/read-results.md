---
title: Reading Experiment Results
sidebar_label: Read Results
slug: /experiments-plus/read-results
---


### Reading experiment results

To read the results of your experiment, go to the **Results** tab, where you will see your experiment exposures, and then **Metric Lifts**. The **Metric Lifts** section has two main tabs- **Scorecard** and **All Metrics**. 

**Scorecard** shows the metric lifts for all Primary and Secondary metrics you set up at experiment creation as part of the Scorecard. **All Metrics** shows the experiment impact for all metrics in your Metric Catalog, regardless of whether they were included in the Scorecard or not. 

#### Scorecard 
The **Scorecard** panel shows how your Primary and Secondary experiment metrics for each variant compare against the control. These Primary and Secondary metrics are in the context of the experiment hypothesis, which is also prominently highlighted at the top of the **Scorecard** tab. 

All **Scorecard** metrics by default have **CUPED** (Controlled-Experiment Using Pre Experiment Data) applied to them. **CUPED** is a statistical technique first popularized for online testing by Microsoft in 2013 that leverages pre-experimental data to reduce variance and pre-exposure bias in experiment results. Tactically, **CUPED** can significantly shrink confidence intervals and p-values, ultimately reducing the sample size and duration required to run an experiment. To read more about **CUPED**, see [this blog post](https://blog.statsig.com/cuped-on-statsig-d57f23122d0e).  

In the example below, the **Circle** variant has a statistically significant lift in the **add_to_cart** and **product_view** metrics. However, the **Square** variant is not seeing any statistically significant lifts on any metric. This is represented by the gray Overall Lift symbols and large p-values.

![Screen Shot 2022-07-08 at 4 55 25 PM](https://user-images.githubusercontent.com/101903926/178083099-54084949-b35d-4194-b29b-b78d196a373b.png)

When you mouse over a metric lift, additional, more detailed information on the metric lifts is displayed. This includes:
* Unit counts, means, and totals for each experiment group 
* Ability to see a time series of how the lift has trended by day, days since exposure, and cumulatively
* Raw data for the lifts
* Top-line metric impact and projected topline impact at launch (if this experiment were to roll out to 100%) 
Read more about how to interpret the detailed Pulse results presented in the hovercard [here](https://docs.statsig.com/pulse/drill-down).  

![Screen Shot 2022-07-08 at 4 59 22 PM](https://user-images.githubusercontent.com/101903926/178083262-a64257b4-d033-409e-88e1-a3cc07a54f1f.png)


#### All Metrics 
The **All Metrics** tab shows the metric lifts across all the metrics in your Metrics Catalog. To prevent a metric from showing up in Pulse, you can hide it via **Metrics** tab. Simply search for the metric in the **Metrics Catalog**, tap on it to go to the **Metric Detail View**, tap the **...** menu in the upper right-hand corner, and select **Hide**. 

![Screen Shot 2022-07-08 at 5 12 55 PM](https://user-images.githubusercontent.com/101903926/178083939-61b7f283-4313-4c10-84d1-7e5a6467441f.png)

### Significance Level Settings

These settings can be adjusted at any time to view Pulse results with different significance levels. 

* **Apply Bonferroni Correction**: Select this option to apply the correction in experiments with more than one test group. This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Confidence Interval**: Changes the confidence interval displayed with the metric deltas.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.
* **CUPED**: Toggle CUPED on/ off via the inline settings above the metric lifts. NOTE- this setting can only be toggled for **Scorecard** metrics, as CUPED is not applied to non-Scorecard metrics. 
* **Sequential Testing**: Applies a correction to the calculate p-values and confidence intervals to reduce false positive rates when evaluating results before the target completion date of the experiment.  This helps mitigate the increased false positive rate associated with the "peeking problem". Toggle Sequential Testing on/ off via the inline settings above the metric lifts.  NOTE- this setting is available only for experiments with a set target duration.

![Screen Shot 2022-07-08 at 5 24 36 PM](https://user-images.githubusercontent.com/101903926/178084399-13b8f2a9-e175-4b95-a2a1-ae28b0098dc6.png)

   

