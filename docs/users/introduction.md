---
title: Users
sidebar_label: Introduction
slug: /users
---

The Users tab gives you a view of how each user experiences your features and how their gate checks evaluated.

## How the Users tab works 
The data in the Users tab is populated automatically when users are evaluated by the Statsig SDK. You can filter and search for specific users and see gate evaluations and recent events. Data is refreshed daily. Few things to note:
- For user metadata such as email address, IP, etc we show the most commonly occuring value in cases where the user has had events with multiple different values
- We only show events from the last 3 days (capped at a max of 10 events per users) - we will be adding support for pulling more data for a user shortly!
- The list of Feature Gates, Experiments, and Dynamic Configs for a user reflects those that the user has had at least one exposure to - it does not guarantee that the user will continue to be a part of those in subsequent visits to your product, since the rules for your Feature Gates and Experiments can change, and the user attributes that those depend on could also change.