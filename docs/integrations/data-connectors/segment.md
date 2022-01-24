---
title: Segment
---

## Overview

Enabling the Segment integration for Statsig will allow Statsig to pull in your Segment events. This allows you to run your experiment analysis on Statsig with all of your existing events from Segment without requiring any additional logging.

When Statsig receives events from Segment, these will be visible and aggregated in the [Metrics](/metrics) tab in the Statsig console. These events will automatically be included in your [Pulse](/pulse) results for A/B tests with Statsig's feature gates as well as all your [Experiment](/experiments-plus/monitor) results. 

## Configuring Incoming Events
To ingest your events from Segment,
1. In the Segment App, click **Add Destination** in the Destinations catalog page.
2. Search for “Statsig” in the Destinations Catalog, and select the “Statsig” destination.
3. Choose which Source should send data to the “Statsig” destination.
4. From the [Statsig dashboard](https://console.statsig.com/api_keys), copy the Statsig "Server Secret Key”.
5. Enter the Statsig “Server Secret Key” in the “Statsig” destination settings in Segment.
6. On the Statsig [Integration page](https://console.statsig.com/integrations) enable the Segment integration.
7. As your Segment events flow into Statsig, you'll see a live **Log Stream** in the [Metrics](/metrics) tab in the Statsig console. You can click one of these events to see the details that are logged as part of the event. 

![image](https://user-images.githubusercontent.com/1315028/150830169-17564060-816b-4c5c-ade9-10bf6274265a.png)

Statsig automatically detects the `event` and `userID` fields that you log through your Segment [`track`](https://segment.com/docs/connections/spec/track/) event. If you're running an experiment with the user as your unit type, this userID should match the user identifer that you log with the Statsig SDK, for example when you expose the the user to a Statsig feature gate or experiment. 

If you're using a [custom ID](https://docs.statsig.com/guides/experiment-on-custom-id-types) as the unit type for your experiment, you can provide this identifier using the key `statsigCustomIDs` as part of the Segment `properties` field as shown below.

```bash title="JSON Body"
{
  ...
  properties: {
    "statsigCustomIDs": [ "companyID", "<this_company_id>", ...]
  }
}
```

The `statsigCustomIDs` field in properties should be an array, where the even index is the name of the user ID type and the odd index is the value of the previous element in the array. Assuming you've created this custom ID type on Statsig (under **ID Type Settings** in your [Project Settings](https://console.statsig.com/settings)), Statsig will automatically recognize these custom identifiers to compute your experiment results appropriately. 



## Configuring Outbound Events
To export your Statsig events to Segment,
1. Log into the Statsig console and navigate to the [**Integrations**](https://console.statsig.com/integrations) page. 
2. Click on the **Segment** card and switch to the **Outbound** tab, copy your [Segment write key](https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key), paste into the **API Key** text box shown below, and click **Enable**.

![image](https://user-images.githubusercontent.com/1315028/150827399-333d9064-de1c-4f4e-bc33-51a46a83531d.png)

## Filtering Events

Once you've enabled incoming events from **Segment**, you can select specific Segment events that you want to ingest by clicking on the **Event Filtering** button.

![image](https://user-images.githubusercontent.com/1315028/150829446-149dc7c5-0025-451a-8fae-09760b4f0566.png)

You can now search for specific events and select or deselect the events that you want Statsig to ingest.  

![image](https://user-images.githubusercontent.com/1315028/150829346-e2f29d7e-bca3-4427-8d54-02e96f37951d.png)

Similarly, once you've enabled outbound events to **Segment**, you can select which categories of Statsig events you want to export. 

![image](https://user-images.githubusercontent.com/1315028/150853774-6112c939-d101-4e15-9f74-3d872e6ba6f3.png)





