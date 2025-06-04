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

The **Statsig MCP (Model Context Protocol) server** lets tools like **Cursor** and **Claude Desktop** connect directly to the Statsig API. With this setup, you can ask questions, explore experiments, and access your Statsig data using AI.

## MCP Server Configuration

Add the following MCP server configuration JSON to your respective tool's config file. This config sets up the connection to Statsig's MCP endpoint with your API key:

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

Replace `console-YOUR-API-KEY` with your actual Statsig Console API key.

Once you've added and saved the configuration file, restart Cursor or Claude Desktop to apply the changes. After restarting, you should see the MCP server listed and active under the Developer settings.

## **Setting up in Cursor**

The configuration file is located at `Cursor > Settings > Cursor Settings > MCP`
or go to `~/.cursor/mcp.json`

## **Setting up in Claude Desktop**

The configuration file is located at:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

## **Example Prompts:**

Here are a few things you can ask once the MCP server is connected:

- _"Remove all the references to archived feature gates in my GitHub project"_
- _"My experiment health check isn’t working—can you help me debug it?"_
- _"Log an event whenever a user adds an item to their cart."_

**Note**: The Statsig MCP server currently supports read-only (`GET`) requests. If you're interested in `POST`/write capabilities, reach out to us on Slack!
