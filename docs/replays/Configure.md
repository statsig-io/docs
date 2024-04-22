# Configuration and Limits

## Sampling Rate

In the Statsig Console, you can configure your session recording sampling rate. This determines the percentage of all user sessions that are recorded. Since there is (currently) a limit of 10,000 session recordings every month, this can help ensure you space out running against that limit. The default sampling rate is 100% which is great for smaller companies and projects. 

Click on the settings icon in the top right of the Statsig console to navigate to Project and Organization Settings. Under Project Settings, click on Session Replay and set the sampling rate. You must be a project admin to modify the sampling rate.

![image](https://github.com/statsig-io/docs/assets/3464964/3d4fc8e2-7490-4060-87f5-3aeb5f6dff90)



## Limits

### 4 Hours Per Session or 30 Min Inactive Time

Sessions will end after four hours total or if the user returns from inactive time greater than 30 minutes later.

### 10,000 Sessions Per Month

Every Statsig project can store up to 10,000 sessions per month, after which time the SDK will stop further recordings from taking place by preventing clients from taking new recordings. You can check how many replays you have used in your org settings: 

### **Replay Availability Time**

It can currently take about 1 hour from when the session is recorded to seeing it in your Statsig console. We are working to bring this time down in the next few weeks. 

### 30 Day Retention

While we are in beta, Sessions have a 30 day lifetime and will be deleted after 30 days.
