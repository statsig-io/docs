---
title: Best Practices
sidebar_label: Best Practices
slug: /experiments-plus/experimentation/best-practices
---

## Metrics
 - **Key Metrics** - Choosing key metrics for your experiments enables you to reach decisive results through your experiments. Key metrics that are ideal for experiments typically are:
   - Sensitive to measure the impact of the features you’re evaluating 
   - Reflective of causal impact given the features you’re evaluating
   - Actionable to ensure that teams can act on levers to move these metrics
   - Leading indicators for long term strategic goals
   - Resistant to gaming and adverse incentives 
- **Guardrail Metrics** – These are organizational metrics that are sensitive to software changes but that most teams should hold the bar in the interest of long-term customer experience. Latency is one of the most common guardrail metrics. Other common guardrail metrics include HTML response size per page, client crash indicators, and revenue per user. Using guardrail metrics ensures that you’re equipped with data for any critical tradeoffs as you make decisions based on your experiments.
- **Reducing Metric Variance** – If you’re able to transform your metric to reduce its variance, you can achieve decisive results with a smaller sample size.  

## Experiment Set Up & Design

 - **A/A experiments** – These are the same as A/B experiments but treatment and control users receive identical experiences. A/A experiments are useful for:
   - Assessing the variance of your experiment metrics over time; the standard variance of a metric variance is used in calculating the statistical power of an experiment to determine how long the experiment should run to achieve statistical significance
   - Ensuring that there’s no bias in selecting and assigning users in treatment and control groups 
   - Validating that the baseline metrics captured by your experiments match your current system of record  
 - **Experiment Ramp** – When you’re uncertain how your users might react, you may start with a smaller proportion of users participating in the experiment. 
 - **Experiment Duration** – As users trickle into the experiment, the sample size for the experiment increases and adds statistical power to the experiment. As your user population may change over the week, it is important to ensure that your experiment captures the weekly cycle. Some experiments may have unusually large or small initial effects such as early novelty that take time to stabilize. Some features may also take time to gather adoption. To get the most out of your experiment, make sure to run the experiment for sufficient duration. 

## Results to Decisions 
 
 - **Interpreting Results** – Your decision given an experiment may vary depending on whether the results you observe are statistically significant. For example,
    - When the result is statistically significant, we recommend launching the feature, but you should also weigh the impact against other factors such as the cost of development. 
    - When the result in not statistically significant, you may decide to iterate (repeat the experiment with more power, say with more users, more sensitive metrics, or lower variance metrics) or abandon the idea.
