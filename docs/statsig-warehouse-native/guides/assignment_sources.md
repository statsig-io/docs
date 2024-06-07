---
title: Assignment Sources
slug: /statsig-warehouse-native/guides/assignment-sources
sidebar_label: Assignment Sources
---

Assignment Sources are an interface to connect to your assignment data from Statsig. These assignments could be from Statsig, or from any data source with the required fields. Here, we'll go through the process of setting one up.

## Creating an Assignment Source

To create an assignment source, go to the experiments tab in Statsig and go to the Assignment Sources pane.

An Assignment Source is defined as a SQL query and a mapping of the output columns to specific fields
Statsig requires (user identifiers, a `timestamp`, an experiment identifier, and a group identifier).

![Assignment Source](https://user-images.githubusercontent.com/102695539/264100295-05d71c64-9b31-4531-b371-03b6cb692446.png)

## Manage Assignment Sources

In the Assignment Source tab, you can see your Assignment sources and the experiments they're being used in.

![Assignment Source Tab](https://user-images.githubusercontent.com/102695539/264100297-c41cd747-089c-4ccf-8b45-b70a1b4e264a.png)

Now that we have an Assignment Source, we can load it. This kicks off a query to find the experiments, groups,
and populations present in the assignment source.

Once these are loaded, you can use the experiment assignments from the new Assignment Source to create an Experiment.
