---
title: Custom Proxy for Statsig API
---

Instead of sending API requests directly to Statsig, you can set up your own environment that proxies requests from your custom domain name to Statsig.

There are many ways to set up custom proxies. We are showing instructions for a few common service providers here.

## AWS CloudFront

### Prerequisites

- Write access to your DNS settings.
- Write access on your AWS CloudFront and Lambda console.
- Access to a SSL certificate for your custom domain.

### Setup

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
    request.headers.host[0].value = 'api.statsig.com';
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

### Update Statsig SDK to use your custom domain

When using Statsig SDK, make sure to update the `api` parameter in the [Statsig Options](/client/jsClientSDK#statsig-options) to your custom domain with `/v1/` appended, e.g. `https://statsig.example.com/v1/`.
