module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Statsig Developer Docs',
      items: [
        'getting-started',
        {
          type: 'category',
          label: 'Client SDKs',
          items: [
            'client/jsClientSDK',
            'client/swiftClientSDK',
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
      ],
    },
  ],
};

