---
sidebar_label: Using Environments
title: Using Environments for Conditional Evaluation outside of Production
---

All of our SDKs allow you to set the environment tier your app is currently in during initialization. If you'd like to evaluate feature gates, dynamic configs, and/or experiments to different values in development/staging environment vs. production, you simply need to set the correct environment in your code when initializing and configure the corresponding features in Statsig console to evaluate differently for an environment tier. The sections below goes into details on how to do these.

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

Head on over to the console and create a new feature gate.  For this example, I'll call mine "development mode." It will only pass for our development apps.

![Screen Shot 2022-06-26 at 11 42 43 AM](https://user-images.githubusercontent.com/74584483/175829319-85b98b49-969d-4cc6-a81c-eea40a1d48ff.png)

Then, toggle on the Environment Rules from the overflow menu in the top right:

![Screen Shot 2022-06-26 at 11 43 02 AM](https://user-images.githubusercontent.com/74584483/175829349-0efa1daa-f35e-41a0-8d1c-21223bda8bdc.png)

And select the "development" option:

![Screen Shot 2022-06-26 at 11 44 27 AM](https://user-images.githubusercontent.com/74584483/175829370-52b03b85-aa1c-4092-a4aa-408840c28e36.png)

Your gate should now have a separate section for "development" rules:

![Screen Shot 2022-06-26 at 11 45 07 AM](https://user-images.githubusercontent.com/74584483/175829388-17088f7e-fcdb-4dd2-89f3-33bc5ad4758c.png)

Under "Development Rules" hit "Add a Rule."  Lets make this pass for everyone on the development tier:

![Screen Shot 2022-06-26 at 11 46 00 AM](https://user-images.githubusercontent.com/74584483/175829414-46abecaf-af7e-4118-96b4-32be4034f2ce.png)

After clicking **Save Changes** you can test it out in the test gate console at the bottom.  You should see the gate Pass when the environment tier is set to "Development"

![Screen Shot 2022-06-26 at 11 47 14 AM](https://user-images.githubusercontent.com/74584483/175829453-3c6da0bb-3d6a-4aee-adaa-15e4a852a9c1.png)

You have successfully created a gate which will pass for all users who are using one of your "development" builds.

Happy building!

