---
title: How to set up Feature Flags in React Native (Expo)
sidebar_label: Feature Flags in React Native (Expo)
slug: /developer-guides/feature-flags-in-expo
displayed_sidebar: cloud
---

Integrating feature flags into a React Native app using Expo and the Statsig SDK is a powerful way to control and experiment with features dynamically. Here's a step-by-step guide, including creating a basic "Hello World" React Native app with Expo, integrating Statsig, and managing feature flags in the Statsig console.

### Step 1: Create a Basic React Native App with Expo

1. **Setup Expo CLI**:
   - If you haven't installed Expo CLI, open your terminal and run:
     ```sh
     npm install -g expo-cli
     ```

2. **Create a New Expo Project**:
   - In your terminal, navigate to the directory where you want to create your app and run:
     ```sh
     expo init HelloWorldApp
     ```
   - Choose a template: For a simple start, select "blank" (a minimal app as clean as an empty canvas).
   - Navigate into your project directory:
     ```sh
     cd HelloWorldApp
     ```

3. **Start Your Expo Project**:
   - Run the following command to start your project:
     ```sh
     expo start
     ```
   - This will open up a browser window with the Expo developer tools. You can launch the app on an iOS simulator, Android emulator, or your physical device using the Expo Go app.

### Step 2: Integrate Statsig for Feature Flags

1. **Install Statsig SDK**:
   - In your project directory, install the Statsig React Native SDK by running:
     ```sh
     npm install statsig-react-native
     ```
   - Since React Native 0.60 and higher link libraries automatically, you shouldn't need to link the package manually. If you're using an older version of React Native, you may need to run `react-native link statsig-react-native`.

2. **Initialize Statsig in Your App**:
   - Open `App.js` and import `Statsig` at the top of the file.
   - Initialize Statsig in the `App` component, and create a state to manage the visibility of your feature based on the feature flag.
   - Ensure to replace `'your-client-sdk-key'` with your actual Statsig Client SDK Key and `'example_feature_flag'` with the name of your feature flag.

   Here is an example of how to modify `App.js`:

   ```jsx
   import React, { useEffect, useState } from 'react';
   import { StyleSheet, Text, View } from 'react-native';
   import Statsig from 'statsig-react-native';

   const App = () => {
     const [featureEnabled, setFeatureEnabled] = useState(false);

     useEffect(() => {
       async function initializeStatsig() {
         await Statsig.initialize('your-client-sdk-key', {
           userID: 'a_unique_user_id', // Optional: Identify the user with a unique ID
         });

         const enabled = await Statsig.checkGate('example_feature_flag');
         setFeatureEnabled(enabled);
       }

       initializeStatsig();

       return () => Statsig.shutdown(); // Cleanup on component unmount
     }, []);

     return (
       <View style={styles.container}>
         <Text>{featureEnabled ? 'Feature Enabled!' : 'Hello, World!'}</Text>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
   });

   export default App;
   ```

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and sign up for an account or log in.

2. **Create a New Project**:
   - In the Statsig console, create a new project for your application.

3. **Navigate to Feature Flags**:
   - Go to the "Feature Flags" section from the dashboard.

4. **Create a New Feature Flag**:
   - Click "Create Feature Flag".
   - Enter a name for your feature flag, such as `example_feature_flag`.
   - Configure targeting rules as needed.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
   - You can now enable or disable your feature flag from the dashboard and configure it as needed.

By following these steps, you have successfully integrated feature flags into your React Native app using Expo and Statsig. This setup allows you to control and test features dynamically, providing flexibility in feature rollout and experimentation.