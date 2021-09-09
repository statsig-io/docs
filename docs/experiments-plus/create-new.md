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

 - Next define the parameters that will change between control and test groups.  You will specify the value for these parameters in the next step

   ![Experiment Parameters](https://user-images.githubusercontent.com/74584483/132600379-9252dbd8-daf7-4913-b260-e4e7cd56c8fe.png)
   
 - By default, each experiment runs in its own layer. When you want to exclude any users exposed to other experiments, check the **Select an existing layer** option to see what percentage of users are available for this experiment. In the example below, 40% of the users in a layer are available for this experiment. This means that you can define the experiment size to be a percentage that's less than or equal to 40%.
 - After choosing the layer, you can set the paramter values for each group in the experiment, and add groups if you wish.
 
![Experiment Layers and Parameters](https://user-images.githubusercontent.com/74584483/132601170-095144aa-0384-4d7d-bf95-e5a216e6d888.png)
   
 - Finally, select the primary metrics that are part of your hypothesis for this experiment.
 
![Screen Shot 2021-09-08 at 5 04 57 PM](https://user-images.githubusercontent.com/74584483/132601298-b2e2337b-81a6-4351-93ec-cadbfe40b8bb.png)
  
 - Click the **Create** button
 
