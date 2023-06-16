---
title: Fastly
---

## Overview

Statsig’s Fastly integration pushes Statsig Configs to Fastly Config Stores, allowing you to bootstrap your Fastly projects quickly.

## Configuration

Navigate to the Fastly integration in Statsig's Console under **Project Settings** -> **Integrations**.

<img width="841" alt="Screen Shot 2023-06-16 at 4 01 43 PM" src="https://github.com/statsig-io/docs/assets/135646288/8f013e0e-c075-4a92-a473-197983a056d6">


We're looking for the Fastly API Token and Fastly Config Store ID

- Fastly API Key - Can be found in Fastly portal under **Account** -> **API Tokens**. We need an automation token with Engineer Roles and Global access.
- Config Store ID - You can create a Config Store or view your existing Config Stores using the Fastly [API](https://developer.fastly.com/reference/api/services/resources/config-store/) or [CLI](https://developer.fastly.com/reference/cli/config-store/).

After setting up the integration, implement the [Statsig Fastly Data Adapter](https://www.npmjs.com/package/statsig-node-fastly) into your worker.

## Known Limitations

Fastly Config Store has maximum size limits that may prevent Statsig from pushing configs into Fastly. See [here](https://docs.fastly.com/products/edge-data-storage) for the latest Config Store limits.

Statsig ID Lists are not currently synced into Fastly.
