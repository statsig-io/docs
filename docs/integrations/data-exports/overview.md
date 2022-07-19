---
title: Data Export
---

## Overview
Your data is your data. Statsig makes it easy to export both the reports and the raw data your feature rollouts and experiments generate. Scenarios we enable include  auditing or reproducing results or taking the raw data back into your warehouse for ad-hoc analsis when needed (e.g. to study counfounding data or join with a different dataset).

## How to
1. [Download Pulse results](https://docs.statsig.com/pulse/export#how-to-export-pulse-data) from the Console as a CSV file - including a summary view, exposures and the raw data. This is meant for one-off downloads/analysis. 

![image](https://user-images.githubusercontent.com/31516123/179842166-0c8945ea-d93c-4aa6-96d9-4ea5a2e52437.png)

2. [Programatically export the data underlying Pulse](https://docs.statsig.com/http-api#export-report).
3. For ongoing data exports we support [data integrations](https://docs.statsig.com/integrations/introduction) via CDBs like Segment, Rudderstack and mParticle. There is also a [generic webhook](https://docs.statsig.com/integrations/event_webhook) if you want to build your own integration. 

![image](https://user-images.githubusercontent.com/31516123/179850016-3a31e479-5894-4e74-8f53-aaf1ea3d2b12.png)
