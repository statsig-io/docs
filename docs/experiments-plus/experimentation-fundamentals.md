---
title: The Building Blocks of Experimentation
sidebar_label: Experimentation Fundamentals
slug: /experiments-plus/experimentation-fundamentals
---

Experimentation is the most reliable scientific method to establish causality between product features and customer impact. By running controlled experiments, you ensure that you only ship features that improve the user experience, making experimentation a key driver of your **innovation pace**. 

Experiments also enable you to measure the success of your changes, uncover unexpected side effects, and **make data-driven business decisions**. This page covers the core concepts of experimentation, when and why to experiment, and how to choose the right randomization unit to ensure reliable results.

---

## Why Experiment

Controlled experiments allow you to directly measure the causal relationship between a change and its effect on user behavior, product performance, or business outcomes. They enable:
- **Faster Iteration**: You can quickly test new ideas, measure their impact, and make decisions based on evidence.
- **Risk Mitigation**: By running experiments on a subset of users, you reduce the risk of a negative impact when rolling out new features.
- **Improved Decision Making**: Experimentation helps establish key business drivers, allowing you to iterate and innovate based on measurable results.

In comparison, relationships observed in historical metrics are often influenced by many uncaptured internal and external factors, which only establish **correlation, not causation**. Controlled experiments give you a clearer understanding of how your features impact user behavior.

---

## Scenarios for Experimentation

Statsig sees two broad scenarios for using experimentation:

### 1. Experiment to Grow Faster

Experiments can help you optimize your current strategy by identifying the most effective ways to improve user experience and performance. For example:
- **Optimize User Experience**: Test different versions of features to find the most effective one.
- **Iterate on Functionality**: Improve the underlying algorithms or infrastructure that matter most to your users.
- **Maximize ROI**: Identify ideas that yield the highest return on investment.

Defining key metrics and guardrails ensures you measure what matters and avoid unintended regressions.

### 2. Experiment to Discover New Opportunities

Experiments also help explore new opportunities, beyond incremental improvements:
- **Longer-Term Tests**: Run experiments over longer periods to mitigate novelty effects and observe adoption trends.
- **Gradual Ramps**: Progressively ramp up experiments to limit risk and ensure accurate results before full-scale launch.
- **Hypothesis Testing**: Run multiple experiments to test related hypotheses and explore new business strategies.

---

## Common Terms in Experimentation

- **Control Variable**: A variable in an experiment that is manipulated to observe its effect on key metrics. Simple A/B experiments often use a single control variable with two values (e.g., A and B).
- **Variant**: The specific version of a product or feature being tested (e.g., A and B in an A/B test).
- **Randomization Unit**: The most granular unit in an experiment, usually a user or session, which is randomly assigned to control or treatment groups.
- **Statistical Significance**: A measure of whether the observed results are likely to be due to the change being tested, rather than random chance. The **p-value** and **confidence interval** are commonly used to assess significance.

  - **P-value**: Measures the probability of observing the results (or more extreme results) assuming there is no true effect.
  - **Confidence Interval**: Indicates the range within which the true effect lies, typically set at 95%.

---

## Choosing the Right Randomization Unit

When designing an experiment, it’s crucial to select the correct **randomization unit**, as it impacts both the user experience and the accuracy of your results.

### User Identifiers

The most commonly used unit is the **user ID**, which is tied to registered users. It ensures a consistent experience across sessions and devices, making it ideal for most controlled experiments. Registered user IDs don’t rely on cookies, which can be cleared, ensuring stability throughout the experiment.

- **Best Use Case**: When the experiment targets registered users and aims to track long-term behavior or conversions.

### Device or Anonymous User Identifiers

For users who haven’t registered, you can use **device IDs** or **anonymous user IDs**. These stable identifiers allow you to track behavior across a user’s journey, even before they register.

- **Best Use Case**: Experiments that focus on early user engagement or behaviors like landing page optimization for non-registered users.

#### Drawbacks:
- The identifier won’t track the same user across multiple devices.
- Multiple users sharing a device could skew results.

---

### Session Identifiers

In certain cases, you may use **session IDs** when behavior is tracked within individual sessions. For example, session IDs work well for guest checkout flows where each session is independent of previous ones.

- **Best Use Case**: Experiments that optimize behavior within a session, such as increasing conversion during guest checkouts.

#### Drawbacks:
- Assuming session independence can be risky for experiments targeting users who might continue their journey across sessions.

---

## Using Multiple Identifiers in Experiments

In some scenarios, you might need to use multiple identifiers across experiments. For example, you could use a device ID for an experiment focused on new user registrations while using a user ID to track subsequent behavior, such as upgrades to paid accounts.

- **Scenario**: You’re running two experiments: one optimizing the registration flow and the other testing conversion rates for paid upgrades. Use a **device ID** for the registration experiment and a **user ID** for the upgrade experiment.

![Device Level Experiments](https://user-images.githubusercontent.com/74588208/141707011-95c0c859-c60f-45f8-a6da-d31664f05e06.png)

---

## Conclusion

Experimentation is a powerful tool for driving innovation, optimizing product features, and making data-driven decisions. Whether you’re running short-term tests to optimize a specific feature or long-term experiments to discover new opportunities, the key is choosing the right metrics, identifying the best randomization unit, and using sound experimental design.

To learn more about experimentation strategies and best practices, explore this [article](https://statsig.com/blog/product-experimentation-best-practices).

---
