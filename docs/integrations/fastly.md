---
title: Fastly
---

## Overview

Statsig’s Fastly integration pushes Statsig Configs to Fastly Config Stores, allowing you to bootstrap your Fastly projects quickly.

## Configuration

Navigate to the Fastly integration in Statsig's Console under **Project Settings** -> **Integrations**.

![image](https://github-production-user-asset-6210df.s3.amazonaws.com/135646288/245945801-6376166b-0239-437f-ad25-a0a43468bcb7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T221504Z&X-Amz-Expires=300&X-Amz-Signature=cfb61dd13bf934f9bc988eb46a93866c863027656be585ac6f1881570e50d969&X-Amz-SignedHeaders=host&actor_id=135646288&key_id=0&repo_id=318704090)

We're looking for the Fastly API Token and Fastly Config Store ID

- Fastly API Key - Can be found in Fastly portal under **Account** -> **API Tokens**. We need a token with global access.
- Config Store ID - You can create a Config Store or view your existing Config Stores using the Fastly [API](https://developer.fastly.com/reference/api/services/resources/config-store/) or [CLI](https://developer.fastly.com/reference/cli/config-store/).

After setting up the integration, implement the [Statsig Fastly Data Adapter](https://www.npmjs.com/package/statsig-node-fastly) into your worker.

## Known Limitations

Fastly Config Store has maximum size limits that may prevent Statsig from pushing configs into Fastly. See [here](https://docs.fastly.com/products/edge-data-storage) for the latest Config Store limits.

Statsig ID Lists are not currently synced into Fastly.
