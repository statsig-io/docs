---
title: Terraform Provider
---

The Statsig Terrafrom Provider allows you to configure your gates with Terraform. This is achieved by leveraging the Console API. If there is something you need to perform that isn't supported by the Terraform Provider, checkout the [Console API](https://docs.statsig.com/console-api/introduction).

It is hosted on the Terraform registry at https://registry.terraform.io/providers/statsig-io/statsig

## Gates

You can create a .tf file (Terraform File) to configure how your gate works. All features of [console/v1/gates](https://docs.statsig.com/console-api/gates) are supported. The layout is very similar to the JSON body of a /gates request.

Requiring the Statsig provider. (You will need to change the version).

```go
terraform {
  required_providers {
    statsig = {
      version = "x.x.x"
      source  = "statsig-io/statsig"
    }
  }
}
```

Creating a basic gate resource

```go
resource "statsig_gate" "my_gate" {
  name        = "my_gate"
  description = "A short description of what this Gate is used for."
  is_enabled  = true
  id_type     = "userID"
  rules {
    name            = "Public"
    pass_percentage = 100
    conditions {
      type = "public"
    }
  }
}
```

### Conditions

All Console API conditions are supported but the syntax needs a little tweaking.

- **type** | string | The [type](https://docs.statsig.com/console-api/rules#all-conditions) of condition it is.
- **operator** | string | What form of evaluation should be run against the **target_value**.
- **target_value** | [string] | The value or values you wish to evaluate. Note: This must be an array, and elements should be of string type. (You can put quotes on numbers. 31 -> "31")
- **field** | string | Only for custom_field condition type. The name of the field you wish to pull for evaluation from the "custom" object on a user.

```go
conditions {
  type         = "custom_field"
  target_value = ["31"]
  operator     = "gt"
  field        = "age"
}
```

See the full list of conditions [here](https://docs.statsig.com/console-api/rules#all-conditions).


A full gate example is included in the open source Github repo https://github.com/statsig-io/terraform-provider-statsig/blob/17f1f29c51c4b49db70ed41ccdb0846475d565d6/examples/main.tf

