---
title: Getting Started with Online Evals

sidebar_label: Getting Started
slug: /ai-evals/getting-started


last_update:
  date: 2025-07-25
---


## Create/analyze an online eval in 15 minutes
This assumes you're already familiar with how to set up an [offline eval in 10 minutes](/ai-evals/getting-started).

**1. Create a Prompt within Statsig**

This captures the instruction you provide to an LLM to accomplish your task. You can now use the Statsig [Node](/server-core/node-core#getting-a-prompt) or [Python](/server-core/python-core/#getting-a-prompt) Server Core SDKs to retrieve this prompt within your app and use it. 

<img alt="image" src="https://github.com/user-attachments/assets/a17b3c4d-2126-4dfe-8d4b-d40b1838f878" />

**2. Create a grader that will grade LLM completions for your prompt**

Configure a grader that judges the completions produced by the LLM. You can use one of the out of box string evaluators, or even configure an LLM-as-a-Judge evaluator that mimics a human's grading rubric. Note that you can't use reference completions from eval datasets when running online evaluations on real user data. 

<img alt="image" src="https://github.com/user-attachments/assets/3cd510f7-c267-4cdd-bebe-dbee527a5318" />

**3. Instrument your app to get the set of prompts to evaluate online**
When you call the SDK function get-PromptSet, you will get back the current live prompt version and a list of candidate prompt versions. You can archive specific versions to retire them from the list.  

TODO : Point to docs snippet on how to use SDK to get prompt eval set and log results. 

**4. Run evaluations and log results**
TODO : Point to docs snippet on how to 


**5. Understand results**
When looking at results for a version, toggle from Offline results to Online results to understand the differences in scores between versions. 

<img width="1294" height="926" alt="image" src="https://github.com/user-attachments/assets/752dfcaf-17a6-43d8-81d2-e3ffb9b6fc98" />

