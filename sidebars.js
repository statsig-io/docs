module.exports = {
  docs: [
    'getting-started',
    {
      'Walkthrough Guides': [
        'guides/first-feature',
        'guides/logging-events',
        'guides/first-dynamic-config',
        'guides/first-experiment',
        'guides/first-device-level-experiment',
        'guides/experiment-on-custom-id-types',
        'guides/first-holdout',
        'guides/using-environments',
        'guides/first-segment',
        'guides/abn-tests',
        'guides/private-attributes',
        'guides/synchronized-launch',
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
            'feature-gates/conditions',
            'feature-gates/view-exposures',
            'feature-gates/best-practices',
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
            'experiments-plus/experimentation/choosing-randomization-unit',
          ],
        },
      ],
    },
    {
      Pulse: ['pulse/introduction'],
    },
    {
      Autotune: ['autotune/introduction'],
    },
    {
      Users: ['users/introduction'],
    },
    {
      Holdouts: ['holdouts/introduction'],
    },
    {
      Ultrasound: ['ultrasound/introduction'],
    },
    {
      Metrics: [
        'metrics/introduction',
        'metrics/create',
        'metrics/user',
        'metrics/console',
        'metrics/create-user-flows',
      ],
    },
    {
      'Client SDKs': [
        { Concepts: ['client/concepts/user'] },
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
        { Concepts: ['server/concepts/user'] },
        'server/nodejsServerSDK',
        'server/javaSdk',
        'server/dotnetSDK',
        'server/rubySDK',
        'server/golangSDK',
        'server/pythonSDK',
        'server/phpSDK',
      ],
    },
    'http-api',
    {
      'Access Management': [
        'access-management/projects',
        'access-management/organizations',
        {
          'Single Sign-On': [
            'access-management/sso/overview',
            'access-management/sso/okta_sso',
          ],
        },
      ],
    },
    {
      Integrations: [
        {
          'Data Connectors': [
            'integrations/data-connectors',
            'integrations/data-connectors/heap',
            'integrations/data-connectors/revenuecat',
            'integrations/data-connectors/segment',
          ],
        },
        'integrations/event_webhook',
        'integrations/jira',
        'integrations/vscode',
      ],
    },
  ],
};
