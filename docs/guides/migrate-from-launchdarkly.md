---
sidebar_label: Migrate from LaunchDarkly
title: LaunchDarkly Migration Guide
keywords:
  - owner:Shubham
last_update:
  date: 2025-08-22
---

## Overview

Migrating from LaunchDarkly to Statsig is a strategic move. It can lead to efficient feature flag management and a stronger experimentation culture. By following this guide, you'll be well equipped to make the transition with confidence.

We will cover the following topics in this guide:
1. Conceptual differences between LaunchDarkly and Statsig
2. Deciding what to migrate vs. not
3. Importing flags into Statsig
4. Flipping evaluation from LaunchDarkly to Statsig
5. How to run the migration process

## Conceptual differences between LaunchDarkly and Statsig

It is important to understand a few fundamental differences in how LaunchDarkly and Statsig structure their feature management data models:

**Environment**: LaunchDarkly treats environments as top level concept where flags and segments must be duplicated and managed separately across environments. In Statsig, we have a centralized model where flags/configs handle environment-specific logic in their targeting rules.

**Flag types**: LaunchDarkly uses a mix of boolean, multivariate, and JSON flags. Statsig distinguishes between Feature Gates (boolean) and Dynamic Configs (typed multivariate configs with JSON values).

**Targeting**: LaunchDarkly relies on Contexts to evaluate flags. Statsig evaluates based on what we call a StatsigUser object.

#### Side by side comparison

