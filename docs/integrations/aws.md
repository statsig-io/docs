---
title: AWS
last_update:
  date: 2025-09-28
---

## Overview

Statsig now offers support to use statsig configs on AWS edge services, providing low latency for gate and experiment evaluations in your AWS project.

This integration uses the bring your own CDN model from the statsig edge client. This guide will highlight the most optimal setup for using statsig with AWS to leverage performance on the edge.

## Architecture

This integration uses the following AWS services:

- **S3**: Centralized configuration storage to store your statsig configs
- **Lambda@Edge**: Executes your project code which uses the statsig edge SDK at CloudFront edge locations
- **CloudFront**: Global CDN that triggers Lambda@Edge functions and caches responses
- **IAM**: Manages permissions for Lambda@Edge functions to access S3
- **CloudWatch**: Provides logging and monitoring for your edge functions

## Prerequisites

**Statsig**:

- Statsig account
- Configured statsig project
- A 50/50 feature gate for testing. This guide refers to this gate as "test_gate"
- Client API Key (**Settings** -> **Keys & Environments**)

**AWS**:

- AWS Account with administrative access

## S3 Storage Setup

The S3 bucket will be leveraged to store your statsig Config specifications. Since Amazon does not provide a traditional KV store for lambda@edge, we will treat the S3 storage as our KV store.

#### Create S3 Bucket

1. From your AWS console dashboard, navigate to **S3**
2. Click **Create Bucket**
3. **Bucket name**: Choose a bucket name. It must be globally exclusive
4. **Block Public Access**: Uncheck "Block all public access"
5. Click **Create bucket**

#### Create Statsig Config File

Create a file named `statsig-config.json` with your experiment configurations

**Note: this file must be a JSON**

If you do not have your config specs, this is how you can get them:

- Call the statsig CDN endpoint with you client key.

  ```bash
  https://api.statsigcdn.com/v1/download_config_specs/<YOUR_CLIENT_API_KEY>.json
  ```

#### Upload Config Specs to S3

1. Open your S3 bucket
2. Click **Upload**
3. Select your `statsig-config.json` file
4. Click **Upload**

#### Set Bucket Policy

