---
title: Custom Proxy for Statsig API
slug: /custom_proxy
---

## Overview

Instead of sending API requests directly to Statsig, you can set up your own environment that proxies requests from your custom domain name to Statsig.  This makes it less likely for tracking blockers to intercept your APIs, and allows you to capture more data.

There are many ways to set up custom proxies. We are showing instructions for a few common service providers here.

:::info
If you just want statsig to manage your proxy, you can use our [Managed API Proxy](/infrastructure/managed-proxy)
:::

## Approaches

### AWS CloudFront

#### Prerequisites

- Write access to your DNS settings.
- Write access on your AWS CloudFront and Lambda console.
- Access to a SSL certificate for your custom domain.

#### Setup

On your [AWS CloudFront console](https://console.aws.amazon.com/cloudfront/),

- Click on Create distribution.
- In the Origin section,

  - Set the Origin Domain to `api.statsig.com`.
  - Set the Protocol to `HTTPS only`.

  ![Origin section](https://user-images.githubusercontent.com/7304774/178337858-834c6762-15b4-410d-91bb-68e04932523e.png)

- In the Default cache behavior section,

  - Set Viewer protocol policy to `Redirect HTTP to HTTPS`.
  - Set Allowed HTTP methods to `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`.
  - In the Cache Key and origin requests subsection, allow all headers and parameters to be forwarded to the Origin, and allow CORS requests for the Origin.

  ![Default cache behavior section](https://user-images.githubusercontent.com/7304774/178590547-acdedcb6-e15a-4086-a29f-0657242d9894.png)

- In Function associations section,

  - Add a Lambda@Edge function to Origin request to rewrite the `Host` header to `api.statsig.com`. Please refer to [the AWS tutorial on creating a Lambda@Edge function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-how-it-works-tutorial.html).

  ![Function associations section](https://user-images.githubusercontent.com/7304774/178591897-a93a046a-c76f-4fc6-ab0c-86452de99be7.png)

You can use the following javascript code snippet in your Lambda@Edge function:

```javascript
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  request.headers.host[0].value = "api.statsig.com";
  return callback(null, request);
};
```

- In Settings,

  - Add an Alternate domain name (CNAME) to be your preferred domain name to use for the custom proxy, e.g. `statsig.example.com`.
  - Add a Custom SSL certificate. You will need to follow the [AWS guide for Alternate domain name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-requirements) to add a SSL certificate.
  - Click on Create distribution.

![Settings](https://user-images.githubusercontent.com/7304774/178337890-828e9f37-dd28-43a3-adc1-061052916045.png)

- You will get a Distribution domain name (e.g. `d111111abcdef8.cloudfront.net`) once it is provisioned.

In your DNS settings (depending on your DNS provider),

- Add a CNAME record in your custom DNS record:

  - Host name: `statsig.example.com`
  - Type: `CNAME`
  - Data: `d111111abcdef8.cloudfront.net` (The Distribution domain name from AWS)

- Your proxy should now be setup. See [Using Your Proxy](#using-your-proxy) for instructions on how to configure your Statsig SDK.

### Cloudflare Worker

#### Prerequisites

You will need a Cloudflare account. Visit [https://www.cloudflare.com](https://www.cloudflare.com/) to set one up.

#### Setup

Once you are logged into Cloudflare. You can follow these steps:

1.  Navigate to "Workers & Pages > Overview" in the left rail to create a new worker.

    ![1-cloudflare-create](https://github.com/statsig-io/ios-sdk/assets/95646168/39bcd1ad-ddcc-4be9-9d71-905ed6a90b8b)

    **Note: You may see a different experience if you already have workers on your account.**

2.  Name you new worker whatever you would like and then click "Deploy".

    ![2-cloudflare-deploy](https://github.com/statsig-io/ios-sdk/assets/95646168/9d728e12-675e-4648-b6ee-ce84c72b305c)

3.  Once deployed, click "Edit Code".

    ![3-cloudflare-edit-code](https://github.com/statsig-io/ios-sdk/assets/95646168/8c971a58-5bb7-4faa-a7ba-4574ab29f0ce)

4.  Copy and paste the following snippet into the `worker.js` file, then hit "Deploy".

    ```javascript
    export default {
      async fetch(request, _env, _ctx) {
        const url = new URL(request.url);

        const original = new Request(request);
        original.headers.delete("cookie");
        return fetch(
          `https://statsigapi.net${url.pathname}${url.search}`,
          original
        );
      },
    };
    ```

    ![4-cloudflare-paste-snippet](https://github.com/statsig-io/ios-sdk/assets/95646168/558498dd-159f-409e-acef-a31e0dff86c2)

5.  Your worker should now be deployed and ready to use. See [Using Your Proxy](#using-your-proxy) for instructions on how to configure your Statsig SDK.

## Using Your Proxy

Once you have a proxy setup, you will need to take its URL and apply it to the SDK. To do this, you can use `StatsigOptions.api`. You can visit [Statsig Options](/client/javascript-sdk#statsig-options) to read about the Javascript specific StatsigOptions, but all SDKs have the ability to override the api via `StatsigOptions.api`.

The following is pseudo code of what initializing with a proxy looks like:

```typescript
Statsig.initialize(mySdkKey, myUser, { api: "https://my-statsig-proxy.com/v1" });
```

:::note
Depending on the SDK type, version, and proxy approach you are using, you may not need to append `'/v1'` to the end of your api string. eg `"https://my-statsig-proxy.com"`
:::
