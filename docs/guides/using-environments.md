---
sidebar_label: Environments
title: Using Environments for Conditional Evaluation outside of Production
keywords:
  - owner:brock
---

Statsig SDKs allow you to set the environment tier for your app during initialization. This helps you evaluate feature gates, dynamic configs, and experiments differently in non-production environments like development or staging. All you need to do is configure the appropriate environment in your code and adjust feature rules in the Statsig Console.

Here’s a step-by-step guide on how to configure and use environments effectively.

---

## SDK Usage

There are two key ways to set up environments within your app:

1. **Environment-specific SDK keys**: These determine which rule sets are downloaded by the SDK based on the environment.
2. **Environment tier at SDK initialization**: This defines how rules are evaluated for the app.

### 1. Environment-specific SDK Keys

Setting up environment-specific SDK keys allows you to control which rules are sent to the SDK. For instance, if an SDK is initialized with a key for the development environment, it will not receive rules set for staging or production environments. For more information, see [Per-Environment API Keys](#per-environment-api-keys) below.

### 2. Environment Tier Parameter

SDK keys can correspond to multiple environments. Therefore, it’s important to explicitly set the environment tier during SDK initialization to ensure the correct rules are applied.

All SDKs accept an `SDK Key` and an optional `StatsigOptions` dictionary. The `StatsigOptions` parameter includes the `environment` key, which has a `tier` field. This tier corresponds to one of your pre-configured environments (e.g., development, staging).

> **Note**: If the environment tier is unset, all checks and event logs will default to "production."

Here’s an example of setting the environment tier in your code for the **development** environment:

#### Example (JS Client SDK):

```javascript
const client = new StatsigClient(<SDK_KEY>, user, { environment: { tier: 'development' } });
```

#### Example (Node Server SDK):

```javascript
await statsig.initialize(<SDK_KEY>, { environment: { tier: 'development' } });
```

Refer to your language-specific SDK documentation for further details.

---

## Using Environments in Feature Gates

To configure environment-specific rules for a **Feature Gate**, follow these steps:

1. **Create a new Feature Gate**: In the Statsig Console, create a new Feature Gate. For example, name it "development mode" to target only your development environment.
   
   ![Feature Gate](https://user-images.githubusercontent.com/101903926/221443079-59d81448-d070-4da0-a010-f038016a6b09.png)

2. **Specify Environments**: When configuring the rule, check the **Specify Environments** box and select the environments you want to target. By default, rules are enabled for all environments unless specified otherwise.

   ![Specify Environment](https://user-images.githubusercontent.com/101903926/221443202-de70eab5-68d5-4173-8f6d-7c680762212e.png)

3. **Save your settings**: After saving, the environment(s) for which the rule is enabled will be displayed below the rule name.
   
   ![Enabled Environments](https://user-images.githubusercontent.com/101903926/221443319-597f1e1e-facc-41a0-8b7a-dcff0fec4405.png)

You can also filter rules by environment using the filter in the upper-right corner of the Feature Gate UI.

To edit the target environments of a rule, click the "..." next to the rule name and select **Edit Rule**.

   ![Edit Rule](https://user-images.githubusercontent.com/101903926/221443425-c8a5e4fe-f49a-47f9-96a7-568ef2f2dd5d.png)

---

## Configuring Environments

By default, Statsig provides three environments: **Development**, **Staging**, and **Production**. You can add more environments or rename the default ones, but the **Production** environment cannot be deleted or modified.

### Steps to Add or Edit Environments:

1. Navigate to **Project Settings** > **Environments & Keys**.

   ![Project Settings](https://user-images.githubusercontent.com/101903926/221449870-797a2f0f-9310-48ce-b299-d4aaf9bd61fb.png)

2. Click **Edit** to add new environments or reorder the existing ones using drag-and-drop.

   ![Edit Environments](https://user-images.githubusercontent.com/101903926/221449939-0ba6e53f-bad1-4600-ac99-1833d55230be.png)

> **Note**: Reordering environments doesn’t affect any rule logic, but it helps convey the rollout hierarchy (e.g., development -> staging -> production) to your teams.

---

## Per-Environment API Keys

To enhance security and privacy, Statsig allows you to create per-environment API keys. This ensures that SDKs initialized with specific environment keys will only access the rules relevant to that environment.

### Steps to Generate Environment-Specific API Keys:

1. Go to **Project Settings** > **Environments & Keys**.

2. Click **Generate New Key**, and specify the environment for which you want to generate the API key.

   ![Generate API Key](https://user-images.githubusercontent.com/101903926/221450416-44348e77-631a-4ae1-98d1-00d5a4c282ad.png)

> **Note**: The default environments—Development, Staging, and Production—share the same server and client-side API keys. You can generate new keys for custom environments as needed.

---
