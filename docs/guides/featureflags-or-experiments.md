---
sidebar_label: Choosing Flags or Experiments
title: When to use Feature Flags vs. Experiments?
---

:::note
In Statsig, _feature flags_ are referred to as **feature gates** in the UI and SDKs.
:::

With Statsig, you can create control and test groups and compare them using A/B testing via either **feature gates** or **experiments**. This guide helps clarify when to use a feature gate versus an experiment, depending on your needs.

---

## What Do You Need?

- **Feature Gate**: Use this if you want to measure the impact of a feature and roll it out gradually.
- **Experiment**: Use this when you want to test hypotheses between multiple product variants.

---

## Key Differences

Here are a few important considerations when deciding between a feature gate or an experiment for your A/B test:

1. **Number of Variants**:
   - **Feature Gate**: Provides only two variants (feature on vs. feature off).
   - **Experiment**: Can handle multiple variants for more complex A/B testing.
   - **Important Note**: When viewing feature gate exposures, you'll see three groups: "Pass," "Fail," and "Fail-Not in Analysis." While all users are bucketed into "Pass" or "Fail," only a balanced portion of the "Fail" group is used for metric analysis. You can read more about this in our [balanced gates methodology](/feature-flags/view-exposures#gate-exposures).

2. **Exposure Results**:
   - **Feature Gate**: Returns a boolean (`true` or `false`) to assign users to the control (off) or test (on) group.
   - **Experiment**: Returns a JSON config that helps configure your app experience for the user's assigned group.

3. **Ramping Up**:
   - **Feature Gate**: Increase the **Pass%** to gradually roll out a feature to more users.
   - **Experiment**: Increase the **Allocation%** to add more users to your test.
   - In both cases, once users are assigned to a group, they continue to receive the same experience, meaning ramping up **Pass%** or **Allocation%** will not reshuffle users (i.e., no **resalt** occurs).

![image](https://user-images.githubusercontent.com/1315028/158034863-71cc65ea-8833-47e8-a277-89119f7a00ab.png)

---

## Other Considerations

### When to Use Experiments

Statsig's **Experiments** offer advanced capabilities beyond feature gates. Some key features include:
1. **Analyzing Variants Using Stable IDs**: This is useful for testing when users are not yet signed up or signed in. You can also use custom IDs to analyze user groups, sessions, workspaces, or even geographical data like cities.
2. **Running Multiple Isolated Experiments**: You can run multiple experiments concurrently without interference, ensuring reliable data for each.

### When to Use Feature Gates

Feature gates are great for measuring the impact of a feature during gradual rollouts, but they can also serve as **targeting gates** within experiments. Here’s how they work in that context:
- **Targeting Gate**: Constrains the audience for the experiment based on specific targeting rules.
- **Experiment Allocation%**: Determines the share of the target audience that will participate in the experiment.
- **Experiment Split%**: Splits the participating users into various test groups.

Once a decision is made on which variant to ship, Statsig will lift the targeting gate and deliver the "winning" variant to all users.

---

### Final Thoughts
If you're focusing on **gradual feature rollouts**, start with a **Feature Gate**. If you need to **test multiple product variants** and analyze performance, go with an **Experiment**. Keep in mind that you can use both in combination to control target audiences and run more complex, segmented tests.

---
