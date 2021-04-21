---
title: Javascript Client SDK
---

:::info
These docs are for using our javascript SDK in a single-user, client side context. For server side javascript and multi-user contexts, try our [node js server sdk](server/nodejsServerSDK)
:::

The js-client-sdk and the accompanying docs are [open source and hosted on github](https://github.com/statsig-io/js-client-sdk/tree/main/docs).

## The Basics {#the-basics}

Get started in a few quick steps.

1. [Create a free account on statsig.com](#step1)
2. [Install the SDK](#step2)
3. [Initialize the SDK](#step3)
4. [Fetch Feature Gates or Dynamic Configs](#step4)

<a name="step1"></a>

#### Step 1 - Create a free account on [www.statsig.com](https://console.statsig.com/sign_up) {#step-1---create-a-free-account-on-wwwstatsigcom}

You could skip this for now, but you will need an SDK Key and some Feature Gates or Dynamic Configs to use with the SDK in just a minute.

<a name="step2"></a>

#### Step 2 - Install the SDK {#step-2---install-the-sdk}

You can install the statsig SDK via npm, yarn or jsdelivr.

**via npm:**

```shell
$ npm i --save statsig-js-client-sdk
```

**via yarn:**

```shell
$ yarn add statsig-js-client-sdk
```

**via jsdelivr:**

Statsig is available from [jsdelivr](http://www.jsdelivr.com/), an open source CDN. We use this installation method for using Statsig on www.statsig.com! Go ahead, inspect the page source.

To access the current primary JavaScript bundle, use:

`https://cdn.jsdelivr.net/npm/statsig-js-client-sdk@1.0.19/dist/statsig-prod-web-sdk.js`

To access specific files/versions:

`http://cdn.jsdelivr.net/npm/statsig-js-client-sdk@{version}/{file}`

<a name="step3"></a>

#### Step 3 - Initialize the SDK {#step-3---initialize-the-sdk}

After installation, you will need to initialize the SDK using a Client SDK key from the ["API Keys" tab on the Statsig console](https://console.statsig.com/api_keys).

These Client SDK Keys are intended to be embedded in client side applications. If need be, you can invalidate or create new SDK Keys for other applications/SDK integrations.

:::info
Do NOT embed your Server Secret Key in client side applications
:::

```jsx
const statsig = require('statsig-js-client-sdk');

await statsig.initialize(<STATSIG_CLIENT_SDK_KEY>, { userID: <USER_IDENTIFIER> });
```

<a name="step4"></a>

#### Step 4 - Fetch Feature Gates or Dynamic Configs {#step-4---fetch-feature-gates-or-dynamic-configs}

Now that your SDK is initialized, let's fetch a Feature Gate. Feature Gates can be used to create logic branches in code that can be rolled out to different users from the Statsig Console. Gates are always **CLOSED** or **OFF** (think `return false;`) by default.

```jsx
if (statsig.checkGate(<YOUR_GATE_NAME_HERE>)) {
  // Gate is on
} else {
  // Gate is off - fallback behavior
}
```

Feature Gates can be very useful for simple on/off switches, or more advanced user targeting. But what if you want to return an entirely different configuration to different users? What if you want to be able to send a different set of strings to your client for different locales? Or a different list of products for a new market (or new user)? Enter Dynamic Configs. The API is very similar to Feature Gates, but you get an entire json object you can configure on the server. For example:

```jsx
const config = statsig.getConfig(<CONFIG_NAME>);
```

You can then fetch typed Dynamic Config parameters:

```jsx
const itemName = config.getString('name', 'Awesome Product!');
const price = config.getNumber('price', 10.0);
const shouldDiscount = config.getBool('discount', false);
```

## Advanced Setup {#advanced-setup}

You should provide a user object whenever possible to your `initialize()` call, passing as much information as possible in order to take advantage of advanced gate and config conditions (like country or OS/browser level checks). If the user is not known at SDK init time, you can still fetch values for logged out users until the user is known. At that point, update the gates and configs for the user using:

```jsx
await statsig.switchUser({ userID: <USER_IDENTIFIER>});
```

The User Object can be populated with a number of schematized attributes, or your own custom fields:

```jsx
type StatsigUser = {
  userID?: string | number,
  email?: string,
  ip?: string,
  userAgent?: string,
  country?: string,
  locale?: string,
  clientVersion?: string,
  custom?: Record<string, any>,
};
```

You can use the SDK to log events associated with the user. These events will be used to power A/B testing metrics in the future, and will show up in the Statsig console under the "Dashboard" tab (coming soon!)

```jsx
statsig.logEvent(<EVENT_NAME>, <EVENT_VALUE>, <EVENT_METADATA>);
```

## More Information {#more-information}

For more information, see our [SDK documentation on github](https://github.com/statsig-io/js-client-sdk/tree/main/docs).

## FAQ {#faq}

#### What kind of browser support can I expect from the SDK? {#what-kind-of-browser-support-can-i-expect-from-the-sdk}

We strive to keep the SDK as lightweight as possible, while supporting as many browsers as possible. The primary feature that our SDK relies on which may not be supported by all browsers is a javascript Promise. You may wish to [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) a Promise library to ensure maximum browser compatibility. We recommend [taylorhakes/promise-polyfill](https://github.com/taylorhakes/promise-polyfill) for its small size and compatibility.
