---
title: Making the Decision
sidebar_label: Make Decision
slug: /experiments-plus/make-decision
---

Making a decision for an experiment enables you to 'ship' the winning group to all your users. 
After you make the decision, the variant that your users see depends on whether you're using a **targeting gate** for your experiment. 


## Experiments With No Targeting Gate
When you ship a group in an experiment with no targeting gate, the parameter values from the shipped group will become the default values 
for _all_ your users going forward. 

If the experiment happens to use parameters from a layer, the layer's parameters will now take on the shipped group's parameter values 
as their defaults. These are the values that _all_ your users will see going forward. 

For example, suppose you have a **Demo Layer** that's configured with a parameter, **a_param**. It's default value is set to _layer_default_ as shown below.

<img width="746" alt="image" src="https://user-images.githubusercontent.com/1315028/162633143-3ddd9652-4e99-4760-aac0-c89dec8ce70c.png">

Say you decide to create an experiment, **Demo Experiment** in **Demo Layer** as shown below. 

<img width="383" alt="image" src="https://user-images.githubusercontent.com/1315028/162633041-633de059-f676-4f76-a0ef-4d17b03648a0.png">

You set up **Demo Experiment** with two groups: **Control** and **Test**, intending to experiment with new values for the layer-level parameter, **a_param** as shown below.

<img width="630" alt="image" src="https://user-images.githubusercontent.com/1315028/162633712-a5e889dd-32ba-4248-8524-b6d5555b4dfd.png">


Now if you decide to ship the **Control** group for the **Demo Experiment**, **a_param** will take the value set for the **Control** group as its default: _experiment_one_control_

<img width="455" alt="image" src="https://user-images.githubusercontent.com/1315028/162630956-1ffaa81f-c95f-4df7-9ced-b138cfe26d96.png">

On the other hand, if you decide to ship the **Test** group, **a_param** will take the value set for the **Test** group as its default: _experiment_two_test_

<img width="454" alt="image" src="https://user-images.githubusercontent.com/1315028/162631111-daf31f6f-156b-481e-aa01-f29743f7e20a.png">


## Experiment With a Targeting Gate
When you decide ship a group in an experiment configured with a targeting gate, you can decide whether to continue targeting after shipping.
- If you decide to _discontinue_ targeting, the parameter values from the shipped group will become the default values for all your users going forward. If the experiment happens to use parameters from a layer, the layer's parameters will now take on the shipped group's parameter values as their defaults. These are the values that your users will see going forward.
- If you decide to _continue_ targeting, this will add an override to the experiment layer so that: 
   - all users who **pass** the targeting gate will see shipped group's parameter values
   - all users who **fail** the targeting gate will see the default value (layer-level parameter defaults or the defaults you set for the parameter in your code)

:::info **Shipping with Targeting On**
Note that if you decide to continue targeting, shipping a group will not update the default value of any layer parameters.
::: 

For example, suppose **Demo Experiment** in a **Demo Layer** that has a parameter called **targetted_layer_param**, whose default value is set to 
_targetted_layer_default_value_. 

When you decide to ship **Demo Experiment**, if you discontinue targeting, 
**targetted_layer_param** will now take on the value from the **Control** group, _targetted_layer_control_, as its default. 

<img width="454" alt="image" src="https://user-images.githubusercontent.com/1315028/162630927-e4b147a3-5b68-41d0-a439-f90ab001d737.png">

On the other hand, if you decide to continue targeting, 
**targetted_layer_param** will now acquire an override so that:
- all users who **pass** the targeting gate will see the _overriden_ value of the parameter
- all users who **fail** the targeting gate will see the _default_ value of the parameter

In this case, the default value of **targetted_layer_param** in **Demo Layer** will not change. 

<img width="454" alt="image" src="https://user-images.githubusercontent.com/1315028/162634627-ae327d9e-81a9-42f9-8171-836808cb6ffb.png">
