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

You can add thousands of identifiers using this page in the Statsig console. There is a hard cap of 10m IDs across all ID list segments in a project.

You can also sync in an ID list Segment from sources like an [Amplitude Cohorts](https://help.amplitude.com/hc/en-us/articles/4789303290011) or [Segment Audiences](https://docs.statsig.com/integrations/data-connectors/segment#syncing-statsig-segment-id-lists-with-segment-personas-audiences) or from a custom source using the [Console API](/console-api/segments)

### Very Large ID Lists(!)
Evaluating ID Lists requires Statsig to sync down to each instance of the server SDK a copy of the ID List; and then keep syncing any changes made to this list. Having very large ID Lists will extend how long your servers take to initialize the Statsig SDK. Changes to the ID List are synced lazily without blocking other updates to your configuration in Statsig. Client SDKs work great with ID Lists - since it's only the results of the evaluation for a single user that are sent down to the Client SDK.

To target hundreds of thousands of users (or billions), the preferred pattern is to set an attribute on the User object passed to the Statsig SDK. e.g. pass in user_type:Paid or user_type:Trial in the User object, instead of having ID Lists that enumerate the Paid and Trial users. This does require your app to have this information when calling the Statsig SDK, but you're better able to control how/where to cache this information.
