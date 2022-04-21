---
title: Snowflake
---

## Overview

There are 2 ways to integrate with Snowflake: using a data connector, or through direct ingestion from Snowflake.

## Using a Data Connector

To **ingest** events from Snowflake, you can use our [Census integration](/integrations/data-connectors/census).

To **export** events to Snowflake, you can use our [Fivetran integration](/integrations/data-connectors/fivetran).

## Direct ingestion from Snowflake

We also support direct data ingestion from Snowflake, through which Statsig will automatically pull data from Snowflake into your events. 
You will need to do the following steps.

### 1. Set up your Snowflake data warehouse and user for Statsig integration {#setup}
Insert `USER` and `PASSWORD` values to the below and run it in a Snowflake worksheet
on an account which has sysadmin and securityadmin roles. 

This will create the table schemas and setup that Statsig's ingestion will use. 
Statsig will use the user you create to access tables in the new Statsig schema. Make sure to use a unique and secure username and password and replace the placeholder values in the first 2 statements. 

```sql
BEGIN;

  -- set up variable values to be used in statements later
  -- make sure to configure user_name and user_password with your own values
  SET user_name = '<USER>'; -- REPLACE WITH YOUR OWN VALUE
  SET user_password = '<PASSWORD>'; -- REPLACE WITH YOUR OWN VALUE
  SET role_name = 'STATSIG_ROLE';
  
  -- change role to sysadmin for warehouse / database steps
  USE ROLE sysadmin;

  -- create a warehouse, database, schema and tables for Statsig
  CREATE OR REPLACE WAREHOUSE statsig WITH warehouse_size='XSMALL';
  CREATE DATABASE IF NOT EXISTS statsig;
  CREATE SCHEMA IF NOT EXISTS statsig.statsig; 

  -- a table for ingestion of raw events
  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_events(
      time BIGINT NOT NULL, -- unix time
      timeuuid STRING NOT NULL DEFAULT UUID_STRING(), --generated unique timeuuid
      user STRING NOT NULL, --json user object
      event_name STRING NOT NULL, 
      event_value STRING,
      event_metadata STRING NOT NULL, --json metadata object
      event_version BIGINT,
      record_number NUMBER AUTOINCREMENT START 1 INCREMENT 1
  );

  -- a table for ingestion of metrics/user outcomes
  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_user_metrics(
      user_id STRING NOT NULL, 
      id_type STRING NOT NULL, -- stable_id, user_id, etc.
      date DATE NOT NULL, -- unix time
      timeuuid STRING NOT NULL DEFAULT UUID_STRING(),
      metric_name STRING NOT NULL, 
      metric_value NUMBER,
      numerator NUMBER, 
      denominator NUMBER,
      record_number NUMBER AUTOINCREMENT START 1 INCREMENT 1
  );

  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_events_signal(
      finished_date DATE
  );

  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_user_metrics_signal(
      finished_date DATE
  );

  -- change current role to securityadmin to create role and user for Statsig's access
  USE ROLE securityadmin;

  -- create role for Statsig
  CREATE ROLE IF NOT EXISTS identifier($role_name);
  GRANT ROLE identifier($role_name) TO ROLE SYSADMIN;

  -- create a user for Statsig
  CREATE USER IF NOT EXISTS identifier($user_name)
  password = $user_password
  default_role = $role_name
  default_warehouse = statsig;
  GRANT ROLE identifier($role_name) TO USER identifier($user_name);

  -- grant Statsig role access
  GRANT USAGE ON WAREHOUSE statsig TO ROLE identifier($role_name);
  GRANT USAGE ON DATABASE statsig TO ROLE identifier($role_name);
  GRANT USAGE ON SCHEMA statsig.statsig TO ROLE identifier($role_name);
  GRANT SELECT ON statsig.statsig.statsig_events TO ROLE identifier($role_name);
  GRANT SELECT ON statsig.statsig.statsig_user_metrics TO ROLE identifier($role_name);
  GRANT SELECT ON statsig.statsig.statsig_events_signal TO ROLE identifier($role_name);
  GRANT SELECT ON statsig.statsig.statsig_user_metrics_signal TO ROLE identifier($role_name);

COMMIT;
```

Make sure all the statements ran successfully. This will create the schema and user that Statsig's ingestion expects.

