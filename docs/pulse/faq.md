---
title: Frequently Asked Questions on Using Pulse
sidebar_label: FAQ
slug: /pulse/best-faq
---

Interpreting statistical results can be tricky, and often people will have similar questions as we ramp up. Here's some answers!

## I had a stat sig result, but it turned negative. How should I interpret this?

In general, you should trust the current result, as it's incorporating more information about the users in your experiment.

There's a number of reasons this can happen:

- Random noise, which gets diluted as your sample size gets larger
- Within-week seasonality (e.g. an effect is different on Mondays), which gets normalized with more data
- The population that saw the experiment early early on is somehow different than the slower adopters. This happens frequently - a daily user will likely see your experiment before someone who users your product once a month. You can look at the time series view to get more insight on this
- There was some sort of novelty effect that made the experiment meaningful early on, but fall off. Imagine changing a button - people might click on it early out of curiosity or novelty, but once that effect goes away they'll behave like before. You can use the days-since-exposure view to get more insight on this

Best practice for timing is to pick a readout date when you launch your experiment (based on a [power analysis](/experiments-plus/power-analysis)), and to disregard the statistical interpretation of results until then. This is because reading results multiple times before then dramatically increases the rate at which you'll get false positives.

## How should I start with interpreting results?

Start by using your scorecard metrics to understand if you've moved the metrics you thought you would. You should come into pulse with a hypothesis on what your experiment should drive, and that hypothesis should be answered by your primary metrics.

The delta displayed is based on the observed difference between a test and control population. The error bars are a visualization of a confidence interval. A confidence interval is a range of probable values for the difference between groups. A future sample's 95% confidence interval will have a 95% chance to contain the true value of the difference. This is a bit of a wonkish distinction which means that (unfortunately) you can't say that your observed 95% CI has a 95% chance of containing the true value. In practice, the CI is a representative range of what the true value might be.

Keep in mind that these results are statistical interpretations and not facts:

- If a result is not stat sig, this means you don't have sufficient evidence to reject the null hypothesis (i.e., based on your experiment design the observed result is reasonably likely to have happened by chance).
  - Generally, you should treat these results as a lack of evidence for your hypothesis
  - Underpowered tests may lead to neutral results even if a true effect exists
- If a result is stat sig, this means that you have sufficient evidence to reject the null hypothesis (i.e., the probability that you would observe this result, or one more extreme, if the two groups' results were identical is below the pre-determined threshold you set).
  - Generally, you should treat this result as evidence for your hypothesis
  - Multiple comparisons (many metrics, rerunning an experiment, or grouping by dimensions) greatly increase the chance of seeing a stat sig result when there's _not_ a true effect. Be wary of interpreting results when you see those behaviors!
  - A test that was extremely unlikely to succeed (moonshots, etc.) that has stat sig results have a high chance of that result being a false positive. In cases like this, it's a strong signal but you should consider trying to reproduce the result or running a back-test, or consider reducing your significance level.

Once you've looked at the results on your scorecard, we encourage you to use the all-metrics tab and custom queries to get more information on your experiment, but you shouldn't necessarily trust that if those see a stat-sig movement it is a statistically sound interpretation; as mentioned above if you increase the number of metrics you are looking at, you increase the chance that you will see a false positive. Use this section to look for unexpected large regressions and to generate follow-up hypotheses.

## Results aren't showing up for some metrics

This normally happens when your company is both using the SDK or event imports, and also importing precomputed metrics from your data warehouse. Since these can run at different times, the data availability may differ. You can adjust your analysis date range to get a full view of your data.

## Our external source shows more exposure events than Statsig. Are data missing?

Exposures on the last day (the day you made a decision) are not counted as exposures. Please filter out that day when you analyze your external data. By default, Statsig uses UTC-0800 to define a "day".
