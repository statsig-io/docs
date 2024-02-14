---
title: Why is StatsigUser with a UserID or CustomID required for server SDKs?
sidebar_label: UserID Required
---

In Server SDKs, a StatsigUser with a userID (or customID) is required for checkGate, getConfig, and getExperiment. For userID based experiences, we always recommend using the actual user ID if it's available: users will get a stable experience, and subsequent events will be attributed to the correct users so you can accurately measure downstream metrics.

Still aren't sure whether you need to provide the userID? Here are our suggestions for different use cases:

1. If you only plan to use feature gates to turn on/off a feature for all of your users, or for all users passing certain conditions (e.g. "country is US"), you can **pass any non-empty identifier, hard coded string, or a random ID as the userID if you do not have the actual user ID**.  Note that you cannot target the empty string in the statsig console.

2. If you want to rollout a feature partially first, make sure it does not cause significant regressions, then roll out to all users, you should **pass the persistent user IDs** in your checkGate/getConfig/getExperiment calls, as well as any logEvent calls you make. This way, we are able to attribute the events you log to the correct users who saw or didn't see your new feature, and calculate metrics correctly to help you understand whether there was any regression.

3. If you want to run an A/B experiment to decide whether to ship a new feature, you should also **pass the persistent user IDs**, for the same reason mentioned in 2) above.

4. If you want to pass a userID for the above reasons, but don't have a logged in user (e.g. you are optimizing the login flow), set a stable identifier as a cookie or in local storage and use that with each call to Statsig.

We hope this is helpful. If you have a use case that is not covered in these scenarios, or have any question at all, feel free to join our [Slack community](https://statsig.com/slack) and drop a question/comment there!


Note that the SDK does not check if the experiment you are checking against is based on the ID type you are providing.  If you are running BOTH user and custom ID experiences, it is safest to provide both IDs with every check, so you don't fail to log exposures or events with a missing unit type
