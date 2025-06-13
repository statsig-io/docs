---
title: Warehouse Storage
slug: /statsig-warehouse-native/warehouse-management/storage
sidebar_label: Warehouse Storage
keywords:
  - owner:craig
last_update:
  date: 2025-06-10
---

## Introduction

Statsig uses its sandbox in your warehouse to cache intermediate tables and result tables. This allows incremental reloads - not recalculating metrics for every day of the experiment on each load - and allows the use of these tables for additional ad-hoc analysis.

These tables will be stored in the sandbox schema or dataset configured for statsig. You can use this to track storage footprint and manage permissions easily.

## Conventions / Usage

Tables are generally sharded by entity ID. For example, the experiment `early_user_journey_acceleration` would have that identifier in its associated table names for scorecard loads. This is an easy way to look up tables for a given experiment.

Statsig has special tables that it writes to. These can be found in metric sources or assignment sources:

- pipeline overview, where the performance statistics for the jobs Statsig runs are written
- statsig_forwarded_events, where events logged via statsig.log_event are forwarded
- statsig_forwarded_exposures, where exposures from experiments, gates, autotunes, and holdouts are sent
- statsig_forwarded_switchback_exposures, where switchback-formatted exposures are sent
- statsig_daily_results, where rendered results with statistics like p-value are sent

Some of the above have pre-set table names, and some table names are configured in data connection settings.

Many users ingest these tables as part of internal pipelines. We recommend configuring lookback windows such that mutable data does not cause issues, as data is regularly updated in the tables above, and in some cases will be backfilled up to several days in cases of data delays or repairs.

Additionally, exposures do not necessarily dedupe, since fast-forwarded exposures will duplicate records from daily exports, and statsig only holds on to 30d of history for warehouse native projects - meaning after 30 days a given unit's exposure will be "new" and re-exported.

## Volume

Scorecard loads will generate a varied number of tables depending on factors like the number of metric sources accessed and the types of metrics loaded. Additionally, depending on data volumes Statsig may choose to materialize intermediate tables before or after large operations; this dramatically reduces compute cost incurred.

This can lead to a large number of artifacts; customers running 300+ experiments have run into default quota limits on vendors like databricks. This can be managed by requesting a free quota increase or utilizing the TTLs described below in the management settings.

## Management

Transient tables have a short ttl - usually 1-2 days - and will be automatically cleaned up.

Other tables are permanent by default, and can be cleaned up from the experiment in statsig's console or as part of launching an experiment. Additionally, TTLs can be configured for tables by "mode" (e.g. results, permanent staging, and transient staging) in the data connection section of a project's settings.

It may also make sense to manage storage programmatically via your own warehouse tools, e.g. cleaning up entities which have not been accessed or modified in the last month. Generally this is not necessary given TTLs, but in some cases failures can occur and Statsig's internal tracking can consider a table dropped when it still has a storage footprint.

**Explore Query Dependencies**: Explore queries rely specifically on permanent staging tables for functionality. These tables are used to reduce the need to re-compute data for analysis that was already performed by the scorecard run. Unlike results tables which are cached locally on Statsig servers, permanent staging tables must be maintained in your warehouse for explorer queries to function properly; this is to avoid regressing large volumes of data that may contain PII or other sensitive information.

## Troubleshooting Storage Issues

### Missing Data Errors

Warehouse Native users may encounter `TABLE_OR_VIEW_NOT_FOUND` errors, or similar, when required data tables are missing from your warehouse. This typically occurs when:

- **Permanent staging tables have been dropped**: Explore queries and advanced analysis rely specifically on permanent staging tables, not results or transient staging tables
- **TTL settings have expired tables**: Tables with configured time-to-live (TTL) settings may be automatically cleaned up
- **Incomplete data loads**: Initial experiment setup or data pipeline issues may prevent table creation

#### Resolution Steps

**For Missing Staging Tables:**
Missing permanent staging tables require a full reload to recreate the staging dataset.


**For General Missing Tables:**
1. Check your warehouse's TTL settings in the data connection configuration
2. Verify that permanent staging tables exist in your configured sandbox schema
3. If tables were manually dropped, trigger a full data reload
4. Contact support if tables continue to be missing after reload, or if you didn't drop them

#### Understanding Storage Dependencies

Warehouse Native uses several types of tables with different storage patterns:
- **Permanent staging tables**: Required for explore queries and advanced analysis functionality
- **Transient staging tables**: Short-lived intermediate tables with a mix of automatic cleanup (1-2 days TTL) and permanent storage (small tables that are useful for ad-hoc analysis like regression coefficients).
- **Results tables**: Output statistics from the pipeline, which are copied and cached locally on Statsig servers

Note: Vacuum jobs do not affect staging tables used by Statsig

