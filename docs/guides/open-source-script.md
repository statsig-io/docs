---
sidebar_label: Open Source Script
title: Open Source Script
keywords:
  - owner:oliver
last_update:
  date: 2025-08-22
---

[This package](https://github.com/statsig-io/migrations) is designed to help automate migration of feature flags from LaunchDarkly to Statsig. It fetches feature flags from LaunchDarkly, translates them into Statsig's format, and creates corresponding feature gates in Statsig.

## Considerations

This script should work out of the box. It's recommended you start with a test environment of 5-10 flags. However, before running the script on a large scale, consider the following:

- **IMPORTANT**: If you don't need to customize this import script, you can just use [Statsig's in-console tool](/guides/ui-based-tool)

- The script uses a tag `Imported from LaunchDarkly` to identify migrated flags in Statsig. Ensure this tag is unique and recognizable.
- The script includes a function to delete all Statsig feature gates with a specific tag. Use this with caution to clean up after a test or failed migration.
- The script requires API keys for both LaunchDarkly and Statsig, which should be kept secure.

## Installation

To run the script, you need Node.js and npm installed on your system. You can execute directly:

```bash
npx @statsig/migrations --from launchdarkly --launchdarkly-project-id default <more-arguments>
```

## Configuration

- Provide your [LaunchDarkly API key](https://docs.launchdarkly.com/home/account/api) and [Statsig Console API key](https://docs.statsig.com/console-api/introduction) in the script
- Map LaunchDarkly environments to Statsig environments that aren't already the same by using `--environment-name-mapping` to the script.
- Map LaunchDarkly context kind to Statsig's custom unit ids and custom fields.

You can find the detailed instructions for these steps on the [Github repo](https://github.com/statsig-io/migrations).

## Running the Script

To execute the migration script, run the following command in your terminal:

```bash
node index.js
```

The script will perform the following actions:

1. Fetch all feature flags from LaunchDarkly.
2. Translate each flag into Statsig's format.
3. Create feature gates in Statsig.
4. Write the migration status and details to a CSV file named `flag_migration_tracker.csv`

## Troubleshooting

If you encounter issues during the migration, check the following:

- Ensure that the API keys are correct and have the necessary permissions.
- Review the error messages in the console for clues on what might have gone wrong.

Pull requests and feedback welcome!
