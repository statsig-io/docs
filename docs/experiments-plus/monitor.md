---
title: Monitor an experiment
sidebar_label: Monitor
slug: /experiments-plus/monitor
---

Once you turn on your experiment, you can monitor the health of your experiment and view the exposures for the control and variants groups.

### Monitoring experiment health
To monitor the status of your experiment, 
 - Navigate to **Experiments** in the left-hand navigation panel in the Statsig console
 - Select the experiment you want to monitor 
 - **Experiment Health Checks** show alerts for problems with the experiment setup.  Hover over the icon and click on a check for more details.
   
   ![Screen Shot 2021-11-10 at 9 38 52 AM](https://user-images.githubusercontent.com/90343952/141164665-9f4d28b6-0d93-4cd1-a01a-e576f9049544.png)
  
    - **Checks started** verifies that config checks are occuring.  Available shortly after the experiment starts.  
    - **Checks have valid unit type** ensures that config checks contain the unit ID type selected for this experiment (user ID by default).  Available when checks begin.
    - **Event metrics have data** checks that events are being logged with unit IDs matching the experiment.  If logged events don't have the same unit ID as the experiment exposures, event based metrics won't be available in Pulse. A common cause is running an experiment using an ID type that isn't userID (eg. stableID or a customID) - while events data coming from a system like Segment is missing this identifier to match to. You can look at examples of how to set this [here](/integrations/data-connectors/segment#user-ids-and-custom-ids). Available within an hour after an exposure and event have been logged by the same unitID.
    - **Pulse metrics available** monitors availability of Pulse results, which are expected on the day after the experiment starts.  
    - **Exposures are balanced** checks that the number of units exposed in each group matches the expected allocation.  The Sample Ratio Mismatch check is performed using a Chi-Squared test of independence. A p-value < 0.01 triggers a warning for possible imbalance that should be monitored, check again the following day. P-value < 0.001 means there is likley a problem with the experiment exposures.      
    - **Parameter changed** warns you when a parameter was changed on an experiment that was in progress.  This could mean that users in one or more groups are receiving a different experience than they were at the beginning of the experiment, making it a different experiment.  In those cases, we recommend restarting the experiment to get an accurate measure of results.  However, than can be some valid reason to update paramters - for example, if you are adding a certain parameter that controls an experience that was supposed to trigger at a certain time, and adding it later was the same as creating it at the beginning since it would not have changed the experience until that point. Hence it is only flagged as a warning. If the change did not impact the experiment, you can ignore the warning. 
 
### Monitoring exposures

To monitor the exposures for all variants and control groups,
 -  Navigate to **Experiments** in the left-hand navigation panel in the Statsig console
 -  Select the experiment that you want to monitor
 -  Click the **Results** tab and  
 -  The **Cumulative Exposures** panel shows the exposures for each variant in your experiment over time (as shown below)
   
   ![image](https://user-images.githubusercontent.com/1315028/129122046-6d61f5fb-ed26-49d7-a774-52604c1aaa3a.png)
