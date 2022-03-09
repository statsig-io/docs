---
title: Adding Rules
sidebar_label: Add rule
slug: /feature-gates/add-rule
---
## Create a rule for a feature gate

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


## Rule Evaluation

The rules that you create are evaluated in the order you create them. For each rule, the condition determines which users qualify for the Pass/Fail filter. The Pass filter percentage further determines the percentage of qualifying users that will be exposed to the new feature. Suppose you set up your rules as shown below, the following flow chart illustrates how Statsig will evaluate these rules. 

![image](https://user-images.githubusercontent.com/1315028/154173697-e7c648b3-58f2-4b16-ba64-7222d152647e.png)

![image](https://user-images.githubusercontent.com/1315028/154177120-2f4db628-9899-4435-879c-9b1a4783024e.png)

In this example, the third rule for **Remaining Folks** captures all users who don't qualify for previous two rules. If we were to remove this third rule, then the subsequent analysis and Pulse results will only include users who qualify the previous two rules (users in pools 1 and 2), not your total user base.

### FAQs
**1. Could users switch between control (fail) and test (pass) groups?** 
Once a user is exposed, they will be included in the analysis going forward. They saw the new feature and were affected. If the feature gate rules are modified or the user's attributes change in a way that the user no longer qualifies, they will stop receiving the new feature. However, they will continue to be counted for analysis. Once you roll out the feature, all users will see the new feature; alternatively, if you turn off the feature gate, all users will see the control (feature disabled). In either case (roll out or turn off), Statsig performs no further analysis.

**2. How do overrides work? Are users included in overrides also included in the analysis?**
When you add user IDs in the **Pass** or **Fail** lists of your feature gate, these users will see the appropriate treatment but will not be included in the analysis. 





