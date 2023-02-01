---
title: Datadog
---

### Overview

Triggers can be used with Datadog to toggle a gate on or off depending on the performace of a metric.

### Creating a Trigger

1. On Statsig console, navigate to the [integrations](https:://console.statsig.com/integrations) tab.
2. Find and open **Datadog** -> **Triggers**.
3. Specify the target gate and action, then click **Create**
![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76d09555-1093-43d8-b6f3-6badb2102cfe/Screenshot_2023-01-31_at_5.04.32_PM.png)

### Connecting to Datadog
1. Copy the trigger URL generated from the previous step.
2. In Datadog, create a new [Webhook](https://app.datadoghq.com/integrations/webhooks) using that URL. (You do not need to make any changes to the payload)
![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e5a4d56-1473-418f-8461-befc3abb6387/Screenshot_2023-01-31_at_5.10.30_PM.png)
3. Now within your Datadog monitor settings, you can add this webhook as a notification target.
![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9eb262a5-82f8-4f81-9755-c5f1cc39f64a/Screenshot_2023-01-31_at_5.07.13_PM.png)

To learn more about how to configure a Datadog monitor, see [Datadog Notifications](https://docs.datadoghq.com/monitors/notify/).