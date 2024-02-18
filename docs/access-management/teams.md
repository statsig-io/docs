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

For each team, there are a number of settings you can configure: 

- **Default Monitoring Metrics/ Scorecard Metrics:** This setting enables pre-configuration of a set of metrics to add to every new gate/ experiment/ holdout at the team level. These might be a mix of top-line company metrics every team must monitor (e.g. revenue/ app performance), as well as a set of team-specific KPIs all rollouts and experiments should be tracking. 
- **Default Allowed Reviewers:** This setting enables more granular control of *who* is allowed to review and approve changes to a team's configs. There are three options here- "Anyone in the Project" (least restrictive), "Team Members Only" (keep reviews within the team), and "Team or Project Admins Only" (most restrictive). 
- **Create/ Edit Configs and Metrics:** This setting dictates which members of a team are allowed to edit or create configs tagged with the team. There are two options here- "Anyone in the Project" (ie. no restrictions, anyone can edit the team's configs), or "Team Members Only". 
- **Default Target Applications:** This setting will auto-apply any assigned Target Applications to all configs created associated with this team. 


## How Teams are Used Throughout the Console 

Once a user is associated with a team, every config they create will now be default-associated with their team. For folks on multiple teams, they will be able to choose which team to associate their config with at creation time). This will apply the team’s relevant settings to that config. Every config will have a field in the header for “Team” (separate from “Owner”).
You’ll also now have the ability to filter Gate/ Experiment/ Metric listviews, Home Feed, etc. by Team.


