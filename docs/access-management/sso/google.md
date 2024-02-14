---
sidebar_label: SSO with Google 
title: SSO with Google as your IdP
---
## Requirements

- You will need to be the `Admin` of the Statsig Project you intend to add SSO with Google Apps to.
- You will need to be the Administrator of the Google Apps account you want to link.

## Supported Features

Service Provider(SP)-Initiated Authentication for Single Sign-On (SSO) using OIDC can be enabled on Statsig to connect your Google Apps account to your Statsig Projects.

## Configuration

1. Follow the instructions listed [here](https://developers.google.com/identity/openid-connect/openid-connect#getcredentials) to obtain the client ID and client secret from your Google account. At [Google Credentials](https://console.cloud.google.com/apis/credentials), you can create a new "OAuth 2.0 Client ID" or select an existing one to find the client ID and client secret (under "Additional information").
2. Add Statsig's redirect URI ([more detail here](/access-management/sso/overview#configuration)) under "Authorized redirect URIs" on the chosen OIDC Client: `https://console.statsig.com/sso/oidc`. 
2. Follow the steps listed [here to enable configuration of SSO on your Statsig Project](/access-management/sso/overview#configuration). The OIDC Domain / Issuer field should be set to `https://accounts.google.com`, and the client ID / secret come from step 1.
