---
title: SDKs
slug: /statsig-warehouse-native/guides/sdks
sidebar_label: SDKs
---

Warehouse Native Works with any of Statsig's SDKs for logging events and getting feature flags or experiment assignments.

This page is a brief overview of how Warehouse Native works with Statsig's SDKs.
Refer to the [client](../../client/introduction) or [server](../../server/introduction) SDK docs for help setting up SDKs.

## Exposures

Statsig calculates deduplicated first-exposure rollups for you on a daily basis and exports that miniaturized dataset to your warehouse. It uses the same credentials that are used in experiment analysis,
and writes to your statsig staging dataset. This automatically generates an assigment source which includes any user-level metadata fields you log as part of your evaluation.

## Log Events

You can also use Statsig's powerful event logging to send events to the Statsig SDK and have them later exported to your warehouse for analysis. (In beta, broadly available soon)
