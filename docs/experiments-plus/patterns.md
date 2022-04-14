---
title: Common Patterns
slug: /experiments-plus/patterns
---

Most experiments target users within a mobile app or a website. The userID is the unit of randomization and assignment - aka bucketing. This is what Experiments on Statsig default to. 

There are many, more sophisticated experiments that Statsig enables. Some common patterns we see include

### Experimenting on Anonymous Users
Some websites expect to support only anonymous users (e.g. a public marketing website). Some might support both anonymous and authenticated users (eg. an ecommerce website may not need signing in to add items to your cart; but may need this to check out). Sophisticated marketing acquisition teams go beyond measuring the conversion funnel of new user creation. They measure how engaged these new users are 30 days later - to make sure they're adding engaged users - not just more signups.

Statsig supports these via "device experiments". The Statsig Client SDKs creates and persists a StableID on the device. This ID acts as the unit of randomization - and ties events generated back to this device. Read more about user level vs device level experiments https://blog.statsig.com/user-level-vs-device-level-experiments-with-statsig-338d48a81778 or create one here https://docs.statsig.com/experiments-plus/create-new#device-level-and-custom-id-experiments



### Experimenting on Organizations 
B2B businesses want to use the organization as the unit of experimentation - not users. They want to be able to turn features on and off by organization - so all users within the same org get a consistent experience. This lets them measure how these org-wide features impact trial to paid conversion or deepen engagement within orgs.

Statsig supports this by Create a custom ID https://docs.statsig.com/guides/experiment-on-custom-id-types called orgID - and pick this unit type on your Experiment. You can associate events you log with this orgID so metrics are rolled up by org for analysis.


### Email or Notification campaign experiments
When trying to reactivate dormant users it is common to create a list of dormant users and then A/B test treatments on them to measure effectiveness.

This typically involves running a list of users through an offline A/B assignment before running a email or notification campaign. 

To do this, write a script that calls a Statsig Server SDK of your choice and does something like this

  
for (const user of allUsers) {
const inExp = statsig.getExperiment(user, "email_list").get("param_name", false)

 if (inExp) {
   expList.push(user.userID)
 }
}
// send the email to everyone in expList


### Experiments explicitly targeting devices
Many 




