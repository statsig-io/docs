---
title: User Property
sidebar_label: User Property
slug: /metrics/user-property
keywords:
  - owner:shubham
last_update: 2023-12-15 11:21:46 -0800
---

It is  helpful to be able to break down Pulse results by user properties like Free vs Paid, or OS type. Setting User Property lets you slice data by properties like this. 

You set user property when you create the User object you use with the Statsig SDK. These are frozen when a user is first exposed to a feature gate or experiment - in case your experiment ends up changing these properties (e.g. convert a Free user to Paid). 

![image](https://user-images.githubusercontent.com/31516123/226679274-01705500-48ee-44d4-8a5c-cbc49d97d0b2.png)

You can run custom queries on your Pulse results (Explore tab) to group by or filter by these User Property.
![image](https://user-images.githubusercontent.com/31516123/226679816-5c7d393f-80e2-4670-8978-fc607b5fbe1a.png)
