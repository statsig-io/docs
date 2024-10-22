---
title: Conclude Experiment & Defer Decision
sidebar_label: Conclude Experiment & Defer decision
slug: /experiments-plus/conclude-experiment-defer-decision
---
## Conclude the Experiment now and Defer Analysis for later

### Overview
The "Conclude Experiment and Defer Decision" feature allows you to effectively conclude an ongoing experiment which means stopping any further user allocation and data collection. This feature is particularly beneficial when you want to decouple running an experiment from making a ship decision.


### Benefits
- **Focused Decision Making**: Decoupling running experiment from making decision allows you to take the necessary time to evaluate results, weigh options, and review findings with stakeholders across teams.
- **Flexibility in Outcomes**: Decide whether to ship the control, implement the test, or abandon/restart the experiment based on comprehensive insights.

![Conclude Experiment](/img/conclude_experiment.png)

### Key Details

Things you should keep in mind when concluding an experiment:

- Once you conclude the experiment, no new users will be enrolled in the experiment.
- All the already exposed users will start receiving the default experience.
- Statsig will stop further data collection on the experiment and conclude results.
- After concluding the experiment, you can still decide to ship control vs test variant, reset, or abandon the experiment.

### Conclusion

Utilizing the "Conclude Experiment and Defer Decision" feature enhances your ability to make data-driven decisions without the risk of diluting results by continuously adding new participants or new data from existing participants. This structured approach ensures that all stakeholders are aligned before moving forward.