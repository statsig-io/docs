---
title: Akamai Edge KV
keywords:
  - owner:brock
last_update:
  date: 2025-09-18
---

## Overview
Statsig’s Akamai Edge KV integration pushes Statsig Configs to Edge KV, providing low latency for gate and experiment evaluations directly in Akamai Edge KV. If you have the correct prerequisites - this should take ~60 minutes to get to the point where you are able to check experiments or gates on Akamai.

## Prerequisites
You must have these prerequisites:

1. An Akamai account with [EdgeWorkers added to your contract](https://techdocs.akamai.com/edgeworkers/docs/add-edgeworkers-to-contract) and a Statsig account
2. [The Akamai CLI](https://developer.akamai.com/getting-started/cli)

## Setup Akamai EdgeWorker
1. Create an [EdgeWorker ID](https://techdocs.akamai.com/edgeworkers/docs/create-an-edgeworker-id-1)
2. Add the [EdgeWorker Behavior](https://techdocs.akamai.com/edgeworkers/docs/add-the-edgeworker-behavior-1)
3. Install the [Akamai CLI](https://developer.akamai.com/getting-started/cli)
4. Install the [Edgeworkers CLI](https://techdocs.akamai.com/edgeworkers/docs/akamai-cli#edgeworkers-cli)
5. Generate [EdgeGrid credentials](https://techdocs.akamai.com/developer/docs/edgegrid)

## Configure Integration
First, enable the Akamai integration in the Statsig Console.

Navigate to [Project Settings -> Integrations](https://console.statsig.com/integrations), and then select Akamai

### Authentication
You will need to input the following EdgeGrid credentials from the previous section:

![Authentication](https://app.graphite.dev/user-attachments/assets/171a699c-2b78-435a-95c5-24b978738966.png)

### Configuration
Finalize the configuration by selecting a [namespace](https://techdocs.akamai.com/edgekv/docs/manage-access-to-edgekv) and [environment](https://techdocs.akamai.com/edgekv/docs/sandbox-support-edgekv).

There is also an option to filter the configs that are synced into your KV namespace by a [/sdk-keys/target-apps](Target App).  You may wish to enable this in the future as the size of your config payload grows.  For now, you can leave this unchecked.

![Configuration](https://app.graphite.dev/user-attachments/assets/a2d63315-ab58-496d-901b-10aa6790979f.png)

After filling this out, click **Enable**.

Within a minute, the Statsig backend should generate a config payload from your statsig project and push it into your KV namespace.  Under your KV namespace, navigate to **KV Pairs** - you should see an entry starting with the prefix `statsig-`.  The next part of that is your project ID.  Copy that to the clipboard - you'll need it later.

## Add Statsig SDK to Worker
1. Create a Statsig [server secret key](https://docs.statsig.com/sdk-keys/api-keys/#server-secret-keys) and [configure it on Akamai](https://techdocs.akamai.com/developer/docs/edgegrid#credentials-as-environment-variables)
2. Clone the [Statsig Akamai Edge KV](https://github.com/statsig-io/akamai-statsig-example?tab=readme-ov-file#getting-started) repo (or if you already have an Edge KV package, apply these changes to it)
3. Follow instructions in the repo

## Additional Links
[Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
[Statsig Akamai Edge KV Repo](https://github.com/statsig-io/akamai-statsig-example?tab=readme-ov-file#getting-started)
