---
title: Templates
slug: /templates/templates
keywords:
  - owner:mseger
---

# Templates

## Overview

Templates enable you to create a blueprint for gates/dynamic configs/ experiments to enable standardization and reusability across your Project. Templates can help enforce a rollout sequence, or make it easy for new experimenters to get up & running with your standard team settings for experimentation.

Templates can be enforced at the Org (via [Organization Settings](/org-admin/organization_policies) and [Role-based Access Controls](/access-management/projects)) or at the [Team-level](/access-management/teams). We will detail the various levels of controls and permissions you can enable for templates below.

## Creating Templates

There are two primary ways to create a new template-

1. From the **Templates** page under **Product Configuration**
2. From a gate/ experiment you want to turn into a new template

### Creating Templates from Project Settings

To create a new template from Project Settings, navigate to **Settings** -> **Project Configuration** -> **Templates** and click the **+Create New** CTA, then select whether you want to create a gate, experiment, or dynamic config template.

![Template Creation](/img/templates/create-template.png)

### Converting an Existing Config into a Template

If you create a new config that you think would be useful to more folks on the team as a template, you can convert an existing (or currently being created) config into a template. To do this, in the config you wish to convert to a template, tap the "..." menu and select **Save as Template**. This will prompt you to name your template and add a description before saving.

![Save as Template 1](/img/templates/templates_save_1.png)

![Save as Template 2](/img/templates/templates_save_2.png)

## Managing Templates

Templates can be managed via the **Templates** setting under **Product Configuration**. Note that permissions for who can/ can't create or modify templates are managed via Statsig's Role-based Access Controls in **People** -> **Roles**. By default Org and Project Admins can modify or delete any Template.

![Templates](/img/templates/templates_role_setting.png)

## Creating Configs from Templates

To create a config using a template, at the time of config creation, select a template to apply from the template selector. If templates are required at the Organization or Team-level, the user will be blocked from proceeding with config creation until they've selected an approved template. The list of template options in the drop-down is configured at the team level (see below).

![Template Selection](/img/templates/template-selection.png)

## Managing Templates- Settings & Permissions

There are a few key layers of settings governing templates, namely at the-

1. Org level
2. Team level

### Org-level Templates Settings

Within Experiment and Gate Policies (**Settings** -> **Project Configuration** -> **Feature Management**/ **Experimentation** - **Organization Tab**), you can enforce that a template is used for any new gate/ dynamic config/ experiment creation.  Only organization admins can configure this setting. NOTE that you must create at least 1 experiment/ gate template for users to choose if you toggle on this setting, otherwise they will be blocked in creating new configs.

![Org-level Feature Gate Templates Settings](/img/templates/gates_policy_3.png)

### Team-level Templates Settings

At the team-level, you can configure which templates members of that team can choose from at the time of config creation. You can also choose whether to require use of a template or not at the team level (note that this setting only applies if templates aren't already required at the organization-level, in which case that overrides any team-level configuration).

To configure team-specific templates, navigate to **Settings** -> **People** -> **Teams** -> choose a team -> **Settings** and then choose which templates are allowed for gates, dynamic configs, and experiments.

![Team-level Templates Settings](/img/templates/templates_teams.png)

### Notes

- Experiment templates cannot be renamed. An effective work-around for this is to create a new experiment using the template, then make a new template from that experiment with the desired name.
- Templates cannot be modified via Console API.
