---
sidebar_label: Environments
title: Using Environments for Conditional Evaluation outside of Production
---

All of Statsig’s SDKs allow you to set the environment tier your app is running in during initialization. This lets you evaluate feature gates, dynamic configs, and experiments with different values across environments, such as **Development**, **Staging**, and **Production**.

To apply different rules in lower environments vs. Production, set the correct environment in your code when initializing the SDK, and configure the corresponding rules in the Statsig Console to evaluate differently for each environment. Below are detailed steps on how to achieve this.

---

## SDK Usage

There are two primary ways to configure environments in Statsig SDKs:
1. **Environment-specific SDK keys**: Used to control which rules are downloaded to a given SDK based on the environment.
2. **Environment tier at SDK initialization**: Used to evaluate rules based on the current environment.

### Environment-specific SDK Keys

Configuring an environment-specific SDK key allows you to control which rule-sets are sent to a given SDK based on the environment. For instance, if an SDK is initialized with a **development** API key, it will only download rules for the development environment and will not have access to rules for other environments.

For more information, see the [Per-Environment API keys section](#per-environment-api-keys) further down this page.

### Environment Tier Parameter

While SDK keys can correspond to multiple environments, you still need to explicitly set the environment tier during SDK initialization. You can do this via the `StatsigOptions` parameter. All SDKs accept an SDK key and an optional `StatsigOptions` dictionary of parameters.

One of these options is the `environment` parameter, which has a `tier` field. The `tier` can be any of your pre-configured environments (more on how to configure environments later). If the environment tier is left unset, all checks and event logs are treated as "production" data by default.

> **Important**: Per-environment API keys only restrict which rules the SDK can download; they do not affect the evaluation context of feature gates, dynamic configs, or experiments.

#### Example: Setting the Environment Tier

In this example, we set the environment tier to `development` for both Client SDKs and Server SDKs.

- **Client SDKs**: SDK Key, User, and StatsigOptions are passed.
  ```js
  await statsig.initialize(<SDK_KEY>, user, {environment: {tier: 'development'}});
  ```

- **Server SDKs**: SDK Key and StatsigOptions are passed.
  ```js
  await statsig.initialize(<SDK_KEY>, {environment: {tier: 'development'}});
  ```

These JavaScript and Node.js examples show the general pattern. For more details on how to apply this in other languages, refer to your specific SDK documentation.

---

## Using Environments in Feature Gates

To use environments with feature gates:

1. **Create a New Feature Gate**  
   Go to the Statsig Console and create a new Feature Gate. For this example, we'll name it **"development mode"** to ensure it only passes for development environments.

   ![Feature Gate Creation](https://user-images.githubusercontent.com/101903926/221443079-59d81448-d070-4da0-a010-f038016a6b09.png)

2. **Configure Target Environments**  
   During rule creation, select the **Specify Environments** checkbox and choose which environments should be enabled for this rule. By default, rules apply to **all environments** unless specified otherwise.

   ![Specify Environments](https://user-images.githubusercontent.com/101903926/221443202-de70eab5-68d5-4173-8f6d-7c680762212e.png)

3. **Save the Rule**  
   After saving, you’ll see which environments your rule applies to directly below the rule name.

   ![Rule Environments](https://user-images.githubusercontent.com/101903926/221443319-597f1e1e-facc-41a0-8b7a-dcff0fec4405.png)

4. **Filter by Environment**  
   You can filter rule-sets by environment using the environment filters in the upper right-hand corner of your Feature Gate rule-set.

   ![Filter by Environment](https://user-images.githubusercontent.com/101903926/221443466-92616326-bdb3-4025-99de-9fa3fd2af558.png)

5. **Edit the Environment at Any Time**  
   To modify the environments for a rule, click the **...** button on the rule, select **Edit Rule**, and update the environment settings.

   ![Edit Rule](https://user-images.githubusercontent.com/101903926/221443425-c8a5e4fe-f49a-47f9-96a7-568ef2f2dd5d.png)

---

## Configuring Environments

By default, each Statsig project has three environments: **Development**, **Staging**, and **Production**. You can add more environments or rename these defaults, but **Production** must always exist and cannot be deleted or modified.

### How to Add or Edit Environments

1. **Go to Project Settings**  
   Navigate to **Project Settings** -> **Environments & Keys** in the Statsig Console.

   ![Project Settings](https://user-images.githubusercontent.com/101903926/221449870-797a2f0f-9310-48ce-b299-d4aaf9bd61fb.png)

2. **Edit Environment Settings**  
   Tap **Edit** to add new environments or reorder existing ones via drag-and-drop. Note that the environment order does not affect feature gate logic but serves to convey rollout hierarchy to your team.

   ![Edit Environments](https://user-images.githubusercontent.com/101903926/221449939-0ba6e53f-bad1-4600-ac99-1833d55230be.png)

---

## Per-Environment API Keys

For security and privacy reasons, you can generate per-environment API keys to ensure that SDKs only have access to rules for specific environments. For example, an SDK initialized with a **development** API key will only see rules for the development environment.

### Generating a New API Key

1. **Generate API Key**  
   To generate a new API key for a specific environment, tap **Generate New Key** in the **Environments & Keys** section, and specify the target environments.

2. **Default Keys**  
   Note that the three default environments (Development, Staging, and Production) share the same server and client-side API keys in new projects.

   ![Generate API Key](https://user-images.githubusercontent.com/101903926/221450416-44348e77-631a-4ae1-98d1-00d5a4c282ad.png)

---

