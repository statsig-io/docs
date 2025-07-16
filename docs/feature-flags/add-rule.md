---
title: Adding Rules
sidebar_label: Add rule
slug: /feature-flags/add-rule
keywords:
  - owner:shubham
last_update:
  date: 2025-03-20
---
## Create a rule for a feature flag

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

By default, a feature gate check returns **false** when there are no rules configured to target a set of users. You can add a rule to a feature gate to expose the new feature to a targeted set of users as follows: 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate where you want to add a targeting rule
- Click the **Add New Rule** button 

![image](https://user-images.githubusercontent.com/1315028/129073615-5450677f-7722-49f5-827b-d21b5711c3e5.png)

- You can select the criteria for identifying your target users in several ways:
  - You can target users based on common application properties such as the operating system that the application is running on as shown below 

    ![image](https://user-images.githubusercontent.com/1315028/129112226-51978083-d007-4697-88b5-f3a080eabf48.png)

  - You can target users based on their attributes; for example, you can select the user's **Email** attribute and the **Contains any of** operator, and enter the email domain of your company to target only internal employees as shown below

    ![image](https://user-images.githubusercontent.com/1315028/129113738-ec99c4f0-dbdd-4d14-a88a-b3343d4d12da.png)

  - You can target users in a defined [segment](/segments) as shown below
  
    ![image](https://user-images.githubusercontent.com/1315028/129112427-27351aaf-074e-4997-91d8-6e1e7941b991.png)

  - You can target users who are eligible for another feature gate as shown below; this ensures that this feature gate is activated only for users who pass (or fail) the selected target gate check  

    ![image](https://user-images.githubusercontent.com/1315028/129112612-d881981c-4fc6-4e95-a9c5-18319c02d6f2.png)

- Click the **Add Rule** button
- You can optionally edit a percentage share of eligible users who see the new feature (treatment/pass) vs. the default (control/fail) behavior by clicking on the edit icon for the rule

![image](https://user-images.githubusercontent.com/1315028/129114141-1af7d5a5-21bb-4b37-86e9-99d4e39134fe.png)

- Click the **Save Changes** button at the top right corner of the **Rules** section








