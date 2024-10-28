---
title: Athena (β)
slug: /statsig-warehouse-native/connecting-your-warehouse/athena
sidebar_label: Athena (β)
---

:::info
Statsig Warehouse Native on Athena is in Beta. Some features available elsewhere (Custom Pulse Queries, Incremental Reloads and Metrics Explorer) are not available for this warehouse just yet but are coming soon.  
:::


## Overview

To set up connection with Athena, Statsig needs the following

- Region
- Granting Athena Access Permissions to a Statsig-owned Service Account through an IAM Role

In place of granting Athena Access Permissions to a Statsig-owned Service Account, you can also provide the following:

- IAM User Access Key
- IAM Secret Access Key

## Grant Permissions to Statsig

You need to grant some permissions for Statsig from your AWS console in order for us to access your Athena data. Statsig requires
 - READ on any tables you are using for experimentation
- USAGE/WRITE on a Statsig-specific Schema we'll use to materialize temp tables and results. This enables us to cache data and perform incremental loads. 


1. Create an (**A**) IAM Role, or (**B**) IAM User

   (**A**) IAM Role
      - In your AWS IAM Dashboard, select the Roles page under the Access Management tab
      - Create a new Role
      - Under the Trust Relationships tab of this newly created Role, edit the trust policy to include the Assume Role action for the provided Statsig Service Account. Optionally, add a condition using the provided External ID for added security ([AWS External ID Docs](https://aws.amazon.com/blogs/security/how-to-use-external-id-when-granting-access-to-your-aws-resources/))
         ```
         {
            "Version": "2012-10-17",
            "Statement": [
               {
                  "Effect": "Allow",
                  "Principal": {
                     "AWS": "<STATSIG_SERVICE_ACCOUNT>"
                  },
                  "Action": "sts:AssumeRole",
                  "Condition": {
                     "StringEquals": {
                        "sts:ExternalId": "<ROLE_EXTERNAL_ID>"
                     }
                  }
               }
            ]
         }
         ```

   (**B**) IAM User
      - In your AWS IAM Dashboard, select the Users page under the Access Management tab
      - Create a new User
      - Under the Security Credentials tab of this newly created User, find the Access Keys block
      - Select Create Access Key, and choose 'Application running outside AWS' from the Use Case options

   ![image](https://github.com/statsig-io/docs/assets/152932686/c0f762fe-2963-45ca-9424-5399671d53e5)

2. Under the Permissions tab for your newly created Role/User, add the Permission Policies outlined below:
   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Effect": "Allow",
            "Action": [
               "s3:ListBucket",
               "s3:GetBucketLocation",
               "s3:GetObject",
               "s3:PutObject",
               "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::<S3_BUCKET>"
         },
         {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<S3_BUCKET>/<PATH_TO_EVENTS_AND_EXPOSURES_DATA>/*"
         },
         {
            "Effect": "Allow",
            "Action": [
               "glue:GetTable",
               "glue:GetDatabase",
               "glue:GetPartition",
               "glue:GetPartitions"
            ],
            "Resource": [
               "arn:aws:glue:<REGION>:<ACCOUNT_ID>:database/<EVENTS_AND_EXPOSURES_DATABASE>",
               "arn:aws:glue:<REGION>:<ACCOUNT_ID>:table/<EVENTS_AND_EXPOSURES_DATABASE>/*"
            ]
         },
         {
            "Effect": "Allow",
            "Action": [
               "s3:GetObject",
               "s3:PutObject",
               "s3:DeleteObject",
               "athena:StartQueryExecution",
               "athena:GetQueryResults",
               "athena:GetQueryExecution",
               "glue:GetTable",
               "glue:CreateTable",
               "glue:UpdateTable",
               "glue:DeleteTable",
               "glue:GetPartition",
               "glue:GetPartitions",
               "glue:CreatePartition",
               "glue:UpdatePartition",
               "glue:DeletePartition",
               "glue:BatchCreatePartition",
               "glue:BatchDeletePartition",
               "glue:GetDatabase"
            ],
            "Resource": [
               "arn:aws:s3:::<S3_BUCKET>/<PATH_TO_QUERY_RESULTS_FOLDER>/*",
               "arn:aws:s3:::<S3_BUCKET>/<STATSIG_S3_FOLDER>/*",
               "arn:aws:athena:<REGION>:<ACCOUNT_ID>:workgroup/<ATHENA_WORKGROUP>",
               "arn:aws:glue:<REGION>:<ACCOUNT_ID>:catalog",
               "arn:aws:glue:<REGION>:<ACCOUNT_ID>:database/<GLUE_STAGING_DATABASE>",
               "arn:aws:glue:<REGION>:<ACCOUNT_ID>:table/<GLUE_STAGING_DATABASE>/*"
            ]
         }
      ]
   }
   ```

## Setup Athena Query Flow

1. Create or choose an Athena database to use

   ![image](https://github.com/statsig-io/docs/assets/152932686/e10aafc4-3583-400e-9c7b-8a8b891a23e9)

2. Choose an S3 location folder for query results to be stored

   ![image](https://github.com/statsig-io/docs/assets/152932686/4bec0c87-5ccd-4936-997e-7a0bb8b9ccb3)

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
