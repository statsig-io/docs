---
title: Statsig Lite
sidebar_label: Statsig Lite
slug: /experimentation/statsig-lite
keywords:
  - owner:vm
last_update:
  date: 2025-03-21
---

## What it is
Statsig Lite is a free experiment calculator, powered by our stats engine. It lets you visualize experiment results for data from experiments you've already run. You bring anonymized experiment exposure and metrics/events in CSVs, and get to preview it in the Statsig Console without connecting your production applications or data warehouses.

## FAQ

### Should I anonymize my data?
Yes. Please use anonymized data with Statsig Lite - there's no reason to do otherwise.

### Who can see my data?
We will email you a link to your results - with a secret embedded. You can choose to share this link with anyone you want to have access to this view. 

### When would I do this?
The most common case for this is teams that use tools like Optimizely for experiment assignment, but can't use the same tool for experiment analysis. This often happens because the data that needs to be analyzed sits in a warehouse or a system Optimizely can't access and teams fall back to manual analysis for experiments. Statsig can now automate that analysis for you. 

It is also a way to quickly get a sense for what your experimental data will look like on Statsig in a few minutes. 

### I don't have real data to upload. Can I get some sample data?
Yes. The Statsig Lite website has some sample data you can start with. Tools like ChatGPT also make it easy to create a sample dataset using English language prompts like [this](https://chatgpt.com/share/67bf3105-b984-800c-99b4-02935deb5f5b). 

### Is Statsig Lite missing features? 
Statsig Lite is meant to be a quick preview. Sign up for a Statsig account to get access to features including automated health checks (balanced exposures, pre-experimental bias, outlier detection), advanced out-of-the-box statistical methodologies (stratified sampling, differential impact detection, sequential testing) and the ability to quickly dive deeper into results with custom queries.
