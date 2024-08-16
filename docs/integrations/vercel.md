---
title: Vercel Edge Config
---

## Overview
By leveraging [Vercel Edge Functions](https://vercel.com/features/edge-functions), you can easily and performantly deliver personalized content to your website's visitors. These functions are deployed globally via [Vercel's Edge Network](https://vercel.com/docs/concepts/edge-network/overview) and allow you to move server-side logic to the Edge, giving your visitors faster access. With [NextJS](https://nextjs.org/) applications on [Vercel](https://vercel.com/), you can experiment at the edge using Statsig's feature flags and experimentation capabilities. The Statsig Vercel integration lets you easily bootstrap your Vercel projects by directly pushing Statsig Configs to Vercel's Edge Config.

## Configuration
Go to the [Vercel Marketplace](https://vercel.com/integrations/statsig) to install the Statsig app for Vercel. In the setup, you'll be able to map Statsig projects to Edge Configs, and Statsig will keep project configs synced with the specified Edge Config.

<img src="https://user-images.githubusercontent.com/87334575/205374493-08dfc561-2095-45f2-be10-bba1a1958bf9.png" width="474" height="400" />

After setting up the mapping, you'll be given an Edge Config Connection String, which should be saved to the EDGE_CONFIG environment variable in your Vercel project. You can read your Statsig configs from the Edge Config Item Key provided. See [here](https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig) for a sample project.

After setting up the configuration, you can go to Project Settings -> Integrations and click on the Vercel Card to go to an integration configuration page for the project.

<img src="https://user-images.githubusercontent.com/87334575/205373841-c347767e-db59-4763-8d9e-1f55b8970c2d.png" width="403" height="400" />

## Known Limitations

Vercel Edge Config has maximum size limits that may prevent Statsig from pushing configs into your Edge Config. See [here](https://vercel.com/docs/concepts/edge-network/edge-config/edge-config-limits) for the latest Vercel Edge Config limits.

Statsig ID Lists are not currently synced into the Edge Config.
