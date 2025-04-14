---
title: Adding ID Lists
sidebar_label: Add ID List
slug: /segments/add-id-list
keywords:
  - owner:shubham
last_update:
  date: 2024-10-09
---

## Create an ID list for a segment

An ID list enables you specify the user IDs or stable IDs that you want to target as a reusable segment.

Assuming you have created a segment of type ID List,
 - If you're not already there, navigate to the segment page on https://console.statsig.com
 - Click the **Edit** button in the ID List panel 
 - Enter the list of identifiers and click **Confirm**
 
![image](https://user-images.githubusercontent.com/1315028/146095989-f0633201-1051-42f4-a1fb-4a8a7e55fcb7.png)

You can also sync in an ID list Segment from sources like an [Amplitude Cohorts](https://help.amplitude.com/hc/en-us/articles/4789303290011) or [Segment Audiences](/integrations/data-connectors/segment#syncing-statsig-segment-id-lists-with-segment-personas-audiences) or from a custom source using the [Console API](/console-api/segments)

There is a hard limit of 10 million IDs across all ID Lists in your project.

### Keep ID Lists Small(!)
When an ID List is small (no more than 1000 IDs), it is synchronized in the same process with other feature gates, experiments, and conditional segments, which has high consistency and reliability. Once an ID List goes over 1000 in size, to scale efficiently and not negatively impact the other entities as the lists grow, there is a separate process to synchronize them. As a result, they are not downloaded in the main initialization process (in the initialization path of server SDKs, or the local evaluation version of our client SDKs), and change propagation takes longer.

We recommend always keeping your ID Lists to be no more than 1000 IDs in each, unless you are okay with the caveats mentioned above.

### Very Large ID Lists(!)
Statsig's support for very large ID lists has been deprecated. To target hundreds of thousands of users (or billions), the preferred pattern is to set an attribute on the User object passed to the Statsig SDK. e.g. pass in user_type:Paid or user_type:Trial in the User object, instead of having ID Lists that enumerate the Paid and Trial users. This does require your app to have this information when calling the Statsig SDK, but you're better able to control how/where to cache this information.
