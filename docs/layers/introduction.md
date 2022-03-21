---
title: Introduction
sidebar_label: Introduction
slug: /layers
---

# What are Layers?
Layers are a way of performing experiments with out requring continued updates to your codebase. They are a 'write once' solution to experimentation. Layers work with Experiments to run tests on product features, and allow shared parameters between Experiments.

## When to use Layers
Similar to our Experiments product, Layers are ideal for running A/B or A/B/n experiments. There differentiator is that you can avoid rewritting code between experiment runs.


## Layers vs Experiments 
Why would you want to use Layers? Let's say you have an experiment that changes the color of the checkout button in your purchase flow. This code might look something like this:

```js
const experiment = statsig.getExperiment('checkout_button_experiment_v1')
const buttonColor = experiment.getValue('button_color', 'blue');
<button style={{backgroundColor: buttonColor}}>Checkout</button>
```

Now let's say, after running the experiment, you decide you would like to also change the text. You would need to update your code and setup a new experiment, perhaps something like this.

```js
const experiment = statsig.getExperiment('checkout_button_experiment_v2')
const buttonColor = experiment.getValue('button_color', 'blue');
const buttonText = experiment.getValue('button_text', 'Checkout');
<button style={{backgroundColor: buttonColor}}>{buttonText}</button>
```

These changes would need a client side update/release, and would be required for every change and experiment run.


**With Layers** you could outline all possible experiment params once, and then run as many experiments as you want, without requiring client side changes. This could look like:

```js
const layer = statsig.getLayer('checkout_button_experiments')
const buttonColor = layer.getValue('button_color', 'blue');
const buttonText = layer.getValue('button_text', 'Checkout');
const buttonFontWeight = layer.getValue('button_font_weight', 400);
<button style={{backgroundColor: buttonColor, fontWeight: buttonFontWeight}}>{buttonText}</button>
```

Layers are a way to run mutliple experiments quickly, in parallel or with rapid iteration.


To learn about all that you can do with Layers, see the Statsig tutorial [on Layers in JS](/layers/js-tutorial).
