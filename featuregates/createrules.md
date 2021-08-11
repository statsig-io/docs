### Create rules for a feature gate

By default, a feature gate check returns **false** when there are no rules configured to target a set of users. You can add a rule to a feature gate as follows: 
- Log into the Statsig console at https://console.statsig.com 
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate where you want to add a targeting rule
- Click the **Add New Rule** button 

![image](https://user-images.githubusercontent.com/1315028/129073615-5450677f-7722-49f5-827b-d21b5711c3e5.png)

- Select the criteria to target a set of users. For example, select **Email** and the **Contains any of** operator, and enter the email domain of your company to target only internal employees as shown below

![image](https://user-images.githubusercontent.com/1315028/129073372-6c268543-ca64-44a6-98a3-7e179084cd44.png)

- Select the share of eligible users that must be exposed to the new feature 
- Click the **Add Rule** button to complete the rule

 
