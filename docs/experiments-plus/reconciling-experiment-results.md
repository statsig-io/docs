---
title: Reconciling Results
sidebar_label: Reconciling Results
slug: /experiments-plus/reconciling-experiment-results
keywords:
  - owner:vm
last_update:
  date: 2024-11-05
---
## Motivation
The same data can yield very different interpretations in experiment results due to the wide variety of analysis methodology available. One of the advantages of modern experimentation platforms is ensuring consistency and transparency in experimental analysis within your organization. This paper is a brief guide to common gaps between platforms, as well as how to identify and resolve them.
## General Approach
When companies are evaluating an experimentation vendor, it's common to observe differences in results between their in-house platform and the vendor's platform when they run Proof-of-Concept (POC) validations. We've consistently been able to resolve these gaps with the steps in this document. The high level hypothesis will be that one of the following is true:
1. The metric source data is being read or joined to exposure data differently, invalidating downstream steps
2. Some advanced stats features that are available on the vendor side, but not in-house, are 'working as intended', most often reducing the influence of outliers or pre-experiment bias 
3. There is a misunderstanding on how a metric definition works, or how an advanced configuration on a metric or experiment behaves
By going through these in order, data teams evaluating a platform can quickly understand and address gaps, or understand the gap and make a decision on if the vendor's approach is acceptable to them.
## Joining Data
Based on our observational data, differences in experiment results most often stem from how exposure data is joined with metric data. At the end of this section we will cover a basic check for confirming this isn't occurring.
### ID Formats
In some cases, people log IDs in different formats to different places. For example, the binary id `4TLCtqzctSqusYcQljJLJE` maps to the UUID `a0fb4ef0-9d9e-11eb-9462-7bfc2b9a6ff2`, so a company might have the binary ID in their production environment and log that, while their data users work with the equivalent UUIDs.

This means that the exposures logged using the binary ID would *not* be able to join with the metric data using the UUID, and results would be empty. As suggested on the 'User Metrics not Calculated' health check, you can check samples for both the metric source in question and the assignment source or diagnostic logstream to confirm that the identifiers are in the same format.

ID Resolution can be used to bridge ID type gaps, but is not intended to solve for this scenario; ID Resolution helps you connect identifiers across logged-out/logged-in sessions, or other scenarios where users will commingle their identifiers because of switching identifiers during the experiment.

### Timestamps
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
        AND metrics.timestamp >= exposures.first_timestamp
    )
)
SELECT 
    group_id,
    SUM(value) as value
FROM joined_data
GROUP BY group_id;
```

It's also worth noting that timezones can influence this. Timestamps for Statsig's exposures are always in UTC; if metric data is in another timezone it will need to be adjusted to avoid filtering on the wrong comparison.

### Exposure Duplication
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
### Data Availability
When comparing a platform analysis to an **existing** experiment analysis that may have been run in the past, it's possible that the underlying data has since fallen out of retention or has been otherwise deleted. To check this, you can compare the table's retention policy to the analysis dates used in your original experiment analysis to make sure the data still exists.
Additionally, you should make sure your experiment in the vendor console is configured to analyze the same time range your original analysis used. 
### Validation
The validation procedure for the initial metric data and join is to use the query provided in [Timestamps](https://docs.statsig.com/experiments-plus/reconciling-experiment-results#timestamps) section, modifying it to run on both platforms to evaluate that a target metric has the same totals per group across both platforms. 
Warehouse Native platforms have an advantage here in that the SQL dialect and source data will generally be the same in both Vendor code and in your in-house code, making comparisons simpler.
We recommend picking one metric of interest, validating this data, and resolving any differences before checking in on Statistical/Metric methodologies.
## Statistical Features
Choices in statistical methodologies can significantly impact experiment results. The following are common root-causes for gaps in results, but we always recommend that users closely read the queries being run by the vendor to understand any particulars in methodology.
### Winsorization
Outlier trimming, or [Winsorization](https://docs.statsig.com/stats-engine/methodologies/winsorization/), can dramatically alter experiment outcomes. Turning off this feature in Statsig metrics is advisable when doing cross-system comparisons unless it is being manually applied.
### CUPED
[CUPED](https://docs.statsig.com/stats-engine/methodologies/cuped/) can significantly change variances and observed deltas, especially with high pre- and post-exposure data correlation and/or systematic differences in groups' pre-experiment data.
CUPED can be configured at a metric level, but you have the option to turn it off for a pulse result set after running analysis.
### Ratio Metrics
For ratio metrics using the delta method, only units with a non-zero denominator are included, affecting the analysis's comprehensiveness. Additionally, Statsig calculates ratios and means as

$\bar{u} = \frac{\sum_{i=0}^{n}(numerator_i)}{\sum_{i=0}^{n}(denominator_i)}$

and uses the [delta method](https://docs.statsig.com/stats-engine/variance/#ratio-and-mean-metrics) to correct for the cluster-based nature of these metrics.
## Metrics
Often, users misunderstand how a given metric is calculated. We have a comprehensive [guide in our documentation](https://docs.statsig.com/statsig-warehouse-native/configuration/metrics) with more details.
## Conclusion
Following this steps should yield an understanding of where gaps - if any - are coming from between two experiment platforms. Statsig puts a high emphasis on providing the intermediate and result datasets it uses, as well as the queries used in its analysis. This should make it easy in practice to understand where gaps arise. 
All that said, this can be tricky - please feel free to reach out if you get stuck, and we'll be happy to help. We'd also suggest looking at the [Statsig Warehouse Native Documentation](https://docs.statsig.com/statsig-warehouse-native/introduction) and [Statsig Pipeline Overview](https://docs.statsig.com/statsig-warehouse-native/pipeline-overview/) for an overview of experiment pipeline patterns.
