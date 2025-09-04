---
title: Getting Started

sidebar_label: Getting Started
slug: /ai-evals/getting-started

keywords:
  - owner:vm
last_update:
  date: 2025-07-25
---


## Offline evals in 10 minutes
**1. Create a Prompt within Statsig**
This captures the instruction you provide to an LLM to accomplish your task. You can now use the Statsig Node or Python Server Core SDKs to retrieve this prompt within your app and use it. 
>> Translate user input from English to French. Input : {{input}}

<img width="1484" height="876" alt="image" src="https://github.com/user-attachments/assets/57cd34e0-f6aa-4a90-886d-20db6e43c3f7" />


**2. Eval Step 1: Create a dataset you can use to evaluate LLM completions for your prompt**
For the example above, this might be a list of words, along side known good translations in French. Small lists can be entered (or upload a CSV).
| Input | Desired Output |
|---------|--------|
| people  | gens   |
| little  | petit  |
| before  | avant  |
| number  | nombre |
| public  | public |

**3. Eval Step 2: Create a grader that will grade LLM completions for your prompt**
