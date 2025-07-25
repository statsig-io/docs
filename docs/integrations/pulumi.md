---
title: Pulumi
keywords:
  - owner:jason
last_update:
  date: 2025-06-10
---

The [Statsig Pulumi Provider](https://www.pulumi.com/registry/packages/statsig/) allows you to configure your gates and experiments using Pulumi Infrastructure as Code. The provider synchronizes with Statsig via the Console API. If there is something you need to perform that isn't supported by the Pulumi Provider, checkout the [Console API](/console-api/introduction).

## Installation

The Statsig provider is available as a package in the following Pulumi languages:

- **JavaScript/TypeScript**: [`@statsig/pulumi-statsig`](https://www.npmjs.com/package/@statsig/pulumi-statsig)
- **Python**: [`pulumi-statsig`](https://pypi.org/project/pulumi-statsig/)
- **Go**: [`github.com/statsig-io/pulumi-statsig/sdk/go/statsig`](https://github.com/statsig-io/pulumi-statsig)
- **.NET**: [`Statsig.Pulumi`](https://www.nuget.org/packages/Statsig.Pulumi)

## Configuration

The provider needs to be configured with the proper credentials before it can be used. Configure your `Pulumi.yaml` file with your Console API key:

```yaml
# Pulumi.yaml provider configuration file
name: configuration-example
runtime: nodejs # or python, go, dotnet
config:
  statsig:consoleApiKey:
    value: 'YOUR_CONSOLE_API_KEY'
```

### Configuration Reference

- `consoleApiKey` (String) - The Statsig Console API key retrieved from Statsig console.

## Example Usage

### TypeScript

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as statsig from "@statsig/pulumi-statsig";

// Create a Feature Gate
const gate = new statsig.Gate("my-gate", {});
```

### Python

```python
import pulumi
import pulumi_statsig as statsig

# Create a Feature Gate
gate = statsig.Gate("my-gate")
```

### Go

```go
package main

import (
    "github.com/pulumi/pulumi/sdk/v3/go/pulumi"
    "github.com/statsig-io/pulumi-statsig/sdk/go/statsig"
)

func main() {
    pulumi.Run(func(ctx *pulumi.Context) error {
        // Create a Feature Gate
        _, err := statsig.NewGate(ctx, "my-gate", nil)
        if err != nil {
            return err
        }
        return nil
    })
}
```

### C#

```csharp
using Pulumi;
using Statsig = Statsig.Pulumi;

return await Deployment.RunAsync(() => 
{
    // Create a Feature Gate
    var gate = new Statsig.Gate("my-gate");
});
```

## Supported Features

We currently support the following Statsig configurations:

- Gates
- Experiments

Coming Soon:

- Dynamic Configs
- Segments

If you need more from our Pulumi Provider, please feel free to ask in [Slack support](https://statsigcommunity.slack.com/archives/C01RAKM10TD). This will help us prioritize what to work on.
