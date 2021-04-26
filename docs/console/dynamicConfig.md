---
title: Dynamic Config
---

Dynamic Config is a tool that abstracts otherwise hard-coded values into a configuration defined on the server. For example, Firebase has a similar tool dubbed ["Remote Config"](https://firebase.google.com/docs/remote-config).

Similar to Statsig [Feature Gates](/console/featureGates), Dynamic Configs can be simple static configurations, or return different results to different users, based on their location/browser/app version/language/etc.

For example, you could use a Dynamic Config to determine the product to promote in the hero banner on your webpage:

```
config = Statsig.getConfig("hero_product")
if (config == null) {
    hideHero()
    return
}
title = config.get("title")
price = config.get("price")
renderHero(title, price)
```

In the Statsig Console, the configuration used above would look like this:

```
{
    "title": "Hoverboard",
    "price": 999.00
    "currency": "USD"
}
```

But you could return a different one, say for users in Europe, that looks like this:

```
{
    "title": "Hoverboard",
    "price": 800.00
    "currency": "EUR"
}
```

Notice that although the configuration values changed in the console, the code remains the same! You can use Dynamic Configs to change values without having to update code, or push a new mobile app version.
