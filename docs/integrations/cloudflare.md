---
title: Cloudflare KV
---

## Overview
Statsig’s Cloudflare integration pushes Statsig Configs to Cloudflare KV, allowing you to bootstrap your Cloudflare projects quickly.

## Configuration
Navigate to the Cloudflare integration in Statsig's Console under **Project Settings** -> **Integrations**. 

![image](https://user-images.githubusercontent.com/87334575/228985478-d242b1b7-c77c-4b85-9246-8ccf2ecaad19.png)

We're looking for the Cloudflare Account ID, KV Namespace ID and Cloudflare API Key. 

* Cloudflare Account ID - Can be found in Cloudflare portal under **Account Home** -> **Workers**, on the right hand side
* KV Namespace ID - Can be found in Cloudflare portal under **Account Home** -> **Workers** -> **KV**, and can be copied in the table view
* Cloudflare API Token - Can be found in Cloudflare portal under **Account Home** -> **Profile** -> **API Tokens**. We need a token with Account.Workers KV Storage Edit Permissions.

After setting up the integration, implement the [Statsig Cloudflare KV Data Adapter](https://www.npmjs.com/package/statsig-node-cloudflare-kv) into your worker. 

## Known Limitations

Cloudflare KV has maximum size limits that may prevent Statsig from pushing configs into your KV. See [here](https://developers.cloudflare.com/workers/platform/limits/#kv-limits) for the latest Cloudflare KV limits.

Statsig ID Lists are not currently synced into Cloudflare KVs.
