---
title: Implementing Dynamic Configs
sidebar_label: Implement
slug: /dynamic-config/implement
---
## Use a language-specific Statsig SDK to implement a dynamic config in your application

 - To retrieve the dynamic config, initialize the Statsig SDK as shown below
   ```js
   await statsig.initialize("<CLIENT-SDK-KEY>");
   ```
 - To fetch the JSON parameters in your dynamic config, use the **getConfig** call to retrieve the dynamic config object as shown below
    ```js 
    const localConfig = statsig.getConfig("localization");
    const likeText = localConfig.get("like_us", null);
    const followText = localConfig.get("follow_us", null);
    const shareText = localConfig.get("share", null);
    const twitterText = localConfig.get("post_twitter", null);
    const inviteText = localConfig.get("invite_friend", null);
    ```
