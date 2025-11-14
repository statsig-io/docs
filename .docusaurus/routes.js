import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '6f0'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'd94'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/statsig-cloud',
            component: ComponentCreator('/tags/statsig-cloud', '530'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', 'a73'),
            routes: [
              {
                path: '/access-management/discussions',
                component: ComponentCreator('/access-management/discussions', '9f8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/introduction',
                component: ComponentCreator('/access-management/introduction', '42f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/organizations',
                component: ComponentCreator('/access-management/organizations', '8e6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/projects',
                component: ComponentCreator('/access-management/projects', '8a3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/concepts',
                component: ComponentCreator('/access-management/scim/concepts', 'a21'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/okta_scim_org_roles',
                component: ComponentCreator('/access-management/scim/okta_scim_org_roles', '259'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/okta_scim_setup',
                component: ComponentCreator('/access-management/scim/okta_scim_setup', '5b9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/okta_scim_team_management',
                component: ComponentCreator('/access-management/scim/okta_scim_team_management', '672'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/okta_scim_troubleshooting',
                component: ComponentCreator('/access-management/scim/okta_scim_troubleshooting', '26e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/okta_scim_user_management',
                component: ComponentCreator('/access-management/scim/okta_scim_user_management', 'ef9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/overview',
                component: ComponentCreator('/access-management/scim/overview', '68b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/scim/scim-endpoints',
                component: ComponentCreator('/access-management/scim/scim-endpoints', '0be'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/sso/azuread',
                component: ComponentCreator('/access-management/sso/azuread', '120'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/sso/google',
                component: ComponentCreator('/access-management/sso/google', '490'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/sso/okta_sso',
                component: ComponentCreator('/access-management/sso/okta_sso', '3bc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/sso/overview',
                component: ComponentCreator('/access-management/sso/overview', '726'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/tags',
                component: ComponentCreator('/access-management/tags', '868'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/access-management/teams',
                component: ComponentCreator('/access-management/teams', 'b43'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/aggregated-impact',
                component: ComponentCreator('/aggregated-impact', 'b28'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/aggregated-impact-whn',
                component: ComponentCreator('/aggregated-impact-whn', '7ea'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/ai-evals/create-an-online-eval',
                component: ComponentCreator('/ai-evals/create-an-online-eval', 'cc1'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/getting-started',
                component: ComponentCreator('/ai-evals/getting-started', 'be1'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/graders',
                component: ComponentCreator('/ai-evals/graders', '2e4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/offline-evals',
                component: ComponentCreator('/ai-evals/offline-evals', 'a44'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/online-evals',
                component: ComponentCreator('/ai-evals/online-evals', '146'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/overview',
                component: ComponentCreator('/ai-evals/overview', 'cbe'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/ai-evals/prompts',
                component: ComponentCreator('/ai-evals/prompts', '374'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune',
                component: ComponentCreator('/autotune', '714'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/bandit-faq',
                component: ComponentCreator('/autotune/bandit-faq', '017'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/contextual/getting-started',
                component: ComponentCreator('/autotune/contextual/getting-started', '0f0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/contextual/introduction',
                component: ComponentCreator('/autotune/contextual/introduction', 'c47'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/contextual/methodology',
                component: ComponentCreator('/autotune/contextual/methodology', 'cb3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/contextual/monitoring',
                component: ComponentCreator('/autotune/contextual/monitoring', '302'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/monitoring',
                component: ComponentCreator('/autotune/monitoring', 'f3d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/autotune/setup',
                component: ComponentCreator('/autotune/setup', 'ed6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/capturing-metrics',
                component: ComponentCreator('/azureai/capturing-metrics', '637'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/completions',
                component: ComponentCreator('/azureai/completions', '71a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/embeddings',
                component: ComponentCreator('/azureai/embeddings', 'b47'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/getting-started',
                component: ComponentCreator('/azureai/getting-started', '975'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/introduction',
                component: ComponentCreator('/azureai/introduction', 'bca'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/model-client',
                component: ComponentCreator('/azureai/model-client', 'b9e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/azureai/running-experiments',
                component: ComponentCreator('/azureai/running-experiments', 'b7c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/bandit-introduction',
                component: ComponentCreator('/bandit-introduction', '402'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/androidClientSDK',
                component: ComponentCreator('/client/androidClientSDK', 'b44'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/androidOnDeviceEvaluationSDK',
                component: ComponentCreator('/client/androidOnDeviceEvaluationSDK', '26b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/concepts/initialize',
                component: ComponentCreator('/client/concepts/initialize', '5b3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/concepts/local-eval-adapter',
                component: ComponentCreator('/client/concepts/local-eval-adapter', '7c5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/concepts/parameter-stores',
                component: ComponentCreator('/client/concepts/parameter-stores', '040'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/concepts/persistent_assignment',
                component: ComponentCreator('/client/concepts/persistent_assignment', '8a0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/cpp-client-sdk',
                component: ComponentCreator('/client/cpp-client-sdk', '014'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/dartSDK',
                component: ComponentCreator('/client/dartSDK', '89f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/deprecated/jsClientSDK',
                component: ComponentCreator('/client/deprecated/jsClientSDK', 'ae5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/deprecated/reactNativeExpoSDK',
                component: ComponentCreator('/client/deprecated/reactNativeExpoSDK', '0b9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/deprecated/reactNativeSDK',
                component: ComponentCreator('/client/deprecated/reactNativeSDK', '3df'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/deprecated/reactSDK',
                component: ComponentCreator('/client/deprecated/reactSDK', 'e12'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/dotnetSDK',
                component: ComponentCreator('/client/dotnetSDK', '178'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/html-snippet',
                component: ComponentCreator('/client/html-snippet', '4c1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/introduction',
                component: ComponentCreator('/client/introduction', '1dd'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/iOS/repo-migration-guide',
                component: ComponentCreator('/client/iOS/repo-migration-guide', '907'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/iosClientSDK',
                component: ComponentCreator('/client/iosClientSDK', 'e92'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk',
                component: ComponentCreator('/client/javascript-sdk', '22d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/Angular',
                component: ComponentCreator('/client/javascript-sdk/Angular', 'cb6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/examples',
                component: ComponentCreator('/client/javascript-sdk/examples', '249'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/javascript-sdk/expo',
                component: ComponentCreator('/client/javascript-sdk/expo', 'cb5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/init-strategies',
                component: ComponentCreator('/client/javascript-sdk/init-strategies', '518'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/javascript-sdk/migrating-from-statsig-js',
                component: ComponentCreator('/client/javascript-sdk/migrating-from-statsig-js', '7d0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/migrating-from-statsig-react',
                component: ComponentCreator('/client/javascript-sdk/migrating-from-statsig-react', '2be'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/next-js',
                component: ComponentCreator('/client/javascript-sdk/next-js', 'a6a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/react',
                component: ComponentCreator('/client/javascript-sdk/react', 'ff9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/react-native',
                component: ComponentCreator('/client/javascript-sdk/react-native', 'd45'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/javascript-sdk/stable-id',
                component: ComponentCreator('/client/javascript-sdk/stable-id', '33e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/javascript-sdk/using-evaluations-data-adapter',
                component: ComponentCreator('/client/javascript-sdk/using-evaluations-data-adapter', '407'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/client/js-on-device-eval-client',
                component: ComponentCreator('/client/js-on-device-eval-client', '4ba'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/js-on-device-eval-client/migrating-from-js-local-eval',
                component: ComponentCreator('/client/js-on-device-eval-client/migrating-from-js-local-eval', 'ec5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/js-on-device-eval-client/react-native',
                component: ComponentCreator('/client/js-on-device-eval-client/react-native', '279'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/js-on-device-eval-client/using-evaluations-data-adapter',
                component: ComponentCreator('/client/js-on-device-eval-client/using-evaluations-data-adapter', 'ab5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/jsLocalEvaluationSDK',
                component: ComponentCreator('/client/jsLocalEvaluationSDK', '5f9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/onDevice',
                component: ComponentCreator('/client/onDevice', 'c7c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/rokuSDK',
                component: ComponentCreator('/client/rokuSDK', '835'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/swiftOnDeviceEvaluationSDK',
                component: ComponentCreator('/client/swiftOnDeviceEvaluationSDK', '4bb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/client/Templates/',
                component: ComponentCreator('/client/Templates/', 'bbe'),
                exact: true
              },
              {
                path: '/client/unitySDK',
                component: ComponentCreator('/client/unitySDK', '4ab'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/compliance/data_privacy_for_mobile',
                component: ComponentCreator('/compliance/data_privacy_for_mobile', 'f34'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/compliance/introduction',
                component: ComponentCreator('/compliance/introduction', '51f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/compliance/user_data_deletion_requests',
                component: ComponentCreator('/compliance/user_data_deletion_requests', 'c2b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/concepts/user',
                component: ComponentCreator('/concepts/user', '4ea'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/all-endpoints-generated',
                component: ComponentCreator('/console-api/all-endpoints-generated', 'a33'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/audit_logs',
                component: ComponentCreator('/console-api/audit_logs', '62e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/autotunes',
                component: ComponentCreator('/console-api/autotunes', '8d7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/change-validation',
                component: ComponentCreator('/console-api/change-validation', '451'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/daily-reports',
                component: ComponentCreator('/console-api/daily-reports', 'aeb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/daily-reports-deprecated',
                component: ComponentCreator('/console-api/daily-reports-deprecated', '46a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/dynamic_configs',
                component: ComponentCreator('/console-api/dynamic_configs', '9ab'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/events',
                component: ComponentCreator('/console-api/events', '002'),
                exact: true
              },
              {
                path: '/console-api/experiments',
                component: ComponentCreator('/console-api/experiments', 'd3a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/exposure-count',
                component: ComponentCreator('/console-api/exposure-count', '1bb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/gates',
                component: ComponentCreator('/console-api/gates', '224'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/holdouts',
                component: ComponentCreator('/console-api/holdouts', '063'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/ingestions',
                component: ComponentCreator('/console-api/ingestions', '64c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/introduction',
                component: ComponentCreator('/console-api/introduction', '297'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/keys',
                component: ComponentCreator('/console-api/keys', '5c3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/layers',
                component: ComponentCreator('/console-api/layers', '8cc'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/metrics',
                component: ComponentCreator('/console-api/metrics', '65c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/param-store',
                component: ComponentCreator('/console-api/param-store', 'bd4'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/rules',
                component: ComponentCreator('/console-api/rules', '10d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/segments',
                component: ComponentCreator('/console-api/segments', '663'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/snippets/conditions',
                component: ComponentCreator('/console-api/snippets/conditions', '240'),
                exact: true
              },
              {
                path: '/console-api/tags',
                component: ComponentCreator('/console-api/tags', 'b70'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/target-apps',
                component: ComponentCreator('/console-api/target-apps', 'c53'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/usage-billing',
                component: ComponentCreator('/console-api/usage-billing', 'ff7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/users',
                component: ComponentCreator('/console-api/users', '1c8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console-api/warehouse-connections',
                component: ComponentCreator('/console-api/warehouse-connections', '17a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/console/accessManagement/sso/okta_sso',
                component: ComponentCreator('/console/accessManagement/sso/okta_sso', '65a'),
                exact: true
              },
              {
                path: '/contextual-bandit',
                component: ComponentCreator('/contextual-bandit', 'e3c'),
                exact: true
              },
              {
                path: '/custom_proxy',
                component: ComponentCreator('/custom_proxy', '4c3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/athena',
                component: ComponentCreator('/data-warehouse-ingestion/athena', '887'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/bigquery',
                component: ComponentCreator('/data-warehouse-ingestion/bigquery', 'f58'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/data_mapping',
                component: ComponentCreator('/data-warehouse-ingestion/data_mapping', 'd42'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/databricks',
                component: ComponentCreator('/data-warehouse-ingestion/databricks', '9a2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/faq',
                component: ComponentCreator('/data-warehouse-ingestion/faq', '2cf'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/introduction',
                component: ComponentCreator('/data-warehouse-ingestion/introduction', '181'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/redshift',
                component: ComponentCreator('/data-warehouse-ingestion/redshift', '3b9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/s3',
                component: ComponentCreator('/data-warehouse-ingestion/s3', '897'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/snowflake',
                component: ComponentCreator('/data-warehouse-ingestion/snowflake', 'c0d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/data-warehouse-ingestion/synapse',
                component: ComponentCreator('/data-warehouse-ingestion/synapse', '7aa'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/abtest-in-javascript',
                component: ComponentCreator('/developer-guides/abtest-in-javascript', '42e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/abtest-in-nodejs',
                component: ComponentCreator('/developer-guides/abtest-in-nodejs', 'e49'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/abtest-in-python',
                component: ComponentCreator('/developer-guides/abtest-in-python', '3bc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/abtest-in-rust',
                component: ComponentCreator('/developer-guides/abtest-in-rust', 'f1f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-android',
                component: ComponentCreator('/developer-guides/feature-flags-in-android', 'e96'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-expo',
                component: ComponentCreator('/developer-guides/feature-flags-in-expo', 'e5a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-java',
                component: ComponentCreator('/developer-guides/feature-flags-in-java', '6a9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-javascript',
                component: ComponentCreator('/developer-guides/feature-flags-in-javascript', '4e2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-nodejs',
                component: ComponentCreator('/developer-guides/feature-flags-in-nodejs', 'de7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-python',
                component: ComponentCreator('/developer-guides/feature-flags-in-python', '69f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-react',
                component: ComponentCreator('/developer-guides/feature-flags-in-react', '1f7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-ruby',
                component: ComponentCreator('/developer-guides/feature-flags-in-ruby', '2b9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-rust',
                component: ComponentCreator('/developer-guides/feature-flags-in-rust', 'd71'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/developer-guides/feature-flags-in-swift',
                component: ComponentCreator('/developer-guides/feature-flags-in-swift', 'e1e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/dynamic-config',
                component: ComponentCreator('/dynamic-config', '9f9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/dynamic-config/add-rule',
                component: ComponentCreator('/dynamic-config/add-rule', '58c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/dynamic-config/create-new',
                component: ComponentCreator('/dynamic-config/create-new', '8e7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/dynamic-config/enforce-schema',
                component: ComponentCreator('/dynamic-config/enforce-schema', 'bf3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/dynamic-config/working-with',
                component: ComponentCreator('/dynamic-config/working-with', 'e62'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/exp-templates/decision-framework',
                component: ComponentCreator('/exp-templates/decision-framework', 'bd3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experimentation/meta-analysis',
                component: ComponentCreator('/experimentation/meta-analysis', '397'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experimentation/meta-analysis-whn',
                component: ComponentCreator('/experimentation/meta-analysis-whn', 'd72'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experimentation/quality-score',
                component: ComponentCreator('/experimentation/quality-score', '177'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experimentation/quality-score-whn',
                component: ComponentCreator('/experimentation/quality-score-whn', '675'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experimentation/statsig-lite',
                component: ComponentCreator('/experimentation/statsig-lite', 'cd8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus',
                component: ComponentCreator('/experiments-plus', '4c2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/abandon',
                component: ComponentCreator('/experiments-plus/abandon', '0ef'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/bayesian',
                component: ComponentCreator('/experiments-plus/bayesian', '0d8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/conclude-experiment-defer-decision',
                component: ComponentCreator('/experiments-plus/conclude-experiment-defer-decision', '2e0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/create-new',
                component: ComponentCreator('/experiments-plus/create-new', '96c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/cure',
                component: ComponentCreator('/experiments-plus/cure', 'f8e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/cure-setup',
                component: ComponentCreator('/experiments-plus/cure-setup', 'a05'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/differential-impact-detection',
                component: ComponentCreator('/experiments-plus/differential-impact-detection', '358'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/differential-impact-detection-whn',
                component: ComponentCreator('/experiments-plus/differential-impact-detection-whn', 'dfd'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/disable-group',
                component: ComponentCreator('/experiments-plus/disable-group', 'b88'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/ending-experiment',
                component: ComponentCreator('/experiments-plus/ending-experiment', 'de4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/geotests',
                component: ComponentCreator('/experiments-plus/geotests', 'e66'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/geotests-setup',
                component: ComponentCreator('/experiments-plus/geotests-setup', '841'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/geotests/methodology',
                component: ComponentCreator('/experiments-plus/geotests/methodology', '846'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/getting-group',
                component: ComponentCreator('/experiments-plus/getting-group', 'a93'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/implement',
                component: ComponentCreator('/experiments-plus/implement', '0fb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/interaction-detection',
                component: ComponentCreator('/experiments-plus/interaction-detection', 'd8f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/make-decision',
                component: ComponentCreator('/experiments-plus/make-decision', 'd74'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/monitor',
                component: ComponentCreator('/experiments-plus/monitor', 'aaa'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/overrides',
                component: ComponentCreator('/experiments-plus/overrides', 'e8d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/power-analysis',
                component: ComponentCreator('/experiments-plus/power-analysis', 'b26'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/reconciling-experiment-results',
                component: ComponentCreator('/experiments-plus/reconciling-experiment-results', '971'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/sequential-testing',
                component: ComponentCreator('/experiments-plus/sequential-testing', 'f3b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/sprt',
                component: ComponentCreator('/experiments-plus/sprt', '894'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/stop-assignments',
                component: ComponentCreator('/experiments-plus/stop-assignments', '209'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/stratified-sampling',
                component: ComponentCreator('/experiments-plus/stratified-sampling', 'e81'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/experiments-plus/stratified-sampling-whn',
                component: ComponentCreator('/experiments-plus/stratified-sampling-whn', '077'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/experiments-plus/switchback-tests',
                component: ComponentCreator('/experiments-plus/switchback-tests', '314'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'b11'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/best-practices',
                component: ComponentCreator('/feature-flags/best-practices', 'a5e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/bots',
                component: ComponentCreator('/feature-flags/bots', 'e5e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/conditions',
                component: ComponentCreator('/feature-flags/conditions', 'c79'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/create',
                component: ComponentCreator('/feature-flags/create', '9ac'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/feature-flags-lifecycle',
                component: ComponentCreator('/feature-flags/feature-flags-lifecycle', '592'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/multiple-rollout-stages',
                component: ComponentCreator('/feature-flags/multiple-rollout-stages', '0d0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/overrides',
                component: ComponentCreator('/feature-flags/overrides', 'ac9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/overview',
                component: ComponentCreator('/feature-flags/overview', '256'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/permanent-and-stale-gates',
                component: ComponentCreator('/feature-flags/permanent-and-stale-gates', 'a94'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/pre-post-results',
                component: ComponentCreator('/feature-flags/pre-post-results', '649'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/scheduled-rollouts',
                component: ComponentCreator('/feature-flags/scheduled-rollouts', '28e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/test-gate',
                component: ComponentCreator('/feature-flags/test-gate', 'afa'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/feature-flags/view-exposures',
                component: ComponentCreator('/feature-flags/view-exposures', '2eb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/aa-sidecar',
                component: ComponentCreator('/guides/aa-sidecar', 'b12'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/aa-test',
                component: ComponentCreator('/guides/aa-test', '22e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/abn-tests',
                component: ComponentCreator('/guides/abn-tests', '486'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/cdn-edge-testing',
                component: ComponentCreator('/guides/cdn-edge-testing', '956'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/cms-integrations',
                component: ComponentCreator('/guides/cms-integrations', '2ea'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/config-history',
                component: ComponentCreator('/guides/config-history', 'a47'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/contentful',
                component: ComponentCreator('/guides/contentful', '6ef'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/customer-io-email-abtest',
                component: ComponentCreator('/guides/customer-io-email-abtest', '667'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/email-campaign-test',
                component: ComponentCreator('/guides/email-campaign-test', '16d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/experiment-on-custom-id-types',
                component: ComponentCreator('/guides/experiment-on-custom-id-types', '3c2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/experimentation-program',
                component: ComponentCreator('/guides/experimentation-program', '590'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/experiments',
                component: ComponentCreator('/guides/experiments', '328'),
                exact: true
              },
              {
                path: '/guides/feature-flags',
                component: ComponentCreator('/guides/feature-flags', '99c'),
                exact: true
              },
              {
                path: '/guides/featureflags-or-experiments',
                component: ComponentCreator('/guides/featureflags-or-experiments', 'd45'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/first-device-level-experiment',
                component: ComponentCreator('/guides/first-device-level-experiment', '8a6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/first-dynamic-config',
                component: ComponentCreator('/guides/first-dynamic-config', 'f2d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/first-feature',
                component: ComponentCreator('/guides/first-feature', 'fda'),
                exact: true
              },
              {
                path: '/guides/first-holdout',
                component: ComponentCreator('/guides/first-holdout', 'd19'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/first-segment',
                component: ComponentCreator('/guides/first-segment', 'fc1'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/fomo',
                component: ComponentCreator('/guides/fomo', '2fe'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/framer-analytics',
                component: ComponentCreator('/guides/framer-analytics', 'fa7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/frameworks',
                component: ComponentCreator('/guides/frameworks', '806'),
                exact: true
              },
              {
                path: '/guides/guides_overview',
                component: ComponentCreator('/guides/guides_overview', 'c21'),
                exact: true
              },
              {
                path: '/guides/landing-page-experiments/interpreting',
                component: ComponentCreator('/guides/landing-page-experiments/interpreting', '682'),
                exact: true
              },
              {
                path: '/guides/landing-page-experiments/introduction',
                component: ComponentCreator('/guides/landing-page-experiments/introduction', 'c47'),
                exact: true
              },
              {
                path: '/guides/landing-page-experiments/setup',
                component: ComponentCreator('/guides/landing-page-experiments/setup', '313'),
                exact: true
              },
              {
                path: '/guides/landing-page-experiments/webflow',
                component: ComponentCreator('/guides/landing-page-experiments/webflow', '8bb'),
                exact: true
              },
              {
                path: '/guides/logging-events',
                component: ComponentCreator('/guides/logging-events', '980'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/migrate-from-amplitude',
                component: ComponentCreator('/guides/migrate-from-amplitude', '884'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/migrate-from-launchdarkly',
                component: ComponentCreator('/guides/migrate-from-launchdarkly', '9af'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/migrate-from-mixpanel',
                component: ComponentCreator('/guides/migrate-from-mixpanel', 'b44'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/migration-overview',
                component: ComponentCreator('/guides/migration-overview', '6f9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/node-express-abtests',
                component: ComponentCreator('/guides/node-express-abtests', '6df'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/node-express-feature-flags',
                component: ComponentCreator('/guides/node-express-feature-flags', 'f81'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/open-source-script',
                component: ComponentCreator('/guides/open-source-script', '3fb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/private-attributes',
                component: ComponentCreator('/guides/private-attributes', 'd7b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/production',
                component: ComponentCreator('/guides/production', 'cda'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/python-flask-abtests',
                component: ComponentCreator('/guides/python-flask-abtests', '995'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/python-flask-feature-flags',
                component: ComponentCreator('/guides/python-flask-feature-flags', '46c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/guides/running-a-poc',
                component: ComponentCreator('/guides/running-a-poc', '544'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sample-apps',
                component: ComponentCreator('/guides/sample-apps', 'd32'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sendgrid-email-abtest',
                component: ComponentCreator('/guides/sendgrid-email-abtest', '2fb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/seo-testing',
                component: ComponentCreator('/guides/seo-testing', 'e06'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/serverless',
                component: ComponentCreator('/guides/serverless', '1df'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/setting-up-reviews',
                component: ComponentCreator('/guides/setting-up-reviews', '094'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/shopify-ab-test',
                component: ComponentCreator('/guides/shopify-ab-test', 'e2e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/advanced-configurations',
                component: ComponentCreator('/guides/sidecar-experiments/advanced-configurations', '673'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/advanced-configurations-v3',
                component: ComponentCreator('/guides/sidecar-experiments/advanced-configurations-v3', '639'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/creating-experiments',
                component: ComponentCreator('/guides/sidecar-experiments/creating-experiments', '99a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/integrating-gtm',
                component: ComponentCreator('/guides/sidecar-experiments/integrating-gtm', '883'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/introduction',
                component: ComponentCreator('/guides/sidecar-experiments/introduction', '2e9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/measuring-experiments',
                component: ComponentCreator('/guides/sidecar-experiments/measuring-experiments', 'f20'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/publishing-experiments',
                component: ComponentCreator('/guides/sidecar-experiments/publishing-experiments', '676'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/setup',
                component: ComponentCreator('/guides/sidecar-experiments/setup', 'acc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/sidecar-experiments/sidecar-v3',
                component: ComponentCreator('/guides/sidecar-experiments/sidecar-v3', '2e3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/srm',
                component: ComponentCreator('/guides/srm', '4d4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/statsig-id-resolver',
                component: ComponentCreator('/guides/statsig-id-resolver', 'fdc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/synchronized-launch',
                component: ComponentCreator('/guides/synchronized-launch', 'e8c'),
                exact: true
              },
              {
                path: '/guides/testing',
                component: ComponentCreator('/guides/testing', '9f2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/ui-based-tool',
                component: ComponentCreator('/guides/ui-based-tool', 'd62'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/uptime',
                component: ComponentCreator('/guides/uptime', '2be'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/using-environments',
                component: ComponentCreator('/guides/using-environments', 'bfe'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/guides/webflow-sidecar-ab-test',
                component: ComponentCreator('/guides/webflow-sidecar-ab-test', 'f98'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/holdouts',
                component: ComponentCreator('/holdouts', 'a31'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/http-api',
                component: ComponentCreator('/http-api', 'e82'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/infra-analytics/events-mode-logs-explorer',
                component: ComponentCreator('/infra-analytics/events-mode-logs-explorer', '482'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infra-analytics/getting-started',
                component: ComponentCreator('/infra-analytics/getting-started', '167'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infra-analytics/logs-explorer',
                component: ComponentCreator('/infra-analytics/logs-explorer', '4ec'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infra-analytics/logs-explorer-queries',
                component: ComponentCreator('/infra-analytics/logs-explorer-queries', 'd1c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infra-analytics/overview',
                component: ComponentCreator('/infra-analytics/overview', '0c5'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infra-analytics/topline-alerts-logs',
                component: ComponentCreator('/infra-analytics/topline-alerts-logs', '6e8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infrastructure/api_proxy/introduction',
                component: ComponentCreator('/infrastructure/api_proxy/introduction', 'd75'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infrastructure/introduction',
                component: ComponentCreator('/infrastructure/introduction', '308'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infrastructure/managed-proxy',
                component: ComponentCreator('/infrastructure/managed-proxy', '447'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infrastructure/statsig_domains',
                component: ComponentCreator('/infrastructure/statsig_domains', 'a8d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/infrastructure/statsig_ip_ranges',
                component: ComponentCreator('/infrastructure/statsig_ip_ranges', '230'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/akamai',
                component: ComponentCreator('/integrations/akamai', 'ed0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/cloudflare',
                component: ComponentCreator('/integrations/cloudflare', '7ae'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/amplitude',
                component: ComponentCreator('/integrations/data-connectors/amplitude', 'a17'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/braze',
                component: ComponentCreator('/integrations/data-connectors/braze', 'c46'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/census',
                component: ComponentCreator('/integrations/data-connectors/census', 'ed6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/fivetran',
                component: ComponentCreator('/integrations/data-connectors/fivetran', '6a8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/google-analytics',
                component: ComponentCreator('/integrations/data-connectors/google-analytics', '2b9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/heap',
                component: ComponentCreator('/integrations/data-connectors/heap', '7cc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/hightouch',
                component: ComponentCreator('/integrations/data-connectors/hightouch', 'cb7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/mixpanel',
                component: ComponentCreator('/integrations/data-connectors/mixpanel', '743'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/mparticle',
                component: ComponentCreator('/integrations/data-connectors/mparticle', 'd3a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/revenuecat',
                component: ComponentCreator('/integrations/data-connectors/revenuecat', '738'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/rudderstack',
                component: ComponentCreator('/integrations/data-connectors/rudderstack', 'c0c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/segment',
                component: ComponentCreator('/integrations/data-connectors/segment', 'fcd'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-connectors/stitch',
                component: ComponentCreator('/integrations/data-connectors/stitch', '988'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-exports/overview',
                component: ComponentCreator('/integrations/data-exports/overview', 'f9f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-imports/azure-upload',
                component: ComponentCreator('/integrations/data-imports/azure-upload', '6e0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-imports/bigquery',
                component: ComponentCreator('/integrations/data-imports/bigquery', '463'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-imports/overview',
                component: ComponentCreator('/integrations/data-imports/overview', 'be7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-imports/redshift',
                component: ComponentCreator('/integrations/data-imports/redshift', 'c47'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/data-imports/snowflake',
                component: ComponentCreator('/integrations/data-imports/snowflake', '1cc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/datadog',
                component: ComponentCreator('/integrations/datadog', '772'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/event_filtering',
                component: ComponentCreator('/integrations/event_filtering', '51f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/event_webhook',
                component: ComponentCreator('/integrations/event_webhook', '1fc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/fastly',
                component: ComponentCreator('/integrations/fastly', '7e7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/github_code_references',
                component: ComponentCreator('/integrations/github_code_references', 'e8d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/gitlab_code_references',
                component: ComponentCreator('/integrations/gitlab_code_references', 'dbf'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/gtm',
                component: ComponentCreator('/integrations/gtm', '4fb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/introduction',
                component: ComponentCreator('/integrations/introduction', '17b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/jira',
                component: ComponentCreator('/integrations/jira', 'd75'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/mcp',
                component: ComponentCreator('/integrations/mcp', 'b01'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/openai',
                component: ComponentCreator('/integrations/openai', 'f89'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/pulumi',
                component: ComponentCreator('/integrations/pulumi', 'b4a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/slack',
                component: ComponentCreator('/integrations/slack', '5b8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/snippets/integration_event_formats',
                component: ComponentCreator('/integrations/snippets/integration_event_formats', 'f58'),
                exact: true
              },
              {
                path: '/integrations/snippets/integration_statsig_env_format',
                component: ComponentCreator('/integrations/snippets/integration_statsig_env_format', 'cf7'),
                exact: true
              },
              {
                path: '/integrations/snippets/stitch_event_formats',
                component: ComponentCreator('/integrations/snippets/stitch_event_formats', '464'),
                exact: true
              },
              {
                path: '/integrations/terraform/introduction',
                component: ComponentCreator('/integrations/terraform/introduction', 'f79'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/terraform/terraform_experiment',
                component: ComponentCreator('/integrations/terraform/terraform_experiment', '174'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/terraform/terraform_gate',
                component: ComponentCreator('/integrations/terraform/terraform_gate', 'dac'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/triggers/datadog',
                component: ComponentCreator('/integrations/triggers/datadog', '715'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/vercel',
                component: ComponentCreator('/integrations/vercel', '279'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/integrations/workersai',
                component: ComponentCreator('/integrations/workersai', '1d5'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/layers',
                component: ComponentCreator('/layers', '1ed'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/messages/healthhub',
                component: ComponentCreator('/messages/healthhub', '55a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/messages/serverSDKConnection',
                component: ComponentCreator('/messages/serverSDKConnection', 'aa6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics',
                component: ComponentCreator('/metrics', 'd5f'),
                exact: true
              },
              {
                path: '/metrics/101',
                component: ComponentCreator('/metrics/101', '96b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/201',
                component: ComponentCreator('/metrics/201', '75c'),
                exact: true
              },
              {
                path: '/metrics/301',
                component: ComponentCreator('/metrics/301', '891'),
                exact: true
              },
              {
                path: '/metrics/archiving-metrics',
                component: ComponentCreator('/metrics/archiving-metrics', 'f89'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/autogenerated',
                component: ComponentCreator('/metrics/autogenerated', '0e2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/console',
                component: ComponentCreator('/metrics/console', 'df0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/count_distinct_metric_type',
                component: ComponentCreator('/metrics/count_distinct_metric_type', '8c4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/create',
                component: ComponentCreator('/metrics/create', '8ea'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/create-metric-tags',
                component: ComponentCreator('/metrics/create-metric-tags', '954'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/create-user-flows',
                component: ComponentCreator('/metrics/create-user-flows', '147'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/create-user-funnels',
                component: ComponentCreator('/metrics/create-user-funnels', 'ca3'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/custom-dau',
                component: ComponentCreator('/metrics/custom-dau', '050'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/custom-metrics',
                component: ComponentCreator('/metrics/custom-metrics', '5fb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/deprecate-event-dau',
                component: ComponentCreator('/metrics/deprecate-event-dau', '960'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/different-id',
                component: ComponentCreator('/metrics/different-id', '29e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/metrics/directionality',
                component: ComponentCreator('/metrics/directionality', '76a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/health-checks',
                component: ComponentCreator('/metrics/health-checks', '83c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/hierarchical-id',
                component: ComponentCreator('/metrics/hierarchical-id', '133'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/how-metrics-work',
                component: ComponentCreator('/metrics/how-metrics-work', '103'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/ingest',
                component: ComponentCreator('/metrics/ingest', '497'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/local-metrics',
                component: ComponentCreator('/metrics/local-metrics', '86c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/metric-dimensions',
                component: ComponentCreator('/metrics/metric-dimensions', 'c94'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/metrics-from-events',
                component: ComponentCreator('/metrics/metrics-from-events', '242'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/precomputed-metrics',
                component: ComponentCreator('/metrics/precomputed-metrics', '6da'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/pulse',
                component: ComponentCreator('/metrics/pulse', '3e8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/raw-events',
                component: ComponentCreator('/metrics/raw-events', '3ba'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/rollout-alerts',
                component: ComponentCreator('/metrics/rollout-alerts', 'f97'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/user',
                component: ComponentCreator('/metrics/user', '77b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/user-property',
                component: ComponentCreator('/metrics/user-property', 'ef9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/metrics/verified',
                component: ComponentCreator('/metrics/verified', '044'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/multi-armed-bandit',
                component: ComponentCreator('/multi-armed-bandit', '2d7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/org-admin/experiment_policy',
                component: ComponentCreator('/org-admin/experiment_policy', 'deb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/org-admin/gates_policy',
                component: ComponentCreator('/org-admin/gates_policy', '676'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/org-admin/organization_policies',
                component: ComponentCreator('/org-admin/organization_policies', '523'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/alerts',
                component: ComponentCreator('/product-analytics/alerts', '52a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/alerts/rollout_alerts',
                component: ComponentCreator('/product-analytics/alerts/rollout_alerts', '35c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/alerts/topline_alerts',
                component: ComponentCreator('/product-analytics/alerts/topline_alerts', '763'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/dashboards',
                component: ComponentCreator('/product-analytics/dashboards', '83c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/distribution',
                component: ComponentCreator('/product-analytics/distribution', 'f02'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/drilldown',
                component: ComponentCreator('/product-analytics/drilldown', '9b1'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/funnels',
                component: ComponentCreator('/product-analytics/funnels', '726'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/overview',
                component: ComponentCreator('/product-analytics/overview', '2e2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/retention',
                component: ComponentCreator('/product-analytics/retention', 'b63'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/product-analytics/user-journeys',
                component: ComponentCreator('/product-analytics/user-journeys', 'be7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/access-whn',
                component: ComponentCreator('/pulse/access-whn', 'b94'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/best-faq',
                component: ComponentCreator('/pulse/best-faq', '484'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/best-faq-whn',
                component: ComponentCreator('/pulse/best-faq-whn', '3d1'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/best-practices',
                component: ComponentCreator('/pulse/best-practices', '5ee'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/best-practices-whn',
                component: ComponentCreator('/pulse/best-practices-whn', 'f53'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/custom-queries',
                component: ComponentCreator('/pulse/custom-queries', '917'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/custom-queries-whn',
                component: ComponentCreator('/pulse/custom-queries-whn', 'cd9'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/drill-down',
                component: ComponentCreator('/pulse/drill-down', '93e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/drill-down-whn',
                component: ComponentCreator('/pulse/drill-down-whn', '581'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/export',
                component: ComponentCreator('/pulse/export', 'bc5'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/participating-units',
                component: ComponentCreator('/pulse/participating-units', 'e71'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/participating-units-whn',
                component: ComponentCreator('/pulse/participating-units-whn', 'd6c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/read-pulse',
                component: ComponentCreator('/pulse/read-pulse', '691'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/pulse/read-pulse-whn',
                component: ComponentCreator('/pulse/read-pulse-whn', 'a2c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/pulse/user-properties',
                component: ComponentCreator('/pulse/user-properties', '9d0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/quickstarts/feature-gates',
                component: ComponentCreator('/quickstarts/feature-gates', 'a2a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/release-pipeline',
                component: ComponentCreator('/release-pipeline', 'bc6'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/release-pipeline/actions',
                component: ComponentCreator('/release-pipeline/actions', '4d8'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/release-pipeline/create-and-manage',
                component: ComponentCreator('/release-pipeline/create-and-manage', 'eca'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/release-pipeline/trigger',
                component: ComponentCreator('/release-pipeline/trigger', 'e67'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/reliability-faqs',
                component: ComponentCreator('/reliability-faqs', '2fd'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/safeguards/create',
                component: ComponentCreator('/safeguards/create', 'a00'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/safeguards/manage',
                component: ComponentCreator('/safeguards/manage', '4da'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/safeguards/overview',
                component: ComponentCreator('/safeguards/overview', 'e38'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/sdk_monitoring',
                component: ComponentCreator('/sdk_monitoring', 'a09'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/sdk-keys/api-keys',
                component: ComponentCreator('/sdk-keys/api-keys', '49d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/sdk-keys/target-apps',
                component: ComponentCreator('/sdk-keys/target-apps', '556'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdk/debugging',
                component: ComponentCreator('/sdk/debugging', '3b6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/array-operators',
                component: ComponentCreator('/sdks/array-operators', 'ca6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/build-with-llms',
                component: ComponentCreator('/sdks/build-with-llms', '467'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/client-vs-server',
                component: ComponentCreator('/sdks/client-vs-server', '1a6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/getting-started',
                component: ComponentCreator('/sdks/getting-started', '3b5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/group-name-breaking-change-02-2024',
                component: ComponentCreator('/sdks/group-name-breaking-change-02-2024', '690'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/sdks/how-evaluation-works',
                component: ComponentCreator('/sdks/how-evaluation-works', '1a2'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/identify-users',
                component: ComponentCreator('/sdks/identify-users', '34a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/pagination-params-breaking-change-08-2024',
                component: ComponentCreator('/sdks/pagination-params-breaking-change-08-2024', '205'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/sdks/quickstart',
                component: ComponentCreator('/sdks/quickstart', 'c13'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/sdks/support',
                component: ComponentCreator('/sdks/support', '048'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/segments',
                component: ComponentCreator('/segments', 'c47'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/segments/add-id-list',
                component: ComponentCreator('/segments/add-id-list', 'd70'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/segments/add-rule',
                component: ComponentCreator('/segments/add-rule', '7c5'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/segments/create-new',
                component: ComponentCreator('/segments/create-new', 'a51'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/segments/implement',
                component: ComponentCreator('/segments/implement', '510'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server-core/',
                component: ComponentCreator('/server-core/', '99f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/dotnetCoreSDK',
                component: ComponentCreator('/server-core/dotnetCoreSDK', 'e7b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/elixir-core',
                component: ComponentCreator('/server-core/elixir-core', '509'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/go-core',
                component: ComponentCreator('/server-core/go-core', 'f74'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/go/migration',
                component: ComponentCreator('/server-core/go/migration', '39c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/java-core',
                component: ComponentCreator('/server-core/java-core', '841'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/java/migration',
                component: ComponentCreator('/server-core/java/migration', '1b8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/legacy-sdks',
                component: ComponentCreator('/server-core/legacy-sdks', 'b9f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/MigrationGuideTemplates/',
                component: ComponentCreator('/server-core/MigrationGuideTemplates/', 'ac0'),
                exact: true
              },
              {
                path: '/server-core/node-core',
                component: ComponentCreator('/server-core/node-core', '48a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/php-core',
                component: ComponentCreator('/server-core/php-core', '006'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/python-core',
                component: ComponentCreator('/server-core/python-core', 'fcb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/python/migration-guide/',
                component: ComponentCreator('/server-core/python/migration-guide/', '7d6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/rust-core',
                component: ComponentCreator('/server-core/rust-core', '08f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server-core/Templates/',
                component: ComponentCreator('/server-core/Templates/', '05e'),
                exact: true
              },
              {
                path: '/server/concepts/all-assignments',
                component: ComponentCreator('/server/concepts/all-assignments', '27f'),
                exact: true
              },
              {
                path: '/server/concepts/cloudflare',
                component: ComponentCreator('/server/concepts/cloudflare', '13e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/concepts/data_store',
                component: ComponentCreator('/server/concepts/data_store', '43f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/concepts/forward_proxy',
                component: ComponentCreator('/server/concepts/forward_proxy', 'ccb'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/concepts/open_telemetry',
                component: ComponentCreator('/server/concepts/open_telemetry', '4c0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/concepts/persistent_assignment',
                component: ComponentCreator('/server/concepts/persistent_assignment', 'b40'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/cppSDK',
                component: ComponentCreator('/server/cppSDK', '349'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/deprecation-notices',
                component: ComponentCreator('/server/deprecation-notices', 'f47'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/dotnetSDK',
                component: ComponentCreator('/server/dotnetSDK', '044'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/erlangSDK',
                component: ComponentCreator('/server/erlangSDK', '104'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/golangSDK',
                component: ComponentCreator('/server/golangSDK', 'efd'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/introduction',
                component: ComponentCreator('/server/introduction', '645'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/javaSdk',
                component: ComponentCreator('/server/javaSdk', '2f5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/nodejsServerSDK',
                component: ComponentCreator('/server/nodejsServerSDK', '17b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/nodejsServerSDK/upgrade_guide/v5ToV6',
                component: ComponentCreator('/server/nodejsServerSDK/upgrade_guide/v5ToV6', 'aab'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/phpCoreSDK',
                component: ComponentCreator('/server/phpCoreSDK', '755'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/server/phpSDK',
                component: ComponentCreator('/server/phpSDK', '81d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/pythonSDK',
                component: ComponentCreator('/server/pythonSDK', '61b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/rubySDK',
                component: ComponentCreator('/server/rubySDK', 'bdd'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/rustSDK',
                component: ComponentCreator('/server/rustSDK', 'bc3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/server/Templates/',
                component: ComponentCreator('/server/Templates/', '44d'),
                exact: true
              },
              {
                path: '/session-replay/cli-session-replay',
                component: ComponentCreator('/session-replay/cli-session-replay', '3ee'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/session-replay/configure',
                component: ComponentCreator('/session-replay/configure', '4e2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/session-replay/install',
                component: ComponentCreator('/session-replay/install', '272'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/session-replay/overview',
                component: ComponentCreator('/session-replay/overview', '0a7'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/session-replay/watch',
                component: ComponentCreator('/session-replay/watch', '1cc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine',
                component: ComponentCreator('/stats-engine', 'b6b'),
                exact: true
              },
              {
                path: '/stats-engine/confidence-intervals',
                component: ComponentCreator('/stats-engine/confidence-intervals', '99e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/confidence-intervals-whn',
                component: ComponentCreator('/stats-engine/confidence-intervals-whn', 'b20'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/benjamini–hochberg-procedure',
                component: ComponentCreator('/stats-engine/methodologies/benjamini–hochberg-procedure', '6e1'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/benjamini–hochberg-procedure-whn',
                component: ComponentCreator('/stats-engine/methodologies/benjamini–hochberg-procedure-whn', '294'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/bonferroni-correction',
                component: ComponentCreator('/stats-engine/methodologies/bonferroni-correction', 'ca9'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/bonferroni-correction-whn',
                component: ComponentCreator('/stats-engine/methodologies/bonferroni-correction-whn', 'b3c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/cuped',
                component: ComponentCreator('/stats-engine/methodologies/cuped', 'bf4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/cuped-whn',
                component: ComponentCreator('/stats-engine/methodologies/cuped-whn', '80d'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/delta-method',
                component: ComponentCreator('/stats-engine/methodologies/delta-method', 'e53'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/delta-method-whn',
                component: ComponentCreator('/stats-engine/methodologies/delta-method-whn', '5f4'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/fieller-intervals',
                component: ComponentCreator('/stats-engine/methodologies/fieller-intervals', '901'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/fieller-intervals-whn',
                component: ComponentCreator('/stats-engine/methodologies/fieller-intervals-whn', 'e40'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/one-sided-test-whn',
                component: ComponentCreator('/stats-engine/methodologies/one-sided-test-whn', 'af3'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/srm-checks',
                component: ComponentCreator('/stats-engine/methodologies/srm-checks', '414'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/srm-checks-whn',
                component: ComponentCreator('/stats-engine/methodologies/srm-checks-whn', '205'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/methodologies/winsorization',
                component: ComponentCreator('/stats-engine/methodologies/winsorization', 'a87'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/methodologies/winsorization-whn',
                component: ComponentCreator('/stats-engine/methodologies/winsorization-whn', '75d'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/metric-deltas',
                component: ComponentCreator('/stats-engine/metric-deltas', 'a7c'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/metric-deltas-whn',
                component: ComponentCreator('/stats-engine/metric-deltas-whn', 'bb3'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/one-sample-test',
                component: ComponentCreator('/stats-engine/one-sample-test', '9d4'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/one-sided-test',
                component: ComponentCreator('/stats-engine/one-sided-test', '91b'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/p-value',
                component: ComponentCreator('/stats-engine/p-value', 'e75'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/p-value-whn',
                component: ComponentCreator('/stats-engine/p-value-whn', 'def'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/pre-experiment-bias',
                component: ComponentCreator('/stats-engine/pre-experiment-bias', '3fa'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/pre-experiment-bias-whn',
                component: ComponentCreator('/stats-engine/pre-experiment-bias-whn', 'bf8'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/topline-impact',
                component: ComponentCreator('/stats-engine/topline-impact', '3ac'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/topline-impact-whn',
                component: ComponentCreator('/stats-engine/topline-impact-whn', '71b'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/variance',
                component: ComponentCreator('/stats-engine/variance', '72d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/variance_reduction',
                component: ComponentCreator('/stats-engine/variance_reduction', '045'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/stats-engine/variance_reduction-whn',
                component: ComponentCreator('/stats-engine/variance_reduction-whn', 'e6f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/stats-engine/variance-whn',
                component: ComponentCreator('/stats-engine/variance-whn', '46e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/assignment-sources',
                component: ComponentCreator('/statsig-warehouse-native/configuration/assignment-sources', 'a76'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/console-api',
                component: ComponentCreator('/statsig-warehouse-native/configuration/console-api', '579'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/data-and-semantic-layer',
                component: ComponentCreator('/statsig-warehouse-native/configuration/data-and-semantic-layer', 'e13'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/dimensional-analysis',
                component: ComponentCreator('/statsig-warehouse-native/configuration/dimensional-analysis', '834'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/entity-properties',
                component: ComponentCreator('/statsig-warehouse-native/configuration/entity-properties', '9ef'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/metric-examples',
                component: ComponentCreator('/statsig-warehouse-native/configuration/metric-examples', 'a3d'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/metric-sources',
                component: ComponentCreator('/statsig-warehouse-native/configuration/metric-sources', '411'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/metrics',
                component: ComponentCreator('/statsig-warehouse-native/configuration/metrics', 'c16'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/qualifying-events',
                component: ComponentCreator('/statsig-warehouse-native/configuration/qualifying-events', '6e5'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/query-tools',
                component: ComponentCreator('/statsig-warehouse-native/configuration/query-tools', 'a67'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/semantic-layer-sync',
                component: ComponentCreator('/statsig-warehouse-native/configuration/semantic-layer-sync', 'a11'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/configuration/tags-and-teams',
                component: ComponentCreator('/statsig-warehouse-native/configuration/tags-and-teams', '464'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/athena',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/athena', '5d0'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/bigquery',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/bigquery', 'ca1'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/clickhouse',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/clickhouse', 'ae0'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/databricks',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/databricks', 'e27'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/fabric',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/fabric', 'b56'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/other',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/other', '4ed'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/redshift',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/redshift', '917'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads', '440'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/snowflake',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/snowflake', '66b'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/connecting-your-warehouse/trino',
                component: ComponentCreator('/statsig-warehouse-native/connecting-your-warehouse/trino', 'd3e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/data-privacy',
                component: ComponentCreator('/statsig-warehouse-native/data-privacy', '00a'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/data-sources',
                component: ComponentCreator('/statsig-warehouse-native/data-sources', '01b'),
                exact: true
              },
              {
                path: '/statsig-warehouse-native/features/autotune',
                component: ComponentCreator('/statsig-warehouse-native/features/autotune', '041'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/cohort-metrics',
                component: ComponentCreator('/statsig-warehouse-native/features/cohort-metrics', 'b7a'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/configure-an-experiment',
                component: ComponentCreator('/statsig-warehouse-native/features/configure-an-experiment', '7fe'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/early-diagnostics',
                component: ComponentCreator('/statsig-warehouse-native/features/early-diagnostics', 'eb6'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/entity-properties',
                component: ComponentCreator('/statsig-warehouse-native/features/entity-properties', 'cb0'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/features/experiment-options',
                component: ComponentCreator('/statsig-warehouse-native/features/experiment-options', 'f68'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/filtering-exposures',
                component: ComponentCreator('/statsig-warehouse-native/features/filtering-exposures', 'cec'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/full-reloads',
                component: ComponentCreator('/statsig-warehouse-native/features/full-reloads', 'e84'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/funnel-metrics',
                component: ComponentCreator('/statsig-warehouse-native/features/funnel-metrics', 'c87'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/features/id-resolution',
                component: ComponentCreator('/statsig-warehouse-native/features/id-resolution', 'f4f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/incremental-reloads',
                component: ComponentCreator('/statsig-warehouse-native/features/incremental-reloads', '14f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/metric-reloads',
                component: ComponentCreator('/statsig-warehouse-native/features/metric-reloads', '072'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/mex-on-warehouse-native',
                component: ComponentCreator('/statsig-warehouse-native/features/mex-on-warehouse-native', '53e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/monitor-an-experiment',
                component: ComponentCreator('/statsig-warehouse-native/features/monitor-an-experiment', 'd7d'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/other-features',
                component: ComponentCreator('/statsig-warehouse-native/features/other-features', '935'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/power-analysis',
                component: ComponentCreator('/statsig-warehouse-native/features/power-analysis', '374'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/reloads',
                component: ComponentCreator('/statsig-warehouse-native/features/reloads', '66f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/reports',
                component: ComponentCreator('/statsig-warehouse-native/features/reports', '867'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/roles-and-access',
                component: ComponentCreator('/statsig-warehouse-native/features/roles-and-access', '726'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/statistics',
                component: ComponentCreator('/statsig-warehouse-native/features/statistics', 'cda'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/targeting',
                component: ComponentCreator('/statsig-warehouse-native/features/targeting', '643'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/turbo',
                component: ComponentCreator('/statsig-warehouse-native/features/turbo', 'b7c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/types-of-experiments',
                component: ComponentCreator('/statsig-warehouse-native/features/types-of-experiments', 'e95'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/understanding-experiments',
                component: ComponentCreator('/statsig-warehouse-native/features/understanding-experiments', '456'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/features/use-case',
                component: ComponentCreator('/statsig-warehouse-native/features/use-case', '76b'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/AATest',
                component: ComponentCreator('/statsig-warehouse-native/guides/AATest', 'daa'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/best-practices',
                component: ComponentCreator('/statsig-warehouse-native/guides/best-practices', '96c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/checklist',
                component: ComponentCreator('/statsig-warehouse-native/guides/checklist', '12c'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/cloud2whn',
                component: ComponentCreator('/statsig-warehouse-native/guides/cloud2whn', '628'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/guides/connect',
                component: ComponentCreator('/statsig-warehouse-native/guides/connect', '56d'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/costs',
                component: ComponentCreator('/statsig-warehouse-native/guides/costs', 'e9e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/debugging',
                component: ComponentCreator('/statsig-warehouse-native/guides/debugging', '1dd'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/dummy_evaluation',
                component: ComponentCreator('/statsig-warehouse-native/guides/dummy_evaluation', '5ff'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/email-experiments',
                component: ComponentCreator('/statsig-warehouse-native/guides/email-experiments', '196'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/experiments',
                component: ComponentCreator('/statsig-warehouse-native/guides/experiments', '220'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/guides/forwarded-data',
                component: ComponentCreator('/statsig-warehouse-native/guides/forwarded-data', '5fa'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/metric_sources',
                component: ComponentCreator('/statsig-warehouse-native/guides/metric_sources', '8c9'),
                exact: true
              },
              {
                path: '/statsig-warehouse-native/guides/metrics',
                component: ComponentCreator('/statsig-warehouse-native/guides/metrics', '46f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/guides/pulse',
                component: ComponentCreator('/statsig-warehouse-native/guides/pulse', 'f65'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/statsig-warehouse-native/guides/quick-start',
                component: ComponentCreator('/statsig-warehouse-native/guides/quick-start', '274'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/reading_pulse',
                component: ComponentCreator('/statsig-warehouse-native/guides/reading_pulse', '8bd'),
                exact: true
              },
              {
                path: '/statsig-warehouse-native/guides/running_a_poc',
                component: ComponentCreator('/statsig-warehouse-native/guides/running_a_poc', 'e50'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/scaling',
                component: ComponentCreator('/statsig-warehouse-native/guides/scaling', 'c47'),
                exact: true
              },
              {
                path: '/statsig-warehouse-native/guides/sdks',
                component: ComponentCreator('/statsig-warehouse-native/guides/sdks', '95f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/guides/sql',
                component: ComponentCreator('/statsig-warehouse-native/guides/sql', '5eb'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/introduction',
                component: ComponentCreator('/statsig-warehouse-native/introduction', '07a'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/count',
                component: ComponentCreator('/statsig-warehouse-native/metrics/count', '696'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/count-distinct',
                component: ComponentCreator('/statsig-warehouse-native/metrics/count-distinct', '51e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/funnel',
                component: ComponentCreator('/statsig-warehouse-native/metrics/funnel', '82b'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/latest-value',
                component: ComponentCreator('/statsig-warehouse-native/metrics/latest-value', '1cd'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/log',
                component: ComponentCreator('/statsig-warehouse-native/metrics/log', 'b52'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/max-min',
                component: ComponentCreator('/statsig-warehouse-native/metrics/max-min', 'f1e'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/mean',
                component: ComponentCreator('/statsig-warehouse-native/metrics/mean', 'ac9'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/normalized-metrics',
                component: ComponentCreator('/statsig-warehouse-native/metrics/normalized-metrics', '5e5'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/percentile',
                component: ComponentCreator('/statsig-warehouse-native/metrics/percentile', 'e70'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/ratio',
                component: ComponentCreator('/statsig-warehouse-native/metrics/ratio', '052'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/retention',
                component: ComponentCreator('/statsig-warehouse-native/metrics/retention', '9e4'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/sum',
                component: ComponentCreator('/statsig-warehouse-native/metrics/sum', 'aae'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/unit-count-latest',
                component: ComponentCreator('/statsig-warehouse-native/metrics/unit-count-latest', '7c8'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/unit-count-once',
                component: ComponentCreator('/statsig-warehouse-native/metrics/unit-count-once', '19f'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/unit-count-rate',
                component: ComponentCreator('/statsig-warehouse-native/metrics/unit-count-rate', '269'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/metrics/unit-count-window',
                component: ComponentCreator('/statsig-warehouse-native/metrics/unit-count-window', '115'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/native-vs-cloud',
                component: ComponentCreator('/statsig-warehouse-native/native-vs-cloud', 'c13'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/pipeline-overview',
                component: ComponentCreator('/statsig-warehouse-native/pipeline-overview', 'f73'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsig-warehouse-native/warehouse-management/storage',
                component: ComponentCreator('/statsig-warehouse-native/warehouse-management/storage', '367'),
                exact: true,
                sidebar: "warehouse"
              },
              {
                path: '/statsigcli',
                component: ComponentCreator('/statsigcli', '8f1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/statsigcli/commands',
                component: ComponentCreator('/statsigcli/commands', '6c1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/statsigcli/gate-management',
                component: ComponentCreator('/statsigcli/gate-management', 'c07'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/templates/templates',
                component: ComponentCreator('/templates/templates', 'a3f'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/triggers/introduction',
                component: ComponentCreator('/triggers/introduction', 'b8a'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/understanding-platform',
                component: ComponentCreator('/understanding-platform', 'e6e'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/users',
                component: ComponentCreator('/users', '0dc'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/users/profiles',
                component: ComponentCreator('/users/profiles', 'bc2'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/using-bandits',
                component: ComponentCreator('/using-bandits', 'dde'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/webanalytics/autocapture',
                component: ComponentCreator('/webanalytics/autocapture', '2ba'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/webanalytics/overview',
                component: ComponentCreator('/webanalytics/overview', '41d'),
                exact: true,
                sidebar: "cloud"
              },
              {
                path: '/',
                component: ComponentCreator('/', '0d9'),
                exact: true,
                sidebar: "cloud"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
