---
title: Feature gating with http api
sidebar_label: HTTP API
slug: /feature-flags/implement/http-api
---

## Using the HTTP API

### Step 1: Get the Statsig client SDK key

To get the Statsig client SDK key, 
- Log into the Statsig console at https://console.statsig.com 
- Click on the **Project Settings** gear icon next to your account settings at the top right corner of the page as shown below

  ![image](https://user-images.githubusercontent.com/1315028/129190279-60ab338f-02da-4b9a-86ee-e81cb6ac8940.png)

- Click on the **API Keys** tab
- Copy the active **Client API Key**
  
### Step 2: Post a check gate request with Statsig
  
```bash
curl \
  --header "statsig-api-key: <CLIENT-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"user": { "userID": "<" },"gateName":"<YOUR-GATE-NAME>"}' \
  "https://api.statsig.com/v1/check_gate"
```
Response:
`{"name":"YOUR-GATE-NAME","value":false}`

  
### Step 3 (Optional): Post a log event request with Statsig

```bash
curl \
  --header "statsig-api-key: <CLIENT-SDK-KEY>" \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"events": [{"user": { "userID": "42" }, "time": 1616826986211, "eventName": "test_api_event"}]}' \
  "https://api.statsig.com/v1/log_event"
```
  
Response:
`{"success":true}`

    
