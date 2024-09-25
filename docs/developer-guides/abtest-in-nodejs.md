---
title: How to run an AB Test in Node.js
sidebar_label: First AB Test in Node.js
slug: /developer-guides/abtest-in-nodejs
displayed_sidebar: cloud
---

To run a simple A/B experiment in a webpage with Node.js using the Statsig SDK, you'll go through a few essential steps. This will involve setting up a simple Node.js server, integrating with the Statsig SDK for A/B testing, and configuring your experiment in the Statsig console.

### Step 1: Set Up a Basic Node.js Server

1. **Initialize Your Node.js Project**:
    - Create a new directory for your project, navigate into it, and run `npm init -y` to create a `package.json` file.

2. **Install Necessary Packages**:
    - Install Express for your web server and the Statsig SDK for Node.js by running:
      ```
      npm install express statsig-node
      ```

3. **Create Your Server**:
    - Create an `index.js` file and set up a basic Express server. Here's a simple example:
      ```javascript
      const express = require('express');
      const app = express();
      const port = 3000;

      app.get('/', (req, res) => {
          res.send('Hello, World!');
      });

      app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`);
      });
      ```

    - Verify the app runs by issuing `node index.js` command

### Step 2: Integrate Statsig for A/B Testing

1. **Initialize Statsig**:
    - At the top of your `index.js`, require the Statsig SDK and initialize it with your server-side SDK key.
    - Modify your route to serve different content based on the experiment's variant.
    - Ensure you replace `'your-server-sdk-key'` with your actual Statsig server-side SDK key and `'your_experiment_key'` with the name of your experiment.

      ```javascript
      const statsig = require('statsig-node');
      const express = require('express');
      const app = express();
      const port = 3000;

      // Initialize Statsig server-side SDK
      statsig.initialize('your-server-sdk-key').then(() => {
        app.get('/', async (req, res) => {
          const user = { userID: 'user123' }; // Customize as needed
          const experiment = statsig.getExperimentSync(user, 'experiment_name');
          const ev = experiment.getValue('parameter_name', 'Default Text');
          res.send(`<h1>${ev}</h1>`);
        });
      });

      app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
      });
      ```
    - Run the app by issuing `node index.js` command

### Step 3: Create Your A/B Test in Statsig Console

1. **Log into Statsig Console**:
    - Go to the Statsig Console and log in.

2. **Create a New Experiment**:
    - Navigate to the "Experiments" section and click on "Create New".
    - Fill in the details for your experiment, including giving it a unique key (e.g., `'your_experiment_key'`).

3. **Configure Experiment Variants**:
    - Add variants for your experiment (e.g., `control` and `test`).
    - Within each variant's configuration, add a parameter named `textToShow` and assign the text you wish to display for each variant.

    ![image](https://github.com/statsig-io/.github/assets/74588208/8a667aeb-9189-4e7d-8a22-a42dabcdfe09)

4. **Launch the Experiment**:
    - After setting up your variants and parameters, save and start the experiment.

By following these steps, you've created a simple Node.js application that runs an A/B test to serve different text content based on the variant assigned to a user in the Statsig experiment. This setup enables you to conduct A/B testing efficiently, allowing you to make data-driven decisions based on user interaction with your application.