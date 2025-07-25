---
title: Access Pulse Reports in Warehouse Native
sidebar_label: Access Pulse Reports
slug: /pulse/access-whn
keywords:
  - owner:vm
last_update:
  date: 2025-05-07
---


## How to Access Pulse Data in Warehouse Native

WHN lets you access exposures and metric results across all experiments directly in your warehouse through SQL Views defined in your Statsig project through a metric source. 

### Exposures
Exposures are automatically written to your warehouse to the table configured in your project setup. You can find the table's location by going to Settings > Data Connection. The table should be located at the `{Database Name}.{Schema Name}.{Exposures Forwarding Table Name}`, e.g. `experimentation.statsig.exposures`.

### Results
With a SQL View, you have access to values that include experiment metadata like experiment team, experiment tags, target duration, and experiment settings like CUPED and Sequential testing, then each metric’s metadata like metric tags, and all of the metric lifts-same set of results you see on the Console copy. If you want to start using this feature, simply enable it in your project setting Project Settings > Data Connection > Export. Once you have this enabled, we will automatically handle the setup of SQL view in your warehouse as well as the metric source in your Statsig project. We will then automatically export scorecard metric results to your data warehouse each time an experiment is loaded.

![image](https://github.com/user-attachments/assets/0355e284-7e3f-40db-b441-fa2a00ccf3ab)


### Schema of the Results Data Export Table
The default table name used is statsig_daily_results. When exports are enabled, Statsig also autocreates a metric source with this name in your Statsig project.

| Column | Type | Description |
|-|-|-|
| ds | date | The date when the data was recorded |
| experimentName | string | Name of the experiment |
| experimentCreator | string | Creator of the experiment |
| experimentTeam | string | Team conducting the experiment |
| experimentTags | array of strings | Tags associated with the experiment, represented as an array of strings |
| experimentStartTs | number | Start timestamp of the experiment, in milliseconds |
| experimentEndTs | number | End timestamp of the experiment, in milliseconds |
| targetExposures | number | The target number of exposures for the experiment |
| targetDuration | number | The target duration  of the experiment |
| actualDuration | number | The actual duration  the experiment ran |
| controlGroupName | string | Name of the control group in the experiment |
| testGroupName | string | Name of the test group in the experiment |
| useCUPED | boolean | Whether CUPED was applied in the experiment  |
| useSequential | boolean | Whether sequential testing was applied in the experiment  |
| metricName | string | Name of the metric being measured in the experiment |
| metricType | string | Type of metric |
| metricTags | array of strings | Tags associated with the metric, represented as an array of strings |
| higherIsBetter | boolean | Whether a higher value of the metric is better |
| isVerifiedMetric | boolean | Whether the metric is verified |
| metricTeam | string | Team responsible for the metric |
| absoluteDelta | number | The absolute change in the metric value between control and test groups |
| absoluteDeltaCI | number | Confidence interval for the absolute delta |
| relativeDelta | number | The relative change in the metric value between control and test groups |
| relativeDeltaCI | number | Confidence interval for the relative delta |
| absoluteDeltaPValue | number | P-value associated with the absolute delta metric result |
| toplineAbs | number | The absolute topline metric value for the experiment |
| toplineAbsCI | number | Confidence interval for the absolute topline metric |
| toplineRel | number | The relative topline metric value for the experiment |
| toplineRelCI | number | Confidence interval for the relative topline metric |
| projectedTopline | number | Projected topline metric value based on current data |
| projectedToplineCI | number | Confidence interval for the projected topline metric |
| projectedToplineRel | number | Projected relative topline metric value based on current data |
| projectedToplineRelCI | number | Confidence interval for the projected relative topline metric |
| controlUnits | number | The number of control group units |
| testUnits | number | The number of test group units |
| controlTotal | number | Total value for the control group metric |
| testTotal | number | Total value for the test group metric |
| controlMean | number | The mean value for the control group |
| testMean | number | The mean value for the test group |
| sequentialTestingAbsoluteDeltaCI | number (optional) | Confidence interval for the absolute delta with sequential testing enabled|
| sequentialTestingRelativeDeltaCI | number (optional) | Confidence interval for the relative delta with sequential testing enabled|
| sequentialTestingAbsoluteDeltaPValue | number (optional) | P-value for the absolute delta with sequential testing enabled|


## Report Types

There are three types of exports:

1. Exposures - A table of all exposed users and their first exposures. This is useful for joining on your own internal data, and running custom queries within your own data warehouse. This can also be used to verify who was in the experiment, what group they were assigned to, and when they were first exposed (around 1-25MB). This will contain:
   1. `<experiment\>_first_exposures.csv` - contains a list of users and their first exposure to the experiment.
2. Pulse Summary - This provides precomputed summary experimental data for all metrics and test groups including everything that's visible on Pulse (**around 10-100 kb**). This will contain:

   1. `<experiment\>_pulse_summary.csv` - contains Pulse aggregate metrics computed over the duration of the experiment.

3. Raw Data - This provides raw exposures and metrics data at the user-day level. This is best used for manually inspecting data, or recomputing your own statistics (**around 10MB-1GB**). This will contain:
   1. `<experiment\>_first_exposures.csv` - contains a list of users and their first exposure to the experiment. If this is the only file you are interested in, you can get this by exporting an "Exposures" report which will be much smaller in size.
   2. `<experiment\>_user_metrics.csv` - contains a list of experimental users, and their calculated metrics for each day they were enrolled in the experiment.

In WHN, only the Pulse Summary may be exported, as the other two types of data are only stored [in your warehouse](https://docs.statsig.com/statsig-warehouse-native/pipeline-overview/#artifacts-and-entity-relationships). The availability of these exports are subject to our retention policy. We hold exposures data for up-to 90 days after an experiment is concluded. We hold raw user-level metrics data for 90 days.

### Pulse Summary File Description - For Feature Gates

| Column Name      | Description                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | Name of the Experiment or Feature Gate                                                                                                                                                                                 |
| rule             | Name of the Feature Gate Rule.                                                                                                                                                                                         |
| metric_type      | Category of the metric. Different metric_types are computed differently, including how they're computed in Pulse.                                                                                                      |
| metric_name      | The name of the metric. For event metrics, this is the name of the event.                                                                                                                                              |
| metric_dimension | The subcategory of the metric. For example, if you log value in LogEvent, then value will show up as a subdimension. dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions. |
| start_date       | The start date for this measurement                                                                                                                                                                                    |
| end_date         | The end date for this measurement                                                                                                                                                                                      |
| test_units       | The number of users in the test group                                                                                                                                                                                  |
| test_mean        | The average value of this metric across test users (or participating units when applicable)                                                                                                                            |
| test_stderr      | The standard error for the estimate of the mean for test users. This can be used to compute confidence intervals.                                                                                                      |
| ctrl_units       | The number of users in the control group                                                                                                                                                                               |
| ctrl_mean        | The average value of this metric across control users (or participating units when applicable)                                                                                                                         |
| ctrl_stderr      | The standard error for the estimate of the mean for control users. This can be used to compute confidence intervals.                                                                                                   |
| abs_delta        | The absolute difference between the test and control mean (test_mean - ctrl_mean)                                                                                                                                      |
| abs_stderr       | The estimated standard error of abs_delta                                                                                                                                                                              |
| rel_delta        | The relative difference between test and control mean, sometimes referred to as lift (test_mean - ctrl_mean)/ctrl_mean                                                                                                 |
| rel_stderr       | The estimated standard error of rel_delta (abs_delta/ctrl_mean)                                                                                                                                                        |
| z_score          | The calculated Z-score                                                                                                                                                                                                 |

### Pulse Summary File Description - For Experiments

| Column Name      | Description                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | Name of the Experiment or Feature Gate                                                                                                                                                                                 |
| rule             | Name of the Feature Gate Rule.                                                                                                                                                                                         |
| experiment_group | The group of users for which this metric is computed for. For a feature gate, this is pass/fail. For an experiment, this is the variant name.                                                                          |
| metric_type      | Category of the metric. Different metric_types are computed differently, including how they're computed in Pulse.                                                                                                      |
| metric_name      | The name of the metric. For event metrics, this is the name of the event.                                                                                                                                              |
| metric_dimension | The subcategory of the metric. For example, if you log value in LogEvent, then value will show up as a subdimension. dimension = !statsig_topline indicates that this row reflects an aggregate across all dimensions. |
| start_date       | The start date for this measurement                                                                                                                                                                                    |
| end_date         | The end date for this measurement                                                                                                                                                                                      |
| units            | The number of users included in this metric estimate.                                                                                                                                                                  |
| mean             | The average value of this metric across units (or participating units when applicable)                                                                                                                                 |
| stderr           | The standard error for the estimate of the mean. This can be used to compute confidence intervals.                                                                                                                     |

### First Exposures File Description

| Column Name             | Description                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| unit_id                 | Refers to the unit identifier used in the experiment (eg. user_id, stable_id, org_id)         |
| name                    | The name of the gate/experiment                                                               |
| rule                    | For gates, this refers to the rule name                                                       |
| experiment_group        | The group the user was assigned to                                                            |
| first_exposure_utc      | The UTC timestamp when the user was first assigned to the experiment                          |
| first_exposure_pst_date | The date in PST when the user was first assigned to the experiment                            |
| as_of_pst_date          | The date this data was generated                                                              |
| user_dimensions         | JSON-formatted key-value pairs describing the user's attributes at the time of first exposure |

### Unit Metrics File Description

| Column Name      | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| pst_ds           | The 24hr window the the data refers to. All dates are anchored from 12:00a -> 11:59p PST.   |
| unit_id          | Refers to the unit identifier used in the experiment (eg. user_id, stable_id, org_id)       |
| metric_type      | The category of the metric                                                                  |
| metric_name      | The name of the metric                                                                      |
| metric_dimension | The name of the metric dimension. '!statsig_topline' is the overall metric with no slicing. |
| metric_value     | The numeric value of the metric                                                             |
| numerator        | For some metrics, we track the numerator                                                    |
| denominator      | For some metrics, we track the denominator                                                  |
