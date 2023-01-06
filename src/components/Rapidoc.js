import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Models from "../../docs/console-api/models/index";
import { useColorMode } from '@docusaurus/theme-common';

const supportedEntities = ['gates', 'segments', 'dynamic-configs', 'experiments', 'holdouts', 'layers', 'autotunes', 'users', 'metrics', 'audit-logs']

function updateCodeSnippets(data, entity) {
  let snippet;
  try {
    snippet = require(`../../docs/console-api/openapi/snippets/x-code-samples/${entity}.js`);
  } catch(e){
    return data;
  }
  for (let path in snippet) {
    for (let command in snippet[path]) {
      data["paths"][path][command]["x-code-samples"] = snippet[path][command];
    }
  }
  return data;
}

function loadAllEndpoints(){
  
  let allEndpoints = require('../../docs/console-api/openapi/all-endpoints.js');

  for(const entity of supportedEntities){
    const entityData = require(`../../docs/console-api/openapi/${entity}.js`);

    // Add endpoints
    for (const idx in entityData['paths']) {
      allEndpoints["paths"][idx] = entityData['paths'][idx];
    }

    // Add components ie 'requestBodies', 'schemas', etc...
    for (const component in entityData['components']){
      if(component === 'securitySchemes') {
        continue;
      }

      if(allEndpoints['components'][component] === undefined){
        allEndpoints['components'][component] = {}
      }
      
      for(const scheme in entityData['components'][component]) {
        allEndpoints['components'][component][scheme] = entityData['components'][component][scheme]
      }
    }
  }
  return allEndpoints;
}

function loadReferences(spec) {
  for (const key in spec) {
    if (!Object.hasOwnProperty.call(spec, key)) {
      continue;
    }

    let value = spec[key];
    if (value?.["$ref"] && typeof value["$ref"] === "string") {
      const filename = value["$ref"].split("/").pop();
      if (filename.endsWith(".json")) {
        const name = filename.split(".").shift();
        const model = Models[name];
        if (model) {
          spec[key] = model;
        }
      }
    }

    value = spec[key];
    if (!!value && typeof value === "object") {
      loadReferences(value);
    }
  }
}

export default function Rapidoc(props) {
  const { id, entity } = props;

  const isDarkTheme = useColorMode().colorMode === 'dark';

  useEffect(() => {
    setTimeout(() => {
      
      var data;

      if(entity === 'all-endpoints'){
        data = loadAllEndpoints();
      } else {
        data = require(`../../docs/console-api/openapi/${entity}.js`);
      }
      
      data = updateCodeSnippets(data, entity);

      loadReferences(data);

      const rapidoc = document.getElementById(id);
      rapidoc.loadSpec(data);
    }, 30);
  }, []);

  if (ExecutionEnvironment.canUseDOM) {
    return (
      <rapi-doc
        id={id}
        theme={isDarkTheme ? 'dark' : 'light'}
        primary-color={isDarkTheme ? '#2196f3' : '#194b7d'}
        bg-color={isDarkTheme ? '#1b1b1d' : "#ffffff"}
        style={{ height: "100%"}}
        allow-search={false}
        render-style="view" // Controls how to api gets rendered
        layout="column"
        allow-try={true} // Enable ability for users to run commands
        allow-server-selection={false}
        show-header={false} // Disable user changing api spec file
        allow-authentication={true} // Enable user passing STATSIG-API-KEY at top of file
        regular-font={["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", "sans-serif"]}
      >
        <p slot="overview">
          {getDescription(entity)}
          <h2>Authorization</h2>
          All requests must include the STATSIG-API-KEY field in the header. The value should be a Console API Key which can be created in 'Project Settings'-{">"}'API Keys' tab.  <br/>
          To use the 'try it' section on this page, enter your Console API into the box below.
          <hr/> 
        </p>
        <p slot="auth" style={{color:'#E05550'}}>
          Warning! You will be directly modifying the project connected to the api-key provided.
        </p>
        <p slot="auth">
          We suggest creating a temporary project when testing our API below.
        </p>
      </rapi-doc>
    );
  }
  return <div />;
}


