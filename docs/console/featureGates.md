---
title: Feature Gates
---

Feature Gates are Statsig's take on Feature Flags/Toggles/Switches/etc. [Wikipedia](https://en.wikipedia.org/wiki/Feature_toggle) defines it as "a technique in software development that attempts to provide an alternative to maintaining multiple branches in source code (known as feature branches), such that a software feature can be tested even before it is completed and ready for release."

Feature Gates as implemented by Statsig are only (and will only ever be) a boolean value. Gates are closed/off (think `return false`) by default. With this in mind, typical callsites using Feature Gates will look something like this:

```
if (Statsig.checkGate('<FEATURE_GATE_NAME>')) {
    // Gate is ON, show new experience
} else {
    // Gate is OFF, show default experience
}
```

Gates can be used as a simple killswitch, where they are either always on or always off. You can quickly toggle the gate in the Statsig Console if you need to shut off a particular code branch.

Beyond that, Feature Gates can have highly customized logic for determining user eligibility. You can use user attributes like location, client device/browser type, client app version, or custom attributes you set on a user to determine eligibility. Gates can even depend on other gates, so you can have a top level killswitch which governs access to child gates which depend on it.

Gates are always checked for a certain user. When you implement a Statsig SDK, or use our REST API, you will be limited to checking advanced gate conditions like user location by the amount of data you pass with a request for checking a gate. Pass as much as you will get value from, or as little as you are comfortable sharing. Statsig will attempt to fill in the gaps and make as many rich feature conditions available as possible for targeting your features.

If you are looking for these types of targeting tools, but need more than a boolean value returned for different targeted groups, see [Dynamic Config](/console/dynamicConfig).
