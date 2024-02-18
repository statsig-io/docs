---
sidebar_label: Teams
title: Teams
---
:::info 
Note- Teams are an Enterprise-only feature. If you are on the Developer or Pro tiers, this guide will not apply to you. To upgrade to Enterprise, feel free to reach out to our team [here](https://www.statsig.com/contact/demo).
:::

## Overview 
For larger organizations, the Teams feature enables an organizational and settings/ permissions layer on top of a Project. Teams are configured at the Project-level (not Organization-level), and are default-editable by all Project Admins. 

Once teams are configured and a user is assigned to a team, any config they create (gates/ experiments/ metrics, etc.) will be associated with the team they belong to, and will inherit the settings of that team. Users who are members of multiple teams will have the choice of which team to associate their config with at creation time. 

## Creating Teams 

To create a team, navigate to **Settings** -> **Members** and toggle to the **Teams** tab. Create a new team via the **+Create** button, where you'll be asked to assign the team a name and select its members. You can add/ remove members from a team at any time, not just at initial team creation. 

Each team has a **Members** and **Settings** tab. Within **Members** you can see all members of the team, including whether a member is a Team Admin or Project Admin (Project Admins have "super Admin" powers and can modify any team). 

<img width="1279" alt="Screen Shot 2024-02-17 at 4 05 18 PM" src="https://github.com/statsig-io/docs/assets/101903926/2e82dc9a-72d2-4c22-aa18-2e6231cf82d1">


## Configuring Team Settings 
Enterprise customers can customize roles used to assign permissions in Statsig. You can create new roles beyond Admin, Member and Read-Only and choose what permissions these roles have. Common use cases include creating a Metrics Admin role or a Warehouse Admin role (for Statsig Warehouse Native).
![image](https://github.com/statsig-io/docs/assets/31516123/bd3d4fac-9753-44ff-87ac-2ce1b30bdbea)


## How Teams are Used Throughout the Console 

To simplify sending invitations for a Project, you can allow users creating a new Statsig account to automatically join your project if their work email domain matches the `Owner's`. For example, a Project Owner with an `@statsig.com` email can enable all new users signing up with an `@statsig.com` email to automatically join their project.

To enable this feature:

1. Go to your [Project Basic Settings page](https://console.statsig.com/24vDD6KOtLJqjrw1Y6oj4C/settings).
2. Click on the `Edit Project Settings` button.
3. Toggle the checkbox labeled `Anyone who signs up with the same email domain can join` and choose the role that users will be assigned to.

![image](https://user-images.githubusercontent.com/75151332/128581866-b5856f1d-9ac6-462d-a57e-22320a093457.png)

