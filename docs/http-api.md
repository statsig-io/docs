---
title: HTTP API
---

Before making any API calls, follow these steps:

1. [Create a free account on statsig.com](#create-an-account)
2. [Get an API key](#get-an-api-key)
3. [Issue API requests](#issue-api-requests)

---

### Step 1: Create an Account {#create-an-account}

Create a free account on [statsig.com](https://console.statsig.com/sign_up) to access the Statsig Console, where you can manage your **Feature Gates** and **Dynamic Configs**. You'll also be able to invite others to your Statsig Projects so they can interact with the configurations.

---

### Step 2: Get an API Key {#get-an-api-key}

You’ll need an API key for every API request. There are two types of keys:

- **Server-Side Secret Key**: For secure server use. Do not expose this key in client-side code.
- **Client-SDK Key**: Can be embedded in mobile apps or front-end web applications.

_If you're unsure, use the Client-SDK key._

---

### Step 3: Issue API Requests {#issue-api-requests}

Our APIs are built on top of HTTPS, and you can authenticate via the `statsig-api-key` header. All API requests use the `POST` method, and parameters should be sent as a JSON object.

#### Log an Event {#log-an-event}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --header "STATSIG-CLIENT-TIME: <local_time>" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42" }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

> **Note**: `STATSIG-CLIENT-TIME` normalizes the timestamp for events against server time. If not set, timestamps may vary, especially for client SDKs with varying clocks. See an [example here](https://github.com/statsig-io/cpp-client-sdk/blob/a62df973388a56669de2a05f0630a65570a775bd/src/statsig/internal/network_service.hpp#L148) for how this is done in one of our SDKs.

**Schema**:
```ts
{
  events: [StatsigEvent];
}

interface StatsigEvent {
  eventName: string;
  value?: number | string;
  time: string; // Unix timestamp
  user: StatsigUser;
  metadata?: Record<string, string>;
}

interface StatsigUser {
  userID: string;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  appVersion?: string;
  custom?: Record<string, string | number | boolean | Array<string>>;
  privateAttributes?: Record<string, string | number | boolean | Array<string>>;
  customIDs?: Record<string, string>;
  statsigEnvironment: {
    tier: string;
  };
}
```

**Response**:
```json
{
  "success": true
}
```

---

#### Log an Event with a Custom Environment {#log-an-event-with-environment}

This is useful when operating in multiple environments like dev, staging, and production.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --header "STATSIG-CLIENT-TIME: <local_time>" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42", "statsigEnvironment": {"tier": "staging"} }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

**Response**:
```json
{
  "success": true
}
```

---

#### Check a Feature Gate {#check-a-feature-gate}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "gateName": "<YOUR-GATE-NAME>"}' \
  "https://api.statsig.com/v1/check_gate"
```

**Response**:
```json
{
  "name": "YOUR-GATE-NAME",
  "value": false,
  "rule_id": "123",
  "group_name": "group123"
}
```

---

#### Check Multiple Feature Gates {#check-multiple-feature-gates}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "gateNames": ["<YOUR-GATE-NAME-1>", "<YOUR-GATE-NAME-2>"]}' \
  "https://api.statsig.com/v1/check_gate"
```

**Response**:
```json
[
  {
    "name": "YOUR-GATE-NAME-1",
    "value": false,
    "rule_id": "123",
    "group_name": "group123"
  },
  {
    "name": "YOUR-GATE-NAME-2",
    "value": false,
    "rule_id": "123",
    "group_name": "group123"
  }
]
```

---

#### Get a Dynamic Config Value {#get-a-dynamic-config-value}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "configName": "<YOUR-CONFIG-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

**Response**:
```json
{
  "name": "YOUR-CONFIG-NAME",
  "value": { "a": 1, "b": 2 },
  "group": "123",
  "rule_id": "123",
  "group_name": "group123"
}
```

---

#### Fetch Experiment Config {#fetch-experiment-config}

Fetching an experiment config is similar to getting a dynamic config. The correct exposure is automatically logged based on the config name.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "configName": "<YOUR-EXPERIMENT-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

**Response**:
```json
{
  "name": "YOUR-EXPERIMENT-NAME",
  "value": { "color": "blue", "shape": "circle" },
  "group": "123",
  "rule_id": "123",
  "group_name": "group123"
}
```

---

#### Fetch Layer Value {#fetch-layer-config}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" }, "layerName": "<YOUR-LAYER-NAME>"}' \
  "https://statsigapi.net/v1/get_layer"
```

**Response**:
```json
{
  "name": "YOUR-LAYER-NAME",
  "value": { "color": "blue", "shape": "circle" },
  "ruleID": "2OZdhuDfq3w1UIHovUFRBM",
  "allocatedExperimentName": "a_experiment"
}
```

---

#### Log an Exposure Event {#log-exposure-event}

You can log exposure events for experiments, feature gates, or secondary exposures.

##### Experiments

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "experimentName": "analytics_only_experiment", "group": "Daily Deals"}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

##### Feature Gates

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
 

 --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "gateName": "saleBanner", "group": "Controls Access", "passes": true}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

##### Secondary Exposures

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{
  "exposures": [
    {
      "user": { "userID": "user_id_12345" },
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
