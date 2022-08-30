---
title: Users
sidebar_label: Users
slug: /users
---

The Users tab enables you to diagnose issues for specific users, by helping answer questions like "which experiment group was this user in?" Or "when did the user first see this feature?"

While Events Explorer is useful for looking at macro trends across your product using sampled data, the users tab seeks to give you complete insight into all of the (unsampled) data of a particular user, in up to near real time.

## How the Users tab works 
When you enter the User's tab, you have to specify which user's data to load.  Click "Load Users", select the ID type, and input a set of IDs to load data for.  We don't preload all the event history for a user by default - once you click "Load Data", we will load the last 14 days of log events and exposures for the user, and send you a notification when the data is ready to be viewed.

![image](https://user-images.githubusercontent.com/74584483/187556572-734a4e94-791c-4d0e-bc21-6ab72e8a106a.png)
