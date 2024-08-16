---
title: Retention Chart
tags:
  - Statsig Cloud
sidebar_label: Retention
slug: /product-analytics/retention
---

# Retention Chart

## Overview

Retention charts in Metrics Explorer help you understand how effectively your product or service maintains user interest and engagement over time. It’s a great way to measure product-market fit and critical for overall product growth.

By analyzing user retention patterns, you can identify whether your product or certain features are resonating with your audience, and which areas might need improvement. This insight is invaluable for making strategic decisions aimed at enhancing user experience and boosting long-term engagement.

### Use Cases

For our Retention Chart in Metrics Explorer, you can unlock a deeper understanding of user engagement and loyalty over time. This chart type is essential for tracking how well your product retains users after their initial interaction.

- **Long-Term User Engagement Tracking**: Monitor user retention over various periods like days, weeks, or months. This helps in understanding the duration for which users stay engaged with your product after their initial interaction or a specific trigger event. This helps provide insights into the long-term appeal of your product or specific features.
- **Stickiness of Specific Features:** Understand which of your product features users derive value from and correlate with them coming back to use your service.
- **Sub-population Analysis:** Uncover the engagement of different sub-populations of your users by filtering your retention analysis to groups of interest.

## Creating a Retention Chart

Retention charts are primarily defined by a start event, a return event, and a return window. This allows you to answer the question, “For users who did some starting event, what percentage of those users performed the return event within the given conversion window, over successive days or weeks?” Below we describe how you can create your own retention chart.

### Step 1: Define a Start Event

The start event (or trigger event) is what indicates that a user has started using the product or service. Depending on the question you are trying to answer, this is often some “top-of-funnel” event such as sign-up, any active event, or an event that represents using the feature you are interested in understanding the retention of.

If you’re interested in understanding the retention of a specific group of users, you can optionally add a filter to scope your analysis.

### Step 2: Define a Return Event

The return event is the event that indicates the user is getting the value you expect from your service. Depending on the question you are trying to answer, this can be simply coming back to your product (another active event), or use of a specific feature.

Once again, you can add a filter to the selected event based on user or event properties.

### Step 3: Choose an ID Type

Statsig allows you to perform individual or group analytics. This enables you to analyze the retention of users, or the retention of whole groups such as organizations or companies.

### Step 4: Choose a Return Time Window

This step allows you to choose whether you want to understand daily or weekly retention. For example, when you don’t expect an user to engage in a behavior on a daily basis to be considered an “active” user of that feature, it may be more helpful to use a weekly return window. This allows you to answer the question, “for users who perform the Start event, how many perform the return event within 1 _week._”

Choosing daily retention defines each of your retention cohorts as users who performed the start event on a given calendar day. The chart will then show you over your selected time range (e.g. 30 days) what percent of users in the cohort came back on that day, for each day in your time range.

Choosing weekly retention defines each of your retention cohorts as user who performed the start event within a calendar week. Each cohort compared will span successive weeks. The chart will then show you over your selected time range (e.g. 30 days) what percent of users in the cohort returned during that week, for each week in your team range.

### Step 5 (Optional): Choose a Chart Granularity for Weekly Retention Charts

When you select weekly retention we optionally allow you to change to the granularity of the chart. You can do this by selecting “Daily” from the granularity dropdown in the top left of the chart.

Note, this is distinct from the Return Time Window. When you create a weekly retention chart and select “Daily Granularity”, the chart now shows on a given day, what percent of the cohort performed the return event within the last week. E.g. day 12 weekly granularity will indicate what percent of the cohort performed the return event between the 7 days spanning day 6 and day 12, inclusive.

## Understanding a Retention Chart

[Retention charts](https://www.youtube.com/watch?v=mqlHpYimik8) in Statsig are divided into two main sections, the **retention graph (j-curve)** and the **retention table (triangle chart)**.

### Retention Table (Triangle Chart)

A Retention Table, or Triangle Chart, visually represents how well you are retaining users after their first interaction with your product or service. It tracks cohorts of users based on their first engagement date (as defined by your start event) and shows the percentage of these users returning (as defined by your return event) over subsequent days or weeks.

The leftmost column of the chart identifies these cohorts. Across the top, you'll see time intervals (days, weeks) after the initial engagement. The chart's body is filled with percentages, each representing the proportion of users from a cohort who were active at a specific time interval.

When reading the chart, a vertical analysis (looking down a column) allows you to compare the retention rates of different cohorts at the same stage of their lifecycle. In contrast, a horizontal analysis (reading across a row) shows how a single cohort's retention evolves over time. High numbers in the first few columns suggest strong initial user engagement, while consistent percentages over longer intervals indicate successful long-term retention strategies.

The columns in the chart start at day/week 0, which is earliest day/week in the time range. The right-most column will have retention for the most recent day/week.

When viewing retention chart analyzing daily retention for a given cohort, each subsequent column indicates the percentage of the cohort that performed the return event on that calendar day.

When viewing retention chart analyzing weekly retention with weekly granularity for a given cohort, each subsequent column indicates the percentage of the cohort that performed the return event within that week.

When viewing retention chart analyzing weekly retention with daily granularity for a given cohort, each subsequent column indicates the percentage of the cohort that performed the return event on that calendar day or within the 6 days prior.

### Retention Graph

A Retention Graph typically plots the percentage of retained users against time, offering a visual representation of user retention. The X-axis represents time, segmented into daily or weekly intervals since the users' first interaction with the product. The Y-axis indicates the percentage of the original users who remain active (performed the return event).

**Reading the Graph**

The Retention Graph provides insights into user behavior by illustrating the rate at which users disengage over time.

- A **declining curve** followed by a flattening of the curve is common, suggesting a drop in user interest after the first interaction and then stabilization among a core user group. The higher percentage at which the curve flattens out, the better the retention and health of the product.
- A **smiling curve** shows a decline in retention initially, followed by an upward trend at later stages. This pattern often results from successful re-engagement strategies or product improvements that bring back users who had previously disengaged
- A **continuously declining curve** indicates a consistent loss of users over time. This trend suggests that the product or service is not retaining its user base effectively, often pointing to issues in user satisfaction or engagement.

Key aspects to observe:

1. **Initial Drop-off Rate:** The steepness of the initial decline indicates how many users stop using the service after their first experience.
2. **Long-term Engagement:** The slope in the later stages of the graph shows the long-term user engagement. A flatter slope at this stage means better user retention.
3. **Trends Over Time:** Comparing multiple graphs over different time periods can reveal the impact of product changes or external factors on retention.

## Scoping to Specific Cohorts

You can view plots for specific or many cohorts. By default only the “All cohorts” retention curve is plotted. To scope to a single specific cohort, click anywhere on the row in the table associated with that cohorts. To scope to many specified cohorts, leverage the check boxes on the left most portion of the table to select the cohorts that you would like to compare retention curves of.
