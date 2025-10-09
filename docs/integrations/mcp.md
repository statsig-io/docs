---
title: Statsig MCP Server
sidebar_label: MCP Server
slug: /integrations/mcp
keywords:
  - owner:alisha
last_update:
  date: 2025-09-18
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

Replace `console-YOUR-API-KEY` with your actual Statsig Console API key, which you can retrieve [here](https://console.statsig.com/api_keys). Ensure your API key has the right permissions — read-only keys can view data, while write keys can make changes to your project!

Once you've added and saved the configuration file, restart Cursor or Claude Desktop to apply the changes. After restarting, you should see the MCP server listed and active under the Developer settings. On Cursor, this can be found under Settings > Cursor Settings > Tools & Integrations.

## Current MCP capabilities

### Experiments (A/B Tests)

- **Get_List_of_Experiments**: List all experiments in the project with optional status filtering
- **Get_Experiment_Details_by_ID**: Get experiment details including groups and parameters
- **Create_Experiment**: Create new experiments with groups, hypothesis, etc.
- **Update_Experiment_Entirely**: Replace entire experiment configuration (any excluded data will be removed - the MCP will understand this.)

### Gates (Feature Flags)

- **Get_List_of_Gates**: List all gates/flags with optional type filtering (e.g., STALE, PERMANENT)
- **Get_Gate_Details_by_ID**: Get complete gate configuration details (rules, ID type, etc.)
- **Create_Gate**: Create new gate/flag with targeting rules and settings
- **Update_Gate_Entirely**: Replace entire gate setup with new rules and settings (any excluded data will be removed - the MCP will understand this.)

### Dynamic Configs

- **Get_List_of_Dynamic_Configs**: List all dynamic config objects in the project
- **Get_Dynamic_Config_Details_by_ID**: Retrieve detailed config including targeting rules, return values
- **Create_Dynamic_Config**: Create new config with rules, return values, etc.
- **Update_Dynamic_Config_Entirely**: Replace entire dynamic config with new targeting and values (any excluded data will be removed - the MCP will understand this.)

Need other functions? We're happy to consider additions by request, reach out in Slack.

## **Setting up in Codex**

```bash
codex mcp add statsig -- npx --yes mcp-remote https://api.statsig.com/v1/mcp \
  --header "statsig-api-key: console-YOUR-CONSOLE-API-KEY"
```

This will update your `~/.codex/config.toml`.

## **Setting up in Cursor**

[Click Here](cursor://anysphere.cursor-deeplink/mcp/install?name=statsig-local&config=eyJjb21tYW5kIjoibnB4IG1jcC1yZW1vdGUgaHR0cHM6Ly9hcGkuc3RhdHNpZy5jb20vdjEvbWNwIC0taGVhZGVyIHN0YXRzaWctYXBpLWtleToke0FVVEhfVE9LRU59IiwiZW52Ijp7IkFVVEhfVE9LRU4iOiJjb25zb2xlLWtleSJ9fQ==) to add the Statsig MCP to Cursor, or copy the json to: `~/.cursor/mcp.json`

## **Setting up in Claude Desktop**

The configuration file is located at:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

## **Setting up in Claude Code**

On Claude Code, we recommend using the http transport directly, run this command on the command line anywhere you use Claude Code:

```bash
claude mcp add --transport http statsig-local https://api.statsig.com/v1/mcp \
  --header "statsig-api-key: console-YOUR-CONSOLE-API-KEY"
```

## Use Cases

The Statsig MCP server now supports both `GET` and `POST` requests. This means tools can not only read data (like stale gates) but also make updates, if your API key has write permissions. We've found the Statsig MCP server especially useful for:

- Repetitive tasks like cleaning up stale gates
- Summarizing console information in your IDE workflows
- Bulk creating or deleting gates, and making the necessary changes in your code

### Example prompt for stale gate cleanup

```
You are an expert, diligent Software engineer with the sole goal of reducing the amount of tech debt in the code base. This code base, making use of best practices, leverages feature gates liberally using Statsig. As gates complete their lifecycle in Statsig, they may end up "stale" which means that they're enabled, but no longer checked. Your job is to find these gates, and refactor the codebase to no longer check the gate (instead, changing the check to a constant value).

You should follow coding best practices:
- You should not simply replace gate calls with "True" or "False" but instead carefully trace the logic through to where it is used and change the behavior that way - adjusting the code in minor ways to make the default behavior what the value is that the gate was returning
- You should always strive to write minimal code - readable but terse, never longer than it needs to be
- You should never write comments or debug statements.

You should use the statsig-local MCP to list feature gates, then look for gates that are marked as stale. You should then grep the codebase for that feature flag name, and do a minimal rewrite of the code to no longer use Statsig, removing the checkGate call or similar. When you use the MCP use the get /console/v1/gates endpoint and parameters type="STALE" and limit =10. You should select only one gate to do this with, before stopping. If you cannot find the gate after a grep, try the next one you found using the MCP. Once you successfully remove a gate, return.
```
