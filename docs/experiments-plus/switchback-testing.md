---
title: Switchback Testing 
sidebar_label: Switchback Testing
slug: /experiments-plus/switchback-testing
---

# What is Switchback Testing? 

Switchback tests are an alternative experiment form, whereby an entire population is “switched” back and forth between test and control treatments on a set cadence vs. being split and evenly divided between test and control for the duration of the experiment. 

Switchback tests are particularly common in marketplaces, whereby running a traditional A/B on one side- or a small %- of the marketplace would have an unintended consequence on the rest of the marketplace due to network effects, ultimately impacting experiment results. 

Switchback tests are often carried out across multiple “buckets”, typically regions or other defined groups that are flipped between test and control treatments over the course of the experiment. 

### Switchback Testing Example 

Let’s say you are a rideshare platform and want to test pricing. You initially consider splitting your riders into two groups, one with the higher price and one with a lower price. 

However, you quickly notice that the riders with the lower price are requesting rides at a significantly higher rate, and sucking up all the available driver supply in a given area. This leaves the riders with higher prices with not only a higher ride estimate, but longer ETAs when they open up their app, making them even less likely to request. 

When you look at your experiment results you’re not sure if the decreased ride request rate in the higher price group was due to the higher prices they saw or the fact that their ETAs went up- your experiment results are polluted! 

In this scenario, you could consider running a Switchback test on your marketplace. To do this, you might switch 100% of your riders and drivers in a given metro in and out of the new pricing plan hourly and understand the impact on overall ride request rates during hours at which rider prices were higher vs. lower. 

# Switchback Testing on Statsig 

## Methodology

Our Switchback Testing methodology for computing results consists of 3 steps:

1. Attribute events to the corresponding switchback bucket, where each bucket is defined by the time window and grouping attribute.
2. Calculate the variant-level and bucket-level metrics based on the attributed events.
3. Calculate the difference in means between test and control.  Use bootstrapping to obtain the confidence intervals.

### Event Attribution 
Attribution of events to a particular bucket is based on the timestamp and unit_id of the exposure, the length of the attribution window, and the timestamp of subsequent events for that unit_id.  

For example: User 123 is exposed to bucket A at 9:15 am.  The test has an attribution window of 90 minutes.  This means all events triggered by user 123 between 9:15 am and 10:45 am will be included in the metric calculations for bucket A. 

### Bucket-level Metrics 
Once we have all the events corresponding to a bucket, we calculate the scorecard metrics derived from these events.  



#Setup 
To set up a Switchback test on Statsig, when you create an experiment tap **Advanced Settings** → **Experiment Type** and select “Switchback Test”.



There are a few new aspects of experiment configuration when setting up a Switchback test, namely- 

1. **Buckets**- The different defined populations you will be running your experiment on. 
2. **Schedule**- The switching frequency and starting treatment for each bucket.

When configuring buckets under experiment targeting, you can choose between *None*, *Country, Locale,* or any *Custom Field* you log. Not configuring any buckets (choosing “None”) will default to using your whole population. 

The Schedule section of experiment setup enables you to configure-

- Start time
- Duration (in days)
- Assignment window size (in minutes)
- Burn-in/ burn-out periods (in minutes)
- Starting phase (treatment group) for each bucket

Burn-in/ burn-out periods enable you to define periods at both the beginning and end of your switchback windows to discard exposures from analysis. This is typically leveraged when there are risks of “bleed over effect” from the previous treatment while a bucket is switching between test and control.


# APPENDIX

$P(\ p = p_k \ |\ \hat{p}\ ) = \frac{P(\ p_k\ \cap\ \hat{p}\ ) }{P(\hat{p}\ ) } = \frac{P(\ p_k\  \ \cap\ \hat{p}\ ) }{\sum_{\forall p_i} P(\ \hat{p}\ \cap\ p_i\ )} = \frac{P(\ \hat{p} \ | \ p_k)\ \cdot\ P(p_k) }{\sum_{\forall p_i} P(\ \hat{p} \ |\ p = p_i\ ) \ \cdot \ P(\ p = p_i\ ) }$

In other words, given the new observations in the sample, $\hat{p}$, we can calculate the updated probability of the true value of $p$ being $p_k$, ie. the _posterior probability distribution_ It is the probability of the event that both $p=p_k$ and $\hat{p}$ being observed, divided by the probability of $\hat{p}$ being observed across all possible values of $p$. Statisticians often visualize this rule using the area in a Venn Diagram. 

![Image](https://github.com/statsig-io/docs/assets/132317445/6e446d4b-d45f-4db8-9f8c-063c95d8e164)


$\text{Given observed sample mean } \hat{\mu} = \frac{1}{n} \sum X_i \ \ , \ \ \mu_{\text{posterior}} \sim N\left(\ \ \frac{1}{\frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}}\left(\frac{\mu_0}{\sigma_0^2} + \frac{n\hat{\mu}}{\sigma^2}\right) \ \ , \ \ \frac{1}{\frac{1}{\sigma_0^2} + \frac{n}{\sigma^2}}\ \ \right)$
 


- Treatment Lift $:= \frac{\mu_t - \mu_c}{\mu_c}$
- 95% Credible Interval $:= \left[\frac{\alpha}{\mu_c},\frac{\beta}{\mu_c}\right]$ where $\alpha, \beta \in \mathbb{R}: P(\ \alpha < \Delta < \beta\ ) >  95\%$
- Expected Loss $:= \text{Exp}[\ \Delta\ |\ \Delta < 0 \ ] \cdot P(\Delta < 0)$
- Chance to Beat $:= P(\Delta > 0)$
