---
sidebar_label: .NET
title: .NET Server SDK
---

:::info Client vs. Server
These docs are for using our .NET SDK in a multi-user, server side context. For client side and single-user contexts, try our [client .NET SDK](/client/dotnetSDK)
:::

This SDK is written in C#, and is [open source and hosted on github](https://github.com/statsig-io/dotnet-sdk).

## The Basics {#the-basics}

Get started in a few quick steps.

1. [Create a free account on statsig.com](#step1)
2. [Install the SDK](#step2)
3. [Initialize and use the SDK](#step3)

<a name="step1"></a>

#### Step 1 - Create a free account on [www.statsig.com](https://console.statsig.com/sign_up) {#step-1---create-a-free-account-on-wwwstatsigcom}

You could skip this for now, but you will need an SDK Key and some Feature Gates or Dynamic Configs to use with the SDK in just a minute.

<a name="step2"></a>

#### Step 2 - Install the SDK {#step-2---install-the-sdk}

The package is hosted on [Nuget](https://www.nuget.org/packages/Statsig/). You can either install it from your Visual Studio's Nuget package manager, or through .NET CLI:

```shell
dotnet add package Statsig --version 0.1.2
```

<a name="step3"></a>

#### Step 3 - Initialize and use the SDK {#step-3---initialize-the-sdk}

Initialize the SDK using a [Server Secret Key from the statsig console](https://console.statsig.com/api_keys):

```csharp
using Statsig;
using Statsig.Server;

private double _subPrice

await StatsigServer.Initialize('<secret>')

// Now you can check gates, get configs, log events for your users.
// e.g. if you are running a promotion that offers all users with a @statsig.com email a discounted price on your monthly subscription service,
// 1. you can first use check_gate to see if they are eligible
var user = new StatsigUser {'email' => 'jkw@statsig.com'};
if (await StatsigServer.CheckGate(user, 'has_statsig_email'))
{
  // 2. then get the discounted price from dynamic config
  var priceConfigs = await Statsig.GetConfig(user, "special_item_prices");
  _subPrice = priceConfigs.Get<double>("monthly_sub_price", 0.99);
}

...
// 3. log the conversion event - 'purchase_made' - once they make the purchase
StatsigServer.LogEvent(user, "purchase_made", 1, new Dictionary<string, string>(){ { "price", _subPrice.ToString() } });


// 4. shut down the SDK when your application is closing
StatsigServer.Shutdown();
```

:::info Asynchronous APIs
Most SDK APIs run synchronously, so why are `GetConfig` and `CheckGate` asynchronous?

The main reason is that older versions of the SDK _might_ not know how to interpret new types of gate conditions. In such cases the SDK will make an asynchronous call to our servers to fetch the result of a check. This can be resolved by upgrading the SDK, and we will warn you if this happens.

For more details, read our [blog post about SDK evaluations](https://blog.statsig.com/evaluating-feature-gates-in-the-statsig-sdk-a6f8881a1ad8). If you have any questions, please ask them in our [Feedback Repository](https://github.com/statsig-io/statsig-feedback/issues).
:::

## More Information {#more-information}

For more information, see our [SDK documentation on github](https://github.com/statsig-io/dotnet-sdk).
