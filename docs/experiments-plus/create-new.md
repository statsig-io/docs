---
title: Create an experiment
sidebar_label: Create
slug: /experiments-plus/create-new
---

To create an experiment using Experiments+,
 - Log into the Statsig console at [https://console.statsig.com/](https://console.statsig.com/)
 - Navigate to **Experiments+** in the left-hand navigation panel
 - Click on the **Create** button
 - Enter the name, description, and hypothesis for your experiment.  You may (optionally) select a targeting gate if you wish to limit experiment eligibility using an existing feature gate.

   ![Screen Shot 2021-08-16 at 10 47 09 AM](https://user-images.githubusercontent.com/74584483/129607046-97f73b37-d54b-4bf8-840c-dfb17a276dd4.png)

 - Next define the variants you're testing in this experiment
   
   ![image](https://user-images.githubusercontent.com/1315028/129120887-be91ec60-8bfa-4b7b-9a2a-0b658693fabc.png)

 - By default, each experiment runs in its own layer. When you want to exclude any users exposed to other experiments, check the **Select an existing layer** option to see what percentage of users are available for this experiment. In the example below, 60% of the users in a layer are available for this experiment. This means that you can define the experiment size to be a percentage that's less than or equal to 60%. 
 
   ![image](https://user-images.githubusercontent.com/1315028/129121027-9c8c2c68-dcd6-44eb-87ef-a6e497332a25.png)
   
 - Select the primary metrics that are part of your hypothesis for this experiment. You may also select a target completion date for the experiment if required. 
 
   ![image](https://user-images.githubusercontent.com/1315028/129121377-936d8350-a3bc-48f5-80ec-66c5fa32d059.png)
  
 - Click the **Create** button
 
