---
title: Event Filtering
keywords:
  - owner:brock
last_update: 2022-05-31 11:00:18 -0700
---

Once you've enabled an integration, you can select specific events that you want to send and/or receive by clicking on the **Event Filtering** button.

The steps outline below are for the Segment integration, but the steps to enable **Event Filtering** are the same across integrations.

## Incoming Event Filtering

If your integration includes "Incoming" events, you can filter which ones Statsig should care about. All others will not be logged.

- Visit the [integrations](https://console.statsig.com/integrations) page on console.statsig.com.
- Select the integration you wish to filter events for.
- In the dialog that appears, select "Event Filtering"

![image](https://user-images.githubusercontent.com/1315028/150829446-149dc7c5-0025-451a-8fae-09760b4f0566.png)

- You can now search for specific events and select or deselect the events that you want Statsig to ingest.

![image](https://user-images.githubusercontent.com/1315028/150829346-e2f29d7e-bca3-4427-8d54-02e96f37951d.png)

## Outgoing Event Filtering

If your integration includes "Outgoing" events, you can select which ones being sent to Statsig should then be forwarded to the integration.

- Visit the [integrations](https://console.statsig.com/integrations) page on console.statsig.com.
- Select the integration you wish to filter events for.
- In the dialog that appears, select "Event Filtering"

![image](https://user-images.githubusercontent.com/1315028/150853774-6112c939-d101-4e15-9f74-3d872e6ba6f3.png)
