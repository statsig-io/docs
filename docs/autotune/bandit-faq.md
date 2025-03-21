---
title: Bandit FAQs
sidebar_label: FAQ
slug: /autotune/bandit-faq
keywords:
  - owner:craig
last_update:
  date: 2025-03-20
---

### When should I see data show up in a bandit?

You will see diagnostic data appear in near-real time in the logstream on your bandit.

Data on the models/results section will depend on your settings. We do not consider units enrolled until their attribution window has elapsed, so if you have a 24 hour attribution window it will take 24 hours for you to see your first units and model updates. Models are trained hourly, and there can be a few minutes of data delay, so there may be 1-2 hours of additional delay beyond that period.

Generally, this is not a super time-sensitive operation and accordingly does not have a strict SLA on Statsig's side. There may be delays due to data quality checks or other investigations to avoid bad model training data polluting your production environment.

### What do I put into the Variant JSON?

The variants return this JSON as a config, just like dynamic configs or experiments. You can just put an identifier for the variant, or specify a set of attributes that will be accessed in code to avoid needing to write conditional statements to fetch the corresponding attributes.

### Why use a linked experiment?

Bandits optimize for a single target metric or event. This doesn't give a super-rich analysis of how the bandit is impacting your users on its own. Wrapping a bandit in an experiment where the control group gets a default experience and the variant group gets served an experience by the bandit gives you the ability to get deeper insights on how it is impacting your end users. This step is highly recommended!
