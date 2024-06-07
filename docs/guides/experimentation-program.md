---
sidebar_label: Bootstrapping Your Experimentation Program
title: Bootstrapping Your Experimentation Program
---

In this guide, we focus on chalking out a simple and successful program to get started with experimentation at your company using Statsig. The best part? You can get started completely for free, with Statsig’s free tier of up to 5M events per month and no limits on the number of team members.

## 1. Generate product ideas

Generating ideas to experiment with is half the work in running an experimentation program. In addition to dogfooding your product, you could generate ideas by studying the competition, researching existing product metrics, and combing through UX research and user feedback channels. 

Everyone uses a mix of methods to brainstorm ideas based on their specific business context; the next section outlines three frameworks that we use most at Statsig and also find to be most common among our customers.

**Generate ideas based on your business context**

1. *Turn every upcoming feature into an experiment.* This is so simple to do that it naturally draws our teams at Statsig to put every new feature behind a feature flags. Statsig’s feature flags (we call them "gates") automatically convert a feature roll-out into an A/B test by measuring the impact of the roll-out on all your product and business metrics as the roll out proceeds, enabling you to hit the ground with your experimentation program with minimal effort. If your engineering team is already using feature flags to roll out new features, Statsig’s [Feature Flags](https://docs.statsig.com/feature-flags/working-with) are the simplest path to your first A/B test. 
2. *Work backwards from your company goals.* This is the second most popular approach among our customers. For example, if adoption growth is a key strategic goal that your leaders have laid out for the year, aligning with that goal sets you up nicely to deliver impact that’s immediately visible and material to the company. The key to this approach is breaking down the strategic goal and key performance indicators (KPIs) into one or more actionable metrics that you can move with incremental, iterative improvements. For example, total revenue or monthly active users (MAUs) are strategic KPIs that are hard to move directly. You want to pick an actionable metric, such as the number of users completing checkout, or the number of days it takes a user to perform a key action in your application.  
3. *Break down your business levers.* You can also start by breaking down the key drivers of your business. For example, the diagram below breaks down an e-commerce business into progressively granular levers, where each lever opens more concrete opportunities to experiment. If you decide to work on increasing the cart checkout rate, you can experiment with improving your call to action (CTA), minimizing distractions, reducing friction, increasing trust, and building a sense of urgency.

![image](https://user-images.githubusercontent.com/1315028/162062869-ead09b8f-0d2e-4c01-8bed-5c40039abe56.png)

**Prioritize your ideas**

To prioritize your ideas, Statsig recommends a simple return-on-investment (RoI) based approach. An idea that’s (1) simple to execute, (2) easy to measure, and (3) high potential should automatically rise to the top of your priority list. For your first experiment, start with an idea that’s simple to execute. After a few experiments, your priorities may evolve towards ideas that are higher impact and more controversial.  

Congratulations! Generating a prioritized list of ideas is more than half the work in running an experimentation program.


:::info 💡 **(Optional) Create a backlog**
With a list of ideas to test, you have the option of creating an experimentation backlog. Running an experiment automatically generates more ideas, so don’t overthink this part. Think of it as a “nice to have” list in your back pocket.
:::

## 2. Run a simple A/B test

**Clarify your hypothesis**

Use one of your high priority ideas to form a hypothesis that you want to test. A well framed hypothesis can help you transform the idea to a clear expectation that can be either proven or disproven with an experiment. Building this clarity early will help you quickly align and engage your stakeholders around your experiment, and later set you up for success in objectively evaluating your experiment results. 

A hypothesis is composed of three elements: Action, Predicted Outcome, and Rationale. Here’s an example:

| Element             | Example                                                                           | 
| --------------------| --------------------------------------------------------------------------------- | 
| Action              | If we reduce the number of fields on the sign-up page                             | 
| Predicted Outcome   | Then the percentage of users that complete signup will increase                   | 
| Rationale           | Because they have to spend less time and effort to see value in the product       | 


**Create your experiment**

Statsig makes it really simple for you to create an A/B test within minutes. To create an experiment in the [Statsig console](https://console.statsig.com/login), enter a name for the experiment, enter the variants that you want to test, and allocate what percentage of your user base is eligible to participate in the experiment.

**Set up your application for the experiment**

To start the experiment, set up your application to assign users to the variants in the experiment using a client or server SDK. You can validate that your application is correctly assigning users through the **Diagnostics** tab under **Experiments** in the Statsig console. Here’s a [quick start guide](https://docs.statsig.com/guides/abn-tests) to get you running within minutes.

To enable Statsig to compute experiment results, you can either log events directly from your application, configure your data collection service such as Segment to pipe your application events to Statsig, or configure Statsig to ingest data from your data warehouse. 

**Validate your experiment configuration**

Once you’ve set up your application, you should be able to immediately validate that your application is configured correctly via the Statsig console. As users are exposed to different variants in the experiment, the Statsig console will show you a live exposure stream of each event. 

Statsig will also flag any issues with your experiment set up. For example, if you’re not including an identifier in your exposure events, Statsig will flag this as an error in your experiment. If the identifier in your exposure events doesn’t match other application events that you’re sending to Statsig, you won’t be able to see any results and Statsig will flag this as an error up front. 

If you’ve set up your experiment correctly, Statsig will mark the experiment as ready to start. Go ahead and hit the start button on your experiment.

:::info 💡 **(Optional) Setting a target end date for your experiment**
 ** Setting a target end date using Statsig’s built-in power calculator ensures that every one in your team is aware that any decisions prior to the target end date would be premature. This is because the experiment needs to gather enough data to generate reliable results that you can use for your decisions.
:::

:::info 💡 **Running experiments in your registration funnel** 
if your experiment is meant to test improvements in your app registration, you will likely not have an userID for users who haven’t yet signed up on your app. Be sure to create an experiment using a **stableID,** an identifier that Statsig SDKs will auto-generate for you and use this identifier as the unit of analysis for the experiment in the absence of a userID.
:::


:::info 💡 **Selecting your key metrics** 
When you create an experiment, you can configure the key metrics that you want to review to evaluate your hypothesis. Statsig will automatically compute results for all your metrics. However, explicitly marking your key metrics will ensure that you’re making sound decisions and not cherry picking metrics that are showing a positive uptick.
:::

**Organize regular experiment reviews**

Experiment reviews are a great mechanism to discuss experiment results with your team, share your experiment analysis with others, dive deeper into results that seem counterintuitive, and align on decisions to roll out an experiment or stop an inconclusive one. Include an experimentation expert in these reviews to ensure your teams develops the rigor and best practices in reading statistical results. Experts can also help guide these reviews to explore fertile new opportunities in areas adjacent to the experiment under review. 

Running experiment reviews on a weekly or bi-weekly cadence reinforces the team’s commitment to rigorous, data-driven decision making. Use these reviews to show your team how experiments help them move faster by drawing more power into their own hands instead of blocking on approvals from your busy leaders.

## 3. Share your results

After you review experiment results, don’t forget to share your insights far and wide. As more people in your organization see the power of experimentation at work, the more demand there will be to test more hypotheses, further fueling the experimentation flywheel. A few tactical ways you can do this: 

- **Monthly experimentation update**- Include the # of experiments run, the topline business impact driven by experiments (preferably in a way that directly ties to your business’ topline KPIs), and key learnings. Consider featuring one “highlight experiment” that may have had counterintuitive learnings or an interesting takeaway that scales across teams in the organization. Finally, highlighting a “Top Experimenter” every month is a sure-fire way to reward experimentation adopters on the team, as well as inspire other team members to lean more heavily into experimentation.
- **Dedicated Slack #experimentation channel**- Consider creating a dedicated Slack channel to post experiment learnings in real-time as experiments are called and concluded. Providing the team a light-weight space to post and discuss key learnings from experiments makes experimentation observer-friendly and low-friction to get involved in the discussion. Statsig also offers a great “Share” experience for experiment results, which makes it easy for members of the team who might not already be on Statsig to view and engage with experiment results.
- **Weekly Experiment Review**- Make your Weekly Experiment Review an open invite for the broader team, letting anyone who’s interested in learning more about the experiments being run and how to discuss and analyze experiment results to join the meeting in a drop-in capacity. Zoom and remote work have made this especially doable- what’s another person in a virtual room!

## 4. Accelerate your speed of experimentation

Getting a few successful experiments under your belt will help you build a sense for what success looks like. It’s time to cement the value of experimentation and increase the pace of experimentation. 

**Cement the value of experimentation**

As you pick ideas for new experiments, start to incorporate a balance of ideas where the outcomes are more vs. less certain. Choosing a few controversial and higher-impact ideas can help you cement the value of experimentation in your organization. The more counterintuitive the results, the more memorable the experiments will be. To increase the chances of counterintuitive results, choose experiments where the outcome is uncertain.

**Increase the pace of experimentation with self-serve experiments**

Statsig’s trustworthy experiment results allow any team or engineer to hit the ground running with experiments. Statsig also lowers the human cost of an experiment to nearly zero so that you’re no longer a bottleneck for running more experiments. Educate team members on setting up and running their own experiments. As you let others run experiments, you can now shift focus to helping others generate new ideas, reviewing their experiment set up, helping them analyze results, and sharing resources such as experiment review templates and decisions from past experiments. Statsig’s pricing model ensures that you can empower every engineer to run their own experiments. You don’t pay licensing costs ‘by seat, per engineer’, you only pay for exposures that generate results. 

**Build incentives to run more experiments**

When we speak with early adopters, we see two broad patterns in how they plan their product roadmaps: (1) a leader or selected individual (e.g. PM) comes up with a product roadmap and engineers are rewarded for shipping items on the roadmap, (2) every engineer is rewarded for the impact they deliver regardless of the effort they put into shipping ‘new features’ (that often fail). We find that the second category better sets themselves up for success because each engineer is free to discover new ideas, has the ability to bring data to show their impact, and focuses their efforts only on what works for their end-users. Set up similar incentives for your team: *measure yourself and your team by the impact you deliver rather than the number of features that you ship.*
  
## 5. Build a culture of learning

**Accelerate Learning**

> “If you double the number of experiments you do per year you're going to double your inventiveness.”
> 
> 
> Jeff Bezos, founder and Chairman of Amazon.com
> 

What Bezos doesn’t say is that teams that run more experiments learn about their end-user preferences faster than their competitors, which leads them to become more inventive. These fast-learning teams realize that their product assumptions are frequently wrong and that their most favored features can have unintended impacts. This realization induces a cultural shift  where every team member brings data to make smart product decisions at every level, every day. Even when an experiment yields inconclusive results, these teams use the experiment as an opportunity to dive deeper into user behavior, brainstorm possible reasons for unexpected results, and test their rationale in future experiments.

**Measure the impact of your experimentation program**

The tools, processes, and incentives serve as ingredients in your experimentation program, and you can employ each ingredient in different measures to suit your business context. Regardless of how you employ these ingredients, a quantifiable way to evaluate your experimentation program goes a long way in (a) setting goals for your program and (b) demonstrating the *before* and *after* views of your team’s productivity. Here’s a score card with a key criteria that successful experimentation teams use to evaluate their progress. 
You can score yourself on specific dimensions initially, and calculate a more holistic (weighted) score as your program grows in scope and sophistication. 

  
| Success Criteria                                                    | Score     | Weight     | 
| ------------------------------------------------------------------- | --------- | ---------- | 
| Time spent to set up an experiment                                  |           |            |        
| Time spent to prepare experiment results                            |           |            | 
| Percent of product decisions made with reliable and trustworthy data|           |            | 
| Number of experiments run per week                                  |           |            |
| Quality of experiments run per week                                 |           |            | 
| Time spent indexing and searching past results and team discussions |           |            |
  

  
