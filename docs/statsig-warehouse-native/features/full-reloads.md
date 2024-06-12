---
title: Full Reloads
slug: /statsig-warehouse-native/features/full-reloads
sidebar: Full Reloads
---

Full reloads will completely wipe the Staging/Results Datasets Statsig has used for previous pulse calculations, and Statsig will recalculate results from scratch.

Generally, this is used for

- initial or historical pulse loads
- cases where data has been lost or dropped on the customer side, meaning incremental reloads have lost state
- cases where data changes frequently, e.g. a DBT full reload changes historical data due to chargebacks, model changes, or other reasons
- there's complex data dependencies, and a team wants to ensure that the gap between Statsig and Internal Systems doesn't cause inconsistencies
