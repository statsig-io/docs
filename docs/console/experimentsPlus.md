---
sidebar_label: Experiments+
title: Experiments+
---

## What is Experiments+?
Experiments+ is an experimentation platform that enables you to run randomized controlled experiments to evaluate your software products and features with minimal effort.  

## Overview
Randomized controlled experiments are the gold standard for establishing causality between the product features and functionality you build and the user impact you observe. Experiments+ automatically computes the causal impact of a feature variant when the variant is exposed to a randomly selected group of users in comparison to a control group of users who aren’t exposed to the variant.   

## When to use Experiments+
Experiments+ is ideal for running experiments with multiple variants (also known as A/B/n tests) and/or when you want to run multiple, mutually exclusive experiments in parallel. To run a simple A/B test, simply [set up a feature gate](/guides/first-feature). Statsig automatically deploys an A/B test for each feature gate you create and computes the results without requiring any additional configuration.  

## Features
Similar to A/B tests, Experiments+ provides the following features to run and analyze experiments with ease: 

1. Define a _targeting gate_ to constrain which users are exposed to an experiment  
2. Configure allocations to define what proportion of eligible users are exposed to each feature variant 
3. Define json payloads to dynamically customize the user experience for each feature variant as well as the default experience when they’re not exposed to any variant
4. Review the Metrics Lifts and confidence intervals for all your business metrics 
5. Choose confidence intervals ranging from 80% to 99% depending on the confidence you need for your decision; a larger lift (say 20%) generally requires a lower confidence interval (about 80%), while a smaller lift (say 1%) generally requires a higher confidence interval (95%) 
6. Analyze Metrics Lifts for different segments by filtering for common dimensions such as operating system and browser version 
7. Use the client or server SDK of your choice to deploy your experiment to users  

Experiments+ offers the following additional features to reliably design your experiments with speed: 
1. Create _multiple feature variants_ as part of the same experiment (aka A/B/n test) 
2. Select the _key metrics_ that you want to prioritize as part of your hypothesis  
3. Define _layers_ to ensure users participating in one experiment are not exposed to other related experiments 

Experiments+ automatically computes the sample size required to achieve statistical significance for a given experiment.

## Getting Started with Experiments+

### Prerequisites
Experiments+ is a Pro and Enterprise feature only.  Upgrade to the Pro Tier to start using Experiments+

[Optional] If you want to constrain the users who are exposed to your experiment, you must create a Targeting Gate. See how to set up Your First Feature Gate. Any feature gate you create appears in the Create Experiment wizard when you create an experiment.    

[Optional] When you want to run multiple, mutually exclusive experiments in parallel, you must create a Layer to ensure that users selected for one experiment are excluded from other experiments running in the same Layer. More info on layers coming soon.

