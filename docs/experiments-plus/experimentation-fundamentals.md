---
title: The Building Blocks of Experimentation
sidebar_label: Experimentation Fundamentals
slug: /experiments-plus/experimentation-fundamentals
---

Experimentation is the most reliable scientific method to establish causality between product features and customer impact. Controlled experiments ensure that only features which improve the user experience are shipped, making experimentation a key driver of your **pace of innovation**. 

As your innovation pace grows, experimentation also enables you to measure the success of the features you ship and uncover unexpected side effects with every code change. This allows you to iterate faster, establish key business drivers, and **make better, evidence-driven decisions** every day. In contrast, historical metrics only provide correlation, not causation, because they are influenced by multiple uncaptured external and internal factors.

---

## Scenarios for Experimentation

Statsig sees two broad scenarios where experimentation plays a key role in driving business outcomes:

### 1. Experiment to Grow Faster

Experiments can help you find the optimal solution based on your current strategy and product portfolio. For example:
- **Optimize the User Experience**: Experiments allow you to test different versions of a feature to find the best one.
- **Iterate on Key Features**: By running experiments, you can iterate on the functionality, algorithms, and infrastructure that matter the most to your users and your business.
- **Maximize Efficiency**: Experiments can help identify which ideas offer the highest return for the effort required.

Identifying the right metrics that align with your strategic goals and are sensitive to changes ensures that you don’t waste resources. At the same time, defining **guardrail metrics** ensures that key aspects of your product’s performance don't regress when you make changes.

### 2. Experiment to Discover New Opportunities

Experiments also help develop a portfolio of ideas that can lead to larger opportunities. Navigating bigger, more ambitious changes requires:
- **Longer Experiment Durations**: Running experiments for longer periods helps mitigate novelty effects and allows new versions of products enough time to build adoption.
- **Gradual Ramps**: Slowly ramping experiments up to more users limits risk and builds statistical power before full-scale launch.
- **Hypothesis Testing**: Running many experiments that test related hypotheses allows you to refine or establish new business strategies.

---

## Common Terms in Experimentation

Understanding key terms is crucial to running successful experiments. Here are the foundational concepts you need to know:

- **Control Variable**: A variable that influences the key metrics of interest. In a simple A/B test, this variable is assigned two values, but more complex tests can assign multiple values (e.g., A, B, C, D). Multivariate experiments evaluate multiple control variables to discover the global optimum when variables interact.
  
- **Variant**: A product or feature version being tested. In a simple A/B test, **A** and **B** are the two variants (often referred to as Control and Treatment).
  
- **Randomization Unit**: The smallest unit eligible to participate in an experiment. Each unit is randomly assigned to a variant, allowing for causality to be determined with high probability. Common randomization units include users, sessions, or devices. **Statsig recommends using users as the randomization unit** in most controlled experiments.
  
- **Statistical Significance**: The probability that the observed metric lift (or a more extreme value) is not due to chance. Two common methods for evaluating statistical significance are:

  - **P-value**: The p-value measures the likelihood of observing the metric lift assuming the variant has no effect. A p-value less than 0.05 is typically used to determine if the effect is statistically significant. A p-value < 0.05 indicates that there's less than a 5% chance of seeing the observed lift if the variant has no effect.
  
  - **Confidence Interval**: The range of values within which the true difference between the variant and the control is likely to fall. A 95% confidence interval covers the true difference 95% of the time. It is centered around the observed delta between the variant and control and extends 1.96 standard errors on either side.

---

## Choosing the Right Randomization Unit

When designing an experiment, selecting the correct **randomization unit** is critical. The randomization unit determines who or what is randomly assigned to control and treatment groups. The right unit ensures a consistent user experience and reliable experiment results.

### User Identifiers

**Registered User IDs** are the most common randomization unit. When a user registers with your application and creates an account, a unique user ID is generated. This ID remains stable as long as the user stays signed in, making it ideal for long-term experiments. It also ensures consistency across sessions and devices, and it doesn’t rely on client-side cookies, which may be cleared by users.

- **Best Use Case**: Experiments targeting registered users, where you need consistent tracking across sessions and devices.

---

**Learn More**  
You can provide a user ID as part of the `StatsigUser` object when implementing a feature gate or experiment on Statsig. See the [Statsig Docs](/client/concepts/user) to learn more.

---

### Other Stable Identifiers

For experiments involving users who haven’t registered or signed in, you can use **Device IDs** or **Anonymous User IDs**. These identifiers provide a stable way to track users across multiple sessions before they register.

- **Best Use Case**: Experiments that test early user interactions, such as landing page optimizations, where users haven’t yet registered.

#### Drawbacks:
- These identifiers won’t track users across multiple devices.
- Multiple users sharing a device could skew results.

---

**Learn More**  
- Learn more about [User-level vs. Device-level experiments](https://blog.statsig.com/user-level-vs-device-level-experiments-with-statsig-338d48a81778) and how different identifiers impact experiment outcomes.  
- Statsig client SDKs automatically generate **Stable IDs** when you run device-level experiments. See the [Statsig Guide for Device Experiments](../../guides/first-device-level-experiment) for more details.

---

### Session Identifiers

In cases where user behavior is measured within a single session, **Session IDs** can be used as the randomization unit. This approach works well for experiments focused on guest checkouts or other interactions that are session-based and don’t rely on long-term user behavior.

- **Best Use Case**: Experiments where each session is assumed to be independent, such as optimizing guest checkout flows.

#### Drawbacks:
- Assuming session independence may not hold true in all experiments. If a user interacts with the product in one session and returns later, they could end up being assigned to a different group, skewing results.

---

## Using Multiple Identifiers in Experiments

In some experiments, you may need to use different identifiers depending on the context. For example, when running multiple experiments, one may track the user’s entire journey using a **Device ID**, while another focuses on registered users using a **User ID**.

### Example:
- **Experiment A**: Tests the impact of a new mobile registration flow and uses a device ID as the randomization unit.
- **Experiment B**: Focuses on converting registered users to paid subscribers and uses a user ID as the randomization unit.

Both experiments can run simultaneously, and you can track how changes in one experiment affect outcomes in another (e.g., how the mobile registration flow impacts downstream conversion rates).

![Device Level Experiments](https://user-images.githubusercontent.com/74588208/141707011-95c0c859-c60f-45f8-a6da-d31664f05e06.png)

---

## Conclusion

Experimentation is a powerful tool for driving innovation, optimizing product performance, and making data-driven decisions. Whether you're running short-term tests to optimize specific features or long-term experiments to explore new business strategies, choosing the right metrics, randomization units, and experimental design is critical to success.

By understanding the building blocks of experimentation, you can iterate faster, grow smarter, and ensure your products are always improving based on real user data.

---
