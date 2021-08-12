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
      'Statsig Console': [
        'console/overview',
        {
          'Access Management': [
            'console/accessManagement/overview',
            'console/accessManagement/sso',
          ]
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
      Integrations: ['integrations/data-connectors'],
    },
  ],
};
