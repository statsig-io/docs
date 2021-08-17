---
sidebar_label: Overview
title: Single Sign-On With OIDC
---

*This documentation assumes that you already have an OIDC Provider up and running.*

SSO with OIDC can be configured for your Statsig Projects to continue using your company's identity store with Statsig and simplify the process for inviting your team to your Projects.

## Configuration

An `Owner` of a Project can configure SSO for their Project on Statsig. On your OIDC Provider you will need to specify the following for your Statsig Project:

- Sign-in redirect URI: https://console.statsig.com/sso/oidc
- Sign-out redirect URI: https://console.statsig.com

To enable SSO on Statsig, you will need the following from your OIDC Provider:

- OIDC Domain
- Client ID
- Client Secret

Once you have obtained all of the information mentioned above:

1. Navigate to your Project's [`Basic Settings` page](https://console.statsig.com/settings) and click the `Enable` button for Single Sign-on.

![image](https://user-images.githubusercontent.com/75151332/128761218-e52c09a0-a51a-4e6d-870a-07359867be5b.png)

2. Provide the information acquired from your OIDC Provider into the fields in the dialog and click `Enable`.

![image](https://user-images.githubusercontent.com/75151332/129312057-c6330f5d-7d8a-4d01-b8df-78500cdabf66.png)

3. After clicking `Enable`, an SSO link will be shown that can be sent to your team to allow them to login to Statsig through your OIDC Provider.

![image](https://user-images.githubusercontent.com/75151332/128761399-0cd83086-2f7b-4861-a463-da596c327f17.png)

Users that sign in through an SSO link will automatically join any Projects that have SSO enabled with the same OIDC Provider, and have access only to those Projects. Users that sign in through an SSO link will also not be able to edit or view any of their personal account settings.

Enabling `Strict SSO` will require that all members of a Project besides the `Owner` must log in to the Statsig Console through SSO with the configured provider to access the Project.