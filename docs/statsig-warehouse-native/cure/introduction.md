---
title: CURE
sidebar_label: CURE (CUPED)
slug: /experiments-plus/cure
keywords:
  - owner:craig
last_update:
  date: 2025-06-03
---

# CURE

CURE (variance Control Using Regression Estimates) is Statsig's extended implementation of [CUPED](../stats-engine/methodologies/cuped), a technique which uses pre-experiment data for each experimental unit to control some of the data observed in an online experiment. CUPED can reduce variance moderately to significantly, and can correct for some amount of pre-existing differences between experiment groups at the time of the experiment.

CUPED is a powerful technique that provides additional statistical power without needing additional users or time to run an experiment. However, it has one major limitation: it relies on using pre-experiment data for a given metric to reduce the same metric's variance. This means that:

- New user experiments cannot leverage the technique
- Metrics which are not autocorrelated do not see significant variance reduction

## What is CUPED?

Please refer to our documentation [here](../stats-engine/methodologies/cuped), or our longer-form blog [here](https://www.statsig.com/blog/cuped).

## How CURE Improves On CUPED

CURE solves the no-covariate problem by allowing practitioners to specify additional covariates, which are used in the CUPED regression. The predictions from this regression are used to generate an estimator set that is unbiased, but has lower variance than the original estimator.

This can reduce experiment runtimes more than CUPED in isolation and, when combined with Statsig's Entity Properties, allows practitioners to trivially plug in existing feature stores to this variance reduction technique.

## How it's different

This technique is similar to standard regression estimate used across other experimentation tools, but stands out in several ways:

- CURE is applied on all major experimental surfaces that Statsig offers; this solves a common pain point of of results not matching between scorecards and explore queries due to incomplete CUPED implementations. Statsig offers CURE across experiment scorecards, drill-down explore queries, filtered queries, and even power analysis
- Multivariate regressions allow you to experiment with reduced variance on new users or users without pre-experiment data
- CURE manages feature selection, preventing observed overfitting issues seen in similar multivariate approaches, and making the regression adjustments significantly more transparent and less of a vendor black-box

# Approach

The original version of CUPED specified by Microsoft [(Deng, et. al.)](https://www.exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf) is equivalent to running an OLS regression with one independent variables. However, this adjustment does not need to be a single-variable regression (or a regression at all). A regression has the benefit of guaranteeing identical or lowered variance, but so long as an adjustment is unbiased, any adjustment is mathematically valid.

Thus by calculating the covariance matrix between covariates and experiment outcomes in SQL, you can cheaply generate the required inputs to generate multi-variate regressions and use these to adjust post-exposure values in an unbiased manner -- so long as this estimator is unbiased (critically, meaning the regression is demeaned and only uses pre-experiment data). Similarly to the original paper's proof, this yields an estimator that has variance less than or equal to the existing estimator. That means that:

- if covariates do not exist, nothing happens and the adjusted estimator is identical to the unadjusted
- in the worst case where covariates are uncorrelated, the adjusted estimator is identical to the unadjusted
- if no additional covariates are applied, CURE is mathematically equivalent to CUPED
- if additional covariates are applied that increase the $R^2$ (i.e. portion of explained variance), CURE reduces variance more than CUPED

# Data Sources

When CUPED is enabled, pre-experiment metric data will still be an input to the CURE regression.

The extension CURE offers is allowing you to pull data from:

- assignment records; if using e2e experiments with Statsig, you can log user attributes using the SDK and they will be exported for your use in CURE, if desired
- entity property sources: you can use any timestamp-enabled entity property source to provide covariate data. Note that at launch, non-timestamped entity property sources are disabled due to the potential for data leakage into CURE

The latter option is a convenience feature; if desired, you could manage joining user features to your assignment data. In practice, this unlocks scalable use of the platform, unlocking use cases like providing your own table of regression estimates as covariates, e.g. Doordash's [CUPAC](https://careersatdoordash.com/blog/improving-experimental-power-through-control-using-predictions-as-covariate-cupac/) approach.

# Configuration

CURE can be managed in two places:

- Project Settings under Experimentation. The default CURE Covariates setting allows you to specify covariates you want to use across any CUPED-enabled metric in your project
- Advanced Settings in the Experiment Settings page. This allows you to specify covariates specific to one experiment

# Datasets

Statsig will surface information on CURE in experiment diagnostics, giving details on coefficients used and relevant covariate for any given metric. You can also see the adjustments used under the Regression Adjustment job, and check the coefficients table to run your own analysis on the regression model.

# Outputs

 You can view the DAG history to see the exact coefficients used and the table they are stored within. Additionally, Statsig will render an explanation in-console of which variables contributed to reducing variance, and how much variance was reduced -- which has been helpful for users deciding which features to use.

# Notes

Similar to CUPED, CURE can modify the point estimates of groups; though the total value across all experimental groups will sum to the same value as in the unadjusted dataset, is it expected that there may be drift in value between the groups (particularly if there's some pre-experiment differences and the correlation is high). Generally this can be seen as the algorithm adjusting for pre-existing deltas in experiment groups, but please reach out in slack if you are concerned about a concerning change.

## Feature Selection

We use Lasso regression to select important features, reducing the computational cost of adjusting the unit metric level and controlling the multicollinearity. You can view the contribution of each feature on the variance reduction card. The estimated proportion of variance reduction is achieved by

$$
\text{Variance Reduction}_{i} = \frac{{Coefficient_{i}}^2*Var(feature_{i})}{\sum {Coefficient_{i}}^2*Var(feature_{i})}
$$

by that,

$$
\sum \text{Variance Reduction}_{i} = 100\%
$$

# References

- [From Augmentation to Decomposition: A New Look at CUPED in 2023](https://arxiv.org/html/2312.02935v1)
- [Improving Experimental Power through Control Using Predictions as Covariate (CUPAC)](https://careersatdoordash.com/blog/improving-experimental-power-through-control-using-predictions-as-covariate-cupac/)
- [Agnostic notes on regression adjustments to experimental data: Reexamining Freedman’s critique](https://projecteuclid.org/journals/annals-of-applied-statistics/volume-7/issue-1/Agnostic-notes-on-regression-adjustments-to-experimental-data--Reexamining/10.1214/12-AOAS583.full)
