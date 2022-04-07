---
title: Event Webhook
---

## Incoming

The Statsig Event Webhook allows you to log event data to Statsig from third party apps or other external sources to provide additional insights to your Statsig experiments and metrics.

Before using the Webhook, you will need to obtain your Projects' [server secret key](/#account-sign-up-and-api-key). An example call to the Statsig Event Webhook should look like the following:

```bash title="HTTP"
POST https://api.statsig.com/v1/webhooks/event_webhook
```

```bash title="Headers"
Content-Type: application/json
Accept: */*
STATSIG-API-KEY: {STATSIG_SERVER_SECRET}
```

```bash title="JSON Body"
{
  "user": {
    "userID": {USER_ID},
    ...
  },
  "event": {EVENT_NAME},
  "value": {VALUE},
  "metadata": {
    "example_field_1": {EXAMPLE_VALUE_1},
    "example_field_2": {EXAMPLE_VALUE_2},
    ...
  },
  timestamp: {TIMESTAMP}
}
```

## Outgoing

<div style={{display: "flex", justifyContent: "center", marginBottom: "16px"}} >
  <img src="https://user-images.githubusercontent.com/95646168/162286552-c257a736-4050-4d0a-8223-67097c731c0b.png"/>
</div>

If you are using a service that we don't have an official integration for, you can always use our Generic Webhook integration.

This integration just sends raw events to the provided webhook url.

### Setup

In your Project Settings, under the Integrations tab. Enable the Generic Webhook integration.

In the dialog that appears, enter the url of you destination webhook and then hit Enable to save the url and enable this integration.

![integration-dialog](https://user-images.githubusercontent.com/95646168/162327234-c9a683af-3c36-4da9-a66d-d16bf0ad09bc.png)

You can then set which events you want forwarded to your webhook using the Event Fitlering dialog.

### Payload Format

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
