module.exports = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "Walkthrough Guides",
      link: {
        type: "generated-index",
        title: "Walkthrough Guides"
      },
      items: [
        "guides/first-feature",
        "guides/logging-events",
        "guides/first-dynamic-config",
        "guides/abn-tests",
        "guides/first-device-level-experiment",
        "guides/experiment-on-custom-id-types",
        "guides/first-holdout",
        "guides/using-environments",
        "guides/setting-up-reviews",
        "guides/first-segment",
        "guides/private-attributes",
        "guides/synchronized-launch",
        "guides/first-shopify-abtest",
      ],
    },
    {
      type: "category",
      label: "Feature Gates",
      link: {
        type: "doc",
        id: "feature-gates/working-with",
      },
      items: [
        "feature-gates/create-new",
        "feature-gates/add-rule",
        "feature-gates/test-gate",
        "feature-gates/overrides",
        {
          Implement: [
            "feature-gates/implement",
            "feature-gates/implement/client",
            "feature-gates/implement/server",
            "feature-gates/implement/http-api",
          ],
        },
        "feature-gates/conditions",
        "feature-gates/view-exposures",
        "feature-gates/best-practices",
      ],
    },
    {
      type: "category",
      label: "Dynamic Config",
      link: {
        type: "doc",
        id: "dynamic-config/introduction",
      },
      items: [
        "dynamic-config/working-with",
        "dynamic-config/create-new",
        "dynamic-config/add-rule",
        "dynamic-config/implement",
      ]
    },
    {
      type: "category",
      label: "Segments",
      link: {
        type: "doc",
        id: "segments/introduction",
      },
      items: [
        "segments/create-new",
        "segments/add-rule",
        "segments/add-id-list",
        "segments/use-segment",
      ],
    },
    {
      type: "category",
      label: "Experiments",
      link: {
        type: "doc",
        id: "experiments-plus/introduction",
      },
      items: [
        "experiments-plus/working-with",
        "experiments-plus/create-new",
        "experiments-plus/power-analysis",
        "experiments-plus/implement",
        "experiments-plus/monitor",
        "experiments-plus/read-results",
        {
          Experimentation: [
            "experiments-plus/experimentation/why-experiment",
            "experiments-plus/experimentation/scenarios",
            "experiments-plus/experimentation/best-practices",
            "experiments-plus/experimentation/common-terms",
            "experiments-plus/experimentation/choosing-randomization-unit",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Autotune",
      link: {
        type: "doc",
        id: "autotune/introduction",
      },
      items: [
        "autotune/setup",
        "autotune/monitoring",
      ],
    },
    {
      type: "category",
      label: "Metrics",
      link: {
        type: "doc",
        id: "metrics/introduction",
      },
      items: [
        "metrics/create",
        "metrics/user",
        "metrics/console",
        "metrics/create-metric-tags",
        "metrics/create-user-flows",
        "metrics/create-user-funnels",
      ],
    },
    {
      type: "doc",
      label: "Pulse",
      id: "pulse/introduction",
    },
    {
      type: "doc",
      label: "Users",
      id: "users/introduction",
    },
    {
      type: "doc",
      label: "Holdouts",
      id: "holdouts/introduction",
    },
    {
      type: "doc",
      label: "Ultrasound",
      id: "ultrasound/introduction",
    },
    {
      "Client SDKs": [
        { Concepts: ["client/concepts/user"] },
        "client/jsClientSDK",
        "client/reactSDK",
        "client/reactNativeSDK",
        "client/reactNativeExpoSDK",
        "client/iosClientSDK",
        "client/androidClientSDK",
        "client/dotnetSDK",
        "client/rokuSDK",
        "client/unitySDK",
      ],
    },
    {
      "Server SDKs": [
        { Concepts: ["server/concepts/user", "messages/serverRequiredUserID"] },
        "server/nodejsServerSDK",
        "server/javaSdk",
        "server/dotnetSDK",
        "server/rubySDK",
        "server/golangSDK",
        "server/pythonSDK",
        "server/phpSDK",
      ],
    },
    "http-api",
    {
      "Console API": [
        "console-api/autotunes",
        "console-api/gates",
        "console-api/segments",
      ],
    },
    {
      "Access Management": [
        "access-management/projects",
        "access-management/organizations",
        {
          "Single Sign-On": [
            "access-management/sso/overview",
            "access-management/sso/okta_sso",
            "access-management/sso/azuread",
            
          ],
        },
      ],
    },
    {
      Integrations: [
        {
          "Data Connectors": [
            "integrations/data-connectors",
            "integrations/data-connectors/census",
            "integrations/data-connectors/fivetran",
            "integrations/data-connectors/heap",
            "integrations/data-connectors/mparticle",
            "integrations/data-connectors/revenuecat",
            "integrations/data-connectors/segment",
          ],
        },
        "integrations/event_webhook",
        "integrations/jira",
        "integrations/snowflake",
        "integrations/vscode",
      ],
    },
  ],
};
