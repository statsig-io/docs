module.exports = {
  docs: [
    'getting-started',
    {
      'Walkthrough Guides': [
        'guides/first-feature',
        'guides/logging-events',
        'guides/first-dynamic-config',
        'guides/first-experiment',
        'guides/first-holdout',
        'guides/using-environments',
        'guides/first-segment',
        'guides/abn-tests',
      ],
    },
    {
      'Feature Gates': [
        'feature-gates/introduction',
        {
          'Working With': [
            'feature-gates/working-with',
            'feature-gates/create-new',
            'feature-gates/add-rule',
            'feature-gates/test-gate',
            {
              Implement: [
                'feature-gates/implement',
                'feature-gates/implement/client',
                'feature-gates/implement/server',
                'feature-gates/implement/http-api',
              ],
            },
            'feature-gates/view-exposures',
          ],
        },
      ],
    },
    {
      'Dynamic Config': [
        'dynamic-config/introduction',
        {
          'Working With': [
            'dynamic-config/working-with',
            'dynamic-config/create-new',
            'dynamic-config/add-rule',
            'dynamic-config/implement',
          ],
        },
      ],
    },
    {
      Segments: [
        'segments/introduction',
        {
          'Working With': [
            'segments/working-with',
            'segments/create-new',
            'segments/add-rule',
            'segments/use-segment',
          ],
        },
      ],
    },
    {
      'Experiments+': [
        'experiments-plus/introduction',
        {
          'Working With': [
            'experiments-plus/working-with',
            'experiments-plus/create-new',
            'experiments-plus/implement',
            'experiments-plus/monitor',
          ],
        },
        {
          Experimentation: [
            'experiments-plus/experimentation/why-experiment',
            'experiments-plus/experimentation/scenarios',
            'experiments-plus/experimentation/best-practices',
            'experiments-plus/experimentation/common-terms',
          ],
        },
      ],
    },
    {
      'Statsig Console': [
        'console/overview',
        {
          'Access Management': [
            'console/accessManagement/overview',
            {
              'Single Sign-On': [
                'console/accessManagement/sso/overview',
                'console/accessManagement/sso/okta_sso',
              ],
            },
          ],
        },
        {
          'Feature Gates': [
            'console/featureGates/introduction',
            'console/featureGates/rules',
          ],
        },
        'console/dynamicConfig',
        'console/segments',
        'console/pulse',
        'console/experimentsPlus',
        'console/holdouts',
        'console/metrics',
        'console/users',
        'console/ultrasound',
        'console/autotune',
      ],
    },
    {
      'Client SDKs': [
        'client/jsClientSDK',
        'client/reactSDK',
        'client/reactNativeSDK',
        'client/reactNativeExpoSDK',
        'client/iosClientSDK',
        'client/androidClientSDK',
        'client/dotnetSDK',
      ],
    },
    {
      'Server SDKs': [
        'server/nodejsServerSDK',
        'server/javaSdk',
        'server/dotnetSDK',
        'server/rubySDK',
        'server/golangSDK',
        'server/pythonSDK',
      ],
    },
    'http-api',
    {
      Integrations: [
        {
          'Data Connectors': [
            'integrations/data-connectors',
            'integrations/data-connectors/heap',
            'integrations/data-connectors/revenuecat',
          ],
        },
        'integrations/event_webhook',
        'integrations/vscode'
      ],
    },
  ],
};
