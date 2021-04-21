---
title: Node.js Server SDK
---

:::info Client vs. Server
These docs are for using our javascript SDK in a multi-user, server side context. For client side javascript and single-user contexts, try our [client js sdk](client/jsClientSDK)
:::

The node-js-server-sdk and the accompanying docs are [open source and hosted on github](https://github.com/statsig-io/node-js-server-sdk/tree/main/docs).

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

Install the sdk using npm:

```shell
$ npm i --save statsig-node-js-server-sdk
```

<a name="step3"></a>

#### Step 3 - Initialize the SDK {#step-3---initialize-the-sdk}

Initialize the SDK using a [Server Secret Key from the statsig console](https://console.statsig.com/api_keys):

```jsx
const statsig = require('statsig-node-js-server-sdk');

statsig.initialize(<STATSIG_SECRET>);
```

<a name="step4"></a>

#### Step 4 - Fetch Feature Gates or Dynamic Configs {#step-4---fetch-feature-gates-or-dynamic-configs}

Now that your SDK is initialized, let's fetch a Feature Gate. Feature Gates can be used to create logic branches in code that can be rolled out to different users from the Statsig Console. Gates are always **CLOSED** or **OFF** (think `return false;`) by default.

From this point on, all APIs will require you to specify the user associated with the request. For example, check a gate for a certain user like this:

```jsx
const isGateOn = await statsig.checkGate({ userID: <USER_IDENTIFIER> }, <GATE_NAME>, );
if (isGateOn) {
  // New code branch
} else {
  // Fallback, default behavior
}
```

Feature Gates can be very useful for simple on/off switches, or more advanced user targeting. But what if you want to return an entirely different configuration to different users? What if you want to be able to send a different set of strings to your client for different locales? Or a different list of products for a new market (or new user)? Enter Dynamic Configs. The API is very similar to Feature Gates, but you get an entire json object you can configure in the console. For example:

Checking a Dynamic Config is nearly identical to checking a gate:

```jsx
const config = await statsig.getConfig({ userID: <USER_IDENTIFIER> }, <CONFIG_NAME>);
```

You can then fetch typed Dynamic Config parameters:

```jsx
const itemName = config.getString("name", "Awesome Product!");
const price = config.getNumber("price", 10.0);
const shouldDiscount = config.getBool("discount", false);
```

## Advanced Setup {#advanced-setup}

If you have a logged in user, or a deterministic way to identify users, pass a userID with each sdk call. You should pass as much information as possible with each check: this will enable you to use more advanced gate and config conditions, like country level or OS/browser level checks.

```ts
type StatsigUser = {
  userID?: string | number;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  clientVersion?: string;
  custom?: Record<string, any>;
};
```

You can use the SDK to log events associated with the user. These events will be used to power A/B testing metrics in the future, and will show up in the Statsig console under the "Dashboard" tab (coming soon!)

```jsx
statsig.logEvent({userID: <USER_IDENTIFIER>}, <EVENT_NAME>, <EVENT_VALUE>, <EVENT_METADATA>);
```

The value and metadata fields are optional.

## More Information {#more-information}

For more information, see our [SDK documentation on github](https://github.com/statsig-io/node-js-server-sdk/tree/main/docs).
