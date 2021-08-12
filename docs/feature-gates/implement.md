## Use a language-specific Statsig SDK to implement a feature gate in your application

Statsig provides client and server SDKs so you can choose where to implement your feature gate check. You can also use an SDK for the language of your choice. Select a language below and follow four simple steps to instrument your application. 

### Using the Client SDK 

#### Step 1: Get the Statsig client SDK key

To get the Statsig client SDK key, 
- Log into the Statsig console at https://console.statsig.com 
- Click on the **Project Settings** gear icon next to your account settings at the top right corner of the page as shown below

  ![image](https://user-images.githubusercontent.com/1315028/129190279-60ab338f-02da-4b9a-86ee-e81cb6ac8940.png)

- Click on the **API Keys** tab
- Copy the active **Client API Key**

#### Step 2: Install the SDK

You can install the statsig SDK via npm, yarn or jsdelivr:

**NPM**
```shell
npm install statsig-js
```

**Yarn**

```shell
yarn add statsig-js
```
**jsdelivr**

[jsdelivr](https://www.jsdelivr.com/package/npm/statsig-js) is an open source CDN that we use on www.statsig.com. 

To access the current primary JavaScript bundle, include the following in your client application:

`https://cdn.jsdelivr.net/npm/statsig-js/dist/statsig-prod-web-sdk.min.js`

To access specific versions and files, use the following format:

`http://cdn.jsdelivr.net/npm/statsig-js@{version}/{file}`


#### Step 3: Initialize the SDK

To initialize the SDK, copy the following in your client application:
  
  ```jsx
  const statsig = require('statsig-js');

  await statsig.initialize(
    'client-sdk-key',
    { userID: 'some_user_id' },
    { environment: { tier: 'staging' } }, // optional, pass options here if needed
);
```
You must pass a user ID at a minimum to initialize the SDK. Statsig also provides built-in user attributes such as email, IP address, user agent, country, locale, and client version that you can also pass as part of a user object to create targeting rules based on any of these dimensions.

```jsx
const user = {
    userID: currentUserID,
    ip: currentIP,
    custom: {
        new_user: true,
        level: 2
    }
};

await statsig.initialize('client-sdk-key', user);
```


#### Step 4: Check the feature gate


To implement a feature gate, you must include a feature gate check in your application code. 

A feature gate check returns a Boolean value. A feature gate is closed/off and a gate check returns **false** by default. After you have created a rule to target a set of users, the feature gate check returns **true** when you perform a check for an eligible user. You can use this return value to expose the eligible user to the feature as shown below.

```jsx
if (statsig.checkGate('new_homepage_design')) {
  // Gate is on, show new home page
} else {
  // Gate is off, show old home page
}
```


#### Step 5 (Optional): Log an event

You can optionally log an event to capture any metrics that show the impact of your feature. 

```jsx
statsig.logEvent('add_to_cart', 'SKU_12345', {'price': '9.99', 'item_name': 'diet_coke_48_pack'});
```


### Using the Server SDK

#### Step 1: Get the Statsig server secret key

To get the Statsig server secret key, 
- Log into the Statsig console at https://console.statsig.com 
- Click on the **Project Settings** gear icon next to your account settings at the top right corner of the page as shown below

  ![image](https://user-images.githubusercontent.com/1315028/129190279-60ab338f-02da-4b9a-86ee-e81cb6ac8940.png)

- Click on the **API Keys** tab
- Copy the active **Server Secret Key**

#### Step 2: Install the SDK

You can install the statsig SDK via npm or yarn:

**NPM**
```shell
npm install statsig-node
```

**Yarn**

```shell
yarn add statsig-node
```

#### Step 3: Initialize the SDK

To initialize the SDK, copy the following in your server side application code:
  
 ```jsx
  const statsig = require('statsig-node');

  await statsig.initialize(
    'server-secret-key',
    { environment: { tier: 'staging' } }, // optional, pass options here if needed
  });
```


#### Step 4: Check the feature gate


To implement a feature gate, you must include a feature gate check in your application code. 

A feature gate check returns a Boolean value. A feature gate is closed/off and a gate check returns **false** by default. After you have created a rule to target a set of users, the feature gate check returns **true** when you perform a check for an eligible user. You can use this return value to expose the eligible user to the feature as shown below.

```jsx
const user = {
  userID: '12345',
  email: '12345@gmail.com',
  ...
};

const showNewDesign = await statsig.checkGate(user, 'new_homepage_design');
if (showNewDesign) {
  // show new design here
} else {
  // show old design here
}
```

#### Step 5 (Optional): Log an event

You can optionally log an event to capture any metrics that show the impact of your feature. 

```jsx
statsig.logEvent(user, 'add_to_cart', 'SKU_12345', {'price': '9.99', 'item_name': 'diet_coke_48_pack'});
```







