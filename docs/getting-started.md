---
title: Getting Started
slug: /
---

Statsig helps you ship code faster on mobile, web and server side. Iterative
data-driven development is made possible by integrating one of our SDKs.

Each of our technical integration guides assumes some knowledge of the core statsig product: Feature Gates, Dynamic Configs, and Pulse.  To learn more about each of those before learning how to integrate them with your client or server, check out:

- [Overview](/console/overview)
- [Feature Gates](/console/featureGates)
- [Dynamic Config](/console/dynamicConfig)
- [Pulse](/console/pulse)

If you're ready to dive right into our SDK integration guides, read on.

For single-user, client-side applications, we have:

- [Javascript client SDK](/client/jsClientSDK)
- [React Native SDK](/client/reactNativeSDK)
- [React Native Expo SDK](/client/reactNativeExpoSDK)
- [Swift client SDK](/client/swiftClientSDK)
- [Objective-C client SDK](/client/objcClientSDK)
- [Android SDK](/client/androidClientSDK)

For multi-user, server-side applications:

- [Node.js server SDK](/server/nodejsServerSDK)

We also provide a RESTful API. Our API is a great choice if an SDK isn't
available for your environment yet, as you can use it in any type of
application:

- [RESTful API](/restful-api)

## Account sign up and API key {#account-sign-up-and-api-key}

![Statsig console](./assets/feature_gates.png)

Regardless of the SDK you pick, you will need to [create a free Statsig
account](https://console.statsig.com/sign_up) or be invited to join an existing
project. This will give you access to the Statsig console, where you can
generate an API key.

To get started, we recommend taking a quick tour around the console, and setting
up a Gate or Dynamic Config to use when you start integrating with an SDK. Our
SDKs function as a bridge to your Statsig console -- once you have integrated an
SDK into your application, you can update Feature Gate conditions or Dynamic
Config values directly in the console, with your application responding
immediately to the new values!

## FAQ {#faq}

#### I don't see my language listed, can I still use Statsig? {#i-dont-see-my-language-listed-can-i-still-use-statsig}

We just released our beta, which includes a few SDKs, as well as an HTTPS API.
If neither of these fit your needs, let us know! Email tore [at] statsig [dot]
com. We're working hard to bring the power of Statsig to your client or server,
and Android/React Native SDKs are next.

#### I want to run an A/B test, can I use Statsig for that? {#i-want-to-run-an-ab-test-can-i-use-statsig-for-that}

You can run A/B tests by opening up partial exposures on your Feature Gates and
Mobile Configs. These allow you to test the effect of a new feature. However in
order to run a proper A/B test, you will need to create the right sample size
buckets and those features are coming soon!
