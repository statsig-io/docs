---
title: Advanced Usage
sidebar_label: Advanced Usage
slug: /using-bandits
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

Both contextual and non-contextual bandits are managed on Statsig's console, or through Statsig's [console API](../console-api/autotunes.mdx) for programmatic creation. Both bandit types use a common, streamlined API, making it easy to explore either use case without significant changes from using experiments.

Statsig's bandits are designed to provide the power of complex bandits with a simple interface - an observation we made in development is that many of these systems are stymied by implementation issues.

There's no additional steps beyond a regular experiment check to use a bandit, though for contextual multi-armed bandits you will want to make sure that you attach any context to your user object (usually at initialization) before making the experiment check. This can easily be confirmed in the diagnostics tab of your bandit in console.

### Checking Bandit

Check bandits using your standard experiment call. For example, in react this is as simple as configuring a bandit's variant json like:

```
{
    "text": "<my_text>",
    ...
}
```

and accessing it in code using the same pattern as [experiments](../guides/abn-tests.mdx):

```
const banditText = useExperiment('contextual_bandit').config.get('text');
```

This is separated from a bandit's linked experiment call to reduce excessive logging; if you have a linked wrapping experiment, you can just wrap the call after checking the experiment.

Statsig will automatically detect and differentiate categorical and numerical features based on cardinality.

### Getting a List

It's extremely common that users want to get a ranked list of the variants for a bandit; there may be client-side filtering or other reasons to not show one variant.

Getting a list of scored outcomes is supported in Statsig, but requires using manual exposure logging in order to let Statsig know which variant you displayed to the user.

### Outcomes

In Statsig Cloud, you will log an outcome event (as a flag, or with a value) to Statsig and Statsig handles connecting exposures to outcome events within your configured time periods.

In Statsig Warehouse Native, you can choose which approach to take. Logging events with Statsig will export events to your warehouse in near-real-time for use in Bandits, or you can provide your own outcome dataset as a metric source. One note is that it is worth being mindful of data latency; if your output dataset has >24h lag, bandit exploration can be slowed down significantly.
