---
title: How to run an AB Test in Javascript
sidebar_label: First AB Test in Javascript
slug: /developer-guides/abtest-in-javascript
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update: 2024-12-13
---

To run a simple A/B test on a webpage using JavaScript and the Statsig SDK, focusing on showing text with a blue or red background based on the variant assigned, follow these steps. This guide includes creating a basic "Hello World" web application, integrating Statsig for A/B testing, and using the `get` method to determine the variant.

### Step 1: Create a Basic Web Application

1. **Set Up the HTML File**:
    - Create an `index.html` file and add the following HTML code to set up a basic web page structure:
      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>A/B Test with Statsig</title>
          <style>
              .text {
                  padding: 20px;
                  color: white;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div id="ab-test-text" class="text">Hello, World!</div>
          <script src="https://cdn.jsdelivr.net/npm/@statsig/js-client@3/build/statsig-js-client+session-replay+web-analytics.min.js"></script>
          <script src="app.js"></script>
      </body>
      </html>
      ```

2. **Create the JavaScript File**:
    - Create an `app.js` file in the same directory. This file will contain the JavaScript code to integrate with Statsig and determine the background color based on the A/B test variant.

### Step 2: Integrate Statsig SDK and Implement A/B Testing Logic

In your `app.js`, write the following JavaScript code:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const client = new window.Statsig.StatsigClient(
        "your-client-sdk-key",
        {
            userID: 'user_unique_id',
        },
    );

    client.initializeAsync().then(() => {
        // Assuming 'backgroundColor' is the parameter defined in your A/B test configuration on Statsig
        const backgroundColor = client.getExperiment('your_experiment_key').get('backgroundColor', 'white');

        const abTestTextDiv = document.getElementById('ab-test-text');
        abTestTextDiv.style.backgroundColor = backgroundColor;
    });
});
```
- Replace `'your-client-sdk-key'` with your actual Statsig Client SDK Key.
- Replace `'your_experiment_key'` with the id of your experiment configured in Statsig.
- Replace `'user_unique_id'` with a unique identifier for the user.
- This code assumes that the A/B test in Statsig is set up with a parameter named `backgroundColor`.

### Step 3: Creating A/B Test in Statsig Console

1. **Log In to Statsig**:
    - Access the Statsig console by logging in or signing up at [Statsig's website](https://console.statsig.com/).

2. **Create an Experiment**:
    - In the Statsig console, navigate to the "Experiments" section and click "Create Experiment".
    - Enter the experiment details:
        - **Name**: Provide a unique name for your experiment (e.g., `your_experiment_key`).
        - **Type**: Choose "Experiment".
        - **Parameters**: Add a parameter named `backgroundColor`. For each variant (e.g., `control` and `test`), assign `blue` to one and `red` to the other as the value for `backgroundColor`.
    - Configure other settings as needed, such as the percentage of users included in the experiment and targeting rules.

    ![image](https://github.com/statsig-io/.github/assets/74588208/e5027dd6-908d-40f0-a6bd-de8cb5a6207b)

3. **Start the Experiment**:
    - Once your experiment is configured with the necessary variants and parameters, save and start the experiment to make it active.

By following these steps, you've created a simple web application that integrates with Statsig for A/B testing, using the `get` method to dynamically apply styling based on the experiment's variant. This setup enables you to conduct A/B testing directly in your web applications, allowing you to experiment with different user experiences and measure their impact.