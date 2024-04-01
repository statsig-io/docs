---
title: Statsig Web Analytics Overview
tags:
- Statsig Cloud 
sidebar_label: Overview
slug: /webanalytics/overview
---

# Web Analytics Overview

Web analytics lets you track and watch key measures for your website easily. It is different from product analytics because it's simpler and more direct, making it great for marketers, web site maintainers, or anyone familiar with tools like Google Analytics. 

With Web Analytics and Statsig Dashboards you can easily gather insights such as number of visitors, views, sessions, how long sessions last, error rates, usage journey, and more.

![image](https://github.com/statsig-io/js-client/assets/74588208/9b581024-3739-402d-a62d-c91f76adc784)

# Getting Started

Follow these simple steps to get started with Web Analytics.

## Install Statsig script on your website

```html
<script
  src="https://cdn.jsdelivr.net/npm/statsig-web-analytics/dist/index.min.js?apikey=[YOUR-API-KEY]">
</script>
```

Your API KEY could be found in your Project Settings -> Keys & Environments. Reveal the Client API Key and copy it.

![image](https://github.com/statsig-io/js-client/assets/74588208/0180a38a-2b3d-43c6-aa8e-4ea04c8ac751)

## Release your changes

Once your changes are live, you'll start to see the events flowing in your metrics page: https://console.statsig.com/metrics/events

# Considerations

For single page apps, or for more complex scenarios, look up how to [log events using Javascript](/client/jsClientSDK#logging-an-event).

# Exploring using Metrics Explorer

In Metrics Explorer (https://console.statsig.com/metrics/explore), you can dig deeper and explore your events by using complex filters and dimensions.  You can then explore your analysis to your dashboard.

More information on using Metrics Explorer like [Funnels and Retention is here](/mex/drilldown).

![image](https://github.com/statsig-io/js-client/assets/74588208/f4ed6f2c-79ce-4e47-ba6d-8dbe69978cc0)
