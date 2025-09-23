---
title: GitLab Code References
keywords:
  - owner:kenny
last_update:
  date: 2025-09-18
---

## Overview

The Statsig GitLab Integration allows you to find [Feature Gate](/feature-flags/overview) and [Dynamic Config](/dynamic-config) references within your codebase on the Statsig Console. The integration leverages the GitLab API to access only references to the Feature Gate or Dynamic Config without storing any sensitive information.

## Configuration

Create a new GitLab access token, either [project](https://docs.gitlab.com/user/project/settings/project_access_tokens/) or [personal](https://docs.gitlab.com/user/profile/personal_access_tokens/), with the `read_api` scope.

Then, login to the Statsig Console and navigate to the Github Code References integration on the Integrations page.
This can be found in **Project Settings** > **Integrations Tab** > **GitLab Code References**.

The Integration should provide additional instructions on how to enable GitLab Code References.

![GitLab integration configuration interface](/img/gitlab_code_references/gitlab_integration.png)

After inputting your token and organization name the integration will verify it can access repositories and notify you if there are any problems.

Finally, navigate to the Feature Gates or Dynamic Configs pages on the Statsig Console and select a gate or dynamic config. Under the Diagnostics tab click on the View Code References link to see your code References!

![img](/img/gitlab_code_references/feature_gate_view.png)

Code References will appear based on the feature gate or dynamic config page you are on. Code References can be filtered by repository and file extension.

![img](/img/gitlab_code_references/code_references.png)
