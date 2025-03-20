---
title: Warehouse Costs
slug: /statsig-warehouse-native/guides/costs
sidebar_label: Warehouse Costs
description: How you can manage costs with statsig
keywords:
  - owner:vm
---

This page is a high level summary of how to think about Warehouse Costs and Total Cost of Ownership on Statsig Warehouse Native. There's some duplication with the [best practices](./best-practices.md) page; treat that page an implementation guide and this page as a high-level overview.

## Why do Costs Matter?

Warehouse Native platforms require you to provide compute and storage to run data jobs like experiment analyses and analytics queries. This will be a cost center, and can meaningfully drive up your warehouse bill if queries are unoptimized or poorly integrated with your databases.

This is a major concern for many customers considering a Warehouse Native solution for Experimentation or Analytics. Warehouse Native platforms are very flexible, but that flexibility can lead to unexpected data costs. Understanding total cost of ownership can be tricky, but is an important part of evaluating a platform as many platforms don't treat this as a primary focus.

Statsig started as a cloud-only platform, and it's in our DNA to care about the costs of running our platform. From continuously optimizing pipelines on the cloud side of our business, we've also developed expertise with strategies that can be employed to save costs and try to pass that on to our Warehouse Native customers.

## Benchmarks

### Total Cost of Ownership

Generally, we see that warehouse costs hover between 5% and 20% of customers' platform spend with Statsig. There are exceptions depending on usage, but these tend to be on the low end. To avoid cherry picking, the examples below are an anonymized list of the top 5 Statsig Warehouse Native customers on Snowflake, by total warehouse spend:

| Company Profile                                                           | Experiments Run, 12 Months | Estimated % Contract Value Spent on Compute |
| ------------------------------------------------------------------------- | -------------------------- | ------------------------------------------- |
| Multi-sided marketplace (e.g. job search / contracts), 100M-1B in Revenue | 120                        | 12%                                         |
| Multinational B2C business, 5B-20B in revenue                             | 210                        | 9%                                          |
| B2B SaaS, 100M-1B in Revenue                                              | 250                        | 11%                                         |
| Online Entertainment, 100M-1B in Revenue                                  | 180                        | 6%                                          |
| Online Services, 50-100M in Revenue                                       | 130                        | 20%                                         |

This is fairly representative of what you can expect using Statsig at scale and with reasonable adherence to best practices. Note that costs do scale with # experiments; companies running less experiments will generally see a smaller relative TCO.

Relative to Experiment Size, you will see a great deal of variation in spend depending on how many metrics you use, what kind of metrics, and how "dense" your metrics are, but generally we see numbers like the below for cost when teams follow best practices:

| Experiment Size                                   | Cost per Experiment Load                                       | Lifetime Cost per Experiment (4 Weeks with Daily Refreshes & Drilldowns) | Lifetime Cost Using Turbo |
| ------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------- |
| Small (50k or less units)                         | < $0.05                                                        | \$0.25 - $2.00                                                           | \$0.25 - $1.00            |
| Medium                                            | < $0.25                                                        | \$1.00 - $10.00                                                          | \$1.00 - $5.00            |
| Large                                             | \$0.25 - $10.00                                                | \$5.00 - $280.00                                                         | \$3.00 - $50.00           |
| Extremely Large (500 Million+ experimental units) | Low Sample with only a handful of companies - Can't Generalize | "                                                                        | "                         |

Note that Turbo Mode is especially efficient for large-scale experiments; Turbo mode dramatically reduces memory usage, keeping large jobs from spilling to disk and reducing the need for XL clusters to provide enough memory.

### Industry

Statsig prides itself on being best-in-class when it comes to Warehouse Native costs for experimentation. Customers who evaluate multiple vendors consistently report that Statsig is 50-66% of the cost of other platforms.

In cases where Statsig has been more expensive than competitors, it's considered a large issue and is quickly root-caused; for example, a recent customer accidentally used un-partitioned data for their Statsig PoC, driving up cost relative to another vendor where the tables were partitioned, leading to higher costs. We followed up to build warnings when source data is not partitioned, and after partitioning we went from 120% of the other vendor's cost to \<60%.

Multiple customers have migrated to Statsig from other Warehouse Native Experimentation platforms due to concerns about cost on their current platform; please reach out to our Sales team if you're interested in running an evaluation of relative costs. If you have concerns, or a separate party claims their solution is more efficient, please reach out to us and we'll be happy to discuss.

## Tools for Understanding Cost

Statsig tries to be as transparent as possible about costs. Numerous tools throughout the product help in this regard:

### History

In every loaded experiment/gate, you can quickly see the cost of each load. This is an easy inline way to understand the rough cost of a load. The metrics shown will be relevant to your warehouse - e.g. slot hours or bytes scanned for bigquery, uptime for snowflake, etc.

<img width="1209" alt="Pipeline History" src="https://github.com/user-attachments/assets/d2009b64-bbf6-49bf-a3a0-df04b0b89619" />

### Pipeline Overview Dashboard

Statsig automatically creates a `Pipeline Overview` dashboard in its MEx platform. The underlying data is written to your warehouse, so you can do deep dives and try to understand what is driving costs from Statsig. Many customers have built their own monitoring and alerting on top of this dataset and will flag to Statsig if they see any changes in cost.

<img width="1299" alt="Pipeline Overview" src="https://github.com/user-attachments/assets/0c1a1098-d345-458b-b7a0-2cc8bfc1ccfc" />

### Vendor Tooling

It's recommended to use standalone compute/storage resources for Statsig in your warehouse. This makes understanding the total cost of ownership trivial; while Statsig does its best to estimate costs, some info is invisible to the platform without administrator rights on your Warehouse.

If there's a mismatch between Statsig's dashboard and your costs, always reach out to support! We take this seriously and will work to resolve the gap.

## Tools for Managing Cost

### Follow UI Hints

Statsig will proactively flag to you if:

- A data source is particularly slow
- A metric source is malformed (e.g. a view definition which is broken within your warehouse)
- A data source is not following best practices

Paying attention to these and flagging them quickly prevents wasted compute. In most cases where PoC customers had performance issues, they boiled down to issues like their temp tables for the PoC not being partitioned, or not using macros to filter tables with extremely long data retention.

### Access Controls

For large organizations, most cost issues are caused by poorly-optimized source tables, or using the wrong source when pulling data.

Statsig offers access controls so that:

- Your data team can control data sources and ensure that they are well-behaved
- Verified sources are clear in the console for end users to use.

### Following Best Practices

The [best practices](./best-practices.md) cover most situations that lead to high warehouse costs on Statsig. In short, you should aim to:

- Cluster or Partition source tables
- Use statsig date macros to guarantee filter push-down
- Use Statsig's turbo mode to reduce redundant compute, especially for large or long experiments
