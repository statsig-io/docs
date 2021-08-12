

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
