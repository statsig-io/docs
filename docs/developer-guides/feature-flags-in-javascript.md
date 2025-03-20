---
title: How to set up Feature Flags in Javascript
sidebar_label: Feature Flags in Javascript
slug: /developer-guides/feature-flags-in-javascript
displayed_sidebar: cloud
keywords:
  - owner:brock
---

To use feature flags in a web page with the Statsig JavaScript SDK, you'll start by creating a basic "Hello World" HTML page, then integrate Statsig to manage feature flags.

### Step 1: Creating a Statsig Project
1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and sign up for an account or log in.
2. **Create a New Project** (if needed):
   - In the Statsig console, create a new project for your application.

### Step 2: Creating a Basic "Hello World" Web Page

1. **Create a New HTML File**:
   - Name it `index.html`.
   - Open it in your favorite text editor or IDE.

2. **Add Basic HTML Content**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Hello World Page</title>
   </head>
   <body>
       <h1>Hello, World!</h1>
       <div id="featureFlagContent"></div>
       <script src="app.js"></script>
   </body>
   </html>
   ```
   This code creates a simple web page with a heading that says "Hello, World!" and includes a script file `app.js` that we will use to integrate Statsig.

### Step 3: Integrating Statsig for Feature Flags

1. **Create the JavaScript File (`app.js`)**:
   - Create a new file named `app.js` in the same directory as your `index.html`.

2. **Add Statsig JavaScript SDK**:
   - First, you need to include the Statsig SDK. You can add it directly to your `index.html` inside the `<head>` section, or you can import it in your `app.js` if you are using a module bundler.
   - For simplicity, we'll add it directly to the `index.html` above the `<script src="app.js"></script>`:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@statsig/js-client@3/build/statsig-js-client+session-replay+web-analytics.min.js"></script>
     ```

3. **Initialize Statsig and Check a Feature Flag in `app.js`**:
   ```javascript
   // Initialize Statsig with your client SDK key
   const client = new StatsigClient(
      'your_client_sdk_key',
      { userID: "unique_user_id" },
      { environment: { tier: "production" } } // optional
   );
   client.initializeAsync().then(() => {
       // Check if a feature flag is enabled
       const isFeatureEnabled = statsig.checkGate('example_feature_flag');
       if (isFeatureEnabled) {
           document.getElementById('featureFlagContent').innerText = 'Feature Flag is enabled!';
       } else {
           document.getElementById('featureFlagContent').innerText = 'Feature Flag is disabled.';
       }
   });
   ```
   - Replace `'your_client_sdk_key'` with your actual Statsig Client SDK Key.
   - Replace `'example_feature_flag'` with the name of your feature flag.
   - This script initializes Statsig and checks if a feature flag is enabled. It then updates the content of a div based on the flag's status.

4. **Open Your HTML File in a Browser**:
   - Open the `index.html` file in a web browser to see the result.

### Step 4: Creating Feature Flags in the Statsig Console

1. **Navigate to Feature Gates**:
   - Go to the [Feature Gates](https://console.statsig.com/gates) page in the Statsig console dashboard.

2. **Create a New Feature Gate**:
   - Click on "Create".
   - Enter a name for your feature flag (e.g., `example_feature_flag`).
   - Optionally, configure targeting rules based on user properties or environments.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

3. **Toggle and Configure Your Feature Gate**:
   - You can now toggle the feature gate on or off and configure detailed targeting rules directly from the Statsig console.

This process allows you to dynamically control features within your web page, facilitating testing and feature rollout without the need to modify and redeploy your code constantly.
