---
title: Implement an experiment
sidebar_label: Implement
slug: /experiments-plus/implement
---

To deploy your experiment, you'll need to:
1. Pull the experiment configurations in your application
2. Log the events you'll want in your experiment results
3. Test your experiment in development or a lower environment
4. Click "Start"!

##Pulling experiment configurations from Statsig
In the code snippets below, we illustrate experimenting on a product demo flow, where you might experiment to improve conversion through the funnel to demo completion. For more examples, see this guide on [your first a/b test](/guides/abn-tests), or check out the SDK documentation for the languages you'll be using.

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

##Logging events for your scorecard
In order to get experiment results for the events and metrics you care about, you should instrument the experience with the proper event logging (or set up an event integration/data warehouse import to send events to Statsig experimentation stats engine). If you'd like to use our SDKs, your code might look like this:

```

statsig.logEvent(user, "demo_started");
...
statsig.logEvent(user, "demo_completed");
```

Just a few simple events can help you measure how people are moving through a certain funnel in your product, and enable you to experiment on those flows to increase conversion.


## Testing in a lower environment
Once experiments are launched, you can't edit the groups without restarting the experiment, as users are already being allocated to each group. We therefore recommend testing each experiment in lower environments before starting. You can do this by clicking "Experiment Checklist" and "Test your Experiment", then selecting an environment and clicking enable. These environments should match your [SDK environment setup](/guides/using-environments/#configuring-environments). Testing in a lower environment, [overrides](/experiments-plus/overrides) can help you manually set your experiment "group" to properly test each variant.

![Export-1730404362916](https://github.com/user-attachments/assets/e3534b10-1b45-412c-a4b3-f13b861376bc)


## Starting your experiment
Once your experiment has metrics, parameters, and a hypothesis - and you've tested it in a lower environment, you're ready to launch! Click the "Start" button and your experiment will be immediately live in Production. 
