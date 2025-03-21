---
title: Feature Flag Testing
sidebar_label: Test
slug: /feature-flags/test-gate
keywords:
  - owner:shubham
last_update:
  date: 2024-03-27
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

## Test a feature gate

There are three ways to test your feature gate and to validate that it's working as expected with the rules you have created:
1. Using the built-in **Test Gate** tool in the Statsig console
2. Using the prototype Javascript **Test App** available in the Statsig console
3. Using the **Diagnostics** tab in the Statsig console  

### 1. Using Test Gate
To validate your feature gate using the built-in Test Gate tool, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate that you want to validate
- At the bottom of the page, the **Test Gate** window that lists all properties available in the rules you have created as shown below.

![image](https://user-images.githubusercontent.com/1315028/129104501-9e7349ae-31fe-47ea-97da-0520fd3d7e1b.png)

- Click in the window and edit the value of the Email property to include the users that you want to target. For example, type jdoe@example.com as shown below. When email domain matches “@example.com”, the feature gate check succeeds and the window shows a PASS. Otherwise, it fails and the window shows a FAIL.

![image](https://user-images.githubusercontent.com/1315028/129104434-0f09087d-80da-4a62-84ac-c51e607e72a1.png)

### 2. Using Test App
To validate your feature gate using the Test App, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate that you want to validate
- At the bottom of the page, click on **Check Gate in Test App** at the top right of the Test Gate window as shown below by the red arrow; this will open a new browser window with a prototype Javascript client that initializes and calls the Statsig `checkGate` API. 

![image](https://user-images.githubusercontent.com/1315028/138148684-581bb8d5-86ba-4aef-b24d-44e540fa91f1.png)

### 3. Using Diagnostics Tab
To validate your feature gate using a live log stream,  
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate that you want to validate
- Click on the **Diagnostics** tab (next to the Setup tab)
- Scroll down to the **Exposure Stream** panel, where you will see a live stream of gate check events as they happen as shown below

![image](https://user-images.githubusercontent.com/1315028/138149819-5082d7e5-f7ee-42e8-b1ac-f57d9732e68f.png)

- In the the **Event Count by Group panel** as shown below, you can also validate that your application is recording events as expected for users who are exposed to the new feature (or not). Specifically, if you've started to record a new event type to test the impact of a new feature, you can also validate that these events are starting to show as more users are exposed to the new feature.  

![image](https://user-images.githubusercontent.com/1315028/141017409-f750c1c6-4c54-4140-bc4d-a3b83f1568fc.png)