function getDescription(entity){
  switch(entity){
    case 'gates':
      return <>
        <p>A feature <a href="../feature-gates/working-with">gate</a> is a mechanism for teams to configure what system behavior is visible to users without changing application code. This page describes how gates can be created and modified through the Console API.</p>
        <p>For more detail on creating user targeting based on Statsig-derived environment attributes such as location, client device, browser type, and client app version, see the Console API <a href="./rules#rule">Rules</a> page where all conditions are listed.</p>
        <h2>Gate API functions</h2>
        <ul>
          <li>Create a new gate</li>
          <li>Read data from existing gates</li>
          <li>Update properties of a gate</li>
          <li>Delete a gate</li>
          <li>Update gate overrides</li>
        </ul>  
      </>
    case 'segments':
      return <>
        <p>A <a href="../segments">Segment</a> defines a reusable set of users. You can define a segment based on properties such as location, client device, browser, client application version, or simply using a list of IDs.</p>
        <p>For more detail on creating user targeting based on Statsig-derived environment attributes such as location, client device, browser type, and client app version, see the Console API <a href="./rules#rule">Rules</a> page where all conditions are listed.</p>

        <h2>Segment API functions</h2>
        <ul>
          <li>Create a new segment</li>
          <li>Read data from existing segments</li>
          <li>Update properties of a segment</li>
          <li>Update IDs in a segment</li>
          <li>Delete a segment</li>
        </ul>
      </>

    case 'dynamic-configs':
      return <>
        <p>A <a href="../dynamic-config">Dynamic Config</a> is a tool that replaces hard-coded values in your application with configuration parameters defined on the server.</p>
        <h2>Dynamic Config API functions</h2>
        <ul>
          <li>Create a new dynamic config</li>
          <li>Read data from existing dynamic configs</li>
          <li>Update properties of a dynamic config</li>
          <li>Delete a dynamic config</li>
        </ul> 
      </>
    case 'experiments':
      return <>
        <p>An <a href="../experiments-plus">Experiment</a> is a platform that enables you to run randomized controlled experiments to evaluate your software products and features.</p>

        <h2>Experiment API functions</h2>
        <ul>
          <li>Create a new experiment</li>
          <li>Read data from existing experiments</li>
          <li>Update properties of an experiment</li>
          <li>Update the status of an experiment</li>
          <ul>
            <li>Start an experiment</li>
            <li>Make a decision for an experiment</li>
            <li>Restart an experiment</li>
          </ul>
          <li>Update experiment overrides</li>
          <li>Delete an experiment</li>
        </ul>
      </>
    case 'holdouts':
      return <>
        <p>A <a href="../holdouts">Holdout</a> is a group of users that are held back from a set of features to measure the aggregate impact of this feature set.</p>
        <h2>Holdout API functions</h2>
        <ul>
          <li>Create a new holdout</li>
          <li>Read data from existing holdout</li>
          <li>Update properties of a holdout</li>
          <li>Update holdout overrides</li>
          <li>Delete a holdout</li>
        </ul>
      </>
    case 'layers':
      return <>
        <p>A <a href="../layers">Layer</a> allow us to create <a href="../experiments-plus">experiments</a> that are mutually exclusive to each other.</p>
        <h2>Holdout API functions</h2>
        <ul>
          <li>Create a new Layer</li>
          <li>Read data from existing Layer</li>
          <li>List experiments in a Layer</li>
          <li>Update properties of a Layer</li>
          <li>Delete a Layer</li>
        </ul> 
      </>
    case 'autotunes':
      return <>
        <p>An <a href="../autotune">Autotune</a> automatically finds the best variant among a group of candidates, while dynamically allocating traffic to optimize for a single target metric.</p>
        <h2>Autotune API functions</h2>
        <ul>
          <li>Create a new autotune</li>
          <li>Read data from existing autotune</li>
          <li>Update properties of an autotune</li>
          <li>Update the status of an autotune</li>
          <ul>
            <li>Start an autotune</li>
            <li>Make a decision for an autotune</li>
            <li>Restart an autotune</li>
          </ul>
          <li>Delete an autotune</li>
        </ul>
      </>
    case 'users':
      return <>
        <p>A User refers to a member of the Statsig project connected to the API key provided.</p>
        <h2>User API functions</h2>
        <ul>
          <li>List users in the Statsig project</li>
          <li>Invite new Users to the Statsig project</li>
          <li>Update properties of a user</li>
        </ul>
      </>
    case 'metrics':
      return <>
        <p>Statsig combines data from any of your existing data sources to give you a complete view of your product <a href="../metrics">Metrics</a> as well as the impact new features and experiments have on these metrics. </p>
        <h2>Metric API functions</h2>
        <ul>
          <li>Get metric values</li>
          <li>List metrics in the Statsig project</li>
          <li>Update properties of a metric</li>
        </ul>
      </>
    case 'audit-logs':
      return <>
        <p>Audit Logs {"('Project settings'->'Audit Logs')"} keeps a history of all changes made to the entities withing the Project.</p>
        <h2>Audit Logs API functions</h2>
        <ul>
          <li>List Audit Logs in the Statsig project</li>
        </ul>
      </>
    case 'all-endpoints':
    return <>
      <p>This page lists out all Console API endpoints currently available.</p>
    </>
  }
}
