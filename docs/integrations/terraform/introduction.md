---
title: Statsig Terraform Provider
keywords:
  - owner:brock
last_update:
  date: 2024-10-02
---

The Statsig Terraform Provider allows you to configure your gates and experiments with Terraform. The provider synchronizes with Statsig via the Console API. If there is something you need to perform that isn't supported by the Terraform Provider, checkout the [Console API](/console-api/introduction).

It is hosted on the Terraform registry at https://registry.terraform.io/providers/statsig-io/statsig

## Supported Features

We currently only support the following Statsig configurations:

- [Gates](/integrations/terraform/terraform_gate)
- [Experiments](/integrations/terraform/terraform_experiment)

Coming Soon:

- Dynamic Configs
- Segments

If you need more from our Terraform Provider, please feel free to ask in [Slack support](https://statsigcommunity.slack.com/archives/C01RAKM10TD). This will help us prioritize what to work on.
