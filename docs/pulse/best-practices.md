---
title: Best Practices and Avoiding False Positives
sidebar_label: Best Practices
slug: /pulse/best-practices
---

We have some suggestions on how to interpret Pulse in a scientifically-sound way:

1. Have a hypothesis in mind before viewing Pulse. What are the metric(s) you expect to shift due to the change you made? What else could have happened? What are signs it has gone wrong?
2. Establish a small set of key metrics that are directly related to your hypothesis and would most directly establish that the experiment worked. Having more than a handful of key metrics is usually a sign of an ill-defined hypothesis or shotgun experimentation. Examining too many metrics will lead to a higher false positive rate (seeing results when only statistical noise exists).
3. Avoid cherry-picking results. For example, don't selectively pick three metrics that look good, but ignore the two that don't. Also avoid picking "good" or "bad" numbers that have no connection to your hypothesis. Context matters a lot, and statistically-significant results should have a plausible explanation (false positive can be a plausible explanation).
4. Seeing multiple (independent) effects that are consistent with a plausible story lends credibility that the observed effects are real, even with borderline p-values.
5. Expect to see false positives and be suspicious of statistically significant results with borderline p-values. For example, a 95% confidence interval (5% significance level) is expected to turn up one statistically significant metric out of twenty due purely to random chance. This number goes up if you start to include borderline metrics (eg. p = 0.06).
6. Look beyond your hypothesis. What other effects can you find? Are there tradeoffs? Are there unexpected behaviors? These can reveal information about your users and how they interact with your product. They are often the source of follow-up experiments and new ideas.
