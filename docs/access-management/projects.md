---
sidebar_label: Projects
title: Project Access Management
keywords:
  - owner:shubham
last_update:
  date: 2025-03-21
---
:::info 
Note- This guide applies only to our on-demand customers. If you are an organization who has set up SSO, this guide will not apply to you. Please see our [SSO Guides](/access-management/sso/overview) for more information about how to manage access permissions through SSO. 

:::

In the [Basic Settings page](https://console.statsig.com/24vDD6KOtLJqjrw1Y6oj4C/settings) you are able to configure who has access to your project. Each person invited to a project is assigned a Role that specifies their level of access. 

## Roles 

The different Project Roles available are:

| Role | Description |
|-----------|-------------|
| Read-Only | Users with this role only have access to read data on the Project. This includes reading gate and dynamic config configurations, experiment data, and metrics. Any actions users with these roles take that attempt to edit the configuration for the Project will fail. |
| Member | Users with this role are able read data for a Project and are able to edit configurations within the Project. This includes being able to create and modify: Feature Gates, Dynamic Configs, Holdouts, Experiments+, etc. |
| Admin | Users with this role have the same access as `Member` but are additionally able to modify Project Access settings. This includes inviting new users to the Project and changing Roles for existing users of the Project. |
| Owner | Only the user that has created a project is given the Role of `Owner`. The Owner of a Project has the same access as `Admin` but is additionally able to delete the Project and configure automatic invitations for the Project. If you need to change the Owner of a project, the current owner can change it by going to Settings -> Project Members & Invites -> select the person and edit role to be Owner. |

## Custom Roles
Enterprise customers can customize roles used to assign permissions in Statsig. You can create new roles beyond Admin, Member and Read-Only and choose what permissions these roles have. Common use cases include creating a Metrics Admin role or a Warehouse Admin role (for Statsig Warehouse Native).
![image](https://github.com/statsig-io/docs/assets/112416832/1b5a0601-6311-401e-87e3-5d1055a025e7)

## Automatic Project Invitations

To simplify sending invitations for a Project, you can allow users creating a new Statsig account to automatically join your project if their work email domain matches the `Owner's`. For example, a Project Owner with an `@statsig.com` email can enable all new users signing up with an `@statsig.com` email to automatically join their project.

To enable this feature:

1. Go to your [Project Basic Settings page](https://console.statsig.com/24vDD6KOtLJqjrw1Y6oj4C/settings).
2. Click on the `Edit Project Settings` button.
3. Toggle the checkbox labeled `Anyone who signs up with the same email domain can join` and choose the role that users will be assigned to.

![image](https://user-images.githubusercontent.com/75151332/128581866-b5856f1d-9ac6-462d-a57e-22320a093457.png)
