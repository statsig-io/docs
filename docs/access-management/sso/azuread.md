---
sidebar_label: SSO with Azure AD
title: Single Sign-On With Azure AD
---
## Requirements

- You will need to be the `Admin` of the Statsig Project you intend to add SSO with Azure AD to.
- You will need to be the Administrator of the Azure AD tenant you want to link.

## Supported Features

Service Provider(SP)-Initiated Authentication for Single Sign-On (SSO) using OIDC can be enabled on Statsig to connect your Azure AD account to your Statsig Projects.

## Configuration
### Adding the Statsig OIDC Application in Azure AD

1. Navigate to App Registrations in the Azure portal. 
2. Click on the "New Registration" button to register the Statsig App
3. Provide a name (eg. Statsig Console) to the app and finish creation. For the Redirect URI use https://console.statsig.com/sso/oidc 
4. Select Certificates and secrets for this app from the left nav and create a new client secret. Save the value; this can't be retrieved except immediately after creation.
![image](https://user-images.githubusercontent.com/31516123/153957278-5f463453-dd7a-443b-9c1c-2a8c205995f6.png)
You will need to enter three items in the Statsig SSO configuration - 
1. Find the Azure AD OIDC URL for this app under Overview -> Endpoints -> OpenID Connect metadata document. Truncate the string to end at "/v2.0".
2. Get the client ID for this app from Overview -> Application (client) ID.
3. Get the client secret value for when you saved this after creating a new client secret. 

Once these steps have been completed, the Statsig OIDC Application in Okta has been successfully configured. Following this, you will need to follow the steps [here to enable configuration of SSO on your Statsig Project](/access-management/sso/overview#configuration).

