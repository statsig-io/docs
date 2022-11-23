---
title: Create an experiment
sidebar_label: Create
slug: /experiments-plus/create-new
---

# Create a New Experiment 

### User-level Experiments
To create a user-level experiment,
1. Log into the Statsig console at [https://console.statsig.com/](https://console.statsig.com/)
2. Navigate to **Experiments** in the left-hand navigation panel
3. Click on the **Create** button
4. Enter the name and description for your experiment as shown in the figure below
5. By default, your expeirment runs in its own Layer. If you would like to add this experiment to an existing Layer, select the "Add Layer" option under "Advanced" in the experiment creation modal.  
<img width="494" alt="Screen Shot 2022-11-23 at 10 31 09 AM" src="https://user-images.githubusercontent.com/101903926/203622099-dde952fe-d96b-4e4e-8dcd-bdec8b54c354.png">
6. Click **Create** 

<img width="500" alt="Screen Shot 2022-11-23 at 9 42 50 AM" src="https://user-images.githubusercontent.com/101903926/203613919-0c3ff6ec-e465-4d05-92e1-e55b2ae32226.png">

### Configure Your Scorecard
<img width="1511" alt="Screen Shot 2022-11-23 at 9 44 32 AM" src="https://user-images.githubusercontent.com/101903926/203614214-1d7a45d4-a701-43e6-955c-025fd29c4903.png">

When running an experiment, you are typically trying to test a hypothesis, which you are measuring using a set of key metrics. The Scorecard makes this easy, with an affordance to enter your Hypothesis, Primary, and Secondary metrics. 

Primary metrics are the metrics you are looking to influence directly with your experiment. Secondary metrics are the set of metrics you may want to monitor or ensure don't regress with your test, but aren't directly trying to move. 

Configuring the Scorecard is optional, but is especially helpful to ensure other members of your team viewing your experiment have context on the hypothesis being tested and how success is being measured. Additionally, all metrics added to the Scorecard are pre-computed daily, as well as eligible for more advanced statistical treatments like CUPED and Sequential Testing.

Read more about best practices for configuring your Scorecard [here](https://docs.statsig.com/experiments-plus/read-results#reading-experiment-results).  

### Configure Your Groups and Parameters
<img width="1512" alt="Screen Shot 2022-11-23 at 10 10 34 AM" src="https://user-images.githubusercontent.com/101903926/203618668-fae24a99-3df8-4eff-90ed-c2ce7ab7d9c1.png">

This is where the meat of experiment configuration happens. Whereas the Scorecard is an optional setup step, configuring your experiment's allocation, targeting criteria, and groups and parameters is mandatory. 

In the **Allocation** panel, enter the percentage of users that you want to allocate to this experiment. By default, each experiment runs in its own layer and you can enter a value up to 100%.

<img width="1495" alt="Screen Shot 2022-11-23 at 10 21 21 AM" src="https://user-images.githubusercontent.com/101903926/203620564-028c7244-c77b-4f51-92e1-40f522a03902.png">


7. In the **Variations** panel, enter the variant names and click on **Add Another Variant** to enter more variants

   ![image](https://user-images.githubusercontent.com/1315028/138972765-bd10e43e-be10-4859-ae32-bde87913b0e6.png)

   You'll find that the split percentages between these variants automatically change to evenly distribute users between these variants.

8. Continuing in the **Variations** pabel, click on the pencil icon next the _sample_parameter_ and enter the name of your experiment parameter and the type, and click **Confirm**

   ![image](https://user-images.githubusercontent.com/1315028/138972604-3bb43962-6991-4eac-9fba-a9ab165ea1d2.png)

9. Enter the values that the experiment parameter will take for each variant

   ![image](https://user-images.githubusercontent.com/1315028/138973003-66f3879c-14f2-44f2-9a3a-ee2be0b18162.png)
   
10. Enter the key metrics you want to track in this experiment

   ![image](https://user-images.githubusercontent.com/1315028/138973362-69b53d48-745a-462f-a275-b0a3720d4d90.png)

11. Click on the **Save** button at the top right hand side of the page to complete your experiment setup.


### Device-level and Custom ID Experiments
The default randomization unit for experiments is User ID.  To create an experiment with a different unit ID type, follow steps 1 - 4 above. Then,
 1. Click the **ID Type** drop down menu and make a selection.
 2. Click **Create**
 
    ![customID_experiment](https://user-images.githubusercontent.com/90343952/140976464-1dc14853-5aa1-4a6d-853d-317e06bc6d04.png)

Now follow the remaining steps as described in the previous section to complete your experiment setup. 

### Isolated Experiments
By default, each experiment runs in its own layer. When you want to create an experiment that excludes any users exposed to other experiments, follow steps 1 -4 in 1 -4 n User-level Experiments above. Then,
1. Click the checkbox for **Add Layer**
2. Select an existing layer or _create a new layer_.
3. Click **Create**

![image](https://user-images.githubusercontent.com/1315028/138971433-98c6e385-a95b-4e9c-a3d8-d9d291b6cac6.png)

Now follow the remaining steps as described in the top section on this page to complete your experiment setup.

### Significance Level Adjustments

![image](https://user-images.githubusercontent.com/90343952/149187492-2e8b6df9-59cd-424c-aac8-4f3e690c2b39.png)

By default, Pulse results are displayed with 95% confidence intervals and without Bonferroni correction.  This default can be changed during the experiment creation and can also be adjusted in the settings when viewing the results. 

* **Bonferroni Correction**: Select this option to automatically apply the correction in experiments with more than one test group.  This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Default Confidence Interval**: The selection will be used by default every time Pulse results are shown for this experiment.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.   

### Targeting Gates

By default, this is hidden under the advanced configuration of an experiment (at the bottom of the experiment setup page).  A targeting gate will restrict the users elegible for the experiment to those who pass the list of conditions definied in the linked Feature Gate.  This continues to apply after making a decision on an experiment in the Statsig UI.
