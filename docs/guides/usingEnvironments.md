---
sidebar_label: Using Environments
title: Using Environments for Conditional Evaluation outside of Production
---

## Prerequisites

The following SDK/versions support environments:

Client:
- js: v2.3.2+
- react: v0.1.0+
- ios: v1.1.0+


Server:
- statsig-node v3.2.0+

## SDK Usage

When initializing the SDK, set the environment via the StatsigOptions parameter.  All SDKs accept an SDK key and an (optional) StatsigOptions dictionary of parameters.
One of those options is the "environment" parameter, which has a "tier" field. The "tier" can be either "production"/"development"/"staging".

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

![Screen Shot 2021-06-16 at 1 55 06 PM](https://user-images.githubusercontent.com/74584483/122292351-c0d6d900-ceaa-11eb-996d-a367cad6ed92.png)

Then, add a rule with an "Environment Tier" condition:

![Screen Shot 2021-06-16 at 1 55 34 PM](https://user-images.githubusercontent.com/74584483/122292404-ce8c5e80-ceaa-11eb-9730-26859d94ef9c.png)

And select the "development" option:

![Screen Shot 2021-06-16 at 1 55 43 PM](https://user-images.githubusercontent.com/74584483/122292429-d6e49980-ceaa-11eb-942b-d8b4b0585bbf.png)

Your rules should look something like this - don't forget to click "Save Changes" to finalize them!

![Screen Shot 2021-06-16 at 1 56 00 PM](https://user-images.githubusercontent.com/74584483/122292509-e7950f80-ceaa-11eb-83f5-7e404df12df0.png)

Now you have created a gate which will pass for all users who are using one of your "development" builds.

Happy building!

