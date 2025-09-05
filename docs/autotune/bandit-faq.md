---
title: Bandit FAQs
sidebar_label: FAQ
slug: /autotune/bandit-faq
keywords:
  - owner:craig
last_update:
  date: 2025-07-23
---

### When should I see data show up in a bandit?

You will see diagnostic data appear in near-real time in the logstream on your bandit.

Data on the models/results section will depend on your settings. We do not consider units enrolled until their attribution window has elapsed, so if you have a 24 hour attribution window it will take 24 hours for you to see your first units and model updates. Models are trained hourly, and there can be a few minutes of data delay, so there may be 1-2 hours of additional delay beyond that period.

Generally, this is not a super time-sensitive operation and accordingly does not have a strict SLA on Statsig's side. There may be delays due to data quality checks or other investigations to avoid bad model training data polluting your production environment.

### What do I put into the Variant JSON?

The variants return this JSON as a config, just like dynamic configs or experiments. You can just put an identifier for the variant, or specify a set of attributes that will be accessed in code to avoid needing to write conditional statements to fetch the corresponding attributes.

### Why use a linked experiment?

Bandits optimize for a single target metric or event. This doesn't give a super-rich analysis of how the bandit is impacting your users on its own. Wrapping a bandit in an experiment where the control group gets a default experience and the variant group gets served an experience by the bandit gives you the ability to get deeper insights on how it is impacting your end users. This step is highly recommended!

### Where is my Autotune data available?

Autotune data is downloaded hourly into the `statsig_first_exposures` metric source. Click into the history modal on the autotune itself to see the SQL and tables generated for an individual autotune.

### Why was a "losing" variant chosen?

Autotune makes the assumption that a metric is consistent across time; in other words, if a metric has strong seasonality (e.g. a metric which tanks on the weekends) it is not a good candidate for usage in an Autotune experiment. With seasonality, this case is possible:

- One variant which consistently performs worse than other variants gets less and less traffic, until it has essentially zero traffic
- Other variants, which are still receiving traffic, see their metric tank when the season effects kick in
- The variant with zero traffic doesn't see that metric tank (because no traffic is being allocated to it), which causes it to be chosen as the winning variant

This may sometimes cause a "losing" variant to be chosen as the winner.
