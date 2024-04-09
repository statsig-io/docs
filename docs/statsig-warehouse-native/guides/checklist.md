---
title: Setup Checklist
slug: /statsig-warehouse-native/guides/checklist
sidebar_label: Setup Checklist
---

Once you've connected your warehouse, and set up metrics sources and assignment sources, you can check the following items to make sure your setup is complete and correct.
1. Primary keys 
2. Timestamps
3. Duplication
4. Data availability

After these checks, your offline results should match the results in the Statsig console, after turning off advanced features

## 1. Primary key

During the setup of an experiment, you can select the unit of assignment, which serves as the primary key to join the assignment with metrics. We should make sure that the assignment source and the metrics source share the same primary key.

In an Analyze-Only experiment, this primary key comes from your assignment source
- Make sure the unit ID in your assignment source matches the unit ID in your metric source

In an Assign and Analyze experiment, this primary key comes from Statsig SDK
- You can check this key from the statsig_forwarded_exposures table in the assignment sources
- You need to either pass the unit ID to the SDK ([docs](https://docs.statsig.com/client/introduction)) or use the SDK to control your features and generate the metrics table correspondingly


## 2. Timestamps
It is important to analyze metric data only after a user has been exposed to the experiment. Pre-experiment data should have no average treatment effect, and therefore its inclusion dilutes results. Statsig employs a timestamp-based join for this purpose, with an option for a date-based join for daily data. This should look like the SQL snippet below:

```
WITH 
metrics as (...),
exposures as (...),
joined_data as (
    SELECT 
        exposures.unit_id,
        exposures.experiment_id,
        exposures.group_id,
        metrics.timestamp,
        metrics.value
    FROM exposures
    JOIN metrics
    ON (
        exposures.unit_id = metrics.unit_id
        AND metrics.timestamp >= 
        	exposures.first_timestamp
    )
)
SELECT 
    group_id,
    SUM(value) as value
FROM joined_data
GROUP BY group_id;
```

## 3. Exposure duplication
Exposure data must be de-duplicated before joining to ensure a single record per user. Many vendors further manage crossover users (users present in more than one experiment group), removing them from analysis and/or alerting if this occurs with high frequency.

```
SELECT 
    unit_id,
    experiment_id,
    MIN(timestamp) as first_timestamp,
    COUNT(distinct group_id) as groups
FROM <exposures_table>
GROUP BY 
    unit_id,
    experiment_id,
    group_id
HAVING COUNT(distinct group_id) = 1;
```

## 4. Data availability
When comparing a platform analysis to an **existing** experiment analysis that may have been run in the past, it's possible that the underlying data has since fallen out of retention or has been otherwise deleted. To check this, you can compare the table's retention policy to the analysis dates used in your original experiment analysis to make sure the data still exists.


# Make sure results match
After the four steps above, your offline analysis shall yield the same results with the Statsig console. Note that the Statsig Console has a few advanced features such as [winsorization](https://docs.statsig.com/stats-engine/methodologies/winsorization#winsorization-statsig-whn), [CUPED](https://docs.statsig.com/stats-engine/variance_reduction#cuped), and employs [the delta method](https://docs.statsig.com/stats-engine/variance#ratio-and-mean-metrics) to address ratio metrics. So we recommend turning these features off at the first time of checking results with us.

[This article](https://www.statsig.com/blog/how-to-analyze-an-experiment-from-databricks-tables) gives and example of running offline calculations in Databricks.
