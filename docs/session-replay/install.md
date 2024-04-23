---
title: Install Statsig Session Replay
sidebar_label: Install
slug: /session-replay/install
---
# Install Session Replay and Record Sessions

## Install

Session Replay is only supported on the Javascript or React SDKs for both desktop and mobile web users on your web application. See the instructions below to install our SDK and record user sessions.

### Option 1 - Add Javascript Snippet to your website

```jsx
<script src="https://cdn.jsdelivr.net/npm/@statsig/js-client@latest/build/statsig-js-client+session-replay+web-analytics.min.js"></script>
<script>
  const { StatsigClient, runStatsigAutoCapture, runStatsigSessionReplay } = window.Statsig;

  const client = new StatsigClient(YOUR_CLIENT_KEY, { userID: 'a-user' });

  runStatsigAutoCapture(client);
  runStatsigSessionReplay(client);

  client.initializeAsync().catch((err) => console.error(err));
</script>
```

Get YOUR_CLIENT_KEY from Project Settings -> Keys & Environments. Reveal the Client API Key, copy, and paste it over the [YOUR-API-KEY] in the snippet above. 

### Option 2 - Package Manager

**NPM**

`npm install @statsig/js-client @statsig/session-replay @statsig/web-analytics`

**Yarn**

`yarn add @statsig/js-client @statsig/session-replay @statsig/web-analytics`

We recommend using web-analytics as a great way to get started, but if you don’t want to automatically log and send events, you can remove the runStatsigAutoCapture option from the Javascript snippet or skip the `@statsig/web-analytics` package installation.


## Record Sessions
Following the [instructions for the Statsig Javascript SDK](https://docs.statsig.com/client/javascript-sdk), initialize Statsig with your SDK key, user [(see here for more information](https://docs.statsig.com/client/jsClientSDK#statsig-user)) and options:

```jsx
import { StatsigClient } from '@statsig/js-client';
import { SessionReplay } from '@statsig/session-replay';

const client = new StatsigClient(sdkKey,
	{ userID: "some_user_id" },
  { environment: { tier: "staging" } } // optional, pass options here if needed
);
await client.initializeAsync()
const replayer = new SessionReplay(client);
```

As a side effect of creating the SessionReplay, Statsig will begin recording if the session is sampled (see below). 

That’s it! In the future, we will be adding robust ways to control other scenarios in which you may or may not want to record the session, but at this time, this is all you need to do.

