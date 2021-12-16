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
    - **Event metrics have data** checks that events are being logged with unit IDs matching the experiment.  If logged events don't have the same unit ID as the experiment exposures, event based metrics won't be available in Pulse. 
    - **Pulse metrics available** monitors availability of Pulse results, which are expected on the day after the experiment starts.  
    - **Exposures are balanced** checks that the number of units exposed in each group matches the expected allocation.  The Sample Ratio Mismatch check is performed using a Chi-Squared test of independence. A p-value < 0.01 triggers a warning for possible imbalance that should be monitored, check again the following day. P-value < 0.001 means there is likley a problem with the experiment exposures.       
 
