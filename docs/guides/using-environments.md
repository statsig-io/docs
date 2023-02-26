---
sidebar_label: Using Environments
title: Using Environments for Conditional Evaluation outside of Production
---

All of our SDKs allow you to set the environment tier your app is currently in during initialization. If you'd like to evaluate feature gates, dynamic configs, and/or experiments to different values in development/staging environment vs. production, you simply need to set the correct environment in your code when initializing and configure the corresponding features in the Statsig Console to evaluate differently for an environment tier. The sections below detail how to do this. 

## SDK Usage

When initializing the SDK, set the environment via the `StatsigOptions` parameter.  All SDKs accept an SDK key and an (optional) `StatsigOptions` dictionary of parameters.
One of those options is the `environment` parameter, which has a `tier` field. The `tier` can be one of: "production"/"development"/"staging".  If the environment tier is unset, all checks and event logs are considered "production" data.

For this example, lets say we are setting the parameter for our development environment/app.

Client SDKs take an SDK Key, User, and StatsigOptions parameter:

```js
await statsig.initialize(<SDK_KEY>, user, {environment: {tier: 'development'}})
```

Server SDKs take just an SDK Key and StatsigOptions parameter:

```js
await statsig.initialize(<SDK_KEY>, {environment: {tier: 'development'}})
```

These examples in js and node illustrate the general pattern - refer to your language's specific SDK documentation for more information.

## Console Usage

Head on over to the Console and create a new Feature Gate.  For this example, I'll call mine "development mode." It will only pass for our development apps.

<img width="486" alt="Screen Shot 2023-02-26 at 3 10 09 PM" src="https://user-images.githubusercontent.com/101903926/221443079-59d81448-d070-4da0-a010-f038016a6b09.png"/>

At rule creation, you will have the opportunity to configure the target environments for that rule. Check the "Specify Environemnts" checkbox and choose which environments you want your rule to be enabled for. By default unless otherwise specified, a rule is enabled for ALL environments. 

 <img width="490" alt="Screen Shot 2023-02-26 at 3 12 31 PM" src="https://user-images.githubusercontent.com/101903926/221443202-de70eab5-68d5-4173-8f6d-7c680762212e.png"/>

Press "Save" and that's it! You can now see which environment(s) your rule is enabled for inline, directly below the rule name. 

<img width="1497" alt="Screen Shot 2023-02-26 at 3 14 59 PM" src="https://user-images.githubusercontent.com/101903926/221443319-597f1e1e-facc-41a0-8b7a-dcff0fec4405.png"/>

You can also easily filter rule-sets by environment via environment filters in the upper right-hand corner of your rule-set within your Feature Gate. 

<img width="1490" alt="Screen Shot 2023-02-26 at 3 19 04 PM" src="https://user-images.githubusercontent.com/101903926/221443466-92616326-bdb3-4025-99de-9fa3fd2af558.png"/>

A rule's target environment(s) can be edited at any time. To do so, tap the "..." on the rule.

<img width="1498" alt="Screen Shot 2023-02-26 at 3 16 42 PM" src="https://user-images.githubusercontent.com/101903926/221443425-c8a5e4fe-f49a-47f9-96a7-568ef2f2dd5d.png"/>

Then select "Edit Rule" and specify any environment changes you want to make. 





![Screen Shot 2022-06-26 at 11 44 27 AM](https://user-images.githubusercontent.com/74584483/175829370-52b03b85-aa1c-4092-a4aa-408840c28e36.png)

Your gate should now have a separate section for "development" rules:

![Screen Shot 2022-06-26 at 11 45 07 AM](https://user-images.githubusercontent.com/74584483/175829388-17088f7e-fcdb-4dd2-89f3-33bc5ad4758c.png)

Under "Development Rules" hit "Add a Rule."  Lets make this pass for everyone on the development tier:

![Screen Shot 2022-06-26 at 11 46 00 AM](https://user-images.githubusercontent.com/74584483/175829414-46abecaf-af7e-4118-96b4-32be4034f2ce.png)

After clicking **Save Changes** you can test it out in the test gate console at the bottom.  You should see the gate Pass when the environment tier is set to "Development"

![Screen Shot 2022-06-26 at 11 47 14 AM](https://user-images.githubusercontent.com/74584483/175829453-3c6da0bb-3d6a-4aee-adaa-15e4a852a9c1.png)

You have successfully created a gate which will pass for all users who are using one of your "development" builds.

Happy building!

