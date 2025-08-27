---
title: Bayesian Experiments
sidebar_label: Bayesian
slug: /experiments-plus/bayesian
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

### Bayesian Testing in Statsig

Experiments are frequentist by default. To switch to Bayesian mode, go to Advanced Settings.

![Image](https://github.com/statsig-io/docs/assets/132317445/c9c01a57-fe13-47a9-b734-20d6e8d715a4)

The experiment type cannot be modified once the experiment starts.

![Image](https://github.com/statsig-io/docs/assets/132317445/be912632-6200-4408-977c-92f48dfdd7bc)

Deep dive analysis should also reflect Bayesian statistics

![Image](https://github.com/statsig-io/docs/assets/132317445/c9214142-d11f-48c8-92a4-53581bbc498c)

### Informed Bayesian

Bayesian experiments allow you to specify a prior belief on the relative average treatment effect. Statsig will combine the prior distribution with the observed data to display the prior-adjusted results. You can enable this by selecting the option to "use informative priors".
![Image](https://github.com/user-attachments/assets/0aa0a52c-4f97-42af-82dd-4d26dd1de7c0)


### Drawing the Correct Prior Distribution From Historical Data
If you are using the Bayesian with informative priors, the assumption is that you have a clear understanding of what power the priors have over your experimental results, and your organization has established a reliable prior based on the domain knowledge. With that said, here are some patterns people follow to derive their priors:
1. You can use the $AVG(\text{average treatment effect})$ of past experiments with a similar setup and population as your prior mean. You can use the standard deviation, or a multiple of it, as the prior standard error.
2. You can also use the $AVG(\text{observed standard error})$ as your prior standard error.

### Implementation Details

Denote $\mathcal{N}(ATE_{prior}, STE_{prior}^2)$ as the prior distribution, where $ATE_{prior}$ is the average treatment effect and $STE_{prior}$ is the standard error. Similarly, $\mathcal{N}(ATE_{observed}, STE_{observed}^2)$ as the observed distribution.

The posterior distribution is then calculated as

$$
\LARGE 
ATE_{post} = 
\frac{
\frac{ATE_{prior}}{STE_{prior}^2} + 
\frac{ATE_{observed}}{STE_{observed}^2}
}{
\frac{1}{STE_{prior}^2} + 
\frac{1}{STE_{observed}^2}
}
$$

$$
\LARGE 
STE_{post}^2 = 
\frac{1}{
\frac{1}{STE_{prior}^2} + 
\frac{1}{STE_{observed}^2}
}
$$


If the prior is not specified, the $\mathcal{N}(ATE_{prior}, STE_{prior}^2)$ is represented as $\mathcal{N}(0, \infty)$.

### Bayesian Statistics

Bayesian A/B tests have a glossary that are different from the frequentist framework and often believed to be more intuitive in communication to non-technical audience.

- Credible Interval: the interval which we believe contains the true parameter at the given probability
- Chance to Beat: the probability that the test is better than control
- Expected Loss: the average potential risk if you ship test
