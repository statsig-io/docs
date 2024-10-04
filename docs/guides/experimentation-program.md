---
sidebar_label: Bootstrapping Your Experimentation Program
title: Bootstrapping Your Experimentation Program
---

In this guide, we'll outline a straightforward and successful approach to starting an experimentation program using Statsig at your company. Best of all, you can get started completely free with Statsig’s free tier, which includes up to 5M events per month and no limit on the number of team members.

## 1. Generate Product Ideas

Generating ideas for experimentation is crucial to running a successful program. There are various methods for brainstorming ideas, such as dogfooding your product, studying competitors, analyzing existing metrics, and gathering UX research and user feedback.

Here are three common frameworks we use at Statsig, which are also popular among our customers:

### Generate Ideas Based on Your Business Context

1. **Turn Every Upcoming Feature into an Experiment**: 
   - This is one of the simplest and most natural methods. At Statsig, we often put every new feature behind a feature flag. Statsig’s [Feature Flags](/feature-flags/working-with) (also called "gates") automatically convert a feature rollout into an A/B test, measuring the impact on your key metrics as the rollout progresses. If your engineering team already uses feature flags for releases, this is the easiest path to your first A/B test.

2. **Work Backwards from Company Goals**:
   - Many of our customers begin by aligning experiments with strategic company goals. For example, if the goal is to drive adoption growth, break down the goal into actionable metrics (e.g., total revenue, monthly active users) and run experiments that can move those metrics incrementally. Instead of targeting broad goals like revenue, focus on specific, actionable metrics like checkout completions or user onboarding time.

3. **Break Down Your Business Levers**:
   - Decompose key drivers of your business to reveal more granular areas where you can experiment. For example, an e-commerce business might focus on increasing the checkout rate, which could lead to experiments on improving the CTA, reducing friction, or building urgency. 

![image](https://user-images.githubusercontent.com/1315028/162062869-ead09b8f-0d2e-4c01-8bed-5c40039abe56.png)

### Prioritize Your Ideas

Use a simple return-on-investment (RoI) approach to prioritize your experimentation ideas:
- Choose ideas that are **simple to execute**, **easy to measure**, and **high in potential**.
- Start with ideas that are easy to implement. Once you’ve run a few experiments, focus on higher-impact or more controversial ones.

Generating a prioritized list of ideas is more than half the work in running a successful experimentation program.

:::info 💡 **(Optional) Create a Backlog**
You can create an experimentation backlog from your list of ideas. As running experiments often generates more ideas, don’t overthink it—consider it a “nice to have” for future testing.
:::

## 2. Run a Simple A/B Test

### Clarify Your Hypothesis

Start by formulating a hypothesis for one of your high-priority ideas. A well-framed hypothesis defines the expected outcomes of your experiment, making it easier to align with stakeholders and evaluate results objectively.

A hypothesis consists of three key elements: **Action**, **Predicted Outcome**, and **Rationale**. Here’s an example:

| Element             | Example                                                                            | 
| --------------------| ---------------------------------------------------------------------------------- | 
| **Action**           | If we reduce the number of fields on the sign-up page                              | 
| **Predicted Outcome**| Then the percentage of users that complete sign-up will increase                   | 
| **Rationale**        | Because users will spend less time and effort, leading to higher completion rates  |

### Create Your Experiment

Statsig makes it simple to create an A/B test. In the [Statsig Console](https://console.statsig.com/login):
1. Name your experiment.
2. Define the variants you want to test.
3. Set the percentage of users eligible to participate.

### Set Up Your Application for the Experiment

To start the experiment:
1. Use a Statsig SDK to assign users to experiment variants.
2. Validate assignments through the **Diagnostics** tab in the Statsig console. Here's a [quick start guide](/guides/abn-tests) to help you set this up.

To compute results, you can:
- Log events directly from your application.
- Pipe events to Statsig via a service like Segment.
- Configure Statsig to ingest data from your warehouse.

### Validate Your Experiment Configuration

Once your application is set up:
- You can validate it immediately through the Statsig console, which provides a live exposure stream as users encounter different variants.
- Statsig will flag issues, such as missing identifiers or mismatches between exposure and application events, ensuring you won’t miss any results.

Once validated, hit **Start** to begin the experiment.

:::info 💡 **(Optional) Set a Target End Date**
Set a target end date using Statsig’s power calculator. This ensures that decisions are made only after the experiment has gathered enough data for reliable results.
:::

:::info 💡 **Running Experiments in Registration Funnels**
If you don’t have user IDs for users who haven’t signed up yet, create an experiment using a **stableID**, which Statsig SDKs auto-generate. This will act as the unit of analysis.
:::

:::info 💡 **Selecting Key Metrics**
When setting up an experiment, configure the key metrics to evaluate your hypothesis. Statsig will compute results for all your metrics, but focusing on key metrics helps avoid cherry-picking.
:::

### Organize Regular Experiment Reviews

Experiment reviews provide a structured environment to discuss results, share insights, and align on decisions. Run weekly or bi-weekly reviews to reinforce a culture of data-driven decision-making and experimentation rigor.

## 3. Share Your Results

Sharing your results widely is key to building momentum for experimentation. Here are a few ways to share insights across your organization:

- **Monthly Experimentation Update**: Summarize the number of experiments run, their business impact, and key learnings.
- **Slack #experimentation Channel**: Use a dedicated channel to post real-time experiment learnings and foster discussion.
- **Weekly Experiment Review**: Open these reviews to a broader audience to increase visibility and foster engagement.

## 4. Accelerate Your Speed of Experimentation

### Cement the Value of Experimentation

As you gain confidence, try balancing ideas with more uncertain outcomes. Counterintuitive results can solidify the value of experimentation and lead to new discoveries.

### Increase Experimentation with Self-Serve Experiments

Statsig’s results are trustworthy and easy to interpret, making it possible for any team to run experiments. Lower the barrier to entry for experimentation by educating team members on how to create and run their own experiments.

### Build Incentives to Run More Experiments

Encourage engineers and teams to prioritize impact over shipping new features. Reward them for experimentation outcomes rather than the volume of shipped features, ensuring a focus on end-user value.

## 5. Build a Culture of Learning

### Accelerate Learning

> “If you double the number of experiments you do per year, you're going to double your inventiveness.”
> — Jeff Bezos, Founder of Amazon

Frequent experimentation leads to faster learning, helping teams discover user preferences and make data-driven product decisions. Even inconclusive results can prompt deeper analysis and more informed hypotheses.

### Measure the Impact of Your Experimentation Program

Evaluate your program’s success using key criteria such as:

| Success Criteria                                                    | Score | Weight | 
| ------------------------------------------------------------------- | ----- | ------ | 
| Time spent to set up an experiment                                  |       |        | 
| Time spent to prepare experiment results                            |       |        | 
| Percentage of decisions made using trustworthy data                 |       |        | 
| Number of experiments run per week                                  |       |        |
| Quality of experiments run                                           |       |        |
| Time spent indexing/searching past results and discussions          |       |        |

Use these criteria to score your team’s progress, set goals, and demonstrate the productivity boost from a well-implemented experimentation program.

---
