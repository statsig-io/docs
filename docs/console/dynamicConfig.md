---
title: Dynamic Config
---

Dynamic Config is a tool that abstracts otherwise hard-coded values into a configuration defined on the server. Any property across clients and backend services, from button colors to ranking configurations, can be managed on the server side via a Dynamic Config.

Many technology companies use tools like this to make the server the source of truth for configurable properties. For example, [Spotify uses their "Remote Configuration"](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/) to dynamically update properties of their clients or backend services.

Dynamic Configs can be simple static configurations, or return different results to different users, based on their location/browser/app version/language/etc. Dynamic Configs use the same tageting conditions as Statsig [Feature Gates](/console/featureGates/introduction) to power this, but unlike Feature Gates, you can configure an entirely different JSON blob to be used at runtime (rather than just a boolean value).

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
