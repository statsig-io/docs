### Use a language-specific Statsig SDK to implement a feature gate in your application

To implement a feature gate, you must include a feature gate check in your application code. 

A feature gate check returns a Boolean value. A feature gate is closed/off and a gate check returns **false** by default. After you have created rules to target a set of users, the feature gate check returns **true** when you perform a check for an eligible user. You can use this return value to expose the eligible user to the feature as shown below.

```js
if (Statsig.checkGate("<FEATURE_GATE_NAME>")) {
  // Gate is ON, show new experience
} else {
  // Gate is OFF, show default experience
}
```
