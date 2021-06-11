module.exports = {
  docs: [
    'getting-started',
    {
      'Walkthrough Guides': [
        'first-feature',
        'first-dynamic-config',
        'first-experiment',
        'first-holdout',
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
      ],
    },
    {
      'Client SDKs': [
        'client/jsClientSDK',
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
      ],
    },
    'http-api',
  ],
};
