---
title: Filter Exposures
slug: /statsig-warehouse-native/features/filtering-exposures
sidebar_label: Filter Exposures
keywords:
  - owner:vm
last_update:
  date: 2025-01-30
---

## Filter Exposures by Qualifying Event
You can use Qualifying Events to filter exposures to units who did or did not trigger an event after being exposed. This is a powerful tool, especially for analysis-only experiments where the assignment tool may have over-exposed units (e.g. assigning units on page load when the intervention was only triggered when a button was clicked).

![Screenshot 2024-06-11 at 4 18 32 PM](https://github.com/statsig-io/docs/assets/102695539/f7a5ee06-b67a-4cba-9680-fbe99c64d0fc)

We recommend caution using this tool, as it's possible to introduce post-assignment data into your assignment data, biasing results. Because of this, qualifying Event filters are disabled on Assign and Analyze experiments by default, since with the Statsig SDK experiments are usually not overexposed. The Statsig team can turn this feature on by request if you have a use case for it!

There are a few settings:
- Qualifying Event: the event source to qualify exposures with. This can be filtered, so you can pick specific target events within a qualifying event source
- Exclude matching units: whether to include, or exclude units who triggered the event
- Use qualifying event timestamp for first exposures: if the actual intervention occurred when the unit triggered the qualifying event, check this so that Statsig knows to override the exposure timestamp with the qualifying event timestamp
- Filter events by time window: restrict the qualifying event matching to events that happened within X days/minutes of the unit's exposure event

## Filter Assignment Source
You can also filter exposures to units based on the columns in assignment source. You can directly use certain columns, as well as apply filters on top of that.

Similar to filtering by qualifying event, we recommend using this tool carefully because it can artificially introduce bias to the experiment results.

<img width="1169" alt="Screen Shot 2025-05-15 at 9 43 36 PM" src="https://github.com/user-attachments/assets/36ddb74f-d9e9-4e25-8349-61077f77b863" />

