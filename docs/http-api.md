---
title: HTTP API
keywords:
  - owner:brock
last_update:
  date: 2024-10-03
---

> **⚠️ Important:** While this HTTP API is available for direct use, we strongly recommend using one of our official SDKs for your programming language whenever possible. SDKs offer better performance, automatic error handling, and type safety. They also provide a more idiomatic integration with your codebase. Only use this HTTP API directly if there isn't an SDK available for your language or if you have a specific use case that requires direct API access.

Before you can start calling the server APIs, you need to take care of the following steps:

1. [Create a free account on statsig.com](#step1)
2. [Get an API key from the admin console](#step2)
3. [Issue API requests](#step3)

---

### Step 1 - Create a free account on the [Statsig sign-up page](https://console.statsig.com/sign_up)

An account will let you use the Statsig Console, where you can manage all of your **Feature Gates**, **Dynamic Configs**, and **Experiments**. Note that you will also be able to invite others to collaborate on your Statsig Projects, so they can interact with your gates and configs.

---

### Step 2 - Get an API key from the [Statsig Console](https://console.statsig.com/)

An API key is required in every API request. There are two types of API keys you can use with the HTTP API:
- **Server-side secret Key**: Used only from secure servers and should never be exposed in client-side code.
- **Client-SDK Key**: Safe to embed in mobile apps and front-end web apps.

💡 **Tip:** If you're working with server-side logic or sensitive data, use the **Server-side secret Key**. If you’re in doubt or working with public-facing code, use the **Client-SDK Key**.

---

### Step 3 - Issue API request

Our API is built on top of HTTPS, and you can authenticate via the `statsig-api-key` header. All API requests use the `POST` method, and parameters are set by passing a JSON object in the request body.

💡 **Why `POST`?** Even for fetching data, we use `POST` to ensure secure and flexible transmission of user-specific data (e.g., configurations or experiment results).

Statsig automatically logs **exposure events** whenever you call the APIs. These exposure events help attribute downstream events to experiments or feature gates, which are used to calculate metrics like analytics lift.

---

### Log an Event

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --header "STATSIG-CLIENT-TIME: <local_time>" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42" }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

> **NOTE:** `STATSIG-CLIENT-TIME` is required to normalize the timestamp for events against server time. Without it, you may see inconsistent timestamps for client SDKs with varying client clocks. Here’s [an example](https://github.com/statsig-io/cpp-client-sdk/blob/a62df973388a56669de2a05f0630a65570a775bd/src/statsig/internal/network_service.hpp#L148) from one of our SDKs.

#### Event Schema

```ts
// json
{
  events: [StatsigEvent];
}

// StatsigEvent - object
{
  eventName: string;
  value: number | string;
  time: string; // unix timestamp
  user: StatsigUser;
  metadata: Record<string, string>;
}

// StatsigUser - object
{
  userID: string; // Required
  email?: string; // Optional user email
  ip?: string; // Optional user IP address
  userAgent?: string; // Optional user agent string for device info
  country?: string; // Optional country code for location-based targeting
  locale?: string; // Optional language/locale info
  appVersion?: string; // Optional app version
  custom?: Record<string, string | number | boolean | Array<string> | undefined>; // Optional custom user attributes
  privateAttributes?: Record<string, string | number | boolean | Array<string> | undefined>; // Optional private user attributes
  customIDs?: Record<string, string>; // Optional custom identifiers
  statsigEnvironment?: { tier: string }; // Defines the environment (dev, staging, production)
};
```

Response:
```json
{"success": true}, status 202
```

---

### Log an Event with Custom Environment

Useful when you operate in multiple environments like dev, staging, and production.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --header "STATSIG-CLIENT-TIME: <local_time>" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42", "statsigEnvironment": {"tier": "staging"} }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

Response:
```json
{"success": true}
```

---

### Check a Feature Gate

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "gateName": "<YOUR-GATE-NAME>"}' \
  "https://api.statsig.com/v1/check_gate"
```

---

### Check Multiple Feature Gates

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "gateNames": ["<YOUR-GATE-NAME-1>", "<YOUR-GATE-NAME-2>"]}' \
  "https://api.statsig.com/v1/check_gate"
```

Response:
```json
[
  {"name":"YOUR-GATE-NAME-1","value":false,"rule_id":"123","group_name":"group123"},
  {"name":"YOUR-GATE-NAME-2","value":false,"rule_id":"123","group_name":"group123"}
]
```

---

### Get a Dynamic Config Value

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "configName":"<YOUR-CONFIG-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

Response:
```json
{"name":"YOUR-CONFIG-NAME","value":{"a":1,"b":2},"group":"123","rule_id":"123","group_name":"group123"}
```

---

### Fetch Experiment Config

Getting an experiment config is similar to fetching a dynamic configuration. The system will automatically log the right exposure based on the name of the config.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "configName":"<YOUR-EXPERIMENT-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

Response:
```json
{"name":"YOUR-EXPERIMENT-NAME","value":{"color":"blue","shape":"circle"},"group":"123","rule_id":"123","group_name":"group123"}
```

---

### Fetch Layer Value

The system will automatically log the right exposure based on the name of the config.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "layerName":"<YOUR-LAYER-NAME>"}' \
  "https://statsigapi.net/v1/get_layer"
```

Response:
```json
{"name":"YOUR-LAYER-NAME","value":{"color":"blue","shape":"circle"},"ruleID":"2OZdhuDfq3w1UIHovUFRBM", "allocatedExperimentName": "a_experiment"}
```

---

### Log an Exposure Event

You can log one or more exposure events with this API. Exposure events help Statsig track what users are exposed to during experiments or feature gate interactions, helping calculate downstream effects and performance.

#### Log Experiment Exposure

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "experimentName": "analytics_only_experiment", "group": "Daily Deals"}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

#### Log Feature Gate Exposure

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "gateName": "saleBanner", "group": "Controls Access", "passes": true}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

---

### Log Secondary Exposures

Secondary exposures are logged alongside other exposure events. They typically represent holdouts or targeting gates.

```bash
curl \
 

 --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{
  "exposures": [
    {
      "user": {
        "userID": "user_id_12345"
      },
      "gateName": "saleBanner",
      "group": "Controls Access",
      "passes": true,
      "secondaryExposures": [
        {
          "gate": "test_holdout",
          "gateValue": "true",
          "ruleID": "3CQWjvi4HXcHsGIuuffKoe:10.00:2"
        }
      ]
    }
  ]
}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

---
