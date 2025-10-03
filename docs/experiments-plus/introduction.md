---
title: Experiments Overview

sidebar_label: Experiments Overview
slug: /experiments-plus
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

**Experimentation** is a powerful tool for making data-driven decisions that improve product outcomes and customer experiences. 

In this doc, we'll cover key concepts of experimentation such as control variables, randomization units, and statistical significance, helping you understand the science behind A/B testing and multivariate experiments.

By the end of this guide, you'll know how to use experiments to validate product changes, discover new opportunities, and drive business impact. Whether you're optimizing existing features or exploring new ideas, these fundamentals will equip you to run effective experiments and iterate faster with confidence.

![Experiments banner image](/img/experiments-hero.png)

## What are experiments?

Experiments enable you to run randomized controlled trials (A/B or A/B/n tests) with minimal effort, allowing you to measure the impact of product changes on key metrics. Statsig’s experimentation platform is designed to make it easy to create, manage, and analyze experiments, ensuring you ship features that deliver value to your users and business.

Experiments are ideal when you want to:
- Test multiple variants (A/B or A/B/n) of a product feature.
- Run mutually exclusive experiments in parallel.
- Measure the direct impact of changes on product and business metrics.

---

## Why experiment?

Controlled experiments are the most scientifically reliable way to establish **causality** between your product changes and their effect on customer behavior. By running experiments, you can:

- **Validate Hypotheses**: Only ship features that have been proven to improve the customer experience or drive key business metrics.
- **Measure Success**: Measure feature performance post-launch and detect any unexpected side effects.
- **Drive Innovation**: Experiments allow teams to iterate faster by providing real-time feedback on product performance. They help you make better, data-driven decisions that accelerate business growth.

In comparison, historical metrics may show correlation, but experiments allow you to establish causal relationships. Experiments reduce the influence of uncontrolled external factors, ensuring that observed effects are due to the tested changes.

---

## Key concepts 

### Control variables

A **control variable** is the variable in an experiment that is manipulated to observe its effect on key metrics. In a simple A/B test, the control variable usually has two values (A and B). More complex experiments may have additional values (e.g., A, B, C, D), known as multivariate experiments.

### Variants

A **variant** is a specific version of the product or feature being tested. For example, in an A/B test:
- **A (Control)**: Represents the current state of the product or feature.
- **B (Treatment)**: Represents the modified state you want to evaluate.

Each variant is randomly assigned to users, allowing you to compare their performance.

### Randomization unit

The **randomization unit** is the entity (such as a user, device, or session) that is randomly assigned to control or treatment groups in an experiment. Choosing the right randomization unit ensures consistency in user experience and reliable experiment results.

This choice is critical to ensure that experiment results reflect real-world user behavior and that data is not skewed by unintentional crossovers between groups.

### Statistical significance

Statistical significance is used to determine whether the observed changes in metrics are likely due to the product change or just random variation. Two commonly used methods are:

- **p-value**: The p-value measures the probability of observing the results by chance if the variant had no effect. A p-value below 0.05 is typically used to determine statistical significance.
  
- **Confidence Interval**: A confidence interval defines the range in which the true effect of a variant lies, with a given level of confidence (e.g., 95%). If the confidence interval does not overlap zero, the effect is considered statistically significant.

These concepts help you interpret the results of your experiment with greater confidence.

For more detailed information on designing, monitoring, and analyzing experiments, check out [Product Experimentation Best Practices](https://statsig.com/blog/product-experimentation-best-practices).

---

## Common scenarios for experimentation

### Optimize product growth

Use experiments to refine and optimize user experiences, helping you climb toward a local maximum in your product strategy. Common goals include:
- Optimizing a specific user journey (e.g., improving onboarding).
- Iterating on features to identify high-return opportunities.
- Aligning experiments with business-critical metrics and guardrails to prevent negative side effects on fundamental business needs.

### Explore new opportunities

Use exploratory experiments to discover entirely new directions. These experiments help you develop new ideas, validate strategies, and uncover long-term opportunities.
- Run experiments over longer durations to account for novelty effects and adoption time.
- Slowly ramp up experiments to minimize risk and build statistical power.
- Test multiple related hypotheses to explore a broader business strategy.

---


## Choosing the right randomization unit

The Randomization Unit is the variable you choose that determines how users will be distributed across your groups (e.g., test and control). When you set a variable as the Randomization Unit, any value for that variable will *always* see the same experience. This Unit is also the unit of reference for your metrics. If you choose userID as your Randomization Unit, the userID will deterministically bucket each user, and will be the basis of measurement - your analysis might look at Revenue per userID. Below are some common units of randomization and when to use them.

### User Identifiers

The most commonly used randomization unit is the **User ID**. This identifier is generated when a user registers or signs in to your application. Using User IDs ensures a consistent user experience across sessions and devices, as the user is always assigned the same variant, regardless of where or when they access the product.

Advantages:
- Persistent across sessions and devices.
- Independent of client-side cookies, which can be cleared by users.

For more details on using User IDs with Statsig, see [Statsig Docs on User Identifiers](/concepts/user).

### Device Identifiers

For users who haven't registered or signed in, using **Device IDs** or **Anonymous User IDs** is common. These identifiers track users based on the device they are using and are ideal when you are experimenting with unregistered or guest users.

Example:
- You can use device IDs to experiment on landing page optimizations aimed at improving user registration rates.

**Drawbacks**:
- Device-specific: If the same user accesses your app from multiple devices, they may have different experiences.
- Shared devices: If multiple users share a device, the experiment may mistakenly treat their behavior as belonging to one individual.

Statsig SDKs automatically generate **Stable IDs** for anonymous users, making it easier to manage device-based experiments. For more details, see [Statsig Guide for Device-Level Experiments](../../guides/first-device-level-experiment).

### Session Identifiers

In certain cases, you may use **Session IDs** as the unit of randomization, especially when testing behavior during a single session (e.g., optimizing a checkout flow). However, session-based randomization assumes each session is independent of others, which can be a risky assumption if users return in multiple sessions.

Example:
- Session IDs might be used when experimenting with conversion funnels for guest checkouts, which are typically completed within a single session.

**Drawbacks**:
- Users may remember their experience from one session to another, breaking the assumption of session independence.
- If users return in future sessions, there’s a risk they could be placed in different variants, leading to inconsistent user experiences.

---
## Tutorials
- [Run your first A/B test](/guides/abn-tests)
- [Create an experiment using a userID](/experiments-plus/create-new)
- [Create an experiment using a customID](/guides/experiment-on-custom-id-types)
- [Use a language specific Statsig SDK to implement an experiment in your application](/experiments-plus/implement)
- [Monitor an experiment](/experiments-plus/monitor)
