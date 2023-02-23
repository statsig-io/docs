---
title: Managing the Lifecycle of Feature Gates
sidebar_label: Managing Lifecycle
slug: /feature-gates/feature-gates-lifecycle
---

# Background

A feature can go through different phases throughout its lifecycle - maybe it’s still being tested out by a few users, or only recently fully rolled out to the world, or maybe it’s been tried and true and you no longer need the feature behind a toggle. 

Whatever phase the feature may be in, its gate should clearly reflect that, for a few important reasons - 

- **Prevent incidents**: prevent a scenario where old code for a deprecated feature is accidentally touched or repurposed, with real business consequences like how [Knight Capital lost half-a-billion dollars](https://www.statsig.com/blog/lose-half-a-billion-dollars-with-bad-feature-flags-knight-capital).
- **Maintain healthy codebase**: messy code base with dead references to flags mean that your team has more volume of code to navigate on a daily basis, and it can even slow down new developers onboarding.
- **Reduce mental load**: mental tracking of all your features is no longer necessary because you will be able to see easily what next steps you need to take for the product (e.g. launch or kill a feature), as well as not having to worry about old features that are no longer relevant.

# Managing the lifecycle of your feature gates on Statsig

Statsig makes it easy for your feature gates to reflect the phase your feature is in by using **status**. A gate can be in one of four statuses:

![image](https://user-images.githubusercontent.com/120431069/216169028-44ca6ce1-1300-44b6-9156-55ea52cd85ea.png)


| Status | What it represents | Implication |
|-------------|-----------------------|---------|
|   In Progress   | this feature is in the process of being rolled out and tested. | N/A; it’s the default status when you create a gate |
|   Launched   |  this feature has been safely rolled out to everyone | This gate will always return **default value = TRUE**, and will stop generating billable exposure events; you’ll stop incurring costs. The gate reference is likely safe to be cleaned up in the codebase |
|   Disabled         | this feature has been safely rolled back from everyone  | This gate will always return **default value = FALSE**, and will stop generating billable exposure events; you’ll stop incurring costs. The gate reference is likely safe to be cleaned up in the codebase |
|   Archived    | this feature is now a permanent part of your codebase (i.e. flag reference has been removed) | This gate has been receiving 0 checks for the last 7 days, and no checks will be sent this gate anymore |


### When/How to update the lifecycle

There are 3 points throughout the gate's lifecycle when you'd want to take action, either on Console or in your codebase: 

![image](https://user-images.githubusercontent.com/120431069/216169769-23062719-92da-4ae5-a437-935b2ef5b05c.png)


**1) The gate has been fully rolled out or rolled back, and you're ready to skip rule evaluation and assign default value (stop incurring costs for your gates)**

  - Go to the feature gate page and click on “…” menu on the upper right corner to select **Launch or Disable**. It will open up the following window -
    - **In Progress → Launch**: when the gate has been rolled out to 100% a while ago (we recommend >30 days), and you feel comfortable with the gate always returning TRUE
    - **In Progress → Disable**: when the gate has been rolled back to 0% a while go (we recommend >30 days), and you feel comfortable with the gate always returning FALSE


  - To find _all_ gates that are good candidates to be **Launched** or **Disabled** (i.e. have been rolled out to 100% or rolled back to 0% more than 30 days ago):
    - Go to Feature Gates catalog
      - Click on filter icon:
        - Status = In Progress
        - Pass Rate = 100% AND 0%
    - In the search bar: “Modified: <mm/dd/yyyy;” (update the date to be 30 days ago)
    
      ![image](https://user-images.githubusercontent.com/120431069/216164917-85a7da7a-2ee6-4ba5-8ca6-c6ced99516ee.png)

**2) You’re ready to clean up the gate reference from your codebase**
Confirm that the gate has been set to either **Launched** or **Disabled** (i.e. returning a default value) for a while (we recommend >60 days) so you don’t unintentionally break any rule evaluation and you’ve had enough time to ensure no negative impact on your metrics before you clean up the gate reference. Once confirmed,  
  
  - Go to your codebase and
    - for **Launched** gates: remove the gate reference (but leave the code related to the feature as a permanent fixture to the codebase)
    - for **Disabled** gates: remove the gate reference + all code related to the feature

  _Note: please confirm that these gates are not included in any active Holdouts before removing reference_

  - To find *all* gates that are good candidates to be removed from your codebase (i.e. have been **Launched** or **Disabled** more than 60 days ago)
    - Go to Feature Gates catalog
      - Click on filter icon: Status = **Launched** AND **Disabled**
      - In search bar: “Last modified: < dd/mm/yyyy” (update the date to be 60 days ago)

      ![image](https://user-images.githubusercontent.com/120431069/216166227-7e36df55-f540-4c74-a899-e0bfdfb808f6.png)


**3) After you’ve cleaned up the gate reference from your codebase**

- **Launched or Disabled → Archived:** you’ll want to update this status to mark that the gate has been removed from your codebase, so that it will be filtered out from the list of candidate gates to be cleaned up for the future (as part of step #2)
  - Go to the feature gate page and click on “…” menu on the upper right corner to select “Archive”. 
  
_Note: You can only archive feature gates that have not had any checks in the last 7 days, and archival cannot be undone._
  
- To find _all_ gates that should be marked as **Archived**:
    - Go to Feature Gates catalog
      - Click the filter icon:
        - Status = **Launched** or **Disabled**
        - Checks = 0 checks in last 7 days or 30 days, depending on your comfort level

      ![image](https://user-images.githubusercontent.com/120431069/216166665-b9ad6655-4c6e-4b66-8a65-8e94e98e3485.png)
      

# Managing permanent or long-term gates
Statsig also lets you mark some feature gates as **Permanent**. **Permanent** feature gates are expected to live in your codebase for an extended period of time, beyond a feature release, usually for operations or infrastructure control. Common examples include user permissions (e.g. premium features based on subscription level) or circuit breakers/kill switches (e.g. terminating a connection to prevent negative customer impact). To make your gates as **Permanent**, go to the individual feature gate page, click on the "..." menu and click on "Mark Gate Permanent".
  ![image](https://user-images.githubusercontent.com/120431069/220805873-1de86d6a-67a9-49ca-a608-76254e50db89.png)
### Implications of marking a gate as Permanent
  - New filter: you can now filter for **Permanent** gates in the metrics catalog
  - More caution in its management: while you are able to archive or delete a **permanent** feature gate, there will be a warning shown before proceeding

You will be able to change the gate back to **Temporary** (default) at any point. 

      
      
# FAQs

**What is the best practice for our team to do a feature gate cleanup?**
- We recommend having a quarterly “feature gate cleanup party”, where the team blocks out a chunk of time to identify all gates that need to be cleaned up (step #2) and remove the references from their codebase. One person can then follow up after 7 days to make sure all those gates are now receiving 0 checks on Statsig and can mark them as “Archived”. Overtime, your team should see more **Archived** gates than **Launched/Disabled/In Progress** gates.

**Who can make these status changes?**
- Consistent with any other changes to a gate, anyone will be able to make a change, but it will require the same review process for the change to be approved.

**Once my gate has been launched or disabled, can I re-enable rule evaluation for it?**
- Yes, once the feature gate is **Launched** or **Disabled**, you will see a banner with an option to re-enable rule evaluation. However, please note that once the feature gate has been **Archived**, it cannot be reversed.

**Just in case...What value will be returned if an archived feature gate is ever referenced from a codebase?**
- In that case, Statsig will return whatever the last default value was (if the flag was Launched or Disabled) or by default FALSE (if the flag went from In Progress -> Archived, and therefore never had a default value).

**When would I delete a feature gate?**
- We recommend that you use Delete only for mistakes. Deletion removes the gate and its history from Statsig, and having your Feature Gate Catalog retain history of your gates will help you see valuable information like velocity of your team’s feature releases, # of launches decisions made, etc.

**What if I want to re-use a feature gate that has been archived already?**
- Archival of a gate implies that any reference to the gate has been completely and permanently removed from your code. Therefore, as best practice, we recommend that you clone an archived gate, essentially creating a new gate with the same rules, instead of reusing a previously archived gate. 


