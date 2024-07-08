---
title: Statsig CLI ("Siggy")
sidebar_label: Introduction
slug: /statsigcli
---

## Overview

The Statsig CLI is a command-line interface that helps with management of Feature Gates, Experiments, and Dynamic Configs within the Statsig platform. This tool allows you create, manage, and delete configs, all from the command line.  This tool can also be used within scripts.

## Why Use the Statsig CLI?

### Efficiency
The Statsig CLI provides a fast way to interact with Statsig, reducing the need for manual actions through our Console interface. It allows for quick execution of tasks with simple commands.

### Automation
Our CLI can be integrated into CI/CD pipelines to automate the management of Feature Gates and Experiments.

### Consistency
Using the CLI allows for scriptable and repeatable actions, promoting best practices and reducing the risk of human error.

## Installation

To get started with the Statsig CLI, follow these steps:

### Prerequisites
* Node.js (version 14 or higher)
* npm (Node Package Manager)

### Steps
1. Install the Statsig CLI via npm:

``` bash
$ npm install -g @statsig/siggy
```

2. Check install

``` bash
$ siggy --version
```

:::info
If you get a `command not found` error, you might need to add your node global bin folder to your path.

One way to do that is by running `export PATH=$PATH:$(npm get prefix -g)/bin`

If that doesn't work, as a workaround, you can run the CLI by prefixing `npx` in the command line

``` bash
$ npx siggy --version
```

:::

2. Configure the API keys by running:

``` bash
$ siggy -c <console-api-key>
$ siggy -k <client-api-key>
```

:::info
You can retrieve these keys from your Statsig project.  In order to get these keys, login to Statsig Console here: https://console.statsig.com and navigate to the Settings page (https://console.statsig.com/settings)

Once you're there, select the **Keys & Environments** panel within **Project Settings**, then copy both the Console API Key and Client API Key, and paste them in the Settings dialog.

![image](https://github.com/statsig-io/.github/assets/74588208/754cc245-1821-4f75-a87d-08b536422587)
:::


### Next up: [Commands in CLI](/statsigcli/commands)
