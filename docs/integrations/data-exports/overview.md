---
title: Exports Overview
---

## Overview
Your data is your data. Statsig makes it easy to export both the reports and the raw data your feature rollouts and experiments generate. Scenarios we enable include auditing/reproducing results or taking the raw data back into your warehouse for ad-hoc analysis (e.g. to study counfounding data or join with a different dataset).

## How to
1. [Download Pulse results](https://docs.statsig.com/pulse/export#how-to-export-pulse-data) from the Console as a CSV file - including a summary view, exposures and the raw data. This is meant for one-off downloads/analysis. 

![image](https://user-images.githubusercontent.com/31516123/179842166-0c8945ea-d93c-4aa6-96d9-4ea5a2e52437.png)

2. [Programatically export the data underlying Pulse](https://docs.statsig.com/http-api#export-report).
3. For ongoing data exports we support [data integrations](https://docs.statsig.com/integrations/introduction) via CDBs like Segment, Rudderstack and mParticle. There is also a [generic webhook](https://docs.statsig.com/integrations/event_webhook) if you want to build your own integration. 

![image](https://user-images.githubusercontent.com/31516123/179850016-3a31e479-5894-4e74-8f53-aaf1ea3d2b12.png)

## Validating data

Many teams audit and compare their data in Statsig with what they have in other systems. There are no black box algorithms.  We use well-recognized statistical methods and industry best practices and you should be able to reproduce results yourself.

Some tips when doing so -
1. Start small: Use a day's worth of data to reduce the variables in play. When comparing experiments, start with a full day (not days the experiment started/stopped where there's partial data). 
2. Third party ads/tracking blockers can block events sent to 3rd party services. Using a server side integration or [proxying requests via your domain](https://docs.statsig.com/custom_proxy) will remove this. 
3. Watch for time zone conversion issues to make sure a consistent definition of day is being used. 
4. Statsig applies [winsorization](https://docs.statsig.com/stats-engine/variance_reduction#winsorization) on metrics to remove outliers.
5. Statsig applies CUPED to get faster experimental results (reduce variance on metrics using pre-experimental data). Turn this off when looking at results in the console and comparing them.
