---
sidebar_label: .NET
title: .NET Client SDK
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::info Client vs. Server
These docs are for using our .NET SDK in a single-user, client side context. For server side and multi-user contexts, try our [server .NET SDK](server/dotnetSDK)
:::

The client .NET SDK is written in C#, and is [open source and hosted on github](https://github.com/statsig-io/dotnet-sdk).

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

The package is hosted on [Nuget](https://www.nuget.org/packages/Statsig/). You can either install it from your Visual Studio's Nuget package manager, or through .NET CLI:

```shell
dotnet add package Statsig --version 0.1.2
```

<a name="step3"></a>

#### Step 3 - Initialize the SDK {#step-3---initialize-the-sdk}

Initialize the SDK using a [Client SDK Key from the statsig console](https://console.statsig.com/api_keys) (you may need to generate a new one if this is your first time using Statsig):

```csharp
using Statsig;
using Statsig.Client;

var user = new StatsigUser { UserID = "12345", Email = "jkw@statsig.com" };
await StatsigClient.initialize("<STATSIG_SECRET>", user);
```

StatsigClient is a singleton class that you just need to call initialize() wherever you initialize your app once, and then you can use it anywhere else in your app synchronously.

<a name="step4"></a>

#### Step 4 - Fetch Feature Gates, Dynamic Configs, and log custom events {#step-4---fetch-feature-gates-or-dynamic-configs}

Now that your SDK is initialized for your user, you can check feature gates, get configs and log events for the user. Let's say you are running a promotion that offers all users with a @statsig.com email a discounted price on your monthly subscription serivce, you can apply the discounted price for your user dynamically like this:

```csharp
private double _subPrice = 1.99;

// 1. check if the user pass the feature gate named "has_statsig_email" - you can configure the gate in Statsig console to only pass if user's email ends with "@statsig.com"
if (StatsigClient.CheckGate("has_statsig_email"))
{
  // 2. if they are eligible, then get the price from the dynamic config named "special_item_prices" using the key ("monthly_sub_price") and a default value (0.99)
  var priceConfigs = StatsigClient.GetConfig("special_item_prices");
  _subPrice = priceConfigs.Get<double>("montly_sub_price", 0.99);
}

// 3. you can also log the conversion event with StatsigClient if you are running an A/B test to improve the conversion, or just want to track it in general
StatsigClient.LogEvent("purchase_made", 1, new Dictionary<string, string>(){ { "price", _subPrice.ToString() } });
```

## More Information {#more-information}

For more information, see our [SDK documentation on github](https://github.com/statsig-io/dotnet-sdk).
