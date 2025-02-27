---
title: Dynamic Config
sidebar_label: Overview
slug: /dynamic-config
---

## What is a Dynamic Config?

Dynamic configs replace hard-coded values in your application with JSON defined on the server. Statsig users leverage Dynamic Configs to avoid hard-coding configuration values of any kind in their code - and change it dynamically near real-time. You can also *target* Dynamic Configs, providing different experiences based on user attributes. These configuration parameters can include any property across your client-side or server-side application code, from button colors to ranking configurations.

## When to Use a Dynamic Config

Many technology companies use tools such as dynamic config to make their server-side code the source of truth for configurable application properties. For example, Spotify uses [Remote Configuration](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/) to dynamically update properties of their clients or backend services.

### Examples of Use Cases:
- **Feature Toggles**: Dynamically enable or disable features without code changes.
- **A/B Testing**: Vary configurations across user segments to measure impact.
- **Real-Time Updates**: Instantly adjust app properties like UI elements or service thresholds.

## Next Steps

- To get started, follow the guide on creating your [first dynamic config](/guides/first-dynamic-config).
- For a deeper dive into how you can work with dynamic config, refer to the detailed tutorial on [working with dynamic config](/dynamic-config/working-with).

---
