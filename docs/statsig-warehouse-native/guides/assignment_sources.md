---
title: Assignment Sources
slug: /statsig-warehouse-native/guides/assignment-sources
sidebar_label: Assignment Sources
---

Assignment Sources are an interface to connect to your assignment data from Statsig. These assignments could be from Statsig, or any source with the required fields. Here, we'll go through the process of setting one up.

## Creating a Metric Source

To create an assignment source, go to the experiments tab in Statsig and go to the Assignment Sources pane. We also have a metrics API that lets you create metrics programatically.

<!-- <Image_Of_Metric_Source_Page> -->

An Assignment Source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig requires (user identifiers, a `timestamp`, an experiment identifier, and a group identifier).

<!-- <Image of set up metric> -->

## Manage Assignment Sources

In the Assignment Source tab, you can see your Assignment sources and the experiments they're being used in.

<!-- <Image of Metric Source Tab> -->

Now that we have an Assignment Source, we can load it. This kicks off a query to find the experiments, groups,
and populations present in the assignment source.

Once these are loaded, you can use the experiment assignments from the new Assignment Source to create an Experiment.
