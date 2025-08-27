---
title: Qualifying Events
slug: /statsig-warehouse-native/configuration/qualifying-events
sidebar_label: Qualifying Events
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

## Using Qualifying Events

Qualifying events are used to simulate exposures for power analysis, and to filter exposures to users who triggered a specific event. Setting up a Qualifying Event is identical to setting up an Assignment Source, except they do not require experimental information.

:::info
Please note that the qualifying event must occur after the exposure as indicated by their respective timestamps.
:::

Context columns can be used to filter the qualifying event for power analysis - for example you might have a Qualifying Event for page load, and filter to different page identifiers for power analyses of experiments on different surfaces.

## Filter by Qualifying Events

Statsig has best-in-class controls around using qualifying events to filter exposures in an experiment in cases of over-exposure.

![qualifying event filter](/img/whn/qe_filter.png)

In the image above:

- We're using forwarded sdk events from Statsig to filter exposures. This could also be a single-event source or any data source
- We've chosen to replace the actual exposure timestamp with the first observed qualifying event - this will make our metric timelines and cohort timelines more accurate
- We only count qualifying events from within an hour of an exposure event - this helps to avoid issues with late-landing attribution
- We've added a filter to only include events from the `www.statsig.com` domain

Some customers prefer this flexibility, and many just set up qualifying events as individual events to plug into their analyses.

You can often identify over-exposed experiments by observing uniformly low participation rate on all metrics.

## Power Analysis

Qualifying events can be used in power analysis as a way to estimate your experimentation population by how many people historically hit your proposed trigger event.

![power analysis with qualifying event](/img/whn/pac_qe.png)

These can be filtered by event attributes, or by entity properties (e.g. users who triggered this event and are also in a segment or country).

## Example Data

| Column Type            | Description                                                                               | Format/Rules                   |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| timestamp              | **Required** an identifier of when the qualifying event occurred                          | Castable to Timestamp/Date     |
| unit identifier        | **Required** At least one entity to which this metric belongs                             | Generally a user ID or similar |
| additional identifiers | _Optional_ Entity identifiers for reuse across identifier types                           |                                |
| context columns        | _Optional_ Fields which can be used to group by and filter results in exploratory queries |                                |

For example, you could pull from page load event logging directly and save it as a qualifying event called `Page Load`:

| timestamp           | user_id       | company_id | page_route |
| ------------------- | ------------- | ---------- | ---------- |
| 2023-10-10 00:01:01 | my_user_17503 | c_22235455 | /          |
| 2023-10-10 00:02:15 | my_user_18821 | c_22235455 | /search    |
| 2023-10-10 00:03:12 | my_user_22251 | c_9928     | /profile   |
