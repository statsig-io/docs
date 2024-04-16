---
sidebar_label: Using Environments
title: Using Environments for Conditional Evaluation outside of Production
---

All of our SDKs allow you to set the environment tier your app is currently in during initialization. 

If you'd like to evaluate feature gates, dynamic configs, and/or experiments to different values in lower environments vs. Production, you simply need to set the correct environment in your code when initializing and configure the corresponding Feature Gate rules in the Statsig Console to evaluate differently for a given environment tier. The sections below detail how to do this. 

## SDK Usage

There are two main levers for setting environment- 
1. **Environment-specific SDK keys**- used to control which rules are downloaded to a given SDK 
2. **Environment tier at SDK initialization**- used for evaluating rules   

### Environment-specific SDK Keys
Configuring an environment-specific SDK key enables you to control which rule-sets are sent to a given SDK based on environment. For example, if an SDK is initialized with an API key set to development, it will not know about any rules that have been set for any other environment. For more information, see the [Per-Environment API keys section](#per-environment-api-keys) further down this page.

### Environment Tier Parameter 
It's important to note that SDK keys can correspond to multiple environments, so you need to set the environment tier on SDK initialization explicitly, even if you are using an environment-specific SDK key. You can set the environment via the `StatsigOptions` parameter.  All SDKs accept an SDK key and an (optional) `StatsigOptions` dictionary of parameters.

One of these options is the `environment` parameter, which has a `tier` field. The `tier` can be any of your pre-configured environments (see below for how to configure new environments).  If the environment tier is unset, all checks and event logs are considered "production" data.

Please note, that per-environment API keys do not affect the evaluation context of feature gates, dynamic configs or experiments: they only restrict which rules the SDK can download. 

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

## Using Environments in Feature Gates 

Head on over to the Console and create a new Feature Gate.  For this example, I'll call mine "development mode." It will only pass for our development apps.

<img width="486" alt="Screen Shot 2023-02-26 at 3 10 09 PM" src="https://user-images.githubusercontent.com/101903926/221443079-59d81448-d070-4da0-a010-f038016a6b09.png"/>

At rule creation, you will have the opportunity to configure the target environments for that rule. Check the **Specify Environments** checkbox and choose which environments you want your rule to be enabled for. By default unless otherwise specified, a rule is enabled for ALL environments. 

 <img width="490" alt="Screen Shot 2023-02-26 at 3 12 31 PM" src="https://user-images.githubusercontent.com/101903926/221443202-de70eab5-68d5-4173-8f6d-7c680762212e.png"/>

Press "Save" and that's it! You can now see which environment(s) your rule is enabled for inline, directly below the rule name. 

<img width="1497" alt="Screen Shot 2023-02-26 at 3 14 59 PM" src="https://user-images.githubusercontent.com/101903926/221443319-597f1e1e-facc-41a0-8b7a-dcff0fec4405.png"/>

You can also easily filter rule-sets by environment via environment filters in the upper right-hand corner of your rule-set within your Feature Gate. 

<img width="1490" alt="Screen Shot 2023-02-26 at 3 19 04 PM" src="https://user-images.githubusercontent.com/101903926/221443466-92616326-bdb3-4025-99de-9fa3fd2af558.png"/>

A rule's target environment(s) can be edited at any time. To do so, tap the "..." on the rule. Then select "Edit Rule" and specify any environment changes you want to make. 


<img width="1498" alt="Screen Shot 2023-02-26 at 3 16 42 PM" src="https://user-images.githubusercontent.com/101903926/221443425-c8a5e4fe-f49a-47f9-96a7-568ef2f2dd5d.png"/>

## Configuring Environments  

By default, your Statsig Project will have three environments configured- Development, Staging, and Production. If you would like to add more environments or rename these default environments you can do so via Project Settings. The only environment you cannot modify or delete is Production, which must exist within every Project. 

To add or edit environments, go to **Project Settings** -> **Environments & Keys**

<img width="1549" alt="Screen Shot 2023-02-26 at 5 08 55 PM" src="https://user-images.githubusercontent.com/101903926/221449870-797a2f0f-9310-48ce-b299-d4aaf9bd61fb.png"/>

Tap **Edit** to configure your environments, as well as reorder the hierarchy of environments via drag-and-drop. Note- the order of environments has no impact on any configured rule logic within your Feature Gate, but is rather meant as a tool to convey to your teams the rollout order/ relative hierarchy between environments. 

<img width="489" alt="Screen Shot 2023-02-26 at 5 09 38 PM" src="https://user-images.githubusercontent.com/101903926/221449939-0ba6e53f-bad1-4600-ac99-1833d55230be.png"/>

### Per-Environment API keys

For privacy and security reasons, you can also configure per-environment API keys via this tab. This means that any SDK initialized with the API keys generated here, will only see the rules for which it has access. For example, if an SDK it initialized with an API key set to development, it will not know about any rules that have been set for any other environment.

To generate a new, environment-specific key tap **Generate New Key** and specify the target environments. Please note that the three default environments that are built into all new Projects on Statsig share the same server and client-side API keys. 

<img width="1534" alt="Screen Shot 2023-02-26 at 5 15 29 PM" src="https://user-images.githubusercontent.com/101903926/221450416-44348e77-631a-4ae1-98d1-00d5a4c282ad.png"/>



