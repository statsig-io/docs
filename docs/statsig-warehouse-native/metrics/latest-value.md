---
title: First or Latest Value Metrics
sidebar_label: First/Latest Value
keywords:
  - owner:vm
last_update:
  date: 2025-05-08
---

## Summary

First (or Latest) Value metrics calculate the first/latest value of a metric source for each unit, and then average it over the experiment population.

### Use Cases

First value metrics are used to track the initial experience a user has with your product. This could be first purchase value, initial time-to-load, or any other "initial" result you ar expecting to influence with your change.

Latest value metrics are used to track how an experiment is impacting the state of your population. For example, you might want to measure if the test group in an experiment has a higher net account balance, or if the current loyalty rewards balance is higher for users in one arm of an experiment.

You can use latest value metrics to approximate user 'statuses' as well, such as "is_subscriber", if you have a Metric Source with a 1/0 flag for all users. We recommend using [the unit count](./unit-count-latest) equivalent for this use case, since you can filter on a sparse dataset and Statsig handles imputing/tracking 0s.

## Calculation

At the unit level, first value metrics will calculate each day's first non-null value within cohort bounds. Similarly, latest value metrics calculate each day's latest non-null value within any cohort bounds.

For pulse, the first value will be carried forward through from the first date with data, and the latest value will be determined by taking the latest value from the latest day available.

At the group level, the mean is calculated as the SUM of the unit-level values, divided by the count of UNIQUE UNITS exposed to the experiment.

This would look like the SQL below:

```
-- Unit Level
SELECT
  source_data.unit_id,
  exposure_data.group_id,
  LATEST_VALUE(source_data.value_field) as value
  -- or FIRST_VALUE
FROM source_data
JOIN exposure_data
ON
  -- Only include users who saw the experiment
  source_data.unit_id = exposure_data.unit_id
  -- Only include data from after the user saw the experiment
  -- In this case exposure_data is already deduped to the "first exposure"
  AND source_data.timestamp >= exposure_data.timestamp
WHERE value_field IS NOT NULL
GROUP BY
  source_data.unit_id,
  exposure_data.group_id;

-- Experiment
SELECT
  group_id,
  COUNT(distinct unit_id) total_units
FROM exposure_data
GROUP BY group_id;

-- Group Level
SELECT
  group_id,
  SUM(value)/SUM(total_units) as mean
FROM unit_data
JOIN group_data
USING (group_id)
GROUP BY group_id;
```

### Methodology Notes

Users without a value will be treated as 0s; note that if there is an existing value, the user will "stay at" that value unless a 0 or other new value is provided later.

## Options

- Metric Breakdowns
  - You can configure Metadata Columns to group results by, getting easy access to dimensional views in pulse results
- [Cohort Windows](../features/cohort-metrics.md)
  - You can specify a window for data collection after a unit's exposure. For example, a 0-1 day cohort window would only count actions from days 0 and 1 after a unit was exposed to an experiment
    - **Only include units with a completed window** can be selected to remove units out of pulse analysis for this metric until the cohort window has completed
- CUPED
  - Specify if you want to calculate CUPED, and the lookback window for CUPED's pre-experiment data inputs

### Special Case: Surrogate Metrics

You can use latest value metrics to implement surrogate metrics. Surrogate metrics (aka proxy metrics or predictive metrics) are a prediction of some long term metric that's impractical to measure over the duration of an experiment, and have some inherent prediction error associated with the model used to derive the metric values.

Under advanced settings in latest value metrics, you can indicate a metric as a surrogate metric with a mean squared error (MSE). This means that the prediction accuracy can be accounted for in calculating variance and thus adjusts p-values and confidence intervals accordingly.

Consider the variable X to be the true north metric which is being predicted by the surrogate metric S. The surrogate metric S is assumed to be an unbiased estimator with an error term $\epsilon$.

$$
\mu_{X} = \mu_{S} = \overline{S}
$$

$$
Var(X) = Var(S + \epsilon) = Var(S) + MSE
$$

$$
Var(\overline{X}) = \frac{Var(X)}{n} = \frac{Var(S) + MSE}{n}
$$
