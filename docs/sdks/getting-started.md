---
title: Getting Started with Statsig's SDKs
sidebar_label: Getting Started
slug: /sdks/getting-started
---

Statsig offers a wide range of SDKs, supporting over **30 platforms** to help you integrate experimentation, feature flagging, and logging functionality directly into your product, whether it’s a web, mobile, or server-side application.

Statsig’s SDKs enable two core functions:

1. **Targeting & Assignment**: Dynamically assign users to experiment variants or control feature rollouts based on their attributes. You can target users by any **user or environment-level attribute** that you log, such as location, device type, or user behavior.
  
2. **Logging Events**: Log events for user actions or system behaviors to analyze feature performance or experiment outcomes. These events are used to compute metrics, which are accessible through the **Statsig Console** for in-depth analysis.

For web platforms, such as JavaScript and React, Statsig also supports **[autocaptured events for web analytics](/webanalytics/overview)** and **[session replay](/session-replay/overview)** to give you insights into user behavior without manual event tracking.

To learn more about the differences between **client-side** and **server-side** SDKs, you can refer to our [Client vs Server SDK Overview](/sdks/client-vs-server).

---

## Client SDKs

Our client-side SDKs are used for building user-facing applications, including mobile, web, and other client environments. Select the SDK that fits your platform from the list below:

- [JavaScript](/client/javascript-sdk)
- [React](/client/javascript-sdk/react)
- [React Native](/client/javascript-sdk/react-native)
- [Expo](/client/javascript-sdk/expo)
- [iOS](/client/iosClientSDK)
- [Android](/client/androidClientSDK)
- [.NET](/client/dotnetSDK)
- [Unity](/client/unitySDK)
- [Roku](/client/rokuSDK)
- [C++](/client/cpp-client-sdk)
- [Dart/Flutter](/client/dartSDK)

---

## Server SDKs

Server-side SDKs are used for backend processes and environments, enabling experiments and feature flagging in server applications. These SDKs ensure that even when the user isn’t directly interacting with the app, you can still control features and log backend events. Here are the supported server-side SDKs:

- [Node.js](/server/nodejsServerSDK)
- [Java](/server/javaSdk)
- [Python](/server/pythonSDK)
- [Go](/server/golangSDK)
- [Ruby](/server/rubySDK)
- [.NET](/server/dotnetSDK)
- [PHP](/server/phpSDK)
- [C++](/server/cppSDK)
- [Rust](/server/rustSDK)


If you have any questions or need assistance with SDK installation, feel free to reach out to us via our [Slack Community](https://statsig.com/slack).

---
