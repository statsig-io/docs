---
sidebar_label: Setting up Reviews
title: Setting up Reviews for Team Workflows  
---

You can enable reviews for all Statsig resources such as feature gates, dynamic configs, segments, and experiments 
that you'll likely deploy to a production environment. 

To enable reviews for your project, 
 - Navigate to the **Project Settings** page 
 - Click on the **Edit** button next to **Config Review Requirements**

![Screen Shot 2021-12-15 at 4 21 02 PM](https://user-images.githubusercontent.com/1315028/146821144-2c95de68-683f-4490-877d-3c95204ad83c.png)

- Select **Reviews Required** from the drop down list

![Screen Shot 2021-12-15 at 4 21 18 PM](https://user-images.githubusercontent.com/1315028/146821381-6d845dfa-467a-40c7-8e8d-194e6761ca6b.png)

- Navigate to the **Reviews** tab under your **Project Settings**, and click the **Create New** button to create a new **Review Group**

![image](https://user-images.githubusercontent.com/1315028/146826405-0f9070f7-8aa4-4c10-8802-178bef5e1505.png)

- Now when you make any changes to any resource configuraiton, your project's approvers will see an alert on the Statsig console as shown below

![Screen Shot 2021-12-15 at 4 18 49 PM](https://user-images.githubusercontent.com/1315028/146821759-6bea509e-619a-402f-b532-2fd3bc4c3aa9.png)

- When approvers click on the **View Proposed Changes** button, they will see a diff of the *current version* in production and *new version* with any changes yet to be deployed.

![Screen Shot 2021-12-15 at 4 19 18 PM](https://user-images.githubusercontent.com/1315028/146821955-57fb8ca5-844c-45d8-8c19-280b5f196cc8.png)




