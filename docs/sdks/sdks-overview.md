---
title: SDKs, APIs, and Integrations
sidebar_label: SDKs, APIs, and Integrations
slug: /sdks/sdks-overview
---

## Configuration Options
Statsig offers 20+ SDKs, with both client-side and server-side SDK options. At their core, Statsig’s SDKs enable two key functions: 
1. **Targeting & Assignment-** Assigning users to an experiment variant or targeting new feature roll-outs based on a user’s attributes. Target with any user or environment-level attribute you log.  
2. **Logging-** Log events for user or system-level actions, which are translated into computed Metrics for analysis within your Statsig Console.

## Client vs. Server-side SDKs
If you’ve decided to use Statsig’s SDKs, the next step is to decide how best to integrate Statsig with your client & server architecture. 

Statsig SDKs come in two main variants, **[Client SDKs](https://docs.statsig.com/client/introduction)** and **[Server SDKs](https://docs.statsig.com/server/introduction)**. These two sets of SDKs serve different purposes and are used in different parts of the feature flagging and experimentation process. The following highlights some of the key differences between them:
