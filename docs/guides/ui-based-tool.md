---
sidebar_label: UI Based Tool
title: UI-Based Tool
keywords:
  - owner:oliver
last_update: 2024-10-02
---
You can follow this guide to use Statsig's built in LaunchDarkly migration tool. Please note that this UI-based tool only imports the "production" environment at the moment.

## **What you need[](/guides/migrate-from-launchdarkly#what-you-need)**

1. You will need your project key. Projects in LaunchDarkly have a Name (e.g. "My Mobile App") and a Key (e.g.my_mobile_app).
2. You'll need a read-only access token for this project. You can create one in LaunchDarkly -> Account Settings -> Authorization and limit scope to be read-only.
3. A Statsig project to use. We recommend trying this in a test project first.

## **How it works[](/guides/migrate-from-launchdarkly#how-it-works)**

1. You will be prompted to Import Feature Gates if you don't have any feature gates in your project.
![image](/img/ui-based-tool1.png)

2. Select LaunchDarkly as the platform you want to migrate from.
![image](/img/ui-based-tool2.png)

3. Enter your LaunchDarkly Project Key and API Key/access token.
![image](/img/ui-based-tool3.png)

4. Preview the migration summary. We'll highlight what gates we can and can't migrate. Gates we don't migrate include gates with segments (coming soon) and gates with non-Boolean flags.
![image](/img/ui-based-tool4.png)

5. Finish migration of the gates. All your migrated gates will be tagged "Migrated" so you can identify them.
![image](/img/ui-based-tool5.png)
