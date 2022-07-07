import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Models from "../../../docs/console-api/models/index";

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
  let { id, entity } = props;

  useEffect(() => {
    setTimeout(() => {
      var data = require(`../../../docs/console-api/openapi/${entity}.js`);
      data = updateCodeSnippets(data, entity);

      loadReferences(data);

      const el = document.getElementById(id);
      el.loadSpec(data);
    }, 300);
  }, []);

  if (ExecutionEnvironment.canUseDOM) {
    /// Make sure we only import the rapidoc web component in case we are on the client side
    return (
      <rapi-doc
        id={id}
        style={{ height: "120vh" }}
        allow-search={false}
        update-route={false}
        render-style="view" // Controls how to api gets rendered
        layout="column"
        allow-try={true} // Enable ability for users to run commands
        show-header={false} // Disable user changing api spec file
        allow-authentication={true} // Enable user passing STATSIG-API-KEY at top of file
        use-path-in-nav-bar={false} // Disable using paths in side bar
        show-method-in-nav-bar="as-colored-block" // Enables small tags in nav bar
      />
    );
  }
  return <div />;
}