### Creating an Experiment
To create a controlled experiment in Experiments+, 
1. Log into the Statsig console at https://console.statsig.com/.   
2.  Navigate to Experiments+ in the left-hand navigation panel.  
3. Click on the Create button. The Create New Experiment wizard leads you to three steps:
    * Enter the name of your experiment with a description and the hypothesis you want to validate. You can also optionally select the Targeting Gate that allows you to constrain the users who are exposed to the experiment.

    ![Screen Shot 2021-08-06 at 11 16 44 AM](https://user-images.githubusercontent.com/74584483/128554773-98b2ac76-b7ac-40ab-94ba-b66fa7b17e19.png)

    * If you’re running multiple experiments in parallel, select a *Layer* to ensure that users selected for this experiment are not included in other experiments running in the same layer. The size of the experiment is limited by the number of users available in the layer where your experiment runs.
    * You must create as many user groups as the number of test variants in your experiment in addition to a user group for the control. You must also enter the allocation of users in the test variants and control groups. You can also dynamically customize the user experience for each variant using configuration variables that can you include in JSON format alongside each variant.

    ![Screen Shot 2021-08-06 at 11 17 24 AM](https://user-images.githubusercontent.com/74584483/128554830-6af4cc36-51cf-4208-a675-82ce4401d736.png)
    
    * You can optionally select Key Metrics that you expect to change as part of your hypothesis.

    ![Screen Shot 2021-08-06 at 11 17 32 AM](https://user-images.githubusercontent.com/74584483/128554870-2dbc74c3-b304-406e-9cbf-031ce56c0641.png)

    * To complete the wizard, click the Create button. 
4. To deploy your experiment, your application must pull the experiment configuration from Statsig and log the required events for Statsig to calculate your metrics.  See the relevant documentation for your SDK of choice.  Your experiment starts running once you deploy this code to production.
5. To monitor the status of your experiment, navigate to Experiments+ in the left-hand navigation panel and select the experiment you created in Step 3. In the experiment details page, you can view the number Cumulative Exposures for feature variants and control groups.  This will be updated daily.

![image004](https://user-images.githubusercontent.com/74584483/128553541-7a8e8185-7c93-4fb9-b636-9499ca44733c.png)

6. To view the results of the experiment, navigate to Experiments+ in the left-hand navigation panel and select the experiment you created in Step 3. In the experiment details page, 
    * You can view the overall lift and p-value of the lift for your key metrics under **Key Results.**
    ![image005](https://user-images.githubusercontent.com/74584483/128553585-a75caffd-eeb4-4a83-955f-09db2089c40b.png)
    * The **Metrics Lifts** panel shows the lifts for all your business and operational metrics, highlighting the metric lifts that have achieved statistical significance
    ![image006](https://user-images.githubusercontent.com/74584483/128553600-45a53f11-2b18-47b0-915c-ff11161d72d7.png)

### Why Experiment?
Controlled experiments are the best scientific way to establish causality between your product features and customer impact. Establishing such causality allows you to only ship features that improve customer experience. This can make experiments the driving force behind your pace of innovation.   

As you grow your long-term pace of innovation, experiments also enable you to also measure the success of the features you ship and uncover unexpected side effects with every code change. This allows you to iterate faster in the short term, establish key business drivers, and make better, evidence-driven business decisions every day.   

In comparison, relationships observed in historical metrics cannot be considered structural or causal because multiple uncaptured external and internal factors influence customer behavior. Historical metrics establish correlation, not causation.

### Common Terms
* A _Control Variable_ is an experimental variable that is thought to influence the key metrics of interest. In simple A/B experiments,, a single control variable is assigned two values. It is more common to assign multiple values such as A,B,C, or D to a single control variable. Multivariate experiments evaluate multiple control variables that allow experimenters to discover a global optimum when multiple variables interact.  
* A _Variant_ is a product or feature experience being tested, often by assigning values to control variables. In a simple A/B experiments, A and B are two variants, usually called Control and Treatment.   
* A _Randomization Unit_ is the most granular unit that can participate in an experiment. Each eligible unit is randomly assigned to a variant, allowing causality to be determined with high probability. It is very common to use users as a randomization unit and Statsig highly recommends using users for running controlled experiments.  
* _Statistical Significance_ can be assessed using multiple approaches. Two of these approaches are using the p-value and the confidence interval:  
    * The _p-value_ measures the probability of the metric lift you observe (or a more extreme result) assuming that the variant you’re testing has no effect. The scientific standard is to use a p-value less than 0.05 to identify variants that have a statistically significant effect. A p-value less than 0.05 implies that there’s less than 5% chance of seeing the observed metric lift (or a more extreme metric lift) if the variant had no effect. Lower the p-value, higher the statistically significance of the observation.  
    * A _confidence interval_ examines whether the metric difference between the variant and control overlaps with zero. A 95% confidence interval is the range that covers the true difference 95% of the time. It is usually centered around the observed delta between the variant and control with an extension of 1.96 standard errors on each side.   

### Best Practices
* Metrics
    * Key Metrics - Choosing key metrics for your experiments enables you to reach decisive results through your experiments. Key metrics that are ideal for experiments typically are: 
        - Sensitive to measure the impact of the features you’re evaluating  
        - Reflective of causal impact given the features you’re evaluating 
        - Actionable to ensure that teams can act on levers to move these metrics 
        - Leading indicators for long term strategic goals 
        - Resistant to gaming and adverse incentives
    * Guardrail Metrics - These are organizational metrics that are sensitive to software changes but that most teams should hold the bar in the interest of long-term customer experience. Latency is one of the most common guardrail metrics. Other common guardrail metrics include HTML response size per page, client crash indicators, and revenue per user. Using guardrail metrics ensures that you’re equipped with data for any critical tradeoffs as you make decisions based on your experiments.
    * Reducing Metric Variance – If you’re able to transform your metric to reduce its variance, you can achieve decisive results with a smaller sample size. 
* Experiment Set Up & Design 
    * A/A experiments – These are the same as A/B experiments but treatment and control users receive identical experiences. A/A experiments are useful for: 
        - Assessing the variance of your experiment metrics over time; the standard variance of a metric variance is used in calculating the statistical power of an experiment to determine how long the experiment should run to achieve statistical significance 
        - Ensuring that there’s no bias in selecting and assigning users in treatment and control groups  
        - Validating that the baseline metrics captured by your experiments match your current system of record 
    * Experiment Ramp – When you’re uncertain how your users might react, you may start with a smaller proportion of users participating in the experiment.
    * Experiment Duration – As users trickle into the experiment, the sample size for the experiment increases and adds statistical power to the experiment. As your user population may change over the week, it is important to ensure that your experiment captures the weekly cycle. Some experiments may have unusually large or small initial effects such as early novelty that take time to stabilize. Some features may also take time to gather adoption. To get the most out of your experiment, make sure to run the experiment for sufficient duration.  
* Results to Decisions
    * Establishing Practical Significance – While statistical significance measures the probability of a metric lift you observe in an experiment, practical significance represents how the metric lift that actually matters to your business. Establishing  practical significance is important to assess whether the metric lift you observe is worth the cost of making the changes. 
    * Interpreting Results – Your decision given an experiment may vary depending on whether the results you observe are statistically significant. For example, 
        - When the result in not statistically significant and it’s clear there’s no practical significance, you may decide to iterate or abandon the idea. 
        - When the result is statistically significant and practically significant, we recommend launching the feature. 
        - When the result is statistically significant but not practically significant, the magnitude of the change may not be sufficient to outweigh other factors such as the cost of development.  
        - When the result is neutral, suggesting the metric could rise or fall by 5%, the experiment does not have enough power to draw a strong conclusion. We recommend running a follow up experiment with more power, say with more users, more sensitive metrics, or lower variance metrics. 
        - When the result is practically significant but not statistically significant, there’s a good chance that the variant has no impact at all even if your best guess is that it does. We recommend repeating the experiment with more power.  
        - When the result is practically significant and likely practically significant, choosing to launch is a reasonable decision. Repeating the experiment with power may provide further validation for the launch.

### Scenarios for Experiments
1. Experiment to grow faster 
Experiments can help climb a hill to a local optimum based on your current business strategy and product portfolio. For example, 
  - Experiments can optimize for the ideal user experience for a given functionality 
  - Experiments can help iterate on the functionality, algorithms, and infrastructure that matter the most to your users and your business   
  - Experiments can identify proposals with the highest return for effort required

Identifying the metrics that both reflect your strategic direction and are sensitive to the changes you make ensures that you don’t waste resources. Identifying guardrail metrics that you want to hold regardless of the changes you make compels explicit tradeoffs and prevents you from regressing on the fundamental needs of your business.

2. Experiment to discover faster 
Experiments can help develop a portfolio of ideas that may point to a larger hill or opportunity. Navigating these bigger jumps may require:
  - Experiments that run for a longer duration to mitigate any novelty effects and to ensure that you have given the new product version enough time to build adoption  
  - Experiments that ramp slowly and progressively to more users to limit risk and to build more statistical power before launch 
  - Many different experiments that test several related hypotheses that form a new business strategy   
