---
title: Github Code References
keywords:
  - owner:brock
last_update:
  date: 2025-05-15
---

## Overview

The Statsig Github Integration allows you to find [Feature Gate](/feature-flags/overview) and [Dynamic Config](/dynamic-config) references within your codebase on the Statsig Console. The integration leverages the Github API to access only references to the Feature Gate or Dynamic Config without storing any sensitive information.

## Configuration

Create a new Github developer token, either Classic or Fine Grained, with at least read access to the organization or repositories that you use Statsig.
This can be found in Github under **Settings** > **Developer Settings** > **Personal Access Token**.

Then, login to the Statsig Console and navigate to the Github Code References integration on the Integrations page.
This can be found in **Project Settings** > **Integrations Tab** > **Github Code References**.

The Integration should provide additional instructions on how to enable Github Code References.

![image](/img/github_code_references/github_integration.png)

After inputting your token and organization name the integration will verify it can access repositories and notify you if there are any problems.

Finally, navigate to the Feature Gates or Dynamic Configs pages on the Statsig Console and select a gate or dynamic config. Under the Diagnostics tab click on the View Code References link to see your code References!

![img](/img/github_code_references/feature_gate_view.png) ![img](/img/github_code_references/dynamic_config_view.png)

Code References will appear based on the feature gate or dynamic config page you are on. Code References can be filtered by repository and file extension.

![img](/img/github_code_references/code_references.png)

### Github Code References Action

We also have a [Github Action](https://github.com/statsig-io/github-code-references) that can scan your repositories for gates and dynamic configs, then create a PR replacing [Stale Gates](/feature-flags/permanent-and-stale-gates.md).
