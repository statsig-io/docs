---
title: Holdouts
sidebar_label: Holdouts
slug: /holdouts
---

Holdouts measure the aggregate impact of multiple features. A "holdout" is a group of users that are held back from a set of features to measure the aggregate impact of this feature set. While each A/B test or experiment you run compares control and test groups for that feature, a holdout compares a ‘global’ control group with users who have been exposed to a subset of the features. 

## How to use Holdouts
1.	To create a new holdout, navigate to the Holdouts section on the Statsig console: https://console.statsig.com/ 
2.	Click the Create New button and enter the name and description of the holdout that you want to create. 
3.	You can choose to either create a global or a selected holdout. A global holdout captures the aggregate impact of all features developed after the holdout began. A selected holdout captures the aggregate impact of a specific selection of features that you want to hold off. 
4.	By default Holdouts apply to a % of all users (Population = Everyone). You can optionally target the Holdout at a subset of users by applying a Targeting Gate (Population = Targeting Gate). e.g. If you wanted an iOS users only Holdout, you could apply a Targeting Gate that only passes iOS users.    
5.	You must set the percentage of users to be held-out between 1% to 10%. Statsig recommends a small holdout percentage to limit the number of customers who don’t see new features. 

![image](https://github.com/statsig-io/docs/assets/31516123/f949e687-ee6e-49aa-bdc3-23159030a510)

## How to read Holdouts
The Metric Lifts section shows the comparison of *Not in Holdout* vs. *In Holdout*.  In other words, it represents the cumulative impact of launched and active experiments and gates relative to the Holdout group, which doesn't see any of these changes.  In the example below, the new features are having an overall negative effect on many metrics.

![image](https://user-images.githubusercontent.com/1315028/131407825-23f00cd3-8e64-429c-91a4-48a8eaa8555a.png)

## Best Practices
1. **Size** - Statsig recommends a small holdout percentage, say 1% – 2%, to limit the number of customers who don’t see new features. 
2. **Duration** - Statsig recommends operating holdouts for a period of three to six months, and then releasing the holdout. Prolonging the holdout period may increase the complexity of your software as you’d have to maintain a functioning product with no new features for a longer period.  
3. **Back testing** - Occasionally you may want to turn off a set of features that you have already released to measure the effectiveness of those features. Statsig doesn’t recommend this as it turns off features that users are already using and relying on. However, when a "back measurement" is critical, you can use Holdouts to turn off a set of features and automatically compute the impact of this set of features.

## Unit ID Types
By default, holdouts are based on User ID.  To use a different ID type, select it from the drop down menu during the holdout creation.  Note that holdouts can only be applied to Experiments and Feature Gates that use the same randomization unit.  If a team plans to run experiments on both User ID and Stable ID, two separate holdouts are required to evaluate the cumulative impact of each type of experiment.

![image](https://user-images.githubusercontent.com/90343952/149035806-6764f5f5-cd72-49f9-8c8e-9c0eac217155.png)

## Holdout effects on Gates & Experiments SDK methods
### Gates
* For users in holdout, gates will always return `False`.
### Experiments
* For users in holdout, if the experiment _is not in a Layer_, calls to get experiment parameters will always return the "default value" passed in code.
* For users in holdout, if the experiment _is in a Layer_, calls to get experiment parameters will return the values defined in the Layer defaults in the Statsig console.
