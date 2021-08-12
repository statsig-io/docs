### Use a language-specific Statsig SDK to implement the experiment in your application

To deploy your experiment, your application must pull the experiment configuration from Statsig and log the required events with Statsig. 

```js
config = statsig.getExperiment("change_get_a_demo_button_color")

...
statsig.logEvent("sign_up_completed") 
```
