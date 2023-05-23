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

1. Follow the instructions listed [here](https://developers.google.com/identity/openid-connect/openid-connect#getcredentials) to obtain the client ID and client secret from your Google account.

2. Follow the steps listed [here to enable configuration of SSO on your Statsig Project](/access-management/sso/overview#configuration).