---
sidebar_label: Setting up Reviews
title: Setting up Reviews for Team Workflows  
keywords:
  - owner:shubham
last_update:
  date: 2025-07-23
---

You can enable reviews for all Statsig resources such as feature gates, dynamic configs, segments, and experiments that you'll likely deploy to a production environment. 

### Turning on Change Reviews for a Project
As a Project Admin, you can configure your project to require reviews for any changes. To enable reviews for your project, navigate to the **Project Settings** page, switch to the Reviews tab and toggle this on.

![image](https://github.com/statsig-io/docs/assets/31516123/45a439b5-7cf7-4f32-82d0-596c089f2359)

- You can optionally allow different roles to bypass the review requirement and self-approve review requests by customizing the permissions available to user roles:
 
![image](https://github.com/statsig-io/docs/assets/31516123/4b7db056-a6be-4a76-99c9-08f8dc053ed8)

- Now when you make any configuration changes, say to a feature gate or experiment, you'll be asked to **Submit for Review**; you can add reviewers when you submit the change for review

<img width="1168" alt="Screen Shot 2022-05-04 at 5 08 21 AM" src="https://user-images.githubusercontent.com/1315028/166678241-272adade-ca60-4942-bd04-a1413d54864c.png"/>

- Reviewers will now see a notification on the Statsig console as shown below. When they click on **View Proposed Changes**, they will see a diff of the *current version* in production and *new version*. Reviewers can now **Approve** or **Reject** the submitted changes.

![propsed changes](/img/proposed_changes.png)

![example review](/img/example_review_page.png)


### Teams
To create a predefined group of reviewers, you can create Teams
![image](https://github.com/statsig-io/docs/assets/31516123/1b1c72a9-ac98-4590-8690-c39d2e68489a)

You can now use these predefined **Teams** when you submit any changes for review.

![image](https://user-images.githubusercontent.com/1315028/166684577-29598c7f-fcba-4c7e-848d-9a45b031bd79.png)

### Enforcing Team Reviews
You can _a priori_ restrict who can make changes to your Project by (a) turning on **Reviews Required** for your Project and (b) adding designated **Teams** or **Reviewers** when you create the Feature Gate or Experiment. 

For (a), see section **Turning on Change Reviews for a Project** to turn on project-wide reviews. For (b), as an owner of a Feature Gate or Experiment, you can add designated **Teams** or **Reviewers** at any time as shown below. This ensures that only these designated groups or members can review and approve any subsequent changes. When another member now tries to edit these designated review groups/reviewers, this will require approval from currently designated reviewers. 

<img width="655" alt="image" src="https://user-images.githubusercontent.com/1315028/166682283-c9e2de57-0b9a-473e-adf2-100a240ab6b0.png"/>

<img width="458" alt="Screen Shot 2022-05-04 at 5 14 57 AM" src="https://user-images.githubusercontent.com/1315028/166682177-d44411e6-c4ab-49fe-9250-c77b063621af.png"/>


### Configuring Review Settings for Different Environments 
Many teams build, test, and launch new features and experiments across multiple development environments. Statsig makes creating and using environments in feature launches easy via our [Environments support](/guides/using-environments#configuring-environments). 

You can also configure which environments require reviews via your **Project Settings**. To do so, go to **Project Settings** --> **Keys & Environments**  --> tap **Edit** on **Environments**. 

By default if you have turned on "Reviews Required" for your Project, reviews will be required for Production, but not non-Production (lower) environments. 

![Screen Shot 2023-04-11 at 9 47 12 AM](https://user-images.githubusercontent.com/101903926/231233087-5b87310d-b33b-456e-b1a7-7a73555c8100.png)

![Screen Shot 2023-04-11 at 9 48 02 AM](https://user-images.githubusercontent.com/101903926/231233356-967c9785-5a89-4cac-a04a-e3f11cb7bb12.png)

### Configuring Custom Approval Workflows (Pre-commit Webhooks)
If you prefer to leverage an internal approvals workflow or, for example, want to run proposed config changes through a suite of automated tests before they go live, you can leverage **Pre-commit Webhooks**. Pre-commit Webhooks enable you to listen for config changes on the Statsig side, route those changes through internal approval processes, test suites, etc. and then leverage Console API to send back either a review approval or rejection before final changes can be committed. 

To set up the webhook itself, navigate to **Settings** -> **Integrations** -> **Webhook**. 
<img width="797" height="898" alt="Screen Shot 2025-09-11 at 1 45 28 PM" src="https://github.com/user-attachments/assets/c798d95a-5643-4746-b34c-bfdf9eb7e68d" />

To enable the Pre-commit Webhook experience: 
1. Configure change validations via Console API, see documentation [here](https://docs.statsig.com/console-api/change-validation/). 
2. Configure the experience for Statsig Console users via **Settings** -> **General**, where you will be able to configure the "Pending State" banner text, URL, and a Pre-commit Webhook key for verification purposes.

<img width="495" height="335" alt="Screen Shot 2025-09-11 at 1 46 56 PM" src="https://github.com/user-attachments/assets/49c408da-0910-4a90-9ee3-7d1e114c9013" />
<img width="497" height="259" alt="Screen Shot 2025-09-11 at 1 47 08 PM" src="https://github.com/user-attachments/assets/a01617b2-3bb0-4f20-a505-b9318dd220a7" />


Now, when a change is made in the Statsig Console, Statsig hits the customer’s configured webhook with the proposed changes. The change in Statsig will be pending until the customer approves the review via Console API (after their internal checks are complete). Statsig exposes an option for Project Admins (only) to bypass this process and commit the changes directly. 



