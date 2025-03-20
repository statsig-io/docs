---
title: Akamai Edge KV
keywords:
  - owner:brock
---

## Overview
Statsig’s Akamai Edge KV integration pushes Statsig Configs to Edge KV, providing low latency for gate and experiment evaluations directly in Akamai Edge KV. If you have the correct prerequisites - this should take ~60 minutes to get to the point where you are able to check experiments or gates on Akamai.

## Prerequisites
You must have these prerequisites:

1. An Akamai account with [EdgeWorkers added to your contract](https://techdocs.akamai.com/edgeworkers/docs/add-edgeworkers-to-contract) and a Statsig account
2. [The Akamai CLI](https://developer.akamai.com/getting-started/cli)

## How to use 
1. Create an [EdgeWorker ID](https://techdocs.akamai.com/edgeworkers/docs/create-an-edgeworker-id-1)
2. Add the [EdgeWorker Behavior](https://techdocs.akamai.com/edgeworkers/docs/add-the-edgeworker-behavior-1)
3. Install the [Akamai CLI](https://developer.akamai.com/getting-started/cli)
4. Install the [Edgeworkers CLI](https://techdocs.akamai.com/edgeworkers/docs/akamai-cli#edgeworkers-cli)
5. Create a Statsig API Key and [configure it on the Akamai](https://techdocs.akamai.com/developer/docs/set-up-authentication-credentials)
6. Clone the [Statsig Akamai Edge KV](https://github.com/statsig-io/akamai-statsig-example?tab=readme-ov-file#getting-started) repo (or if you already have an Edge KV package, apply these changes to it)
7. Follow instructions in the repo

## Additional Links
[Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
[Statsig Akamai Edge KV Repo](https://github.com/statsig-io/akamai-statsig-example?tab=readme-ov-file#getting-started)
