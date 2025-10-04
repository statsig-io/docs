---
title: Getting Started

sidebar_label: Getting Started
slug: /ai-evals/getting-started


last_update:
  date: 2025-07-25
---

# Getting Started with AI Evals

This guide walks you through creating and analyzing your first offline evaluation in about 10 minutes. You'll learn how to set up an AI Config (Prompt), create a test dataset, configure automated grading, and view evaluation results.

## Create and Analyze an Offline Eval in 10 Minutes
<!-- (Coming soon: How to start an online eval in 15 minutes) -->


### Step 1: Create an AI Config (Prompt)

An AI Config captures the instruction you provide to an LLM to accomplish a specific task, along with model configuration (provider, model name, temperature, etc.). You can create multiple versions as you iterate and choose which one is "live" (retrieved by your application).

Use the Statsig [Node](/server-core/node-core#getting-a-prompt) or [Python](/server-core/python-core/#getting-a-prompt) Server Core SDKs to retrieve and use your AI Config in production.

<img alt="image" src="https://github.com/user-attachments/assets/a17b3c4d-2126-4dfe-8d4b-d40b1838f878" />



### Step 2: Create an Evaluation Dataset

Build a dataset to evaluate LLM completions for your prompt. For the translation example above, this would include a list of words alongside known correct translations in French. 

You can enter small datasets manually or upload a CSV file for larger test sets.

<img alt="image" src="https://github.com/user-attachments/assets/6d4b1abc-bde9-4d63-9d0c-95fef60b3f9a" />


### Step 3: Configure a Grader

Set up a grader to automatically score your LLM outputs. You can:
- Use built-in string evaluators (exact match, contains, regex)
- Configure an LLM-as-a-Judge evaluator that applies human-like grading rubrics
- Create custom graders for domain-specific evaluation criteria

The grader compares the LLM completion with the reference output and assigns a score from 0 (fail) to 1 (pass).

<img alt="image" src="https://github.com/user-attachments/assets/3cd510f7-c267-4cdd-bebe-dbee527a5318" />

### Step 4: Run Your Evaluation

Execute the evaluation on a specific version of your AI Config. Results typically appear within a few minutes, showing:
- Overall score distribution
- Per-row evaluation details (click any row to see the full assessment)
- Pass/fail rates across your dataset

<img alt="image" src="https://github.com/user-attachments/assets/c450f277-b2ba-4657-b747-440b43859f20" />

### Step 5: Analyze and Compare Results

**Categorize and segment your results:**
You can categorize your dataset (e.g., by language, complexity, topic) and view scores broken down by category to identify specific areas for improvement.

<img alt="image" src="https://github.com/user-attachments/assets/3c0de7c4-6721-4a45-9a61-04a63db68913" />

**Compare versions:**
If you have evaluation scores for multiple AI Config versions, compare them side-by-side to understand what changed between versions and identify improvements or regressions.

<img alt="image" src="https://github.com/user-attachments/assets/fd593e52-ddec-4826-bf4b-c2ca1d43e4f0" />

