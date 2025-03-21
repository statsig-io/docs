---
title: How to set up Feature Flags in iOS (Swift)
sidebar_label: Feature Flags in iOS (Swift)
slug: /developer-guides/feature-flags-in-swift
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update: 2024-09-25 05:28:08 +0000
---

Integrating feature flags into an iOS application using the Statsig Swift SDK involves several steps, starting with creating a basic iOS "Hello World" application in Xcode. Following that, you'll integrate the Statsig SDK to manage feature flags. 

### Step 1: Creating a Basic iOS "Hello World" Application

1. **Open Xcode**:
   - Launch Xcode and select "Create a new Xcode project".

2. **Setup Your Project**:
   - Choose the iOS "App" template and click "Next".
   - Enter your project details (e.g., Product Name: HelloWorldApp) and choose Swift as the language. Make sure the "Interface" is set to SwiftUI (or Storyboard if you prefer UIKit) and the "Life Cycle" to SwiftUI App (or UIKit App Delegate if using UIKit).
   - Choose a location to save your project and click "Create".

3. **Create a Simple UI**:
   - For SwiftUI: Open `ContentView.swift` and replace the body property with the following code to create a simple "Hello World" text view:
     ```swift
     var body: some View {
         Text("Hello, World!")
             .padding()
     }
     ```
   - For UIKit: Open `ViewController.swift` and add the following code in the `viewDidLoad` method to create a simple "Hello World" label:
     ```swift
     super.viewDidLoad()
     let label = UILabel()
     label.text = "Hello, World!"
     label.textAlignment = .center
     label.frame = CGRect(x: 0, y: 0, width: 200, height: 20)
     label.center = view.center
     view.addSubview(label)
     ```

4. **Run Your App**:
   - Select an iOS simulator or connect an iOS device.
   - Click the run button in Xcode to build and run your app. You should see a "Hello, World!" display.

### Step 2: Integrating Statsig for Feature Flags

1. **Install Statsig Swift SDK**:
   - Open your Xcode project and select File > Add Packages.
   - Enter the Statsig Swift SDK package URL: `https://github.com/statsig-io/swift-sdk`
   - Select the version you want to install and click "Add Package".

2. **Initialize Statsig in Your Application**:
   - Import Statsig in your `AppDelegate.swift` (for UIKit) or in the `@main` struct of your SwiftUI app, then initialize Statsig in the `application(_:didFinishLaunchingWithOptions:)` method for UIKit or inside your app struct for SwiftUI.
   - For SwiftUI, in `YourAppName.swift` (e.g., `HelloWorldApp.swift`):
     ```swift
     import Statsig
     @main
     struct HelloWorldApp: App {
         init() {
             Statsig.start(sdkKey: "client-sdk-key")
         }

         var body: some Scene {
             WindowGroup {
                 ContentView()
             }
         }
     }
     ```
   - For UIKit, in `AppDelegate.swift`:
     ```swift
     import Statsig
     func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
         Statsig.start(sdkKey: "client-sdk-key")
         return true
     }
     ```
   - Replace `"client-sdk-key"` with your actual Statsig Client SDK Key.

3. **Use a Feature Flag in Your View**:
   - For SwiftUI, modify `ContentView.swift`:
     ```swift
        import Statsig
        import SwiftUI

        struct ContentView: View {
            @State private var featureEnabled: Bool = false

            var body: some View {
                Text(featureEnabled ? "New Homepage Design" : "Old Homepage Design")
                    .padding()
                    .onAppear {
                        checkFeatureGate()
                    }
            }

            func checkFeatureGate() {
                if Statsig.checkGate("example_feature_flag") {
                    // Gate is on, show new home page
                    featureEnabled = true
                } else {
                    // Gate is off, show old home page
                    featureEnabled = false
                }
            }
        }
     ```
   - For UIKit, modify `ViewController.swift` to check the feature flag when the view loads:
     ```swift
     import Statsig
     override func viewDidLoad() {
         super.viewDidLoad()
         Statsig.checkGate("example_feature_flag") { isEnabled in
             DispatchQueue.main.async {
                 // Update your UI based on the feature flag
                 let message = isEnabled ? "Feature Enabled!" : "Hello, World!"
                 // Assume you have a label to update
                 self.label.text = message
             }
         }
     }
     ```
   - Replace `"example_feature_flag"` with the name of your feature flag.

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

By following these steps, you've created an iOS application that uses Statsig for feature flag management. This setup allows you to control features and conduct experiments within your app dynamically, facilitating smooth feature rollouts and management without needing constant app updates or deployments.