---
sidebar_label: Segments
title: Segments
---

Segments allow you to predefine and name a set of users.  You can then target these sets of users by their Segment name in Feature Gates and Dynamic Configs.

It is common to create a segment for a set of users you are likely to reference in multiple gates. You can save this user list in a single Segment and reference it in all the gates that need to refer to this list of users. Common examples of Segments include 
1. UX_Devs : Use this to target gates to named list of developers working on UX features - using a named list of user ids.
2. Employees : Use this to target gates for internal employees, where email address contains your company domain.
3. Beta_Users : Use this to target gates that expose beta features, where a custom field "beta" is true. Your app can set custom fields on the user object before calling the Statsig SDK to evaluate gates. These custom fields can be used in the rule sets used to evaluate gate results.


![Screen Shot 2021-08-05 at 11 26 08 AM](https://user-images.githubusercontent.com/74584483/128402255-56d53f55-8960-476d-b1da-0cc171f38f81.png)
