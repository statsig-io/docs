---
title: Braze
keywords:
  - owner:danielwest
last_update:
  date: 2025-07-28
---

## Overview

Enabling the Braze integration allows you to export Statsig exposure events to your configured Braze app with information on the status of each user's feature gate and experimentation groups. These exposures will be forwarded to Braze as a [Custom Attribute](https://www.braze.com/docs/user_guide/data/custom_data/custom_attributes) object on the user. There will be one Custom Attribute per gate/experiment the user has been exposed to. The Custom Attribute in Braze will be named `statsig_exposure::{gate/experiment name}` and be of the form:

```
{
  group_name: String,
  timestamp: Time
}
```

You can then filter exposed users into a Segment in Braze. Custom Attributes will be forwarded to Braze users by having the unit ID from the gate/experiment as the `external_id` in Braze by default. You can choose to provide a custom Unit ID Type from your Statsig project to be forwarded as the `external_id` for all gate/experiment exposures. This can be provided in the ID Type Mapping section of the Setup dialog for this integration. The integration will attempt to use this custom ID Type if it is provided in the SDK call at the time of exposure, and will fall back to the experiment's Unit ID Type if not.

## Setup in Statsig

:::info
This is available for Enterprise contracts. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you want this enabled.
:::

After it has been enabled, you will be able to find 'Braze' as an option in your Statsig project's [list of integrations](https://console.statsig.com/integrations) from within Statsig console.

1. Open your [Braze dashboard](https://dashboard.braze.com/). Navigate to Settings > APIs and Identifiers, then open the API Keys tab.
2. Create or select an existing API key that has the 'users.track' permission. Enter the API Key Identifier in the Braze Integration Setup dialog in your Statsig project.
3. Find your Instance's REST Endpoint from the [Braze API docs](https://www.braze.com/docs/api/basics/#api-definitions/). Enter it in the Integration Setup dialog.

## Segment Filtering in Braze

Once your integration is set up in Statsig, exposures can start firing into your Braze app. When exposures arrive in Braze from a new gate/experiment, you can create a filter on these users.

1. Open your [Braze dashboard](https://dashboard.braze.com/). Navigate to Data Settings > Custom Attributes. You should see your new Custom Attribute from Statsig like below:

![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/9b09c6b2-b230-499a-a303-29bfe254c6bd.png)

2. Click 'Generate Schema'. It will automatically detect the schema like below:

![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/f6545fc7-e328-44af-8f32-700d442c7869.png)

3. Now you can create a Segment from these users. Navigate to Audience > Segments, and click 'Create Segment'.

4. Under the 'Segment Builder' section, add a new filter. Click 'Custom Attributes', then 'Nested Custom Attributes'.

![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/d0257d44-793c-4ceb-b81e-4a0d58019ff0.png)

5. Now you can filter to a specific group_name (true/false for gates, group name for experiments), or timestamp for your set of users. An example Segment filter for all users that have passed a specific gate is like below:

![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/20d71870-98bf-47b0-aa8d-e0aed4d7a2df.png)
