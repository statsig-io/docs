---
title: Data Privacy for Mobile
slug: /compliance/data_privacy_for_mobile
keywords:
  - owner:tore
last_update:
  date: 2025-05-21
---

# Data Privacy for Mobile

Learn about Statsig's frequently asked questions regarding data privacy for mobile apps.

## General

### What data does Statsig collect from users of my app?
Statsig collects only the data that you configure to be sent to Statsig. This is typically the occurrence of feature flag evaluations (Feature Gates), experiment exposures, and custom events you log with the SDK.

### Does that data include any personally identifiable information (PII)?
By default, Statsig uses randomly generated IDs as described below. You can also augment data sent to Statsig with additional context and meta data, including user names, email addresses, or custom attributes. This data, alone or in combination with other data, may constitute PII if it identifies, directly or indirectly, an individual.

### Does Statsig use the device ID to identify a user?
No. Statsig on Mobile doesn't use device ID such as Secure.ANDROID_ID and advertisingIdentifier on iOS. Instead, it uses a StableID which is randomly generated per device, per app, and per installation, and therefore can't be used to identify a single device across application installations. When an application is reinstalled, a new StableID is generated. Since these IDs are solely used to provide approximate statistical information as part of the application monitoring service, it serves that purpose. It's required, for example, for Crash Free Session and User Rates, as well as to indicate the impact of issues based on number of events vs affected users.

### What does Statsig do with the data it collects?
Statsig processes the data you send to it to provide our feature flag management, experimentation, and analytics services to you.

## Apple App Store

### Do I need to disclose the use of Statsig in App Store Connect on the Apple App Store?
Yes, Statsig is a third-party partner whose code (SDKs) you integrate in your app that collects data from users of your app.

### What do I need to disclose to Apple?
You would need to disclose all types of data you are collecting through your app, including data you are sending to Statsig. This could include "Contact Info" or "Identifiers" if you provide those in the StatsigUser object, but don't forget to include any other categories of data that you are collecting or have configured the SDKs to send to Statsig.

### How does Statsig use my data?
The standard data use cases for Statsig would be "Analytics" and "App Functionality", but you would also need to disclose to Apple any other ways in which you or your app use data you are collecting.

### Does Statsig use my data to track users?
Statsig does not use your data to track users. However, if you or your other third-party partners are tracking users, you would still need to disclose this to Apple.

### Does Statsig use the Advertising Identifier (IDFA)?
No. Statsig doesn't require IDFA.

## Google Play

### Does Statsig collect any PII from children?
If your app is targeted to children and you configure Statsig to collect PII, then Statsig would collect the elements that you've designated. You would remain responsible for obtaining any appropriate parental consents with respect to the PII you collect from your users and subsequently send to Statsig. You would also remain responsible for declaring your app's target age group to Google Play.

### Do Statsig SDKs cause my app to contain ads?
No. Statsig does not cause your app to contain any ads.

### What do I need to disclose to Google Play?
You would need to disclose and/or include in your app privacy policy all types of data you are collecting through your app, including data you are sending to Statsig.

## Privacy Controls

### What device and user metadata does Statsig automatically collect?

The Statsig SDKs automatically collect the following metadata for targeting and analytics purposes:

**iOS SDK collects:**
- appIdentifier: Your app's bundle identifier
- appVersion: Your app's version
- deviceModel: The device model (e.g., iPhone14,3)
- deviceOS: The operating system (iOS)
- language: The user's preferred language
- locale: The user's locale identifier
- sdkType: The type of SDK (ios-client)
- sdkVersion: The version of the Statsig SDK
- sessionID: A randomly generated UUID for the current session
- stableID: A persistent device identifier (see below)
- systemVersion: The iOS version
- systemName: The system name (iOS)

**Android SDK collects:**
- appIdentifier: Your app's package name
- appVersion: Your app's version name
- deviceModel: The device model (e.g., Pixel 7)
- deviceOS: The operating system (Android)
- locale: The user's locale
- language: The user's language
- sdkType: The type of SDK (android-client)
- sdkVersion: The version of the Statsig SDK
- sessionID: A randomly generated UUID for the current session
- stableID: A persistent device identifier (see below)
- systemVersion: The Android API level
- systemName: The system name (Android)

### How can I limit the metadata collected by Statsig?

Both iOS and Android SDKs provide the `optOutNonSdkMetadata` option to limit the collection of device-specific information:

**iOS SDK:**
```swift
let options = StatsigOptions()
options.optOutNonSdkMetadata = true
Statsig.start(sdkKey: "client-sdk-key", options: options)
```

**Android SDK:**
```kotlin
val options = StatsigOptions(optOutNonSdkMetadata = true)
```

When `optOutNonSdkMetadata` is enabled, only the following core SDK metadata is included:
- sdkType: The type of SDK
- sdkVersion: The version of the Statsig SDK
- sessionID: A randomly generated UUID for the current session
- stableID: A persistent device identifier

All device-specific information (appIdentifier, appVersion, deviceModel, deviceOS, locale, language, systemVersion, systemName) is excluded from logs and targeting.

### How does StableID work?

The StableID is a persistent identifier that Statsig uses to provide consistent user experiences and analytics:

**iOS Implementation:**
- The StableID is stored in UserDefaults with the key "com.Statsig.InternalStore.stableIDKey"
- When first generated, it's created as a random UUID
- It persists across app launches but is regenerated when the app is reinstalled
- It can be overridden via the StatsigOptions.overrideStableID parameter

**Android Implementation:**
- The StableID is stored in SharedPreferences
- When first generated, it's created as a random UUID
- It persists across app launches but is regenerated when the app is reinstalled
- It can be overridden via the StatsigOptions.overrideStableID parameter

The StableID is not shared across different apps or websites and cannot be used to track users across different applications or platforms.

### How can I prevent sending sensitive user data to Statsig?

Use the `privateAttributes` field for sensitive data that should be used for targeting but not logged:

**iOS SDK:**
```swift
let user = StatsigUser(
    userID: "user-123",
    email: nil, // Not included at top level to keep private
    privateAttributes: ["email": "user@example.com"] // Used for evaluation but not logged
)
```

**Android SDK:**
```kotlin
val user = StatsigUser("user-123")
user.privateAttributes = mapOf("email" to "user@example.com")
```

These attributes are sent to Statsig servers during initialization for feature flag and experiment evaluation, but are removed before sending any event logs to Statsig servers. This means the attributes can be used for targeting users with specific features or experiments, but won't appear in your analytics data.

For more comprehensive privacy controls, consider using [Client Bootstrapping](https://docs.statsig.com/client/concepts/initialize#bootstrapping-overview) to generate all assignments locally on your server, eliminating the need to send any user attributes from the client device to Statsig.
