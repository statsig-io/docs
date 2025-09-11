---
title: Bigquery Connection
slug: /statsig-warehouse-native/connecting-your-warehouse/bigquery
sidebar_label: BigQuery
keywords:
  - owner:vm
last_update:
  date: 2025-07-23
---

## Overview

To set up a connection with BigQuery, there are two supported methods:

- Grant Permissions to a Statsig-owned Service Account 
- Provide Credentials for Your Own First-Party Service Account

In both cases, you'll need: 

- Your BigQuery Project ID
- The dataset Statsig will use to save temporary tables and materialized results

Once you’ve chosen your method, start by enabling the BigQuery source in your project settings.

## Grant Permissions to Statsig's Service Account

You need to grant some permissions for Statsig from your Google Cloud console in order for us to access your BigQuery data.

1. In your BigQuery's [IAM & Admin settings](https://console.cloud.google.com/iam-admin/), add the Statsig service account you copied in the Statsig Console as a new principal for your project, and give it the following roles:
   - `BigQuery User`

![image](https://user-images.githubusercontent.com/87334575/198107543-b3bcc19a-3231-4128-be42-a5dd52fb168a.png)

<br />

2. Navigate to your [BigQuery SQL Workspace](https://console.cloud.google.com/bigquery), choose the dataset, click on "+ Sharing" -> "Permissions" -> "Add Principal" to give the same Statsig service account "BigQuery Data Viewer" role on a dataset. Do this for any datasets you want the service user to be able to access.

   ![image](https://user-images.githubusercontent.com/77478330/175113611-90e618ad-f6e8-4005-933e-2a5660a14466.png)

3. Following the steps above, give the "BigQuery Data Editor" role on the dataset you want Statsig to use for its staging data.

Now the service account should have the required permissions to run queries and materialize results.

## Using a First Party Service Account
1. Speak with your Statsig technical point of contact and request enabling 1st party service account connectivity for Big Query

2. On the BQ service accounts page, click 'Manage Keys' for the service account you want to use

![BQ 1st party service account](/img/1stprtybq.png)

3. Create a new JSON key (which will download a JSON file)
![BQ 1st party service account](/img/1stprtybq2.png)
![BQ 1st party service account](/img/1stprtybq3.png)

4. Copy/paste the contents of that file into the Service Account Private Key field in the Statsig Console and save the connection


## BigQuery Project ID

Find your BigQuery Project ID below

1. Click on your Project Dropdown inside your Cloud Console.

![Frame 4](https://user-images.githubusercontent.com/108023879/187518062-7027f682-d1fd-445e-9947-897e44ea929e.png)

2. Copy and paste relevant Project ID from the modal pop-up.

![Frame 5](https://user-images.githubusercontent.com/108023879/187517901-9e7fd237-8325-4254-a1bd-c75f0ea08497.png)

### What is Statsig's Customer ID on BigQuery
C01d5f80s

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
