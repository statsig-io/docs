---
title: Sequential Probability Ratio Test (SPRT) for AB Testing
sidebar_label: SPRT
slug: /experiments-plus/sprt
keywords:
  - owner:makris
  - sequential
last_update:
  date: 2025-09-04
---

## What is SPRT?

The Sequential Probability Ratio Test (SPRT) is an advanced methodology for running AB tests, differing from the traditional Null Hypothesis Significance Test (labeled "Frequentist" on Statsig). SPRT can meaningfully improve time to decision for your experiments, including detecting unwanted metric regressions much faster. It also tends to be much easier to share results to stakeholders who aren't super familiar with P-values and Significance levels. Lastly, SPRT has no penalties for peeking; there's no need for sequential testing plans, Alpha spending, or CI-penalties as SPRT is built to be a sequential test methodology from the start.

### Concepts

SPRT introduces a few key concepts that differ from standard Frequentist tests. At its core, SPRT relies on the **Likelihood Ratio (LR)** and Upper and Lower decision boundaires, **A** and **B**.

The Likelihood Ratio estimates the relative difference in the likelihood of two outcomes:
- **Numerator**: What you observe is due to an alternative hypothesis (you set) being correct.
- **Denominator**:  What you observe is due to the null hypothesis being correct.

The Upper and Lower decision boundaries are determined by your tolerance for Type I and Type II errors.
- **A**: If LR exceeds this upper threshold, you should accept the Alternative Hypothesis.
- **B**: If LR is less than this lower threshold, you should accept the Null Hypothesis.
- When LR falls into the range between these thresholds, no decision can be made and you should continue collecting data.

An LR of 5.0, for example, indicates that the what you observed is 5x more likely under the alternative hypothesis as compared to the null hypothesis.

One of the nice things about SPRT is that this Likelihood Ratio is similar to how most people think about comparing options. Rather than reporting P-values and Significance levels, you can now report a result like "_With an LR of 3.5, it's 3.5x more likely that the feature worked_."

## Why SPRT?

- **Faster Decisions:** SPRT allows you to reach conclusions more quickly, potentially reducing experiment run time.
- **Intuitive Results:** Instead of p-values, SPRT uses the Likelihood Ratio, a more intuitive measure of evidence for or against your hypotheses.
- **Sequential Analysis:** Data is continuously evaluated as it is collected, allowing for early stopping when sufficient evidence is reached. There's no penalty for "peeking" in SPRT experiments.
- **Clear Outcomes:** SPRT enables you to confidently accept either the Null or Alternative hypothesis, rather than just “rejecting the null.”
- **Data-Informed:** Statsig’s implementation uses your past data and power analysis to inform the likelihood calculations and decision thresholds.

## Comparing SPRT to other analysis methods



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
