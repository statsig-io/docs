---
sidebar_label: Choosing Flags or Experiments
title: When to use Feature Flags vs. Experiments?
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

With Statsig, you can create control and test groups, and compare these groups as an A/B test using either a feature flag (gate) or an experiment. 
If you're wondering when to use a feature flag vs. an experiment, this guide is for you.  

## What do you need?
In short, 
 - Want to measure the impact of a feature (and roll it out gradually)? Use a **Feature Gate**.
 - Want to test your hypotheses between product variants? Create an **Experiment**.

## What to expect?
As you design your A/B test, here are three further details to consider:
 - A Feature Gate can offer only two variants (feature on vs. feature off); an Experiment can offer multiple variants
      - NOTE that when you look at your Feature Gate exposures you'll see your exposures divided up into three groups- "Pass", "Fail", and "Fail- not in analysis". While all units will be bucketed into either Pass/ Fail, for the purposes of metric lifts analysis, we compare a matching % of your Fail group against your Pass group and do not use the remainder of the Fail group for analysis. You can read more about this "balanced gates" methodology [here](/feature-flags/view-exposures#gate-exposures).
 - A Feature Gate exposure check returns a boolean (true/false) to assign the user to either the control or test group; an Experiment exposure check returns a JSON config to help you configure your app experience based on the group that the user is assigned to
 - To ramp up, you will increase the Pass% in a Feature Gate, and increase the Allocation% in an Experiment. In both cases, users in each group will continue to receive their first assigned experience i.e. ramping up Pass% or Allocation% does not resalt (or reshuffle) users. 

![image](https://user-images.githubusercontent.com/1315028/158034863-71cc65ea-8833-47e8-a277-89119f7a00ab.png)


## Other Considerations
### Using Experiments
Statsig's Experiments offer more capabilities than Feature Gates for advanced experiment designs. For example, with Experiments you can: 
1. Analyze variants using stable IDs for situations when users have not yet signed-up (or signed-in), or using custom IDs to analyze user groups, pages, sessions, workspaces, cities, and so on
2. Run multiple isolated experiments concurrently 

### Using Feature Gates
While Feature Gates are independently useful to measure impact during feature roll outs, you can also use a Feature Gate with [targeting rules](/feature-flags/conditions) as a **targeting gate** within an Experiment.
In this case, the targeting gate serves to constrain the target audience of your experiment. The Allocation% of the Experiment selects a share of this eligible target audience for participation in the experiment. The Split% of the Experiment further splits these participating users into different test groups.

Once you _make a decision_ for the Experiment and ship a variant, Statsig lifts the targeting gate constraint and delivers the "winning" variant to all users.   


