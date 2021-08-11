# Working with feature gates

Statsig offers several built-in capabilities with feature gate:  
- A feature gate can be a simple *kill switch* that you turn off a particular code branch for all your users
- You can use a feature gate to *target* newly coded system behavior to specific users. 
- With *rules*, you can determine the eligibility of each user based on common user attributes such as location, client device, browser type, and client app version. You can also determine the eligibility of each user based on custom attributes. 
- Each feature gate offers *built-in A/B tests* with no additional effort or charge. For each feature gate, you can automatically see how your features are performing in production compared to a control or baseline. 
- A feature gate may *depend* on other feature gates that control when it’s active. For example, you can create a feature gate as a top level kill switch that activates child feature gates that depend on it.


The following tutorials show you how to perform common tasks with feature gates.

#### Tutorials
- [Create a feature gate]()
- [Create rules for a feature gate]()
- [Test a feature gate]()
- [Use a language specific Statsig SDK to implement a feature gate in your application]()
- [View exposures to a feature gate]()

