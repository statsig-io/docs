---
title: Adding ID Lists
sidebar_label: Add ID List
slug: /segments/add-id-list
keywords:
  - owner:shubham
last_update:
  date: 2025-09-18
---

## Adding ID Lists

### What is an ID List?
An ID List enables you to define a reusable audience segment using user identifiers like `userID`, `stableID`, or `organizationID`.

You can manage ID Lists by manually adding/removing IDs, uploading CSVs, or replacing the entire list.


### Creating an ID List Segment

1. Navigate to the **Segments** section in the [Statsig Console](https://console.statsig.com).
2. Click **Create New Segment**.
3. Toggle the segment type from **Conditional** to **ID List**.
   ![Create New Segment](https://github.com/user-attachments/assets/af7c5cb3-adc2-4e88-a411-b5844a541e49)
4. Select the **ID type** you want to build from.
   ![Create New Segment](https://github.com/user-attachments/assets/958b7545-7f23-4559-8a66-99af01d39952)
  


### Managing IDs

Once inside your ID List segment, you have a variety of options:

- **Manual Entry**: Enter IDs directly into the input box.
![Create New Segment](https://github.com/user-attachments/assets/ee94e6bc-475b-47a0-96a7-5ddba398d58c)
- **Upload CSV**: Import a list of IDs from a CSV.
- **Bulk Actions**: Choose how your input affects the existing list:
  - **Add**: Add IDs to the list
  - **Remove**: Remove matching IDs from the list
  - **Replace**: Clear all IDs and replace with a new list




You can also sync in an ID list Segment from sources like an [Amplitude Cohorts](https://help.amplitude.com/hc/en-us/articles/4789303290011) or [Segment Audiences](/integrations/data-connectors/segment#syncing-statsig-segment-id-lists-with-segment-personas-audiences) or from a custom source using the [Console API](/console-api/segments)

There is a hard limit of 10 million IDs across all ID Lists in your project.

### Keep ID Lists Small(!)
When an ID List is small (no more than 1000 IDs), it is synchronized in the same process with other feature gates, experiments, and conditional segments, which has high consistency and reliability. Once an ID List goes over 1000 in size, to scale efficiently and not negatively impact the other entities as the lists grow, there is a separate process to synchronize them. As a result, they are not downloaded in the main initialization process (in the initialization path of server SDKs, or the local evaluation version of our client SDKs), and change propagation takes longer.

We recommend always keeping your ID Lists to be no more than 1000 IDs in each, unless you are okay with the caveats mentioned above.

### (Limited Beta) Large ID Lists(!)
To target hundreds of thousands of users (or billions), the more performant pattern is to set an attribute on the User object passed to the Statsig SDK. e.g. pass in user_type:Paid or user_type:Trial in the User object, instead of having ID Lists that enumerate the Paid and Trial users. This does require your app to have this information when calling the Statsig SDK, and you're better able to control how/where to cache this information. If you have a use-case that requires leveraging ID lists larger than 1000 IDs, please reach out to our team via Slack (note this is in limited Beta and is not available for Free/ Pro users at this time). 
