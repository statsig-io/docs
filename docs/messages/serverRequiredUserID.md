---
title: Why is StatsigUser with a UserID required for server SDKs?
---

In Server SDKs, a StatsigUser with a userID is required for checkGate, getConfig, and getExperiment.  Why is that?

When evaluating gates, configs, and experiments, Statsig needs an identifier for the user in order to provide *stability*.  What is stability? If the same user checks the same gate multiple times, they should get the same result (provided all rollout percentages and conditions remain the same).

In order to make our APIs stable, we need a stable identifier for the user.  In the case of a logged in user,  this is trivial - provide the logged in user identifier.  If a user is logged out, we recommend you use some other method: generate an ID client side and pass it with each request, create a cookie which will be automatically passed to the server with each request, etc.

If you are using gates only as 100% on/off, or otherwise don't care about stability, you can provide a randomly generated ID.

What about client side SDKs?  On the client, the Statsig SDK generates a stable identifier and caches it locally.  This gets passed with every request to the server.  If a userID is not provided, gates are evaluated using this generated ID.  This provides stability in gate, config, and experiment evaluation without
requiring developers to set a user ID.
