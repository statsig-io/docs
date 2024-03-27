---
title:  Templates
slug: /templates/templates
---

# Templates

## Overview 
Templates enable you to templatize gates/ experiments to enable standardization and reusability across your Project. Templates can help enforce a rollout sequence, or make it easy for new experimenters to get up & running with your standard team settings for experimentation. 

Templates can be enforced at the Org (via [Organization Settings](https://docs.statsig.com/org-admin/organization_policies) and [Role-based Access Controls](https://docs.statsig.com/access-management/projects)) or at the [Team-level](https://docs.statsig.com/access-management/teams). We will detail the various levels of controls and permissions you can enable for templates below. 

## Creating Templates 
There are two primary ways to create a new template- 
1. From the **Templates** tab in **Project Settings**
2. From a gate/ experiment you want to templatize (converting a config into a template)

### Creating Templates from Project Settings 
To create a new template from Project Settings, navigate to **Settings** -> **Project Settings** -> **Templates** and click the **+Create New** CTA, then select whether you want to create a gate or experiment template. 

![Screen Shot 2024-03-26 at 1 54 16 PM](https://github.com/statsig-io/docs/assets/101903926/dee2680f-18b9-414e-a7a4-a4fd5c823b22)

### Converting an Existing Config into a Template 
If you create a new config that you think would be useful to more folks on the team as a template, you can convert an existing (or currently being created) config into a template. To do this, in the config you wish to templatize, tap the "..." menu and select **Save as Template**. This will prompt you to name your template and add a description before saving. 

![Screen Shot 2024-03-26 at 1 55 55 PM](https://github.com/statsig-io/docs/assets/101903926/4768129f-f91a-4697-aaf7-d9950cdde4d2)

![Screen Shot 2024-03-26 at 1 56 21 PM](https://github.com/statsig-io/docs/assets/101903926/790ed73e-d014-4163-abc2-caffaefaadc3)

## Managing Templates 
Templates can be managed via the **Templates** tab within **Project Settings**. Note that permissions for who can/ can't create or modify templates are managed via Statsig's Role-based Access Controls in the **Project Settings** -> **Members** -> **Roles**. By default Org and Project Admins can modify or delete any Template. 

![Screen Shot 2024-03-26 at 5 39 33 PM](https://github.com/statsig-io/docs/assets/101903926/0e77d362-a730-4939-844f-228a2982dbea)

## Creating Configs from Templates 
To create a config using a template, at the time of config creation, select a template to apply from the template selector. If templates are required at the Organization or Team-level, the user will be blocked from proceeding with config creation until they've selected an approved template. The list of template options in the drop-down is configured at the team level (see below). 

![Screen Shot 2024-03-26 at 5 52 15 PM](https://github.com/statsig-io/docs/assets/101903926/b6287605-3740-49a5-acf2-224642e0499b)

## Managing Templates- Settings & Permissions
