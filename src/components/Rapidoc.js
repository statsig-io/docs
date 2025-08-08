import { useEffect, useState } from "react";
import { useColorMode } from '@docusaurus/theme-common/internal';

import Alert from "@mui/material/Alert";


// Map entities to their corresponding OpenAPI tags
const entityToTagMap = {
  gates: "Gates",
  events: "Events",
  segments: "Segments",
  "dynamic-configs": "Dynamic Configs",
  experiments: ["Experiments", "Experiments (Warehouse Native)"],
  holdouts: "Holdouts",
  layers: "Layers",
  autotunes: "Autotunes",
  users: "Users",
  metrics: ["Metrics", "Metrics (Warehouse Native)"],
  "audit-logs": "Audit Logs",
  "exposure-count": "Configs",
  reports: "Reports",
  "usage-billing": "Usage",
  "target-apps": "Target App",
  ingestions: "Ingestions",
  tags: "Tags",
  keys: "Keys",
  "param-store": "Param Store",
};

export const apiVersions = [
  '20240601',
];

export function getSpecUrlForApiVersion(version) {
  return `https://api.statsig.com/openapi/${version}.json`;
}

const SELECTED_API_VERSION_STORAGE_KEY = 'statsig_api_version';

export default function Rapidoc(props) {
  const { id, entity } = props;
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const [apiVersion, setApiVersion] = useState(null);
  const specUrl = apiVersion ? getSpecUrlForApiVersion(apiVersion) : null;

  const setApiVersionToStorage = (version) => {
    localStorage.setItem(SELECTED_API_VERSION_STORAGE_KEY, version);
    setApiVersion(version);
  }

  useEffect(() => {
    if (!apiVersion) {
      // Can't have this in the useState init because it prevents this from being server renderable.
      setApiVersion(localStorage.getItem(SELECTED_API_VERSION_STORAGE_KEY) ?? apiVersions[0]);
    }
  }, [apiVersion]);

  useEffect(() => {
    const rapidoc = document.getElementById(id);
    if (rapidoc) {
      rapidoc.setAttribute('theme', isDarkTheme ? 'dark' : 'light');
      rapidoc.setAttribute('primary-color', isDarkTheme ? '#2196f3' : '#194b7d');
      rapidoc.setAttribute('bg-color', isDarkTheme ? '#1b1b1d' : '#ffffff');
    }
  }, [id, isDarkTheme]);

  useEffect(() => {
    if (!specUrl) {
      return;
    }

    const rapidoc = document.getElementById(id);

    if (entity === "all-endpoints-generated") {
      fetch(specUrl)
        .then((response) => response.json())
        .then(removeNonFeatureTags)
        .then((data) => {
          rapidoc.loadSpec(data);
          try {
            window.Statsig.instance().logEvent('openapi_spec_fetch_success', specUrl, {
              entity: 'all-endpoints-generated',
              specUrl: specUrl
            });
          } catch (error) {
            // noop
          }
        })
        .catch((error) => {
          console.log('Rapidoc: Fetch failed for all-endpoints-generated:', error.message);
          try {
            window.Statsig.instance().logEvent('openapi_spec_fetch_failure', specUrl, {
              entity: 'all-endpoints-generated',
              specUrl: specUrl,
              error: error.message
            });
            console.log('Rapidoc: Failure event logged successfully');
          } catch (logError) {
            console.error('Rapidoc: Failed to log failure event:', logError);
          }
        });
      return;
    }

    // Get the corresponding OpenAPI tag for the entity
    const tag = entityToTagMap[entity];

    // Fetch and filter the spec by tag
    fetch(specUrl)
      .then((response) => response.json())
      .then(removeNonFeatureTags)
      .then((data) => {
        if (tag) {
          // Filter paths by tag
          const filteredData = filterPathsByTag(
            data,
            Array.isArray(tag) ? tag : [tag]
          );
          rapidoc.loadSpec(filteredData);
        } else {
          // If tag is not found, load the full spec
          rapidoc.loadSpec(data);
        }
        try {
          window.Statsig.instance().logEvent('openapi_spec_fetch_success', specUrl, {
            entity: entity,
            specUrl: specUrl,
            tag: tag
          });
        } catch (error) {
          // noop
        }
      })
      .catch((error) => {
        console.log('Rapidoc: Fetch failed for entity:', entity, 'error:', error.message);
        try {
          window.Statsig.instance().logEvent('openapi_spec_fetch_failure', specUrl, {
            entity: entity,
            specUrl: specUrl,
            tag: tag,
            error: error.message
          });
          console.log('Rapidoc: Failure event logged successfully for entity:', entity);
        } catch (logError) {
          console.error('Rapidoc: Failed to log failure event for entity:', entity, logError);
        }
      });
  }, [specUrl, entity]);

  return (
    <rapi-doc
      id={id}
      theme={isDarkTheme ? "dark" : "light"}
      primary-color={isDarkTheme ? "#2196f3" : "#194b7d"}
      bg-color={isDarkTheme ? "#1b1b1d" : "#ffffff"}
      style={{ height: "100%" }}
      allow-search={false}
      render-style="view"
      layout="column"
      sort-tags={true}
      sort-schemas={true}
      allow-try={true}
      allow-server-selection={false}
      show-info={false}
      server-url="https://statsigapi.net/console/v1"
      show-header={false}
      allow-authentication={true}
      api-key-name="STATSIG-API-VERSION"
      api-key-location="header"
      api-key-value={apiVersion}
      regular-font={[
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Ubuntu",
        "sans-serif",
      ]}
    >
      <div>
        <div>
          {getDescription(entity)}
        </div>

        <p>
          API Version:{' '}
          <select value={apiVersion} onChange={(e) => setApiVersionToStorage(e.target.value)}>
            {apiVersions.map((version, idx) => (
              <option value={version}>{version}{idx === 0 ? ' (latest)' : ''}</option>
            ))}
          </select>
          {' '}
          <a href={specUrl} download={specUrl} class="download-button"><button>Download OpenAPI Specification</button></a>
        </p>

        <h2>Authorization</h2>
        <p>
          All requests must include the <code>STATSIG-API-KEY</code> field in the
          header.<br />
          The value should be a Console API Key which can be created in{" "}
          <code>'Project Settings' {">"} 'API Keys' tab</code>. <br />
          You can{" "}
          <a href="https://console.statsig.com/api_keys" target="_blank" rel="noopener noreferrer">
            create or manage your keys here
          </a>.
          To use the 'try it' section on this page, enter your Console API into
          the box below.
        </p>
        <h2>API Version</h2>
        <p>
          The Console API is versioned. Each version is guaranteed to not break
          existing usage; each new version introduces breaking changes. There is
          currently only one version: <code>20240601</code>.
          <br />
          Pass the version in the <code>STATSIG-API-VERSION</code> field in the
          header. For now, this is optional; in the future, this will be
          required.
        </p>
        <hr />
      </div>
      <Alert severity="warning" slot="auth">
        You will be directly modifying the project connected to the api-key
        provided. We suggest creating a temporary project when testing our API
        below.
      </Alert>
    </rapi-doc>
  );
}

