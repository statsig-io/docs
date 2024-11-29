---
title: Athena (β)
slug: /statsig-warehouse-native/connecting-your-warehouse/athena
sidebar_label: Athena (β)
---

:::info
Statsig Warehouse Native on Athena is in Beta. Some features available elsewhere (Metrics Explorer) are not available for this warehouse just yet but are coming soon.  
:::

## Overview

To set up connection with Athena, Statsig needs the following

- An S3 Bucket
- A Glue Database for staging
- An S3 Query Result Location
- Athena Access Permissions (can be via an AWS Role or an AWS User)

## Setup Statsig Staging Structure

1. Create or choose an S3 Bucket. Statsig will use a subfolder inside this S3 Bucket to store all staging data. Statsig will only have write-access to this scoped subfolder of this S3 Bucket (specifically labeled `Statsig S3 Folder` in your Data Connection settings).
2. Create or choose a Glue Database (can be `default`). Statsig will use this as a staging Database to create and manage tables. Statsig will only be able to drop/create tables within this staging Database.
3. Choose an S3 Query Result Location folder within the S3 Bucket. This S3 location will act as the Output Location for SELECT queries run in your Athena Warehouse. This Location can be given either:
   - Explicitly as an S3 location (ex: `s3://my_bucket/my_query_results_folder/`)
   - OR as part of a setting within an Athena Workgroup
     - NOTE that your workgroup must have the 'Query result location' field populated accordingly
4. Add this information, along with your AWS Region, to your Data Connection settings in the Statsig Console.

## Grant Permissions to Statsig

You need to grant some permissions for Statsig from your AWS console in order for us to access your Athena data. Statsig requires

- READ on any tables and data you are using for experimentation
- USAGE/WRITE on a Statsig-specific schema we'll use to materialize temp tables and results. This enables us to cache data and perform incremental loads. You will specify which Glue Database and S3 Bucket to use, and we will create a Statsig S3 Subfolder to do our staging operations

