---
title: Adding ID Lists
sidebar_label: Add ID List
slug: /segments/add-id-list
---

## Create an ID list for a segment

An ID list enables you specify the user IDs or stable IDs that you want to target as a reusable segment.

Assuming you have created a segment of type ID List,
 - If you're not already there, navigate to the segment page on https://console.statsig.com
 - Click the **Edit** button in the ID List panel 
 - Enter the list of identifiers and click **Confirm**
 
![image](https://user-images.githubusercontent.com/1315028/146095989-f0633201-1051-42f4-a1fb-4a8a7e55fcb7.png)

You can add thousands of identifiers using this page in the Statsig console. There is a hard cap of 10m IDs across all ID list segments in a project. Using very large ID lists will server SDKs take longer to initialize and changes to ID lists will have additional latency. 

You can also sync in an ID list Segment from sources like an [Amplitude Cohorts](https://help.amplitude.com/hc/en-us/articles/4789303290011) or [Segment Audiences](https://docs.statsig.com/integrations/data-connectors/segment#syncing-statsig-segment-id-lists-with-segment-personas-audiences) or from a custom source using the [Console API](/console-api/segments)

