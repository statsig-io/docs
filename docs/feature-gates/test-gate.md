---
title: Testing
sidebar_label: Test
slug: /feature-gates/test-gate
---

## Test a feature gate

To validate that your feature gate is working as expected with the rules you have created, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate that you want to validate
- At the bottom of the page, the **Test Gate** window that lists all properties available in the rules you have created as shown below.

![image](https://user-images.githubusercontent.com/1315028/129104501-9e7349ae-31fe-47ea-97da-0520fd3d7e1b.png)

- Click in the window and edit the value of the Email property to include the users that you want to target. For example, type jdoe@example.com as shown below. When email domain matches “@example.com”, the feature gate check succeeds and the window shows a PASS. Otherwise, it fails and the window shows a FAIL.![image](https://user-images.githubusercontent.com/1315028/129076094-5be27a59-213a-4218-a8e3-48aa8e619841.png)

![image](https://user-images.githubusercontent.com/1315028/129104434-0f09087d-80da-4a62-84ac-c51e607e72a1.png)
