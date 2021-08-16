---
title: Event Webhook
---

The Statsig Event Webhook allows you to log event data to Statsig from third party apps or other external sources to provide additional insights to your Statsig experiments and metrics.

Before using the Webhook, you will need to obtain your Projects' [server secret key](https://docs.statsig.com/#account-sign-up-and-api-key). An example call to the Statsig Event Webhook should look like the following:

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

