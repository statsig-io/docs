---
title: Dynamic Config
sidebar_label: Introduction
slug: /dynamic-config
---

## What is a Dynamic Config?

Dynamic config is a tool that replaces hard-coded values in your application with configuration parameters defined on the server. These configuration parameters can include any property across your client-side or server-side application code, from button colors to ranking configurations. This enables you to control the behavior of your application dynamically in near real-time. Note that you will still need to refresh the config (by calling `getConfig` again) to refresh the config in your code - it will not update dynamically without that.

## When to use a Dynamic Config

Many technology companies use tools such as dynamic config to make their server-side code the source of truth for configurable application properties. For example, Spotify uses [Remote Configuration](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/) to dynamically update properties of their clients or backend services.

To get started, see the Statsig guide to making your code more flexible with your [first dynamic config](/guides/first-dynamic-config).

To learn about all that you can do with dynamic config, see the Statsig tutorial on [working with dynamic config](/dynamic-config/working-with).
