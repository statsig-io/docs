module.exports = {
  cloud: [
    {
      type: "category",
      className: "sb-cloud",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "getting-started",
      },
      items: [
        {
          type: "category",
          label: "Walkthrough Guides",
          link: {
            type: "generated-index",
            title: "Walkthrough Guides",
          },
          items: [
            {
              "Beginner's Guides": [
                "guides/first-feature",
                "guides/logging-events",
                "guides/abn-tests",
              ],
            },
            {
              "Advanced Guides": [
                "guides/first-dynamic-config",
                "guides/first-holdout",
                "guides/first-segment",
                "guides/experiment-on-custom-id-types",
                "guides/using-environments",
                "guides/setting-up-reviews",
                "guides/private-attributes",
              ],
            },
            {
              "Common Use Cases": [
                "guides/aa-test",
                "guides/first-shopify-abtest",
                "guides/sendgrid-email-abtest",
                "guides/customer-io-email-abtest",
                "guides/email-campaign-test",
                "guides/cms-integrations",
                "guides/first-device-level-experiment",
              ],
            },
            {
              "Technology-Specific Guides":[
                "guides/python-flask-feature-flags",
                "guides/python-flask-abtests"
              ],
            },
            "guides/synchronized-launch",
            "guides/featuregates-or-experiments",
            "guides/experimentation-program",
            "guides/serverless",
            "guides/config-history",
            "guides/running-a-poc",
            "guides/production",
            "guides/testing",
            "guides/uptime",
            "guides/fomo",
            "guides/migrate-from-launchdarkly",
          ],
        },
      ],
    },
    {
      type: "category",
      className: "sb-cloud",
      label: "Feature Gates",
      items: [
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
            "feature-gates/scheduled-rollouts",
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
            "feature-gates/feature-gates-lifecycle",
            "feature-gates/permanent-and-stale-gates",
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
          ],
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
      ],
    },
    {
      type: "category",
      className: "sb-cloud",
      label: "Experimentation",
      items: [
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
            "experiments-plus/rules",
            "experiments-plus/getting-group",
            "experiments-plus/monitor",
            "experiments-plus/read-results",
            "experiments-plus/sequential-testing",
            "experiments-plus/make-decision",
            "experiments-plus/overrides",
            "experiments-plus/stratified-sampling",
            "experiments-plus/abandon",
            "experiments-plus/ending-experiment",
            "experiments-plus/disable-group",
            "experiments-plus/bayesian",
            "experiments-plus/switchback-tests",
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
          label: "Stats Engine",
          link: {
            type: "doc",
            id: "stats-engine/introduction",
          },
          items: [
            "stats-engine/metric-deltas",
            "stats-engine/variance",
            "stats-engine/confidence-intervals",
            "stats-engine/p-value",
            "stats-engine/topline-impact",
            "stats-engine/variance-reduction",
            "stats-engine/offlineaa",
            "stats-engine/pre-experiment-bias",
            {
              "Methodologies Used": [
                "stats-engine/methodologies/bonferroni-correction",
                "stats-engine/methodologies/cuped",
                "stats-engine/methodologies/delta-method",
                "stats-engine/methodologies/srm-checks",
                "stats-engine/methodologies/winsorization",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Layers",
          link: {
            type: "doc",
            id: "layers/introduction",
          },
          items: ["layers/js-tutorial"],
        },
        {
          type: "category",
          label: "Landing Page Experiments",
          items: [
            "guides/landing-page-experiments/introduction",
            "guides/landing-page-experiments/setup",
            "guides/landing-page-experiments/interpreting",
            "guides/landing-page-experiments/layers",
            "guides/landing-page-experiments/webflow",
          ],
        },
        "holdouts/introduction",
        {
          type: "category",
          label: "Autotune",
          link: {
            type: "doc",
            id: "autotune/introduction",
          },
          items: ["autotune/setup", "autotune/monitoring"],
        },

        {
          type: "category",
          label: "Pulse",
          link: {
            type: "doc",
            id: "pulse/introduction",
          },
          items: [
            "pulse/read-pulse",
            "pulse/drill-down",
            "pulse/custom-queries",
            "pulse/export",
            "pulse/best-practices",
            "pulse/faq",
          ],
        },
      ],
    },
    {
      type: "category",
      className: "sb-cloud",
      label: "Analytics",
      items: [
        "mex/overview",
        {
          type: "category",
          label: "Metric Explorer",
          items: [
            "mex/drilldown",
            "mex/funnels",
            "mex/retention",
          ]
        },
        "mex/dashboards",
        {
          type: "category",
          label: "Metrics",
          link: {
            type: "doc",
            id: "metrics/introduction",
          },
          items: [
            {
              "Metrics 101 - Overview": [
                "metrics/101",
                "metrics/how-metrics-work",
                "metrics/raw-events",
                "metrics/raw-event-metrics",
                "metrics/custom-metrics",
                "metrics/precomputed-metrics",
                "metrics/user-dimensions",
                "metrics/metric-dimensions",
              ],
            },
            // other
            "metrics/ingest",
            "metrics/pulse",
            "metrics/console",
            "metrics/health-checks",

            // 201
            "metrics/create",
            "metrics/archiving-metrics",
            "metrics/create-metric-tags",
            "metrics/metric-alerts",
            "metrics/user",

            // 301
            "metrics/create-user-flows",
            "metrics/create-user-funnels",
          ],
        },
        "users/introduction",
        "insights/introduction",
      ],
    },
    {
      type: "category",
      className: "sb-cloud",
      label: "SDKs, APIs, Integrations",
      link: {
        type: "doc",
        id: "sdks/sdks-overview",
      },
      items: [
        {
          type: "category",
          label: "Client SDKs",
          link: {
            type: "doc",
            id: "client/introduction",
          },
          items: [
            {
              Concepts: [
                "client/concepts/user",
                "client/concepts/initialize",
                "sdks/debugging",
                "sdk-keys/target-apps",
              ],
            },
            "client/jsClientSDK",
            "client/reactSDK",
            "client/reactNativeSDK",
            "client/reactNativeExpoSDK",
            "client/iosClientSDK",
            "client/androidClientSDK",
            "client/dotnetSDK",
            "client/rokuSDK",
            "client/unitySDK",
            "client/dartSDK",
            {
              type: "category",
              label: "On Device Evaluation",
              items: [
                "client/jsLocalEvaluationSDK",
                "client/swiftOnDeviceEvaluationSDK",
                "client/androidOnDeviceEvaluationSDK",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Server SDKs",
          link: {
            type: "doc",
            id: "server/introduction",
          },
          items: [
            {
              Concepts: [
                "server/concepts/user",
                "messages/serverRequiredUserID",
                "server/concepts/data_store",
                "sdks/debugging",
                "sdk-keys/target-apps",
              ],
            },
            "server/nodejsServerSDK",
            "server/javaSdk",
            "server/pythonSDK",
            "server/golangSDK",
            "server/rubySDK",
            "server/dotnetSDK",
            "server/phpSDK",
            "server/erlangSDK",
            "server/rustSDK",
            "server/cppSDK",
            "server/deprecation-notices",
          ],
        },
        "http-api",
        {
          type: "category",
          label: "Console API",
          link: {
            type: "doc",
            id: "console-api/introduction",
          },
          items: [
            "console-api/gates",
            "console-api/segments",
            "console-api/dynamic-configs",
            "console-api/experiments",
            "console-api/holdouts",
            "console-api/layers",
            "console-api/users",
            "console-api/metrics",
            "console-api/audit-logs",
            "console-api/exposure-count",
            "console-api/autotunes",
            "console-api/target-apps",
            "console-api/ingestions",
            "console-api/tags",
            {
              Reports: [
                "console-api/daily-reports",
                "console-api/daily-reports-deprecated",
              ],
            },
            "console-api/all-endpoints",
            "console-api/usage-billing",
            "console-api/rules",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "integrations/introduction",
          },
          items: [
            {
              "Data Connectors": [
                "integrations/data-connectors/census",
                "integrations/data-connectors/google-analytics",
                "integrations/data-connectors/fivetran",
                "integrations/data-connectors/heap",
                "integrations/data-connectors/hightouch",
                "integrations/data-connectors/mparticle",
                "integrations/data-connectors/revenuecat",
                "integrations/data-connectors/segment",
                "integrations/data-connectors/rudderstack",
                "integrations/data-connectors/stitch",
                "integrations/data-connectors/mixpanel",
                "integrations/data-connectors/amplitude",
              ],
            },
            {
              "Data Imports (Deprecated)": [
                "integrations/data-imports/overview-deprecated",
                "integrations/data-imports/bigquery-deprecated",
                "integrations/data-imports/redshift-deprecated",
                "integrations/data-imports/snowflake-deprecated",
                "integrations/data-imports/azure_upload-deprecated",
              ],
            },
            {
              "Data Exports": ["integrations/data-exports/overview"],
            },
            "integrations/event_filtering",
            "integrations/event_webhook",
            "integrations/jira",
            "integrations/vercel",
            "integrations/cloudflare",
            "integrations/fastly",
            "integrations/vscode",
            "integrations/datadog",
            "integrations/github_code_references",
            "integrations/slack",
            "integrations/openai",
            {
              type: "category",
              label: "Terraform",
              link: {
                type: "doc",
                id: "integrations/terraform/introduction",
              },
              items: [
                "integrations/terraform/terraform_gate",
                "integrations/terraform/terraform_experiment",
              ],
            },
            {
              type: "category",
              label: "Triggers",
              link: {
                type: "doc",
                id: "integrations/triggers/introduction",
              },
              items: ["integrations/triggers/datadog"],
            },
          ],
        },
        {
          type: "category",
          label: "Data Warehouse Ingestion",
          link: {
            type: "doc",
            id: "data-warehouse-ingestion/introduction",
          },
          items: [
            {
              "Connection Set Up": [
                "data-warehouse-ingestion/bigquery",
                "data-warehouse-ingestion/redshift",
                "data-warehouse-ingestion/snowflake",
                "data-warehouse-ingestion/databricks",
                "data-warehouse-ingestion/synapse",
                "data-warehouse-ingestion/s3",
                "data-warehouse-ingestion/athena",
                "data-warehouse-ingestion/faq",
              ],
            },
            "data-warehouse-ingestion/data_mapping",
          ],
        },
      ],
    },
    {
      type: "category",
      className: "sb-cloud",
      label: "Admin",
      items: [
        {
          type: "category",
          label: "Access Management",
          link: {
            type: "doc",
            id: "access-management/introduction",
          },
          items: [
            "access-management/projects",
            "access-management/organizations",
            {
              "Single Sign-On": [
                "access-management/sso/overview",
                "access-management/sso/okta_sso",
                "access-management/sso/azuread",
                "access-management/sso/google",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Compliance",
          link: {
            type: "doc",
            id: "compliance/introduction",
          },
          items: ["compliance/user_data_deletion_requests"],
        },
        {
          type: "category",
          label: "Infrastructure",
          link: {
            type: "doc",
            id: "infrastructure/introduction",
          },
          items: [
            "infrastructure/statsig_ip_ranges",
            "infrastructure/statsig_domains",
            "infrastructure/custom_proxy",
            "infrastructure/reliability-faq",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "faq",
      className: "sb-cloud",
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "statsig-warehouse-native/introduction",
      },
      items: [
        "statsig-warehouse-native/guides/connect",
        "statsig-warehouse-native/guides/metric_sources",
        "statsig-warehouse-native/guides/metrics",
        "statsig-warehouse-native/guides/assignment_sources",
        "statsig-warehouse-native/guides/experiments",
        "statsig-warehouse-native/guides/pulse",
        "statsig-warehouse-native/guides/sdks",
        "statsig-warehouse-native/guides/aatest",
      ],
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Features",
      items: [
        "statsig-warehouse-native/native-vs-cloud",
        "statsig-warehouse-native/features/funnel-metrics",
        "statsig-warehouse-native/features/power-analysis",
        "statsig-warehouse-native/features/cohort-metrics",
        "statsig-warehouse-native/features/id-resolution",
        "statsig-warehouse-native/features/entity-properties",
        "statsig-warehouse-native/features/monitor-an-experiment",
      ],
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Data Overview",
      items: [
        // "statsig-warehouse-native/analysis-tools/pulse",
        // "statsig-warehouse-native/analysis-tools/settings",
        "statsig-warehouse-native/analysis-tools/data-sources",
        "statsig-warehouse-native/analysis-tools/data-privacy",
        "statsig-warehouse-native/analysis-tools/pipeline-overview",
        "statsig-warehouse-native/guides/best-practices",
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Connecting Your Warehouse",
      items: [
        "statsig-warehouse-native/connecting-your-warehouse/bigquery",
        "statsig-warehouse-native/connecting-your-warehouse/snowflake",
        "statsig-warehouse-native/connecting-your-warehouse/databricks",
        "statsig-warehouse-native/connecting-your-warehouse/redshift",
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Feature Gates",
      items: [
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
            "feature-gates/scheduled-rollouts",
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
            "feature-gates/feature-gates-lifecycle",
            "feature-gates/permanent-and-stale-gates",
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
          ],
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
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Experimentation",
      items: [
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
            "experiments-plus/rules",
            "experiments-plus/getting-group",
            "experiments-plus/monitor",
            "experiments-plus/read-results",
            "experiments-plus/sequential-testing",
            "experiments-plus/make-decision",
            "experiments-plus/overrides",
            "experiments-plus/stratified-sampling", 
            "experiments-plus/abandon",
            "experiments-plus/ending-experiment",
            "experiments-plus/disable-group",
            "experiments-plus/bayesian",
            "experiments-plus/switchback-tests",
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
          label: "Stats Engine",
          link: {
            type: "doc",
            id: "stats-engine/introduction",
          },
          items: [
            "stats-engine/metric-deltas",
            "stats-engine/variance",
            "stats-engine/confidence-intervals",
            "stats-engine/p-value",
            "stats-engine/topline-impact",
            "stats-engine/variance-reduction",
            "stats-engine/offlineaa",
            "stats-engine/pre-experiment-bias",
            {
              "Methodologies Used": [
                "stats-engine/methodologies/bonferroni-correction",
                "stats-engine/methodologies/cuped",
                "stats-engine/methodologies/delta-method",
                "stats-engine/methodologies/srm-checks",
                "stats-engine/methodologies/winsorization_variants/warehouse",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Layers",
          link: {
            type: "doc",
            id: "layers/introduction",
          },
          items: ["layers/js-tutorial"],
        },
        {
          type: "category",
          label: "Landing Page Experiments",
          items: [
            "guides/landing-page-experiments/introduction",
            "guides/landing-page-experiments/setup",
            "guides/landing-page-experiments/interpreting",
            "guides/landing-page-experiments/layers",
            "guides/landing-page-experiments/webflow",
          ],
        },
        "holdouts/introduction",
        {
          type: "category",
          label: "Autotune",
          link: {
            type: "doc",
            id: "autotune/introduction",
          },
          items: ["autotune/setup", "autotune/monitoring"],
        },
        
        {
          type: "category",
          label: "Pulse",
          link: {
            type: "doc",
            id: "pulse/introduction",
          },
          items: [
            "pulse/read-pulse",
            "pulse/drill-down",
            "pulse/custom-queries",
            "pulse/export",
            "pulse/best-practices",
            "pulse/faq",
          ],
        },
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Analytics",
      items: [
        {
          type: "category",
          label: "Metrics",
          link: {
            type: "doc",
            id: "metrics/introduction",
          },
          items: [
            {
              "Metrics 101 - Overview": [
                "metrics/101",
                "metrics/how-metrics-work",
                "metrics/raw-events",
                "metrics/raw-event-metrics",
                "metrics/custom-metrics",
                "metrics/precomputed-metrics",
                "metrics/user-dimensions",
                "metrics/metric-dimensions",
              ],
            },
            // other
            "metrics/ingest",
            "metrics/pulse",
            "metrics/console",
            "metrics/health-checks",
    
            // 201
            "metrics/create",
            "metrics/archiving-metrics",
            "metrics/create-metric-tags",
            "metrics/metric-alerts",
            "metrics/user",
    
            // 301
            "metrics/create-user-flows",
            "metrics/create-user-funnels",
          ],
        },
        "mex/introduction",
        "users/introduction",
        "insights/introduction",
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "SDKs, APIs, Integrations",
      items: [
        {
          type: "category",
          label: "Client SDKs",
          link: {
            type: "doc",
            id: "client/introduction",
          },
          items: [
            {
              Concepts: [
                "client/concepts/user",
                "client/concepts/initialize",
                "sdks/debugging",
                "sdk-keys/target-apps",
              ],
            },
            "client/jsClientSDK",
            "client/reactSDK",
            "client/reactNativeSDK",
            "client/reactNativeExpoSDK",
            "client/iosClientSDK",
            "client/swiftOnDeviceEvaluationSDK",
            "client/androidClientSDK",
            "client/dotnetSDK",
            "client/rokuSDK",
            "client/unitySDK",
            "client/dartSDK",
            "client/jsLocalEvaluationSDK",
          ],
        },
        {
          type: "category",
          label: "Server SDKs",
          link: {
            type: "doc",
            id: "server/introduction",
          },
          items: [
            {
              Concepts: [
                "server/concepts/user",
                "messages/serverRequiredUserID",
                "server/concepts/data_store",
                "sdks/debugging",
                "sdk-keys/target-apps",
              ],
            },
            "server/nodejsServerSDK",
            "server/javaSdk",
            "server/pythonSDK",
            "server/golangSDK",
            "server/rubySDK",
            "server/dotnetSDK",
            "server/phpSDK",
            "server/erlangSDK",
            "server/rustSDK",
            "server/cppSDK",
            "server/deprecation-notices",
          ],
        },
        "http-api",
        {
          type: "category",
          label: "Console API",
          link: {
            type: "doc",
            id: "console-api/introduction",
          },
          items: [
            "console-api/gates",
            "console-api/segments",
            "console-api/dynamic-configs",
            "console-api/experiments",
            "console-api/holdouts",
            "console-api/layers",
            "console-api/users",
            "console-api/metrics",
            "console-api/audit-logs",
            "console-api/exposure-count",
            "console-api/autotunes",
            "console-api/target-apps",
            "console-api/ingestions",
            "console-api/tags",
            {
              Reports: [
                "console-api/daily-reports",
                "console-api/daily-reports-deprecated",
              ],
            },
            "console-api/all-endpoints",
            "console-api/usage-billing",
            "console-api/rules",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "integrations/introduction",
          },
          items: [
            {
              "Data Connectors": [
                "integrations/data-connectors/census",
                "integrations/data-connectors/google-analytics",
                "integrations/data-connectors/fivetran",
                "integrations/data-connectors/heap",
                "integrations/data-connectors/hightouch",
                "integrations/data-connectors/mparticle",
                "integrations/data-connectors/revenuecat",
                "integrations/data-connectors/segment",
                "integrations/data-connectors/rudderstack",
                "integrations/data-connectors/stitch",
                "integrations/data-connectors/mixpanel",
                "integrations/data-connectors/amplitude",
              ],
            },
            {
              "Data Imports (Deprecated)": [
                "integrations/data-imports/overview-deprecated",
                "integrations/data-imports/bigquery-deprecated",
                "integrations/data-imports/redshift-deprecated",
                "integrations/data-imports/snowflake-deprecated",
                "integrations/data-imports/azure_upload-deprecated",
              ],
            },
            {
              "Data Exports": ["integrations/data-exports/overview"],
            },
            "integrations/event_filtering",
            "integrations/event_webhook",
            "integrations/jira",
            "integrations/vercel",
            "integrations/cloudflare",
            "integrations/fastly",
            "integrations/vscode",
            "integrations/datadog",
            "integrations/github_code_references",
            "integrations/slack",
            "integrations/openai",
            {
              type: "category",
              label: "Terraform",
              link: {
                type: "doc",
                id: "integrations/terraform/introduction",
              },
              items: [
                "integrations/terraform/terraform_gate",
                "integrations/terraform/terraform_experiment",
              ],
            },
            {
              type: "category",
              label: "Triggers",
              link: {
                type: "doc",
                id: "integrations/triggers/introduction",
              },
              items: ["integrations/triggers/datadog"],
            },
          ],
        },
        {
          type: "category",
          label: "Data Warehouse Ingestion",
          link: {
            type: "doc",
            id: "data-warehouse-ingestion/introduction",
          },
          items: [
            {
              "Connection Set Up": [
                "data-warehouse-ingestion/bigquery",
                "data-warehouse-ingestion/redshift",
                "data-warehouse-ingestion/snowflake",
                "data-warehouse-ingestion/databricks",
                "data-warehouse-ingestion/synapse",
                "data-warehouse-ingestion/s3",
                "data-warehouse-ingestion/athena",
                "data-warehouse-ingestion/faq",
              ],
            },
            "data-warehouse-ingestion/data_mapping",
          ],
        },
      ]
    },
    {
      type: "category",
      className: "sb-whn",
      label: "Admin",
      items: [
        {
          type: "category",
          label: "Access Management",
          link: {
            type: "doc",
            id: "access-management/introduction",
          },
          items: [
            "access-management/projects",
            "access-management/organizations",
            {
              "Single Sign-On": [
                "access-management/sso/overview",
                "access-management/sso/okta_sso",
                "access-management/sso/azuread",
                "access-management/sso/google",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Compliance",
          link: {
            type: "doc",
            id: "compliance/introduction",
          },
          items: ["compliance/user_data_deletion_requests"],
        },
        {
          type: "category",
          label: "Infrastructure",
          link: {
            type: "doc",
            id: "infrastructure/introduction",
          },
          items: [
            "infrastructure/statsig_ip_ranges",
            "infrastructure/statsig_domains",
            "infrastructure/custom_proxy",
            "infrastructure/reliability-faq",
          ],
        },
      ]
    },
    {
      type: "doc",
      id: "faq",
      className: "sb-whn",
    }
  ],
};
