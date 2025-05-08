---
title: Create a Feature Gate
sidebar_label: Create a Feature Gate
slug: /feature-gates/create
keywords:
  - owner:shubham
last_update:
  date: 2025-05-03
---

This guide walks through how to create a Feature Gate in the Statsig console, how to add an evaluation rule to a Feature Gate, how to implement the Feature Gate in your code, examples of common Feature Gate setups, and a list of all Feature Gate targeting conditions available in Statsig.

## In the Statsig console

### Create a new Feature Gate
 
1. Log into the Statsig console at https://console.statsig.com.
2. On the left-hand navigation panel, under **Feature Management**, select **Feature Gates**.
3. Click on the **Create** button.
4. Enter the name and the description of the Feature Gate you want to create. It's best to name your gate based on what you are rolling out, such as "Zippy Home Page" for a new homepage.

![image](https://github.com/user-attachments/assets/a14bc4f3-b768-4e6c-a84a-7bae449b2c7c)

5. Click **Create** to complete creating your Feature Gate.
6. At this point, you've successfully created a new Feature Gate without any evaluation rules or conditions set up yet.
<img width="1183" alt="Screenshot 2025-02-06 at 6 44 30 PM" src="https://github.com/user-attachments/assets/64a7bc9a-bd3e-4d98-a853-4f91f16ef82e" />
 
### Add a rule to your Feature Gate 
By default, a Feature Gate will return `false` when there are no rules configured to target the gate to a set of users. In other words, all users are "gated" by default from seeing the feature until you've set rules for who gets to "pass". Next, we'll walk through steps for adding evaluation rules or conditions for a Feature Gate.
1. In Statsig console, under **Feature Management**, select **Feature Gates**.
2. Select the feature gate where you want to add a targeting rule
3. Click the **+ Add New Rule** button.

![Image](/img/feature-gates/add-rule.png)

4. Name your rule with something descriptive that other teammates will understand, such as "Mobile Users Only".

5. Configure your Feature Gate with the following options:
  * **Environment(s)** - The [staging environment(s)](/guides/using-environments) you want your gate to apply to
  * [**Criteria**](#rule-criteria-available-in-statsig) - Specific evaluation conditions for the rule. Read more details about criteria and condition evaluation [here](/feature-flags/conditions).
  * **Split %** - The percentage of users who meet the criteria that you want to pass or fail the gate check. The Fail % is automatically calculated based on the Pass % you set
  * [**Overrides**](/feature-flags/overrides) - A list of users you want to always bypass your gate (i.e., a "whitelist")
6. Changes to Feature Gates and targeting rules are NOT auto-saved. Make sure to save your changes by clicking the "Save" button at the bottom right when you are ready for your changes to take effect.

## In your code
So far in this doc, we've walked through the set up of Feature Gates in the web console. For these gates to _actually_ impact the behavior of your application and your users' experiences, you have to update your product code. It's sort of like setting policies; it's not enough to just list the new rules you'd like to enforce. You need to also set up the infrastructure to make sure those new policies actually take effect in realtime, and that's where the Statsig SDK comes in.

### Initialize the Statsig SDK
If you haven't already initialized the Statsig SDK, follow the [Installation Steps](/client/javascript-sdk/react#installation) in the language of your choice.

### Check a Feature Gate
Use the `checkGate` function in the Statsig SDK in the language of your choice. Here's an example in [React](/client/javascript-sdk/react#basics-check-gate):

```tsx
const { client } = useStatsigClient();
return (
  <div>Gate is {client.checkGate('example_gate') ? 'passing' : 'failing'}.</div>
);
```
In the code snippet example above, the Statsig SDK is checking from a client app whether you've set any rules named "Example Gate". It will render the text "Gate is passing" for users who pass your gate based on conditions you set, and "Gate is failing" for users who fail the gate conditions.

:::tip
Statsig offers over 20 client and server-side SDKs. Check out the full list of [SDKs](/sdks/client-vs-server#available-sdks) to find the one that best fits your needs.
:::

## Common Feature Gates

### Kill Switches
You can set up a simple "kill switch" by first setting an `Everyone` criteria's Pass percentage to 100%. Then, if you need to completely disable the feature for all users at some point after code deployment, you can set the Pass percentage to 0%, effectively killing the feature for all users.

![Image](/img/feature-gates/kill-switch.png)

### OS-Based Flags 
You can target users based on common application properties such as the operating system that the application is running on.

![image](https://user-images.githubusercontent.com/1315028/129112226-51978083-d007-4697-88b5-f3a080eabf48.png)

### Internal Employees Only
You can target users based on their attributes. For example, you can use the user's **Email** attribute and the **Contains any of** operator, then enter the email domain of your company to target only internal employees.

![image](https://user-images.githubusercontent.com/1315028/129113738-ec99c4f0-dbdd-4d14-a88a-b3343d4d12da.png)


### Defined User Segments
You can also target users in a defined user [Segment](/segments).

![image](https://user-images.githubusercontent.com/1315028/129112427-27351aaf-074e-4997-91d8-6e1e7941b991.png)


### Parent/Child Flags
You can target users based on their eligibility of other Feature Gates, enabling powerful chaining, hierarchy, and dependencies of flags. [Flag lifecycle management](/feature-flags/feature-flags-lifecycle) makes it easy to manage, deprecate, and maintain dependent flags.

![image](https://user-images.githubusercontent.com/1315028/129112612-d881981c-4fc6-4e95-a9c5-18319c02d6f2.png)


## Rule criteria available in Statsig
This table provides a comprehensive overview of all available targeting properties in Statsig Feature Gates. For full details on all rule criteria and how conditions are evaluated, read about [Feature Gate rule criteria](/feature-flags/conditions).

| Category | Property | Description |
|----------|----------|-------------|
| **General** | Everyone | Applies the rule to all users |
| | Time | Schedule-based targeting for specific time periods |
| **Initialization** | App Version | Target users based on their app version |
| | Environment Tier | Target based on environment (e.g., dev, staging, prod) |
| **Device & OS** | Browser Name | Target specific web browsers |
| | Browser Version | Target specific browser versions |
| | Device Model | Target specific device models |
| | IP Address | Target based on user's IP address |
| | Operating System | Target specific operating systems |
| | OS Version | Target specific OS versions |
| **User Properties** | Country | Target users based on their country |
| | Custom Field | Target using custom user properties |
| | Customer Unit ID | Target specific customer units |
| | Email | Target specific email addresses |
| | Locale | Target based on user's language/locale |
| | User ID | Target specific user IDs |
| **Segments & Gates** | Fails Target Gate | Target users who fail a specific gate |
| | Passes Target Gate | Target users who pass a specific gate |
| | User is in Segment | Target users belonging to a specific segment |
| | User is not in Segment | Target users not in a specific segment |

