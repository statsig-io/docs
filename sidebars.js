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
      ],
    },
    {
      'Statsig Console': [
        'console/overview',
        {
          'Feature Gates': [
            'console/featureGates/introduction',
            'console/featureGates/rules',
          ],
        },
        'console/dynamicConfig',
        'console/pulse',
        'console/experimentsPlus',
        'console/holdouts',
        'console/metrics',
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
      ],
    },
    'http-api',
    {
      'Integrations': [
        'integrations/data-connectors'
      ]
    }
  ],
};
