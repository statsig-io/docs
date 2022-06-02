---
title: Users
sidebar_label: Users
slug: /users
---

The Users tab gives you a view of how each user experiences your features and how their gate checks evaluated.

## How the Users tab works 
The data in the Users tab is populated automatically when users are evaluated by the Statsig SDK. You can filter and search for specific users and see gate evaluations and recent events. Data is refreshed daily. Few things to note:
- For user metadata such as email address, IP, etc we show the most commonly occuring value in cases where the user has had events with multiple different values
- We don't preload all the event history for a user by default - but if you go to the page for the user and click "Load Data", we will load the last 14 days of log events and exposures for the user, and send you a notification when the data is ready to be viewed!

View of all of your users for a given unit type:
![Screen Shot 2022-06-02 at 9 23 05 AM](https://user-images.githubusercontent.com/88338316/171677950-ce389ff5-61f7-4359-903a-c7f1fa70ac33.png)
View for a specific user, before data is loaded:
![Screen Shot 2022-06-02 at 9 23 39 AM](https://user-images.githubusercontent.com/88338316/171678008-0f861b64-ec4b-429e-b4f0-d0ff074ad6d5.png)
View after data for a user has been loaded:
![Screen Shot 2022-06-02 at 9 28 45 AM](https://user-images.githubusercontent.com/88338316/171678859-aed3316d-240a-445b-aeb7-a789d8556a05.png)

## Unit Types
The Users Tab is filtered by unit type.  Use the drop down selector to view users or units based on each of the unit types available for the project.

![image](https://user-images.githubusercontent.com/90343952/148592563-da1c3d41-4df8-4953-840f-f5baf8b0b94c.png)
