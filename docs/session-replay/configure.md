---
title: Configure Statsig Session Replay
sidebar_label: Configure
slug: /session-replay/configure
---
# Configuration and Limits

## Configure Recording Sampling Rate

In the Statsig Console, you can configure your session recording sampling rate. This determines the percentage of all user sessions that are recorded. Since there is (currently) a limit of 10,000 session recordings every month, this can help ensure you space out running against that limit. The default sampling rate is 100% which is great for smaller companies and projects. 

Click on the settings icon in the top right of the Statsig console to navigate to Project and Organization Settings. Under Project Settings, click on Session Replay and set the sampling rate. You must be a project admin to modify the sampling rate.

![image](https://github.com/statsig-io/docs/assets/3464964/3d4fc8e2-7490-4060-87f5-3aeb5f6dff90)

## Forcing a Recording on Demand

You may have a use case where you need to make sure a session is recorded (based on a trigger, or a particular user that has interesting characteristics or behavior). To do this, we offer the forceStartRecording API which will begin recording as soon as you call it.

<Tabs
  groupId="session-replay-js-force-recording"
  defaultValue="js"
  values={[
    {label: 'js', value: 'js'},
    {label: 'react', value: 'react'},
  ]}>
  <TabItem value="js">

```jsx
import { StatsigClient } from '@statsig/js-client';
import { runStatsigSessionReplay } from '@statsig/session-replay';
import { runStatsigAutoCapture } from '@statsig/web-analytics';

const client = new StatsigClient(sdkKey,
	{ userID: "some_user_id" },
  { environment: { tier: "production" } } // optional, pass options here if needed. Session replays are only recorded and stored if the environment is production.
);
runStatsigSessionReplay(client);
runStatsigAutoCapture(client);
await client.initializeAsync();

if (someCondition) {
  new SessionReplay(client).forceStartRecording();
}

```
 </TabItem>
  <TabItem value="react">

```jsx
import { runStatsigSessionReplay } from '@statsig/session-replay';
import { runStatsigAutoCapture } from '@statsig/web-analytics';
import { StatsigClient, StatsigProvider } from '@statsig/react-bindings';

const client = new StatsigClient(sdkKey,
	{ userID: "some_user_id" },
  { environment: { tier: "production" } } // optional, pass options here if needed. Session replays are only recorded and stored if the environment is production.
);
runStatsigSessionReplay(client);
runStatsigAutoCapture(client);
await client.initializeAsync();

if (someCondition) {
  new SessionReplay(client).forceStartRecording();
}

function App() {
  return (
    <StatsigProvider client={myStatsigClient}>
      <Content />
    </StatsigProvider>
  );
}
```
 </TabItem>
</Tabs>


## Configure Recording Privacy/PII Options

If your users may be entering or viewing sensitive information, you can prevent this from being recorded and displayed using [CSS classes offered by the rrweb recorder](https://github.com/rrweb-io/rrweb/blob/master/guide.md#privacy) (the open source recording tool we use).

- `input[type="password"]` will be masked by default.
- An element with the class name `.rr-block` will not be recorded. Instead, it will replay as a placeholder with the same dimensions.
- An element with the class name `.rr-ignore` will not record its input events.
- All text of elements with the class name `.rr-mask` and their children will be masked.

We plan to provide 1st class integration of privacy controls with the Statsig SDK as we roll out of beta.



## Limits

### 4 Hours Per Session or 30 Min Inactive Time

Sessions will end after four hours total or if the user returns from inactive time greater than 30 minutes later.

### 10,000 Sessions Per Month

Every Statsig project can store up to 10,000 sessions per month, after which time the SDK will stop further recordings from taking place by preventing clients from taking new recordings. You can check how many replays you have used in your org settings: 

### **Replay Availability Time**

It can currently take about 1 hour from when the session is recorded to seeing it in your Statsig console. We are working to bring this time down in the next few weeks. 

### 30 Day Retention

While we are in beta, Sessions have a 30 day lifetime and will be deleted after 30 days.
