---
title: Funnel Metrics
slug: /statsig-warehouse-native/features/funnel-metrics
sidebar_label: Funnel Metrics
description: Use funnel metrics to understand user journeys
---

Funnel metrics are highly customizable Statsig Warehouse Native. You can easily set up a user journey and understand how your changes influence each step - at the user level, or at the session level.

## Creating a Funnel Metric

Creating a funnel metric is easy. For example, if you're running a property booking app and you have the following checkout flow:

- User Views a Property
- User Clicks Reserve for a Property
- User Pays for Property
- User Stays at Property Without Cancellation

Your metric setup page might look like this:
![Checkout Funnel Setup](https://github.com/statsig-io/docs/assets/102695539/55775447-ed40-4f73-bb5d-73b132423df5)

The funnel analysis will count each step if all of the preceding steps happened for that user in the correct order. You can add user-friendly names for each funnel step, so that the meaning
of each step is clear to end users, and you can easily pull from multiple sources of data as long as they share a common user identifier.

## Readouts

When you analyze an experiment with a Funnel metric, you'll see the overall conversion impact for the funnel as well as step-wise conversion rate changes. This is a powerful way to understand
where your gains in a given funnel come from, and if increased conversion in one step leads to lower conversion further down.

- **Overall Results** - The upper-most "OVERALL" metric represents the number of users that entered the funnel (by viewing a "Product Page") and fully completed the funnel (by converting on the final event, "Purchase").
- **Stepwise Results** - Each subsequent step in the funnel is represented by _prior step => next step_. In the example below, we can see that the final step is _checkout page => purchase_, which in plain english indicates "how many users that visited the checkout page proceeded with the purchase".

In the funnel metrics below, there are two test groups, both of which are outperforming the control group. It's clear at a glance that this increase was driven by increased conversion on the Call To Action button.

![Funnel Example](https://github.com/statsig-io/docs/assets/102695539/3d010bee-2c47-4bc1-966b-9cc84a0c4ed8)

## Options

There's a number of powerful options for customizing these funnels:

### Sessions

Specifying a sessionID allows you to constrain funnel analyses to the same session or secondary identifier.

In the example above, we might want to only count the funnel as a success if the user checked out on the _same_ Property they initially viewed. This is a common use case for anybody
who deals with Ecommerce flows. In this case, you'd just add a property identifier from the various data sources, and the funnel analysis would calculate if the user completed a funnel
within a specific "session".

### Count Unique

In Statsig Warehouse Native funnel analysis, you can choose whether you want to measure the number of distinct users who completed each step in the funnel, or whether you want to calculate
the session-level conversion.

If you have a Session identifier set up and choose a user analysis, Statsig will calculate the furthest progress in the funnel for any given user. If you use a session analysis,
Statsig will count over the user's sessions.

![Session vs User Logic](https://github.com/statsig-io/docs/assets/102695539/052aeee0-12a0-4cd8-9eeb-a4768f0d1404)

### Timeframes

You can choose an optional window in days from the user's exposure or from the funnel's first start event. Events that happen after this window do not contribute to funnel analysis. This can be useful
if you want your metric to have a definite bake window and not delay for too long, or have a specific flow like a subscription trial that has a finite duration.

### Custom Breakdowns

Like any other metric, you can use Statsig funnel analysis with custom queries in order to see your funnel results across user dimensions. This is a useful way to understand who changes work best for and generate follow-up hypotheses to test.
