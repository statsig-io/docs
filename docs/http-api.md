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
  --request POST \
  --data '{"events": [{"user": { "userID": "42" }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://events.statsigapi.net/v1/log_event"
```

Response:
`{"success":true}`

##### Log an event with custom environment {#log-an-event-with-environment}

Useful when you are operating in multiple environments like dev, staging, production.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
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
`{"name":"YOUR-GATE-NAME","value":false}`

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
`{"name":"YOUR-CONFIG-NAME","value":{"a":1,"b":2},"group":"default"}`

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
`{"name":"YOUR-EXPERIMENT-NAME","value":{"color":"blue","shape":"circle"},"group":"default"}`

##### Export Report {#export-report}

You can [export your Pulse data](https://docs.statsig.com/pulse/export) via the console or using the following API. In addition to the [`first_exposures`](https://docs.statsig.com/pulse#first-exposures-file-description) report type as shown below, you can also request a [`pulse_daily`](https://docs.statsig.com/pulse#pulse-summary-and-daily-file-description) or [`unit_metrics_daily`](https://docs.statsig.com/pulse#unit-metrics-file-description) report types.

Note this API requires a server-side secret key.

```bash
curl \
  --header "statsig-api-key: <YOUR-SERVER-SECRET-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"type": "first_exposures" }' \
  "https://api.statsig.com/v1/get_daily_report"
```

Response:
`{ date: {date in PST of data} url: {url to download CSV for the specified type} }`

#### Update ID List {#update-id-list}

You can dynamically modify users in your [ID List Segments](https://docs.statsig.com/segments/create-new) via the console or using the following API.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"idListName": <YOUR ID LIST NAME>, "usersToAdd": [<user_id_1>, <user_id_2>, ...], "usersToRemove": [<user_id_3>, <user_id_4>, ...] }' \
  "https://api.statsig.com/v1/update_id_list"
```

#### Log an exposure event {#log-exposure-event}

You can log one or more exposure events with this API. For each exposure object, the "group" parameter should match the "Group Name" in your experiment.

```bash
curl \
  --header "statsig-api-key: <YOUR-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"exposures": [{"user": {"userID": "user_id_12345"}, "experimentName": "analytics_only_experiment", "group": "Control"}]}' \
  "https://events.statsigapi.net/v1/log_custom_exposure"
```

Event inputs to this endpoint can have either of the two following forms:

```
// Experiment Exposure Events
// See https://docs.statsig.com/client/concepts/user for full list of user fields
user: object, // must have a userID or a customID to match with event data.
experimentName: string,
group: string,
time?: number | string, // unix timestamp, optional (request time used if not set)
```

```
// Gate Exposure Events
user: object, // must have a userID or a customID to match with event data.
gateName: string,
group: string,
passes: boolean,
time?: number | string, // unix timestamp, optional (request time used if not set)
```
