---
title: Tags & Teams
slug: /statsig-warehouse-native/configuration/tags-and-teams
sidebar_label: Tags & Teams
---

Statsig offers tools to enrich data sources, metrics, and entities with team ownership as well as arbitrary tags. These provide a powerful way to organize your data configuration, and also feed into advanced analytics tools like [meta-analysis](/experiments/meta-analysis.md).

## Tags

Experiments, Metrics, and Sources can all be tagged for easy discovery, search, and context. Metrics which share a tag can be bulk-added to scorecard or guardrail metric sets.

Statsig also provides a Core tag - this is meant to identify company key metrics that should be used as guardrail metrics across experiments.

See more at the [tags page](/metrics/create-metric-tags).

## Teams

For larger organizations, the Teams feature enables an organizational and settings/ permissions layer on top of a Project. Teams are configured at the Project (not Organization) level, and are default-editable by all Project Admins.

Once teams are configured and a user is assigned to a team, any config (gates/ experiments/ metrics, etc.) they create will be associated with the team they belong to, and will inherit the settings of that team. Users who are members of multiple teams will have the choice of which team to associate their config with at creation time.

This is extremely useful for managing ownership and review practices. Learn more [here](/access-management/teams).
