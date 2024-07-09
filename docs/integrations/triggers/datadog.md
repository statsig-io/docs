---
title: Datadog
---

### Overview

Triggers can be used with Datadog to toggle a gate on or off depending on the performance of a metric.

### Creating a Trigger

1. On Statsig console, navigate to the [integrations](https://console.statsig.com/integrations) tab.
2. Find and open **Datadog** -> **Triggers**.
3. Specify the target gate and action, then click **Create**
   ![Image](https://user-images.githubusercontent.com/111380336/216156433-a41461d7-349b-446a-a089-610e57917824.png)

### Connecting to Datadog

1. Copy the trigger URL generated from the previous step.
2. In Datadog, create a new [Webhook](https://app.datadoghq.com/integrations/webhooks) using that URL. (You do not need to make any changes to the payload)
   ![Image](https://user-images.githubusercontent.com/111380336/216156415-2b170a22-71ea-48af-9db9-dc3f76a357a4.png)
3. Now within your Datadog monitor settings, you can add this webhook as a notification target.
   ![Image](https://user-images.githubusercontent.com/111380336/216156425-8dd57f92-aa64-4a55-8bd4-4737a8e6818e.png)

To learn more about how to configure a Datadog monitor, see [Datadog Notifications](https://docs.datadoghq.com/monitors/notify/).
