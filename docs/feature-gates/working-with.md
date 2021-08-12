# Working with feature gates

Statsig offers several built-in capabilities with feature gate:  
 - A feature gate can be a simple *kill switch* that you can use to turn off a particular code branch for all your users
 - You can use a feature gate to target newly coded system behavior to a specific set of users to implement *whitelisting*
 - You can create user targeting *rules* based on environment attributes such as location, client device, browser type, and client app version 
 - You can create user targeting *rules* based on user attributes such as email and user ID 
 - Each feature gate offers built-in *A/B testing* with no additional effort or charge so you can automatically see how your software changes are performing in production compared to a control or baseline 
 - A feature gate may depend on other *targeting gates* that control when it’s active; for example, you can create a feature gate as a top level kill switch that activates child feature gates that depend on it
  
The following tutorials show how you can perform common tasks with segments.

- [Create a feature gate](https://docs.statsig.com/feature-gates/create-new)
- [Create a rules for a feature gate](https://docs.statsig.com/feature-gates/add-rule)
- [Use a language-specific Statsig SDK to implement a feature gate in your application](https://docs.statsig.com/feature-gates/implement)
- [Test a feature gate](https://docs.statsig.com/feature-gates/test-gate)
- [View feature gate exposures](https://docs.statsig.com/feature-gates/view-exposures)



  
  
