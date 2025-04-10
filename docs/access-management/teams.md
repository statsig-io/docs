---
sidebar_label: Teams
title: Teams
keywords:
  - owner:mseger
last_update:
  date: 2025-02-05
---
:::info 
Note- Teams are an Enterprise-only feature. If you are on the Developer or Pro tiers, this guide will not apply to you. To upgrade to Enterprise, feel free to reach out to our team [here](https://www.statsig.com/contact/demo).
:::

## Overview 
For larger organizations, the Teams feature enables an organizational and settings/ permissions layer on top of a Project. Teams are configured at the Project (not Organization) level, and are default-editable by all Project Admins. 

Once teams are configured and a user is assigned to a team, any config (gates/ experiments/ metrics, etc.) they create will be associated with the team they belong to, and will inherit the settings of that team. Users who are members of multiple teams will have the choice of which team to associate their config with at creation time. 

## Creating Teams 

To create a team, navigate to **Settings** -> **People** -> **Teams**. Create a new team via the **+Create** button, where you'll be asked to name the team and add members. You can add/ remove members from a team at any time, not just at initial team creation. 

Each team has a **Members** page and a **Settings** page. Within **Members** you can see all members of the team, including the team members project role and team role (which can be member or admin). Team members can be promoted or removed.

![img](/img/team_create_1.png)

## Configuring Team Settings 

At the Project-level, you can require all config creations are associated with a team via the "Require teams" setting under **Settings** -> **Product Configuration** -> **General**. Note that this will block anyone who isn't yet assigned to a team from creating a config, so should only be enabled after all members of the project have been added to (at least) one team. 

![Screen Shot 2024-04-24 at 4 35 31 PM](https://github.com/statsig-io/docs/assets/101903926/d11ed451-7fff-4031-b117-4cd05cb3b960)


Within each team, there are a number of settings you can configure: 

**Default Monitoring Metrics/ Scorecard Metrics:** This setting enables pre-configuration of a set of metrics to add to every new gate/ experiment/ holdout at the team level. These might be a mix of top-line company metrics every team must monitor (e.g. revenue/ app performance), as well as a set of team-specific KPIs all rollouts and experiments should be tracking. 

<img width="881" alt="Screen Shot 2024-02-17 at 4 24 12 PM" src="https://github.com/statsig-io/docs/assets/101903926/16f0ccfd-05d6-4fb2-8992-ec8780ff3778"/>

**Require Reviews:** If reviews are not already required at the Project-level, this setting enables you to require reviews at the individual team level. Note that this setting won't appear if you're already requiring reviews at the Project level (controlled via **Settings** -> **Product Configuration** -> **Reviews**).  

![Screen Shot 2024-04-24 at 4 41 39 PM](https://github.com/statsig-io/docs/assets/101903926/554e0f6a-c9ce-466a-b5a4-db94b0cb24fa)


**Default Allowed Reviewers:** This setting enables more granular control of *who* is allowed to review and approve changes to a team's configs. There are three options here- "Anyone in the Project" (least restrictive), "Team Members Only" (keep reviews within the team), and "Team or Project Admins Only" (most restrictive). 

Note that team-based review configurations layer on top of [role-based review settings](/guides/setting-up-reviews#enforcing-team-reviews). For example, if your role has permission to approve reviews and your team has review settings set to “Team members only”, then an approver would need to both be in a role with review approval permission AND be on the team to approve a review pending for that team’s config. 

<img width="924" alt="Screen Shot 2024-02-17 at 4 24 50 PM" src="https://github.com/statsig-io/docs/assets/101903926/39263840-cb37-4286-b30a-c6d255f218d0"/>

**Create/ Edit Configs and Metrics:** This setting dictates which members of a team are allowed to edit or create configs tagged with the team. There are two options here- "Anyone in the Project" (no restrictions, anyone can edit the team's configs), or "Team Members Only".


<img width="919" alt="Screen Shot 2024-02-17 at 4 24 59 PM" src="https://github.com/statsig-io/docs/assets/101903926/df517c17-acdd-4516-a9ee-bc612a0bfdc9"/>

**Default Target Applications:** This setting will auto-apply any assigned Target Applications to all configs created that are associated with this team. Note that this only impacts which Target Applications are added to the config by default at creation time, but can be edited/ overridden as needed. 

![Screen Shot 2024-04-24 at 4 43 43 PM](https://github.com/statsig-io/docs/assets/101903926/2cf75c17-9441-4645-beef-feb57578fb46)

**Default Holdout:** It's a common use-case for teams to want to measure cumulative impact of their new features/ experiments over the course of a Quarter/ Half, etc. To make this easier and more automatic, you can associate a default Holdout to a team. This will cause all subsequent configs associated with the team will be auto-added to this default Holdout. 

![Screen Shot 2024-04-24 at 4 48 00 PM](https://github.com/statsig-io/docs/assets/101903926/8f5a2226-c716-4882-939a-8ba53e852b22)


## How Teams are Used Throughout the Console 

Once a user is associated with a team, every config they create will now be default-associated with their team. For users on multiple teams, they will be able to choose which team to associate their config with at creation time. This will apply the team’s relevant settings to that config. 

![Screen Shot 2024-02-15 at 3 10 45 PM](https://github.com/statsig-io/docs/assets/101903926/dbdc681d-3918-4da1-b9e3-6e43ecb744f8)


Every config will have a field in the header for “Team”. This field is separate from “Owner"- whereby "Owner" is a single individual, "Team" is a group of individuals and will not automatically update if, for example, the Owner moves to a different team within the organization. Teams must be manually changed (subject to the review requirements) at the config level. 

![Screen Shot 2024-02-15 at 3 12 18 PM](https://github.com/statsig-io/docs/assets/101903926/7fc0faf7-c059-451b-8a44-6f58e526ef8e)


Finally, with the addition of teams, every user can now filter Gate/ Experiment/ Metric lists and the Home Feed by team. The Home Feed will default to a user's team(s), ensuring the most relevant content is surfaced. 

![Screen Shot 2024-02-15 at 3 09 23 PM](https://github.com/statsig-io/docs/assets/101903926/299cc0ad-5878-454b-9186-e005f8f442b5)

