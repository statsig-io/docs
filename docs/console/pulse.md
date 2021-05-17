---
title: Pulse
---

Pulse is inspired by Deltoid, Facebook's internal A/B testing tool. You can learn more about the general ideas here: [Itamar Rosenn (Facebook) - A/B Tests and Deltoid](https://www.youtube.com/watch?v=Iw40wdwkkLA)

Lots of technology companies have similar tools. For example, [Spotify's ABBA](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/), and [Uber's Experimentation Platform (XP)](https://eng.uber.com/xp/) accomplish the same goal.

Statsig's Pulse, which measures the impact of features rolled out behind Feature Gates, allows you to bring powerful experimentation to your application as well! If you want to get a feel for what Pulse can do, the best way is through the demo accounts, accessible via [www.statsig.com/demo](https://www.statsig.com/demo)

Here is an example of pulse showing the impact of an experiment on an ecommerce website. Here, you can see the new feature improved the usage of the shopping cart, at the expense of daily active users (DAU) and product details views.  These sorts of tradeoffs might make sense (say, adding an item to the cart takes you to the cart, instead of to browse additional product details), and you will have to decide if these tradeoffs are worth it before shipping the feature more broadly.

![Pulse - Experiment Details](https://user-images.githubusercontent.com/74584483/118177206-369ce000-b3e7-11eb-8b2e-19e554db0043.png)
