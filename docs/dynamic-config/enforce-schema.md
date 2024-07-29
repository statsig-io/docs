---
title: Using a schema
sidebar_label: Using a Schema
slug: /dynamic-config/enforce-schema
---

Dynamic configs support schemas using [JSON Schema](https://json-schema.org/learn/getting-started-step-by-step) syntax to enforce a common convention between the return values for each rule you'll set.

:::info
Schemas are only enforced when editing dynamic configs through the console or API, and are not used at code runtime.
:::

For example, if you have a dynamic config that returns settings for a site banner, you might have a schema of:
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
    },
    "description": {
      "type": "string",
    },
    "cta": {
      "type": "string",
    }
  },
  "required": ["title", "description", "cta"],
}
```

Now, each of your rules must return an object including title, description, and CTA.