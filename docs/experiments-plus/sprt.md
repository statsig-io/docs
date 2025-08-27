---
title: Sequential Probability Ratio Test (SPRT) for AB Testing
sidebar_label: SPRT
slug: /experiments-plus/sprt
keywords:
  - owner:makris
  - sequential
last_update:
  date: 2025-07-16
---

## What is SPRT?

The Sequential Probability Ratio Test (SPRT) is an advanced method for analyzing AB tests, differing from the traditional Null Hypothesis Significance Test (labeled "Frequentist" on Statsig). SPRT can meaningfully improve time to decision for your experiments and help you detect regressions faster.

SPRT introduces a few key concepts that differ from standard tests. At its core, SPRT relies on the Likelihood Ratio (LR) which estimates the relative likelihood that what you observe is due to one of two alternatives, a fixed null hypothesis and an alternative hypothesis you set. A Likelihood Ratio of 10.0, for example, indicates that the probability of observing what you measured is 10x under the alternative hypothesis as compared to under the null hypothesis.

One of the nice things about SPRT is that this Likelihood Ratio largely corresponds to how humans like to think. You can now report a result like "With an LR of 10.0, it's 10 times more likely that the feature improved our primary metric than left it unchanged."

## Why SPRT?

- **Faster Decisions:** SPRT allows you to reach conclusions more quickly, potentially reducing experiment run time.
- **Intuitive Results:** Instead of p-values, SPRT uses the likelihood ratio — a more intuitive measure of evidence for or against your hypotheses.
- **Definitive Outcomes:** SPRT enables you to confidently accept either the null or alternative hypothesis, rather than just “rejecting the null.”
- **Data-Informed:** Statsig’s implementation uses your past data and power analysis to inform the likelihood calculations and decision thresholds.

## Key Points

- **Likelihood Ratio:** Measures how much more likely your observed data is under the alternative hypothesis compared to the null.
- **Sequential Analysis:** Data is continuously evaluated as it is collected, allowing for early stopping when sufficient evidence is reached. There's no penalty for "peeking" in SPRT experiments.
- **No p-values:** Decisions are based on likelihood ratios, not traditional p-values.

## How to Use SPRT in Statsig

**Enabling SPRT:** Select SPRT as your analysis method when setting up an AB test in the Statsig console.

![image](/img/sprt/sprt_power_analysis.png)

**Interpreting Results:** The experiment Results tab shows the latest likelihood ratio for each metric in your experiment and indicates when a decision boundary has been reached, allowing you to accept the null or alternative hypothesis with confidence.

![image](/img/sprt/sprt_results_readout.png)

## References

- [Original SPRT Paper (Wald, 1945)](https://projecteuclid.org/journals/annals-of-mathematical-statistics/volume-16/issue-2/Sequential-Tests-of-Statistical-Hypotheses/10.1214/aoms/1177731118.full)

## FAQ

**Can I use SPRT for all experiments?**  
SPRT is best suited for experiments where you want faster, sequential decisions and are comfortable with likelihood-based inference. For some experiment types, traditional methods may still be preferable.

**How does SPRT affect experiment duration?**  
SPRT can reduce experiment duration, especially when there is strong evidence for or against an effect. However, if the effect is small or data is noisy, the test may run longer.

**What are the limitations?**  
SPRT requires careful setup of thresholds and assumptions. It is not a drop-in replacement for all frequentist methods, and may not be suitable for all experiment types. 

**Is SPRT the same as Sequential Testing?**
SPRT is different from our Sequential Testing option. [Sequential Testing](/experiments-plus/sequential-testing) adjusts your Frequentist analysis method to allow repeated looks (i.e. "peeking"). SPRT is a completely separate experimental procedure and decision framework. They both allow for continuous "sequential" looking at experiment results, but otherwise they are separate methods for designing and running an A/B test.
