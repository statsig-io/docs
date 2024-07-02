---
title: Contextual Bandit
sidebar_label: Contextual Bandit
slug: /contextual-bandit
---

## Model

Autotune UI implements a variant of the LinUCB algorithm. This estimates a user's outcome for each variant, and incorporates the model's uncertainty to determine an "upper bound" for the prediction. This upper bound is used to select a variant, which is the explore mechanism; in layperson's terms the bandit is selecting for the "highest potential upside" predicted.

For example, if Autotune AI has two variants and for user "Bob" they have the following predictions for click-through rate:

- Variant A: 6% ± 0.5%
- Variant B: 4% ± 3%

The user will be served model B, even though A has a higher prediction, because the "upside" of B's prediction is 7% vs. A's 6.5%. A variant's prediction usually has higher variance when there's low sample, or when the relationship between features and outcome is still fuzzy. As more traffic is delivered, the uncertainty will shrink. After more samples, the values might go to:

- Variant A: 5.9% ± 0.4%
- Variant B: 4.2% ± 1.5%

In which case Autotune would serve A, since 6.3% > 5.7%.

Some helpful references:

- [LinUCB Approach (Li, Chu, Langford, Schapire)](https://arxiv.org/pdf/1003.0146)
- [UW Lecture Series (Jain)](https://courses.cs.washington.edu/courses/cse599i/18wi/resources/lecture10/lecture10.pdf)
- [Thresholded Linear Bandits](https://proceedings.mlr.press/v206/mehta23a/mehta23a.pdf)

## Feature Types

Autotune AI works with categorical and numerical features. Whatever key-value pairs attached to the custom object on the Statsig user will be converted into categorical/numerical features based on their data type. Categorical features will generally be one-hot-encoded.

This means that you don't need to build complex training pipelines - whatever features you use for model evaluation will also be used for training.

## Outcome Types

Autotune AI has a few different model types under the hood - this means it can be used for both classification use cases (will this user click a button) and for continuous outcomes (how much time will the user spend reading articles).

These models follow the approach described best by the LinUCB family of algorithm - normalizing data and creating a linear model to estimate an outcome, and applying the model uncertainty to score an upper bound.

For classification cases, Autotune AI will identify if any outcome occurs within its attribution window. For continuous cases, Autotune AI requires an event name and field name, and will use the numerical value associated with that field on the first observed event after exposure.

## Advantages

The major advantage of a contextual bandit is its ability to optimize based on user attributes. This allows you to deeply optimize product and marketing outcomes beyond picking a single "best experiment". Contextual Bandits can also function with very little training data, and are re-trained hourly, meaning you have a functional personalization tool running within hours after launching your bandit.

For example:

- Increasing Outcomes: If you're offering discount promotions as a user is checking out to increase completion rates, based on the total value of a user's cart, the user's spending history, and the user's country code they might respond differently to a "10% off" coupon vs. a "Free shipping" coupon
- Avoiding Harm: If you want to show an upsell for referral codes to users, but don't want to burn users who won't share, Autotune AI can help you optimize for showing the unit to users with a high likelihood to copy the referral link and avoid showing the unit to users who will just dismiss it.

## Disadvantages

The major disadvantages of a Contextual Bandit as compared to a Multi-armed bandit is the lack of convergence, as well as the potential for over-fitting to training data. We utilize regression formats (ridge, normalized logistic regressions, and others) which deliberately omit predictors with low signal and are turned avoid overfitting.

Additionally, contextual bandit models may not capture complex interactions between features that a more complex model (a well-tuned GBDT or neural network) may be able to exploit. Contextual bandits are a powerful personalization tool, but won't outperform a dedicated ML team.
