---
sidebar_label: SSO with Okta
title: Single Sign-On With Okta
keywords:
  - owner:shubham
last_update:
  date: 2025-03-21
---

## Requirements

- You will need to be the `Admin` of the Statsig Organization you intend to add SSO with Okta to.
- You will need to be the Administrator of the Okta account you want to link.

## Supported Features

Service Provider(SP)-Initiated Authentication for Single Sign-On (SSO) using OIDC can be enabled on Statsig to connect your Okta account to your Statsig Projects.

## Configuration

### Adding the Statsig OIDC Application in Okta

1. Navigate to your Okta portal.
2. On your Okta portal, click on `Applications` on the left-hand-column, and click into `Applications` in the dropdown.
   ![img](https://user-images.githubusercontent.com/75151332/129780676-c04bd2fb-83ed-4d17-9ae2-4e286f2b3b52.png)
3. On the Applications page, click on the `Browse App Catalog` button.
   ![img](https://user-images.githubusercontent.com/75151332/129780681-c48a6012-a882-475a-bbc9-924ec1391126.png)
4. On the App Catalog page, use the searchbox to search for Statsig and click on the Statsig OIDC Application.
5. In the Statsig Application, click on the `Add` button.
   ![img](https://user-images.githubusercontent.com/75151332/129780685-e6e141c6-8fdf-42f0-8ed6-edc734f4c2a7.png)
6. After creating the Statsig OIDC Application in Okta, navigate to the `Sign On` tab in the Application, note the `Client ID` and `Client Secret` fields that will be needed to enable Single Sign-On with OIDC on the Statsig Project.
   ![img](https://user-images.githubusercontent.com/75151332/129780687-bacc68c7-4fb1-4740-bb3e-a7c6b27d006e.png)

Once these steps have been completed, the Statsig OIDC Application in Okta has been successfully configured. Following this, you will need to follow the steps [here to enable configuration of SSO on your Statsig Project](/access-management/sso/overview#configuration).

_Note when adding the Statsig OIDC Application in Okta, the sign-in and sign-out redirect URIs are automatically configured._

### Proof Key for Code Exchange (PKCE)

Statsig does not currently support the PKCE Flow, so you will need to turn off the feature in Okta when you enable SSO with Statsig.