const NON_FEATURE_TAGS = ['MCP'];

function removeNonFeatureTags(spec) {
  const paths = {};
  Object.keys(spec.paths).forEach((pathKey) => {
    const pathItem = spec.paths[pathKey];
    const methods = Object.keys(pathItem);

    methods.forEach((method) => {
      if (!paths[pathKey]) {
        paths[pathKey] = {};
      }
      paths[pathKey][method] = {
        ...pathItem[method],
        tags: pathItem[method].tags.filter((tag) => !NON_FEATURE_TAGS.includes(tag)),
      };
    });
  });

  return {
    ...spec,
    paths,
  };
}

function filterPathsByTag(spec, tags) {
  const filteredPaths = {};
  Object.keys(spec.paths).forEach((pathKey) => {
    const pathItem = spec.paths[pathKey];
    const methods = Object.keys(pathItem);

    methods.forEach((method) => {
      if (tags.some((tag) => pathItem[method]?.tags?.includes(tag))) {
        if (!filteredPaths[pathKey]) {
          filteredPaths[pathKey] = {};
        }
        filteredPaths[pathKey][method] = pathItem[method];
      }
    });
  });

  return {
    ...spec,
    paths: filteredPaths,
  };
}

function getDescription(entity) {
  switch (entity) {
    case "events":
      return (
        <>
          <p>
            A <a href="../guides/logging-events">event</a> refers to a notable
            occurrence in your product, such as a user signing up, unlocking an
            achievement, adding an item to a cart, or checking out. You can log
            these events using Statsig's SDKs with the logEvent API. This allows
            you to track user behaviors and responses to different variants of
            your experiments. The logged events can be visualized in the Metrics
            console and used for further analysis.
          </p>
          <h2>Event API functions</h2>
          <ul>
            <li>Lineage: get metrics related to a given event</li>
          </ul>
        </>
      );
    case "gates":
      return (
        <>
          <p>
            A <a href="../feature-flags/overview">Feature Gate</a> is a
            mechanism for teams to configure what system behavior is visible to
            users without changing application code. This page describes how
            gates can be created and modified through the Console API.
          </p>
          <p>
            For more detail on creating user targeting based on Statsig-derived
            environment attributes such as location, client device, browser
            type, and client app version, see the {" "}
            <a href="./rules#rule">Console APIRules</a> page where all conditions are
            listed.
          </p>
        </>
      );
    case "segments":
      return (
        <>
          <p>
            A <a href="../segments">Segment</a> defines a reusable set of users.
            You can define a segment based on properties such as location,
            client device, browser, client application version, or simply using
            a list of IDs.
          </p>
          <p>
            For more detail on creating user targeting based on Statsig-derived
            environment attributes such as location, client device, browser
            type, and client app version, see the Console API{" "}
            <a href="./rules#rule">Rules</a> page where all conditions are
            listed.
          </p>
        </>
      );

    case "dynamic-configs":
      return (
        <>
          <p>
            A <a href="../dynamic-config">Dynamic Config</a> is a tool that
            replaces hard-coded values in your application with configuration
            parameters defined on the server.
          </p>
        </>
      );
    case "experiments":
      return (
        <>
          <p>
            An <a href="../experiments-plus">Experiment</a> is a platform that
            enables you to run randomized controlled experiments to evaluate
            your software products and features.
          </p>
        </>
      );
    case "holdouts":
      return (
        <>
          <p>
            A <a href="../holdouts">Holdout</a> is a group of users that are
            held back from a set of features to measure the aggregate impact of
            this feature set.
          </p>
        </>
      );
    case "layers":
      return (
        <>
          <p>
            A <a href="../layers">Layer</a> allow us to create{" "}
            <a href="../experiments-plus">experiments</a> that are mutually
            exclusive to each other.
          </p>
        </>
      );
    case "autotunes":
      return (
        <>
          <p>
            An <a href="../autotune">Autotune</a> automatically finds the best
            variant among a group of candidates, while dynamically allocating
            traffic to optimize for a single target metric.
          </p>
        </>
      );
    case "users":
      return (
        <>
          <p>
            A User refers to a member of the Statsig project connected to the
            API key provided.
          </p>
        </>
      );
    case "metrics":
      return (
        <>
          <p>
            Statsig combines data from any of your existing data sources to give
            you a complete view of your product <a href="../metrics">Metrics</a>{" "}
            as well as the impact new features and experiments have on these
            metrics.{" "}
          </p>
        </>
      );
    case "audit-logs":
      return (
        <>
          <p>
            Audit Logs {"('Project settings'->'Audit Logs')"} keeps a history of
            all changes made to the entities withing the Project.
          </p>
        </>
      );
    case "reports":
      return (
        <>
          <p>
            With data reports we strive for a 10am (PST) deadline but there's
            always a possibility we land late. For such cases, fallbacks should
            be implemented with this API.
          </p>
        </>
      );

    case "target-apps":
      return (
        <>
          <p>
            Target Apps are used to group users across multiple applications.
            This is useful when you want to run an experiment or feature flag
            across multiple applications.
          </p>
        </>
      );

    case "ingestions":
      return (
        <>
          <p>
            {" "}
            Read more about ingesting data from your data warehouse{" "}
            <a href="https://docs.statsig.com/console-api/ingestions">here</a>
          </p>
        </>
      );

    case "keys":
    case "tags":
    default:
      return <></>;
  }
}