1. Create an AWS IAM Policy to house the required access permissions

   This policy will house the permissions required for Statsig to access your warehouse. You will be able to return to this policy later and edit it as needed.

   - In your AWS IAM Dashboard, select the Policies page under the Access Management tab
   - Click 'Create policy'
   - Switch the Policy Editor type from 'Visual' to 'JSON'
   - Copy and paste the below JSON template block
   - Replace the placeholders with your setup information and the Statsig S3 Folder (specified in your Statsig project's Data Connection settings)
   - Specify all S3 locations and Glue Databases of any read-only assignment/metric data
   - Remove the descriptor comments

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         // Allow Statsig to recognize your staging S3 Bucket
         {
            "Effect": "Allow",
            "Action": [
               "s3:ListBucket",
               "s3:GetBucketLocation",
               "s3:GetObject",
               "s3:PutObject",
               "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::__S3_BUCKET__"
         },
         // Allow Statsig to read events/exposures data from your S3 Buckets
         {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::__PATH_TO_YOUR_READONLY_DATA__/*"
         },
         // Allow Statsig to read events/exposures tables from your Glue Databases
         {
            "Effect": "Allow",
            "Action": [
               "glue:GetTable",
               "glue:GetDatabase",
               "glue:GetDatabases",
               "glue:GetPartition",
               "glue:GetPartitions"
            ],
            "Resource": [
               "arn:aws:glue:__REGION__:__ACCOUNT_ID__:database/__YOUR_READONLY_DATABASE__",
               "arn:aws:glue:__REGION__:__ACCOUNT_ID__:table/__YOUR_READONLY_DATABASE__/*"
            ]
         },
         // Allow Statsig to read/write/use data and tables in an isolated staging S3 subfolder
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
               "glue:GetDatabase",
               "glue:GetDatabases"
            ],
            "Resource": [
               "arn:aws:s3:::__S3_BUCKET__/__PATH_TO_S3_QUERY_RESULTS_FOLDER__/*",
               "arn:aws:s3:::__S3_BUCKET__/__STATSIG_S3_FOLDER__/*",
               "arn:aws:athena:__REGION__:__ACCOUNT_ID__:workgroup/*",
               "arn:aws:glue:__REGION__:__ACCOUNT_ID__:catalog",
               "arn:aws:glue:__REGION__:__ACCOUNT_ID__:database/__GLUE_STAGING_DATABASE__",
               "arn:aws:glue:__REGION__:__ACCOUNT_ID__:table/__GLUE_STAGING_DATABASE__/*"
            ]
         }
      ]
   }
   ```

2. Create an (**A**) IAM Role, or (**B**) IAM User

   (**A**) IAM Role

   With an IAM Role, Statsig will assume your created IAM Role via a Statsig Service Account. The Statsig Account ID for this service account is provided in your Data Connection settings in the Statsig Console. Statsig will run queries directly on behalf of this IAM Role.
   Optionally, you can add an External ID condition for added security ([AWS External ID Docs](https://aws.amazon.com/blogs/security/how-to-use-external-id-when-granting-access-to-your-aws-resources/)). This External ID will be generated by Statsig, and viewable in your Data Connection settings in the Statsig Console.

   - In your AWS IAM Dashboard, select the Roles page under the Access Management tab
   - Click 'Create role'
   - Choose 'AWS account' as the Trusted entity type
   - Choose 'Another AWS account' from the options, and copy the Statsig Account ID from your Statsig console
   - Optionally, require use of an External ID for connections to this role (also specified in your Statsig console)
   - Continue to next step of setup, and select your IAM Permissions Policy from earlier
   - Name, review, and create; your Trust Policy JSON should follow the format below:
     ```
     {
        "Version": "2012-10-17",
        "Statement": [
           {
              "Effect": "Allow",
              "Action": "sts:AssumeRole",
              "Principal": {
                 "AWS": "__STATSIG_ACCOUNT_ID__"
              },
              // optionally require External ID condition
              "Condition": {
                 "StringEquals": {
                    "sts:ExternalId": "__ROLE_EXTERNAL_ID__"
                 }
              }
           }
        ]
     }
     ```
   - Add the ARN for this IAM Role to your Data Connection settings in the Statsig Console

   (**B**) IAM User

   With an IAM User, Statsig will use AWS Access Keys to gain access to this IAM User. Statsig will run queries directly on behalf of this IAM User.

   - In your AWS IAM Dashboard, select the Users page under the Access Management tab
   - Click 'Create user'
   - Name your user
   - On the next step of setup, choose 'Attach policies directly' and select your newly created Permissions Policy
   - Under the Security Credentials tab of this newly created User, find the Access Keys block
   - Click 'Create access key', and choose 'Third-party service' from the Use Case options
   - Add the Access Key and Secret Access Key to your Data Connection settings in the Statsig Console

## Setup Reading Data from your Events/Exposures Tables

1. Give Statsig read-access to your Glue Database containing any tables you need to Statsig to read from. Do this by adding the following to your AWS IAM Permissions Policy:
   ```
   {
      "Effect": "Allow",
      "Action": [
         "glue:GetTable",
         "glue:GetDatabase",
         "glue:GetDatabases",
         "glue:GetPartition",
         "glue:GetPartitions"
      ],
      "Resource": [
         "arn:aws:glue:__REGION__:__ACCOUNT_ID__:database/__YOUR_READONLY_DATABASE__",
         "arn:aws:glue:__REGION__:__ACCOUNT_ID__:table/__YOUR_READONLY_DATABASE__/*"
      ]
   }
   ```
2. Give Statsig read-access to your S3 Bucket locations of the tables you need Statsig to read from. Add this to your AWS IAM Permissions Policy:
   ```
   {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::__PATH_TO_YOUR_READONLY_DATA__/*"
   }
   ```
3. Read data in Statsig when setting up Metric/Assignment Sources by selecting from these tables using `"database"."table"` format.
4. Repeat for any additional tables, or whenever you need to read a new table from Statsig.

## Additional Guides

### S3 Bucket Encryption

Statsig supports all accessed S3 Buckets being encrypted. Steps to allow Statsig encrypting S3 Buckets while giving Statsig access are as follows:

1. From the AWS Key Management Service console, create a new KMS Key using the below cryptographic configuration settings: ([AWS SSE KMS Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html?icmpid=docs_s3_hp_batch_ops_create_job_encryption_key_type))
   - Key Type: Symmetric
   - Key Usage: Encrypt and Decrypt
   - Advanced Options
     - Key Material Origin = KMS
     - Regionality = Single-Region Key
2. From the Key Policy tab of your newly created KMS Key, find the Key Administrators box. Click Add, and select the AWS IAM Role/User provided to Statsig as an administrator.
3. Navigate to your S3 Bucket. From your S3 Bucket Properties tab, find the Default Encryption box. Click Edit, and select the below default encryption settings:
   - Encryption Type: SSE-KMS
   - AWS KMS Key: Enter AWS KMS Key ARN
     - (enter your newly created KMS Key ARN in the box)
   - Bucket Key: Enable

### What IP addresses will Statsig access data warehouses from?

[See FAQ](/data-warehouse-ingestion/faq#what-ip-addresses-will-statsig-access-data-warehouses-from)
