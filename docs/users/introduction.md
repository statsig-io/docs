---
title: Users
sidebar_label: Users
slug: /users
---

The Users tab enables you to diagnose issues for specific IDs, by helping answer questions like "which experiment group was this ID in?" Or "when did this ID first see this feature?" It also provides a handy interface to override a specific ID into/ out of different gate and experiment treatments. 

## How the Users tab works 
When you enter the User's tab, you specify which ID's data to load. To do this, you'll need to enter both the ID and ID type you're looking for. You'll be blocked from submitting a query until you enter both of these inputs. 

A Users Tab query surfaces the following information: 

- **ID Properties-** Additional context around this ID
- **Log History & Event Details-** History of events and exposures for this ID, limited to 5000 rows
- **Overrides-** Ability to manually override a given ID into a given feature gate or experiment variant 

## Override Controls from the Users Tab 
The Users tab surfaces a list of all entities, along with the ability to override an ID into a given experiment variant or feature gate rollout. If there is already an active override for an ID on a particular entity, this will be surfaced within this section (and can be modified inline). Any overrides set in the Users Tab will be synced to the "Overrides" section of the entity in question (and can be edited/ removed from this interface as well). 

![Screen Shot 2023-12-01 at 2 36 50 PM](https://github.com/statsig-io/docs/assets/101903926/3b6c5f66-b76e-4472-9023-ecf1090183ba)
![Screen Shot 2023-12-01 at 2 36 58 PM](https://github.com/statsig-io/docs/assets/101903926/29595907-1b4d-4da4-b1bd-feccdbdbf06c)
