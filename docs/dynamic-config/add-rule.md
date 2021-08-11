### Add a rule to a dynamic config

To add new user targeting rules to a dynamic config,
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Dynamic Configs**
- Select the dynamic config where you want to add a rule 
- Click the **Add Targeting** button
- Click the **Add New Rule** button 
- Select the criteria for identifying the users you want to target:
  - You can target users based on common attributes such as their operating system as shown below 

  ![image](https://user-images.githubusercontent.com/1315028/129112226-51978083-d007-4697-88b5-f3a080eabf48.png)

  - You can target users in a defined [segment]() as shown below
  
  ![image](https://user-images.githubusercontent.com/1315028/129112427-27351aaf-074e-4997-91d8-6e1e7941b991.png)

  - You can target users who are eligible for a specific feature gate as shown below; this ensures that the dynamic config is activated only for users who're exposed to the target feature gate  

  ![image](https://user-images.githubusercontent.com/1315028/129112612-d881981c-4fc6-4e95-a9c5-18319c02d6f2.png)

