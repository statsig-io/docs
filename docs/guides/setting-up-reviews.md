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

- Select **Reviews Required** from the drop down list, and add your selected approvers as shown below

![Screen Shot 2021-12-15 at 4 21 18 PM](https://user-images.githubusercontent.com/1315028/146821381-6d845dfa-467a-40c7-8e8d-194e6761ca6b.png)


- When you make any changes to any resource configuraiton, your project's approvers will see an alert on the Statsig console as shown below

![Screen Shot 2021-12-15 at 4 18 49 PM](https://user-images.githubusercontent.com/1315028/146821759-6bea509e-619a-402f-b532-2fd3bc4c3aa9.png)

- When approvers click on the **View Proposed Changes** button, they will see a diff of the *current version* in production and new version with the changes yet to be deployed.. 

![Screen Shot 2021-12-15 at 4 19 18 PM](https://user-images.githubusercontent.com/1315028/146821955-57fb8ca5-844c-45d8-8c19-280b5f196cc8.png)




