---
title: Why is StatsigUser with a UserID required for server SDKs?
---

In Server SDKs, a StatsigUser with a userID is required for checkGate, getConfig, and getExperiment. We always recommend using the actual user ID if it's available, so that we can make sure to provide a stable experience for each user and correctly attribute subsequent events to the correct user, which allows us to help you understand the impact of your new feature on your users' retention or whatever metrics you care about.

Still aren't sure whether you need to provide the userID? Here is our recommendations for different use cases:

1. If you only plan to use feature gates to turn on/off a feature for all of your users, or for all users passing certain conditions (e.g. "country is US"), you can **pass an empty string or a random ID as the userID if you do not have the actual user ID**.

2. If you want to rollout a feature partially first, make sure it does not cause significant regressions, then roll out to all users, you should **pass the persistent user IDs** in your checkGate/getConfig/getExperiment calls, as well as any logEvent calls you make. This way, we are able to attribute the events you log to the correct users who saw or didn't see your new feature, and calculate metrics correctly to help you understand whether there was any regression.

3. If you want to run an A/B experiment to decide whether to ship a new feature, you should also **pass the persistent user IDs**, for the same reason mentioned in 2) above.

We hope this is helpful. If you have a use case that is not covered in these scenarios, or have any question at all, feel free to join our [Slack community](https://join.slack.com/t/statsigcommunity/shared_invite/zt-pbp005hg-VFQOutZhMw5Vu9eWvCro9g) and drop a question/comment there!