### 2. Provide the credentials to Statsig {#provide-credentials}
- Go to [console.statsig.com](https://console.statsig.com/) and log in
- Go to the settings page and navigate to the integrations tab. 
- Find Snowflake in the integrations list and provide the requested credentials for the user you just created in step 1.
- You can use the "Test Connection" button to make sure we can establish a connection to the table using the credentials provided.

![image](https://user-images.githubusercontent.com/77478330/162287996-5f2e02f8-c461-4d69-8a36-fa1d79d913a3.png)


### 3. Load data into the new Statsig tables {#load-data}

In step 1 we created 2 data tables and 2 signal tables. To load data into statsig, you
will load data into the data tables, and mark a day as completed in the corresponding signal
table once all of the data for that day is loaded. 

The `statsig_events` table is for sending Statsig raw events which were not logged to Statsig through the API. Once loaded, 
these events will be processed as though they were logged directly.

The `statsig_user_metrics` table is for sending pre-computed metrics from your data warehouse. These metrics will be surfaced in 
the statsig console and in your test results.

You may only need one of these use cases - that's fine! Just follow the steps for the relevant table and ignore the other one.

Your data should conform to these definitions and rules to avoid errors or delays:

#### Events (statsig_events)

| Column         | Description                         | Rules                                                          |
|----------------|-------------------------------------|----------------------------------------------------------------|
| time           | The unix time your event was logged at   | Not null                                                       |
| timeuuid       | A unique timeuuid for the event     | This should be a timeuuid, but using a unique id will suffice. If not provided, the table defaults to generating a UUID. |
| user           | A user json object.                 | See below                                                      |
| event_name     | The name of the event               | Not null. Length < 128 characters                              |
| event_value    | The value of the event              | Length < 128 characters                                        |
| event_metadata | Metadata about the event            | Not null. Length < 16384 characters. Json-formatted - leave empty if none                            |
| event_version  | The version of this event           |                                                                |

The user object is a stringified JSON representation. An example might look like:
```json
{
    "os":"Mac OS X",
    "os_version":"10.15.7",
    "browser_name":"Electron",
    "browser_version":"11.5.0",
    "ip":"1.1.1.1",
    "country":"KR",
    "locale":"en-US",
    "userID":"aaaaa-aaaaa-aaaaa-aaaaa",
    "custom":{
        "locale":"en-US",
        "clientVersion":"23.10.23.10",
        "desktopVersion":"11.5.0",
    },
    "customIDs":{
        "deviceId":"aaaaa-aaaaa-aaaaa-aaaaa",
        "stableID":"aaaaa-aaaaa-aaaaa-aaaaa"
    },
}
```
Key components of the user object are the `userID`, `custom` fields, and the `customIDs` object (notably `stableID`) if you are using any custom identifiers.

Make sure these fields are provided where they exist, and that the names of the fields capitalized correctly. Not providing a
unit identifier will limit the utility of your events, as we won't be able to use them to build metrics like daily event users.

#### Metrics (statsig_user_metrics)

| Column       | Description                                          | Rules                                                                                                                |
|--------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| user_id      | The unique user identifier this metric is for. This might not necessarily be a user_id - it could be a custom_id of some kind        |                                                                                                                      |
| id_type      | The id_type the user_id represents.                  | Must be a valid id_type. The default Statsig types are user_id/stable_id, but you may have generated custom id_types |
| date         | Date of the daily metric  |                                                                                                    |
| timeuuid     | A unique timeuuid for the event                      | This should be a timeuuid, but using a unique id will suffice. If not provided, the table defaults to generating a UUID.           |
| metric_name  | The name of the metric                               | Not null. Length < 128 characters                                                                                    |
| metric_value | A numeric value for the metric                       | Metric value, or both of numerator/denominator need to be provided for Statsig to process the metric. See details below                 |
| numerator    | Numerator for metric calculation                     | See above, and details below                                                                                                        |
| denominator  | Denominator for metric calculation                   | See above, and details below                                                                                                            |

Metric ingestion is for user-day metric pairs. This is useful for measuring experimental results on complex business logic (e.g. LTV estimates) that you generate in your data warehouse.

##### Note on metric values
If you provide **both** a numerator and denominator value for any record of a metric, we'll assume that this metric is a ratio metric; we'll filter out users who do not have a denominator value from analysis, and recalculate the metric value ourselves via the numerator and denominator fields. 

If you only provide a metric_value, we'll use the metric_value for analysis. In this case, we'll impute 0 for users without a metric value in experiments.

For example, this dataset would lead to us using a ratio calculation:
| UserID | Metric_Value | Numerator | Denominator |
|--------|--------------|-----------|-------------|
| 1      | 1            | 1         | 3           |
| 2      | 1            | 2         | 3           |
| 3      | 1            |          |            |

We would calculate the population value as `(1+2)/(3+3) = 0.5`

This dataset would lead to us using a metric calculation:
| UserID | Metric_Value | Numerator | Denominator |
|--------|--------------|-----------|-------------|
| 1      | 1            | 1         |             |
| 2      | 1            |           |             |

The reported topline value would be `(1+1) = 2`. However, if we had an expermental arm that had users 1, 2, and 3 in it, user 3 would be implicitly set to 0 and the population **mean** would be `(1+1+0)/3 = 2/3`

#### Scheduling
Because you may be streaming events to your tables or have multiple ETLs pointing to your metrics table, Statsig relies on you
signalling that your metric/events for a given day are done. 

When a day is fully loaded, insert that date as a row in the appropriate signal_table - `statsig_user_metrics_signal` for metrics
or `statsig_events_signal` for events. For example, once all of your metrics data is loaded into `statsig_user_metrics` for `2022-04-01`, you would insert `2022-04-01` into `statsig_user_metrics_signal`. 

Statsig expects you to load data in order. For example, if you have loaded up to `2022-04-01` and signal that `2022-04-03` has landed,
we will wait for you to signal that `2022-04-02` has landed, and load that data before we ingest data from `2022-04-03`

*NOTE: this ingestion pipeline is in beta, and does not currently support automatic backfills or updates to data once it's been ingested. Only signal these tables
are loaded after you've run data quality checks!*
