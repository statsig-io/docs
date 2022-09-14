---
title: Raw Events
sidebar_label: Raw Events
slug: /metrics/raw-events
---

# Raw Events

Statsig uses the raw events emitted by your application to compute a wide range of product metrics. These events contain the context you need to understand user behavior and infer their intentions. 

## Types of Raw Events
Statsig records two types of raw events from your application:

1. **Exposure events** track which users are assigned to control and test groups. This data allows Statsig to generate test results so you can evaluate the impact of new features and experiments. Exposure events also allow Statsig to assess the health of an experiment so you can always make key decisions based on trustworthy experiments. To generate experiment results, Statsig will require you to provide exposure events at a minimum. 

2. **Custom events** track user actions and as any events that get triggered in the course of using your application, including events that capture performance (e.g. latency) or capture data for analytics (e.g. session start). These events allow Statsig to assess overall user engagement in your application (e.g. daily active users, weekly stickiness) as well as changes in user behavior as you roll out new features and experiments.

## Unit Identifiers
You must include at least one unit identifier when you record any raw events with Statsig. This unit identifier is essential for two reasons:
1. Ensure that your users receive a consistent application experience when they're allocated to control or test groups in an experiment 
2. Join exposure events with all custom events triggered by a given user to compute experiment results

## Ingesting Raw Events
You can ingest raw events into Statsig in three ways.

![image](https://user-images.githubusercontent.com/1315028/182466148-a40ad007-a60a-47b8-9cd3-9b27d0af82ed.png)

1. Integrate with Statsig's [client](https://docs.statsig.com/client/introduction) or [server](https://docs.statsig.com/server/introduction) SDKs or [HTTP](https://docs.statsig.com/http-api) API
2. Set up Statsig as a destination in a data connector such as [Segment](https://docs.statsig.com/integrations/data-connectors/segment#configuring-incoming-events), [mParticle](https://docs.statsig.com/integrations/data-connectors/mparticle#configuring-incoming-events), [Rudderstack](https://docs.statsig.com/integrations/data-connectors/rudderstack#configuring-incoming-events) and [Census](https://docs.statsig.com/integrations/data-connectors/census#configuring-incoming-events)
3. Import from your data warehouse such as [Snowflake](https://docs.statsig.com/integrations/data-imports/snowflake#direct-ingestion-from-snowflake), [BigQuery](https://docs.statsig.com/integrations/data-imports/bigquery), and [Redshift](https://docs.statsig.com/integrations/data-imports/redshift#direct-ingestion).

## Raw Events in Console
As you ingest custom events, you'll see these listed in the **Metrics** section under the **Events** tab in the Statsig console. 

![Screen Shot 2022-06-07 at 10 59 14 AM](https://user-images.githubusercontent.com/101903926/172451019-fc450842-a546-4ea0-94a9-d54df8279ed2.png)

You can toggle between a list view or chart view of your events to view the trend line over time.  

![Screen Shot 2022-06-07 at 12 00 22 PM](https://user-images.githubusercontent.com/101903926/172461387-a3d42641-2c2c-4128-aabc-fc2b5dba2ed9.png)

Statsig provides two unit identifiers by default: **User ID** and **Stable ID**. Select a unit identifier from the drop down to view all events that include the selected unit identifier. See the [guide to create custom ID type](https://docs.statsig.com/guides/experiment-on-custom-id-types#step-1---add-companyid-as-a-new-id-type-in-your-project-settings) to create additional unit identifiers for your project. 

![Screen Shot 2022-06-07 at 10 58 26 AM](https://user-images.githubusercontent.com/101903926/172450890-4a4c95eb-a362-49a6-90ad-68f3460a933f.png)
