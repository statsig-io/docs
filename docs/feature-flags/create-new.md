---
title: Create a feature flag
sidebar_label: Create
slug: /feature-flags/create-new
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

To create a new feature gate, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Click on the **Create** button
- Enter the name and the description of the feature gate you want to create
- Click **Create** to complete creating your feature gate

![image](https://github.com/user-attachments/assets/a14bc4f3-b768-4e6c-a84a-7bae449b2c7c)
 
Calls to check this feature gate for a user evaluate the rules that you define for this feature gate. This check returns a **true** or **false** depending on whether that user matches these rules. If no rules are defined, the gate check returns **false** by default.
 
![image](https://github.com/statsig-io/docs/assets/31516123/bb35e7ce-72ba-4643-8343-fdeccbf36c7f)

You can also Launch (pass 100%) or Disable (fail 100%) the gate using the More Options menu (...).

When you need more than a Boolean value returned for different groups of users, say to customize the user experience, set up a [dynamic config](/dynamic-config). 
