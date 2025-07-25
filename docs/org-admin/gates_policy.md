---
title:  Feature Gates Policy
slug: /org-admin/gates_policy
keywords:
  - owner:mseger
last_update:
  date: 2025-03-21
---

:::info
Organization level Feature Gate Policies are an Enterprise only feature.
:::

## Overview

Feature Gates Policy grants organization admins the ability to:

**Configure the Custom Fields leveraged in Feature Gate targeting:** With this setting, admins can pre-define allowed Custom Fields by ID type, add a description to provide more context on the Custom Field to end users, and pre-define the allowed values. Defining allowed values is optional.

![Screen Shot 2024-03-26 at 1 19 40 PM](https://github.com/statsig-io/docs/assets/101903926/394b586d-22aa-45e9-96be-10ba2270c010)


**Configure allowed Targeting Criteria for Feature Gates:** With this setting, admins can select which targeting criteria will surface as options during gate creation for end users. These allowed targeting criteria are defined at the ID type as well, enabling you to, for example, create one set of targeting criteria for logged-in (UserID) vs. logged-out (stableID) feature rollouts.

![Screen Shot 2024-03-26 at 1 23 18 PM](https://github.com/statsig-io/docs/assets/101903926/e94ca308-49e3-422f-ad42-3647dc910773)


**Require Templates for Gate or Dynamic Config Creation:** Enables admins to enforce that all gate or dynamic config creations are from a template. Restrictions on who can create/ edit templates (as well as which templates are allowed per-team) can be managed under **People** -> **Teams** and **Roles**
  
![Screen Shot 2024-03-26 at 1 23 50 PM](https://github.com/statsig-io/docs/assets/101903926/db0a74d4-a92a-4ae8-a82c-8b8cd409b251)

## Where can these be configured?

Organization Gate Policy can be managed in settings by visiting Product Configuration > Feature Management > [Organization tab](https://console.statsig.com/organization/settings). Only organization admins have the ability to modify these settings.

![img](/img/organization_policies/gates_policy_3.png)

