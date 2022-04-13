---
sidebar_label: Running an A/A Test
title: Running an A/A Test
---

import Install from '../client/js/_install.mdx' 
import Initialize from '../client/js/_initialize.mdx' 
import GetExperiment from '../client/js/_getExperiment.mdx' 
import LogEvent from '../client/js/_logEvent.mdx'

In this guide, we will walk you through how to leverage Statsig’s platform to run an A/A test on your product.  

:::info This guide assumes that you have successfully set up and configured your Statsig SDK. For a step-by-step guide on how to do this, see our [“Your first feature”](https://docs.statsig.com/guides/first-feature) guide.

:::

## Why run an A/A test?  

Log into the Statsig console at https://console.statsig.com/ and navigate to Experiments in the left-hand navigation panel.

Click on the **Create** button and enter the name and description for your experiment. Click **Create**.

![image](https://user-images.githubusercontent.com/1315028/154571621-4022dddb-6689-4a25-9401-f813a159ef9f.png)

In the Setup tab, define the test groups for this experiment. You can define what percentage of users should receive the group's configured values. Click on the pencil icon next to the _sample_parameter_ and enter the name and type of your experiment parameter, and click **Confirm**. Enter the values that the parameter will take for the control and test groups.  

![image](https://user-images.githubusercontent.com/1315028/154576194-0b38bbe6-feb8-47a1-b460-3c0c2e9e58c6.png)

In the **Allocation** panel, enter the percentage of users that you want to allocate to this experiment. 

![image](https://user-images.githubusercontent.com/1315028/138972419-b7c42f97-29ec-407e-851f-3301130a21c5.png)

Enter the key metrics you want to track in this experiment. While Statsig will show you experiment results 
for all your metrics, these key metrics represent your hypothesis for the experiment. Establishing a hypothesis
upfront ensures that the experiment serves to improve your understanding of users rather than
simply serving data points to bolster the case for shipping or not shipping your experiment.   
Finally, don't forget to click on the **Save** button at the top right hand side of the page to complete your experiment setup.

![image](https://user-images.githubusercontent.com/1315028/138973362-69b53d48-745a-462f-a275-b0a3720d4d90.png)

## How to run an A/A test

In this guide, we use the Statsig Javascript client SDK. See the Statsig [client or server SDKs docs](https://docs.statsig.com/#sdks) for your desired programming language and technology.

<Install />

After you install the SDK, you must initialize the SDK using an active **Client API Key** from the **API Keys** tab under **[Settings](https://console.statsig.com/settings)** in the Statsig console.

In addition to the Client API key, you must also pass in a `Statsig User ID` to ensure users can be assigned and tracked for different variants of the experiment.

<Initialize />

## Step 1: PLACEHOLDER 

Get your experiment's configuration parameters to enable the user to see the experience you want to create with each variant. In this case, we fetch the value of the shape parameter that we had created earlier.

```jsx
const expConfig = statsig.getExperiment("onboarding_banner");

const showBanner = expConfig.get("showbanner", false);
 
```

Now when a user renders this page in their client application, you will automatically start to see a live log stream in the Statsig console when you navigate to your experiment and select the **Diagnostics** tab.

![image](https://user-images.githubusercontent.com/1315028/139113152-7d19afa1-733f-4ee4-b788-3d39cecedae1.png)

At this stage, you may also want to track downstream events to measure how your users are responding to different variants of the experiment. To do this, call the `LogEvent` API with the key measure that you may want to aggregate as well as other metadata that you may use as additional dimensions to breakdown the aggregate results.

```jsx
statsig.logEvent('add_to_cart', 'groceries', {'price': '9.99', 'SKU_ID': 'SKU-123'});
```

As the experiment progresses, you will see how many experiment checks occur and how many events are logged on an hourly basis in the **Diagnostics** tab.


## Step 2: PLACEHOLDER 

Within 24 hours of starting your experiment, you'll see the cumulative exposures in the **Results** tab.

![image](https://user-images.githubusercontent.com/1315028/154574304-79b564b3-0833-49d5-bc65-427b59051343.png)

You will also start to see the key results for each test group compared to the control in the **Results** tab. 

![image](https://user-images.githubusercontent.com/1315028/154574509-adde9b5c-5152-4c91-9e14-bb2c5615b808.png)

In the **Metric Lifts** panel, you can see the full picture of how all your tagged metrics have shifted in the experiment.

![image](https://user-images.githubusercontent.com/1315028/154574843-480b16b6-2785-4246-87e2-afae03ff358f.png)

Once you start to see statistically significant results, either green (positive) or red (negative), you're getting ready to make a decision about whether to ship the test variant. 

Alternatively, you can choose to ramp up the experiment to a larger user base by increasing the allocation in the **Setup** tab. We recommend scaling up allocation slowly in the initial stages, and then by a larger margin in later stages, say 0% -> 2% -> 10% -> 50% -> 100%. This helps you get more data and build more confidence before you decide to ship the experiment.

## Step 3: PLACEHOLDER 

