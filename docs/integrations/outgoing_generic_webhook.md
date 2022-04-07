---
title: Generic Webhook - Outgoing
---

<div style={{display: "flex", justifyContent: "center", marginBottom: "16px"}} >
  <img src="https://user-images.githubusercontent.com/95646168/162286552-c257a736-4050-4d0a-8223-67097c731c0b.png"/>
</div>

If you are using a service that we don't have an official integraiton for, you can always use our Generic Webhook integration.

This integration just sends raw events to the provided webhook url.

## Setup

In your Project Settings, under the Integrations tab. Enable the Generic Webhook integration.

In the dialog that appears, enter the url of you destination webhook and then hit Enable to save the url and enable this integration.

![integration-dialog](https://user-images.githubusercontent.com/95646168/162288664-a366293d-f8c3-4053-879d-19745c7c4fc4.png)

## Payload Format

The payload that we send is an array of Event objects.

```json
{
  "data": [
    {
      "userID": "123",
      "user": {
        "email": "foo@bar.com"
      },
      "timeUUID": "a",
      "timestamp": "123",
      "eventName": "foo-event",
      "metadata": {
        "gate": "gate_no_rule"
      },
      "value": "false",
      "statsigMetadata": {
        "sdkVersion": "1.0.0",
        "sdkType": "an-sdk"
      }
    }
    // •••
  ]
}
```
