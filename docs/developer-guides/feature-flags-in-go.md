---
title: How to set up Feature Flags in Go
sidebar_label: Feature Flags in Go
slug: /developer-guides/feature-flags-in-go
---

Integrating feature flags into a Go application using the Statsig SDK involves a few straightforward steps. First, you'll create a basic "Hello World" Go application. Then, you'll integrate Statsig to manage feature flags. Finally, I'll guide you through the process of creating feature flags in the Statsig console.

### Step 1: Create a Basic Go "Hello World" Application

1. **Setup Your Go Environment**:
   - Ensure Go is installed on your system. You can check by running `go version` in your terminal. If Go is not installed, download and install it from [the official Go website](https://golang.org/dl/).

2. **Create Your Go Application**:
   - Create a new directory for your project and navigate into it.
   - Create a file named `main.go`.
   - Open `main.go` in your favorite text editor and add the following code:
     ```go
     package main

     import "fmt"

     func main() {
         fmt.Println("Hello, World!")
     }
     ```

3. **Run Your Application**:
   - In your terminal, run the Go application:
     ```sh
     go run main.go
     ```
   - You should see "Hello, World!" printed to the console.

### Step 2: Integrating Statsig for Feature Flags

The Statsig Go SDK is typically used on the server-side. As of my last update, Statsig provides official SDKs for server environments in several languages, but direct Go support might need clarification or documentation. If Statsig doesn't directly support Go, you can call the Statsig API directly from Go, using HTTP requests to check feature flags. However, here's how you would typically integrate a third-party service without direct SDK support:

1. **Simulate Feature Flag Check** (Hypothetical Example):
   - For demonstration, let's simulate the integration using a simple approach to mimic checking a feature flag via an API call.
   - Update `main.go` to include a dummy function that simulates checking a feature flag:
     ```go
     package main

     import "fmt"

     func checkFeatureFlag(flagName string) bool {
         // Simulate checking a feature flag
         // In real scenario, replace this with an actual API call to Statsig
         return flagName == "new_feature_enabled"
     }

     func main() {
         featureFlag := "new_feature_enabled"

         if checkFeatureFlag(featureFlag) {
             fmt.Println("New feature is enabled!")
         } else {
             fmt.Println("Hello, World!")
         }
     }
     ```
   - This is a simplified example. In a real-world application, you'd perform an HTTP request to the Statsig API, passing in the necessary authentication and user details, and then process the response to determine if the feature flag is enabled.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
   - Visit [Statsig's website](https://www.statsig.com/) and sign up for an account or log in.

2. **Create a New Project**:
   - In the Statsig console, create a new project for your application.

3. **Navigate to Feature Flags**:
   - Access the "Feature Flags" section from the dashboard.

4. **Create a New Feature Flag**:
   - Click "Create Feature Flag".
   - Enter a name for your feature flag, such as `new_feature_enabled`.
   - Configure targeting rules as needed.
   - Save your feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
   - You can now enable or disable your feature flag from the dashboard and configure it as needed.

This guide outlines how to create a simple Go application and theoretically integrate feature flag checking functionality. In a real implementation, replace the simulated feature flag check with an actual API call to the Statsig service or the equivalent if direct Go SDK support becomes available.   
