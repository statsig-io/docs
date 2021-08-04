---
sidebar_label: Holdouts
title: Holdouts
---

Imagine you have teams of product developers, constantly building and shipping new features. Some features are positive to your product metrics, some are neutral, and some are negative to your metrics. While it's relatively straightforward to quantify the impact of each feature, it's not that easy to measure the impact of all the features in a cumulative fashion.

Holdouts help measure the total sum of impact of multiple features in one go.

A "Holdout" is a group of users that are held out from one or more features in order to measure the combined impact of all those features. You can think of it as a "global control group" - while each experiment you run will compare the control and test groups for that feature, a Holdout will compare the "global control" (users who never got ANY experiment) with users who may have been in one or more experiments.

![image](https://user-images.githubusercontent.com/74588208/128143158-f947c4ef-f748-411c-9741-7793b4e2ed05.png)

### Reading the impact of Holdouts

Note that when Pulse computes the impact of Holdouts, it is measuring the metric impact for those that aren't getting any of the new features they are held-out from. If these metrics show a negative lift, that means the features you have shipped are having a positive impact on the product. Meaning, a negative lift from a Holdout is actually good for the product.

### Size and duration of Holdouts

We don't recommend creating too large of a hold-out. The larger the Holdout, the more people that won't get all the new features. Statsig allows you to create a Holdout from 1-10%.

We also recommend keeping Holdouts for a short amount of time - like 3-6 months, and then release it. Or else your product's development complexity would increase since you'd have to maintain a functioning product for much longer for those that aren't getting any new features.

### Global or "a la carte"

With Statsig you can choose to have a global Holdout, which affects all features created after the Holdout, or you can choose just a selection of features you want to hold off from users.

![image](https://user-images.githubusercontent.com/74588208/127932762-d3278142-d687-4c77-9db8-7ebb0c55ebbd.png)

### Backtesting

Sometimes you might want to go back and turn off a set of features that have already been released in order to measure the effectiveness of those features. This is generally not advisable, since it removes features that users might have gotten used to. However in situations where a "back measurement" is absolutely critical, you can use Holdouts to turn off a set of features, and let the system automatically compute the impact of these set of features.
