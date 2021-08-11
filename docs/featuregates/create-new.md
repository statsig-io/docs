### Create a feature gate

To create a new feature gate, 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Click on the **Create** button
- Enter the name and the description of the feature gate you want to create
- Click **Create** to complete creating your feature gate

 ![image](https://user-images.githubusercontent.com/1315028/129071275-d8e2a0da-c71d-4d96-8cbb-b83113597367.png)
 
When you create a feature gate, it is enabled by default as shown below. This means that any call to check this feature gate for a user evaluates the rules that you define for this feature gate. This check returns a **true** or **false** depending on whether that user matches these rules. If no rules are defined, the gate check returns **false** by default.
 
![image](https://user-images.githubusercontent.com/1315028/129071741-8bace745-f9e1-49c5-b563-7d4241bf8704.png)

You can disable the feature gate by clicking on the toggle button next to the name of the feature gate. Statsig always returns **false** when you check a feature gate that’s disabled. 

When you need more than a Boolean value returned for different groups of users, say to customize the user experience, set up a [dynamic config](https://docs.statsig.com/dynamicconfig). 
