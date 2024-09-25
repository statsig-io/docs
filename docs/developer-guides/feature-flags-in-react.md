---
title: How to set up Feature Flags in React
sidebar_label: Feature Flags in React
slug: /developer-guides/feature-flags-in-react
displayed_sidebar: cloud
---

Integrating feature flags into a React web application using the Statsig React SDK involves a few key steps. First, you'll start by setting up a basic React application. Then, you'll integrate Statsig to manage feature flags. 

### Step 1: Creating a Basic React Application

1. **Set Up Your React App**:
   - Ensure you have Node.js installed on your system.
   - Create a new React app by running the following command in your terminal:
     ```
     npx create-react-app hello-world-react
     ```
   - Navigate into your new app directory:
     ```
     cd hello-world-react
     ```

2. **Start the React App**:
   - Start your application to make sure everything is working:
     ```
     npm start
     ```
   - Your browser should open to a page with a React logo and the text "Edit `src/App.js` and save to reload."

3. **Modify `App.js` for a Simple Hello World Page**:
   - Open `src/App.js` and replace its content with a simple "Hello, World!" example:
     ```jsx
     function App() {
       return (
         <div className="App">
           <header className="App-header">
             <p>Hello, World!</p>
           </header>
         </div>
       );
     }

     export default App;
     ```

### Step 2: Integrating Statsig for Feature Flags

1. **Install Statsig React SDK**:
   - Install the Statsig SDK for React by running:
     ```
     npm install statsig-react
     ```

2. **Initialize Statsig in Your Application**:
   - Modify `src/index.js` to initialize Statsig. You'll need your Statsig Client SDK Key, which you can find in the Statsig console.
     ```jsx
     import React from 'react';
     import ReactDOM from 'react-dom';
     import './index.css';
     import App from './App';
     import { StatsigProvider } from 'statsig-react';

     const statsigOptions = {
       environment: { tier: 'production' }, // Optional: customize your environment
     };

     ReactDOM.render(
       <React.StrictMode>
         <StatsigProvider sdkKey="your_client_sdk_key" user={{ userID: 'unique_user_id' }} options={statsigOptions}>
           <App />
         </StatsigProvider>
       </React.StrictMode>,
       document.getElementById('root')
     );

     ```
   - Replace `"your_client_sdk_key"` with your actual Statsig Client SDK Key.

3. **Use a Feature Flag in `App.js`**:
   - Modify `src/App.js` to check a feature flag.
     ```jsx
     import { useGate } from 'statsig-react';

     function App() {
       const { value: isFeatureEnabled } = useGate('example_feature_flag');

       return (
         <div className="App">
           <header className="App-header">
             {isFeatureEnabled ? <p>Feature Flag is enabled!</p> : <p>Hello, World!</p>}
           </header>
         </div>
       );
     }

     export default App;
     ```
   - Replace `'example_feature_flag'` with the name of your feature flag.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and sign up for an account or log in.

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

By following these steps, you have successfully created a React application that uses Statsig for feature flag management. This allows you to control features and conduct experiments in your application dynamically, facilitating a smoother rollout process and feature management without needing constant deployments for updates or changes.