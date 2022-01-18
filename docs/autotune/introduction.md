---
title: Autotune
sidebar_label: Introduction
slug: /autotune
---

Autotune automatically finds the winning variant for you among a group of candidates, and dynamically allocates traffic to optimize for a single target metric.

## How Autotune works

Autotune is Statsig's [Bayesian Multi-Armed Bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit).  Autotune will test the variants you provide and measure their effect on a target metric.  As it learns, it will adjust the traffic towards the variations that perform the best until it ultimately settles on the "best" variation and divert 100% of traffic to the winner.  On the backend, we use a Thompson Sampling (Bayesian) algorithm that estimates each variant's probability of being the best variant, and allocates it that proportion of traffic.  For example, if a given variant has a 60% probability of being the best, Autotune will provide it 60% of the traffic.  At a high level, the multi-armed bandit algorithm works by adding more users to a treatment as soon as it recognizes that it is clearly better in maximizing the reward (the target metric).  Throughout the process, higher performing treatments are allocated more traffic whereas underperforming treatments are allocated less traffic. When the winning treatment beats the second best treatment by enough margin, the process terminates.

## When to use Autotune

Unlike A/B testing (Statsig Experiments), the traffic split isn't fixed over the duration of the test.  Instead, Autotune diverts more traffic to the winner and making fewer mistakes.  This is ideal when there are 4+ variations as it usually can rule out the worst performers and focus traffic on the best variants.  The downside is that users users are not guaranteed a consistent experience upon return visits.

Statsig recommends using Autotune in any of the following scenarios:
1. The cost of exposing users to a losing treatment is high. For example, sending users to a landing page that is inferior may result in lost revenue. While this may be a one-time loss, testing two user registration flows may result in users that never sign up. In this case, Autotune avoids permanently losing users.  
2. You want the decision to be automated.  Because Autotune automatically selects the winner, it requires no human decision-making.  This is great for launching dozens of simultaneous tests, or for running a long-term unmonitored test.
3. When it's okay for users to be exposed to different experiences upon return visits.  For example, changing text or recommendation algorithm.
4. When you have one single and simple metric to optimize for (eg. click-through rate).

Autotune does not work well in the following scenarios:
1. When you have a complex ecosystem and want to understand secondary effects, tradeoffs between variants, and user behavior.
2. When you are optimizing for long-term or complex and indirect effects.

In the above cases, we recommend A/B testing.

## How to use Autotune

1. To create a new Autotune experiment, navigate to the Autotune section on the Statsig console: https://console.statsig.com/ 
2. Click the Create button and enter the name and description of the Autotune experiment that you want to create. 
3. Provide the variants that you want to test in the Autotune experiment.  Each variant needs a name, and a corresponding JSON value.  The variant that's listed as Control/Default will be returned when the Autotune experiment is not running.

![image](https://user-images.githubusercontent.com/1315028/131385189-5f0c1d93-ba87-4159-8995-3c30991587a0.png)

4. Select the success event to optimize for as shown below.  You can further specify an optional [event value](/guides/logging-events).

![image](https://user-images.githubusercontent.com/1315028/131385239-5a76d253-022b-457e-a370-f9ee7ce566a1.png)

There are a few parameters you can specify:
- Exploration Window - The initial time period where Autotune will equally split the traffic.  This is useful for noisy or temporal metrics where hourly swings in data can bias Autotune's initial measurements.
- Attribution Window - The maximum duration between the exposure and success event that counts as a success.  We recommend 1 hr for most applications, but adjust accordingly if you expect the success event to lag the exposure event by several hours.
- Winner Threshold - The threshold at for when Autotune will declare a winner and stop collecting data.  Setting a lower number will result in faster decisions but increases the probability of making suboptimal decisions (picking the wrong winner).

Click "Create" to finalize the setup.

6. Similar to Feature Gates and Experiments, you can find a code snippet for the exposure check event to add to your code.  Don't forget to click "Start" when you're ready to launch your Autotune test.

![image](https://user-images.githubusercontent.com/1315028/131384977-144dd868-787b-45ad-9ff1-fc9afbd4c769.png)

## How to monitor your Autotune Test

The results tab within Autotune provides a view of your ongoing and completed Autotune tests.

### Result

![image](https://user-images.githubusercontent.com/77478319/150008289-2119f756-ff71-4634-af85-fca840cf1e4c.png)

This section shows you a summary of your Autotune test.  The top bars show a 95% Bayesian Credible interval for the estimated conversion rate (exposure -> success event).  There is a 95% chance that the real value is within this interval.  The table shows the number of exposures, success events, and overall success rate for each variation across the duration of the test.  We also provide a plain English text to describe the current state of the test.

### Details

![image](https://user-images.githubusercontent.com/77478319/150009034-74a9f2b9-42ee-4d24-9c95-5fe6dff35334.png)

There are several charts provided:
1. Probability of Best - shows the progress of the Autotune test, and which variant is currently winning.
2. Cumulative Success Rate - Shows the overall success rate (exposure -> success) to date.
3. Daily Success Rate - Shows the success rate for each variation per day.
4. Traffic Allocation - Shows the daily number of exposures allocated to each variation on a given day.
