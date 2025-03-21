---
title: How to set up Feature Flags in Android (Kotlin)
sidebar_label: Feature Flags in Android (Kotlin)
slug: /developer-guides/feature-flags-in-android
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update: 2024-09-25
---

To implement feature flags in an Android app using the Statsig SDK, follow these steps, including creating a basic "Hello World" Android app, integrating Statsig, and managing feature flags in the Statsig console.

### Step 1: Create a Basic Android "Hello World" App

1. **Install Android Studio**:
   - Download and install Android Studio from the official website. Launch it and follow the setup wizard to install any necessary SDK packages.

2. **Start a New Android Studio Project**:
   - Open Android Studio and choose to start a new Android project.
   - Select the "Empty Activity" template and click "Next".
   - Enter your Application name, for example, "HelloWorldApp", and choose a save location.
   - Make sure to select Kotlin as the language and the minimum API level supported by your app. API level 21 (Android 5.0 Lollipop) is a good starting point for broad compatibility.
   - Click "Finish" to create your project.

3. **Modify `MainActivity.kt`**:
   - Open `MainActivity.kt` and ensure it contains code similar to the following for a basic "Hello World" setup:
     ```kotlin
     package com.example.helloworldapp

     import androidx.appcompat.app.AppCompatActivity
     import android.os.Bundle
     import android.widget.TextView

     class MainActivity : AppCompatActivity() {
         override fun onCreate(savedInstanceState: Bundle?) {
             super.onCreate(savedInstanceState)
             setContentView(R.layout.activity_main)

             val textView: TextView = findViewById(R.id.textView)
             textView.text = "Hello, World!"
         }
     }
     ```

4. **Update the Layout**:
   - Ensure `res/layout/activity_main.xml` is updated to include a TextView with `@+id/textView`.

### Step 2: Integrating Statsig for Feature Flags

1. **Add Statsig SDK Dependency**:
   - Open your app's `build.gradle` (Module: app) file, and add the Statsig SDK dependency to the `dependencies` block:
     ```groovy
     implementation 'com.statsig:android-sdk:1.+'
     ```

2. **Initialize Statsig in Your Application**:
   - Modify `MainActivity.kt` to initialize Statsig and check a feature flag:
     ```kotlin
     import androidx.appcompat.app.AppCompatActivity
     import android.os.Bundle
     import android.widget.TextView
     import com.statsig.androidsdk.Statsig
     import com.statsig.androidsdk.StatsigOptions

     class MainActivity : AppCompatActivity() {

         override fun onCreate(savedInstanceState: Bundle?) {
             super.onCreate(savedInstanceState)
             setContentView(R.layout.activity_main)

             // Initialize Statsig
             Statsig.initialize(
                 this.applicationContext,
                 "client-sdk-key",
                 options = StatsigOptions(initTimeoutMs = 6000)
             ) {
                 // Check if a feature flag is enabled
                 val isFeatureEnabled = Statsig.checkGate("example_feature_flag")
                 runOnUiThread {
                     val textView: TextView = findViewById(R.id.textView)
                     if (isFeatureEnabled) {
                         textView.text = "Feature Enabled!"
                     } else {
                         textView.text = "Hello, World!"
                     }
                 }
             }
         }

         override fun onDestroy() {
             super.onDestroy()
             Statsig.shutdown()
         }
     }
     ```
   - Replace `"client-sdk-key"` with your actual Statsig Client SDK Key.
   - Replace `"example_feature_flag"` with the name of the feature flag you will create.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and create an account or log in.

2. **Create a New Project**:
   - In the Statsig console, create a new project for your application.

3. **Navigate to Feature Flags**:
   - Access the "Feature Flags" section from the dashboard.

4. **Create a New Feature Flag**:
   - Click "Create Feature Flag".
   - Enter a name for your feature flag (e.g., `example_feature_flag`).
   - Configure targeting rules as needed.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
   - You can enable or disable your feature flag from the dashboard and configure it as needed.

This guide outlines creating a simple Android app, integrating Statsig for feature management, and setting up feature flags in the Statsig console. Ensure your `client-sdk-key` is the client (not server) key meant for client-side use, and always manage feature flags responsibly to provide the best user experience.