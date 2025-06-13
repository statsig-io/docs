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

**Explorer Query Dependencies**: Explorer queries rely specifically on permanent staging tables for functionality. These tables include covariate tables (like `raw_covariates_<experiment_id>`) that are critical for custom analysis and CUPED variance reduction. Unlike results tables which are cached locally on Statsig servers, permanent staging tables must be maintained in your warehouse for explorer queries to function properly.

**TTL Impact on Explorer Queries**: When TTL settings are configured for permanent staging tables, expired tables will cause `TABLE_OR_VIEW_NOT_FOUND` errors in explorer queries. If explorer queries fail due to missing tables, a full reload (not incremental) is required to restore the necessary permanent staging tables.

It may also make sense to manage storage programmatically via your own warehouse tools, e.g. cleaning up entities which have not been accessed or modified in the last month. Generally this is not necessary given TTLs, but in some cases failures can occur and Statsig's internal tracking can consider a table dropped when it still has a storage footprint.
