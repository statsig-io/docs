---
title: Create an experiment
sidebar_label: Create
slug: /experiments-plus/create-new
---

This guide walks you through the steps to create and configure a new experiment in Statsig. Whether you're running a simple A/B test or a more complex multi-variant experiment, these instructions will help you set up your experiment correctly.

### User-level Experiments
To create a user-level experiment, follow these steps:

1. Log into the Statsig console at [https://console.statsig.com/](https://console.statsig.com/)
2. Navigate to **Experiments** in the left-hand navigation panel
3. Click on the **Create** button
4. Enter the name and description for your experiment as shown in the figure below
5. By default, your experiment runs in its own **Layer**. A Layer allows you to manage multiple experiments and feature flags together. If you want to add this experiment to an existing Layer, select **Add Layer** under **Advanced** in the experiment creation modal. You can also create a new Layer by selecting **Create New Layer**.
6. Click **Create**

![image](https://github.com/user-attachments/assets/f7c0bdd7-8fdf-485a-b90f-e2aa619149c4)

### Configure Your Scorecard

When running an experiment, it’s common to test a specific hypothesis using a set of key metrics. The **Scorecard** feature makes this easy by letting you enter your hypothesis and select both primary and secondary metrics.

- **Primary Metrics** are those you expect to be directly impacted by the experiment.
- **Secondary Metrics** are important to monitor to ensure there are no unintended side effects, but they aren’t the primary focus of your experiment.

Configuring the Scorecard is a required step when creating an experiment. It provides your team with clear context on what is being tested and how success is measured. You must enter your hypothesis and select at least one primary metric. Metrics added to the Scorecard are computed daily and eligible for advanced treatments like [CUPED](/stats-engine/methodologies/cuped) and [Sequential Testing](/experiments-plus/sequential-testing#what-is-sequential-testing).

For best practices on configuring your Scorecard, read more [here](/experiments-plus/read-results#reading-experiment-results).

![image](https://user-images.githubusercontent.com/101903926/203614214-1d7a45d4-a701-43e6-955c-025fd29c4903.png)

### Configure Allocation and Targeting

This is where most of your experiment configuration happens.

#### Allocation
For **Allocation**, enter the percentage of users you want to assign to this experiment. You can allocate up to 100% of eligible users, but it’s good practice to start with a smaller percentage, verify the experiment’s stability, and then ramp up the allocation.

![image](https://user-images.githubusercontent.com/101903926/203620564-028c7244-c77b-4f51-92e1-40f522a03902.png)

#### Targeting
To configure **Targeting** criteria, click to edit the **Targeting** section. You can either set new targeting criteria or use an existing **Feature Gate**. This will limit the experiment to only the users who meet the defined conditions.

![image](https://github.com/user-attachments/assets/6f20dfbc-725f-4384-bd06-1fe23c15fcf6)

- If your targeting is straightforward, creating it inline works well.
- For more advanced targeting (e.g., progressive rollouts) or if you want to maintain targeting criteria when you launch your experiment, it’s better to reference an existing **Feature Gate**.

By default, no targeting criteria are set, so your experiment will include all allocated users within the defined **Layer** or exposed user base.

### Configure Your Groups and Parameters

When configuring **Groups and Parameters**, it’s a good idea to define your parameters first. These are the variables that control the behavior of the different experiment variants.

- Enter the values the experiment parameter will take for each variant. For more about the difference between **Groups** and **Parameters**, refer to [Groups vs. Parameters](/experiments-plus/getting-group).

You can add additional groups by clicking the "+" next to the existing groups. The user allocation will automatically adjust as you add more groups.

![image](https://user-images.githubusercontent.com/101903926/203623897-5ae52609-80cc-4927-a64b-5e3af0005fd0.png)

In addition, you can name, describe, and even add variant images for each group under the **Groups** section. However, only the parameters and values will affect what users see—group names and descriptions are not used in the experiment code.

### Device-level and Custom ID Experiments

By default, experiments randomize users based on **User ID**. If you need to use a different ID type (e.g., device-level), follow steps 1–4 from the "User-level Experiments" section, then:

1. Click the **ID Type** dropdown menu and choose the desired ID type.
2. Click **Create**

![image](https://github.com/user-attachments/assets/8be2c2b5-d9ad-49cb-81c0-a48dfab0a158)

Afterward, continue with the same steps described above to finish configuring the experiment.

### Isolated Experiments

If you want to create an experiment that excludes users exposed to other experiments, follow steps 1–4 from the "User-level Experiments" section. Then:

1. Select **Advanced** options.
2. Select an existing **Layer** or create a new one.
3. Click **Create**.

![image](https://github.com/user-attachments/assets/09f23cb7-284d-4504-9a22-85eb7cc51534)

Now, complete the rest of the experiment setup as described above.

### Significance Level Adjustments

By default, Pulse results display with 95% confidence intervals and without Bonferroni correction. This can be customized during experiment setup or later when viewing results in Pulse.

- **Bonferroni Correction:** Apply this to reduce the risk of false positives in experiments with multiple test groups. The significance level (*α*) is divided by the number of test variants.
- **Default Confidence Interval:** Choose a lower confidence interval (e.g., 80%) if you prefer faster results with higher tolerance for false positives, or stick with 95% for greater certainty.

![image](https://user-images.githubusercontent.com/101903926/203636982-0cb5a388-b2a7-40e1-8b99-81b3fdab5cb7.png)

### Target Duration

Setting a target duration is optional, but it helps ensure that you wait long enough for the experiment to reach full power. You can set the target as either a specific number of days or a number of exposures, and use the **Power Analysis Calculator** to determine what target duration works best for your metrics.

💡 **Target durations longer than 90 days:** By default, Statsig computes Pulse results for the first 90 days, though the experiment itself can run longer. Before setting a duration beyond 90 days, ask yourself if results past that period will still be relevant, and if earlier data might already provide the insights you need.

![image](https://user-images.githubusercontent.com/101903926/203634126-811bd508-8fc4-4f87-ab63-df5626344331.png)

Once set, you can track progress against the target duration in the experiment header. You’ll also receive notifications via email and Slack (if integrated) when the target duration is reached.

---
