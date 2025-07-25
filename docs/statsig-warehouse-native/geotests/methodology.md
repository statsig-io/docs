---
title: Geotests
sidebar_label: Methodology
slug: /experiments-plus/geotests/methodology
keywords:
  - owner:makris
last_update:
  date: 2025-04-17
---

# Geotesting Methodology

:::tip

Geotests is currently in Alpha release. Statsig is actively interested in working with customers to understand your use-case and make improvements. Please reach out if you're interested in using Geotesting capabilities.

:::

## How it's different

Standard A/B testing relies on a few core assumptions:

1. You can reliably and randomly split your users into similar groups
2. While each group has heterogeneity inside it, random user-level variations average out at larger sample sizes, resulting in homologous (similar) groups
3. You control how each group gets treated, and there is no interference between groups

When these core assumptions are true, we assume the treatment effect will be the only observable difference between the groups. We can simply measure each group’s mean value and find the difference between them.

There are times however when these assumptions don’t hold:

- Your intended treatment can’t be controlled and scoped to the user level
- You don’t know who the users are
- You can’t track outcomes at the user level

Running geographically-based campaigns is a prime example that often features at least some of these violations. Examples include:

- Some classic marketing, like billboards, can’t be randomly split between test and control users at a given location. We can’t track who sees them and how they act afterwards.
- Some digital campaigns might be able to split users 50/50 (if the platform allows it), but if you don't have user-level data that you can tie to outcomes of interest, you'll never know how the two groups performed.

## Using Synthetic Controls

“Geotesting” as we refer to it here is an experimental framework that relies on a different basic setup than AB tests:

1. Split your users into geographical boundaries at some useful level (zip codes, states, countries, etc)
2. Apply a known treatment in some “treatment” geos, and no treatment in some “control” geos
3. Use the control geos to figure out what would have happened in the treatment geos had no treatment been applied (i.e. “synthetic” results)
4. Measure the delta in the treatment geos between the actual and synthetic values

The “figuring out what would have happened” tends to be the hardest and nastiest part of this setup. Deducing things that don’t occur is usually a fool’s errand, but in some circumstances there’s enough predictability in a system to figure it out.

Geotesting relies on the idea that among some sets of geos there are enough correlations between control and test geos that make predicting this “counterfactual” possible. We assume, for instance, that general trends and seasonality tend to be shared across some geos.

Example: pretty much all zip codes in the United States exhibit similar quantities of mail sent on any given day. If you were to split zip codes 50/50, you could reasonably infer that the two groups would see similar trends.

# Approach

There are many ways to estimate unknown data from other known data, depending on a multitude of factors. In the case of Geotesting, we have:

- timeseries data that is autocorrelated (i.e. data is correlated from one day to the next within a group)
- timeseries data that is correlated between groups
- regular seasonal patterns that repeat at regular intervals
- granular data from among many distinct geographies

Plotting some metric of interest for a bunch of relevant geographies can show these relationships clearly.

![Example data from the GeoLift package walkthrough. ](/img/geotests/GeosPreTest.png)

Example data from the GeoLift package walkthrough. 

But what happens when we run a campaign or make some change in just some of these geos? How can we tell if a fluctuation in this graph is random noise or real stat-sig result? 

![A marketing campaign that starts on day 91 (black dotted line) could have affected the treatment cities of Chicago and Portland. But how can you tell any real effect from all the noise?](/img/geotests/GeosTest.png)

A marketing campaign that starts on day 91 (black dotted line) could have affected the treatment cities of Chicago and Portland. But how do you distinguish any real effect from all the noise?

We turn to causal inference modeling to answer this question. Thankfully, a variety of powerful models and methods have been developed to answer this question. The basic steps are the following:

- Split your geos into test and control groups
- Using the pre-treatment period data, train a model on the control data to predict how the treatment geos behave
- Use the post-treatment period data for the control geos, create a “synthetic control” dataset to predict how the treatment geos would have behaved after the treatment event.
- Subtract the synthetic data from the actual observed data to determine the induced effects of your treatment on the treatment geos

When your training data is able to produce strong models that can predict metric outcome well, you end up with strong estimates of an induced effect:

![Image](/img/geotests/Period_Split.png)

![Subtracting the modeled Synthetic Control values from the observed Treatment values reveals any incremental effect for the Treatment geos.](/img/geotests/Incremental_Effects.png)

Subtracting the modeled Synthetic Control values from the observed Treatment values reveals any incremental effect for the Treatment geos.
