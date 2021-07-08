---
title: Pulse
---

Pulse is inspired by Deltoid, Facebook's internal A/B testing tool. You can learn more about the general ideas here: [Itamar Rosenn (Facebook) - A/B Tests and Deltoid](https://www.youtube.com/watch?v=Iw40wdwkkLA)

Lots of technology companies have similar tools. For example, [Spotify's ABBA](https://engineering.atspotify.com/2020/10/29/spotifys-new-experimentation-platform-part-1/), and [Uber's Experimentation Platform (XP)](https://eng.uber.com/xp/) accomplish the same goal.

Statsig's Pulse, which measures the impact of features rolled out behind Feature Gates, allows you to bring powerful experimentation to your application as well! If you want to get a feel for what Pulse can do, the best way is through the demo accounts, accessible via [www.statsig.com/demo](https://www.statsig.com/demo)

Here is an example of pulse showing the impact of an experiment on an ecommerce website. Here, you can see the new feature improved the usage of the shopping cart, at the expense of daily active users (DAU) and product details views. These sorts of tradeoffs might make sense (say, adding an item to the cart takes you to the cart, instead of to browse additional product details), and you will have to decide if these tradeoffs are worth it before shipping the feature more broadly.

![Screen Shot 2021-06-15 at 11 48 53 AM](https://user-images.githubusercontent.com/82126616/122107199-ad0a7480-cdcf-11eb-9e22-386374ff812a.png)

### <a name="terminology"></a>Tooltip Terminology

![Screen Shot 2021-07-08 at 3 18 08 PM](https://user-images.githubusercontent.com/77301670/124997570-b74f1580-dfff-11eb-8f1f-c10af04cd580.png)

- **Mean**: The average daily value per user (Inactive users are counted as 0)
- **Std**: Standard deviation of this metric
- **Abs Delta**: Absolute difference of the Mean between groups (Pass Mean - Fail Mean)
- **Delta %**: Relative difference of the Mean. Calculated as the Pass mean divided by the Fail mean, minus 100%
- **P-Value**: The p-value is the (two-sided) probability of achieving the observed difference (or more extreme) assuming that there is no difference between the experimental groups. In classical statistics, a low enough p-value means that the assumption of no difference is incorrect
