---
title: Vercel Edge Config
---

## Overview
Statsig’s Vercel integration pushes Statsig Configs to Vercel's Edge Config, allowing you to bootstrap your Vercel projects quickly.

## Configuration
Go to the [Vercel Marketplace](https://vercel.com/integrations/statsig-edge-config) to install the Statsig app for Vercel. In the setup, you'll be able to map Statsig projects <-> Edge Configs, and Statsig will keep project configs synced with the specified Edge Config.

<img src="https://user-images.githubusercontent.com/87334575/205374493-08dfc561-2095-45f2-be10-bba1a1958bf9.png" width="474" height="400" />

After setting up the mapping, you'll be given an Edge Config Connection String, which should be saved to the EDGE_CONFIG environment variable in your Vercel project. You can read your Statsig configs from the Edge Config Item Key provided. See https://github.com/joe-statsig/vercel-integration for a sample project.

After setting up the configuration, you can go to Project Settings -> Integrations and click on the Vercel Card to go to an integration configuration page for the project.

<img src="https://user-images.githubusercontent.com/87334575/205373841-c347767e-db59-4763-8d9e-1f55b8970c2d.png" width="403" height="400" />

