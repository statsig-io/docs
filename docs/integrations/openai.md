---
title: OpenAI 
keywords:
  - owner:brock
last_update:
  date: 2025-09-18
---

## Context

When using a pre-trained large language model, several inputs influence user experience, including the prompts used, the "inference parameters" given to the model, often including parameters like temperature, length penalties and repetition penalties, and even the exact model selected. Tools like Statsig can streamline the process of assigning users to various experiments, such as modifying these inputs, and can automatically identify when changes have a statistically significant impact on user experience metrics. This enables efficient iteration and optimization of user experience by tweaking model choices, prompts, and inference parameters. In this case we show how you can log both implicit indicators of user feedback (like response time) and more explicit ones, like self-reported satisfaction. 

## Introduction

The included Python code offers an example of the simple but powerful interaction between OpenAI's GPT and Statsig to experiment with model inputs and log user events. This example uses OpenAI's ChatCompletion feature to answer questions, plus a Statsig integration to experiment with model versions and log user feedback to the changes.

This example assumes you have a funded OpenAI account, plus a Statsig experiment that varies the model selected between "gpt-3.5-turbo" and "gpt-4". For more info on setting up a Statsig experiment, see the [experiments](/experiments-plus) page.

## Code Breakdown

### Initial Configuration

Of course, you'll need to install both the Statsig and OpenAI Python packages before starting:

```bash
pip3 install openai, statsig
```

After that, we can begin coding in a python file:

```python
import openai
from statsig import statsig, StatsigEvent, StatsigUser
import time

openai.api_key = "your_openai_key"  # Replace with your own key
statsig.initialize("your_statsig_secret")  # Replace with your Statsig secret
user = StatsigUser("user-id") #This is a placeholder ID - in a normal experiment Statsig recommends using a user's actual unique ID for consistency in targeting. See https://docs.statsig.com/concepts/user
```

### The ask_question Function

The following code all occurs in one function titled ask_question (see the [final code](#final-code)) 

1. Get User Input

```python
#ask the user for a question to query GPT with
question = input("\nWhat is your question? ")
```

First, we prompt the user with the question they'd like to ask ChatGPT

2. Query OpenAI's GPT

```python

#track the start time so we can check response time later
start_time = time.time()

completion = openai.ChatCompletion.create(
        model=statsig.get_experiment(user, "statsig_openai_integration").get("model", 'gpt-4'),
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": question}
        ]
    )
```

Next, we request a completion that queries the GPT model specified by the Statsig experiment (either gpt-3.5-turbo or gpt-4). We also start a timer so we can track the response time in our events later on.

3. Display Response & Log Implicit Feedback 

```python
#log "implicit" indicators to Statsig
c = completion.choices[0]
stats = completion.usage #completion object has the number of tokens used - which is that what GPT usage is charged on.
statsig.log_event(StatsigEvent(user, "chat_completion", value=c.finish_reason, metadata={"response_time": time.time() - start_time, "completion_tokens": stats["completion_tokens"], "prompt_tokens": stats["prompt_tokens"], "total_tokens": stats["total_tokens"]}))

#print the message back to the user
print(f"\nAnswer: {c.message['content']}")
```

With the response from OpenAI we have our first set of useful information to log to Statsig - like the response time and tokens used. We log this information with Statsig's SDK, storing them in the metadata of the request. 

4. Collect User Feedback & Log to Statsig
```python
#track explicit feedback: if the user is satisfied with the answer
satisfaction = input("\nDid this answer your question? (y/n): ")

# Log "explicit" indicators to Statsig
if satisfaction == 'y':
    statsig.log_event(StatsigEvent(user, "satisfaction"))
elif satisfaction == 'n':
    statsig.log_event(StatsigEvent(user, "dissatisfaction"))
```

Next, we log a more explicit indicator of feedback, the user's self-reported satisfaction or dissatisfaction. The satisfaction metric can provide a strong indicator of the model's overall power. 

And we're done - we can run this Python program with the following code, now outside of our ask_question function.

```python
if __name__ == "__main__":
    while input("Would you like to ask a question? (y/n): ").lower() == 'y':
        ask_question()
```

### Tips for Using Statsig with AI
1. Experimentation: You can also test other model parameters like temperature, top_p, or initial prompts.
2. Log Useful Data: Consider logging other interesting user interactions or feedback.
3. Analyze and Iterate: After collecting enough data, analyze the results on the Statsig dashboard.
4. User Identification: Consider integrating a mechanism to uniquely identify each user/session.
:::note
Always ensure you're in compliance with user privacy regulations and that you have user consent where necessary.
:::

### Useful Links 
- [OpenAI Documentation](https://platform.openai.com/docs/api-reference/chat/create)

## Final code


```python
import openai
from statsig import statsig, StatsigEvent, StatsigUser
import time

openai.api_key = "your_openai_key"
statsig.initialize("your_statsig_secret")
user = StatsigUser("user-id") #This is a placeholder ID - in a normal experiment Statsig recommends using a user's actual unique ID for consistency in targeting. See https://docs.statsig.com/concepts/user

def ask_question():

    #ask the user for a question to query GPT with
    question = input("\nWhat is your question? ")

    #track the start time so we can check response time later
    start_time = time.time() 
    
    #query GPT with the OpenAI Python library for chat completions
    completion = openai.ChatCompletion.create(
        model=statsig.get_experiment(user, "statsig_openai_collab").get("model", 'gpt-4'), #experiment is setup to return either "gpt-3.5-turbo" or "gpt-4".
        #other than varying the model selected, other attributes could be varied like "temperature", "top_p", "presence_penalty" and more. 
        #See the "Create chat completions" section of the OpenAI documentation for more: https://platform.openai.com/docs/api-reference/chat/create
        messages=[
            {"role": "system", "content": "You are a helpful assistant."}, #Initial prompts are another candidate for experimentation
            {"role": "user", "content": question}
        ]
    )

    #log "implicit" indicators to Statsig
    c = completion.choices[0] #we've only requested one choice, so selecting the first
    stats = completion.usage #completion object has the number of tokens used - which is that what GPT usage is charged on.
    statsig.log_event(StatsigEvent(user, "chat_completion", value=c.finish_reason, metadata={"response_time": time.time() - start_time, "completion_tokens": stats["completion_tokens"], "prompt_tokens": stats["prompt_tokens"], "total_tokens": stats["total_tokens"]}))

    #print the message back to the user
    print(f"\nAnswer: {c.message['content']}")
    
    #track explicit feedback: if the user is satisfied with the answer
    satisfaction = input("\nDid this answer your question? (y/n): ")

    #log "explicit" indicators to Statsig
    if satisfaction == 'y':
        statsig.log_event(StatsigEvent(user, "satisfaction"))
    elif satisfaction == 'n':
        statsig.log_event(StatsigEvent(user, "dissatisfaction"))

if __name__ == "__main__":
    #Let the user abandon the question-asking process when they are done
    while input("Would you like to ask a question? (y/n): ").lower() == 'y':
        ask_question()

```
