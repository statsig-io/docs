---
title: HTTP API
---

Before you can start calling the server APIs you need to take care of the following steps first:

1. [Create a free account on statsig.com](#step1)
2. Get an API key from the admin console
3. Issue API requests

<a name="step1"></a>

#### Step 1 - Create a free account on [statsig.com](https://console.statsig.com/sign_up) {#step-1---create-a-free-account-on-statsigcom}

An account will let you use the Statsig Console, where you can manage all of
your Feature Gates and Dynamic Configs. Note that you will be able to invite
others to your Statsig Projects, so they can also interact with your gates and
configs.

<a name="step2"></a>

#### Step 2 - Get an API key from [statsig.com](https://console.statsig.com/) {#step-2---get-an-api-key-from-statsigcom}

An API key is required in every API request. There are two different types of API keys:

- **Server-side secret Key** which should only be used from a secure server and never shipped on clients.
- **Client-SDK Key** which can be embedded inside mobile apps and front-end client web apps.

If you are in doubt, use the Client-SDK key.

<a name="step3"></a>

#### Step 3 - Issue API request {#step-3---issue-api-request}

Our API is built on top of HTTPS. You can authenticate via header
`statsig-api-key`. All of our APIs use method `POST`, and you can set parameters
by using a JSON object as the request data.

There are just a few primitives that you need to get going on your way. The APIs automatically log exposure whenever you call them and Statsig will use these exposure events to attribute downstream events to compute analytics lift.

##### Log an event {#log-an-event}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --header "STATSIG-CLIENT-TIME: <local_time>" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42" }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

> NOTE: STATSIG-CLIENT-TIME is required to normalize the timestamp for events against our server time. If you don't set this, you may see weird timestamps for client SDKs which can have extremely variable client clocks. Here is [an example](https://github.com/statsig-io/cpp-client-sdk/blob/a62df973388a56669de2a05f0630a65570a775bd/src/statsig/internal/network_service.hpp#L148) for how we do it in one of our SDKS.

*Schema*
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
  userID: string;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  appVersion?: string;
  custom?: Record<
    string,
    string | number | boolean | Array<string> | undefined
  >;
  privateAttributes?: Record<
    string,
    string | number | boolean | Array<string> | undefined
  >;
  customIDs?: Record<string, string>;
  statsigEnvironment: {
    tier: string
  };
};
```
Response:
`{"success":true}`, status `202`

##### Log an event with custom environment {#log-an-event-with-environment}

Useful when you are operating in multiple environments like dev, staging, production.

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
`{"success":true}`

##### Check a Feature Gate {#check-a-feature-gate}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" },"gateName":"<YOUR-GATE-NAME>"}' \
  "https://api.statsig.com/v1/check_gate"
```

Response:
`{"name":"YOUR-GATE-NAME","value":false,"rule_id":"123","group_name":"group123"}`

##### Get a Dynamic Config value {#get-a-dynamic-config-value}

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" },"configName":"<YOUR-CONFIG-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

Response:
`{"name":"YOUR-CONFIG-NAME","value":{"a":1,"b":2},"group":"123","rule_id":"123","group_name":"group123"}`

##### Fetch Experiment Config {#fetch-experiment-config}

Getting an experiment config is similar to fetching a dynamic configuration. The system will automatically log the right exposure based on the name of the config.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" },"configName":"<YOUR-EXPERIMENT-NAME>"}' \
  "https://api.statsig.com/v1/get_config"
```

Response:
`{"name":"YOUR-EXPERIMENT-NAME","value":{"color":"blue","shape":"circle"},"group":"123","rule_id":"123","group_name":"group123}`

##### Fetch Layer Value {#fetch-layer-config}

The system will automatically log the right exposure based on the name of the config.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "42" },"layerName":"<YOUR-LAYER-NAME>"}' \
  "https://statsigapi.net/v1/get_layer"
```

Response:
`{"name":"YOUR-LAYER-NAME","value":{"color":"blue","shape":"circle"},"ruleID":"2OZdhuDfq3w1UIHovUFRBM", "allocatedExperimentName": "a_experiment"}`

#### Log an exposure event {#log-exposure-event}
You can log one or more exposure events with this API. 

##### Experiments

```
// Experiment Exposure Events
// See https://docs.statsig.com/client/concepts/user for full list of user fields
user: object, // must have a userID or a customID to match with event data.
experimentName: string,
group: string,
ruleID: string,
time?: number | string, // unix timestamp, optional (request time used if not set)
```

For each exposure object, either the `"group"` or `"ruleID"` parameter must be provided. The `"group"` parameter should match the exact name of the group in your experiment's config.
[![Test group name](https://user-images.githubusercontent.com/2018204/234073412-92dde2b7-7a5d-442f-a539-0c9c1b426a5a.png)

_example experiment exposure_
```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "experimentName": "analytics_only_experiment", "group": "Daily Deals"}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

##### Gates

```
// Gate Exposure Events
user: object, // must have a userID or a customID to match with event data.
gateName: string,
group: string,
ruleID: string,
passes: boolean,
time?: number | string, // unix timestamp, optional (request time used if not set)
```

For each exposure object, either the `"group"` or `"ruleID"` parameter must be provided. The `"group"` should match the exact name of your Rule in your gate config.
![Gate Rule Name](https://user-images.githubusercontent.com/2018204/234073618-e5f1e3c0-9766-4bd3-b927-bad155bbea05.png)


_example gate exposure_
```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "gateName": "saleBanner", "group": "Controls Access", "passes": true}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

