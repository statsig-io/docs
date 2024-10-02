title: Normalized Metrics (aka Clustered Experiments)
slug: /statsig-warehouse-native/metrics/normalized-metrics
sidebar_label: Normalized Metrics
---

# Normalized Metrics

## When to use it
With normal A/B tests the unit of randomization (e.g. UserID) matches the unit of analysis. In some cases it is useful for these to be different. The most common example is with B2B experiments - where you want to randomize by BusinessID - but measure by average metric per userID, not average metric per businessID.

For example - you've added image support to a collaborative commenting feature in your product and want to A/B test it before rollout. You randomize it using businessID. You cannot randomize by userID, since you need everyone within a single business to either have this new feature or not. If you simply compared # of comments per businessID, this data would be skewed by large companies. A business with 1000 employees, but 10 comments would "contribute more" than a business with 5 employees who made 5 comments. Normalizing a metric in this case - is normalizing by users exposed to the experiment. In this instance if 1000 and 5 users were exposed from each business, the first business would have a comments/user rate of 0.01, while the second company would have a comments/user rate of 1. This is reasonable now to compare across companies of many different sizes. 

 ## what it does
Under the covers, normalizing a metric simple creates a ratio metric. The numerator is metric you're normalizing. The denominator is a COUNT DISTINCT of the UnitID you're normalizing to.
If you wanted to, you could also create this ratio metric yourself and use it in experiments - this is documented [here](https://docs.statsig.com/metrics/different-id). 

## How to do it
You can create Normalized Metrics when adding metrics to an Experiment. ![image](https://github.com/user-attachments/assets/a440ccfa-0271-4fbd-ba9d-7bb858f3e180)
You can select the unitID to normalize using next. ![Uploading image.png…]()
