---
title: Exporting Pulse Reports
sidebar_label: Export
slug: /pulse/export
---

## How to Export Pulse Data

![Finding Export Report](https://user-images.githubusercontent.com/77478319/163510492-e6bff7cf-9d7c-46b2-a276-ec2e550aa9a1.png)

You can export your Pulse Results for Feature Gates and Experiments. Simply navigate to the relevant "Pulse Results" page, and click "Export Report". Exporting results can take up to 10 minutes. A notification and an email will be sent when the report is ready, and a link will be available under under Project Settings -> Reports.

![Export Pulse Report Menu](https://user-images.githubusercontent.com/77478319/163458999-bcf599ec-4564-460a-87ba-c08975589b3b.png)

## Report Types

There are three types of export:

1. Exposures - A table of all exposed users and their first exposures. This is useful for joining on your own internal data, and running custom queries within your own data warehouse. This can also be used to verify who was in the experiment, what group they were assigned to, and when they were first exposed (around 1-25MB). This will contain:
   1. `<experiment\>_first_exposures.csv` - contains a list of users and their first exposure to the experiment.
2. Pulse Summary - This provides precomputed summary experimental data for all metrics and test groups including everything that's visible on Pulse (**around 10-100 kb**). This will contain:

   1. `<experiment\>_pulse_summary.csv` - contains Pulse aggregate metrics computed over the duration of the experiment.

3. Raw Data - This provides raw exposures and metrics data at the user-day level. This is best used for manually inspecting data, or recomputing your own statistics (**around 10MB-1GB**). This will contain:
   1. `<experiment\>_first_exposures.csv` - contains a list of users and their first exposure to the experiment. If this is the only file you are interested in, you can get this by exporting an "Exposures" report which will be much smaller in size.
   2. `<experiment\>_user_metrics.csv` - contains a list of experimental users, and their calculated metrics for each day they were enrolled in the experiment.

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

| Column Name                       | Description                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------- |
| user_id / stable_id / custom_id | Refers to the unit identifier used in the experiment                                          |
| name                              | The name of the gate/experiment                                                               |
| rule                              | For gates, this refers to the rule name                                                       |
| experiment_group                  | The group the user was assigned to                                                            |
| first_exposure_utc                | The UTC timestamp when the user was first assigned to the experiment                          |
| first_exposure_pst_date           | The date in PST when the user was first assigned to the experiment                            |
| as_of_pst_date                    | The date this data was generated                                                              |
| user_dimensions                   | JSON-formatted key-value pairs describing the user's attributes at the time of first exposure |


### Unit Metrics File Description


| Column Name         | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| pst_ds              | The 24hr window the the data refers to. All dates are anchored from 12:00a -> 11:59p PST.   |
| user_id / stable_id | Refers to the unit identifier used in the experiment                                        |
| metric_type         | The category of the metric                                                                  |
| metric_name         | The name of the metric                                                                      |
| metric_dimension    | The name of the metric dimension. '!statsig_topline' is the overall metric with no slicing. |
| metric_value        | The numeric value of the metric                                                             |
| numerator           | For some metrics, we track the numerator                                                    |
| denominator         | For some metrics, we track the denominator                                                  |

