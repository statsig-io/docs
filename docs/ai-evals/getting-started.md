---
title: Getting Started

sidebar_label: Getting Started
slug: /ai-evals/getting-started


last_update:
  date: 2025-07-25
---


## How to create and run an offline eval in 10 minutes


**1. Create a Prompt within Statsig**

This captures the instruction you provide to an LLM to accomplish your task. You can now use the Statsig [Node](/server-core/node-core#getting-a-prompt) or [Python](/server-core/python-core/#getting-a-prompt) Server Core SDKs to retrieve this prompt within your app and use it. 

<img alt="image" src="https://github.com/user-attachments/assets/a17b3c4d-2126-4dfe-8d4b-d40b1838f878" />



**2. Create a dataset you can use to evaluate LLM completions for your prompt**

For the example above, this might be a list of words, along side known good translations in French. Small lists can be entered (or upload a CSV).

<img alt="image" src="https://github.com/user-attachments/assets/6d4b1abc-bde9-4d63-9d0c-95fef60b3f9a" />


**3. Create a grader that will grade LLM completions for your prompt**

Configure a grader that compares the LLM completion text with the reference output. You can use one of the out of box string evaluators, or even configure an LLM-as-a-Judge evaluator that mimics a human's grading rubric.

<img alt="image" src="https://github.com/user-attachments/assets/3cd510f7-c267-4cdd-bebe-dbee527a5318" />

**3. Run evaluation**

Run an evaluation on a version of the prompt. You should see results in a few minutes that look like this. You can click into any row of the dataset to understand more about the evaluation for that row.

<img alt="image" src="https://github.com/user-attachments/assets/c450f277-b2ba-4657-b747-440b43859f20" />

If you have scores for multiple versions, you can compare them to see what changed between versions.

<img alt="image" src="https://github.com/user-attachments/assets/fd593e52-ddec-4826-bf4b-c2ca1d43e4f0" />

