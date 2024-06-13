---
title: Semantic Layer Sync
slug: /statsig-warehouse-native/configuration/semantic-layer-sync
sidebar_label: Semantic Layer Sync
---

If you have centrally defined metrics, Statsig offers the ability to sync its data sources and metrics as part of your data version management workflow. Using Statsig's [Console API](https://docs.statsig.com/console-api/metrics) you can automatically sync changes you make to the matching definitions on Statsig, and you can optionally make the metrics read-only in the Statsig console.

We have a demonstration [GitHub repository](https://github.com/statsig-io/semantic_layer) that utilizes [a script](https://github.com/statsig-io/semantic_layer/blob/main/.github/scripts/statsig_sync.py) executed by [a GitHub Action](https://github.com/statsig-io/semantic_layer/blob/main/.github/workflows/statsig_sync.yml). This setup automatically synchronizes changes to .yml files located in the /metrics or /metric_sources directories in the repo. This means that whenever you create or update these files, the script either updates existing metrics or metric sources in Statsig or creates new ones accordingly.

To use this example template, follow these steps:

1. Fork [this repository](https://github.com/statsig-io/semantic_layer) to get started.
2. In your forked repository, add your Statsig Console API Key to GitHub Secrets.
3. Tailor the metric definitions to align with your data needs.
4. Verify the automation by modifying relevant files and observing the triggered GitHub Action.

## Detailed Guide

### Forking the Repository

1. **Fork this repository** to create a copy in your GitHub account. <img width="1056" alt="Untitled" src="https://github.com/statsig-io/semantic_layer/assets/5475308/79652104-6e13-467a-b4ef-dbbac83e15c9" />

### Adding the Statsig Console API Key 

2. Navigate to `Settings > Secrets and variables > Actions` in your repository settings. Create a new secret named `STATSIG_API_KEY` with your Statsig Console API key as its value. This key facilitates authentication with the Statsig Console API for the synchronization process. <img width="1168" alt="Untitled" src="https://github.com/statsig-io/semantic_layer/assets/5475308/0a627a98-3772-4c36-89d1-7587e3950e84" />

### Customizing Metric Definitions

3. Metric definitions reside within the `./metrics` directory, and metric source definitions are found in the `./metric_sources/` directory. To customize:

   - Utilize the Statsig Console API to fetch an existing **metric_source** or **metric** using GET requests for [metric sources](https://docs.statsig.com/console-api/metrics#post-/metrics/metric_source/-name-) and [metrics](https://docs.statsig.com/console-api/metrics#get-/metrics/-metric_id-).
   - Remove the provided example metrics and metric sources, and replace them with your definitions in `./metric_sources/*.yml` and `./metrics/*.yml`.

*Note:* For enhanced readability, we modified `metric.warehouseNative[]` to `metric.metricDefinition[]` in our examples. You can see this change [here](https://github.com/statsig-io/semantic_layer/blob/1611a68703caf18d7fa32088ff06d568d8b3b03a/.github/scripts/statsig_sync.py#L38). Feel free to adjust the translations or revert to using `metric.warehouseNative[]` in your definitions.

### Verifying Automation

4. To test, edit a metric or metric source description in your repository. This action should trigger the GitHub Action, visible under the `Actions` tab. The process will then either create or update your metrics and metric sources in Statsig based on the repository's semantic definitions.
<img width="1043" alt="Untitled" src="https://github.com/statsig-io/semantic_layer/assets/5475308/2dcf8961-3591-4021-88fe-984994177f35" />

<img width="1041" alt="Untitled" src="https://github.com/statsig-io/semantic_layer/assets/5475308/04a084d6-ef6c-4b3f-aee9-41663ed47a60" />

<img width="1031" alt="Untitled" src="https://github.com/statsig-io/semantic_layer/assets/5475308/4442dd9d-313f-4b16-a978-59513e4e8469" />

<br/>
This example serves as a basic template. We encourage testing and further development to meet production standards. Please share any feedback or improvements you've made to this workflow to our [support team](mailto:support@statsig.com). Thank you for any contributions!
