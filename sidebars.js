module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Statsig Console',
      items: [
        'console/overview',
        'console/featureGates',
        'console/dynamicConfig',
        'console/pulse',
      ]
    },
    {
      type: 'category',
      label: 'Client SDKs',
      items: [
        'client/jsClientSDK',
        'client/reactNativeSDK',
        'client/reactNativeExpoSDK',
        'client/swiftClientSDK',
        'client/objcClientSDK',
        'client/androidClientSDK',
      ]
    },
    {
      type: 'category',
      label: 'Server SDKs',
      items: [
        'server/nodejsServerSDK'
      ]
    },
    'restful-api',
    'first-feature'
  ],
};

