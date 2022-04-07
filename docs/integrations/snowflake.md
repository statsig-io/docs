---
title: Snowflake
---

## Overview

Statsig enables you to integrate with Snowflake using:
 - [Census](/integrations/data-connectors/census) to ingest event data from Snowflake
 - [Fivetran](/integrations/data-connectors/fivetran) to export event data to Snowflake  

We also support ingesting data directly from your Snowflake instance to Statsig. Once this 
is set up, Statsig will automatically pull events
and/or metrics from Snowflake after you generate or compute them.

To enable data ingestion, you will need to:
- Transform and load your data into Snowflake tables in a specific schema 
- Create a Statsig user with select permissions on that table
- Go to the integrations page in your project settings and follow the instructions to
give Statsig credentials for the Statsig user
- Mark dates in the appropriate staging tables when you are done loading data for a day. 
Read the instructions below for notes on this.

## Direct connection

### Setup 
Insert `USER` and `PASSWORD` values to the below and run it in a Snowflake worksheet
on an account which has sysadmin and securityadmin roles. 

This will create the table schemas and setup that Statsig's ingestion will use. 
Statsig will use the user you create to access tables in the new Statsig schema.

```
begin;

  -- set up variable values to be used in statements later
  -- make sure to configure user_name and user_password with your own values
  set user_name = '<USER>';
  set user_password = '<PASSWORD>';
  set role_name = 'STATSIG_ROLE';
  
  -- change role to sysadmin for warehouse / database steps
  USE ROLE sysadmin;

  -- create a warehouse, database, schema and tables for Statsig
  CREATE OR REPLACE WAREHOUSE statsig WITH warehouse_size='XSMALL';
  CREATE DATABASE IF NOT EXISTS statsig;
  CREATE SCHEMA IF NOT EXISTS statsig.statsig; 

  -- a table for ingestion of raw events
  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_events(
      time TIMESTAMP NOT NULL,
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
      time TIMESTAMP NOT NULL, -- this can be a date for daily metrics
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

commit;
```

### Sharing Credentials
- Go to [console.statsig.com](https://console.statsig.com/) and log in
- Go to the settings page and navigate to the integrations tab. 
- Find Snowflake in the integrations list and provide the requested credentials. 
  - This should the user you created above, which has
its access limited to reading the tables you just created.

### Scheduling
Because you may be streaming events to your tables or have multiple ETLs pointing to your metrics table, Statsig relies on you
signalling that your metric/events for a given day are done. 

When a day is fully loaded, insert that date (UTC-formatted) as a row in the appropriate signal_table - `statsig_user_metrics_signal` for metrics
or `statsig_events_signal` for events. 

Statsig expects you to load data in order. For example, if you have loaded up to `2022-04-01` and signal that 2022-04-03 has landed,
we will wait for you to signal that 2022-04-02 has landed, and load that data before we ingest data from `2022-04-03`

*NOTE: this ingestion pipeline is in beta, and does not currently support automatic backfills or updates to data. Land these tables
after you've run data quality checks!*

### Data Format and Loading
Your data should follow these definitions and rules to avoid errors or delays:

#### Events

| Column         | Description                         | Rules                                                          |
|----------------|-------------------------------------|----------------------------------------------------------------|
| time           | The UTC time your event was logged at   | Not null                                                       |
| timeuuid       | A unique timeuuid for the event     | This should be a timeuuid, but using a unique id will suffice. If not provided, the table defaults to generating a UUID. |
| user           | A user json object.                 | See below                                                      |
| event_name     | The name of the event               | Not null. Length < 128 characters                              |
| event_value    | The value of the event              | Length < 128 characters                                        |
| event_metadata | Metadata about the event            | Not null. Length < 16384 characters                            |
| event_version  | The version of this event           |                                                                |

The user object is a stringified JSON representation. An example might look like:
```
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

Key components of the user object are the `userID`, `custom` fields, and the `stableID` if it exists. 
Make sure these fields are provided where they exist, and that the names of the fields capitalized correctly. Not providing an
ID will limit the utility of your events, as we won't be able to use them to build metrics like daily event users.

#### Metrics

| Column       | Description                                          | Rules                                                                                                                |
|--------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| user_id      | The unique user identifier this metric is for        |                                                                                                                      |
| id_type      | The id_type the user_id represents.                  | Must be a valid id_type. The default Statsig types are user_id/stable_id, but you may have generated custom id_types |
| time         | The time for the metric - usually a date for metrics | UTC time                                                                                                             |
| timeuuid     | A unique timeuuid for the event                      | This should be a timeuuid, but using a unique id will suffice. If not provided, the table defaults to generating a UUID.           |
| metric_name  | The name of the metric                               | Not null. Length < 128 characters                                                                                    |
| metric_value | A numeric value for the metric                       | Metric value, or both of numerator/denominator need to be provided for Statsig to process the metric                 |
| numerator    | Numerator for metric calculation                     | See above                                                                                                            |
| denominator  | Denominator for metric calculation                   | See above                                                                                                            |

Metric ingestion is for user-day metric pairs. This is useful for measuring experimental results on complex business logic (e.g. LTV estimates) that you generate in your data warehouse.

