---
title: Monitor an experiment
sidebar_label: Monitor
slug: /experiments-plus/monitor
---

To monitor the status of your experiment, 
 - Navigate to **Experiments+** in the left-hand navigation panel in the Statsig console
 - Select the experiment you want to monitor 
 - **Experiment Health Checks** show alerts for problems with the experiment setup.  Hover over the icon and click on a check for more details.
   
   ![Screen Shot 2021-11-10 at 9 38 52 AM](https://user-images.githubusercontent.com/90343952/141164665-9f4d28b6-0d93-4cd1-a01a-e576f9049544.png)
  
    - **Checks started** verifies that config checks are occuring.  Available shortly after the experiment starts.  
    - **Checks have valid unit type** ensures that config checks contain the unit ID type selected for this experiment (user ID by default).  Available when checks begin.
    - **Pulse metrics available** monitors availability of Pulse results, which are expected on the day after the experiment starts.  
    - **Exposures are balanced** checks that the number of units exposed in each group matches the expected allocation.  The Sample Ratio Mismatch check is performed using a Chi-Squared test of independence. A p-value < 0.01 triggers a warning for possible imbalance that should be monitored, check again the following day. P-value < 0.001 means there is likley a problem with the experiment exposures.       
 - In the experiment details page, **Cumulative Exposures** show the total exposures for all variants and control groups
   
   ![image](https://user-images.githubusercontent.com/1315028/129122046-6d61f5fb-ed26-49d7-a774-52604c1aaa3a.png)

 - **Key Results** show how your primary metrics compare against the control for each variant; in the example below, the **Circle** and **Square** variants are performing worse than the **Rounded Sequare** option for the **Add-to-Cart** metric 
   
   ![image](https://user-images.githubusercontent.com/1315028/129122158-75d877a8-b098-4196-8275-69d9804a4946.png)

 - **Metrics Lifts** show how all your metrics compare against the control for each variant, highlighting the metric lifts that are statistically significant
   
   ![image](https://user-images.githubusercontent.com/1315028/129122350-7af0c3d6-9477-4f91-bb6d-e778d50c1c7d.png)
