---
title:  Feature Gates Policy
slug: /org-admin/gates_policy
---

:::info
Organization level Feature Gate Policies are an Enterprise only feature.
:::

## Overview

Feature Gates Policy grants organization admins the ability to:

* **Configure the Custom Fields leveraged in Feature Gate targeting:** With this setting, admins can pre-define allowed Custom Fields by ID type, add a description to provide more context on the Custom Field to end users, and pre-define the allowed values. Defining allowed values is optional. 
* **Configure allowed Targeting Criteria for Feature Gates:** With this setting, admins can select which targeting criteria will surface as options during gate creation for end users. These allowed targeting criteria are defined at the ID type as well, enabling you to, for example, create one set of targeting criteria for logged-in (UserID) vs. logged-out (StableID) feature rollouts. 
* **Require Templates for Gate Creation:** Enables admins to enforce that all gate creations are from a template. Restrictions on who can create/ edit templates (as well as which templates are allowed per-team) can be managed under **Project Settings** -> **Teams** and **Roles**

## Where can these be configured?

Organization Experiment Policies can be managed by visiting the _Organization Info_ page at the bottom of your [Org Settings page](https://console.statsig.com/organization/settings). Only organization admins have the ability to modify these settings.

![Experiment policies](/img/org_exp_policies.png)
