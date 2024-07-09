---
title: Implement an experiment
sidebar_label: Implement
slug: /experiments-plus/implement
---

To deploy your experiment, your application must pull the experiment configuration from Statsig and log the required events with Statsig. In the code snippets below, we are making up an example surface you are experimenting on - a product demo flow, where you want to experiment with improving conversions through the funnel from starting to completing the demo. For more examples, see this guide on [your first a/b test](/guides/abn-tests), or check out the SDK documentation for the languages relevant to your use case.

```js
const user = { userID: loggedInUserID };
const demoConfiguration = statsig.getExperiment(user, "demo_experience");

// use parameters to control the experience
if (demoConfiguration.get("show_banner", false) {
  showBanner();
}

const title = demoConfiguration.get("title", "Start Demo");
banner.setTitle(title);
```

In order to get experiment results for the events and metrics you care about, you should instrument the experience with the proper event logging (or set up an event integration/data warehouse import to send events to Statsig experimentation stats engine).

```

statsig.logEvent(user, "demo_started");
...
statsig.logEvent(user, "demo_completed");
```

Just a few simple events can help you measure how people are moving through a certain funnel in your product, and enable you to experiment on those flows to increase conversion.
