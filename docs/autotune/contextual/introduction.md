---
title: Contextual Bandit (Autotune AI)
sidebar_label: Contextual Bandit
slug: /autotune/contextual/introduction
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

Contextual Multi-Armed Bandits are a subset of Multi-Armed-Bandits which use context about a user to personalize their experience. This is generally achieved by predicting outcomes from among the variants, and picking the best outcome while factoring for uncertainty. Specifically, they will tend to prefer a slightly worse prediction that has a lot of uncertainty, thereby exploring that variant.

## Use Cases

Contextual bandits bridge the gap between un-personalized solutions and fully fledged ranking solutions. The main limitation is that contextual bandits:

- Have a fixed output set of variants they can show
- Have limited ability to account for complex context on the "object" being seen/predict for novel content (e.g. video ranking)

At the same time, their simplicity comes with advantages. Statsig's Autotune AI evaluates in near-real-time on both the server and client, taking a few milliseconds or less to return the ideal experience for a given user context. They're also simple to set up and test; you can set up a test in less than an hour, start getting model results the next hour, and start to see experiment results the next in the Statsig console.

See our [blog](https://www.statsig.com/blog/statsig-autotune-contextual-bandits-personalization) for more discussion on use cases and motivations.

## Methodology

Statsig's autotune AI uses a LinUCB based approach. We think this paper is a good introduction to the topic: [Li, Chu, Langford, Schapire](https://arxiv.org/pdf/1003.0146). For coverage of regret analysis, we think these lecture notes from [Jain from the University of Washington](https://courses.cs.washington.edu/courses/cse599i/18wi/resources/lecture10/lecture10.pdf) are a useful resource.

Autotune AI works with categorical and numerical features. Whatever key-value pairs attached to the custom object on the Statsig user will be converted into categorical/numerical features based on their data type. Categorical features will be one-hot-encoded. You should not need to build complex training pipelines, though many customers will pass pre-evaluated user attributes or predictions as context objects.

:::note
There is support for specifying features up front in Statsig's console. This can be helpful for you to know what features you need to fetch for the bandit in cases that there's an expensive/live lookup. For warehouse native customers, there is planned work around allowing you to join entity properties during the analysis phase so that you can plug in your own feature store to autotune AI analysis, similar to our approach with [CURE](/experiments-plus/cure).
:::

Algorithmically, we will choose the best model (e.g. Ridge, Logistic regressions) under the hood based on your data types and performance, and generate a model from your data. The estimated standard error of the model is used to generate a prediction confidence interval. During evaluation, user context is used to predict an outcome for each Variant, and the corresponding confidence interval is applied to that prediction. The best variant is chosen as the one with the highest upper end of a 95% confidence interval. This interval size can be tuned by modifying the exploration parameter in the Autotune setup page.

For deeper discussion, please view the [Methodology](./methodology.md) page.

:::note
You can also fetch a ranked list from Statsig and then manually expose those you show to the user, for use cases where you have client-side filtering or want to show multiple options; see [Advanced Usage](../using-bandits.md)
:::

## Drawbacks

Because Statsig manages the models, we cannot guarantee perfect tuning of models, or provide more advanced models like Neural Networks. This means that if recommendations are a critical business problem for your team, this feature can be a stepping stone but is not an appropriate end-state solution.

In terms of approach, we believe our approach offers a good balance of simplicity, speed, and regret; but if you have specific use cases in mind (e.g. real-time updates) they may not be fully served by the current approach.

Lastly, given our models generally assume linearity, we may not be able to capture complex user interactions; this is best for broad-strokes effects, though feature interactions terms can generate decent power in cases of "if-and-then" relationships between predictors and outcomes.

## Outcome Types

Autotune AI has a few different model types under the hood - this means it can be used for both classification use cases (will this user click a button) and for continuous outcomes (how much time will the user spend reading articles). This means that you can optimize for both "outcomes" and "metrics"; additionally, you can toggle off higher is better for metrics to try to drive down an outcome like latency.

For classification cases, Autotune AI will identify if any outcome occurs within its attribution window. For continuous cases, Autotune AI requires an event name and field name, and will use the numerical value associated with that field.

## Training

Training pipelines are run hourly.

For Warehouse Native customers, data is processed in your warehouse, and an anonymized feature set is used to train the models. Exposures will be exported on-demand for each load up to the first million, and in daily batches thereafter. Log events sent to statsig are exported hourly if you are using statsig to log outcomes, or you can plug into metric sources from your warehouse for outcome tracking.

For cloud customers, the data is processed and trained entirely in Statsig's servers.

## SDK Support

Statsig supports contextual autotune in all Client SDKs, but only in the following server SDKs:

- [Node](/server-core/node-core)
- [Python](/server-core/python-core)
- [Java](/server-core/java-core)
- [Elixir](/server-core/elixir-core)
- [Rust](/server-core/rust-core)
- [Go](/server/golangSDK) v1.39.0+
- [Ruby](/server/rubySDK) v2.4.0+
