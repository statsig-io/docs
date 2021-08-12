import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";



## Use a language-specific Statsig SDK to implement a feature gate in your application

Statsig provides client and server SDKs so you can choose where to implement your feature gate check. You can also use an SDK for the language of your choice. Select a language below and follow four simple steps to instrument your application. 

### Using the Client SDK 

#### Step 1: Get the Statsig client SDK key

To get the Statsig client SDK key, 
- Log into the Statsig console at https://console.statsig.com 
- Click on the **Project Settings** gear icon next to your account settings at the top right corner of the page as shown below

  ![image](https://user-images.githubusercontent.com/1315028/129190279-60ab338f-02da-4b9a-86ee-e81cb6ac8940.png)

- Click on the **API Keys** tab
- Copy the active **Client API Key**

#### Step 2: Install the SDK

You can install the statsig SDK via npm or yarn:

<Tabs
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'React', value: 'react'},
    {label: 'React Native', value: 'react-native'},
    {label: 'iOS', value: 'ios'},
    {label: 'Android', value: 'android'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="js">
    ```shell
    npm install statsig-js // using npm
    
    yarn add statsig-js //using yarn
    ```
    
    You can also use [jsdelivr](https://www.jsdelivr.com/package/npm/statsig-js), an open source CDN that we use on www.statsig.com. To access the current primary JavaScript bundle, include the following in your client application:

`https://cdn.jsdelivr.net/npm/statsig-js/dist/statsig-prod-web-sdk.min.js`

To access specific versions and files, use the following format:

`http://cdn.jsdelivr.net/npm/statsig-js@{version}/{file}`

  </TabItem>
  <TabItem value="react">
    ```shell
    npm install statsig-react // using npm
    
    yarn add statsig-react //using yarn
    ```
  </TabItem>
  <TabItem value="react-native">
    ```shell
    npm install statsig-react-native // using npm
    
    yarn add statsig-react-native //using yarn
    ```
  </TabItem>
  <TabItem value="ios">
    Add Statsig as a dependency through Swift Package Manager. In Xcode, select File > Swift Packages > Add Package Dependency and enter the URL https://github.com/statsig-io/ios-sdk.git.
  
    ```
    // Include Statsig as a dependency in your project's Package.swift:
    //...
    dependencies: [
        .package(url: "https://github.com/statsig-io/ios-sdk.git", .upToNextMinor("1.3.0")),
    ],
    //...
    targets: [
        .target(
            name: "YOUR_TARGET",
            dependencies: ["Statsig"]
        )
    ],
    //...
    ```

    ```
    // If you are using CocoaPods, add the 'Statsig' pod

    use_frameworks!
    target 'TargetName' do
      //...
      pod 'Statsig', '~> 1.3.0' // Add this line
    end
    ```
  
  
  ```swift
      Statsig.start(
          sdkKey: "<CLIENT_SDK_KEY>",
          user: StatsigUser(userID: "<LOGGED_IN_USER_ID>"),
          options: StatsigOptions(environment: StatsigEnvironment(tier: .Staging)))
      { errorMessage in

        // Statsig client is ready; you can also check errorMessage for any debugging information.

      }
      ```
  </TabItem>
  
  <TabItem value="android">
    In `build.gradle` include the statsig dependency, directly from the github source (via jitpack).

    In your root build.gradle, at the end of repositories, add:

    ```
        allprojects {
            repositories {
                ...
                maven { url 'https://jitpack.io' }
            }
        }
    ```

    Then, add the dependency:
    
    ```
        implementation 'com.github.statsig-io:android-sdk:v2.0.0'
    ```

    Finally, run a gradle sync so Intellij/Android Studio recognizes the Statsig library.

    For more information on including a jitpack library as a dependency, see https://jitpack.io/

    
  </TabItem>
  

  
  <TabItem value="net">
    The Statsig package is hosted on [Nuget](https://www.nuget.org/packages/Statsig/). You can either install it from your Visual Studio's Nuget package manager, or through .NET CLI:

```shell
dotnet add package Statsig --version 1.1.0
```

  </TabItem>
</Tabs>


#### Step 3: Initialize the SDK

To initialize the SDK, copy the following in your client application:
  
  <Tabs
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'React', value: 'react'},
    {label: 'iOS - Swift', value: 'ios-swift'},
    {label: 'iOS - Objective C', value: 'ios-objectivec'},
    {label: 'Android - Java', value: 'android-java'},
    {label: 'Android - Kotlin', value: 'android-kotlin'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="js">
    ```jsx
      const statsig = require('statsig-js');

      await statsig.initialize(
        '<CLIENT_SDK_KEY>',
        { userID: '<LOGGED_IN_USER_ID>' },
        { environment: { tier: 'staging' } }, // optional, pass options here if needed
    );
    ```

  </TabItem>
  <TabItem value="react">
    ```react

      import { StatsigProvider } from 'statsig-react';

      ...

      <StatsigProvider
          sdkKey="<CLIENT_SDK_KEY>"
          user={{
            userID: <LOGGED_IN_USER_ID>,
            email: session?.user?.email ?? undefined,
            ... // other user parameters
          }}
          waitForInitialization={true}>
          <Component />
      </StatsigProvider>
      ```
  </TabItem>
  <TabItem value="ios-swift">
    ```swift
      Statsig.start(
          sdkKey: "<CLIENT_SDK_KEY>",
          user: StatsigUser(userID: "<LOGGED_IN_USER_ID>"),
          options: StatsigOptions(environment: StatsigEnvironment(tier: .Staging)))
      { errorMessage in

        // Statsig client is ready; you can also check errorMessage for any debugging information.

      }
      ```
  </TabItem>
  
  <TabItem value="ios-objectivec">
    ```objectivec
      StatsigUser *user = [[StatsigUser alloc] initWithUserID:@"<LOGGED_IN_USER_ID>"];
      [Statsig startWithSDKKey:@"<CLIENT_SDK_KEY>", user:user, completion:^(NSString * errorMessage) {
        // Statsig client is ready

        // errorMessage can be used for debugging purposes. Statsig client still functions when errorMessage
        // is present, e.g. when device is offline, either cached or default values will be returned by Statsig APIs.
      }];
      ```

  </TabItem>
  <TabItem value="android-java">
    ```java
      import com.statsig.androidsdk.*;
      ...

      Application app = getApplication();
      StatsigUser user = new StatsigUser("<LOGGED_IN_USER_ID>");
      CompletableFuture future = Statsig.initializeAsync(app, "<CLIENT_SDK_KEY>", user);
      future.thenApply(this::onStatsigReady);
      ...

      private Object onStatsigReady(Object empty) {
          // use your gates and feature configs now
      }
      ```
  </TabItem>
  <TabItem value="android-kotlin">
    ```kotlin
      import com.statsig.androidsdk.*

      ...

      val callback = object : StatsigCallback {
          override fun onStatsigReady() {
              // check gates/configs and log events
          }
      }

      Statsig.initialize(
          this.application,
          "<CLIENT_SDK_KEY>",
          StatsigUser("<LOGGED_IN_USER_ID>"),
          callback,
      )
      ```
  </TabItem>

  
  <TabItem value="net">
    ```csharp
      using Statsig;
      using Statsig.Client;

      await StatsigClient.Initialize(
          "<CLIENT_SDK_KEY>",
          new StatsigUser { UserID = "<LOGGED_IN_USER_ID>", Email = "user@email.com" },
          new StatsigOptions(new StatsigEnvironment(EnvironmentTier.Development)) // optional, use when needed to customize certain behaviors
      );
      ```


  </TabItem>
</Tabs>
  
  
You must pass a user ID at a minimum to initialize the SDK. Statsig also provides built-in user attributes such as email, IP address, user agent, country, locale, and client version that you can also pass as part of a user object to create targeting rules based on any of these dimensions.

<Tabs
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'React', value: 'react'},
    {label: 'iOS', value: 'ios'},
    {label: 'Android', value: 'android'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="js">
    ```jsx
      const user = {
          userID: <LOGGED_IN_USER_ID>,
          ip: currentIP,
          custom: {
              new_user: true,
              level: 2
          }
      };

      await statsig.initialize('<CLIENT_SDK_KEY>', user);
      ```

  </TabItem>
  <TabItem value="react">
    ```react

      import { StatsigProvider } from 'statsig-react';

      ...

      <StatsigProvider
          sdkKey="<CLIENT_SDK_KEY>"
          user={{
            userID: <LOGGED_IN_USER_ID>,
            email: session?.user?.email ?? undefined,
            ... // other user parameters
          }}
          waitForInitialization={true}>
          <Component />
      </StatsigProvider>
      ```

  </TabItem>
</Tabs>




#### Step 4: Check the feature gate


To implement a feature gate, you must include a feature gate check in your application code. 

A feature gate check returns a Boolean value. A feature gate is closed/off and a gate check returns **false** by default. After you have created a rule to target a set of users, the feature gate check returns **true** when you perform a check for an eligible user. You can use this return value to expose the eligible user to the feature as shown below.
  
  
<Tabs
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'React', value: 'react'},
    {label: 'iOS - Swift', value: 'ios-swift'},
    {label: 'iOS - Objective C', value: 'ios-objectivec'},
    {label: 'Android - Java', value: 'android-java'},
    {label: 'Android - Kotlin', value: 'android-kotlin'},  
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="js">
    ```jsx
    if (statsig.checkGate('new_homepage_design')) {
      // Gate is on, show new home page
    } else {
      // Gate is off, show old home page
    }
    ```

  </TabItem>
  <TabItem value="react">
    ```react
    import { useGate } from 'statsig-react';

    ...

    export default function MyComponent(): JSX.Element {
      // only call hooks at the top level of a functional component
      const featureOn = useGate(<MY_FEATURE_GATE>).value;

      return {featureOn ? <MyComponent /> : null;
    }
    ```

  </TabItem>
  <TabItem value="ios-swift">
    ```swift
    if Statsig.checkGate("new_homepage_design") {
      // Gate is on, show new home page
    } else {
      // Gate is off, show old home page
    }
    ```

      </TabItem>
      <TabItem value="ios-objectivec">
    ```objectivec
    if ([Statsig checkGateForName:@"new_homepage_design"]) {
    // Gate is on, show new home page
    } else {
      // Gate is off, show old home page
    }
    ```

  </TabItem>
  <TabItem value="android-java">
    ```java
    if (Statsig.checkGate("new_homepage_design")) {
      // Gate is on, show new home page
    } else {
      // Gate is off, show old home page
    }
    ```

  </TabItem>
  <TabItem value="android-kotlin">
    ```kotlin
    if (Statsig.checkGate("new_homepage_design")) {
      // Gate is on, show new home page
    } else {
      // Gate is off, show old home page
    }
    ```

  </TabItem>
  <TabItem value="net">
    ```csharp
    if (StatsigClient.CheckGate("new_homepage_design"))
    {
      // Gate is on, show new home page
    }
    else
    {
      // Gate is off, show old home page
    }
    ```

  </TabItem>
</Tabs>




#### Step 5 (Optional): Log an event

You can optionally log an event to capture any metrics that show the impact of your feature. 
  
<Tabs
  defaultValue="js"
  values={[
    {label: 'Javascript', value: 'js'},
    {label: 'React', value: 'react'},
    {label: 'iOS - Swift', value: 'ios-swift'},
    {label: 'iOS - Objective C', value: 'ios-objectivec'},
    {label: 'Android - Java', value: 'android-java'},
    {label: 'Android - Kotlin', value: 'android-kotlin'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="js">

    ```jsx
    statsig.logEvent('add_to_cart', 'SKU_12345', {'price': '9.99', 'item_name': 'diet_coke_48_pack'});
    ```


  </TabItem>
  <TabItem value="react">
    ```react
    export default function MyComponent(): JSX.Element {
      const statsig = useStatsig();

      return
        <Button
          onClick={() => {
            statsig.logEvent('button_clicked');
          }}
        />;
    }
    ```

  </TabItem>
  <TabItem value="ios-swift">
    ```swift
    Statsig.logEvent(withName: "purchase", value: 2.99, metadata: ["item_name": "remove_ads"])
    ```


  </TabItem>
  <TabItem value="ios-objectivec">

    ```objectivec
    [Statsig logEvent:@"purchase" doubleValue:2.99 metadata:@{@"item_name" : @"remove_ads"}];
    ```
  </TabItem>

  <TabItem value="android-java">

    ```java
    Statsig.logEvent("purchase", 2.99, Map.of("item_name", "remove_ads"));
    ```

  </TabItem>
  <TabItem value="android-kotlin">

    ```kotlin
    Statsig.logEvent("purchase", 2.99, Map.of("item_name" to "remove_ads"))
    ```
  </TabItem>

  <TabItem value="net">
    ```csharp
    StatsigClient.LogEvent("add_to_cart", "SKU_12345", new Dictionary<string, string>() { { "price", "9.99" }, { "item_name", "diet_coke_48_pack" } });
    ```


  </TabItem>
</Tabs>  


### Using the Server SDK

#### Step 1: Get the Statsig server secret key

To get the Statsig server secret key, 
- Log into the Statsig console at https://console.statsig.com 
- Click on the **Project Settings** gear icon next to your account settings at the top right corner of the page as shown below

  ![image](https://user-images.githubusercontent.com/1315028/129190279-60ab338f-02da-4b9a-86ee-e81cb6ac8940.png)

- Click on the **API Keys** tab
- Copy the active **Server Secret Key**

#### Step 2: Install the SDK

You can install the statsig SDK via npm or yarn:

    
<Tabs
  defaultValue="js"
  values={[
    {label: 'Node', value: 'node'},
    {label: 'Java', value: 'java'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Go', value: 'go'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="ruby">
    ```ruby
    require 'statsig'

    Statsig.initialize('server-secret-key')

    // Or, if you want to initialize with certain options
    options = StatsigOptions.new({'tier' => 'staging'})
    Statsig.initialize('server-secret-key', options)
    ```
  </TabItem>
  <TabItem value="node">
    ```shell
    npm install statsig-node //using npm
    ```
    
    ```shell
    yarn add statsig-node //using yarn
    ```
    
  </TabItem>
  
  <TabItem value="java">
    Install the Statsig Server SDK using jitpack from https://jitpack.io/#statsig-io/java-server-sdk.

  </TabItem>
  <TabItem value="go">
    In your go.mod, add a dependency on the most recent version of the SDK. See the [Releases tab in github](https://github.com/statsig-io/go-sdk/releases) for all versions.

    ```
    require (
      github.com/statsig-io/go-sdk v0.1.4
    )
    ```

  </TabItem>

  
  <TabItem value="net">
    The Statsig SDK package is hosted on [Nuget](https://www.nuget.org/packages/Statsig/). You can either install it from your Visual Studio's Nuget package manager, or through .NET CLI as shown below:

    ```shell
    dotnet add package Statsig --version 1.1.0
    ```

  </TabItem>
</Tabs>

#### Step 3: Initialize the SDK

To initialize the SDK, copy the following in your server side application code:
  
<Tabs
  defaultValue="js"
  values={[
    {label: 'Node', value: 'node'},
    {label: 'Java', value: 'java'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Go', value: 'go'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="ruby">
    ```ruby
    require 'statsig'

    Statsig.initialize('server-secret-key')

    // Or, if you want to initialize with certain options
    options = StatsigOptions.new({'tier' => 'staging'})
    Statsig.initialize('server-secret-key', options)
    ```
  </TabItem>
  <TabItem value="node">
    ```jsx
    const statsig = require('statsig-node');

    await statsig.initialize(
        'server-secret-key',
        { environment: { tier: 'staging' } }, // optional, pass options here if needed
    });
    ```
  </TabItem>
  
  <TabItem value="java">
    ```java
    Future initFuture = StatsigServer.initializeAsync("<server_secret>");
    initFuture.get();
    // Now you can check gates, get configs, log events

    StatsigUser user = new StatsigUser();
    user.email = "address@domain.com"
    Future<Boolean> featureOn = StatsigServer.checkGateAsync(user, "<gate_name>");
    Boolean isFeatureOn = featureOn.get()
    ```

  </TabItem>
  <TabItem value="go">
    ```go
    import (
      statsig "github.com/statsig-io/go-sdk"
      "github.com/statsig-io/go-sdk/types"
    )

    statsig.Initialize("server-secret-key")

    // Or, if you want to initialize with certain options
    statsig.InitializeWithOptions("server-secret-key", &types.StatsigOptions{Environment: types.StatsigEnvironment{Tier: "staging"}})
    ```
  </TabItem>

  
  <TabItem value="net">
    ```csharp
    using Statsig;
    using Statsig.Server;

    await StatsigServer.Initialize(
        "server-secret-key",
        new StatsigOptions(new StatsigEnvironment(EnvironmentTier.Development)) // optional, use when needed to customize certain behaviors
    );
    ```
  </TabItem>
</Tabs>


#### Step 4: Check the feature gate


To implement a feature gate, you must include a feature gate check in your application code. 

A feature gate check returns a Boolean value. A feature gate is closed/off and a gate check returns **false** by default. After you have created a rule to target a set of users, the feature gate check returns **true** when you perform a check for an eligible user. You can use this return value to expose the eligible user to the feature as shown below.

<Tabs
  defaultValue="js"
  values={[
    {label: 'Node', value: 'node'},
    {label: 'Java', value: 'java'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Go', value: 'go'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="ruby">
   ```ruby
    user = StatsigUser.new({'userID' => 'some_user_id'})
    if Statsig.check_gate(user, 'use_new_feature')
      // Gate is on, enable new feature
    else
      // Gate is off
    end
    ```
  </TabItem>
  <TabItem value="node">
    ```jsx
    const user = {
      userID: '12345',
      email: '12345@gmail.com',
      ...
    };

    const showNewDesign = await statsig.checkGate(user, 'new_homepage_design');
    if (showNewDesign) {
      // show new design here
    } else {
      // show old design here
    }
    ```
  </TabItem>
  
  <TabItem value="java">
    ```java
    Future initFuture = StatsigServer.initializeAsync("<server_secret>");
    initFuture.get();
    // Now you can check gates, get configs, log events

    StatsigUser user = new StatsigUser();
    user.email = "address@domain.com"
    Future<Boolean> featureOn = StatsigServer.checkGateAsync(user, "<gate_name>");
    Boolean isFeatureOn = featureOn.get()
    ```

  </TabItem>
  <TabItem value="go">
     ```go
    user := types.StatsigUser{UserID: "some_user_id"}
    feature := statsig.CheckGate(user, "use_new_feature")
    if feature {
      // Gate is on, enable new feature
    } else {
      // Gate is off
    }
    ```
  </TabItem>

  
  <TabItem value="net">
    ```csharp
    var user = new StatsigUser { UserID = "some_user_id", Email = "user@email.com" };
    var useNewFeature = await StatsigServer.CheckGate(user, "use_new_feature");
    if (useNewFeature)
    {
      // Gate is on, enable new feature
    }
    else
    {
      // Gate is off
    }
    ```
  </TabItem>
</Tabs>
    
#### Step 5 (Optional): Log an event

You can optionally log an event to capture any metrics that show the impact of your feature. 

<Tabs
  defaultValue="js"
  values={[
    {label: 'Node', value: 'node'},
    {label: 'Java', value: 'java'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Go', value: 'go'},
    {label: '.NET', value: 'net'},
  ]}>
  <TabItem value="ruby">
    ```ruby
    Statsig.log_event(user, 'add_to_cart', 'SKU_12345', { 'price' => '9.99', 'item_name' => 'diet_coke_48_pack' })
    ```
  </TabItem>
  <TabItem value="node">
    ```jsx
    statsig.logEvent(user, 'add_to_cart', 'SKU_12345', {'price': '9.99', 'item_name': 'diet_coke_48_pack'});
    ```

  </TabItem>
  
  <TabItem value="java">
    ```java
    StatsigServer.logEvent(null, "eventName", 1.0, mapOf("test" to "test2"))
    ```

  </TabItem>
  <TabItem value="go">
     ```go
      statsig.LogEvent(types.StatsigEvent{
          User: user,
          EventName: "add_to_cart",
              Value: "SKU_12345",
          Metadata: map[string]string{"price": "9.99","item_name": "diet_coke_48_pack"},
        })
      ```

  </TabItem>

  
  <TabItem value="net">
    ```csharp
    StatsigServer.LogEvent(user, "add_to_cart", "SKU_12345", new Dictionary<string, string>() { { "price", "9.99" }, { "item_name", "diet_coke_48_pack" } });
    ```
  </TabItem>
</Tabs>
    
    
    








