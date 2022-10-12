---
title: Vercel Edge Config
---

## Overview
Statsig’s Vercel integration pushes Statsig Configs to Vercel's Edge Config, allowing you to bootstrap your Vercel projects quickly.

## Configuration
Get a [Server Secret Key from the statsig console](https://console.statsig.com/api_keys) and then go to the [Vercel Marketplace](https://vercel.com/integrations/statsig-edge-config) to install the Statsig app for Vercel.

![image](https://user-images.githubusercontent.com/87334575/195411328-b0dba9d6-0ed0-4a60-a609-684683bbc44f.png)

After inputing your server secret key, you'll be given an edge config URL to put in your VERCEL_EDGE_CONFIG environment variable.