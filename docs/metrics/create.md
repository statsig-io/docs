---
title: Creating Custom Metrics
sidebar_label: Creating Custom Metrics
slug: /metrics/201/create
---


To create custom metrics, navigate to **Metrics** from the left-hand navigation panel, then to the **Metrics Catalog** tab. Tap on the **Create** button. 

![Screen Shot 2022-06-07 at 1 02 48 PM](https://user-images.githubusercontent.com/101903926/172471990-b0a0c3a8-f017-4166-9095-6a981af7cc87.png)

Statsig supports four types of custom metrics:

| Metric Type | Description | Examples |
|-------------|-----------------------|---------|
| Event Count | **Total count of events** filtered by the _value_ and _metadata_ properties of an event type | **Add to Cart** event filtered by category type |
| User Count |  **Number of unique users** that trigger events filtered by the _value_ and _metadata_ of an event type| **Active Users** based on their views of a product category |
| Aggregation       | **Sum or Average** of the _value_ or _metadata_ property of an event type  | **Total Revenue** |
| Ratio  | **Rates** (e.g. cart conversion rate, purchase rate),  **Normalized Values** (e.g. sessions per user, items per cart) | **Cart Conversion Rate**, **Sessions per User** |

Statsig computes custom metrics on a per day basis for your **Metrics** dashboard, and rolled up for the duration of the experiment in your **Pulse Results** delivered with your Feature Gates and Experiments.  After you create a custom metric, it will not populate until the next day (and will not backfill to previous days). Statsig will only calculate it moving forward from the creation date.

## Examples

### 1. Event Count Metrics
Here's an example of setting up a custom event metric to count the **number of add_to_cart events** filtered by a metadata property called _value_, which carries the price of the item added to the cart. As this example specifies the ID Type as _userID_, Statsig will compute this metric as part of the test group that the corresponding user is assigned to in an experiment. 

![image](https://user-images.githubusercontent.com/1315028/160023689-927c4343-37fd-4f7e-a6e5-30d684b71e10.png)

If you select the ID Type as _stableID_, Statsig will compute this metric in the test group that the corresponding device is assigned to in an experiment. When you select more than ID Type, Statsig will compute this metric for each type of ID Type that you specify.  

### 2. User Count Metrics 
The example below creates a metric to count the **number of unique users** who viewed a product in the _books_ category and that was priced under $10.

![image](https://user-images.githubusercontent.com/1315028/160025339-5f9d7e29-5a39-4689-8954-5ba819d9d609.png)


### 3. Aggregation Metrics
The example below shows a **Total Revenue** metric that sums the _value_ associated with all purchase events. 

![image](https://user-images.githubusercontent.com/1315028/160025808-b84b45c5-9817-4fb9-8bd2-fe9fbd25b66a.png)

### 4. Ratio Metrics
The example below shows the creation of a **Cart Conversion Rate** metric. Here we use the unique users who triggered the _purchase event_ as the numerator and the unique users who triggered the _add to cart_ event in the denominator. Note that when calculating the numerator, we filter to only include users who also had the denominator event in the same day. So in the case of this metric, a user who only has _purchase event_ on a given day without an _add to cart_ on that same day will not count towards the numerator.

![image](https://user-images.githubusercontent.com/1315028/160025540-550bbee3-cfbd-4fc0-9a46-5db4f2e09c5e.png)

This pattern also applies to **click through rates (CTR)** in any part of a step-wise product journey (aka funnels). Statsig recommends using unique users in both the numerator and denominator for defining these kinds of metrics. As an example, when a user reloads a page multiple times but clicks only once, this corresponds to a 100% CTR (1 out of 1). Similarly, a user who loads a page once but clicks multiple times on a button should only count as 1 out of 1. This also solves for cases where users see an important button such as "Sign-up" multiple times a day, and we would still consider it a success if they click just once.

The example below shows creating a metric for **Items per Cart**. You can track the number of unique items added to a cart if you log an _add_to_cart_ event for each item. For the numerator, select total event count. For the denominator, select unique users. As this metric is computed daily and only for users with a non-zero denominator, this metric can generate ratios such as 1/1, 2/1, 2/1, and 5/1 for individual users. When aggregated, this translates to 10/4 = 2.5 items per cart on average per day.

![image](https://user-images.githubusercontent.com/1315028/160026924-165df332-53fe-4faa-a40c-3d5872fa2f8b.png)

:::info A Word of Caution
In experimentation, ratio metrics are a frequent source of misleading information. It's possible to see an increase in **click through rate** alongside a net _decrease_ in total clicks (the opposite may also happen). This situation can occur if the number of unique users viewing a button (denominator) decreases. As a best practice, Statsig recommends tracking the numerator and denominator as independent metrics when monitoring ratio indicator. Ratio metrics are often subject to statistical noise and can be tricky to use for obtaining a statistically significant result.
:::

## Funnel Metrics

You can create a custom funnel metric, from either the Custom Metrics Creation wizard in the Metrics Catalog or via the **Charts** tab. 

![Screen Shot 2022-06-07 at 1 05 37 PM](https://user-images.githubusercontent.com/101903926/172472515-c94b264c-85a6-4b78-bf12-769585e4880d.png)

### Components of Funnel Metrics
Funnel metrics have a few components:
1. **Lineage**: Surfaces the events used to generate the funnel 
2. **Metric Value**: Metric value represents the overall funnel conversion rate, or the percentage of users who complete a funnel (trigger the end event) relative to all users who start the funnel (trigger the starting event)
3. **Conversion rate between stages**: This set of metrics track the percentage of users who triggered an event N relative to all users that triggered event N-1 in the funnel

![Screen Shot 2022-06-07 at 10 34 58 AM](https://user-images.githubusercontent.com/101903926/172446711-5511e394-b353-4d38-97f1-1b681b67042b.png)

After funnels are created and populated, you can view your funnel metric much like any other metric in Pulse. Additionally, you can expand the funnel metric to view Pulse performance at each step in the funnel. 

In the example below, the **Square** variant shows a lift in the **overall funnel conversion rate**. Expanding the metrics to examine the entire funnel reveals two key insights:
* Both the **Square** and **Circle** variants show a lift in top-of-funnel DAU (_Land Page View Start DAU_). However, only the **Square** variant shows statistically significant increase in end-of-funnel DAU (_Purchase Event End DAU_).
* The overall funnel conversion rate improvement for **Square** is primarily due to the higher conversion from _Checkout Event_ to _Purchase Event_ stages in the funnel.  

![image](https://user-images.githubusercontent.com/90343952/148440643-8e8a24bd-934d-4100-a15a-abcbcc4bb11c.png)
