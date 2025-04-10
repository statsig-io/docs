---
title: Practical Use Cases
slug: /statsig-warehouse-native/features/use-case
sidebar_label: Practical Use Cases
keywords:
  - owner:vm
last_update:
  date: 2025-01-28
---

## How can I define and filter results to 'new users' only?

### Scenario
I want to filter the experiment results to new users only: A user is 'new' if they had never visited the website before they were exposed to this experiment. In other words, if the first time that they visited the website was after the exposure timestamp in this experiment, they were 'new users'; otherwise they were existing users. 

### Solution

Assuming you have a logging table which contains every time when a user visits the website and relative timestamp `logging`, and you have another table with all user's user_id `user`. First, you need to create an Entity Property with the following logic: 
```
select distinct
  user_id,
  'new' as new_user,

  timestamp('1900-01-01') as timestamp
from user -- you can add filters here to include only targeted population only
union all
select distinct
  user_id,
  'existing' as new_user,
  timestamp as timestamp
from logging
```
Click Run Query and will return a table like this. Click Save Results, then you can directly use this Entity Property across all experiments/gates to filter or group experiment results by whether they are a new users or not. 

|    user_id    |    new_user    |         timestamp         |
| ------------- | -------------- | ------------------------- |
|       A       |       new      | 1900-01-01T00:00:00+00:00 |
|       A       |    existing    | 2024-01-01T10:10:18+00:00 |
|       B       |       new      | 1900-01-01T00:00:00+00:00 |  



------


## How can I analyze logged-in metrics when my experiment exposures are at logged-out grain? 

### Scenario
I want to run an experiment to find out which version of my website design leads to a higher signup rate among new visitors. The experiment assignment will occur when a logged-out user visits my website, and they will be exposed to one of the design variants.

When a user decides to sign up, a new and unique logged-in user ID will be generated for them. To calculate the conversion rate (CVR) accurately and consistently, I need a reliable way to map the logged-out IDs to the corresponding logged-in IDs. This will allow me to attribute each signup to the correct experiment variant and evaluate which design performs better in driving conversions. 

### Solution
Each suited to different business scenarios, two commonly used approaches for achieving the mapping supported by Statsig are:

**- Strict 1:1 Mapping:**  This approach only keeps records where there is a *unique, unambiguous* mapping between the logged-out ID and the logged-in ID. Any records with duplication (e.g., multiple logged-out IDs mapping to the same logged-in ID or vice versa) are discarded. It's recommended when accuracy and clarity are the top priorities for your experiments, and when data duplication is rare. 

**- First Touch Mapping:** For cases where a logged-in ID maps to multiple logged-out IDs, retain only the first association and discard the rest. It is better suited for scenarios where you want to preserve as much data as possible, and duplications are common in your business settings (e.g., users frequently access the website from multiple devices or sessions).

For whichever mapping approach, you will need to create a mapping between the logged-out id and the logged-in id by either setting up an Entity Property with both IDs present or creating an exposure assignment source with columns for both ID types.

#### Step 1 - Advanced settings for your experiments 
When setting up your experiment, under the *Setup* tab within your experiments, go to *Advanced Settings* and pick your Secondary ID type (the log-in userid in this scenario). 
![Screenshot 2025-01-27 at 11 44 05 AM](https://github.com/user-attachments/assets/76f83c44-0389-4441-a5fc-bf29b9cab119)

#### Step 2 - Identify the mapping mode that suits your need 
![Screenshot 2025-01-27 at 11 47 59 AM](https://github.com/user-attachments/assets/e49a030e-4933-4019-80f3-812c46cdd493)

#### Step 3 - Choose your Entity Property Source 
<img width="1014" alt="Screenshot 2025-01-27 at 4 51 47 PM" src="https://github.com/user-attachments/assets/abceaaf3-b15d-481e-9e7f-abc8a5c2cef3" />

- **[Recommended]** Create a new Entity Property Source for your ID Resolution mapping if you haven't already.

  Go to Data -> Entity Properties. Follow the steps, you can either enter an existing table with the ID mappings or write a new query to create the mappings with the following logic:
  ```
  SELECT stable_id, user_id, timestamp
  FROM id_mapping
  ```

- You can also choose **"None"** by using your assignment source for the mapping.
  
  Create your new assignment source by going to Data -> Assignment Sources. Note that this is not recommended because it can get more complex to manage if you start to increase the scale of your experiments. 



