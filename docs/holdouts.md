# Holdouts
Holdouts measure the aggregate impact of multiple features. A "holdout" is a group of users that are held back from a set of features to measure the aggregate impact of this feature set. While each A/B test or experiment you run compares control and test groups for that feature, a holdout compares a ‘global’ control group with users who have been exposed to a subset of the features. 

## How to use Holdouts
1.	To create a new holdout, navigate to the Holdouts section on the Statsig console: https://console.statsig.com/ 
2.	Click the Create New button and enter the name and description of the holdout that you want to create. 
3.	You can choose to either create a global or a selected holdout. A global holdout captures the aggregate impact of all features developed after the holdout began. A selected holdout captures the aggregate impact of a specific selection of features that you want to hold off. 
4.	You must set the percentage of users to be held-out between 1% to 10%. Statsig recommends a small holdout percentage to limit the number of customers who don’t see new features. 

![image](https://user-images.githubusercontent.com/1315028/131407752-e3bd55dc-7a3d-4f16-b622-4ac8d521291a.png)

## How to read Holdouts
As Holdouts measure the impact for users who aren't seeing any new features, your metrics will likely show a negative lift. This is a good result because it means that the features you’ve shipped have a positive impact on your metrics. 

![image](https://user-images.githubusercontent.com/1315028/131407825-23f00cd3-8e64-429c-91a4-48a8eaa8555a.png)

## Best Practices
1. **Size** - Statsig recommends a small holdout percentage, say 1% – 2%, to limit the number of customers who don’t see new features. 
2. **Duration** - Statsig recommends operating holdouts for a period of three to six months, and then releasing the holdout. Prolonging the holdout period may increase the complexity of your software as you’d have to maintain a functioning product with no new features for a longer period.  
3. **Back testing** - Occasionally you may want to turn off a set of features that you have already released to measure the effectiveness of those features. Statsig doesn’t recommend this as it turns off features that users are already using and relying on. However, when a "back measurement" is critical, you can use Holdouts to turn off a set of features and automatically compute the impact of this set of features.



