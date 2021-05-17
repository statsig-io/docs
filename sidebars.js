module.exports = {
  docs: [
    'getting-started',
    'first-feature',
    'first-dynamic-config',
    {
      'Statsig Console': [
        'console/overview',
        {
          'Feature Gates': [
            'console/featureGates/introduction',
            'console/featureGates/rules'
          ],
        },
        'console/dynamicConfig',
        'console/pulse',
      ]
    },
    {
      'Client SDKs': [
        'client/jsClientSDK',
        'client/reactNativeSDK',
        'client/reactNativeExpoSDK',
        'client/swiftClientSDK',
        'client/objcClientSDK',
        'client/androidClientSDK',
      ]
    },
    {
      'Server SDKs': [
        'server/nodejsServerSDK'
      ]
    },
    'restful-api',
  ],
};

