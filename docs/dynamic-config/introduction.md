---
title: Dynamic Config
sidebar_label: Introduction
slug: /dynamic-config
---

## What is a Dynamic Config?

Dynamic config is a tool that replaces hard-coded values in your application with configuration parameters defined on the server. These configuration parameters can cover a wide range of properties in both your client-side and server-side code, such as button colors, feature toggles, or ranking configurations. This allows you to control the behavior of your application dynamically and in near real-time.

However, it's important to note that the configuration will not automatically update on its own. You will need to manually refresh the config by calling `getConfig` again to apply any updates in your code.

## When to Use a Dynamic Config

Dynamic config is especially useful when you want to make your server-side code the source of truth for application properties, allowing you to modify configurations without redeploying code. Many companies, like Spotify, leverage [Remote Configuration](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/) to dynamically update client or backend service properties.

### Examples of Use Cases:
- **Feature Toggles**: Dynamically enable or disable features without code changes.
- **A/B Testing**: Vary configurations across user segments to measure impact.
- **Real-Time Updates**: Instantly adjust app properties like UI elements or service thresholds.

## Next Steps

- To get started, follow the guide on creating your [first dynamic config](/guides/first-dynamic-config).
- For a deeper dive into how you can work with dynamic config, refer to the detailed tutorial on [working with dynamic config](/dynamic-config/working-with).

---
