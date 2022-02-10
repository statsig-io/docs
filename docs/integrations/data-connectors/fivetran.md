---
title: Fivetran
---

## Overview

Enabling the Fivetran integration for Statsig will allow Statsig to push events to your Fivetran account through a webhook. This allows you to forward Statsig data to any connectors available from Fivetran.

## Configuring Outbound Events

1. Follow the steps in the [Fivetran Webhook Setup Guide](https://fivetran.com/docs/events/webhooks/setup-guide) to create a new Webhook URL.
2. On the Statsig [Integrations](https://console.statsig.com/integrations) page, enable the Fivetran integration by pasting in the Fivetran Webhook URL and click **Confirm**.

## Event Format

Events will be sent to Fivetran in batches in a JSON format. Each batch consist as a row sent to Fivetran, where the `data` column is an array of Statsig Event. The structure of a Statsig Event sent to Fivetran will look like the following:

| Field           | Type   | Description                                                          |
| --------------- | ------ | -------------------------------------------------------------------- |
| eventName       | String | Name of the event provided                                           |
| user            | JSON   | [Statsig User Object](https://docs.statsig.com/client/concepts/user) |
| userID          | String | User ID provided                                                     |
| timestamp       | Number | Timestamp in MS of the event                                         |
| value           | String | Value of the event provided                                          |
| metadata        | JSON   | Custom Metadata provided                                             |
| statsigMetadata | JSON   | Metadata added by Statsig                                            |
| timeUUID        | String | UUID for the event                                                   |

### Feature Gate Exposure Format

For events representing an exposure for a [`Statsig Feature Gate`](https://docs.statsig.com/feature-gates), the event will be in the following format:

```
{
  eventName: "statsig::gate_exposure",
  statsigMetadata: {
    gate: <Name of the gate that was exposed>,
    gateValue: <True/False depending on if user passed the gate>,
    gateGroupName: <Name of the Rule the user was checked against>,
    ruleID: <Unique identifier for the Rule>
  }
}
```

#### Experiment Exposure Format

For events representing an exposure for a [`Statsig Experiment`](https://docs.statsig.com/experiments-plus), the event will be in the following format:

```
{
  eventName: "statsig::experiment_exposure",
  statsigMetadata: {
    config: <Name of the gate that was exposed>,
    experimentGroupName: <Name of the Group in the experiment the user was allocated to>,
    ruleID: <Unique identifier for the Group>
  }
}
```

#### Example Batch

```
[
  {
    eventName: "page_view"
    user: {userID: "user_1", country: "US"},
    userID: "user_1",
    timestamp: 1644520566967,
    value: "example_value",
    metadata: {page: "home_page"},
    statsigMetadata: {},
    timeUUID: "f4c414a0-8aa5-11ec-a8a3-0242ac120002"
  },
  {
    eventName: "statsig::gate_exposure"
    user: {userID: "user_1", country: "US"},
    userID: "user_1",
    timestamp: 1644520566968,
    value: "",
    metadata: {},
    statsigMetadata: {gate: "test_gate", gateValue: true, gateGroupName: "US Users", ruleID: "5T2Gg0bwizTh9heDKL1El7"},
    timeUUID: "f4c414a0-8aa5-11ec-a8a3-0242ac120003"
  },
  {
    eventName: "statsig::experiment_exposure"
    user: {userID: "user_1", country: "US"},
    userID: "user_1",
    timestamp: 1644520566969,
    value: "",
    metadata: {},
    statsigMetadata: {config: "test_experiment", experimentGroupName: "Control", ruleID: "5T2Gg0bwizTh9heUKL1El7"},
    timeUUID: "f4c414a0-8aa5-11ec-a8a3-0242ac120004"
  }
]
```

## Filtering Events

Once you've enabled outbound events to Fivetran, you can select which categories of Statsig events you want to export by click on the **Event Filtering** button and checking the appropriate boxes as shown below.

![image](https://user-images.githubusercontent.com/1315028/150854805-c70a1e01-5d3e-407f-9f2b-2eccafbe04a3.png)

![image](https://user-images.githubusercontent.com/1315028/150855038-fc6add6c-48ed-4063-8fdf-b210b43a3308.png)
