---
title: Choosing the Randomization Unit
sidebar_label: Choosing the Randomization Unit
slug: /experiments-plus/experimentation/choosing-randomization-unit
---

# Choosing the Unit of Randomization 
When designing an experiment, you will pick a **unit of randomization** to decide *who* or *what* is randomly allocated to your control and treatment groups. 
The choice of the randomization unit is critical in experiment design as it impacts your user experience as well as the accuracy of your experiment's results. 
Choosing the right randomization unit will ensure that you deliver a consistent experience to your users and get reliable results from your experiments. 

## Some units are better than others 
A key assumption in most A/B tests and experiments is the **stable unit treatment value assumption (SUTVA)**, where the response of a unit of randomization under treatment is 
independent of the response of another unit under treatment. The most common unit of randomization is the user identifier your application uses to uniquely identify an individual user.
You may choose to use other types of identifiers based on the kind of experiment you want to run and the constraints around it as outlined below.

### User Identifiers
**Registered User IDs** are the most commonly used units of randomization. Your application would generally create a registered user ID after the user has registered with your application and created an account. 
Available as long as the user stays signed-in, the user ID is the most popular unit of randomization as it ensures a consistent user experience, 
across sessions and devices. It doesn't depend on client-side cookies, which may be cleared by the user at any time.

---
**Learn More**

You can supply a user ID as part of the ``StatsigUser`` object when you implement an feature gate or experiment on Statsig. See [Statsig Docs](/client/concepts/user) to learn more.   

---

### Other Stable Identifiers 
**Device IDs** or **Anonymous User IDs** are used as units of randomization for experiments that involve users who haven't registered or signed into your application. 
For example, you may choose to use a device ID or an anonymous user ID when you want to test the impact of different landing page options on user registration. 
As the device is a stable vehicle of usage for the user, it offers a stable identifier to observe the user's behavior over their journey with your application. 
As a variant of this approach, some applications may choose identify anonymous users by saving first party cookies on the user's device. 

#### Drawbacks
  While these identifiers offer a stable tracking mechanism, they do have certain drawbacks. 
  - The main drawback is that you won't have access to this identifier if the same user engages with your application on a different device.
  - A less common drawback arises when multiple users may use the same device. In this case, you will end up including their combined engagement in the metrics you use to evaluate experiments.
  - As these identifiers are device-specific, they are available only with client SDKs to help you instrument the client-side of your application. These identifiers are not available with server SDKs.


---
**Learn More**

- Read more about [User-level vs. Device-level experiments](https://blog.statsig.com/user-level-vs-device-level-experiments-with-statsig-338d48a81778) and how these identifiers are used to report the right experiment results. 
- Statsig client SDKs automatically generate **Stable IDs** for your users when you choose to run a device-level experiment. See the [Statsig Guide for Device Experiments](../../guides/first-device-level-experiment) to learn more about how to use stable IDs for experiments involving anonymous users. 

---

### Other Identifiers 
**Session IDs** are used in select use cases where the metric you're trying to improve is meaningful within a session *and* when you can safely assume that each session is independent. 
An example where you may choose to use session IDs when running experiments to optimize conversion rate for guest checkouts that are tracked on a per session basis. 
    Another use case for sessions IDs is when you need an identifier for use with server SDKs but want to run experiments for users who haven't yet unregistered or have signed-out.
    
#### Drawbacks
As users frequently remember their experience from an earlier session, assuming user sessions to be independent can be a significant assumption to make for most experiments. 
For example, if a user sees a product in one session as part of the control group and returns to complete the purchase in a different session, there's no guarantee they'll be placed in the control group again. 
If this time they're placed in the treatment group, you may overestimate the positive impact of the treatment. 
      
    
## Using multiple identifiers
When you're running multiple experiments, you may choose to use a different identifier for each experiment depending on the context.
Consider a scenario where you're running two experiments as shown below. One experiment (A) tracks the impact of a new mobile registration flow on the number of user registrations.
Another experiment (B) tracks the impact of a new upgrade flow for converting your registered users to subscribed users. 
Ideally, you also want to track the how your new mobile registration flow impacts downstream conversion to subscribed users.

In this scenario, experiment A will require an identifier that you can use over the entire user journey, say a stable device ID. 
For experiment B, you may prefer to use the user ID that forms the basis for most of your existing business metrics such as the rate of conversion to your subscription products.  


![Device Level Experiments](https://user-images.githubusercontent.com/74588208/141707011-95c0c859-c60f-45f8-a6da-d31664f05e06.png)

















