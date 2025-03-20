---
title: How to set up Feature Flags in Node.js
sidebar_label: Feature Flags in Node.js
slug: /developer-guides/feature-flags-in-nodejs
displayed_sidebar: cloud
keywords:
  - owner:brock
---

Integrating feature flags into a new Node.js application using Statsig is a straightforward process that involves setting up your Node.js environment, integrating the Statsig SDK, and managing your feature flags through the Statsig console. Here's a step-by-step guide:

### Step 1: Setting Up a Simple Node.js "Hello World" Application

1. **Install Node.js**: Ensure Node.js is installed on your system. If it's not installed, you can download and install it from [nodejs.org](https://nodejs.org/).

2. **Initialize Your Project**:
   - Create a new directory for your project and navigate into it:
     ```
     mkdir mynodeapp
     cd mynodeapp
     ```
   - Initialize a new Node.js project:
     ```
     npm init -y
     ```
   - This command creates a `package.json` file in your project directory.

3. **Create a New JavaScript File**:
   - Create a file named `app.js` in your project directory.
   - Open `app.js` in your favorite text editor or IDE and add a simple "Hello World" program:
     ```js
     console.log('Hello, World!');
     ```

4. **Run Your Application**:
   - Run your Node.js application from the command line:
     ```
     node app.js
     ```
   - You should see "Hello, World!" printed to the console.

### Step 2: Integrating Statsig for Feature Flags

1. **Install the Statsig Node.js SDK**:
   - Add the Statsig SDK to your project:
     ```
     npm install statsig-node
     ```

2. **Initialize Statsig in Your Application**:
   - Modify `app.js` to include initialization of the Statsig SDK and to check a feature flag. You'll need your Statsig Server Secret Key, which you can find in the Statsig console.
     ```js
     const statsig = require('statsig-node');

     async function main() {
      await statsig.initialize('your_server_secret_key');

      const checkFeatureFlag = statsig.checkGateSync({ userID: 'user_123' }, 'my_dev_test_flag');
      if (checkFeatureFlag) {
        console.log('Feature Flag is enabled');
      } else {
        console.log('Feature Flag is disabled');
      }

      statsig.shutdown();
    }

    main();
    ```
   - Replace `'your_server_secret_key'` with your actual Statsig Server Secret Key.
   - Replace `'my_dev_test_flag'` with the name of your feature flag.

3. **Run Your Program Again**:
   - Execute your updated Node.js application:
     
     ```
     node app.js
     ```
   - Depending on the feature flag status in Statsig, you'll see a message indicating whether the feature flag is enabled or disabled.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Go to the [Statsig website](https://www.statsig.com/) and sign up for an account or log in.

2. **Create a New Project** (if needed):
   - In the Statsig console, create a new project for your application.

3. **Navigate to Feature Flags**:
   - Go to the "Feature Flags" section in the Statsig console dashboard.

4. **Create a New Feature Flag**:
   - Click on "Create Feature Flag".
   - Enter a name for your feature flag (e.g., `example_feature_flag`).
   - Optionally, configure targeting rules based on user properties or environments.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle and Configure Your Feature Flag**:
   - You can now toggle the feature flag on or off and configure detailed targeting rules directly from the Statsig console.

By following these steps, you've created a Node.js application that utilizes Statsig for feature flag management. This approach allows you to control and experiment with features in your application dynamically, without the need for redeployments for every update or change.