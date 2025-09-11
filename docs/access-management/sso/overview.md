---
sidebar_label: Overview
title: Single Sign-On With OIDC
keywords:
  - owner:shubham
last_update:
  date: 2025-07-28
---

:::info
SSO is an Enterprise feature. Please reach out to our [support team](mailto:support@statsig.com), your sales contact, or via our slack channel if you need to enable Enterprise features as you try out Statsig.
:::

*This documentation assumes that you already have an OIDC Provider up and running.*

Single Sign-On (SSO) with OIDC can be configured for your Statsig Organization to continue using your company's identity store with Statsig and simplify the process for inviting your team to your Projects. New users will be automatically provisioned, once authenticated by your Identity Provider. Organizations are an Enterprise Tier feature. If your SSO requires multi-factor authentication (MFA), it is automatically required when your users sign into Statsig with SSO enabled.

## Supported Providers
We support any Identity Provider (IdP) that implements the OIDC protocol for SSO.
We have custom documentation for some of the following OIDC providers:
- [Okta](okta_sso.md)
- [Microsoft Entra ID (AzureAD)](azuread.md)
- [Google](google.md)
- Ping Identity
  - Be sure to include `openid` and `email` in the scopes
- OneLogin

## Configuration

An `Admin` of an organization can configure SSO on Statsig. On your OIDC Provider you will need to specify the following for your Statsig Project:

- Sign-in redirect URI: https://console.statsig.com/sso/oidc (and https://latest.console.statsig.com/sso/oidc if possible)
- Sign-out redirect URI: https://console.statsig.com
- Sign-in URI: https://console.statsig.com/sso

To enable SSO on Statsig, you will need the following from your OIDC Provider:

- OIDC Domain
- Client ID
- Client Secret

Once you have obtained all of the information mentioned above:

1. Navigate to your Organization's [`Basic Settings` page](https://console.statsig.com/settings?tab=organization) and click the `Enable` button for Single Sign-on.

![image](https://github.com/user-attachments/assets/a31ba14d-9476-4897-afc6-5c39c2f932c9)

2. Provide the information acquired from your OIDC Provider into the fields in the dialog and click `Enable`.

![image](https://github.com/user-attachments/assets/d2143c48-f144-4544-a77b-af2e2d486cc8)

3. After clicking `Enable`, an SSO link will be shown that can be sent to your team to allow them to login to Statsig through your OIDC Provider.

![image](https://github.com/user-attachments/assets/e3743107-2e26-4944-b2fb-f90536163b6f)

Users that sign in through an SSO link will automatically join any Projects that have SSO enabled with the same OIDC Provider, and have access only to those Projects. Users that sign in through an SSO link will also not be able to edit or view any of their personal account settings. By default, users who are provisioned via SSO will be assigned the "Member" Role. 

Enabling `Strict SSO` will require that all members of a Project besides the `Owner` must log in to the Statsig Console through SSO with the configured provider to access the Project.

## Break Glass Scenarios

If you have configured SSO to be required, but corrupt your SSO config this will block people from logging in. In case of emergency, the user with the Owner role in the organization can use the break glass URL to sign in with a password (bypassing SSO). The break glass URL is [https://console.statsig.com/login?method=password-only](https://console.statsig.com/login?method=password-only)
