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
6. Click "Create" 

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

<img width="1495" alt="Screen Shot 2022-11-23 at 10 21 21 AM" src="https://user-images.githubusercontent.com/101903926/203620564-028c7244-c77b-4f51-92e1-40f522a03902.png">

For **Allocation**, enter the percentage of users that you want to allocate to this experiment. By default, each experiment runs in its own layer and you can enter a value up to 100%.

<img width="1504" alt="Screen Shot 2022-11-23 at 10 37 52 AM" src="https://user-images.githubusercontent.com/101903926/203623193-9137bd21-54c5-4cae-a462-831c7ad9833b.png">

If you want to use a targeting gate in your experiment, tap on **Targeting** to select a Feature Gate. A targeting gate will restrict the users elegible for the experiment to those who pass the list of conditions definied in the linked Feature Gate. This continues to apply after making a decision on an experiment in the Statsig UI. 

By default, no Feature Gate is selected and your experiment will use all allocated users (up to the Allocation % specified in the previous step) within either your exposed userbase or within the Layer you have selected. 

<img width="1497" alt="Screen Shot 2022-11-23 at 10 42 05 AM" src="https://user-images.githubusercontent.com/101903926/203623897-5ae52609-80cc-4927-a64b-5e3af0005fd0.png">

When configuring your Groups and Parameters, we recommend adding your test Parameter(s) first. Parameters are what actually control the different experiment variants in code. Enter the values that the experiment parameter will take for each variant. Read more about Groups vs. Parameters [here](https://docs.statsig.com/experiments-plus/getting-group). Please note that you cannot start your experiment without adding at least one Parameter.  

<img width="1493" alt="Screen Shot 2022-11-23 at 11 28 00 AM" src="https://user-images.githubusercontent.com/101903926/203631152-f4b7d844-7aa4-40c9-bdd9-c5e90d0cc3d7.png">

If you are looking to test more variants than just an A/B, add more Groups to your experiment by tapping the "+" to the right of the existing experiment groups. You will be prompted to enter the Parameter value for each new experiment group added. You'll notice that the split percentages between the experiment groups automatically change to evenly distribute users between the groups.


<img width="794" alt="Screen Shot 2022-11-23 at 11 18 31 AM" src="https://user-images.githubusercontent.com/101903926/203629627-8366655c-19df-43c7-8212-ba243eecc43d.png">

Once Parameters and their values for different groups are defined, you can add additional Group metadata to name, describe, and add a corresponding variant image to each experiment group via the "Groups" section. Note that neither the Group name or description is used in your end experiment- only the Parameters and their values are actually called in code to influence the end experience a user sees based on their group assignment. 


### Device-level and Custom ID Experiments
The default randomization unit for experiments is User ID.  To create an experiment with a different unit ID type, follow steps 1 - 4 from the "User-level Experiments" section above. Then,
 1. Click the **ID Type** drop down menu and make a selection.
 2. Click **Create**
 
    ![customID_experiment](https://user-images.githubusercontent.com/90343952/140976464-1dc14853-5aa1-4a6d-853d-317e06bc6d04.png)

Now follow the remaining steps as described in the previous section to complete your experiment setup. 

### Isolated Experiments
By default, each experiment runs in its own layer. When you want to create an experiment that excludes any users exposed to other experiments, follow steps 1 -4  from the "User-level Experiments" section above. Then,

1. Select **Advanced** 
2. Click the checkbox for **Add Layer**
3. Select an existing layer or _create a new layer_.
4. Click **Create**

<img width="494" alt="Screen Shot 2022-11-23 at 10 31 09 AM" src="https://user-images.githubusercontent.com/101903926/203622099-dde952fe-d96b-4e4e-8dcd-bdec8b54c354.png">

Now follow the remaining steps as described in the top section on this page to complete your experiment setup.

### Significance Level Adjustments

![image](https://user-images.githubusercontent.com/90343952/149187492-2e8b6df9-59cd-424c-aac8-4f3e690c2b39.png)

By default, Pulse results are displayed with 95% confidence intervals and without Bonferroni correction.  This default can be changed during the experiment creation and can also be adjusted in the settings when viewing results in Pulse. 

* **Bonferroni Correction**: Select this option to automatically apply the correction in experiments with more than one test group.  This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Default Confidence Interval**: The selection will be used by default every time Pulse results are shown for this experiment.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.   
