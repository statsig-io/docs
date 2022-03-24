---
title: Creating Metrics
sidebar_label: Creating Metrics
slug: /metrics/create
---

## Metrics Automatically Derived from Events

Statsig's metrics engine automatically creates three types of metrics from the events that you log with Statsig, including log_event(), check_gate() and get_config() Statsig calls:
1. **Event Count** (event_count) - The _total count of events_ triggered per day
2. **Event Daily Active Users** (event_dau) - The _number of unique users_ that triggered these events on a given day
3. **User Accounting Metrics** (user) - This includes project-wide metrics such as _monthly active users_, _weekly new users_, _D1-retention_, and _weekly stickiness_. This standard set of user accounting metrics are based on a definition of a _daily active user_. 

## Custom Metrics

You can also create custom metrics for your product and business needs. Navigate to **Metrics** from the left hand navigation panel and click on the **Custom** tab. 

![Custom Metrics Section](https://user-images.githubusercontent.com/77478319/137035147-1d87b955-3f95-46b7-b2c7-fb709f7cec7d.png)

Statsig supports four types of custom metrics:

| Metric Type | Description | Examples |
|-------------|-----------------------|---------|
| Event Count | **Total count of events** filtered by the _value_ and _metadata_ properties of an event type | **Add to Cart** event filtered by category type |
| User Count |  **Number of unique users** that trigger events filtered by the _value_ and _metadata_ of an event type| **Active Users** based on their views of a product category |
| Ratio  | **Rates** (e.g. cart conversion rate, purchase rate),  **Normalized Values** (e.g. sessions per user, items per cart) | **Cart Conversion Rate**, **Sessions per User** |
| Aggregation       | **Sum or Average** of the _value_ or _metadata_ property of an event type  | **Total Revenue** |

Statsig computes each custom metric on a per unit and per day basis for your **Metrics** dashboard, and on a per unit basis rolled up by the duration of the experiment in your **Pulse Results** delivered with your Feature Gates and Experiments.    

### Examples

#### 1. Event Count Metrics
Here's an example of setting up a custom event metric to count the **number of add_to_cart events** filtered by a metadata property called _value_, which carries the price of the item added to the cart. As this example specifies the ID Type as _userID_, Statsig will compute this metric per user.   

![image](https://user-images.githubusercontent.com/1315028/160023689-927c4343-37fd-4f7e-a6e5-30d684b71e10.png)


#### 2. User Count Metrics 
The example below creates a metric to count the **number of unique users** who viewed a books product that was priced under $10.

![image](https://user-images.githubusercontent.com/1315028/160025339-5f9d7e29-5a39-4689-8954-5ba819d9d609.png)



#### 3. Ratio Metrics
The example below shows the creation of a **Cart Conversion Rate** metric, using the unique users who triggered the _purchase event_ as the numerator and the unique users who triggered the _add to cart_ event in the denominator. 

![image](https://user-images.githubusercontent.com/1315028/160025540-550bbee3-cfbd-4fc0-9a46-5db4f2e09c5e.png)

This pattern also applies to **click through rates** in any part of a step-wise product journey (aka funnels). We recommend using unique users in both the numerator and denominator for defining these kinds of metrics. As an example, when users reload a page multiple times, but click only once correspond to a 100% CTR (1 out of 1). Similarly, users who load a page once, but click multiple times on a button should only count as 1 out of 1. This also solves for cases where users see an important button such as "Sign-up" multiple times a day, and we would still consider it a success if they click just once.

Another example below shows creating a metric for **Items per Cart**. You can track the number of unique items added to a cart if you log an _add_to_cart_ event for each item. For the numerator, select total event count. For the denominator, select unique users. As this metric is computed daily and only for users with a non-zero denominator, this metric can generate ratios such as 1/1, 2/1, 2/1, and 5/1 for individual users. When aggregated, this translates to 10/4 = 2.5 items per cart on average per day.

![image](https://user-images.githubusercontent.com/1315028/160026924-165df332-53fe-4faa-a40c-3d5872fa2f8b.png)


#### 4. Aggregation Metrics
The example below shows a **Total Revenue** metric that sums the _value_ associated with all purchase events. 

![image](https://user-images.githubusercontent.com/1315028/160025808-b84b45c5-9817-4fb9-8bd2-fe9fbd25b66a.png)


#### A Word of Caution

In experimentation, ratio metrics are a frequent source of misleading information. It's possible to see an increase in **click through rate** alongside a net _decrease_ in total clicks (the opposite may also happen). This situation can occur if the number of unique users viewing a button (denominator) decreases. As a best practice, Statsig recommends tracking the numerator and denominator as independent metrics when monitoring ratio indicator. Ratio metrics are often subject to statistical noise and can be tricky to use for obtaining a statistically significant result.
