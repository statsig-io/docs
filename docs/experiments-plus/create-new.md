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
5. By default, your experiment runs in its own Layer. If you would like to add this experiment to a Layer, select the **Add Layer** option under **Advanced** in the experiment creation modal or create a new Layer via **Create New Layer**.   
6. Click "Create" 

![image](https://github.com/user-attachments/assets/f7c0bdd7-8fdf-485a-b90f-e2aa619149c4)

### Configure Your Scorecard
<img width="1511" alt="Screen Shot 2022-11-23 at 9 44 32 AM" src="https://user-images.githubusercontent.com/101903926/203614214-1d7a45d4-a701-43e6-955c-025fd29c4903.png"/>

When running an experiment, it is common you are trying to test an explicit hypothesis, which you are measuring using a set of key metrics. The Scorecard makes this easy, with an affordance to enter your Hypothesis, Primary, and Secondary metrics. 

**Primary Metrics** are the metrics you are looking to influence directly with your experiment. **Secondary metrics** are the set of metrics you may want to monitor or ensure don't regress with your test, but aren't directly trying to move. 

Configuring the Scorecard is optional, but is especially helpful to ensure other members of your team viewing your experiment have context on the hypothesis being tested and how success is being measured. Additionally, all metrics added to the Scorecard are pre-computed daily, as well as eligible for more advanced statistical treatments like [CUPED](https://docs.statsig.com/stats-engine/methodologies/cuped) and [Sequential Testing](https://docs.statsig.com/experiments-plus/sequential-testing#what-is-sequential-testing).

Read more about best practices for configuring your Scorecard [here](https://docs.statsig.com/experiments-plus/read-results#reading-experiment-results).  


### Configure Allocation and Targeting
This is where the meat of experiment configuration begins. 

For **Allocation**, enter the percentage of users that you want to allocate to this experiment. By default, each experiment runs in its own layer and you can enter a value up to 100% - all eligible users will be enrolled in the experiment. It is generally good practice to roll experiments out to a small % of eligible users, validate that it isn't causing crashes and then ramp to the desired allocation for the experiment. 

<img width="1495" alt="Screen Shot 2022-11-23 at 10 21 21 AM" src="https://user-images.githubusercontent.com/101903926/203620564-028c7244-c77b-4f51-92e1-40f522a03902.png"/>

If you want to configure experiment targeting criteria, click to edit in the **Targeting** section to either configure new targeting criteria or leverage an existing Feature Gate to target against. Defining targeting criteria here will restrict the users eligible for the experiment to those who pass the list of conditions defined. 
![image](https://github.com/user-attachments/assets/6f20dfbc-725f-4384-bd06-1fe23c15fcf6)

If your targeting criteria is relatively straightforward, creating this criteria inline is a great solution. However, if you need to configure any more advanced targeting criteria (such as progressive rollouts) or want to preserve your targeting criteria when you launch your experiment (i.e. only launch the winning variant to users who fit the targeting criteria), you should reference an existing Feature Gate. 

By default, no targeting criteria is selected and your experiment will use all allocated users (up to the Allocation % specified in the previous step) within either your exposed userbase or within the Layer you have selected. 

### Configure Your Groups and Parameters
When configuring your Groups and Parameters, we recommend adding your test parameter(s) first. Parameters are what actually control the different experiment variants in code. Enter the values that the experiment parameter will take for each variant. Read more about Groups vs. Parameters [here](https://docs.statsig.com/experiments-plus/getting-group). Please note that you cannot start your experiment without adding at least one parameter. 

<img width="1497" alt="Screen Shot 2022-11-23 at 10 42 05 AM" src="https://user-images.githubusercontent.com/101903926/203623897-5ae52609-80cc-4927-a64b-5e3af0005fd0.png"/>

If you are looking to test more variants than just an A/B, add more Groups to your experiment by tapping the "+" to the right of the existing experiment groups. You will be prompted to enter the parameter value for each new experiment group added. You'll notice that the split percentages between the experiment groups automatically change to evenly distribute users between the groups.

<img width="1493" alt="Screen Shot 2022-11-23 at 11 28 00 AM" src="https://user-images.githubusercontent.com/101903926/203631152-f4b7d844-7aa4-40c9-bdd9-c5e90d0cc3d7.png"/>

Once parameters and their values for different groups are defined, you can add additional Group metadata to name, describe, and add a corresponding variant image to each experiment group via the "Groups" section. Note that neither the Group name nor description is used in your end experiment- only the parameters and their values are actually called in code to influence the end experience a user sees based on their group assignment. 

<img width="794" alt="Screen Shot 2022-11-23 at 11 18 31 AM" src="https://user-images.githubusercontent.com/101903926/203629627-8366655c-19df-43c7-8212-ba243eecc43d.png"/>


### Device-level and Custom ID Experiments
The default randomization unit for experiments is User ID.  To create an experiment with a different unit ID type, follow steps 1 - 4 from the "User-level Experiments" section above. Then,
 1. Click the **ID Type** drop down menu and make a selection.
 2. Click **Create**
![image](https://github.com/user-attachments/assets/8be2c2b5-d9ad-49cb-81c0-a48dfab0a158)

Now follow the remaining steps as described in the previous section to complete your experiment setup. 

### Isolated Experiments
By default, each experiment runs in its own Layer. When you want to create an experiment that excludes any users exposed to other experiments, follow steps 1 -4  from the "User-level Experiments" section above. Then,

1. Select **Advanced** 
2. Select an existing layer or _create a new layer_.
3. Click **Create**

![image](https://github.com/user-attachments/assets/09f23cb7-284d-4504-9a22-85eb7cc51534)

Now follow the remaining steps as described in the top section on this page to complete your experiment setup.

### Significance Level Adjustments

<img width="479" alt="Screen Shot 2022-11-23 at 12 06 07 PM" src="https://user-images.githubusercontent.com/101903926/203636982-0cb5a388-b2a7-40e1-8b99-81b3fdab5cb7.png"/>

By default, Pulse results are displayed with 95% confidence intervals and without Bonferroni correction.  This default can be changed during the experiment creation and can also be adjusted in the settings when viewing results in Pulse. 

* **Bonferroni Correction**: Select this option to automatically apply the correction in experiments with more than one test group.  This reduces the probability of Type I errors (false positives) by adjusting the significance level alpha, which will be divided by the number of test variants in the experiment.
* **Default Confidence Interval**: The selection will be used by default every time Pulse results are shown for this experiment.  Choose lower confidence intervals (e.g.: 80%) when there's higher tolerance for false positives and fast iteration with directional results is preferred over longer/larger experiments with increased certainty.   

### Target Duration
<img width="1504" alt="Screen Shot 2022-11-23 at 11 44 25 AM" src="/img/exp-targetduration.png"/>

Setting a target duration is optional, but can be good experimental practice to ensure you wait long enough for an experiment to reach full power before reading out the results. You can set either a target number of days or number of exposures for your experiment, and use the Power Analysis Calculator to  determine what target duration to set based on which metrics you're looking to move. 

* 💡**Selecting target duration greater than 90 days** 💡
By default, Statsig will compute Pulse Results (i.e. metric lifts) for your experiment for the first 90 days, while your user assignment will continue to work until the experiment stops. While you will be able to extend this compute window as you approach the 90 days cap, it's worthwhile asking why it's necessary to run an experiment beyond 90 days - What conclusion do you expect to see beyond 90 days that you might not see before then? Will this decision still be relevant in 90 days?


<img width="795" alt="Screen Shot 2022-11-23 at 11 48 08 AM" src="https://user-images.githubusercontent.com/101903926/203634126-811bd508-8fc4-4f87-ab63-df5626344331.png"/>


Once a target duration is set, you can track your progress against your target duration from the header of your experiment. When your experiment hits target duration, you will be notified via email and Slack if you have enabled the Statsig Slack integration. 
