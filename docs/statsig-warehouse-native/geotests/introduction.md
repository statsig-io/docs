---
title: Geotests
sidebar_label: Geotests
slug: /experiments-plus/geotests
keywords:
  - owner:makris
last_update:
  date: 2025-04-16
---

# Geotests

Sometimes you just can't run an A/B test. That's where Geotests come into the picture.

One of the most common use cases are in marketing; you can't A/B test on 3rd party ad platforms, but geo-testing lets you evaluate the incrementality of your program.

Geotests are specialized experiments that allow you to target users based on their geographic location. They enable you to test features, content, or experiences across any type of geographic area. By splitting your campaign up amongst DMAs or postal codes, for example, you can measure its incrementality even when an ads platform doesn't support it.

Geotests are particularly valuable for businesses with global audiences who need to optimize their product for regional differences in user needs, preferences, or regulatory requirements.

:::tip

Geotests is currently in Alpha release. Statsig is actively interested in working with customers to understand your use-case and make improvements. Please reach out if you're interested in using Geotesting capabilities.

:::

# Why use Geotests

Statsig's Geotesting is designed to combine the flexibility and statistical rigor of statsig with your own data sources in your warehouse.

Geoesting:

1. Includes an automated Experiment Designer to help you select where and when to run your campaign.
2. Help export your campaign definition to your campaign platform, making setup faster and less error-prone.
3. Automates analysis, using your own data that never leaves your warehouse.

# GeoLift

Statsig's Geotesting is built on top of Geolift, a best-in-class industry tool for running geospatial experimentation for marketing. [GeoLift](https://facebookincubator.github.io/GeoLift/) is an open-source package from Meta that’s used by many to infer causal relationships in timeseries data. It builds on advancements made in prior packages like Google’s [Causal Impact](https://google.github.io/CausalImpact/CausalImpact.html) package.

Statsig is using GeoLift in our own implementation of Geotesting, and allowing you to easily connect your own internal metrics and feed them into the analysis package.

# References

- [GeoLift](https://facebookincubator.github.io/GeoLift/)
- [CausalImpact](https://google.github.io/CausalImpact/CausalImpact.html)
- [Synthetic Control Methods (wiki)](https://en.wikipedia.org/wiki/Synthetic_control_method)
- [Causal inference using synthetic controls (medium)](https://medium.com/data-science-at-microsoft/causal-inference-using-synthetic-controls-d96a890c83a7)
