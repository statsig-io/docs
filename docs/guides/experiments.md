---
sidebar_label: Experiment Types
title: Experiment Types on Statsig
---

This guide provides a quick overview of  experiment types we've seen people run on Statsig. 

:::info This is not exhaustive
Want to run an experiment you don't see represented here? Reach out on and ask about it on [Slack](https://statsig.com/slack).  
:::

## Experiment on anonymous users
Statsig client SDKs automatically persist a unique device identifier (called stableID) in local storage. This stableID can be used as the identifier experiments will run on. If you already have your own device identifier, you can override the stableID (or add it as a distinct Custom ID). Read more - [stable id experiments](/guides/first-device-level-experiment), [custom id experiments](/guides/experiment-on-custom-id-types).

## Experiment on email or notification campaigns
People use Statsig to measure the effectiveness of email and notification campaigns. Tools that allow email/notification campaigns often have some basic A/B testing - measuring open and click through rates, but measuring the experiment in Statsig lets you understand impact on product metrics including retention, usage and revenue. You can find generic guidance [here](/guides/email-campaign-test) and more specific guidance for [Sendgrid](/guides/sendgrid-email-abtest) and [Customer.io](/guides/customer-io-email-abtest).   


## Experiment on non-user ID entities
People use Statsig to control features and experiments by non-user entities like organizations. B2B companies often all users in the same organization to see similar experiences. Statsig lets you define your own CustomIDs and control experiments and features using this. ([see more](/guides/experiment-on-custom-id-types))

Use cases on Statsig are as varied as watching KPI impact of firmware upgrades on devices, controlling features by VINs on vehicles and even running experiments on page framework changes and measuring impact on SEO, similar to what Pinterest describes [here](https://medium.com/pinterest-engineering/demystifying-seo-with-experiments-a183b325cf4c). 