| LaunchDarkly concept | Can we migrate? | Statsig notes |
|---------------------|-----------------|---------------|
| Project | ✅ Yes | Convert to Project |
| Environment | ✅ Yes | Convert to Environment (mark critical as production in Statsig) |
| Boolean Flags | ✅ Yes | Convert to Feature Gates |
| String, Number, and JSON Flags | ✅ Yes | Convert to Dynamic Configs |
| Segments | ✅ Yes | Convert to Segments (Big ID list segments won't be imported) |
| Targeting Rules | ✅ Yes | Convert to Rules |
| Context kind | ✅ Yes | Convert to Custom Unit ID in Statsig |
| Context attribute | ✅ Yes | Convert to Custom Fields in Statsig |
| Flag owner, tags, teams, and history | ❌ No | Statsig does not preserve any metadata or historical versions of a flag during migration |

#### User Context mapping example

LaunchDarkly supports multi-kind, structured user contexts. Statsig requires a user object to achieve this. In Statsig, User ID or Custom ID is equivalent to LD's key. Known top-level fields in Statsig include userID, email, ip, userAgent, and custom. All other fields go under the custom object.

**Example 1: LD User context to Statsig User object conversion**

```javascript
// 1 - LD User context
{
  "kind": "user",
  "key": "user-key-123abc",
  "name": "Anna",
  "email": "anna@globalhealthexample.com",
  "organization": "Global Health Services",
  "jobFunction": "doctor",
  "device": "iPad"
}

// 1 - Statsig User object
{
  "userID": "user-key-123abc",
  "email": "anna@globalhealthexample.com",
  "custom": {
    "name": "Anna",
    "organization": "Global Health Services",
    "jobFunction": "doctor",
    "device": "iPad"
  }
}
```

**Example 2: LD Multi context kind to Statsig User object conversion**

```javascript
// 2 - LD Multi context kind
{
  "kind": "multi",
  "user": {
    "key": "user_abc",
    "name": "Anna",
    "email": "abc@company.com",
    "region": "us-east"
  },
  "org": {
    "key": "org_xyz",
    "tier": "enterprise"
  }
}

// 2 - Statsig user object
{
  "userID": "user_abc",
  "email": "abc@company.com",
  "customIDs": {
    "org_id": "org_xyz"
  },
  "custom": {
    "user_name": "Anna",
    "user_region": "us-east",
    "org_tier": "enterprise"
  }
}
```

In Statsig, email is a top-level reserved field for the user object, so it should be placed directly as email (not user_email). Statsig expects fields like userID, email, ip, and userAgent at the top level for user targeting and analytics.

## Deciding what to migrate vs. not

Before you begin migrating flags from LaunchDarkly to Statsig, take this opportunity to audit your flags in the current system and do a cleanup. Many organizations accumulate flag debt over time - from stale flags, dead experiments, deprecated toggles, and legacy kill switches. Migration is a chance to start fresh with only what's valuable and active.

Utilize filters such as 'Lifecycle' and 'Type' in LaunchDarkly to determine which flags are worth importing into Statsig.

Below is a decision framework you can use to decide which flags to import into Statsig. Our migration script follows this framework by default but you can alter it if you need.

![Migration Decision Framework](/img/migration-decision-framework.png)

## Importing flags into Statsig

To import feature flags from LaunchDarkly to Statsig, you can use our official import tool which is designed for this specific purpose. The import tool fetches flags from LaunchDarkly, translates them into Statsig's format, and creates corresponding feature gates in Statsig. Additionally, it tracks the migration status and details in a CSV file.

There are two ways to invoke this tool:

1. **[Open source script](/guides/open-source-script) (Recommended)** - This is a good option if you want to customize the integration logic. It will also spit out a CSV of all of your LaunchDarkly flags, along with migration status and relevant URLs to the flag in LaunchDarkly and the gate in Statsig. This imports all of your environments.

2. **[Statsig console](/guides/ui-based-tool)** - UI-based wizard to help you import LaunchDarkly feature flags and segments into Statsig. It will tell you which gates and segments were migrated and which weren't. It only imports the "production" environment at the moment.

> 👉 If you are migrating from a different system, you will need to recreate flags manually in Statsig. Ideally you have done the cleaning in the previous step, so you will migrate a small number of flags. If you need assistance, please reach out over email or slack.

## Flipping evaluation from LaunchDarkly to Statsig

Once your flags have been imported into Statsig, the next step is to flip evaluation logic in your application. Instead of replacing every LaunchDarkly flag evaluation with Statsig calls, we recommend introducing a wrapper with gradual migration capabilities. This allows you to run both systems in parallel, compare outputs, and gradually switch over with minimal risk.

The wrapper approach provides several key benefits:
- **Parallel execution**: Run both systems simultaneously to validate behavior
- **Gradual rollout**: Migrate flags one at a time or by percentage
- **Easy rollback**: Quickly revert to LaunchDarkly if issues arise
- **Consistent interface**: Maintain existing application code structure

#### Implementation Guide

**1. Before migration: LaunchDarkly Evaluation**

Here's what a typical LaunchDarkly setup might look like:

```javascript
import { LDClient } from 'launchdarkly-js-client-sdk';

const ldClient = LDClient.initialize('client-key', {
  key: 'user_abc',
  custom: { plan: 'pro' }
});

ldClient.on('ready', () => {
  const isNewHomepageEnabled = ldClient.variation('new_homepage_flag', false);
  const buttonColor = ldClient.variation('button_config', 'gray');
});
```

**2. Create the Migration Wrapper**

Create a comprehensive wrapper (`featureWrapper.js`) that handles both systems. The wrapper should check Statsig first, and if unavailable, fallback to LaunchDarkly:

```javascript
import { getLDClient } from './launchdarklyService';
import { getStatsigClient } from './statsigService';

export const wrapperFlags = {
  // For boolean flags
  wrapperGetFlag(flagKey, defaultValue = false) {
    const statsigClient = getStatsigClient();
    if (statsigClient) {
      return statsigClient.checkGate(flagKey);
    }
    
    const ldClient = getLDClient();
    if (ldClient) {
      return ldClient.variation(flagKey, defaultValue);
    }
    
    return defaultValue;
  },

  // For dynamic configs (string, number, or json flags)
  wrapperGetConfig(user, configKey) {
    const statsigClient = getStatsigClient();
    if (statsigClient) {
      const config = statsigClient.getConfig(user, configKey);
      return {
        get: (paramKey, defaultValue) => config.get(paramKey, defaultValue)
      };
    }
    
    const ldClient = getLDClient();
    if (ldClient) {
      return {
        get: (paramKey, defaultValue) => {
          const ldKey = `${configKey}.${paramKey}`;
          return ldClient.variation(ldKey, defaultValue);
        }
      };
    }
    
    return {
      get: (_key, defaultValue) => defaultValue
    };
  }
};
```

**3. Refactor application code to use the Wrapper**

Once the wrapper is in place, you'll want to route all flag checks through it. The application logic itself doesn't change, only the mechanism by which flags are retrieved.

```javascript
import { wrapperFlags } from './featureWrapper';

const user = {
  userID: 'user_abc',
  custom: { plan: 'pro' }
};

// Boolean gate
if (wrapperFlags.wrapperGetFlag('new_homepage_flag', user)) {
  showNewHomepage();
}

// Multivariate config
const buttonConfig = wrapperFlags.wrapperGetConfig('button_config', user);
const buttonColor = buttonConfig.get('color', 'gray');
```

**4. Validate and gradually cut over**

Once you've validated that Statsig is working as expected and that your migrated flags are returning correct values, you can begin migrating more flags. We recommend that you repeat the above steps for 2-3 engineering teams to instill confidence that different use cases are covered.

After you've maintained flags in both systems long enough to ensure things are working as expected, phase out LaunchDarkly.

1. **Remove LaunchDarkly fallback from the wrapper** - Update the wrapper functions to rely solely on Statsig. This simplifies the logic and ensures LaunchDarkly is no longer queried in production.

2. **Delete LD initialization logic and SDK imports** - Any references to `LDClient.initialize` or `ldClient.variation` can now be safely removed.

## How to run the migration process

To ensure a safe and manageable transition to Statsig, we recommend a phased rollout that each team can adopt independently. This approach allows for gradual migration, scoped validation, and shared learnings across the org.

| Phase | Description | Who | Duration |
|-------|-------------|-----|----------|
| 1. Auditing existing flags in LaunchDarkly | Each team reviews their LaunchDarkly flags and identifies which flags are worth migrating | Individual Teams | Ongoing (2-3 days per team) |
| 2. Start creating all new flags in Statsig | Starting immediately, all new flags to be created in Statsig to avoid using legacy system out of habit | Org-wide | 1 week |
| 3. Pilot migration with one team | Select one team to migrate a small set of LaunchDarkly flags to Statsig using the wrapper. Validate that migrated flags work as expected | Pilot team | 1–2 weeks |
| 4. Org-Wide migration and cutover | Repeat migration for more teams in waves. Create training docs and guides for org wide adoption. Once Statsig is stable and adopted org-wide, remove LaunchDarkly fallback from wrapper | All teams + central guidance | 3–4 weeks (rolling) |

We hope this guide helped you better understand how to approach LaunchDarkly to Statsig feature flag migration. If you need any further assistance or just want to talk through your specific case, please talk to us and we'll happy to work with you.
