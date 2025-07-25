---
sidebar_label: Create your first feature flag
title: Create your first feature flag
slug: /quickstarts/feature-gates
keywords:
  - owner:jinayoon
last_update:
  date: 2025-06-03
---

This tutorial walks you through how to check your first Feature Gate in Statsig from end to end. Feature Gates, also known as feature flags, are a way to safely control the rollout of new features to your users without deploying additional code. Common examples for using Feature Gates include shipping new UI elements, API endpoints, or product features. 

By the end of this tutorial, you will have:
* Created a **Feature Gate** in the Statsig console, with  **targeting rules** to enable the feature for a segment of Users
* Initialized a **Statsig Client SDK**
* Checked a single **feature gate** in your code using the `checkGate` function


## Prerequisites
1. A [Statsig account](https://console.statsig.com/sign_up)
2. An existing application you can integrate the Statsig Client SDK into

## Step 1: In the Statsig console
### Create a Feature Gate
For the purposes of this tutorial, we will pretend we are adding a Feature Gate to deploy a new UI element to a user with the "statsig.com" email domain. You can follow along with a specific feature if you have your own scenario in mind.

1. Navigate to [Feature Gates](https://console.statsig.com/gates) in the Statsig console.

2. Then, click on **Get Started** if you don't have any Feature Gates set up yet, or **Create** to create a new one.

3. Name your gate "Example Gate". This name will also be used to identify the Feature Gate later using the SDK.

4. Enter a description for your Feature Gate. It's good practice to describe it in a way that other teammates can easily understand. For example: "This Feature Gate is for launching an example feature for Statsig employees only."

### Create a targeting rule
In Statsig, when you create a Feature Gate, they are enabled by default. In other words, all users will be excluded from the feature until you add a rule that lets users "pass" the gate.

This means that in order to actually turn on this feature, you will need to add rules to target this Feature Gate to a specific set of folks. Let's walk through doing this in the console.

1. In the console, on the page for the Feature Gate you just created, click on **Add New Rule**.

2. Give this rule a **Name**, such as "Statsig Users Only". 

3. Select **Email** as our targeting criteria so we can target users based on their email address.

4. In the User section of the dropdown, select the **Any Of (Case Insensitive)** operator, and then add ``statsig.com`` for our email-based user targeting.

5. Set the **Pass Percentage** to ``100%``. Doing so ensures that all users with the ``statsig.com`` email domain will pass the Feature Gate and see the new feature.

6. Click **Add Rule** to add this rule to your Feature Gate.

7. Next, hit **Save** on the bottom right to commit these changes to the Feature Gate.

You can now test this feature gate by configuring the User object in the "Test Gate" section.

### Create a Client API Key
Now that you've set up the Feature Gate from the console, it's time to integrate it into your product with the Statsig SDK. We'll first need to create a new Client API key to use in our product.

1. Navigate to [**Keys & Environments**](https://console.statsig.com/api_keys) in the Statsig console. You can also find this by going to **Settings** at the bottom left of the Statsig console.

2. Scroll down to **API Keys**. Click on **Generate New Key**.

3. In the dropdown, select **Client**.

4. Copy the Client API Key you just created to your clipboard.

## Step 2: In your code
### Initialize the Statsig SDK
Now that we have our Client API Key, we can go ahead and integrate the Statsig Client SDK into our product. For the purposes of this tutorial, we will use the React SDK, but you can follow along with a different SDK if you prefer. 

:::tip
Statsig offers over 20 client and server-side SDKs. Check out the full list of [SDKs](/sdks/quickstart#all-sdks) to find the one that best fits your needs.
:::

1. Install the Statsig React SDK using your preferred package manager. For this tutorial, we will use npm.

```bash
npm install @statsig/react
```

2. Import the SDK in your `App.js` file:

```tsx
import { StatsigProvider } from "@statsig/react-bindings";
```

3. Next, wrap your app's content within the `StatsigProvider` component. In the following code snippet, we're also creating a [User](/concepts/user) object so that we can target our Feature Gate. 


```tsx
function App() {
  return (
    <StatsigProvider 
      sdkKey="client-KEY" 
      user={{ userID: "Example", email: "example@statsig.com" }}>
        <div>Hello world</div>
    </StatsigProvider>
  );
}

export default App;
```

4. Make sure to also replace `client-KEY` with the Client API Key you copied in Step 3.

### Check your Feature Gate
Finally, you can now evaluate a Feature Gate in your product code by getting the client with the `useStatsigClient` hook, and then calling `checkGate`. If you're not sure yet about where and how you want to place your flag, check out our doc on [Best Practices for feature flags](/feature-flags/best-practices).

1. Add the following code to your `App.js` file. In this snippet, the `example_gate` is the name of the Feature Gate you created in Step 1.

```tsx
const { client } = useStatsigClient();
return (
  <div>Gate is {client.checkGate('check_user') ? 'passing' : 'failing'}.</div>
);
```

2. Run your app and see the result! The app should render the text "Gate is passing" since we already [Created a targeting rule](#create-a-targeting-rule) that targets all users with the ``statsig.com`` email domain, and we are using that same email domain in this client's User object.

3. Once you've set up your gate, you can easily [monitor the impact of your new feature rollout](/feature-flags/view-exposures) or [manage flag lifecycles](/feature-flags/feature-flags-lifecycle).


## Next steps
In this tutorial, we configured a simple feature flag. You can monitor basic metric impacts with this, but if you want to do more complex feature rollouts or metric analysis, continue to the next tutorial to run your first A/B test in Statsig.