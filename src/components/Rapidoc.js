import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Models from "../../docs/console-api/models/index";
import { useColorMode } from '@docusaurus/theme-common';
import { isConstructorDeclaration } from "typescript";

const supportedEntities = ["autotunes", "dynamic-configs","gates","holdouts","segments"]

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
    if (value["$ref"] && typeof value["$ref"] === "string") {
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
        show-header={false} // Disable user changing api spec file
        allow-authentication={true} // Enable user passing STATSIG-API-KEY at top of file
        regular-font={["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", "sans-serif"]}
      >
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
