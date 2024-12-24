---
title: SDK Overview
sidebar_label: SDK Overview
slug: /sdks/getting-started
---

Statsig provides a comprehensive set of SDKs to integrate experimentation, feature flagging, and logging into your applications. With support for over **30 platforms**, Statsig’s SDKs enable you to control feature rollouts and experiments seamlessly, whether you're building for **web**, **mobile**, or **server-side** environments.

---

## Why Use Statsig SDKs?

Statsig SDKs are designed to provide two key functionalities that help you make data-driven product decisions:

### 1. **Targeting & Assignment**
Effortlessly manage who sees new features and which users are assigned to experiment variants. You can target based on any **user attributes** (e.g., location, device type) or **environment-level attributes** you log. This lets you control the feature rollout experience and experiment assignments dynamically.

### 2. **Logging Events**
Automatically log user actions and system events for in-depth analysis. The event logs feed into Statsig’s platform to generate key **metrics** for your experiments and features, which can be analyzed in the **Statsig Console**.

For web-based platforms (e.g., JavaScript, React), Statsig also supports:
- **[Autocaptured Events for Web Analytics](/webanalytics/overview)**: Automatically track user interactions without manual instrumentation.
- **[Session Replay](/session-replay/overview)**: Capture detailed session recordings to better understand how users interact with your product.

---

## Choosing the Right SDK: Client vs. Server

Statsig offers both **client-side** and **server-side** SDKs, each suited to different use cases:

- **Client-Side SDKs**: Designed for user-facing applications where events are logged directly from the browser or mobile app. These SDKs work in real-time, providing instant feedback on user behavior.
  
- **Server-Side SDKs**: Ideal for backend services, allowing you to control experiments, feature flags, and log server-side events. Server-side SDKs offer more control, especially for use cases involving system-level actions or business logic.

For a detailed comparison, refer to the [Client vs Server SDK Overview](/sdks/client-vs-server).

Additionally, for frameworks like **Next.js** that bridge client and server-side logic, we offer specialized SDKs like the [Next.js SDK](/client/javascript-sdk/next-js) for seamless integration.

---

## Client-Side SDKs

Our client-side SDKs are designed for front-end applications, enabling instant event logging, feature gating, and user assignments. Whether you're building for mobile, web, or other client platforms, Statsig offers SDKs tailored for your needs:

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

## Server-Side SDKs

Server-side SDKs allow you to manage experiments and feature flags from your backend, providing more control and reliability. They’re especially useful for server-driven features, background processes, and system events:

- [Node.js](/server/nodejsServerSDK)
- [Java](/server/javaSdk)
- [Python](/server/pythonSDK)
- [Go](/server/golangSDK)
- [Ruby](/server/rubySDK)
- [.NET](/server/dotnetSDK)
- [PHP](/server/phpSDK)
- [C++](/server/cppSDK)
- [Rust](/server/rustSDK)

---

## Next Steps: Installing Your SDK

1. **Select Your SDK**: Choose the client or server SDK that fits your platform from the lists above.
2. **Follow the Installation Guide**: Each SDK has an installation guide that walks you through the setup, ensuring a smooth integration with your app.
3. **Start Experimenting**: Once integrated, you can begin setting up feature flags, running experiments, and logging events for analysis.

If you run into any questions or need help with installation, feel free to reach out via our [Slack Community](https://statsig.com/slack).

---
