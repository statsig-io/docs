---
title: Running Email Experiments
slug: /statsig-warehouse-native/guides/email-experiments
sidebar_label: Running Email Experiments
keywords:
  - owner:vm
last_update:
  date: 2025-09-18
---

Email marketing experimentation is a common use-case that can be handled elegantly by using Statsig Warehouse Native to analyze the downstream outcomes that occurred as a result of an email experiment. 

Throughout this guide, we will detail the various considerations in achieving an optimal configuration for running this type of experiment.

### Data Access offered by your marketing platform
> Does the platform offer the ability to ETL email engagement events (sends, deliveries, email opens) to your data warehouse either directly, or via a CDP or other pipeline?

This aspect may be critical to the viability and quality of your experiment, depending on your specific use-case. In particular, `email open` events are very useful for controlling the population of users that are counted for Analysis in Statsig. 

If you send 20,000 emails, and only a portion of those get delivered and opened (_e.g._, 12,000), you will avoid diluting your population and achieve more statistical power by counting _only_ the 12,000 email open users in the test population rather than the entire recipient list.

You can use the email open events to either handcraft an assignment source for an `Analyze Only` experiment or to [filter your analysis population](/statsig-warehouse-native/configuration/qualifying-events/#filter-by-qualifying-events) for an `Analyze Only` experiment.

### Configuring your scorecard metrics
> What are you key down-funnel (_e.g._, on-site or in-app) success metrics for the experiment, and are you able to unify the email recipients with their subsequent  down-funnel interactions?

Email Open events can be useful both for filtering your test population or simply for the monitoring purposes, but is not typically a primary metric unless your experiment is testing out different subject lines.

You should consider which down-funnel metrics should be included as primary metrics for making on a decision on your experiment. Attributing down-funnel interactions that occur prior to user login may be tricky, but can be solved by setting up [ID resolution in Statsig](https://docs.statsig.com/statsig-warehouse-native/features/id-resolution/). 

Down-funnel metrics that occur post-login will be simple to attribute back to the experiment, given you will have their user ID and email address which will map directly to the identifiers on your assignment source. These will work without much configuration.

### Designing your test groups and running the test
> What are the options for defining your Test and Control groups natively within your email platform? Does the platform require you to upload a list of each test and group users, or does it natively allow you to define A/B cohorts in some way?

If your platform offers native A/B split capabilities, this is ideal and will reduce the amount of work you'll need to do. If this is the case, it's best to configure your test as an `Analyze Only` experiment in Statsig. Under this model, you will hit the "Analyze" button and keep the "Experiment Completed" checkbox _unchecked_. This will allow us to continue computing Results starting at the first exposure time indefinitely, until you've made the decision to conclude your experiment.

If you need to handcraft the test groups for one reason or another, you should set up an `Assign and Analyze` experiment and use Statsig's SDKs to generate your test and control lists by looping over all of the desired recipients in code and calling `getExperiment`. This will both (a) allow you to capture each test group assignment and (b) automatically write the assignment events to your data warehouse (via the [Statsig managed exposure pipeline](https://docs.statsig.com/statsig-warehouse-native/guides/forwarded-data/)). To do so, you will first need to hit the "Start" button, prior to running your assignments script, and then keep the test in a running state until you've made the decision to conclude your experiment.