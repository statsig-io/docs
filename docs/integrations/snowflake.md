---
title: Snowflake
---

## Overview

Statsig enables you to integrate with Snowflake using:
 - [Census](/integrations/data-connectors/census) to ingest event data from Snowflake
 - [Fivetran](/integrations/data-connectors/fivetran) to export event data to Snowflake  

We also support direct data ingestion, through which Statsig will automatically pull data from Snowflake into your events. 
You will need to:
- transform and load your data into a snowflake table in a specific schema 
- create a Statsig user with select permissions on that table
- give Statsig credentials for the Statsig user
- load data from your data warehouse into that table

## Direct connection

### Setup 
Run the following setup in a Snowflake worksheet:

```
begin;

  -- set up variable values to be used in statements later
  -- make sure to configure user_name and user_password with your own values
  set user_name = '<USER>';
  set user_password = '<PASSWORD>';
  set role_name = 'STATSIG_ROLE';
  
  -- change role to sysadmin for warehouse / database steps
  USE ROLE sysadmin;

  -- create a warehouse, database, schema and table for Statsig
  CREATE OR REPLACE WAREHOUSE statsig WITH warehouse_size='XSMALL';
  CREATE DATABASE IF NOT EXISTS statsig;
  CREATE SCHEMA IF NOT EXISTS statsig.statsig; 
  CREATE TABLE IF NOT EXISTS statsig.statsig.statsig_events(
      time TIMESTAMP NOT NULL,
      timeuuid STRING NOT NULL, --generated unique timeuuid
      user STRING NOT NULL, --json user object
      event_name STRING NOT NULL, 
      event_value STRING,
      event_metadata STRING NOT NULL, --json metadata object
      event_version BIGINT,
      record_number NUMBER AUTOINCREMENT START 1 INCREMENT 1
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

commit;
```

This will create the schema and user that Statsig's ingestion expects. Provide the credentials to Statsig through the Statsig console.

### Data Format and Loading
Your data should follow these rules and definitions to avoid errors or delays:

| Column         | Description                         | Rules                                                          |
|----------------|-------------------------------------|----------------------------------------------------------------|
| time           | The time your event was logged at   | Not null                                                       |
| timeuuid       | A unique timeuuid for the event     | This should be a timeuuid, but using a unique id will suffice. |
| user           | A user json object.                 | See below                                                      |
| event_name     | The name of the event               | Not null. Length < 128 characters                              |
| event_value    | The value of the event              | Length < 128 characters                                        |
| event_metadata | Metadata about the event            | Not null. Length < 16384 characters                            |
| event_version  | The version of this event           |                                                                |

The user object is a JSON representation. An example might look like:
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
