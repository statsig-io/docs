import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Models from "../../../docs/console-api/models/index";
import { useColorMode } from '@docusaurus/theme-common';

function updateCodeSnippets(data, entity) {
  let snippet = require(`../../../docs/console-api/openapi/snippets/x-code-samples/${entity}.js`);
  for (let path in snippet) {
    for (let command in snippet[path]) {
      data["paths"][path][command]["x-code-samples"] = snippet[path][command];
    }
  }
  return data;
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
          console.log("loaded", name, spec[key]);
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

  const { colorMode } = useColorMode();
  const isDarkTheme  = true ;//colorMode === 'dark';

  useEffect(() => {
    setTimeout(() => {
      var data = require(`../../../docs/console-api/openapi/${entity}.js`);
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
        style={{ height: "120vh" }}
        allow-search={false}
        render-style="view" // Controls how to api gets rendered
        layout="column"
        allow-try={true} // Enable ability for users to run commands
        show-header={false} // Disable user changing api spec file
        allow-authentication={true} // Enable user passing STATSIG-API-KEY at top of file
        regular-font={["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", "sans-serif"]}
      />
    );
  }
  return <div />;
}
