---
title: Statsig Lite
sidebar_label: Statsig Lite
slug: /experimentation/statsig-lite
---

## What it is
Statsig Lite lets you visualize experiment results for data from experiments you've already run. You provide anonymized experiment exposure and metrics/events in CSVs, and get to preview it in the Statsig Console without connecting your production applications or data warehouses.

## FAQ
**I don't have real data to upload. Can I get some sample data?**
Yes. You can use these ChatGPT prompts to generate some sample data - 
> Generate a CSV dataset with sample experiment exposure data for Statsig Lite called "Exposure_data.csv". This dataset contains 1k rows, each containing the following columns:
> user_id: A unique 10 digit integer that isn't repeated in this file. The first row should be even..
> time: A date in YYYY-MM-DD format over the last two weeks.
> group: Contains 'Control' if user_id is even or 'Test' if user_id is odd
> country: A country code such as 'US', 'Canada', 'Mexico', etc.
> platform: A value such as 'Mobile', or 'Desktop'
> Ensure the dataset contains randomized, but realistic, timestamps and a balanced distribution of group, country, and platform values. 

> After than, generate a "Metrics_data.csv" that has the columns:
> user_id: each user from the exposure sheet should have at least 10 entries in this, distributed over the 2 weeks time (specified in next column) 
> time: same format as prior sheet
> metric_name: either Revenue or Visits 
> metric_value: for Revenue, a number less than 100 that has 2 decimals. The users_ids from the exposure sheet that have "Test" for group should have 10% more revenue than the user_ids that are in "Control" from the exposure sheet. Same with visits, users from "Test" in the exposure sheet should have 5% more visits than the "Control" users

When should I use it?
Is it secure?
What limits exist? 


