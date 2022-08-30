---
title: Imports Overview (Deprecated)
---

## Overview

Statsig has a number of ways by which you can send your own events or pre-computed metrics. We support some native integrations to read directly from your data warehouse, or you can choose to write your data to Azure storage owned by Statsig.

## How Metric Imports Work

Some specifics may vary based on your approach, but in general you will write your metrics data at a user-day-metric granularity to a table (or API endpoint) with a special schema. You'll write dates as rows to a special signal table (or API endpoint) when you've finished adding metrics for that day.

Statsig will poll this signal table hourly. Once you've marked your first day of data as ready, or marked the next day of your data as ready, Statsig will pull data from your table and then process it into metrics and experiment results.

Some notes:

- New imported metrics may not show up in your catalog until the following morning
- The earliest signal date we'll consider for your first day of imported metrics is 4 weeks ago
- Statsig doesn't show metrics that haven't had a value for 2 weeks in the Metrics Catalog today. This means that you should start your imports on a recent date for them to show up.
- Statsig currently imports dates ordinally without gaps. This means if you update the signal table for `2022-06-13` and `2022-06-15`, we won't load the data for `2022-06-15` until you mark `2022-06-14` and we finish ingesting that data.

## How Event Imports Work

Event imports behave similarly to Metric imports, with a schematized data source you own and triggers for ingestion.

One key distinction is that Statsig will events pull data continuously to avoid large batch loads timing out.

## Support

Please reach out in slack if you're having any issues with imports or require a resource (such as Azure container) to be set up for you.