1. Go to **S3 bucket** → **Permissions** → **Bucket Policy**
2. Add the following policy (replace `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/statsig-config.json"
    }
  ]
}
```

#### Test S3 Access

Test that your configuration is accessible

From your list of objects in your bucket, select the file with your statsig configs. Once highlighted, click **Copy URL**. Test this endpoint.

```bash
https://mybucketname.s3.us-east-1.amazonaws.com/config.json
```

This should return your config specs

## Create Lambda@Edge Function

**CRITICAL**: Must be created in **us-east-1** region

1. Change region to **us-east-1** (top-right corner)
2. Navigate to **Lambda Dashboard**
3. Click **Create function**
4. **Author from scratch**
5. Name your function
6. **Runtime**: Choose the latest Node.js runtime as Lambda@edge always support the latest runtimes
7. Keep the default permission
8. Click **Create function**

#### **Add Function Code**

This setup guide aims to complete every step through the AWS console. We suggest you work on your project on your local. Once you are ready to deploy your code, upload it as a zip to your function's code tab. Ensure your project is built and all packages are installed before you test or deploy it in the Lambda console.

Further explanation and breakdown of the usage of the statsig SDK within this code will be provided later in this guide.

```javascript
import { StatsigEdgeClient } from "@statsig/edge-client";

export const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const clientKey = "<Your client API key>";
    const client = new StatsigEdgeClient(clientKey);

    const specs = await client.initializeFromCDN("<YOUR S3 URL>");

    const user = { userID: Math.random().toString().substring(2, 5) };

    const gateValue = client.checkGate("test_gate", user);

    const response = {
      success: true,
      message: "gate evaluated on Lambda@Edge",
      gateValue: gateValue,
      user: user,
      timestamp: new Date().toISOString(),
    };

    callback(null, {
      status: "200",
      statusDescription: "OK",
      headers: {
        "content-type": [{ key: "Content-Type", value: "application/json" }],
        "cache-control": [{ key: "Cache-Control", value: "no-cache" }],
      },
      body: JSON.stringify(response, null, 2),
    });
  } catch (error) {
    console.error("Error fetching config specifications:", error);

    callback(null, {
      status: "200",
      statusDescription: "OK",
      headers: {
        "content-type": [{ key: "Content-Type", value: "application/json" }],
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
        message: "Fallback response",
      }),
    });
  }
};
```

Your package.json should look something like this:

```json
{
  "name": "my-lambda-edge-test",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@statsig/edge-client": "^1.0.0"
  }
}
```

### Deploy and Publish

1. Click **Deploy**
2. **Actions** → **Publish new version**
3. **Description**: "Initial Statsig edge integration"
4. Click **Publish**
5. **Copy the Version ARN** (ends with :1) - you'll need this for CloudFront

### Create IAM Execution Role for Lambda@Edge

1. Navigate to the IAM Console → Roles
2. Select **YourFunctionName-role-####**
3. Click **Trust relationships**
4. Click **Edit trust policy**
5. Use the following in your edit code window:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": ["edgelambda.amazonaws.com", "lambda.amazonaws.com"]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

## Create CloudFront Distribution

1. Navigate to the **CloudFront Console**
2. Click **Create distribution**

**Origin:**

- **Origin Type**: Other
- **Origin domain**: `example.com` (dummy origin - Lambda@Edge will handle requests)
- **Protocol**: HTTPS only
- **Origin path**: Leave blank

**Settings:**

- **Origin Settings**
  - Use recommended origin settings
- **Cache settings**
  - **Viewer protocol policy**: Redirect HTTP to HTTPS
  - **Allowed HTTP methods**: GET, HEAD
  - **Cache policy**: CachingDisabled
  - **Origin request policy**: None

3. Click **Create distribution**
4. **Note the Distribution Domain Name** (e.g., `d1abc123xyz.cloudfront.net`)

#### Add Lambda@Edge Function Association

1. In your distribution, navigate to the **Behaviors** tab → **Edit** the default behavior
2. **Function associations**:
   - **Function type**: Viewer request
   - Select Lambda@Edge
   - **Function ARN / Name**: Paste your Lambda version
   - **Include body**: Leave unchecked
3. **Save changes**

**Wait for Deployment** (10-15 minutes for global propagation to all edge locations)
Deployment is complete when **Last modified** changes from "deploying" to a date

## Statsig Integration

At this point, all of your required AWS components are created and configured. Let's configure the usage of statsig in your code.

This section will break down and explain parts of the example lambda function code

### Install

```bash
npm install @statsig/edge-client
```

Install the statsig edge SDK. This SDK is a one stop shop for all edge integrations, including AWS.

### Import

```bash
import {StatsigEdgeClient} from "@statsig/edge-client"
```

### Initialize

```bash
const client = new StatsigEdgeClient(clientKey);
```

This creates an instance of the edge client. The edge client takes one argument.

- `sdkKey : string` Your statsig client API key. (**Settings** -> **Keys & Environments**)

```bash
const specs = await client.initializeFromCDN("<YOUR S3 URL>");
```

This calls the initialize method from the edge client. The `initializeFromCDN` method requires one argument:

- `url: string` The url to your storage for your statsig config specs

In the AWS use case, the url to specify is your S3 config file url

### Checking a Gate

```bash
const gateValue = client.checkGate("test_gate", user);
```

The `checkGate` method requires two arguments:

- `name: string ` The name of your gate
- `user: Statsiguser` The statsig user being checked for this gate

## Testing Setup

Now, your AWS components are configured and your function code is configured to use statsig. Every time you make a change to your function code, remember to **publish a new version**. Every time a new version of your Lambda function is created make sure to update your **Function ARN / Name** in your distribution's behavior. This will ensure the changes are propagated to the edge. Every change takes about **10-15** minutes to propagate to all edge locations.

### Connectivity test

```bash
# Replace with your CloudFront domain
curl https://d1abc123xyz.cloudfront.net/
```

**Expected response:**

```bash
{
    success: true,
    message: "gate evaluated via Lambda@Edge",
    gateValue: True,
    user: 24,
    timestamp: "2025-01-23T12:00:00.000Z",
}

```

If you get a successful response, with different gate values (true and false) for different users. You are now set up to use statsig on AWS edge!

### CloudWatch Logs

CloudWatch is an observability service provided by AWS. This is great resource for debugging and data collection purposes.

How to locate your functions logs:

1. **CloudWatch Console** → **Log groups**
2. Look for `/aws/lambda/YourFunctionName`
3. **Note**: Logs appear in the region closest to where you're testing
4. AWS provided logging can be found under **Log streams**

You can also access logs in your Lambda function dashboard

## Considerations

This is the end of the statsig AWS edge integration setup guide. Please keep in mind this guide is meant to help you set up your project and get started. Ensure you make changes in your setup to support your required security needs when using this integration in production. Configure your AWS resource security and permissions as needed. Please protect your API keys.

## Common Issues

**503 Service Unavailable:**

- **Possible Cause**:
  - Lambda@Edge function not properly attached to CloudFront
  - **Solution**:
    - Check CloudFront behavior configuration
- **Possible Cause**:
  - Function has errors
  - **Solution**:
    - Check CloudWatch and Lambda logs

**S3 Configuration Errors:**

- **Possible Cause**:
  - S3 bucket policy doesn't allow public access or file not found
  - **Solution**:
    - Verify bucket policy and test S3 URL directly

**Statsig SDK Initialization Errors:**

- **Possible Cause**:
  - Invalid S3 configuration format
  - **Solution**:
    - Validate JSON format
- **Possible Cause**:
  - Incorrect client API key
  - **Solution**:
    - Ensure you are using the correct client key
- **Possible Cause**:
  - Network issues
  - **Solution**:
    - Check S3 accessibility

**Module Import Errors:**

- **Possible Cause**:
  - Missing dependencies in package.json
  - **Solution**:
    - Ensure `@statsig/edge-client` is included in dependencies
