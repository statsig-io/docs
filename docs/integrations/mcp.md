---
title: Statsig MCP Server
sidebar_label: MCP Server
slug: /integrations/mcp
keywords:
  - owner:alisha
last_update:
  date: 2025-06-03
---

# Statsig MCP Server Setup

The **Statsig MCP (Model Context Protocol) server** lets tools like **Cursor** and **Claude Desktop** read directly from the Statsig API. With this setup, you can ask questions, explore experiments, and access your Statsig data using AI.

## MCP Server Configuration

Add the following MCP server configuration JSON to your respective tool's config file. This config sets up the connection to Statsig's MCP endpoint with your API key:

<details>
<summary>
Click to see MCP Json
</summary>
```json
{
  "mcpServers": {
    "statsig-local": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://api.statsig.com/v1/mcp",
        "--header",
        "statsig-api-key:${AUTH_TOKEN}"
      ],
      "env": {
        "AUTH_TOKEN": "console-YOUR-API-KEY"
      }
    }
  }
}
```
</details>


Replace `console-YOUR-API-KEY` with your actual Statsig Console API key, which you can retrieve [here](https://console.statsig.com/api_keys)

Once you've added and saved the configuration file, restart Cursor or Claude Desktop to apply the changes. After restarting, you should see the MCP server listed and active under the Developer settings. On Cursor, this can be found under Settings > Cursor Settings > Tools & Integrations.

## **Setting up in Cursor**

[Click Here](cursor://anysphere.cursor-deeplink/mcp/install?name=statsig-local&config=eyJjb21tYW5kIjoibnB4IG1jcC1yZW1vdGUgaHR0cHM6Ly9hcGkuc3RhdHNpZy5jb20vdjEvbWNwIC0taGVhZGVyIHN0YXRzaWctYXBpLWtleToke0FVVEhfVE9LRU59IiwiZW52Ijp7IkFVVEhfVE9LRU4iOiJjb25zb2xlLWtleSJ9fQ==) to add the Statsig MCP to Cursor, or copy the json to: `~/.cursor/mcp.json`

## **Setting up in Claude Desktop**

The configuration file is located at:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

## Use Cases

We've found the Statsig MCP Server to be particularly useful for:
- Repetitive, simple work - like cleaning up stale gates
- Summarizing console information in your IDE workflows

### Example prompt for stale gate cleanup
```
You are an expert, diligent Software engineer with the sole goal of reducing the amount of tech debt in the code base. This code base, making use of best practices, leverages feature gates liberally using Statsig. As gates complete their lifecycle in Statsig, they may end up "stale" which means that they're enabled, but no longer checked. Your job is to find these gates, and refactor the codebase to no longer check the gate (instead, changing the check to a constant value).

You should follow coding best practices: 
- You should not simply replace gate calls with "True" or "False" but instead carefully trace the logic through to where it is used and change the behavior that way - adjusting the code in minor ways to make the default behavior what the value is that the gate was returning
- You should always strive to write minimal code - readable but terse, never longer than it needs to be
- You should never write comments or debug statements. 

You should use the statsig-local MCP to list feature gates, then look for gates that are marked as stale. You should then grep the codebase for that feature flag name, and do a minimal rewrite of the code to no longer use Statsig, removing the checkGate call or similar. When you use the MCP use the get /console/v1/gates endpoint and parameters type="STALE" and limit =10. You should select only one gate to do this with, before stopping. If you cannot find the gate after a grep, try the next one you found using the MCP. Once you successfully remove a gate, return. 
```
