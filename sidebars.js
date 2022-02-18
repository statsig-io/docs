module.exports = {
  docs: [
    "getting-started",
    {
      "Walkthrough Guides": [
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
      "Feature Gates": [
        "feature-gates/introduction",
        {
          "Working With": [
            "feature-gates/working-with",
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
      ],
    },
    {
      "Dynamic Config": [
        "dynamic-config/introduction",
        {
          "Working With": [
            "dynamic-config/working-with",
            "dynamic-config/create-new",
            "dynamic-config/add-rule",
            "dynamic-config/implement",
          ],
        },
      ],
    },
    {
      Segments: [
        "segments/introduction",
        {
          "Working With": [
            "segments/working-with",
            "segments/create-new",
            "segments/add-rule",
            "segments/add-id-list",
            "segments/use-segment",
          ],
        },
      ],
    },
    {
      "Experiments+": [
        "experiments-plus/introduction",
        {
          "Working With": [
            "experiments-plus/working-with",
            "experiments-plus/create-new",
            "experiments-plus/power-analysis",
            "experiments-plus/implement",
            "experiments-plus/monitor",
            "experiments-plus/read-results",
          ],
        },
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
      Pulse: ["pulse/introduction"],
    },
    {
      Autotune: [
        "autotune/introduction",
        "autotune/setup",
        "autotune/monitoring",
      ],
    },
    {
      Users: ["users/introduction"],
    },
    {
      Holdouts: ["holdouts/introduction"],
    },
    {
      Ultrasound: ["ultrasound/introduction"],
    },
    {
      Metrics: [
        "metrics/introduction",
        "metrics/create",
        "metrics/user",
        "metrics/console",
        "metrics/create-metric-tags",
        "metrics/create-user-flows",
        "metrics/create-user-funnels",
      ],
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
        { Concepts: ["server/concepts/user"] },
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
