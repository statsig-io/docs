---
sidebar_label: Overview
title: Project Access Management
---

In the [Basic Settings page](https://console.statsig.com/24vDD6KOtLJqjrw1Y6oj4C/settings) you are able to configure who has access to your project. Each person invited to a project is assigned a Role that specifies their level of access.

## Roles 

The different Project Roles available are:

| Role | Description |
|-----------|-------------|
| Read-Only | Users with this role only have access to read data on the Project. This includes reading gate and dynamic config configurations, experiment data, and metrics. Any actions users with these roles take that attempt to edit the configuration for the Project will fail. |
| Member | Users with this role are able read data for a Project and are able to edit configurations within the Project. This includes being able to create and modify: Feature Gates, Dynamic Configs, Holdouts, Experiments+, etc. |
| Admin | Users with this role have the same access as `Members` but are additionally able to modify Project Access settings. This includes inviting new users to the Project and changing Roles for existing users of the Project. |
| Owner | Only the user that has created a project is given the Role of `Owner`. The Owner of a Project have the same access as `Admins` but are additionally able to delete the Project and configure automatic invitations for the Project. If you need to change the Owner of a project, please reach out to support@statsig.com. |

## Automatic Project Invitations

To simplify sending invitations for a Project, you can allow users creating a new Statsig account to automatically join your project if their work email domain matches the `Owner's`. For example, a Project Owner with an `@statsig.com` email can enable all new users signing up with an `@statsig.com` email to automatically join their project.

To enable this feature:

1. Go to your [Project Basic Settings page](https://console.statsig.com/24vDD6KOtLJqjrw1Y6oj4C/settings).
2. Click on the `Edit Project Settings` button.
3. Toggle the checkbox labeled `Anyone who signs up with the same email domain can join` and choose the role that users will be assigned to.

![image](https://user-images.githubusercontent.com/75151332/128581866-b5856f1d-9ac6-462d-a57e-22320a093457.png)