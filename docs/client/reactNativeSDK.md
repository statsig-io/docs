---
title: React Native SDK
---

Statsig client side SDK for applications in React Native not using Expo. If you are using Expo, check out our [Expo SDK](./reactNativeExpoSDK). This SDK is based on our [JavaScript client SDK](https://github.com/statsig-io/js-client).

## Installation

You can install the SDK via npm or yarn.

**via npm:**

```shell
$ npm i --save statsig-react-native
$ npx pod-install // or pod install, in your /ios folder
```

**via yarn:**

```shell
$ yarn add statsig-react-native
$ npx pod-install // or pod install, in your /ios folder
```

## Usage
Because our React Native SDK is based on our [JavaScript client SDK](./jsClientSDK), you can use them exactly the same way. Check out the [usage guide](./jsClientSDK#initialize) to learn about how to initialize Statsig and use Feature Gates or Dynamic Configs.
