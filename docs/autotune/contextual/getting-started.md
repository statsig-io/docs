---
title: Get Started with Autotune AI
sidebar_label: Getting Started
slug: /autotune/contextual/getting-started
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

Getting started with Autotune AI can be done very quickly.

:::warning
Statsig supports contextual autotune in all Client SDKs, but only in the following server SDKs:

- [Node](/server-core/node-core)
- [Python](/server-core/python-core)
- [Java](/server-core/java-core)
- [Elixir](/server-core/elixir-core)
- [Rust](/server-core/rust-core)
- [Php](/server-core/php-core)
- [Ruby](/server/rubySDK)
:::

# Set Up Your Contextual Autotune

The first thing you will do is configure your contextual autotune in the Statsig console. This can also be configured programmatically via the Statsig console API.

## Make the Contextual Autotune

Log into your Statsig console, and navigate to Autotune under Experiments.

![Autotune Nav](https://github.com/user-attachments/assets/167d5e87-c155-4465-9419-bcf018c496cb)

Click create. You need to name your contextual autotune, and optionally specify the goal so other users can understand the motivation behind it.

![Create Autotune](https://github.com/user-attachments/assets/b16fb9a6-80f4-495c-8ebc-b0cdcdb1d8a8)

Set your autotune type to Contextual

![Contextual](https://github.com/user-attachments/assets/4398ae6f-0763-49c0-a49b-804daece4da8)

## Configure Optimization

If optimizing for

- Users clicking
- Checkouts
- Actions

Choose event occurring /outcome. If optimizing for a continuous output like

- Revenue
- Latency

Choose Event Value, and set the directionality. You will also choose the field from your log or metric source (warehouse native) that you want to use for the value.

For warehouse native customers, specify the metric source and optional filters for your target event.

![Setup](https://github.com/user-attachments/assets/4885eac2-38ec-42f1-bd52-592b728623a0)

We highly recommend wrapping contextual autotunes in an experiment, but it is not required. You can set this up before your contextual autotune, and after. This experiment will wrap autotune calls in code, and can be used to measure the topline impact of using this contextual autotune in your project.

## Training Settings

The other settings can use defaults, but you may want to tune them as well:

- Exploration window: how long to serve traffic randomly to bootstrap the exploration of the bandit
- Attribution window: how long, after a user sees your variant, to count outcome events for. If set to 1 hour, a user has 1 hour to click after seeing our experience in the example above
- Exploration rate: controls how much the bandit favors explore vs. exploit. 0 would not use confidence intervals at all and would just use the best prediction. 1 would use close to the 99.9% CI instead of the 95% CI for exploration
- Long-term exploration allocation %: how much traffic will always get randomly assigned? Use higher values if you plan to run this contextual autotune for a long time to help avoid drift
- Feature list: provide a list of features Statsig should use to train the model. This is just a mask/filter, and if not set Statsig will read every custom attribute. The main use case is fetching this via CAPI to understand which features a given contextual autotune requires for evaluation when they're fetched on-demand (e.g. introducing latency)

![Setup](https://github.com/user-attachments/assets/8c87e142-247d-42b3-8baa-04f8967ae400)

Set up your variants. These are configurations that you will fetch in code. For example, the group below would send this configuration to your codebase and the "red" value could be passed to the color setting on a button.

![Screenshot 2025-03-14 at 10 49 57 AM](https://github.com/user-attachments/assets/591c0b49-2a40-4bb9-9bef-311bd1d64651)
![Screenshot 2025-03-14 at 10 49 51 AM](https://github.com/user-attachments/assets/10b13396-9bb5-4045-b514-45b0861885cb)

# Use the Contextual Autotune in Code (python example)

We assume you have your server secret key for the following code. Before running python, you'll need the SDK:

`pip install statsig-python-core`

First, import and initialize Statsig:

```
from statsig_python_core import Statsig, StatsigUser

key = <your_key_here>
autotune_name = <autotune_name_here>

statsig = Statsig(key)
statsig.initialize().wait()
```

Then, create a user object and fetch your config:

```
user = StatsigUser('user_id', custom={'key1': 'value1', 'key2': 'value2'})
cfg = statsig.get_experiment(user, autotune_name)
```

Now you have your cfg and can apply it!

```
color = cfg.get_string("color", "default color")
print(f"Going to use {color} for my color now")
```

You should be able to:

- see that you fetched a value from one of your variants
- go to the diagnostics page of your autotune, and see a log of the userID along with the corresponding variant

That's it! Your code is now serving personalized variants to your users.

## Notes

Statsig requires a few hundred units to train a model, and will also not start training until those units' attribution window has elapsed. If you want to test the functionality, we highly recommend "faking a test" to confirm things work like you expect - use logic like

```
fetch_autotune_value()
if(user country == 'us'):
    log_click()
```

to conditionally send events and make sure the model picks up on the conditional behavior
