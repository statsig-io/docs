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

<div style={{paddingBottom: "32px"}}></div>

---

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

You can then set which events you want forwarded to your webhook using the [Event Filtering](#event-filtering-dialog) dialog.

### Event Format

Events will be sent to your webhook in batches in a JSON format. The structure of a Statsig Event sent to your webhook will look like the following:

| Field           | Type   | Description                                                          |
| --------------- | ------ | -------------------------------------------------------------------- |
| eventName       | String | Name of the event provided                                           |
| user            | JSON   | [Statsig User Object](https://docs.statsig.com/client/concepts/user) |
| userID          | String | User ID provided                                                     |
| timestamp       | Number | Timestamp in MS of the event                                         |
| value           | String | Value of the event provided                                          |
| metadata        | JSON   | Custom Metadata provided                                             |
| statsigMetadata | JSON   | Metadata related to the logging of this event added by Statsig       |
| timeUUID        | String | UUID for the event                                                   |

#### Custom Event Formatting - logEvent

>

```json
{
  "eventName": "my_custom_event",
  "user": {
    "userID": "a_user",
    "email": "a.user@email.com"
  },
  "userID": "a_user",
  "timestamp": "1655231253265",
  "statsigMetadata": {
    ...
  },
  "value": "a_custom_value",
  "metadata": {
    "key_a": "value_a",
    "key_b": "123"
  },
  "timeUUID": "aad2a983-ec0f-11ec-917a-fb8cdaeda578"
}
```

#### Feature Gate Exposure Formatting - checkGate

>

```json
{
  "eventName": "statsig::gate_exposure",
  "user": { ... },
  "userID": "a_user",
  "timestamp": "1655231253265",
  "statsigMetadata": { ... },
  "value": "",
  "metadata": {
    "gate": "a_gate",
    "gateValue": "false",
    "ruleID": "default",
    "reason": "Network",
    "time": "1655231249644"
  },
  "timeUUID": "8d7c1040-ec11-11ec-g123-abe2c32fcf46"
}
```

#### Dynamic Config Exposure Formatting - getConfig

>

```json
{
  "eventName": "statsig::config_exposure",
  "user": { ... },
  "userID": "a_user",
  "timestamp": "1655231253265",
  "statsigMetadata": { ... },
  "value": "",
  "metadata": {
    "config": "a_config",
    "ruleID": "default",
    "reason": "Network",
    "time": "1655231249644"
  },
  "timeUUID": "af379f60-ec11-22ad-8e0a-05c3ee70bd0c"
}
```

#### Experiment Exposure Formatting - getExperiment

>

```json
{
  "eventName": "statsig::experiment_exposure",
  "user": { ... },
  "userID": "a_user",
  "timestamp": "1655232119734",
  "statsigMetadata": { ... },
  "value": "",
  "metadata": {
    "config": "an_experiment",
    "ruleID": "4SauZJcM1T7zNvh1igBjwE",
    "reason": "Network",
    "time": "1655231249644",
    "experimentGroupName": "Control"
  },
  "timeUUID": "af379f61-ab22-11ec-8e0a-05c3ee70bd0c"
}
```

#### Example Batch

>

```json
[
  {
    "eventName": "page_view",
    "user": {"userID": "user_1", "country": "US"},
    "userID": "user_1",
    "timestamp": 1644520566967,
    "value": "example_value",
    "metadata": {"page": "home_page"},
    "statsigMetadata": {},
    "timeUUID": "f4c414a0-8aa5-11ec-a8a3-0242ac120002"
  },
  {
    "eventName": "statsig::gate_exposure",
    "user": {"userID": "user_1", "country": "US"},
    "userID": "user_1",
    "timestamp": 1644520566968,
    "value": "",
    "metadata": {"gate": "test_gate", "gateValue": "true", "ruleID": "default"},
    "statsigMetadata": {},
    "timeUUID": "f4c414a0-8aa5-11ec-a8a3-0242ac120003"
  },
  {
    "eventName": "statsig::experiment_exposure"
    "user": {"userID": "user_1", "country": "US"},
    "userID": "user_1",
    "timestamp": 1644520566969,
    "value": "",
    "metadata": {
       "config": "an_experiment", "ruleID": "4SauZJcM1T7zNvh1igBjwE", "reason": "Network", "time": "1655231249644", "experimentGroupName": "Control"
    },
    "statsigMetadata": {},
    "timeUUID": "f4c414a0-8aa5-11ec-a8a3-0242ac120004"
  }
]
```

<a name="event-filtering-dialog" ></a>

<div style={{paddingBottom: "32px"}}></div>

### Filtering Events

Once you've enabled outbound events to your webhook, you can select which categories of Statsig events you want to export by clicking on the **Event Filtering** button and checking the appropriate boxes as shown below.

![event-filter-button](https://user-images.githubusercontent.com/95646168/162329973-6f229186-1126-4824-9e29-1ff029f6553e.png)

![event-filter-dialog](https://user-images.githubusercontent.com/95646168/162329983-169703fc-c838-40a2-81dc-dd3c83886d00.png)
